#!/usr/bin/env node
/**
 * Combines playground (site root) + Storybook (/storybook) for GitHub Pages.
 */
import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const out = path.join(root, "pages-dist");
const playground = path.join(root, "apps/playground/dist");
const storybook = path.join(root, "apps/docs/storybook-static");

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(playground, out, { recursive: true });
await mkdir(path.join(out, "storybook"), { recursive: true });
await cp(storybook, path.join(out, "storybook"), { recursive: true });

console.log(`Pages artifact ready at ${out}`);
