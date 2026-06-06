# Zed UI Plan

## North Star

Zed UI should feel like a modern Material UI competitor: broad, accessible, themeable, fully typed, and productive at application scale. The differentiator is composability: every component exposes ergonomic high-level props plus low-level escape hatches through tokens, slots, polymorphic rendering, style props, and CSS variables.

## Design Principles

- Production first: strict TypeScript, tree-shakable builds, ESM/CJS output, declaration maps, tests, and documented migration paths.
- Accessible by default: keyboard interaction, focus management, ARIA contracts, reduced-motion support, color contrast, and testable behavior.
- Token native: every visual decision flows through semantic tokens and CSS variables.
- Polymorphic where useful: primitives accept an `as` prop with correct intrinsic/component props.
- Composable power: slots, variants, sizes, density, color schemes, responsive style props, and predictable override layers.
- Framework-friendly: SSR-safe, React Server Components compatible where possible, no accidental browser globals in render.

## Package Architecture

- `@zed-ui/react`: public React package.
- `theme`: tokens, theme creation, color-scheme support, CSS variable generation.
- `system`: style props, responsive values, polymorphic types, class utilities.
- `components`: user-facing components built from primitives and theme contracts.
- `hooks`: interaction hooks such as disclosure, focus trap, roving focus, media query, and controlled state.
- `icons`: optional icon package later, not bundled into core.

## Initial Component Tiers

Tier 0, foundation:

- ThemeProvider, createTheme, tokens, CSS variables.
- Box, Stack, Text, Button.
- Polymorphic typing and style props.

Tier 1, application basics:

- IconButton, Link, Divider, Badge, Avatar, Card, Paper.
- Input, Textarea, Select, Checkbox, Radio, Switch, Slider.
- Alert, Toast, Progress, Skeleton, Spinner.

Tier 2, overlays and navigation:

- Modal, Dialog, Drawer, Popover, Tooltip, Menu.
- Tabs, Breadcrumbs, Pagination, Stepper.
- AppShell, Sidebar, TopBar.

Tier 3, advanced superpowers:

- DataTable with column pinning, virtualization hooks, sorting, filtering, resizing.
- CommandPalette.
- DatePicker and Calendar.
- Form adapters for common form libraries.
- Motion presets with reduced-motion fallbacks.
- Theme builder and token inspector.

## API Strategy

- Components use semantic props for common needs: `variant`, `size`, `color`, `radius`, `tone`, `loading`, `disabled`.
- All layout-capable primitives accept system props such as `m`, `p`, `display`, `width`, `height`, `color`, `bg`, `radius`, `shadow`, `gap`, `align`, `justify`.
- Responsive values use arrays or breakpoint objects.
- Escape hatches: `className`, `style`, `unstyled`, `slotProps`, and CSS variable overrides.
- Public exports are explicit from `src/index.ts`.

## Styling Strategy

- Runtime-light CSS variables generated from the active theme.
- Component CSS lives in package CSS and uses stable `zui-` class names.
- Variants are represented through data attributes where possible.
- Consumers import `@zed-ui/react/styles.css` once.
- Future compiler-free option: static extraction for themes and recipes.

## Quality Gates

- Build produces ESM, CJS, and `.d.ts`.
- Typecheck runs with strict settings.
- Unit tests cover component rendering, polymorphic behavior, and key interactions.
- Accessibility tests are added as components become interactive.
- Docs app demonstrates every prop family with realistic examples.
- CI should run install, typecheck, test, build, package size checks, and visual regression for stable components.

## Delivery Roadmap

1. Foundation package and docs shell.
2. Token system, ThemeProvider, style props, Box.
3. Typography/layout/action primitives: Text, Stack, Button.
4. Form controls and validation states.
5. Overlay primitives and focus infrastructure.
6. Navigation components.
7. Data display and table system.
8. Theme tooling, codemods, CLI, and design-token export.

## Versioning

- Use semver from day one.
- Keep experimental APIs under `unstable_` exports.
- Changelog every release.
- Add deprecation warnings only in development builds.

