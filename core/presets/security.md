# Preset: Security

Select the tier that matches your project's exposure.

- **Low** - "Just me or a small open project." Basics only.
- **Medium** - "Real users, real data." (default) Per-user access, encryption in transit, login protection.
- **High** - "Money, sensitive data, or a live business." E2E where it matters, audit logs, strict access review, COPPA/GDPR awareness.

Default: Medium

Floor (cannot be overridden by any tier selection): no secrets in git, real auth, row-level access.
