import { forwardRef, type ElementType, type Ref } from "react";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { cx, dataAttr } from "@zed-ui/utils";
import type { ZedSize } from "../../shared/types";
import { Box, type BoxOwnProps } from "../box/Box";

export type ContainerSize = ZedSize | "2xl" | "full";

export type ContainerOwnProps = BoxOwnProps & {
  /** @deprecated Use `centerContent` */
  centered?: boolean;
  centerContent?: boolean;
  fluid?: boolean;
  size?: ContainerSize;
};

function ContainerBase(props: PolymorphicProps<ElementType, ContainerOwnProps>, ref: Ref<unknown>) {
  const {
    centerContent,
    centered = true,
    className,
    fluid = false,
    size = "xl",
    style,
    width,
    ...rest
  } = props;
  const shouldCenter = centerContent ?? centered;

  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      className={cx("zui-container", className)}
      data-centered={dataAttr(shouldCenter)}
      data-fluid={dataAttr(fluid)}
      data-size={fluid ? undefined : size}
      style={{
        maxWidth: fluid ? undefined : `var(--zui-containers-${size})`,
        width: width ?? "100%",
        ...style
      }}
      {...rest}
    />
  );
}

export const Container = forwardRef(ContainerBase) as PolymorphicComponent<"div", ContainerOwnProps>;
