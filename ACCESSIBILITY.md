# Accessibility

Zed UI targets [WAI-ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/) patterns. Interactive behavior comes from [Base UI](https://base-ui.com/) primitives; Zed UI adds styling, tokens, and compound APIs on top.

## Keyboard interaction

| Component                         | Keys                                                    | Behavior                                                                                                            |
| --------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Button**                        | `Enter`, `Space`                                        | Activates the control                                                                                               |
| **Tabs**                          | `ArrowLeft`/`ArrowRight` (or `Up`/`Down` when vertical) | Moves focus between tabs; selection follows `activationMode`                                                        |
| **Accordion**                     | `ArrowUp`/`ArrowDown`, `Home`, `End`                    | Moves focus between triggers; `Enter`/`Space` toggles panels                                                        |
| **Menu**                          | `ArrowUp`/`ArrowDown`, typeahead                        | Moves focus; `Enter`/`Space` activates item; `Esc` closes                                                           |
| **Select**                        | `ArrowUp`/`ArrowDown`, `Enter`, typeahead               | Opens list, moves highlight, selects value                                                                          |
| **Combobox**                      | `ArrowUp`/`ArrowDown`, `Enter`, type in input           | Filters list, moves highlight, selects value                                                                        |
| **CommandPalette**                | `ArrowUp`/`ArrowDown`, `Enter`, `Esc`                   | Filters commands, selects item, closes dialog                                                                       |
| **Sidebar**                       | `Tab`, `Enter`/`Space` on items                         | `SidebarItem` renders links or buttons with visible `:focus-visible` rings; active route uses `aria-current="page"` |
| **Dialog / Drawer / AlertDialog** | `Esc`                                                   | Closes overlay; focus is trapped while open                                                                         |
| **Slider**                        | `ArrowLeft`/`ArrowRight`, `Home`, `End`                 | Moves thumb along track                                                                                             |
| **Checkbox / Radio / Switch**     | `Space`                                                 | Toggles or selects                                                                                                  |

## Form fields

`FormField` provides label, description, and error regions. Controls that support field context (`Input`, `Textarea`, `Select`, `Combobox`, `DatePicker`, `NativeSelect`) automatically receive:

- Matching `id` / `htmlFor` association
- `aria-describedby` linking description and error text
- `aria-required` and `required` when the field is required
- `aria-invalid` when an error is present

Checkbox, Switch, and Radio embed their own labels and do not use `FormField` by default.

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
3. Run automated checks: Vitest + `jest-axe` in `@zed-ui/react`, Storybook test-runner (all stories, **color-contrast** enabled), and Playwright e2e/visual regression.
4. Confirm color contrast for text and interactive states in both light and dark themes — CI enforces WCAG AA contrast via axe on every Storybook story.
5. `eslint-plugin-jsx-a11y` recommended rules are **errors** in `packages/react/src`.

## Reporting issues

If you find an accessibility bug, please open an issue with the component name, expected APG behavior, and steps to reproduce.
