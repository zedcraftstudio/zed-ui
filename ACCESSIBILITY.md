# Accessibility

Zed UI targets [WAI-ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/) patterns. Interactive behavior comes from [Base UI](https://base-ui.com/) primitives; Zed UI adds styling, tokens, and compound APIs on top.

## Keyboard interaction

| Component | Keys | Behavior |
| --- | --- | --- |
| **Button** | `Enter`, `Space` | Activates the control |
| **Tabs** | `ArrowLeft`/`ArrowRight` (or `Up`/`Down` when vertical) | Moves focus between tabs; selection follows `activationMode` |
| **Accordion** | `ArrowUp`/`ArrowDown`, `Home`, `End` | Moves focus between triggers; `Enter`/`Space` toggles panels |
| **Menu** | `ArrowUp`/`ArrowDown`, typeahead | Moves focus; `Enter`/`Space` activates item; `Esc` closes |
| **Select** | `ArrowUp`/`ArrowDown`, `Enter`, typeahead | Opens list, moves highlight, selects value |
| **Dialog / Drawer** | `Esc` | Closes overlay; focus is trapped while open |
| **Checkbox / Radio / Switch** | `Space` | Toggles or selects |

## Focus management

- **Dialog** and **Drawer** trap focus inside the overlay and restore focus to the trigger on close (Base UI).
- **Menu**, **Select**, and **Popover** return focus to the trigger when dismissed.
- Visible focus rings use `:focus-visible` on interactive elements.

## Live regions and status

- **Spinner** exposes `role="status"` with a configurable `aria-label` (default: `"Loading"`).
- **Toast** notifications use polite live regions via `role="status"`.
- **Alert** uses appropriate landmark/status semantics for inline messages.

## Testing checklist

Before shipping a feature:

1. Navigate the flow with keyboard only.
2. Verify focus order and visible focus indicators.
3. Run automated checks: Vitest + `jest-axe` smoke tests in `@zed-ui/react`, Storybook `@storybook/addon-a11y`, and Playwright interaction tests for overlays and navigation.
4. Confirm color contrast for text and interactive states in both light and dark themes.

## Reporting issues

If you find an accessibility bug, please open an issue with the component name, expected APG behavior, and steps to reproduce.
