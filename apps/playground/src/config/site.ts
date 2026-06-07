import type { ComponentCategory } from "./components";
import { getComponentById } from "./components";
import reactPackage from "../../../../packages/react/package.json" with { type: "json" };

export const GITHUB_REPO = "https://github.com/zedcraftstudio/zed-ui";
export const GITHUB_BRANCH = "main";

export const DOCS_SITE_URL = "https://zed-ui.zedcraftstudio.com";

export const LIBRARY_VERSION = reactPackage.version;
export const VERSION_LABEL = `v${LIBRARY_VERSION}`;

const storybookFromEnv = import.meta.env.VITE_STORYBOOK_URL;

/** Set `VITE_STORYBOOK_URL` in production builds. Dev falls back to local Storybook. */
export const STORYBOOK_URL: string | undefined = storybookFromEnv
  ? storybookFromEnv
  : import.meta.env.DEV
    ? "http://localhost:6006"
    : `${DOCS_SITE_URL}/storybook/`;

export function githubEditUrl(sourcePath: string): string {
  return `${GITHUB_REPO}/edit/${GITHUB_BRANCH}/${sourcePath}`;
}

export function githubBlobUrl(sourcePath: string): string {
  return `${GITHUB_REPO}/blob/${GITHUB_BRANCH}/${sourcePath}`;
}

export const CHANGELOG_URL = githubBlobUrl("packages/react/CHANGELOG.md");

const CATEGORY_SOURCE: Record<ComponentCategory, string> = {
  Layout: "apps/playground/src/docs/sections/layout.tsx",
  Typography: "apps/playground/src/docs/sections/typography.tsx",
  Actions: "apps/playground/src/docs/sections/actions.tsx",
  Forms: "apps/playground/src/docs/sections/forms.tsx",
  Feedback: "apps/playground/src/docs/sections/feedback.tsx",
  Overlays: "apps/playground/src/docs/sections/overlays.tsx",
  "Data display": "apps/playground/src/docs/sections/data-display.tsx",
  Navigation: "apps/playground/src/docs/sections/navigation.tsx"
};

export function getComponentEditPath(componentId: string): string {
  const component = getComponentById(componentId);
  if (!component) {
    return "apps/playground/src/docs/registry.ts";
  }
  return CATEGORY_SOURCE[component.category];
}
