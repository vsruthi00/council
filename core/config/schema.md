# Config Schema

## Overlay file locations and precedence

Roles load their rules by merging the following sources, in order. Project-level wins over user-global, which wins over baked defaults.

1. **Baked (lowest priority):** `core/roles/<role>/knowledge.md` -- the default rubric shipped with council.
2. **User-global overlay:** `~/.council/house-rules/<role>.md` -- the user's personal standing rules, applied to every project.
3. **Project overlay (highest priority):** `<project>/.council/house-rules/<role>.md` -- project-specific overrides; these win over everything.

When a project overlay exists for a role, it replaces the corresponding sections of the baked knowledge for that session. Baked content that is not touched by an overlay is still loaded.

## Preset selections

Stored at: `<project>/.council/presets.md`

Format: one key-value pair per preset, one per line.

```
security: medium
accessibility: aa
compliance: standard
```

Valid values:
- security: low | medium | high
- accessibility: a | aa | aaa
- compliance: off | standard | strict

## Theme choice

Stored at: `<project>/.council/theme.md`

Format: a single line naming the chosen theme.

```
theme: warm-editorial
```

Valid values: minimal-light | warm-editorial | modern-dark | soft-pastel | professional | natural

## Notes

- The user never hand-edits `core/roles/*/knowledge.md` or other baked ref files.
- Project `.council/` files are written by the config helper (loopback window or in-chat fallback) and may also be edited directly inside `<project>/.council/`.
- When the helper server cannot run (remote/cloud environment), `core/config/chat-fallback.md` provides the equivalent Q&A flow and writes the same files.
