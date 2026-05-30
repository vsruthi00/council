// Decide whether the loopback config window is usable.
// Conservative: any signal of remote/headless execution -> false (use chat fallback).
function canUseLocalWindow(env = process.env) {
  if (env.REMOTE_SANDBOX || env.CI || env.CODESPACES) return false;
  if (env.SSH_CONNECTION || env.SSH_TTY) return false;
  return true;
}
module.exports = { canUseLocalWindow };
