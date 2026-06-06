import { describe, expect, it } from "vitest";
import { createTheme } from "./createTheme";
import { themeToCssVars } from "./cssVars";
import { getComponentDefaults } from "./defaults";

describe("createTheme", () => {
  it("deep merges token overrides", () => {
    const theme = createTheme({
      colors: {
        primary: {
          solid: "#123456"
        }
      }
    });

    expect(theme.colors.primary.solid).toBe("#123456");
    expect(theme.colors.primary.contrast).toBe("#ffffff");
  });

  it("creates CSS variables from theme tokens", () => {
    const vars = themeToCssVars(createTheme());
    expect(vars["--zui-colors-primary-solid"]).toBe("#005F73");
    expect(vars["--zui-space-4"]).toBe("1rem");
    expect(vars["--zui-zIndex-modal"]).toBe("1300");
  });

  it("applies density scaling to space tokens", () => {
    const compact = createTheme({ density: "compact" });
    expect(compact.space["4"]).not.toBe("1rem");
  });

  it("resolves component default props", () => {
    const theme = createTheme({
      components: {
        Button: { size: "lg" }
      }
    });
    expect(getComponentDefaults(theme, "Button")?.size).toBe("lg");
  });
});
