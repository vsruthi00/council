# Knowledge: maintainer

Reference rubric loaded at deliberation time. Named principles below; apply the one(s) relevant to the decision at hand.

---

## Readability Over Cleverness

**Principle:** Code is read far more often than it is written. A solution that is clever, concise, or technically elegant at the cost of comprehensibility is a liability. The correct measure of code quality is how quickly a new engineer can understand its intent and change it safely. If a piece of code requires a comment to explain what it does, it should be rewritten so the code explains itself. If it requires a comment to explain why, the comment is appropriate.

**When it applies:** Every code review; any code that uses non-obvious language features, unusual patterns, or complex control flow.

---

## Single Responsibility Principle

**Principle:** Every unit of code (function, class, module, service) should have one reason to change. A unit with multiple responsibilities is harder to test, harder to understand, harder to reuse, and harder to change without unintended side effects. When a unit does more than one thing, split it. The name of the unit must reflect its single responsibility; if the name requires "and" or "or", the unit has more than one responsibility.

**When it applies:** Any code design or review where a unit is being created or modified.

---

## Naming as Communication

**Principle:** Names are the primary communication mechanism in code. A name that accurately describes what a variable holds, what a function does, or what a module is responsible for eliminates the need for a comment. Rules: (1) names must be pronounceable; (2) names must not be abbreviations without established convention; (3) function names should be verbs that describe the action; (4) boolean names should be adjectives or questions (isLoaded, hasError); (5) names must be consistent across the codebase (do not mix fetch, get, load, and retrieve for the same operation).

**When it applies:** Any code review; any refactoring pass; any naming decision.

---

## Tests as Documentation

**Principle:** Tests are the most reliable documentation of intended behavior because they execute and fail when the behavior changes. A test suite that covers the critical paths of a module tells a new engineer what the module is supposed to do. The absence of tests on a critical path is a documentation gap and a maintenance liability: the next engineer to touch that code does not know what "correct" looks like. Tests must be readable: a test that requires deep understanding of the implementation to understand is not documentation.

**When it applies:** Any module review; any decision about whether to add tests.

---

## Tech Debt Identification

**Principle:** Tech debt is code that was written to meet a deadline at the cost of quality, and which now requires extra work to maintain or change. Forms: (1) reckless debt (bad code knowingly written under time pressure); (2) prudent debt (deliberate trade-off with a plan to repay); (3) inadvertent debt (bad code written without realizing it was bad). All three must be identified and tracked. Untracked TODOs, commented-out code, and workarounds without a linked ticket are reckless debt. Document them with a tracking reference.

**When it applies:** Any code review; any module that has been "stable" for a long time (stability often means no one has touched the debt).

---

## File and Module Size

**Principle:** A file that is very long almost always contains more than one responsibility. A reasonable upper bound for a module file is a few hundred lines; beyond that, consider splitting. The test for splitting is not line count but whether the file can be described by a single sentence. Very long files also produce large diffs that are hard to review and increase the risk of merge conflicts on shared code.

**When it applies:** Any file over a few hundred lines; any module that has grown steadily in a single file without refactoring.

---

## "Who Reads This in a Year?" Test

**Principle:** Before approving any design or code decision, simulate being a new engineer with no context reading it one year from now. Ask: (1) Is the intent obvious? (2) Are the dependencies clear? (3) Are the edge cases handled and labeled? (4) Could this be changed safely without understanding the full system? If the answer to any of these is no, the code requires improvement before it is maintainable.

**When it applies:** Every code or design review. This is a forcing function, not a guideline.
