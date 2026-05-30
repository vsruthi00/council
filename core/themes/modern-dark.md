# Theme: Modern Dark

## When to use

Developer tools, technical dashboards, code editors, and night-mode interfaces. Ideal when users spend long hours in the product and prefer reduced eye strain over a bright default.

## Color tokens

Token values extracted from `.t-dark` block in preview.html.

| Token     | Hex       | Notes                                                  |
|-----------|-----------|--------------------------------------------------------|
| bg        | #0f1117   | Deepest background (demo surface)                      |
| surface   | #181b23   | Input background, card background                      |
| border    | #262a33   | Input border, card border                              |
| text      | #e6e8ec   | Primary body text                                      |
| muted     | #9aa1ad   | Secondary text, labels, lede, card body                |
| accent    | #7c6cff   | Primary button, focus ring, badge text (muted variant #a99bff) |
| secondary | rgba(124,108,255,0.15) | Badge background (translucent accent)   |

## Fonts

- Headings: Inter, sans-serif
- Body: Inter, sans-serif

## Radius

10px for inputs, buttons, and cards. 6px for badges.

## Motion / depth note

Primary button carries a `box-shadow: 0 4px 14px rgba(124,108,255,0.4)` glow that makes the accent feel luminous against dark surfaces; no other elevation is used.
