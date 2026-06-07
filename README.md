# Zed UI

Typed React component library with CSS-variable theming and accessibility-first patterns.

- **Docs:** https://zed-ui.zedcraftstudio.com
- **npm:** [@zed-ui/react](https://www.npmjs.com/package/@zed-ui/react)

## Install

```bash
npm install @zed-ui/react @zed-ui/themes
```

Requires React 18.2+ or 19+.

If you use `Calendar` or `DatePicker`, also install the optional peer:

```bash
npm install react-day-picker
```

## Usage

```tsx
import { Button, ThemeProvider, createTheme } from "@zed-ui/react";
import "@zed-ui/react/styles.css";

const theme = createTheme({ colorScheme: "light" });

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="solid" color="primary">
        Get started
      </Button>
    </ThemeProvider>
  );
}
```

`ThemeProvider` injects design tokens as CSS variables. Component styles come from the stylesheet import above (required).

### Subpath imports

```tsx
import { Button } from "@zed-ui/react/button";
import { Stack } from "@zed-ui/react/stack";
```

### Layered CSS (tree-shaking)

Import only the layers your app uses to keep CSS smaller:

```tsx
import "@zed-ui/react/styles/layers/base.css";
import "@zed-ui/react/styles/layers/actions.css";
import "@zed-ui/react/styles/layers/forms.css";
```

| Layer | Typical use |
| --- | --- |
| `base` | Required tokens and resets |
| `actions`, `forms`, `feedback` | Interactive UI |
| `layout`, `navigation`, `data-display`, `overlays` | App chrome and content |

Full bundle (`styles.css`) is simplest; layered imports are for size-sensitive apps. CI enforces limits in `.size-limit.json`.

### Next.js (App Router)

Add to `app/layout.tsx`:

```tsx
import { ThemeProvider, createTheme } from "@zed-ui/react";
import "@zed-ui/react/styles.css";

const theme = createTheme();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

Mark client components that use interactive widgets with `"use client"`.

## Documentation

Zed UI uses two doc apps:

| App | Command | Purpose |
| --- | --- | --- |
| **Playground** | `pnpm dev` | Public narrative docs at [zed-ui.zedcraftstudio.com](https://zed-ui.zedcraftstudio.com) — guides, props tables, live demos (`apps/playground`) |
| **Storybook** | `pnpm dev:docs` | Component lab with the a11y addon — isolated stories and visual states (`apps/docs`, port 6006). Production build is deployed at [zed-ui.zedcraftstudio.com/storybook/](https://zed-ui.zedcraftstudio.com/storybook/) |

Update playground sections when changing APIs consumers read in docs. Add or update Storybook stories when changing component behavior or visual variants.

## Development

```bash
git clone https://github.com/zedcraftstudio/zed-ui.git
cd zed-ui
pnpm install
pnpm dev
```

| Command | Description |
| --- | --- |
| `pnpm dev` | Docs playground (http://localhost:5173) |
| `pnpm dev:docs` | Storybook (http://localhost:6006) |
| `pnpm build` | Build packages and apps |
| `pnpm test` | Unit tests (152+) |
| `pnpm test:coverage` | Vitest coverage (78%+ thresholds) |
| `pnpm test:e2e:storybook` | Storybook visual regression (20 stories) |
| `pnpm lint` | ESLint |

See [CONTRIBUTING.md](./CONTRIBUTING.md), [ACCESSIBILITY.md](./ACCESSIBILITY.md), [STABILITY.md](./STABILITY.md), and [RELEASING.md](./RELEASING.md).

## License

MIT — see [LICENSE](./LICENSE).
