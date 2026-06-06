import { forwardRef, type ElementType, type Ref } from "react";
import { useComponentDefaults } from "@zed-ui/themes";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { cx } from "@zed-ui/utils";
import { Box, type BoxOwnProps } from "../box/Box";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingSize =
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "lg"
  | "md"
  | "sm"
  | "xl"
  | "xs";
export type HeadingWeight = "bold" | "medium" | "regular" | "semibold";

export type HeadingOwnProps = BoxOwnProps & {
  level?: HeadingLevel;
  size?: HeadingSize;
  weight?: HeadingWeight;
};

const defaultSizeByLevel: Record<HeadingLevel, HeadingSize> = {
  1: "4xl",
  2: "3xl",
  3: "2xl",
  4: "xl",
  5: "lg",
  6: "md"
};

function HeadingBase(props: PolymorphicProps<ElementType, HeadingOwnProps>, ref: Ref<unknown>) {
  const defaults = useComponentDefaults("Heading");
  const {
    as,
    className,
    level: levelProp = 2,
    size: sizeProp,
    style,
    weight: weightProp,
    ...rest
  } = props;
  const level = levelProp as HeadingLevel;
  const size = (sizeProp ??
    (defaults?.size as HeadingSize | undefined) ??
    defaultSizeByLevel[level]) as HeadingSize;
  const weight = (weightProp ??
    (defaults?.weight as HeadingWeight | undefined) ??
    "semibold") as HeadingWeight;
  const Component = as ?? (`h${level}` as ElementType);

  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={Component}
      className={cx("zui-heading", className)}
      data-level={level}
      data-size={size}
      data-weight={weight}
      style={{
        fontSize: `var(--zui-fontSizes-${size})`,
        fontWeight: `var(--zui-fontWeights-${weight})`,
        lineHeight: "var(--zui-lineHeights-tight)",
        letterSpacing:
          size === "5xl" || size === "6xl" || size === "7xl"
            ? "var(--zui-letterSpacings-tight)"
            : undefined,
        ...style
      }}
      {...rest}
    />
  );
}

export const Heading = forwardRef(HeadingBase) as PolymorphicComponent<"h2", HeadingOwnProps>;
