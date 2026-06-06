import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

const pkg = (name: string) => fileURLToPath(new URL(`../../packages/${name}/src/index.ts`, import.meta.url));
const pkgIcons = fileURLToPath(new URL(`../../packages/icons/src/index.tsx`, import.meta.url));

const base = process.env.VITE_BASE_PATH ?? "/";

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      "@zed-ui/react/styles.css": fileURLToPath(
        new URL("../../packages/react/src/styles.css", import.meta.url)
      ),
      "@zed-ui/react": fileURLToPath(new URL("../../packages/react/src/index.ts", import.meta.url)),
      "@zed-ui/themes": pkg("themes"),
      "@zed-ui/system": pkg("system"),
      "@zed-ui/utils": pkg("utils"),
      "@zed-ui/hooks": pkg("hooks"),
      "@zed-ui/icons": pkgIcons
    }
  },
  optimizeDeps: {
    include: ["react", "react-dom", "@base-ui/react"]
  }
});
