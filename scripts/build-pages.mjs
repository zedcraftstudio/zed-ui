#!/usr/bin/env node
/**
 * Production GitHub Pages build: playground (site root) + Storybook (/storybook).
 */
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function run(command, args, env = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: root,
      stdio: "inherit",
      env: { ...process.env, ...env }
    });
    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} ${args.join(" ")} exited with code ${code}`));
    });
  });
}

const pagesEnv = {
  VITE_BASE_PATH: process.env.VITE_BASE_PATH ?? "/",
  VITE_STORYBOOK_URL:
    process.env.VITE_STORYBOOK_URL ?? "https://zed-ui.zedcraftstudio.com/storybook/"
};

await run("pnpm", ["--filter", "@zed-ui/playground", "build:pages"], pagesEnv);
await run("pnpm", ["--filter", "@zed-ui/docs", "build:pages"]);
await run("node", ["scripts/deploy-pages.mjs"]);
