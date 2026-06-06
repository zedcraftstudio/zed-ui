# Zed UI

Zed UI is a production-focused React design system and component library. Material UI-level breadth with a composable typed API, design tokens, CSS-variable theming, polymorphic primitives, and strong accessibility defaults.

## Packages

- `@zed-ui/react` — public React components
- `@zed-ui/themes` — theme tokens, `ThemeProvider`, `createTheme`
- `@zed-ui/system` — polymorphic types, style props, `Slot`
- `@zed-ui/hooks` — interaction hooks
- `@zed-ui/utils` — `cx`, `mergeRefs`
- `@zed-ui/icons` — icon components (stub)

## Apps

- `apps/docs` — Storybook
- `apps/playground` — Vite integration demo

## Scripts

```bash
pnpm install
pnpm build
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm dev          # playground
pnpm dev:docs     # Storybook
```

## Install (beta)

```bash
npm install @zed-ui/react@beta @zed-ui/themes@beta
```

Peer dependencies:

```json
{
  "react": ">=18.2.0 || >=19.0.0",
  "react-dom": ">=18.2.0 || >=19.0.0"
}
```

## Usage

```tsx
import { Button, ThemeProvider, createTheme } from "@zed-ui/react";
import "@zed-ui/react/styles.css";

<ThemeProvider theme={createTheme({ colorScheme: "dark", density: "compact" })}>
  <Button variant="solid" size="md" color="primary">
    Create Project
  </Button>
</ThemeProvider>;
```

Tree-shakable subpath import:

```tsx
import { Button } from "@zed-ui/react/button";
```

Theme CSS (optional, when using `@zed-ui/themes` directly):

```tsx
import "@zed-ui/themes/styles.css";
```

## Accessibility

Zed UI follows APG patterns via Base UI. See [ACCESSIBILITY.md](./ACCESSIBILITY.md) for keyboard tables, focus behavior, and the testing checklist.

## Release

This monorepo uses [Changesets](https://github.com/changesets/changesets). To publish a beta:

```bash
pnpm changeset
pnpm version-packages
pnpm release --tag beta
```

The GitHub Actions release workflow publishes to npm when changesets are merged on `main`.

## License

MIT — see [LICENSE](./LICENSE).
