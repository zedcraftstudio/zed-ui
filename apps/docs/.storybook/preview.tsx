import type { Preview } from "@storybook/react";
import { ThemeProvider, createTheme } from "@zed-ui/react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@zed-ui/react/styles.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={createTheme()}>
        <div style={{ padding: 24 }}>
          <Story />
        </div>
      </ThemeProvider>
    )
  ],
  parameters: {
    layout: "fullscreen"
  }
};

export default preview;
