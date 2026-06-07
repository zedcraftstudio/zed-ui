import type { CSSProperties } from "react";

type TokenValue<TToken extends string> = TToken | (string & {});

export type SystemStyleProps = {
  align?: CSSProperties["alignItems"];
  bg?: TokenValue<"canvas" | "surface" | "raised" | "inverse" | "muted">;
  borderColor?: TokenValue<"default" | "strong" | "subtle">;
  borderWidth?: TokenValue<"0" | "1" | "2"> | CSSProperties["borderWidth"];
  color?: TokenValue<"primary" | "secondary" | "muted" | "inverse">;
  display?: CSSProperties["display"];
  flex?: CSSProperties["flex"];
  gap?: TokenValue<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
  height?: CSSProperties["height"];
  justify?: CSSProperties["justifyContent"];
  m?: TokenValue<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
  mb?: TokenValue<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
  ml?: TokenValue<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
  mr?: TokenValue<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
  mt?: TokenValue<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
  mx?: TokenValue<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
  my?: TokenValue<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
  p?: TokenValue<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
  pb?: TokenValue<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
  pl?: TokenValue<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
  pr?: TokenValue<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
  pt?: TokenValue<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
  px?: TokenValue<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
  py?: TokenValue<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16">;
  radius?: TokenValue<"none" | "xs" | "sm" | "md" | "lg" | "xl" | "full">;
  shadow?: TokenValue<"none" | "sm" | "md" | "lg" | "focus">;
  width?: CSSProperties["width"];
};

export const systemPropNames = new Set<keyof SystemStyleProps>([
  "align",
  "bg",
  "borderColor",
  "borderWidth",
  "color",
  "display",
  "flex",
  "gap",
  "height",
  "justify",
  "m",
  "mb",
  "ml",
  "mr",
  "mt",
  "mx",
  "my",
  "p",
  "pb",
  "pl",
  "pr",
  "pt",
  "px",
  "py",
  "radius",
  "shadow",
  "width"
]);

function tokenVar(group: string, value: string): string {
  if (value.startsWith("var(") || value.startsWith("#") || value.includes("(")) {
    return value;
  }
  return `var(--zui-${group}-${value}, ${value})`;
}

function space(value: string | undefined): string | undefined {
  return value === undefined ? undefined : tokenVar("space", value);
}

export function splitSystemProps<TProps extends Record<string, unknown>>(
  props: TProps
): [SystemStyleProps, Omit<TProps, keyof SystemStyleProps>] {
  const systemProps: Record<string, unknown> = {};
  const elementProps: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(props)) {
    if (systemPropNames.has(key as keyof SystemStyleProps)) {
      systemProps[key] = value;
    } else {
      elementProps[key] = value;
    }
  }

  return [systemProps as SystemStyleProps, elementProps as Omit<TProps, keyof SystemStyleProps>];
}

export function systemPropsToStyle(props: SystemStyleProps): CSSProperties {
  return {
    alignItems: props.align,
    background: props.bg ? tokenVar("colors-bg", props.bg) : undefined,
    borderColor: props.borderColor ? tokenVar("colors-border", props.borderColor) : undefined,
    borderStyle: props.borderWidth && props.borderWidth !== "0" ? "solid" : undefined,
    borderWidth:
      props.borderWidth === "1" ? "1px" : props.borderWidth === "2" ? "2px" : props.borderWidth,
    borderRadius: props.radius ? tokenVar("radii", props.radius) : undefined,
    boxShadow: props.shadow ? tokenVar("shadows", props.shadow) : undefined,
    color: props.color ? tokenVar("colors-text", props.color) : undefined,
    display: props.display,
    flex: props.flex,
    gap: space(props.gap),
    height: props.height,
    justifyContent: props.justify,
    margin: space(props.m),
    marginBlock: space(props.my),
    marginBlockEnd: space(props.mb),
    marginBlockStart: space(props.mt),
    marginInline: space(props.mx),
    marginInlineEnd: space(props.mr),
    marginInlineStart: space(props.ml),
    padding: space(props.p),
    paddingBlock: space(props.py),
    paddingBlockEnd: space(props.pb),
    paddingBlockStart: space(props.pt),
    paddingInline: space(props.px),
    paddingInlineEnd: space(props.pr),
    paddingInlineStart: space(props.pl),
    width: props.width
  };
}
