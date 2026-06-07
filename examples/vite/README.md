# Zed UI + Vite example

Minimal Vite + React setup using Zed UI from the monorepo workspace.

## Run from repo root

```bash
pnpm install
pnpm --filter @zed-ui/example-vite dev
```

## Key setup

1. Install `@zed-ui/react` and `@zed-ui/themes`
2. Import styles once: `import "@zed-ui/react/styles.css"`
3. Wrap the app with `ThemeProvider` and `createTheme()`

See `src/App.tsx` for the full example.
