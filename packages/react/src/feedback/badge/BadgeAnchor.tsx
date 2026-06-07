import { forwardRef, type ElementType, type ReactNode, type Ref } from "react";
import { useComponentDefaults } from "@zed-ui/themes";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { cx, dataAttr } from "@zed-ui/utils";
import type { BadgeVariant, ZedColor, ZedRadius, ZedSize } from "../../shared/types";
import { Box, type BoxOwnProps } from "../../primitives/box/Box";
import { Badge } from "./Badge";

export type BadgeAnchorPlacement = "bottom-end" | "bottom-start" | "top-end" | "top-start";

export type BadgeAnchorOwnProps = Omit<BoxOwnProps, "color"> & {
  children?: ReactNode;
  color?: ZedColor;
  content?: ReactNode;
  dot?: boolean;
  max?: number;
  pill?: boolean;
  placement?: BadgeAnchorPlacement;
  radius?: ZedRadius;
  showZero?: boolean;
  size?: ZedSize;
  variant?: BadgeVariant;
};

function shouldShowBadge(content: ReactNode | undefined, dot: boolean, showZero: boolean): boolean {
  if (dot) {
    return true;
  }

  if (content == null || content === false) {
    return false;
  }

  if (showZero) {
    return true;
  }

  return content !== 0 && content !== "0";
}

function BadgeAnchorBase(
  props: PolymorphicProps<ElementType, BadgeAnchorOwnProps>,
  ref: Ref<unknown>
) {
  const defaults = useComponentDefaults("Badge");
  const {
    as,
    children,
    className,
    color = (defaults?.color as ZedColor | undefined) ?? "danger",
    content,
    dot = false,
    max,
    pill = true,
    placement = "top-end",
    radius,
    showZero = false,
    size = (defaults?.size as ZedSize | undefined) ?? "sm",
    variant = "solid",
    ...rest
  } = props;

  const visible = shouldShowBadge(content, dot, showZero);

  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "span"}
      className={cx("zui-badge-anchor", className)}
      data-dot={dataAttr(dot)}
      data-placement={placement}
      data-size={size}
      {...rest}
    >
      {children}
      {visible ? (
        dot ? (
          <Badge
            aria-hidden
            className="zui-badge-anchor__badge"
            color={color}
            pill={pill}
            radius={radius}
            size={size}
            variant="dot"
          />
        ) : (
          <Badge
            className="zui-badge-anchor__badge"
            color={color}
            max={max}
            pill={pill}
            radius={radius}
            size={size}
            variant={variant}
          >
            {content}
          </Badge>
        )
      ) : null}
    </Box>
  );
}

export const BadgeAnchor = forwardRef(BadgeAnchorBase) as PolymorphicComponent<
  "span",
  BadgeAnchorOwnProps
>;
