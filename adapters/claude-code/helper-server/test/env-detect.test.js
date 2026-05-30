const assert = require('node:assert');
const { test } = require('node:test');
const { canUseLocalWindow } = require('../env-detect.js');

test('returns false when REMOTE_SANDBOX env is set', () => {
  assert.strictEqual(canUseLocalWindow({ REMOTE_SANDBOX: '1' }), false);
});
test('returns true for a plain local env', () => {
  assert.strictEqual(canUseLocalWindow({}), true);
});
