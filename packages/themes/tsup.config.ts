import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts", "src/styles/global.css"],
  external: ["react", "react-dom", "react/jsx-runtime", "@zed-ui/hooks", "@zed-ui/utils"],
  format: ["esm", "cjs"],
  sourcemap: true,
  treeshake: true
});
