#!/usr/bin/env node
/**
 * Syncs tsup entries and package.json exports for @zed-ui/react subpaths.
 * Run: node scripts/sync-react-subpaths.mjs
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const reactRoot = path.join(__dirname, "../packages/react");
const srcRoot = path.join(reactRoot, "src");

async function findIndexFiles(dir, base = "") {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const rel = path.join(base, entry.name);
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await findIndexFiles(full, rel)));
    } else if (entry.name === "index.ts") {
      files.push(rel);
    }
  }

  return files;
}

function toExportName(indexPath) {
  // e.g. actions/button/index.ts -> button
  const parts = indexPath.replace(/\/index\.ts$/, "").split("/");
  return parts[parts.length - 1];
}

function toDistPath(indexPath) {
  return `./dist/${indexPath.replace(/\/index\.ts$/, "/index")}`;
}

const indexFiles = (await findIndexFiles(srcRoot)).filter((f) => f !== "index.ts").sort();

const styleLayerEntries = [
  "src/styles/layers/base.css",
  "src/styles/layers/actions.css",
  "src/styles/layers/feedback.css",
  "src/styles/layers/forms.css",
  "src/styles/layers/overlays.css",
  "src/styles/layers/navigation.css",
  "src/styles/layers/data-display.css",
  "src/styles/layers/layout.css"
];

const tsupEntries = ["src/index.ts", "src/styles.css", ...styleLayerEntries, ...indexFiles.map((f) => `src/${f}`)];

const exportsField = {
  ".": {
    types: "./dist/index.d.ts",
    import: "./dist/index.js",
    require: "./dist/index.cjs"
  },
  "./styles.css": "./dist/styles.css",
  "./styles/base.css": "./dist/styles/layers/base.css",
  "./styles/actions.css": "./dist/styles/layers/actions.css",
  "./styles/forms.css": "./dist/styles/layers/forms.css",
  "./styles/feedback.css": "./dist/styles/layers/feedback.css",
  "./styles/overlays.css": "./dist/styles/layers/overlays.css",
  "./styles/navigation.css": "./dist/styles/layers/navigation.css",
  "./styles/data-display.css": "./dist/styles/layers/data-display.css",
  "./styles/layout.css": "./dist/styles/layers/layout.css"
};

for (const indexPath of indexFiles) {
  const name = toExportName(indexPath);
  const dist = toDistPath(indexPath);
  exportsField[`./${name}`] = {
    types: `${dist}.d.ts`,
    import: `${dist}.js`,
    require: `${dist}.cjs`
  };
}

const tsupConfig = `import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ${JSON.stringify(tsupEntries, null, 4).replace(/\n/g, "\n  ")},
  external: [
    "react",
    "react-dom",
    "react/jsx-runtime",
    "@base-ui/react",
    "react-day-picker",
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
`;

const pkgPath = path.join(reactRoot, "package.json");
const pkg = JSON.parse(await readFile(pkgPath, "utf8"));

pkg.exports = exportsField;
pkg.peerDependencies = {
  react: ">=18.2.0 || >=19.0.0",
  "react-dom": ">=18.2.0 || >=19.0.0",
  "react-day-picker": "^9.0.0"
};
pkg.peerDependenciesMeta = {
  "react-day-picker": { optional: true }
};
delete pkg.dependencies["react-day-picker"];

await writeFile(path.join(reactRoot, "tsup.config.ts"), tsupConfig);
await writeFile(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);

console.log(`Synced ${indexFiles.length} subpath exports.`);
