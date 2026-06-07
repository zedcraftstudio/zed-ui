#!/usr/bin/env node
/**
 * Playwright webServer entry: build Storybook for Pages (if needed) then serve on STORYBOOK_PORT.
 */
import { existsSync } from "node:fs";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const staticIndex = path.join(root, "apps/docs/storybook-static/index.html");
const port = process.env.STORYBOOK_PORT ?? process.env.STORYBOOK_E2E_PORT ?? "6007";
const forceBuild = process.env.STORYBOOK_E2E_FORCE_BUILD === "1";

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: root,
      stdio: "inherit",
      env: { ...process.env, STORYBOOK_PORT: port }
    });
    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} ${args.join(" ")} exited with code ${code}`));
    });
  });
}

if (forceBuild || !existsSync(staticIndex)) {
  await run("pnpm", ["--filter", "@zed-ui/docs", "build:pages"]);
}

const server = spawn("node", ["scripts/serve-storybook.mjs"], {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env, STORYBOOK_PORT: port }
});

const forwardSignal = (signal) => {
  if (!server.killed) server.kill(signal);
};
process.on("SIGINT", () => forwardSignal("SIGINT"));
process.on("SIGTERM", () => forwardSignal("SIGTERM"));

server.on("exit", (code) => process.exit(code ?? 0));
