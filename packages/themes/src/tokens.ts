export type ZedScale<T extends string = string> = Record<T, string>;

export type SemanticColorScale = ZedScale<"solid" | "hover" | "soft" | "text" | "contrast">;

export type ZedDensity = "compact" | "comfortable" | "spacious";

export type ZedTheme = {
  colorScheme: "light" | "dark";
  density: ZedDensity;
  colors: {
    bg: ZedScale<"canvas" | "surface" | "raised" | "inverse" | "muted">;
    text: ZedScale<"primary" | "secondary" | "muted" | "inverse">;
    border: ZedScale<"subtle" | "default" | "strong">;
    primary: SemanticColorScale;
    neutral: SemanticColorScale;
    success: SemanticColorScale;
    warning: SemanticColorScale;
    danger: SemanticColorScale;
    info: SemanticColorScale;
    /** @deprecated Use `primary` */
    accent: SemanticColorScale;
  };
  space: ZedScale<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
  radii: ZedScale<"none" | "xs" | "sm" | "md" | "lg" | "xl" | "full">;
  shadows: ZedScale<"none" | "sm" | "md" | "lg" | "focus">;
  fontFamilies: ZedScale<"sans" | "mono">;
  fontSizes: ZedScale<"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl">;
  fontWeights: ZedScale<"regular" | "medium" | "semibold" | "bold">;
  lineHeights: ZedScale<"tight" | "normal" | "relaxed">;
  letterSpacings: ZedScale<"tight" | "normal" | "wide">;
  sizes: ZedScale<"xs" | "sm" | "md" | "lg" | "xl" | "full">;
  breakpoints: ZedScale<"sm" | "md" | "lg" | "xl" | "2xl">;
  containers: ZedScale<"sm" | "md" | "lg" | "xl" | "2xl">;
  zIndex: ZedScale<"base" | "dropdown" | "sticky" | "overlay" | "modal" | "toast" | "tooltip">;
  motion: {
    duration: ZedScale<"fast" | "normal" | "slow">;
    easing: ZedScale<"standard" | "emphasized" | "entrance" | "exit">;
  };
  components: ZedComponentDefaults;
};

export type ZedComponentDefaults = {
  Button?: Partial<{
    variant: string;
    size: string;
    color: string;
  }>;
  Checkbox?: Partial<{
    variant: string;
    size: string;
    color: string;
  }>;
  Input?: Partial<{
    size: string;
    variant: string;
  }>;
  Switch?: Partial<{
    variant: string;
    size: string;
    color: string;
  }>;
  Radio?: Partial<{
    variant: string;
    size: string;
    color: string;
  }>;
  Alert?: Partial<{
    status: string;
    variant: string;
    size: string;
  }>;
  Badge?: Partial<{
    variant: string;
    size: string;
    color: string;
  }>;
  Skeleton?: Partial<{
    variant: string;
  }>;
  Toast?: Partial<{
    status: string;
    variant: string;
    size: string;
  }>;
  Card?: Partial<{
    variant: string;
    size: string;
  }>;
  Table?: Partial<{
    variant: string;
    size: string;
  }>;
  Tabs?: Partial<{
    color: string;
    size: string;
    variant: string;
  }>;
  Accordion?: Partial<{
    size: string;
    variant: string;
  }>;
  Menu?: Partial<{
    size: string;
  }>;
  Heading?: Partial<{
    size: string;
    weight: string;
  }>;
  Text?: Partial<{
    size: string;
    weight: string;
  }>;
};

export type DeepPartial<TValue> = {
  [TKey in keyof TValue]?: TValue[TKey] extends object ? DeepPartial<TValue[TKey]> : TValue[TKey];
};

const peacockPrimary: SemanticColorScale = {
  solid: "#005F73",
  hover: "#004A59",
  soft: "#E1F0F4",
  text: "#004558",
  contrast: "#ffffff"
};

const peacockPrimaryDark: SemanticColorScale = {
  solid: "#47B5C8",
  hover: "#63C9DA",
  soft: "#0E2F38",
  text: "#8AD4E3",
  contrast: "#03161C"
};

const sharedSemantic = {
  success: {
    solid: "#11835b",
    hover: "#0e6f4c",
    soft: "#ddf8ee",
    text: "#0b6848",
    contrast: "#ffffff"
  },
  warning: {
    solid: "#b56b00",
    hover: "#965800",
    soft: "#fff1d7",
    text: "#895100",
    contrast: "#ffffff"
  },
  danger: {
    solid: "#c83232",
    hover: "#a72626",
    soft: "#ffe4e4",
    text: "#a72626",
    contrast: "#ffffff"
  },
  info: {
    solid: "#0b6e99",
    hover: "#095a7f",
    soft: "#e0f4fc",
    text: "#085f85",
    contrast: "#ffffff"
  },
  neutral: {
    solid: "#3f4652",
    hover: "#2f3540",
    soft: "#eef1f6",
    text: "#3f4652",
    contrast: "#ffffff"
  }
} as const;

