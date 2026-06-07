import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/**/*.test.{ts,tsx}",
        "src/**/index.ts",
        "src/**/icons.tsx",
        "src/**/*Context.tsx",
        "src/**/calendarClassNames.ts",
        "src/test/**"
      ],
      thresholds: {
        statements: 95,
        branches: 85,
        functions: 90,
        lines: 95
      }
    }
  }
});
