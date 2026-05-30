'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { canUseLocalWindow } = require('./env-detect.js');

// --- Pure helpers (exported for testing) ---

/**
 * Returns true iff the slug is a safe lowercase kebab identifier.
 * Only [a-z0-9-] allowed; must be non-empty.
 */
function isValidSlug(slug) {
  if (!slug || typeof slug !== 'string') return false;
  return /^[a-z0-9][a-z0-9-]*$/.test(slug);
}

/**
 * Constant-time token comparison to avoid timing attacks.
 */
function validateToken(expected, provided) {
  if (!provided || typeof provided !== 'string') return false;
  if (expected.length !== provided.length) return false;
  try {
    return crypto.timingSafeEqual(
      Buffer.from(expected, 'utf8'),
      Buffer.from(provided, 'utf8')
    );
  } catch {
    return false;
  }
}

/**
 * Write a house-rule overlay file.
 * Throws if role slug is invalid (prevents path traversal).
 */
function writeOverlay(projectDir, { role, body }) {
  if (!isValidSlug(role)) {
    throw new Error(`Invalid role slug: "${role}"`);
  }
  const houseRulesDir = path.join(projectDir, '.council', 'house-rules');
  fs.mkdirSync(houseRulesDir, { recursive: true });
  const outPath = path.join(houseRulesDir, `${role}.md`);
  fs.writeFileSync(outPath, body, 'utf8');
}

/**
 * Write preset selections to <projectDir>/.council/presets.md
 */
function writePresets(projectDir, { security, accessibility, compliance }) {
  const councilDir = path.join(projectDir, '.council');
  fs.mkdirSync(councilDir, { recursive: true });
  const lines = [];
  if (security) lines.push(`security: ${security}`);
  if (accessibility) lines.push(`accessibility: ${accessibility}`);
  if (compliance) lines.push(`compliance: ${compliance}`);
  if (lines.length === 0) return;
  fs.writeFileSync(path.join(councilDir, 'presets.md'), lines.join('\n') + '\n', 'utf8');
}

/**
 * Write theme selection to <projectDir>/.council/theme.md
 */
function writeTheme(projectDir, theme) {
  const councilDir = path.join(projectDir, '.council');
  fs.mkdirSync(councilDir, { recursive: true });
  fs.writeFileSync(path.join(councilDir, 'theme.md'), `theme: ${theme}\n`, 'utf8');
}

// Server shutdown timeout in ms (prevents lingering server if no request arrives)
const SERVER_TIMEOUT_MS = 5 * 60 * 1000; // 5 minutes

// Maximum allowed POST body size in bytes
const MAX_BODY_BYTES = 512 * 1024; // 512 KB

/**
 * Start the loopback config helper server.
 * Binds to 127.0.0.1 on an ephemeral port (port 0).
 * Returns { url, token, server } so the caller can open the browser window.
 * The server shuts itself down after a successful POST or after SERVER_TIMEOUT_MS.
 */
function startServer(projectDir) {
  if (!canUseLocalWindow()) {
    throw new Error('Cannot start helper server: not a local environment');
  }

  // Generate single-use token
  const token = crypto.randomBytes(24).toString('hex');
  let tokenUsed = false;

  const indexHtml = fs.readFileSync(
    path.join(__dirname, 'public', 'index.html'),
    'utf8'
  );

  const server = http.createServer((req, res) => {
    const reqUrl = new URL(req.url, `http://127.0.0.1`);
    const providedToken = reqUrl.searchParams.get('token');

    // Reject wrong / missing token
    if (!validateToken(token, providedToken)) {
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      res.end('Forbidden');
      return;
    }

    if (req.method === 'GET' && reqUrl.pathname === '/') {
      // Serve the config page (token check already passed)
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(indexHtml);
      return;
    }

    if (req.method === 'POST' && reqUrl.pathname === '/save') {
      // Single-use: reject replays
      if (tokenUsed) {
        res.writeHead(410, { 'Content-Type': 'text/plain' });
        res.end('Gone: token already used');
        return;
      }
      tokenUsed = true;

      let body = '';
      let bodyLen = 0;
      req.on('data', (chunk) => {
        bodyLen += chunk.length;
        if (bodyLen > MAX_BODY_BYTES) {
          if (!res.headersSent) {
            res.writeHead(413, { 'Content-Type': 'text/plain' });
            res.end('Payload Too Large');
          }
          req.destroy();
          return;
        }
        body += chunk;
      });
      req.on('end', () => {
        if (bodyLen > MAX_BODY_BYTES) return;
        try {
          const payload = JSON.parse(body);

          // Write theme
          if (payload.theme) {
            const validThemes = [
              'minimal-light', 'warm-editorial', 'modern-dark',
              'soft-pastel', 'professional', 'natural'
            ];
            if (validThemes.includes(payload.theme)) {
              writeTheme(projectDir, payload.theme);
            }
          }

          // Write presets
          if (payload.presets && typeof payload.presets === 'object') {
            const validSecurity = ['low', 'medium', 'high'];
            const validAccessibility = ['a', 'aa', 'aaa'];
            const validCompliance = ['off', 'standard', 'strict'];
            const sanitized = {};
            if (validSecurity.includes(payload.presets.security)) {
              sanitized.security = payload.presets.security;
            }
            if (validAccessibility.includes(payload.presets.accessibility)) {
              sanitized.accessibility = payload.presets.accessibility;
            }
            if (validCompliance.includes(payload.presets.compliance)) {
              sanitized.compliance = payload.presets.compliance;
            }
            if (Object.keys(sanitized).length > 0) {
              writePresets(projectDir, sanitized);
            }
          }

          // Write house rules
          if (payload.houseRules && typeof payload.houseRules === 'object') {
            for (const [role, ruleBody] of Object.entries(payload.houseRules)) {
              if (ruleBody && typeof ruleBody === 'string' && ruleBody.trim()) {
                // writeOverlay throws if role is invalid slug
                writeOverlay(projectDir, { role, body: ruleBody });
              }
            }
          }

          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok: true }));
        } catch (err) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok: false, error: err.message }));
          // If writeOverlay threw due to bad slug, do NOT shut down - token still consumed
          // but no file was written for that role
        } finally {
          // Clear the fallback shutdown timer and close immediately
          clearTimeout(shutdownTimer);
          setImmediate(() => server.close());
        }
      });
      return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  });

  // Self-destruct timeout
  const shutdownTimer = setTimeout(() => {
    server.close();
  }, SERVER_TIMEOUT_MS);
  shutdownTimer.unref(); // Do not block process exit

  server.listen(0, '127.0.0.1');

  return new Promise((resolve, reject) => {
    server.once('listening', () => {
      const { port } = server.address();
      resolve({
        url: `http://127.0.0.1:${port}/?token=${token}`,
        token,
        server,
        port
      });
    });
    server.once('error', reject);
  });
}

module.exports = {
  isValidSlug,
  validateToken,
  writeOverlay,
  writePresets,
  writeTheme,
  startServer
};
