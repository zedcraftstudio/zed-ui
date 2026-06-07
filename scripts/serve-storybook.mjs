#!/usr/bin/env node
/**
 * Serves Storybook static output at /storybook/ (matches GitHub Pages layout).
 */
import { createReadStream, existsSync, statSync } from "node:fs";
import { cp, mkdir, rm } from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const source = path.join(root, "apps/docs/storybook-static");
const serveRoot = path.join(root, ".storybook-serve");
const port = Number(process.env.STORYBOOK_PORT ?? 6006);

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".woff2": "font/woff2",
  ".svg": "image/svg+xml",
  ".png": "image/png"
};

if (!existsSync(path.join(source, "index.html"))) {
  console.error(
    "Missing Storybook build at apps/docs/storybook-static. Run: pnpm --filter @zed-ui/docs build:pages"
  );
  process.exit(1);
}

await rm(serveRoot, { recursive: true, force: true });
await mkdir(path.join(serveRoot, "storybook"), { recursive: true });
await cp(source, path.join(serveRoot, "storybook"), { recursive: true });

const server = http.createServer((req, res) => {
  const url = new URL(req.url ?? "/", `http://127.0.0.1:${port}`);

  if (url.pathname === "/" || url.pathname === "") {
    res.writeHead(302, { Location: "/storybook/" });
    res.end();
    return;
  }

  let filePath = path.join(serveRoot, decodeURIComponent(url.pathname));
  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }

  if (!existsSync(filePath)) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }

  const ext = path.extname(filePath);
  res.writeHead(200, { "Content-Type": types[ext] ?? "application/octet-stream" });
  const stream = createReadStream(filePath);
  stream.on("error", () => {
    if (!res.headersSent) {
      res.writeHead(500);
    }
    res.end();
  });
  stream.pipe(res);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`Port ${port} is already in use. Stop the other Storybook server or set STORYBOOK_PORT.`);
  }
  console.error(error);
  process.exit(1);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Storybook served at http://127.0.0.1:${port}/storybook/`);
});

const shutdown = () => {
  server.close(() => process.exit(0));
};
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
