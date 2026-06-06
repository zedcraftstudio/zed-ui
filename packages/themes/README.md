# @zed-ui/themes

Design tokens, `createTheme`, and `ThemeProvider` for Zed UI.

Install alongside the component library:

```bash
npm install @zed-ui/react @zed-ui/themes react react-dom
```

## Usage

`ThemeProvider` and `createTheme` are re-exported from `@zed-ui/react` — most apps import from there:

```tsx
import { ThemeProvider, createTheme } from "@zed-ui/react";
import "@zed-ui/react/styles.css";

const theme = createTheme({
  colorScheme: "dark",
  density: "comfortable"
});

<ThemeProvider theme={theme}>{children}</ThemeProvider>;
```

### Theme CSS only

If you use this package directly:

```tsx
import "@zed-ui/themes/styles.css";
```

### Custom palette

```tsx
const theme = createTheme({
  colorScheme: "light",
  colors: {
    primary: {
      solid: "#2563eb",
      hover: "#1d4ed8",
      soft: "#dbeafe",
      text: "#1e40af"
    }
  }
});
```

## Documentation

- [Documentation](https://sinadinzidan.github.io/zed-ui/)
- [GitHub repository](https://github.com/sinadinzidan/zed-ui)
- Main install guide: [`@zed-ui/react` on npm](https://www.npmjs.com/package/@zed-ui/react)

## License

MIT
