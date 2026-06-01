---
name: council
description: Use to get an unbiased, multi-role review of any decision, design choice, or open question. Invoke when the user says "should I", "which approach", "help me decide", "decide between", "design decision", "architecture review", "play devil's advocate", "get a critical review", "get an unbiased review", "brainstorm options", or any time a choice has meaningful trade-offs. Also invoke on questions like "is this a good idea", "what am I missing", "poke holes in this plan", or "stress-test this approach". Convenes a council of specialist roles that deliberate in parallel, applying anti-sycophancy rules, and produces a structured decision record.
---

# council

A multi-role deliberation skill that convenes specialist subagents, runs them in parallel with anti-sycophancy guards, and emits a structured decision record with ranked options, recorded dissent, and any hard vetoes.

## Command

```
/council <question>
```

Options:

- `--with <role,role,...>` -- force-add one or more roles beyond those selected by domain classification.
- `--depth deep` -- force a review and escalation round even when no genuine conflict is detected in the first pass.

## Deliberation flow

### Stage 1: convening (`core/prompts/convening.md`)

The Chairman reads the question, classifies the domain (frontend, backend, database, security/auth, full-stack, ml, or general), and assembles the roster. The 6 core roles are always included: chairman, first-principles, contrarian, empiricist, executor, outsider. Bench roles are added per domain (for example, security/auth adds security-redteam as lead, plus compliance, api-contract, pre-mortem).

`--with <roles>` force-adds the named roles to the roster. `--depth deep` forces a review round after the first pass.

The Chairman announces the roster in one line and waits for the user to veto or add roles before proceeding.

### Stage 2: deliberation (`core/prompts/deliberation.md`)

The Chairman dispatches every convened role as its own subagent, in parallel, blind to each other. Each subagent is loaded with only its own files plus applicable overlays (see "Role loading" below). The model used is the one named in that role's `role.md`.

After all contributions are collected, genuine conflicts (two roles reaching opposed conclusions on the same point) are identified. If conflicts exist, one targeted escalation round is run: the conflicting roles see each other's anonymized contribution and rebut. The escalation round is capped at one. With `--depth deep`, this round runs regardless.

### Enforced throughout: anti-sycophancy (`core/prompts/anti-sycophancy.md`)

These are not a separate stage. They are rules applied to every deliberation. Key rules: contrarian and empiricist must each return at least 3 substantive objections; at least one role must steelman the option the user did not favor; the empiricist must state what observation would falsify the recommendation; options are ranked against criteria fixed before deliberation, not after; security-redteam and compliance hold a hard veto (NO-GO) that the Chairman cannot override.

### Stage 3: synthesis (`core/prompts/synthesis.md`)

The Chairman collects all contributions and escalation rebuttals, resolves conflicts by reasoning (weighting the domain lead specialist more heavily), ranks options against the named criteria, checks for NO-GO floor violations, and emits the decision record.

## Role loading

Each role subagent is loaded with exactly these files, no more:

1. `core/roles/<role>/role.md` -- mandate, output format, model.
2. `core/roles/<role>/knowledge.md` -- default rubric (baked).
3. Applicable overlays in this precedence order (project wins):
   - `<project>/.council/house-rules/<role>.md` (project overlay, highest priority)
   - `~/.council/house-rules/<role>.md` (user-global overlay)
   - baked `core/roles/<role>/knowledge.md` is the baseline when no overlay exists.
4. If the project uses presets or a theme, pass those values from `<project>/.council/presets.md` and `<project>/.council/theme.md` where relevant to the role's concern.

Never load another role's files into a role subagent. Never load the full repo. The Chairman itself loads only what it needs to orchestrate: the four prompt files and the overlay config for the session. Source citations for the rubrics are kept in `CREDITS.md` at the repo root and are not loaded at deliberation time.

The 6 core roles are: chairman, first-principles, contrarian, empiricist, executor, outsider. The 15 bench roles and their domain mapping live in `core/prompts/convening.md`.

## Decision record output format

The Chairman emits the decision record at the end of synthesis. The exact structure (and the optional cadence spec stub) is defined in `core/prompts/synthesis.md`; follow it there.

## Config

Before running a deliberation on a new project, council may need house rules, preset floors, and a theme. In a local environment, offer the loopback config helper window (`adapters/claude-code/helper-server/`); in a remote or headless environment, use the in-chat flow in `core/config/chat-fallback.md`. Both write the same overlay files into `<project>/.council/`. The detection rule (`canUseLocalWindow()`) lives in `adapters/claude-code/helper-server/env-detect.js`.

The user never hand-edits baked ref files under `core/`. The overlay files at `<project>/.council/` and `~/.council/` are the correct place for customization. Config schema and valid preset values are in `core/config/schema.md`.

## Rules

- Dates use DD.Month.YYYY. No emojis, no em dashes.
- Path base: paths in this file are relative to the repo root (so `core/prompts/convening.md` means the file at that path from the repo root). Paths inside `core/prompts/*.md` and `core/roles/*/role.md` are relative to `core/` (so a reference to `roles/chairman/role.md` inside a core prompt means `core/roles/chairman/role.md`).

Read the relevant `core/prompts/*.md` files and follow them exactly.
