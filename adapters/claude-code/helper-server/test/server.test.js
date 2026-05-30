'use strict';

const assert = require('node:assert');
const { test } = require('node:test');
const http = require('node:http');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

// startServer calls canUseLocalWindow() against process.env.
// Strip any CI/remote env vars that would block the server from starting.
const BLOCKING_VARS = ['CI', 'CODESPACES', 'REMOTE_SANDBOX', 'SSH_CONNECTION', 'SSH_TTY'];
const saved = {};
for (const v of BLOCKING_VARS) {
  if (v in process.env) {
    saved[v] = process.env[v];
    delete process.env[v];
  }
}

const { startServer } = require('../server.js');

// Restore after require so we do not leak the change further.
for (const [k, v] of Object.entries(saved)) {
  process.env[k] = v;
}

// Helper: make a raw HTTP request and collect the response.
function request({ method, url, body, headers = {} }) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const opts = {
      hostname: u.hostname,
      port: Number(u.port),
      path: u.pathname + u.search,
      method,
      headers
    };
    const req = http.request(opts, (res) => {
      let data = '';
      res.on('data', (c) => { data += c; });
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

test('server binds to 127.0.0.1 (loopback)', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'council-srv-'));
  const { url, server } = await startServer(dir);
  try {
    assert.ok(url.startsWith('http://127.0.0.1:'), `url should start with http://127.0.0.1: but got ${url}`);
  } finally {
    server.close();
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test('GET with missing token returns 403', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'council-srv-'));
  const { port, server } = await startServer(dir);
  try {
    const res = await request({ method: 'GET', url: `http://127.0.0.1:${port}/` });
    assert.strictEqual(res.status, 403);
  } finally {
    server.close();
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test('GET with wrong token returns 403', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'council-srv-'));
  const { port, server } = await startServer(dir);
  try {
    const res = await request({ method: 'GET', url: `http://127.0.0.1:${port}/?token=wrongtoken` });
    assert.strictEqual(res.status, 403);
  } finally {
    server.close();
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test('POST with missing token returns 403', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'council-srv-'));
  const { port, server } = await startServer(dir);
  try {
    const payload = JSON.stringify({ theme: 'natural' });
    const res = await request({
      method: 'POST',
      url: `http://127.0.0.1:${port}/save`,
      body: payload,
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) }
    });
    assert.strictEqual(res.status, 403);
  } finally {
    server.close();
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test('POST with correct token writes overlay files and returns 200', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'council-srv-'));
  const { port, token, server } = await startServer(dir);

  // Wait for server.close() triggered by the POST handler.
  const closedP = new Promise((resolve) => server.once('close', resolve));

  try {
    const payload = JSON.stringify({
      theme: 'natural',
      presets: { security: 'high', accessibility: 'aa', compliance: 'strict' },
      houseRules: { 'designer-ux': 'No carousels.' }
    });
    const res = await request({
      method: 'POST',
      url: `http://127.0.0.1:${port}/save?token=${token}`,
      body: payload,
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) }
    });
    assert.strictEqual(res.status, 200);
    assert.deepStrictEqual(JSON.parse(res.body), { ok: true });

    // Verify files were written
    assert.ok(
      fs.existsSync(path.join(dir, '.council', 'theme.md')),
      'theme.md should exist'
    );
    assert.match(fs.readFileSync(path.join(dir, '.council', 'theme.md'), 'utf8'), /natural/);

    assert.ok(
      fs.existsSync(path.join(dir, '.council', 'presets.md')),
      'presets.md should exist'
    );

    assert.ok(
      fs.existsSync(path.join(dir, '.council', 'house-rules', 'designer-ux.md')),
      'designer-ux.md should exist'
    );
    assert.match(
      fs.readFileSync(path.join(dir, '.council', 'house-rules', 'designer-ux.md'), 'utf8'),
      /No carousels/
    );

    await closedP;
  } finally {
    // server is already closing; clean up temp dir
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test('second POST with same token returns 410 (single-use)', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'council-srv-'));
  const { port, token, server } = await startServer(dir);

  // Patch the server to not auto-close so we can send a second request.
  // We can't easily stop the setImmediate close, so we listen for the close
  // event and re-listen on a new server - instead, test the 410 by sending
  // two requests quickly before close fires.
  // Use a fresh server for this test to test the 410 path.
  // Wait for the close to fire, but the 410 should come before close.
  let secondStatus;
  const closedP = new Promise((resolve) => server.once('close', resolve));

  try {
    const payload = JSON.stringify({ theme: 'minimal-light' });
    const headers = { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) };
    const url1 = `http://127.0.0.1:${port}/save?token=${token}`;

    // First request - burns the token, triggers close via setImmediate.
    const res1 = await request({ method: 'POST', url: url1, body: payload, headers });
    assert.strictEqual(res1.status, 200);

    // Second request - server should still be alive for a moment (setImmediate hasn't fired yet).
    // If the server is already closed this will error; treat ECONNREFUSED as the server being gone.
    try {
      const res2 = await request({ method: 'POST', url: url1, body: payload, headers });
      secondStatus = res2.status;
    } catch (e) {
      // Server already closed - acceptable since close fires asynchronously
      secondStatus = 'closed';
    }

    // Either the server returned 410 or it was already closed (both prove single-use).
    assert.ok(
      secondStatus === 410 || secondStatus === 'closed',
      `expected 410 or closed, got ${secondStatus}`
    );

    await closedP;
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test('oversized POST body returns 413', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'council-srv-'));
  const { port, token, server } = await startServer(dir);

  const closedP = new Promise((resolve) => server.once('close', resolve));

  try {
    // 513 KB > MAX_BODY_BYTES (512 KB)
    const oversized = JSON.stringify({ theme: 'natural', pad: 'x'.repeat(513 * 1024) });
    let status;
    try {
      const res = await request({
        method: 'POST',
        url: `http://127.0.0.1:${port}/save?token=${token}`,
        body: oversized,
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(oversized)
        }
      });
      status = res.status;
    } catch (e) {
      // req.destroy() may cut the connection before a response is fully delivered
      status = 'destroyed';
    }

    assert.ok(
      status === 413 || status === 'destroyed',
      `expected 413 or destroyed connection, got ${status}`
    );

    // Ensure no theme file was written
    assert.ok(
      !fs.existsSync(path.join(dir, '.council', 'theme.md')),
      'theme.md should not be written for oversized body'
    );
  } finally {
    server.close();
    await closedP.catch(() => {});
    fs.rmSync(dir, { recursive: true, force: true });
  }
});