export const defaultTheme: ZedTheme = {
  colorScheme: "light",
  density: "comfortable",
  colors: {
    bg: {
      canvas: "#ffffff",
      surface: "#ffffff",
      raised: "#ffffff",
      inverse: "#121417",
      muted: "#f7f8fb"
    },
    text: {
      primary: "#16181d",
      secondary: "#3f4652",
      muted: "#687182",
      inverse: "#f9fafb"
    },
    border: {
      subtle: "#e7eaf0",
      default: "#d7dce5",
      strong: "#aeb7c6"
    },
    primary: peacockPrimary,
    accent: peacockPrimary,
    ...sharedSemantic
  },
  space: {
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem"
  },
  radii: {
    none: "0",
    xs: "0.125rem",
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px"
  },
  shadows: {
    none: "none",
    sm: "0 1px 2px rgb(16 24 40 / 8%)",
    md: "0 10px 24px rgb(16 24 40 / 10%)",
    lg: "0 18px 48px rgb(16 24 40 / 16%)",
    focus: "0 0 0 3px rgb(0 95 115 / 22%)"
  },
  fontFamilies: {
    sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "2rem",
    "4xl": "2.5rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem"
  },
  fontWeights: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700"
  },
  lineHeights: {
    tight: "1.2",
    normal: "1.5",
    relaxed: "1.75"
  },
  letterSpacings: {
    tight: "-0.01em",
    normal: "0",
    wide: "0.02em"
  },
  sizes: {
    xs: "1.75rem",
    sm: "2rem",
    md: "2.25rem",
    lg: "2.75rem",
    xl: "3.25rem",
    full: "100%"
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  containers: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1400px"
  },
  zIndex: {
    base: "0",
    dropdown: "1000",
    sticky: "1100",
    overlay: "1200",
    modal: "1300",
    toast: "1400",
    tooltip: "1500"
  },
  motion: {
    duration: {
      fast: "120ms",
      normal: "200ms",
      slow: "320ms"
    },
    easing: {
      standard: "cubic-bezier(0.2, 0, 0, 1)",
      emphasized: "cubic-bezier(0.2, 0, 0, 1.2)",
      entrance: "cubic-bezier(0, 0, 0.2, 1)",
      exit: "cubic-bezier(0.4, 0, 1, 1)"
    }
  },
  components: {
    Button: { variant: "solid", size: "md", color: "primary" },
    Checkbox: { variant: "solid", size: "md", color: "primary" },
    Input: { variant: "outline", size: "md" },
    Switch: { variant: "solid", size: "md", color: "primary" },
    Radio: { variant: "outline", size: "md", color: "primary" },
    Alert: { status: "info", variant: "subtle", size: "md" },
    Badge: { variant: "soft", size: "sm", color: "neutral" },
    Skeleton: { variant: "pulse" },
    Toast: { status: "info", variant: "surface", size: "md" },
    Card: { variant: "outline", size: "md" },
    Table: { variant: "line", size: "md" },
    Tabs: { variant: "line", size: "md", color: "primary" },
    Heading: { size: "xl", weight: "semibold" },
    Text: { size: "md", weight: "regular" }
  }
};

export const darkTheme: ZedTheme = {
  ...defaultTheme,
  colorScheme: "dark",
  colors: {
    ...defaultTheme.colors,
    bg: {
      canvas: "#0e1518",
      surface: "#151d22",
      raised: "#1a2429",
      inverse: "#f8fafc",
      muted: "#10181c"
    },
    text: {
      primary: "#f8fafc",
      secondary: "#d6dbe5",
      muted: "#98a2b3",
      inverse: "#111827"
    },
    border: {
      subtle: "#1f2a30",
      default: "#2e3c44",
      strong: "#4a5e68"
    },
    primary: peacockPrimaryDark,
    accent: peacockPrimaryDark,
    neutral: {
      solid: "#98a2b3",
      hover: "#b0b9c8",
      soft: "#242b38",
      text: "#d6dbe5",
      contrast: "#101522"
    },
    success: {
      ...defaultTheme.colors.success,
      soft: "#123528"
    },
    warning: {
      ...defaultTheme.colors.warning,
      soft: "#3a2a12"
    },
    danger: {
      ...defaultTheme.colors.danger,
      soft: "#3a1818"
    },
    info: {
      ...defaultTheme.colors.info,
      soft: "#123040"
    }
  },
  shadows: {
    ...defaultTheme.shadows,
    focus: "0 0 0 3px rgb(71 181 200 / 28%)"
  }
};

export const densityMultipliers: Record<ZedDensity, number> = {
  compact: 0.875,
  comfortable: 1,
  spacious: 1.125
};
