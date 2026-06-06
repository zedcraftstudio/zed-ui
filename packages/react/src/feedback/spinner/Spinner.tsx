import { forwardRef, type ElementType, type Ref } from "react";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { cx } from "@zed-ui/utils";
import type { ZedSize } from "../../shared/types";
import { Box, type BoxOwnProps } from "../../primitives/box/Box";

export type SpinnerOwnProps = BoxOwnProps & {
  size?: ZedSize;
};

function SpinnerBase(props: PolymorphicProps<ElementType, SpinnerOwnProps>, ref: Ref<unknown>) {
  const { className, size = "md", "aria-label": ariaLabel = "Loading", ...rest } = props;

  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as="span"
      aria-label={ariaLabel}
      className={cx("zui-spinner", className)}
      data-size={size}
      role="status"
      {...rest}
    />
  );
}

export const Spinner = forwardRef(SpinnerBase) as PolymorphicComponent<"span", SpinnerOwnProps>;
