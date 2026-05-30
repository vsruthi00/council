# Config Plain-Language Copy

This file contains the exact text shown to the user when they set house rules, pick presets, or choose a theme. Reuse verbatim.

---

## Preset copy

### Security

Select the tier that matches your project's exposure.

- **Low** - "Just me or a small open project." Basics only.
- **Medium** - "Real users, real data." (default) Per-user access, encryption in transit, login protection.
- **High** - "Money, sensitive data, or a live business." E2E where it matters, audit logs, strict access review, COPPA/GDPR awareness.

Floor: no secrets in git, real auth, row-level access. This applies regardless of tier.

---

### Accessibility

Select the WCAG conformance level that fits your audience.

- **Basic (A)** - "Lowest bar." Rarely right for public.
- **Standard (AA)** - "Works for almost everyone." (default)
- **Strict (AAA)** - "Maximum inclusion."

Floor: AA on public UI. This applies regardless of tier.

---

### Compliance

Select the compliance posture that matches your data handling.

- **Off** - "No personal data."
- **Standard** - "Normal personal data." (default) Consent, deletion, retention.
- **Strict** - "Regulated or sensitive data." Lawful-basis tracking, minimization, breach process.

Floor: no PII in logs/client, lawful basis to hold data. This applies regardless of tier.

---

## Theme copy

Pick the visual theme for council output and the config window.

- **minimal-light** - Clean white canvas, high contrast, no distractions. Best for focus and documentation contexts.
- **warm-editorial** - Warm off-white with amber accents. Best for design and writing contexts.
- **modern-dark** - Dark surface with vibrant accents. Best for engineering and terminal-adjacent work.
- **soft-pastel** - Muted pastels, gentle contrast. Best for education and low-stress review contexts.
- **professional** - Cool grays, blue accents, tight density. Best for business and enterprise contexts.
- **natural** - Earth tones, organic feel. Best for wellness, sustainability, and lifestyle contexts.

---

## House-rule prompts (per role)

When collecting house rules for a role, show the following prompt before the free-text input:

> "Any standing rules for [Role Name]? For example: always use [technology], never propose [pattern], assume [constraint]. Leave blank to use the default rubric."

For roles with a preset floor, also show:

> "Note: the [Security/Accessibility/Compliance] floor applies to this role and cannot be removed by a house rule."
