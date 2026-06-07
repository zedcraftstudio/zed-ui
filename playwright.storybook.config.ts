import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e/storybook",
  fullyParallel: false,
  workers: 1,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  snapshotPathTemplate: "{testDir}/__screenshots__/{testFilePath}/{arg}{ext}",
  use: {
    baseURL: "http://127.0.0.1:6006/storybook/",
    trace: "on-first-retry"
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command:
      "pnpm --filter @zed-ui/docs build:pages && node scripts/serve-storybook.mjs",
    url: "http://127.0.0.1:6006/storybook/",
    reuseExistingServer: !process.env.CI,
    timeout: 180_000
  }
});
