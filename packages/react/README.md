# @zed-ui/react

A typed React design system with CSS-variable theming, compound components, and accessibility defaults — no runtime CSS-in-JS.

## Install

```bash
npm install @zed-ui/react @zed-ui/themes react react-dom
```

`react` and `react-dom` are peer dependencies (React 18.2+ or 19+).

## Quick start

**1. Import styles** once at your app entry (`main.tsx`, `layout.tsx`, etc.):

```tsx
import "@zed-ui/react/styles.css";
```

**2. Wrap your app** with `ThemeProvider`:

```tsx
import { ThemeProvider, createTheme } from "@zed-ui/react";

export function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={createTheme({ colorScheme: "light", density: "comfortable" })}>
      {children}
    </ThemeProvider>
  );
}
```

**3. Compose components:**

```tsx
import { Button, HStack } from "@zed-ui/react";

export function Demo() {
  return (
    <HStack gap="3">
      <Button color="primary">Get started</Button>
      <Button variant="outline">Learn more</Button>
    </HStack>
  );
}
```

## Tree shaking

Import subpaths for smaller bundles:

```tsx
import { Button } from "@zed-ui/react/button";
```

Available subpaths today: `@zed-ui/react/button`, `@zed-ui/react/box`, `@zed-ui/react/stack`, `@zed-ui/react/text`. Other components import from `@zed-ui/react`.

## Theming

Customize color scheme, density, and semantic colors with `createTheme()` from `@zed-ui/react` (re-exported from `@zed-ui/themes`). See the [`@zed-ui/themes` package on npm](https://www.npmjs.com/package/@zed-ui/themes).

## Documentation

- [Documentation](https://zed-ui.zedcraftstudio.com/)
- [GitHub repository](https://github.com/zedcraftstudio/zed-ui)
- [Report an issue](https://github.com/zedcraftstudio/zed-ui/issues)

## License

MIT
