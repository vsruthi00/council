# Prompt: synthesis

The Chairman runs this last.

1. Collect all role contributions and any escalation rebuttals.
2. Resolve genuine conflicts by reasoning, weighting the domain lead specialist more heavily. Do not average into mush; pick and justify.
3. Rank the options against the named criteria.
4. Check for any NO-GO floor violation from security-redteam or compliance. If present, the decision is NO-GO regardless of everything else.
5. Emit the decision record in the format below.

## Decision record output format

```
Question: <original question>

Roster: <list of convened roles>

Per-role key points:
  <role>: <condensed key points, 1-3 lines>
  ...

Conflicts and resolution:
  <point of conflict>: <which roles conflicted, how resolved, which role's view prevailed and why>
  (none if no genuine conflicts)

Options ranked:
  Criteria: <named criteria fixed before deliberation>
  1. <option> -- <score or reasoning against criteria>
  2. <option> -- ...
  ...

Decision: <the chosen option with justification>

Recorded dissent:
  <role>: <objection maintained after deliberation>
  (none if all roles accepted the resolution)

Floor violations:
  <role>: NO-GO -- <reason>
  (none if no floor violation; if present, the decision is NO-GO regardless of ranking)

Honest limit: all roles run on the same model family and read the same prompt. This reduces sycophancy and broadens coverage but does not replace independent models or outside humans.
```

If the decision implies build work, append a spec stub for cadence to hand to writing-plans:

```
Spec stub for cadence:
  Goal: <one-line goal>
  Constraints: <key constraints from the deliberation>
  Open questions: <unresolved questions to address in writing-plans>
```
