import { defineConfig, devices } from "@playwright/test";

/** Dedicated port so visual e2e does not clash with `test-storybook` / `dev:docs` on 6006. */
const storybookPort = process.env.STORYBOOK_E2E_PORT ?? "6007";
const storybookUrl = `http://127.0.0.1:${storybookPort}/storybook/`;

export default defineConfig({
  testDir: "./e2e/storybook",
  fullyParallel: false,
  workers: 1,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 1,
  reporter: "list",
  snapshotPathTemplate: "{testDir}/__screenshots__/{testFilePath}/{arg}{ext}",
  use: {
    baseURL: storybookUrl,
    trace: "on-first-retry",
    viewport: { width: 1280, height: 720 }
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: `STORYBOOK_PORT=${storybookPort} node scripts/storybook-e2e-webserver.mjs`,
    url: storybookUrl,
    reuseExistingServer: false,
    timeout: process.env.CI ? 300_000 : 180_000
  }
});
