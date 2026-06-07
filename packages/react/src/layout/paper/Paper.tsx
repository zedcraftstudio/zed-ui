import { forwardRef, type ElementType, type Ref } from "react";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { useComponentDefaults } from "@zed-ui/themes";
import { cx } from "@zed-ui/utils";
import type { ZedRadius, ZedSize } from "../../shared/types";
import { Box, type BoxOwnProps } from "../../primitives/box/Box";

export type PaperVariant = "elevated" | "filled" | "outline" | "subtle";

export type PaperOwnProps = BoxOwnProps & {
  radius?: ZedRadius;
  size?: ZedSize;
  variant?: PaperVariant;
};

function PaperBase(props: PolymorphicProps<ElementType, PaperOwnProps>, ref: Ref<unknown>) {
  const defaults = useComponentDefaults("Paper");
  const {
    as,
    className,
    radius = "md",
    size: sizeProp,
    variant: variantProp,
    ...rest
  } = props;
  const size = (sizeProp ?? (defaults?.size as ZedSize | undefined) ?? "md") as ZedSize;
  const variant = (variantProp ??
    (defaults?.variant as PaperVariant | undefined) ??
    "elevated") as PaperVariant;

  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "div"}
      className={cx("zui-paper", className)}
      data-radius={radius}
      data-size={size}
      data-variant={variant}
      {...rest}
    />
  );
}

export const Paper = forwardRef(PaperBase) as PolymorphicComponent<"div", PaperOwnProps>;
