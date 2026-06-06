import { forwardRef, type CSSProperties, type ElementType, type Ref } from "react";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { cx } from "@zed-ui/utils";
import { Box, type BoxOwnProps } from "../box/Box";

export type FlexOwnProps = BoxOwnProps & {
  align?: CSSProperties["alignItems"];
  basis?: CSSProperties["flexBasis"];
  direction?: CSSProperties["flexDirection"];
  grow?: CSSProperties["flexGrow"];
  inline?: boolean;
  justify?: CSSProperties["justifyContent"];
  shrink?: CSSProperties["flexShrink"];
  wrap?: CSSProperties["flexWrap"];
};

function FlexBase(props: PolymorphicProps<ElementType, FlexOwnProps>, ref: Ref<unknown>) {
  const {
    align,
    basis,
    className,
    direction = "row",
    display,
    grow,
    inline = false,
    justify,
    shrink,
    style,
    wrap,
    ...rest
  } = props;

  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      align={align}
      className={cx("zui-flex", inline && "zui-flex--inline", className)}
      display={display ?? (inline ? "inline-flex" : "flex")}
      justify={justify}
      style={{
        flexBasis: basis,
        flexDirection: direction,
        flexGrow: grow,
        flexShrink: shrink,
        flexWrap: wrap,
        ...style
      }}
      {...rest}
    />
  );
}

export const Flex = forwardRef(FlexBase) as PolymorphicComponent<"div", FlexOwnProps>;

export type SpacerOwnProps = BoxOwnProps;

function SpacerBase(props: PolymorphicProps<ElementType, SpacerOwnProps>, ref: Ref<unknown>) {
  const { className, flex = "1", ...rest } = props;

  return (
    <Box ref={ref as Ref<HTMLElement>} className={cx("zui-spacer", className)} flex={flex} {...rest} />
  );
}

export const Spacer = forwardRef(SpacerBase) as PolymorphicComponent<"div", SpacerOwnProps>;

export const FlexParts = {
  Root: Flex,
  Spacer
};
