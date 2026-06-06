import { createTheme } from "@zed-ui/react";

/** Peacock Blue primary — deep blue-teal inspired by peacock feather tones. */
const peacockPrimary = {
  solid: "#005F73",
  hover: "#004A59",
  soft: "#E1F0F4",
  text: "#004558",
  contrast: "#FFFFFF"
};

const peacockPrimaryDark = {
  solid: "#47B5C8",
  hover: "#63C9DA",
  soft: "#0E2F38",
  text: "#8AD4E3",
  contrast: "#03161C"
};

export function createZuiTheme(scheme: "light" | "dark") {
  if (scheme === "dark") {
    return createTheme({
      colorScheme: "dark",
      colors: {
        bg: {
          canvas: "#0E1518",
          surface: "#151D22",
          raised: "#1A2429",
          muted: "#10181C",
          inverse: "#FFFFFF"
        },
        text: {
          primary: "#F7FAFC",
          secondary: "#A8B8BE",
          muted: "#6B828A",
          inverse: "#0E1518"
        },
        border: {
          subtle: "#1F2A30",
          default: "#2E3C44",
          strong: "#4A5E68"
        },
        primary: peacockPrimaryDark
      },
      shadows: {
        focus: "0 0 0 3px rgb(71 181 200 / 28%)"
      },
      fontFamilies: {
        sans: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
      }
    });
  }

  return createTheme({
    colorScheme: "light",
    colors: {
      bg: {
        canvas: "#FFFFFF",
        surface: "#FFFFFF",
        raised: "#FFFFFF",
        muted: "#F7FAFC",
        inverse: "#0E1518"
      },
      text: {
        primary: "#1A202C",
        secondary: "#4A5568",
        muted: "#718096",
        inverse: "#FFFFFF"
      },
      border: {
        subtle: "#EDF2F7",
        default: "#E2E8F0",
        strong: "#CBD5E0"
      },
      primary: peacockPrimary
    },
    shadows: {
      focus: "0 0 0 3px rgb(0 95 115 / 22%)"
    },
    fontFamilies: {
      sans: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    }
  });
}
