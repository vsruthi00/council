# In-chat config fallback

This path always works. Use it whenever the loopback helper window cannot run: remote sandboxes, headless CI, cloud environments, or any context where the environment-detection step reports non-local. It is the universal baseline for council configuration.

The user never opens or hand-edits baked ref files. The flow below collects answers in chat and writes the overlay files at the paths defined in `core/config/schema.md`. The helper window (built in a later task) produces the same files when available; this flow is its functional equivalent.

---

## Procedure

The Chairman (or whichever agent runs the config step) follows these steps in order.

### Step 1: Determine the active bench

Ask the user which domain(s) the project covers, or default to all roles if the domain is unclear.

> "Which domains apply to this project? (frontend / backend / database / security-auth / full-stack / ml / general) I will use this to select which roles need house rules."

If the user declines to specify, include all roles. The goal is to avoid asking house-rule questions for roles that will never be convened; pruning is a courtesy, not a strict requirement.

Record the resulting role list. This list drives Step 2.

---

### Step 2: Collect house rules per role

For each role in the active bench, present the house-rule prompt from `core/config/copy.md` (section "House-rule prompts (per role)"), substituting the role name:

> "Any standing rules for [Role Name]? For example: always use [technology], never propose [pattern], assume [constraint]. Leave blank to use the default rubric."

For roles whose concerns overlap a preset floor (security-redteam, compliance, accessibility), also show the floor note from copy.md:

> "Note: the [Security/Accessibility/Compliance] floor applies to this role and cannot be removed by a house rule."

Wait for the user's free-text answer before moving to the next role. If the user leaves a role blank, no overlay is written for that role; the baked default in `core/roles/<role>/knowledge.md` applies.

Collect all non-blank answers before writing anything (see Step 5).

---

### Step 3: Collect preset selections

Present all three presets in a single message to reduce round-trips. Use the exact tier copy from `core/config/copy.md` (section "Preset copy") for each preset. Do not paraphrase.

Present in this order:

1. Security (valid values: low / medium / high, default: medium)
2. Accessibility (valid values: a / aa / aaa, default: aa)
3. Compliance (valid values: off / standard / strict, default: standard)

Example message structure (fill in the copy verbatim from copy.md):

> "I will now ask about three project presets. You can reply with one word per preset or 'default' to accept the default for any of them."
>
> **Security**
> [paste security tier copy from copy.md]
>
> **Accessibility**
> [paste accessibility tier copy from copy.md]
>
> **Compliance**
> [paste compliance tier copy from copy.md]

If the user replies "default" or leaves a preset blank, record the documented default value (medium / aa / standard).

---

### Step 4: Collect theme choice

Present the six theme options using the exact one-line descriptions from `core/config/copy.md` (section "Theme copy"). Do not paraphrase.

> "Pick a theme for council output. Reply with the theme name or 'default' for minimal-light."
>
> [paste theme list from copy.md]

If the user replies "default" or does not choose, record `minimal-light`.

---

### Step 5: Write the overlay files

After all answers are collected, write the following files. Create parent directories if they do not exist.

#### House rules

For each role where the user provided a non-blank answer in Step 2, write:

Path: `<project>/.council/house-rules/<role>.md`

Content: the user's free-text answer, written as-is. Prepend one line identifying the role:

```
# House rules: <role>

<user's free-text answer>
```

Roles with blank answers: do not create or overwrite the file. If a file already exists from a prior run, leave it untouched unless the user explicitly provided a new answer.

#### Presets

Path: `<project>/.council/presets.md`

Content: one key-value pair per preset, one per line, using the values recorded in Step 3:

```
security: <value>
accessibility: <value>
compliance: <value>
```

Always write this file (using defaults where the user deferred).

#### Theme

Path: `<project>/.council/theme.md`

Content: a single line naming the chosen theme from Step 4:

```
theme: <value>
```

Always write this file (using the default where the user deferred).

---

### Step 6: Confirm to the user

After writing, report what was created or updated. Example:

> "Config written. Here is what I set:
>
> House rules written for: [list of roles, or 'none']
> Presets: security=<value>, accessibility=<value>, compliance=<value>
> Theme: <value>
>
> Files are at:
> - <project>/.council/house-rules/<role>.md (one per role that had a rule)
> - <project>/.council/presets.md
> - <project>/.council/theme.md
>
> To change any setting, re-run this flow or edit the files directly inside <project>/.council/."

---

## Overlay precedence reminder

The precedence chain is documented in `core/config/schema.md`. In summary:

1. Project overlay wins: `<project>/.council/house-rules/<role>.md`
2. User-global overlay: `~/.council/house-rules/<role>.md`
3. Baked default (lowest priority): `core/roles/<role>/knowledge.md`

This flow writes only to the project overlay level. User-global overlays (level 2) are out of scope for the per-project config step but follow the same file format.

---

## Notes

- The user never hand-edits baked ref files (`core/roles/*/knowledge.md` or files under `core/`).
- Project `.council/` files written by this flow may be edited directly by the user afterward.
- The loopback helper window (built in a later task) produces the same files via a browser UI. When it is available, it is preferred for interactive use. When it is not available (remote, headless, no browser), this chat flow is the complete equivalent.
- Valid theme values: minimal-light / warm-editorial / modern-dark / soft-pastel / professional / natural (from schema.md).
- Valid preset values are documented in schema.md. Values outside the documented set should be rejected and the question re-asked.
