# Theme: Minimal Light

## When to use

SaaS products, dashboards, and developer tools where content density is high and the UI should stay invisible. Suits any interface that relies on data or prose to carry meaning rather than visual decoration.

## Color tokens

Token values extracted from `.t-minimal` block in preview.html.

| Token     | Hex       | Notes                              |
|-----------|-----------|-------------------------------------|
| bg        | #ffffff   | Main page / demo background         |
| surface   | #fafafa   | Card and mini-card background       |
| border    | #e5e7eb   | Input border, card border           |
| text      | #111827   | Primary body text                   |
| muted     | #6b7280   | Secondary text, labels, lede        |
| accent    | #2563eb   | Primary button, focus ring, badge text |
| secondary | #eff6ff   | Badge background                    |

## Fonts

- Headings: Inter, sans-serif
- Body: Inter, sans-serif (same family; weight variation creates hierarchy)

## Radius

8px for inputs, buttons, and cards. 6px for badges.

## Motion / depth note

No glow effects; relies on subtle `box-shadow` on the outer card shell only, keeping interactions flat and immediate.
