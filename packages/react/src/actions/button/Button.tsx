import {
  forwardRef,
  isValidElement,
  type ElementType,
  type ReactElement,
  type ReactNode,
  type Ref
} from "react";
import {
  Slot,
  type PolymorphicComponent,
  type PolymorphicProps
} from "@zed-ui/system";
import { useComponentDefaults } from "@zed-ui/themes";
import { cx, dataAttr } from "@zed-ui/utils";
import type { ZedColor, ZedSize, ZedVariant } from "../../shared/types";
import { Box, type BoxOwnProps } from "../../primitives/box/Box";
import { Spinner } from "../../feedback/spinner/Spinner";

export type ButtonOwnProps = Omit<BoxOwnProps, "color"> & {
  color?: ZedColor;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  size?: ZedSize;
  startIcon?: ReactNode;
  variant?: ZedVariant;
};

function ButtonBase(
  props: PolymorphicProps<ElementType, ButtonOwnProps>,
  ref: Ref<HTMLElement>
) {
  const defaults = useComponentDefaults("Button");
  const {
    as,
    asChild,
    children,
    className,
    color = (defaults?.color as ZedColor | undefined) ?? "primary",
    disabled,
    endIcon,
    fullWidth = false,
    loading = false,
    size = (defaults?.size as ZedSize | undefined) ?? "md",
    startIcon,
    type,
    variant = (defaults?.variant as ZedVariant | undefined) ?? "solid",
    ...rest
  } = props;

  const Component = as ?? "button";
  const isButton = Component === "button";
  const isDisabled = Boolean(disabled || loading);

  const sharedProps = {
    "aria-busy": loading ? true : undefined,
    className: cx("zui-button", fullWidth && "zui-button--full", className),
    "data-color": color,
    "data-disabled": dataAttr(isDisabled),
    "data-loading": dataAttr(loading),
    "data-size": size,
    "data-variant": variant,
    ...(isButton ? { disabled: isDisabled, type: type ?? "button" } : {}),
    ...(!isButton && isDisabled ? { "aria-disabled": true as const, tabIndex: -1 } : {}),
    ...rest
  };

  const content = (
    <>
      {loading ? <Spinner className="zui-button__spinner" size="sm" /> : startIcon}
      <span className="zui-button__label">{children}</span>
      {endIcon}
    </>
  );

  if (asChild && isValidElement(children)) {
    return (
      <Slot ref={ref} {...sharedProps}>
        {children as ReactElement}
      </Slot>
    );
  }

  return (
    <Box ref={ref as never} as={Component} {...sharedProps}>
      {content}
    </Box>
  );
}

export const Button = forwardRef(ButtonBase) as PolymorphicComponent<"button", ButtonOwnProps>;
