# Knowledge: user-customer

Reference rubric loaded at deliberation time. Named principles below; apply the one(s) relevant to the decision at hand.

---

## Jobs-to-be-Done

**Principle:** Users do not buy products or use features; they hire them to accomplish a job. The job is the unit of analysis, not the feature. When evaluating a design, ask: what job is the user trying to get done? Does this design help them get it done faster, with less friction, and with more confidence than before? Features that do not serve a real job are waste from the user's perspective, regardless of how well they are built.

**When it applies:** Any design or feature evaluation. Identify the job first, then assess the design against it.

**Source:** Christensen, Hall, Dillon, and Duncan, "Know Your Customers' Jobs to Be Done" (Harvard Business Review, 2016); Ulwick, "Jobs to be Done: Theory to Practice" (2016).

---

## User Pain, Not Our Elegance

**Principle:** The user's experience of friction, confusion, and frustration is the correct measure of design quality. An implementation that is architecturally clean, technically elegant, or easy to build is irrelevant to the user if it requires them to think, guess, or recover from errors. When evaluating a design, the question is not "is this well-built?" but "does this cause the user unnecessary difficulty?"

**When it applies:** Every user experience finding. The implementation justification is not a valid response to a user pain point.

**Source:** Norman, "The Design of Everyday Things" (1988, revised 2013), Chapter 1 - the psychopathology of everyday things; Krug, "Don't Make Me Think" (3rd ed., 2014).

---

## Friction Mapping

**Principle:** Friction is any moment in the user journey that requires more effort than the task inherently demands. Map the user journey step by step and identify every point of hesitation, confusion, extra click, or unexpected result. Rate each friction point by how much it costs the user (does it block the task, slow it down, or cause a mistake?). High-friction points on the critical path are the most important to fix; low-friction points on rarely used paths are lower priority.

**When it applies:** Any user journey or task flow review.

**Source:** Fogg, "Tiny Habits" (2019) - friction and motivation model; Krug, "Don't Make Me Think" (2014) - usability testing methodology.

---

## Onboarding: First Meaningful Action Without Documentation

**Principle:** A new user who arrives with no prior knowledge must be able to complete the first meaningful action (the action that delivers value) without reading a help article, contacting support, or guessing. If they cannot, the onboarding is broken. Measure this by tracing the path of a first-time user from landing to value with no assistance. Every point where they would need to stop and figure something out is an onboarding defect.

**When it applies:** Any new feature, any sign-up flow, any product that has first-time users.

**Source:** Krug, "Don't Make Me Think" (2014), Chapter 9 - usability testing; Intercom, "The Onboarding Manifesto" (intercom.com) - time-to-value as a metric.

---

## Plain-Language Error States

**Principle:** When something goes wrong, the product must tell the user: (1) what happened, in plain language without technical jargon; (2) whether it was their fault or the product's; (3) what they should do next. "Error 500" is not a user-facing error message. "Something went wrong, please try again" is a slightly better message but does not tell the user if their work was saved. Good error messages are specific, actionable, and honest.

**When it applies:** Every error state, validation message, and empty state in the product.

**Source:** Norman, "The Design of Everyday Things" (2013), Chapter 5 - error handling; Nielsen, "Error Message Guidelines" (NNGroup, 2001).

---

## Accessibility as User Experience

**Principle:** Accessibility is not only a compliance requirement; it is the measure of whether a product works for all users, not just the most common ones. A keyboard-only user, a screen-reader user, a user with motor impairments, a user on a 2G connection, and a user who is temporarily impaired (arm in a sling, bright sunlight) all need to accomplish their jobs. When accessibility barriers are found, describe them in terms of user impact (this user cannot complete the task), not only in terms of criterion violations.

**When it applies:** Any user experience finding where a segment of users is blocked or impaired.

**Source:** W3C, "Web Content Accessibility Guidelines (WCAG) 2.2" (2023); Horton and Quesenbery, "A Web for Everyone: Designing Accessible User Experiences" (2014).

---

## Notification and Interruption Design

**Principle:** Every notification, alert, and message the product sends is an interruption of the user's attention. Interruptions have a cost. The rules: (1) only interrupt for events that require immediate action by the user; (2) batch non-urgent updates; (3) match the urgency level of the channel to the urgency of the message (push notification implies urgent; email implies non-urgent); (4) make it easy to reduce notification frequency. A product that over-notifies trains users to ignore it; a product that under-notifies leaves users uninformed.

**When it applies:** Any product that sends notifications, alerts, emails, or messages to users.

**Source:** Fried and Hansson, "It Doesn't Have to Be Crazy at Work" (2018) - interruption cost; Bailey and Konstan, "On the Need for Attention-Aware Systems" (2006).
