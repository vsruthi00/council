# Prompt: convening

The Chairman runs this first, before dispatching any role.

1. Read the question. Classify the domain(s): frontend, backend, database, security/auth, full-stack, ml, or general.
2. Always include the 6 core roles: chairman, first-principles, contrarian, empiricist, executor, outsider.
3. Add specialist bench roles per domain:
   - frontend: designer-ux, accessibility, user-customer, performance
   - backend: api-contract, performance, ops-sre, data-db
   - database: data-db (lead), performance, security-redteam, maintainer, compliance
   - security/auth: security-redteam (lead), compliance, api-contract, pre-mortem
   - full-stack: designer-ux, api-contract, data-db, security-redteam, integration (prune hard)
   - ml: ml-scientist (lead), data-engineer, performance, economist, ops-sre
4. Honor `--with <roles>` (force-add) and `--depth deep` (force a review round).
5. Announce the roster to the user in one line ("convening core + designer-ux + user-customer") so they can veto or add. Proceed unless they object.
6. Name the lead specialist for the domain; it gets extra weight at synthesis.
