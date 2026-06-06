import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: [
    "src/index.ts",
    "src/styles.css",
    "src/primitives/box/index.ts",
    "src/primitives/stack/index.ts",
    "src/primitives/text/index.ts",
    "src/actions/button/index.ts"
  ],
  external: [
    "react",
    "react-dom",
    "react/jsx-runtime",
    "@base-ui/react",
    "@zed-ui/hooks",
    "@zed-ui/icons",
    "@zed-ui/system",
    "@zed-ui/themes",
    "@zed-ui/utils"
  ],
  format: ["esm", "cjs"],
  sourcemap: true,
  splitting: false,
  treeshake: true
});
