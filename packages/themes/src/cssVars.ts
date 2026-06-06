import type { ZedTheme } from "./tokens";

function flattenTokens(
  value: unknown,
  path: string[] = [],
  output: Record<string, string> = {}
): Record<string, string> {
  if (typeof value === "string") {
    output[`--zui-${path.join("-")}`] = value;
    return output;
  }

  if (typeof value === "object" && value !== null) {
    for (const [key, child] of Object.entries(value)) {
      flattenTokens(child, [...path, key], output);
    }
  }

  return output;
}

export function themeToCssVars(theme: ZedTheme): Record<string, string> {
  return flattenTokens({
    colors: theme.colors,
    space: theme.space,
    radii: theme.radii,
    shadows: theme.shadows,
    fontFamilies: theme.fontFamilies,
    fontSizes: theme.fontSizes,
    fontWeights: theme.fontWeights,
    lineHeights: theme.lineHeights,
    letterSpacings: theme.letterSpacings,
    sizes: theme.sizes,
    breakpoints: theme.breakpoints,
    containers: theme.containers,
    zIndex: theme.zIndex,
    motion: theme.motion
  });
}
