import {
  darkTheme,
  defaultTheme,
  densityMultipliers,
  type DeepPartial,
  type ZedTheme
} from "./tokens";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function mergeDeep<TValue extends Record<string, unknown>>(
  base: TValue,
  override?: DeepPartial<TValue>
): TValue {
  if (!override) {
    return { ...base };
  }

  const output: Record<string, unknown> = { ...base };

  for (const [key, value] of Object.entries(override)) {
    const baseValue = output[key];
    output[key] =
      isRecord(baseValue) && isRecord(value)
        ? mergeDeep(baseValue, value as DeepPartial<Record<string, unknown>>)
        : value;
  }

  return output as TValue;
}

function applyDensity(theme: ZedTheme): ZedTheme {
  const multiplier = densityMultipliers[theme.density];
  if (multiplier === 1) {
    return theme;
  }

  const scaledSpace = Object.fromEntries(
    Object.entries(theme.space).map(([key, value]) => {
      const numeric = Number.parseFloat(value);
      const unit = value.replace(String(numeric), "");
      if (Number.isNaN(numeric) || key === "0") {
        return [key, value];
      }
      return [key, `${(numeric * multiplier).toFixed(4).replace(/\.?0+$/, "")}${unit}`];
    })
  ) as ZedTheme["space"];

  return { ...theme, space: scaledSpace };
}

export type CreateThemeOptions = DeepPartial<ZedTheme> & {
  colorScheme?: ZedTheme["colorScheme"];
  density?: ZedTheme["density"];
};

export function createTheme(options: CreateThemeOptions = {}): ZedTheme {
  const base = options.colorScheme === "dark" ? darkTheme : defaultTheme;
  const merged = mergeDeep(
    base as unknown as Record<string, unknown>,
    options as DeepPartial<Record<string, unknown>>
  ) as ZedTheme;

  if (!merged.colors.accent || merged.colors.primary) {
    merged.colors.accent = merged.colors.primary;
  }

  return applyDensity(merged);
}
