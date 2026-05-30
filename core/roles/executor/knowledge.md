# Knowledge: executor

Reference rubric loaded at deliberation time. Named principles below; apply the one(s) relevant to the decision at hand.

---

## Critical-path thinking

**Principle:** The critical path is the longest chain of dependent tasks that determines the earliest possible completion. Tasks not on the critical path have float: they can slip without delaying the end date. Focus effort and risk mitigation on critical-path tasks. Adding resources to non-critical-path tasks does not accelerate the project.

**When it applies:** Step 2 of operation: mapping the task sequence. Required whenever more than two tasks depend on each other.

**Source:** Kelly and Walker, critical path method (CPM), DuPont, 1957; Goldratt, "Critical Chain" (1997) - critical chain as an extension of CPM with resource constraints.

---

## MVP and scope-cutting

**Principle:** The minimum viable product (MVP) is the smallest version that delivers the core value to a real user and generates real feedback. Every feature not required for that delivery is deferred until the MVP is validated. Scope cut is not a compromise; it is the strategy that produces the fastest feedback loop and the lowest cost of being wrong.

**When it applies:** Step 4 of operation. Always. Every plan must identify its MVP before estimating total scope.

**Source:** Ries, "The Lean Startup" (2011) - MVP definition and build-measure-learn; Blank, "The Four Steps to the Epiphany" (2005) - customer development and scope discipline.

---

## Dependency mapping

**Principle:** A dependency is a task that cannot start until another task is complete. Hard dependencies (technical, logical) must be respected. Soft dependencies (preference, habit) should be challenged and removed where possible. Mapping dependencies before scheduling prevents the most common plan failures: parallelizing work that cannot be parallelized, and sequencing work that could be parallelized.

**When it applies:** Step 1 of operation: building the task list. Every task must have its dependencies named before it is placed in the sequence.

**Source:** Project Management Institute, PMBOK Guide - work breakdown structure and network diagrams; Brooks, "The Mythical Man-Month" (1975) - dependency and coordination costs.

---

## Estimation honesty

**Principle:** Estimates must account for three things: (1) the known work, (2) the known unknowns (things we know we do not know), and (3) a buffer for unknown unknowns. State each separately. Common estimation failures: estimating only the known work (ignores integration, testing, review), treating the best case as the base case (planning fallacy), and omitting the single biggest unknown that could blow the estimate.

**When it applies:** Step 5 of operation. Every estimate must name its assumptions and identify the single biggest risk factor.

**Source:** Kahneman, "Thinking, Fast and Slow" (2011) - planning fallacy and inside view vs outside view; McConnell, "Software Estimation: Demystifying the Black Art" (2006).

---

## YAGNI

**Principle:** "You aren't gonna need it." Do not build functionality until there is a concrete, current requirement for it. Anticipated needs that have not materialized waste time, add complexity, and often need to be reworked when the real requirement arrives. Deferring speculative work is not laziness; it is risk reduction.

**When it applies:** Any time a plan includes a feature or capability justified by "we might need this later" or "it would be nice to have." Challenge every deferred-need item before including it in scope.

**Source:** Beck and Fowler, "Planning Extreme Programming" (2000) - YAGNI principle; Martin, "Agile Software Development" (2002) - scope and simplicity.
