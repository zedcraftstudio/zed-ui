# Contributing to Zed UI

## Prerequisites

- Node.js 22+
- pnpm 10.12.1 (`corepack enable` recommended)

## Setup

```bash
git clone https://github.com/zedcraftstudio/zed-ui.git
cd zed-ui
pnpm install
```

## Development

| Command | Description |
| --- | --- |
| `pnpm dev` | Docs playground at http://localhost:5173 |
| `pnpm dev:docs` | Storybook at http://localhost:6006 |
| `pnpm build` | Build all packages and apps |
| `pnpm test` | Unit tests (Vitest) |
| `pnpm test:e2e` | Playwright tests against the playground |
| `pnpm test:e2e:storybook` | Storybook visual regression (5 baseline stories) |
| `pnpm typecheck` | TypeScript across the monorepo |
| `pnpm lint` | ESLint |
| `pnpm size` | Bundle size limits for `@zed-ui/react` (barrel JS/CSS + key subpaths) |

## Documentation apps

| App | Path | When to update |
| --- | --- | --- |
| **Playground** | `apps/playground` | Public docs site (deployed to GitHub Pages). Update `src/docs/sections/` and `src/docs/props/registry.ts` when APIs, props, or usage guidance change. |
| **Storybook** | `apps/docs` | Component stories and a11y review. Add `*.stories.tsx` when adding variants, states, or visual regression targets. Production build (`build:pages`) deploys to `/storybook/` on GitHub Pages. |

Run `pnpm dev` for playground, `pnpm dev:docs` for Storybook.

## Making changes

1. Create a branch from `main`.
2. Change code in `packages/react` (or supporting packages).
3. Update playground docs and/or Storybook stories per the table above.
4. Run `pnpm typecheck && pnpm test && pnpm lint`.
5. Add a changeset when preparing a release: `pnpm changeset`.

## Styles

Component styles live in layered CSS under `packages/react/src/styles/layers/`. The main entry `styles.css` imports all layers.

Consumers must import styles:

```tsx
import "@zed-ui/react/styles.css";
```

Optional partial imports:

```tsx
import "@zed-ui/react/styles/base.css";
import "@zed-ui/react/styles/forms.css";
```

## Calendar / DatePicker peer

`react-day-picker` is an optional peer dependency. Install it when using `Calendar` or `DatePicker`:

```bash
npm install react-day-picker
```

## Subpath imports

Import individual components for smaller bundles:

```tsx
import { Button } from "@zed-ui/react/button";
import { Dialog } from "@zed-ui/react/dialog";
```

## Pull requests

Open PRs against `main`. Include tests for behavior or accessibility changes when practical.

Report bugs and accessibility issues: https://github.com/zedcraftstudio/zed-ui/issues
