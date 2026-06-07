import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const version = process.argv[2];
const outputPath = process.argv[3] ?? "release-notes.md";

if (!version) {
  console.error("Usage: node scripts/github-release-notes.mjs <version> [output-file]");
  process.exit(1);
}

const packages = [
  { dir: "react", name: "@zed-ui/react" },
  { dir: "themes", name: "@zed-ui/themes" },
  { dir: "system", name: "@zed-ui/system" },
  { dir: "hooks", name: "@zed-ui/hooks" },
  { dir: "utils", name: "@zed-ui/utils" },
  { dir: "icons", name: "@zed-ui/icons" }
];

function extractSection(markdown, targetVersion) {
  const header = `## ${targetVersion}`;
  const start = markdown.indexOf(header);
  if (start === -1) {
    return null;
  }

  const rest = markdown.slice(start + header.length);
  const next = rest.search(/\n## /);
  return (next === -1 ? rest : rest.slice(0, next)).trim();
}

let body = `# Zed UI v${version}\n\n`;
let hasEntries = false;

for (const pkg of packages) {
  const changelogPath = join("packages", pkg.dir, "CHANGELOG.md");
  const markdown = readFileSync(changelogPath, "utf8");
  const section = extractSection(markdown, version);

  if (section) {
    hasEntries = true;
    body += `## ${pkg.name}\n\n${section}\n\n`;
  }
}

if (!hasEntries) {
  body += "_No changelog entries found for this version._\n\n";
}

body += [
  "## Install",
  "",
  "```bash",
  "npm install @zed-ui/react @zed-ui/themes",
  "```",
  "",
  "**Docs:** https://zed-ui.zedcraftstudio.com",
  ""
].join("\n");

writeFileSync(outputPath, body);
