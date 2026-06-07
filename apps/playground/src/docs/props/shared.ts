import type { PropRow } from "./types";

export const POLYMORPHIC_PROPS: PropRow[] = [
  {
    name: "as",
    default: "—",
    type: "ElementType",
    description:
      "The underlying element to render. Use to render a semantic element while keeping styles."
  },
  {
    name: "asChild",
    default: "false",
    type: "boolean",
    description:
      "Merge props onto the child element instead of rendering a wrapper. Useful for composition with routers or links."
  }
];

export const SYSTEM_STYLE_PROPS: PropRow[] = [
  { name: "p", default: "—", type: `SpaceToken | undefined` },
  { name: "px", default: "—", type: `SpaceToken | undefined` },
  { name: "py", default: "—", type: `SpaceToken | undefined` },
  { name: "m", default: "—", type: `SpaceToken | undefined` },
  { name: "gap", default: "—", type: `SpaceToken | undefined` },
  {
    name: "bg",
    default: "—",
    type: `"canvas" | "surface" | "raised" | "inverse" | "muted" | undefined`
  },
  {
    name: "borderWidth",
    default: "—",
    type: `"0" | "1" | "2" | CSSProperties["borderWidth"] | undefined`,
    description: "Applies a solid border when set."
  },
  {
    name: "borderColor",
    default: "—",
    type: `"subtle" | "default" | "strong" | undefined`,
    description: "Border color token. Pair with borderWidth."
  },
  {
    name: "color",
    default: "—",
    type: `"primary" | "secondary" | "muted" | "inverse" | undefined`
  },
  {
    name: "radius",
    default: "—",
    type: `"none" | "xs" | "sm" | "md" | "lg" | "xl" | "full" | undefined`
  },
  { name: "shadow", default: "—", type: `"none" | "sm" | "md" | "lg" | "focus" | undefined` },
  { name: "width", default: "—", type: `CSSProperties["width"] | undefined` },
  { name: "height", default: "—", type: `CSSProperties["height"] | undefined` },
  { name: "display", default: "—", type: `CSSProperties["display"] | undefined` }
];

/** Box-based components: polymorphic + token system props + component-specific rows. */
export function boxProps(specific: PropRow[] = []): PropRow[] {
  return [...POLYMORPHIC_PROPS, ...SYSTEM_STYLE_PROPS, ...specific];
}

export const ZED_SIZE = '"xs" | "sm" | "md" | "lg" | "xl"';
export const ZED_VARIANT = '"solid" | "outline" | "ghost" | "soft"';
export const CHECKBOX_VARIANT = '"outline" | "solid" | "soft"';
export const CHECKBOX_CARD_VARIANT = '"outline" | "subtle" | "solid"';
export const ALERT_STATUS = '"info" | "success" | "warning" | "error" | "neutral"';
export const ALERT_VARIANT = '"subtle" | "surface" | "outline" | "solid"';
export const BADGE_VARIANT = '"solid" | "soft" | "outline" | "ghost" | "dot"';
export const SKELETON_VARIANT = '"pulse" | "shine" | "none"';
export const INPUT_VARIANT = '"outline" | "filled" | "flushed" | "unstyled"';
export const ZED_COLOR = '"primary" | "neutral" | "danger" | "success" | "warning"';
