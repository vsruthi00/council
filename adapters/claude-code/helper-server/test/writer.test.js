const assert = require('node:assert');
const { test } = require('node:test');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { writeOverlay, writePresets, isValidSlug, validateToken } = require('../server.js');

test('writes house-rule file under .council/house-rules', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'council-'));
  writeOverlay(dir, { role: 'designer-ux', body: 'Use the Natural theme. No carousels.' });
  const out = path.join(dir, '.council', 'house-rules', 'designer-ux.md');
  assert.ok(fs.existsSync(out));
  assert.match(fs.readFileSync(out, 'utf8'), /No carousels/);
  fs.rmSync(dir, { recursive: true, force: true });
});

test('rejects a path-traversal role slug', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'council-'));
  assert.throws(
    () => writeOverlay(dir, { role: '../../etc/passwd', body: 'evil' }),
    /invalid role slug/i
  );
  // Ensure nothing was written outside the dir
  assert.ok(!fs.existsSync(path.join(dir, '.council')));
  fs.rmSync(dir, { recursive: true, force: true });
});

test('rejects a role with uppercase letters', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'council-'));
  assert.throws(
    () => writeOverlay(dir, { role: 'Designer-UX', body: 'capitalize me' }),
    /invalid role slug/i
  );
  fs.rmSync(dir, { recursive: true, force: true });
});

test('isValidSlug accepts valid slugs', () => {
  assert.ok(isValidSlug('designer-ux'));
  assert.ok(isValidSlug('security-redteam'));
  assert.ok(isValidSlug('api-contract'));
});

test('isValidSlug rejects unsafe slugs', () => {
  assert.ok(!isValidSlug('../../etc/passwd'));
  assert.ok(!isValidSlug('Designer-UX'));
  assert.ok(!isValidSlug('../secret'));
  assert.ok(!isValidSlug(''));
  assert.ok(!isValidSlug('role with spaces'));
});

test('validateToken returns true for matching token', () => {
  assert.ok(validateToken('abc123', 'abc123'));
});

test('validateToken returns false for non-matching token', () => {
  assert.ok(!validateToken('abc123', 'wrongtoken'));
});

test('validateToken returns false for empty token', () => {
  assert.ok(!validateToken('abc123', ''));
  assert.ok(!validateToken('abc123', undefined));
});

test('writePresets writes file when at least one preset is provided', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'council-'));
  writePresets(dir, { security: 'high' });
  const out = path.join(dir, '.council', 'presets.md');
  assert.ok(fs.existsSync(out));
  assert.match(fs.readFileSync(out, 'utf8'), /security: high/);
  fs.rmSync(dir, { recursive: true, force: true });
});

test('writePresets does not write file when no presets are provided', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'council-'));
  writePresets(dir, {});
  const out = path.join(dir, '.council', 'presets.md');
  assert.ok(!fs.existsSync(out));
  fs.rmSync(dir, { recursive: true, force: true });
});
