# Knowledge: accessibility

Reference rubric loaded at deliberation time. Named principles below; apply the one(s) relevant to the decision at hand.

---

## WCAG 2.2 Conformance Levels

**Principle:** WCAG 2.2 criteria are organized into three levels: A (minimum, must not block access), AA (standard, required for public interfaces), and AAA (enhanced, aspirational). Audit against A and AA as required criteria. Report AAA separately. Every finding must cite the specific criterion number (e.g., 1.4.3, 2.1.1).

**When it applies:** Every public-facing interface review.

**Source:** W3C, "Web Content Accessibility Guidelines (WCAG) 2.2" (2023), w3.org/TR/WCAG22.

---

## Keyboard Operability

**Principle:** All functionality must be operable by keyboard alone. Every interactive element must be reachable via Tab (and Shift+Tab). Activation must work via Enter or Space as appropriate. No interaction may trap focus so that the user cannot navigate away using the keyboard.

**When it applies:** Any interactive component: buttons, links, form fields, modals, date pickers, custom widgets.

**Source:** WCAG 2.2 criterion 2.1.1 "Keyboard" (Level A); 2.1.2 "No Keyboard Trap" (Level A).

---

## Screen-reader Semantics and ARIA

**Principle:** Use native semantic HTML first (button, nav, main, h1-h6, label). Add ARIA only when native semantics are insufficient. Every interactive element must have an accessible name. Landmark roles (main, nav, banner, contentinfo) must be present to give screen-reader users a map. Decorative images get alt="" and role="presentation"; informative images get descriptive alt text.

**When it applies:** Any component that is interactive, any image, any region of content.

**Source:** W3C, "WAI-ARIA Authoring Practices Guide" (APG) 1.2 (2023); WCAG 2.2 criterion 1.1.1 "Non-text Content" (Level A), 4.1.2 "Name, Role, Value" (Level A).

---

## Color Contrast

**Principle:** Normal text must have a contrast ratio of at least 4.5:1 against its background. Large text (18pt or 14pt bold) must have at least 3:1. UI components and focus indicators must have at least 3:1. Do not rely on color alone to convey information.

**When it applies:** All text and interactive components on public-facing UI.

**Source:** WCAG 2.2 criterion 1.4.3 "Contrast (Minimum)" (Level AA); 1.4.11 "Non-text Contrast" (Level AA); 1.4.1 "Use of Color" (Level A).

---

## Focus Management

**Principle:** When a dialog, drawer, or modal opens, focus must move to the first actionable element inside it. When the dialog closes, focus must return to the element that triggered it. After a route change in a single-page application, focus must move to a logical target such as the page heading or the skip link.

**When it applies:** Modals, dialogs, drawers, carousels, tab panels, and single-page app navigation.

**Source:** WCAG 2.2 criterion 2.4.3 "Focus Order" (Level A); 3.2.2 "On Input" (Level A); W3C APG "Dialog (Modal)" pattern (2023).

---

## prefers-reduced-motion

**Principle:** Users who have set prefers-reduced-motion: reduce in their OS must not experience animations that can cause vestibular symptoms. All CSS transitions, keyframe animations, and JavaScript-driven motion must be suppressed or replaced with instant state changes when this media query is active.

**When it applies:** Any animation: entrance/exit transitions, parallax, looping effects, auto-playing video.

**Source:** WCAG 2.2 criterion 2.3.3 "Animation from Interactions" (Level AAA, but widely adopted as standard practice); CSS Media Queries Level 5 "prefers-reduced-motion".

---

## Captions, Transcripts, and Alt Text

**Principle:** Pre-recorded audio must have captions. Pre-recorded video with meaningful audio must have captions or a transcript. Live audio in synchronous communication must have real-time captions. Every image that conveys information must have a text alternative (alt attribute). Complex images (charts, diagrams) need a long description or data table.

**When it applies:** Any media content: images, audio, video, animations with semantic meaning.

**Source:** WCAG 2.2 criteria 1.2.1 "Audio-only and Video-only" (Level A); 1.2.2 "Captions (Pre-recorded)" (Level A); 1.1.1 "Non-text Content" (Level A).

---

## Touch Target Size

**Principle:** Interactive touch targets must be at least 24x24 CSS pixels with at least 24px of offset space, or at least 44x44 CSS pixels as the target itself. Targets that are too small cause errors, especially for users with motor impairments.

**When it applies:** All mobile and touch interfaces; any interface that may be used on a touchscreen.

**Source:** WCAG 2.2 criterion 2.5.8 "Target Size (Minimum)" (Level AA); Apple HIG minimum tap target 44x44 points.
