# Prompt: deliberation

1. Single pass (default): dispatch every convened role as its own subagent, in parallel, blind to each other. Each subagent is loaded with ONLY its own role.md + knowledge.md + the relevant house-rule/preset/theme/ledger context for its concern. Each returns its contribution in its required output format.
2. Collect all contributions. Identify points of genuine conflict (two roles reaching opposed conclusions on the same point).
3. Adaptive escalation: for conflict points only, run ONE targeted second pass where the conflicting roles see each other's anonymized contribution and rebut. Cap at a single escalation round. No conflict means no second pass.
4. Pass everything to synthesis.

Model per role is defined in each role.md. Use the Agent tool with that model. Never let a role both generate and judge the same item in one pass.
