# API Stability Policy

Zed UI follows [Semantic Versioning](https://semver.org/). This document describes what consumers can rely on between releases.

## Stable (1.0+)

After **1.0.0**, these are stable unless a major release notes a breaking change:

- Public component props and compound part names (`Dialog.Root`, `Tabs.List`, etc.)
- CSS class prefixes (`zui-*`) and `--zui-*` CSS variable names
- Package export paths documented in README (`@zed-ui/react/button`, layered CSS imports)
- `ThemeProvider`, `createTheme`, and token shape

## Deprecated

Deprecated APIs remain for at least one minor release with `devWarn` in development:

- `ZedProvider` → `ThemeProvider`
- `useTheme` → `useZedTheme`
- `NativeSelect` → `Select` / `MultiSelect`

## Internal (not semver-guaranteed)

- `@zed-ui/hooks` and `@zed-ui/icons` — thin satellite packages; prefer importing from `@zed-ui/react` until 1.0
- Deep imports into `dist/` file paths not listed in `package.json` `exports`
- Playground-only styles under `apps/playground`

## Pre-1.0 (current 0.0.x)

While on **0.0.x**, minor releases may include breaking API adjustments. Always read the [changelog](./packages/react/CHANGELOG.md) and run tests when upgrading.

## Release checklist

1. `pnpm typecheck && pnpm test && pnpm test:coverage && pnpm lint`
2. `pnpm build && pnpm size`
3. `pnpm --filter @zed-ui/docs test-storybook`
4. Changeset with migration notes for any breaking change
