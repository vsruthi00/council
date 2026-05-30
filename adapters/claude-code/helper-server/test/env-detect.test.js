const assert = require('node:assert');
const { test } = require('node:test');
const { canUseLocalWindow } = require('../env-detect.js');

test('returns false when REMOTE_SANDBOX env is set', () => {
  assert.strictEqual(canUseLocalWindow({ REMOTE_SANDBOX: '1' }), false);
});

test('returns false when CI env is set', () => {
  assert.strictEqual(canUseLocalWindow({ CI: '1' }), false);
});

test('returns false when CODESPACES env is set', () => {
  assert.strictEqual(canUseLocalWindow({ CODESPACES: 'true' }), false);
});

test('returns false when SSH_CONNECTION env is set', () => {
  assert.strictEqual(canUseLocalWindow({ SSH_CONNECTION: '10.0.0.1 12345 10.0.0.2 22' }), false);
});

test('returns false when SSH_TTY env is set', () => {
  assert.strictEqual(canUseLocalWindow({ SSH_TTY: '/dev/pts/0' }), false);
});

test('returns true for a plain local env', () => {
  assert.strictEqual(canUseLocalWindow({}), true);
});
