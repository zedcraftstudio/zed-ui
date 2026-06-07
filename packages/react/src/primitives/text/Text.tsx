import { forwardRef, type CSSProperties, type ElementType, type Ref } from "react";
import { useComponentDefaults } from "@zed-ui/themes";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { cx } from "@zed-ui/utils";
import { Box, type BoxOwnProps } from "../box/Box";

export type TextSize = "2xl" | "3xl" | "4xl" | "lg" | "md" | "sm" | "xl" | "xs";
export type TextWeight = "bold" | "medium" | "regular" | "semibold";

export type TextOwnProps = Omit<BoxOwnProps, "align"> & {
  align?: CSSProperties["textAlign"];
  lineClamp?: number;
  size?: TextSize;
  truncate?: boolean;
  weight?: TextWeight;
};

function TextBase(props: PolymorphicProps<ElementType, TextOwnProps>, ref: Ref<unknown>) {
  const defaults = useComponentDefaults("Text");
  const {
    align: textAlign,
    as,
    className,
    lineClamp,
    size: sizeProp,
    style,
    truncate = false,
    weight: weightProp,
    ...rest
  } = props;
  const size = (sizeProp ?? (defaults?.size as TextSize | undefined) ?? "md") as TextSize;
  const weight = (weightProp ??
    (defaults?.weight as TextWeight | undefined) ??
    "regular") as TextWeight;

  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "p"}
      className={cx(
        "zui-text",
        truncate && "zui-text--truncate",
        lineClamp != null && "zui-text--line-clamp",
        className
      )}
      data-line-clamp={lineClamp}
      data-size={size}
      data-weight={weight}
      style={{
        fontSize: `var(--zui-fontSizes-${size})`,
        fontWeight: `var(--zui-fontWeights-${weight})`,
        textAlign,
        ...(lineClamp != null
          ? {
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: lineClamp,
              display: "-webkit-box",
              overflow: "hidden"
            }
          : null),
        ...style
      }}
      {...rest}
    />
  );
}

export const Text = forwardRef(TextBase) as PolymorphicComponent<"p", TextOwnProps>;
