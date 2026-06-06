import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  type ElementType,
  type ReactElement,
  type ReactNode,
  type Ref
} from "react";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { cx } from "@zed-ui/utils";
import type { ZedSize } from "../../shared/types";
import { Box, type BoxOwnProps } from "../../primitives/box/Box";
import { Avatar, type AvatarOwnProps } from "./Avatar";

export type AvatarGroupStacking = "first-on-top" | "last-on-top";

export type AvatarGroupOwnProps = BoxOwnProps & {
  children?: ReactNode;
  max?: number;
  size?: ZedSize;
  stacking?: AvatarGroupStacking;
};

function AvatarGroupBase(
  props: PolymorphicProps<ElementType, AvatarGroupOwnProps>,
  ref: Ref<unknown>
) {
  const {
    as,
    children,
    className,
    max,
    size,
    stacking = "last-on-top",
    ...rest
  } = props;

  const items = Children.toArray(children).filter(isValidElement) as ReactElement<AvatarOwnProps>[];
  const overflow = max != null && items.length > max ? items.length - max : 0;
  const visible = max != null ? items.slice(0, max) : items;

  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "div"}
      className={cx("zui-avatar-group", className)}
      data-stacking={stacking}
      {...rest}
    >
      {visible.map((child, index) =>
        cloneElement(child, {
          className: cx(child.props.className, "zui-avatar-group__item"),
          key: child.key ?? index,
          size: child.props.size ?? size
        })
      )}
      {overflow > 0 ? (
        <Avatar
          className="zui-avatar-group__item zui-avatar-group__overflow"
          color="neutral"
          fallback={`+${overflow}`}
          size={size ?? visible[0]?.props.size ?? "md"}
          variant="subtle"
        />
      ) : null}
    </Box>
  );
}

export const AvatarGroup = forwardRef(AvatarGroupBase) as PolymorphicComponent<
  "div",
  AvatarGroupOwnProps
>;
