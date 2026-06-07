import { defineConfig, devices } from "@playwright/test";

/** Dedicated port so visual e2e does not clash with `test-storybook` / `dev:docs` on 6006. */
const storybookPort = process.env.STORYBOOK_E2E_PORT ?? "6007";
const storybookUrl = `http://127.0.0.1:${storybookPort}/storybook/`;

export default defineConfig({
  testDir: "./e2e/storybook",
  fullyParallel: false,
  workers: 1,
  forbidOnly: Boolean(process.env.CI),
  retries: 2,
  reporter: "list",
  snapshotPathTemplate: "{testDir}/__screenshots__/{testFilePath}/{arg}{ext}",
  use: {
    baseURL: storybookUrl,
    trace: "on-first-retry"
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: `pnpm --filter @zed-ui/docs build:pages && STORYBOOK_PORT=${storybookPort} node scripts/serve-storybook.mjs`,
    url: storybookUrl,
    reuseExistingServer: false,
    timeout: 180_000
  }
});
