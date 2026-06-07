import { forwardRef, type ElementType, type Ref } from "react";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { cx } from "@zed-ui/utils";
import type { ZedColor } from "../../shared/types";
import { Box, type BoxOwnProps } from "../../primitives/box/Box";

export type LinkOwnProps = Omit<BoxOwnProps, "color"> & {
  color?: ZedColor;
  external?: boolean;
  underline?: "always" | "hover" | "none";
};

function LinkBase(props: PolymorphicProps<ElementType, LinkOwnProps>, ref: Ref<unknown>) {
  const {
    as,
    children,
    className,
    color = "primary",
    external = false,
    rel,
    target,
    underline = "hover",
    ...rest
  } = props;

  const externalProps = external
    ? {
        rel: rel ?? "noopener noreferrer",
        target: target ?? "_blank"
      }
    : { rel, target };

  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "a"}
      className={cx("zui-link", className)}
      data-color={color}
      data-underline={underline}
      {...externalProps}
      {...rest}
    >
      {children}
    </Box>
  );
}

export const Link = forwardRef(LinkBase) as PolymorphicComponent<"a", LinkOwnProps>;
