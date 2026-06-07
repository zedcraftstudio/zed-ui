import {
  forwardRef,
  isValidElement,
  type ElementType,
  type ReactElement,
  type ReactNode,
  type Ref
} from "react";
import { Slot, type PolymorphicComponent, type PolymorphicProps } from "@zed-ui/system";
import { useComponentDefaults } from "@zed-ui/themes";
import { cx, dataAttr } from "@zed-ui/utils";
import type { ZedColor, ZedRadius, ZedSize, ZedVariant } from "../../shared/types";
import { Box, type BoxOwnProps } from "../../primitives/box/Box";
import { Spinner } from "../../feedback/spinner/Spinner";

export type IconButtonOwnProps = Omit<BoxOwnProps, "color" | "radius"> & {
  "aria-label": string;
  color?: ZedColor;
  icon?: ReactNode;
  loading?: boolean;
  radius?: ZedRadius;
  size?: ZedSize;
  variant?: ZedVariant;
};

function IconButtonBase(
  props: Omit<PolymorphicProps<ElementType, IconButtonOwnProps>, "ref">,
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
    icon,
    loading = false,
    radius = "md",
    size = (defaults?.size as ZedSize | undefined) ?? "md",
    type,
    variant = (defaults?.variant as ZedVariant | undefined) ?? "ghost",
    ...rest
  } = props;

  const Component = as ?? "button";
  const isButton = Component === "button";
  const isDisabled = Boolean(disabled || loading);
  const content = loading ? <Spinner size="sm" /> : (icon ?? children);

  const sharedProps = {
    "aria-busy": loading ? true : undefined,
    className: cx("zui-icon-button", className),
    "data-color": color,
    "data-disabled": dataAttr(isDisabled),
    "data-loading": dataAttr(loading),
    "data-radius": radius,
    "data-size": size,
    "data-variant": variant,
    ...(isButton ? { disabled: isDisabled, type: type ?? "button" } : {}),
    ...(!isButton && isDisabled ? { "aria-disabled": true as const, tabIndex: -1 } : {}),
    ...rest
  };

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

export const IconButton = forwardRef(IconButtonBase) as PolymorphicComponent<
  "button",
  IconButtonOwnProps
>;
