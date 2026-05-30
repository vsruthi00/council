# Knowledge: pre-mortem

Reference rubric loaded at deliberation time. Named principles below; apply the one(s) relevant to the decision at hand.

---

## Pre-mortem Framing

**Principle:** A pre-mortem begins by stating that the project has already failed, then works backward to identify why. This is not speculation; it is a cognitive forcing function. By assuming failure as a given, the technique bypasses the optimism bias and the social pressure to support a plan that has already been proposed. The framing must be maintained throughout the analysis: write in past tense, as if the failure occurred.

**When it applies:** Every pre-mortem analysis. The past-tense framing is mandatory; hedging with "might fail" or "could fail" defeats the technique.

**Source:** Klein, "The Power of Intuition" (2003) - pre-mortem technique origin; Kahneman, "Thinking, Fast and Slow" (2011) - optimism bias and planning fallacy.

---

## Time-bomb Assumptions

**Principle:** Every plan rests on assumptions. A time-bomb assumption is one that: (1) is currently untested or difficult to test, (2) the plan depends on being true, and (3) will not announce itself as false until significant investment has been made. These are the assumptions that the team privately hopes are true but has not verified. Identifying them is the most valuable output of a pre-mortem; they are the specific places where early validation would prevent late disaster.

**When it applies:** After enumerating failure causes, specifically to find the assumptions that underlie each cause and identify which ones are time-bombs.

**Source:** Klein, "The Power of Intuition" (2003); Christensen, "The Innovator's Dilemma" (1997) - assumptions that incumbents and innovators each make about the market.

---

## One-way vs Two-way Doors

**Principle:** A two-way door is a decision that can be reversed with acceptable cost if it turns out to be wrong: a deployment strategy, a UI layout, a feature scope, a third-party integration that can be swapped. A one-way door is a decision that is effectively irreversible after commitment: a public API contract, a database schema migration with data loss, a legal commitment, an architectural choice that all other decisions depend on. One-way doors must be identified before they are committed to, and they require higher validation standards than two-way doors.

**When it applies:** For each major decision in the design under review. The classification must be stated, not assumed.

**Source:** Bezos, Amazon shareholder letters (1997, 2016) - two-pizza team and one-way vs two-way door decisions; Kahneman, "Thinking, Fast and Slow" (2011) - loss aversion and the asymmetry of reversible vs irreversible choices.

---

## Blast Radius

**Principle:** Blast radius is the scope of damage if a failure mode materializes. A failure with a small blast radius (one feature breaks, one user segment is affected, the fix is deployed in hours) is categorically different from a failure with a large blast radius (all user data is lost, a regulatory violation is triggered, a core service is unavailable for days). Rate each failure mode by its blast radius before rating its probability; a low-probability, high-blast-radius failure may dominate the risk profile.

**When it applies:** Ranking failure modes by severity. Blast radius must be assessed before probability, to avoid the bias toward dismissing high-impact low-probability risks.

**Source:** Taleb, "The Black Swan" (2007) - fat tails and the underweighting of high-impact events; Hollnagel, "Resilience Engineering" (2006) - safety-II and blast radius in complex systems.

---

## Optimism Bias in Planning

**Principle:** People systematically underestimate the time, cost, and difficulty of projects they are involved in, and overestimate the probability that things will go according to plan. This bias is strongest when: (1) the planner has a stake in the outcome, (2) the plan is detailed (detail creates false confidence), (3) the team has succeeded before (past success is used as evidence that the current plan will also succeed). The pre-mortem is the primary debiasing technique available without independent expertise.

**When it applies:** Any time a plan or timeline is presented as the expected case. Challenge it with reference class forecasting: how long did similar projects actually take?

**Source:** Kahneman, "Thinking, Fast and Slow" (2011), Chapter 23 - planning fallacy; Flyvbjerg, "Delusion and Deception in Large Infrastructure Projects" (2009).

---

## Reversibility as a Decision Criterion

**Principle:** When two options have similar expected value, prefer the more reversible one. Reversibility preserves the option to change course as new information arrives. Irreversibility forecloses that option. The cost of reversibility (technical debt, slightly worse performance, a more complex abstraction) is often much lower than the cost of being locked into a wrong decision. When evaluating whether an option is worth a premium, calculate the option value of the more reversible alternative.

**When it applies:** Any decision point where options have different reversibility profiles.

**Source:** Bezos, Amazon shareholder letters (2016); Dixit and Pindyck, "Investment Under Uncertainty" (1994) - real options theory.

---

## Surfacing Risks the Contrarian Rationalizes Away

**Principle:** The contrarian role attacks a proposal from the outside. The pre-mortem attacks from the inside, using the knowledge and assumptions of the people building the plan. The pre-mortem surfaces the risks that insiders know about but rationalize away because naming them feels disloyal or pessimistic. These rationalized risks are often the most likely to cause failure because they are the ones no one is watching.

**When it applies:** After the contrarian has delivered its output. The pre-mortem looks for what the contrarian did not find because it was too close to the team's own assumptions.

**Source:** Janis, "Groupthink" (1982) - how insiders suppress legitimate concerns; Klein, "The Power of Intuition" (2003) - pre-mortem as inside knowledge extraction.
