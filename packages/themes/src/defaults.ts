import type { ZedComponentDefaults, ZedTheme } from "./tokens";

export function getComponentDefaults<TName extends keyof ZedComponentDefaults>(
  theme: ZedTheme,
  component: TName
): ZedComponentDefaults[TName] | undefined {
  return theme.components[component];
}
