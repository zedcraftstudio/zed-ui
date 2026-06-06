import type { StorybookConfig } from "@storybook/react-vite";
import { fileURLToPath, URL } from "node:url";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  viteFinal: async (config) => {
    config.resolve ??= {};
    config.resolve.alias = [
      ...(Array.isArray(config.resolve.alias) ? config.resolve.alias : []),
      {
        find: "@zed-ui/react/styles.css",
        replacement: fileURLToPath(new URL("../../../packages/react/src/styles.css", import.meta.url))
      },
      {
        find: "@zed-ui/react",
        replacement: fileURLToPath(new URL("../../../packages/react/src/index.ts", import.meta.url))
      }
    ];
    return config;
  }
};

export default config;
