# Knowledge: designer-ux

Reference rubric loaded at deliberation time. Named principles below; apply the one(s) relevant to the decision at hand.

---

## Nielsen's 10 Usability Heuristics

**Principle:** Evaluate every interface against all ten heuristics: (1) visibility of system status, (2) match between system and real world, (3) user control and freedom, (4) consistency and standards, (5) error prevention, (6) recognition over recall, (7) flexibility and efficiency of use, (8) aesthetic and minimalist design, (9) help users recognize and recover from errors, (10) help and documentation. Violations are design bugs, not style preferences.

**When it applies:** Any design review, spec evaluation, or component audit.

---

## WCAG 2.2 AA Visual Standards

**Principle:** Text contrast must be at least 4.5:1 (3:1 for large text). Interactive elements need visible focus indicators. Touch targets must be at least 24x24 CSS pixels with adequate spacing. Reading and focus order must match visual order.

**When it applies:** Any UI that ships to users, including internal tools used by non-developers.

---

## Gestalt Grouping Principles

**Principle:** Elements that belong together must look like they belong together: proximity, similarity, continuity, closure, figure/ground. Gestalt failures produce interfaces that feel cluttered even when they are not crowded, because the eye cannot chunk the content.

**When it applies:** Layout and component composition decisions; any time the squint test fails.

---

## Visual Hierarchy and the Squint Test

**Principle:** Blur or squint at the design. The single most important element should still be legible, and the reading flow should be traceable. If everything competes equally, hierarchy is broken. Fix with size, weight, color, spacing, and position before adding decoration.

**When it applies:** Any layout review. Run before proposing decorative changes.

---

## Fitts's Law for Target Sizing

**Principle:** The time to acquire a target is a function of the distance to it and its size. Primary actions must be large and close. Destructive actions (delete, cancel) must be smaller and farther from the primary action cluster. Insufficient target size is a measurable usability defect.

**When it applies:** Any interactive element: buttons, links, form controls, drag handles.

---

## Hick's Law for Choice Architecture

**Principle:** Decision time grows logarithmically with the number of choices. When a user faces more than seven options at once, split the flow, group choices, or apply progressive disclosure. Every additional option has a real cognitive cost.

**When it applies:** Navigation menus, settings panels, onboarding flows, and any screen presenting simultaneous choices.

---

## Modular Type Scale and Baseline Rhythm

**Principle:** Use a modular type scale (a ratio such as 1.25 or 1.333 applied consistently) to derive all font sizes. Align line heights to a baseline grid so text from adjacent columns aligns horizontally. Arbitrary pixel values break visual rhythm and signal inconsistency.

**When it applies:** Any design that includes typography (all of them).

---

## Motion as Default, Not Afterthought

**Principle:** Every state change should have a transition. Entrances ease out at 150-300 ms. Exits ease in at 100-150 ms. Spring physics for dragging and elastic interactions. Purposeful motion communicates what changed and where focus should go. An interface with no motion feels broken, not minimal.

**When it applies:** Any component with a visible state change: showing, hiding, expanding, loading, navigating.

---

## Depth via Layering, Not Decoration

**Principle:** Avoid the uniform flat-gray AI look. Establish elevation hierarchy with layered shadows (soft, not hard), subtle gradients, and surface texture. Depth communicates which elements are interactive, which are modal, and which are background. Purely flat surfaces erase these cues.

**When it applies:** Any design where interactive and non-interactive elements share the same visual weight; modal and drawer designs.

---

## prefers-reduced-motion Compliance

**Principle:** All animations must be wrapped in a media query or runtime check for prefers-reduced-motion. When reduced motion is active, replace transitions with instant state changes or minimal crossfades. Never skip this; it is both an accessibility requirement and an WCAG 2.2 criterion.

**When it applies:** Any component that uses CSS transitions, keyframes, JavaScript animation, or Framer Motion.

---

## Apple HIG and Material Design as Behavioral Contracts

**Principle:** Platform-native UI patterns (iOS, Android, web) set user expectations that are costly to break. Deviating from platform conventions requires a product reason, not just a design preference. Cite which convention is being followed or deliberately broken.

**When it applies:** Any component that corresponds to a native pattern: navigation bars, bottom sheets, dialogs, form controls, gestures.
