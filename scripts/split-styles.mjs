#!/usr/bin/env node
/**
 * Splits packages/react/src/styles.css into layer files.
 * Run: node scripts/split-styles.mjs
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const stylesPath = path.join(__dirname, "../packages/react/src/styles.css");
const layersDir = path.join(__dirname, "../packages/react/src/styles/layers");

const content = await readFile(stylesPath, "utf8");
const lines = content.split("\n");

const layers = [
  { name: "base.css", start: 1, end: 145 },
  { name: "actions.css", start: 146, end: 483 },
  { name: "feedback.css", start: 484, end: 1308 },
  { name: "forms.css", start: 1309, end: 2578 },
  { name: "overlays.css", start: 2579, end: 3029 },
  { name: "navigation.css", start: 3030, end: 3759 },
  { name: "data-display.css", start: 3760, end: 4301 },
  { name: "layout.css", start: 4302, end: 5624 }
];

await mkdir(layersDir, { recursive: true });

for (const layer of layers) {
  const slice = lines.slice(layer.start - 1, layer.end).join("\n");
  await writeFile(path.join(layersDir, layer.name), `${slice}\n`);
}

const imports = layers.map((l) => `@import "./styles/layers/${l.name}";`).join("\n");
await writeFile(stylesPath, `${imports}\n`);

console.log(`Split styles.css into ${layers.length} layer files.`);
