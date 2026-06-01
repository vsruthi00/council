# Knowledge: economist

Reference rubric loaded at deliberation time. Named principles below; apply the one(s) relevant to the decision at hand.

---

## Opportunity Cost

**Principle:** Every choice forecloses alternatives. The true cost of a decision includes not only its direct cost but the value of the best alternative that was given up. If the team spends six weeks building a custom auth system, the opportunity cost is whatever those six weeks would have produced instead. Opportunity cost is often the largest cost in engineering decisions and is almost always omitted from informal analyses.

**When it applies:** Every build decision; every decision to extend scope; every decision to defer a feature.

---

## Build vs Buy

**Principle:** Build when: the capability is a core differentiator, no vendor solves the problem adequately, or vendor cost exceeds build cost over the product horizon. Buy (or use open source) when: the capability is commoditized, a vendor solution exists that is demonstrably better maintained, or building it pulls the team off higher-value work. Account for the full cost of building: initial development, testing, documentation, maintenance, and migration if the decision is later reversed.

**When it applies:** Any decision to implement functionality that a third-party product or library could provide.

---

## Total Cost of Ownership

**Principle:** TCO includes all costs over the useful life of the decision: initial development, ongoing operational cost (hosting, licensing, SaaS fees), engineering maintenance (bug fixes, upgrades, security patches), support burden, and eventual decommission or migration. A solution that is cheap to build but expensive to operate or maintain is not cheap. Calculate TCO over a 2-3 year horizon for product decisions and a 5-year horizon for infrastructure decisions.

**When it applies:** Any comparison between alternatives that have different cost structures over time; any build vs buy decision.

---

## Sunk Cost Fallacy

**Principle:** Prior investment (time, money, effort) in a direction is not a reason to continue in that direction. The sunk cost is gone regardless of the decision made today. Evaluate each forward path on its future cost and future benefit only. "We already built half of it" is only relevant if completing the half is worth the additional investment on its own merits.

**When it applies:** Any decision involving a partially completed project, an existing vendor contract, or a previously chosen architecture.

---

## Marginal Analysis

**Principle:** Marginal cost is the cost of producing or supporting one additional unit (one more user, one more API call, one more row). Marginal benefit is the benefit gained from that additional unit. A viable model is one where marginal benefit exceeds marginal cost at the scale the product targets. A solution that is economical at 100 users but prohibitively expensive at 10,000 is not a solution for a growing product.

**When it applies:** Any architecture or pricing decision that scales with usage; any decision about per-unit cost structures.

---

## Payoff vs Spend

**Principle:** State the expected payoff (revenue, cost reduction, risk reduction, strategic option value), the spend (engineering time, infrastructure cost, opportunity cost), the time horizon to payoff, and the probability that the payoff materializes. A decision with a high payoff but a low probability of success may be dominated by a lower-payoff, higher-certainty alternative. Make the probability estimate explicit, not implicit.

**When it applies:** Any investment decision, feature prioritization, or architectural bet.

---

## What Are You NOT Doing

**Principle:** The most important question in a prioritization decision is not "what should we do?" but "what are we giving up?" List the alternatives that the chosen option forecloses. State them explicitly in the output. A decision record that does not name what was foregone is incomplete. This is the economic form of the opportunity cost principle applied as a required output step.

**When it applies:** Every decision record. This is always the last check before the economic analysis is complete.
