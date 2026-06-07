import { forwardRef, type ElementType, type ReactNode, type Ref } from "react";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { cx } from "@zed-ui/utils";
import type { ZedSize } from "../../shared/types";
import { Box, type BoxOwnProps } from "../../primitives/box/Box";

export type TopBarOwnProps = BoxOwnProps & {
  actions?: ReactNode;
  border?: boolean;
  brand?: ReactNode;
  size?: ZedSize;
  sticky?: boolean;
  title?: ReactNode;
};

function TopBarBase(props: PolymorphicProps<ElementType, TopBarOwnProps>, ref: Ref<unknown>) {
  const {
    actions,
    as,
    border = true,
    brand,
    children,
    className,
    size = "md",
    sticky = false,
    title,
    ...rest
  } = props;

  const hasStart = Boolean(brand || title);

  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "header"}
      className={cx("zui-topbar", className)}
      data-border={border ? "" : undefined}
      data-size={size}
      data-sticky={sticky ? "" : undefined}
      {...rest}
    >
      {hasStart ? (
        <div className="zui-topbar__start">
          {brand ? <div className="zui-topbar__brand">{brand}</div> : null}
          {title ? <div className="zui-topbar__title">{title}</div> : null}
        </div>
      ) : null}
      {children ? <div className="zui-topbar__content">{children}</div> : null}
      {actions ? <div className="zui-topbar__actions">{actions}</div> : null}
    </Box>
  );
}

export const TopBar = forwardRef(TopBarBase) as PolymorphicComponent<"header", TopBarOwnProps>;

export type TopBarBrandOwnProps = BoxOwnProps;

function TopBarBrandBase(
  props: PolymorphicProps<ElementType, TopBarBrandOwnProps>,
  ref: Ref<unknown>
) {
  const { className, ...rest } = props;
  return (
    <Box ref={ref as Ref<HTMLElement>} className={cx("zui-topbar__brand", className)} {...rest} />
  );
}

export const TopBarBrand = forwardRef(TopBarBrandBase) as PolymorphicComponent<
  "div",
  TopBarBrandOwnProps
>;

export type TopBarTitleOwnProps = BoxOwnProps;

function TopBarTitleBase(
  props: PolymorphicProps<ElementType, TopBarTitleOwnProps>,
  ref: Ref<unknown>
) {
  const { as, className, ...rest } = props;
  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "h1"}
      className={cx("zui-topbar__title", className)}
      {...rest}
    />
  );
}

export const TopBarTitle = forwardRef(TopBarTitleBase) as PolymorphicComponent<
  "h1",
  TopBarTitleOwnProps
>;

export type TopBarActionsOwnProps = BoxOwnProps;

function TopBarActionsBase(
  props: PolymorphicProps<ElementType, TopBarActionsOwnProps>,
  ref: Ref<unknown>
) {
  const { className, ...rest } = props;
  return (
    <Box ref={ref as Ref<HTMLElement>} className={cx("zui-topbar__actions", className)} {...rest} />
  );
}

export const TopBarActions = forwardRef(TopBarActionsBase) as PolymorphicComponent<
  "div",
  TopBarActionsOwnProps
>;

export const TopBarParts = {
  Actions: TopBarActions,
  Brand: TopBarBrand,
  Root: TopBar,
  Title: TopBarTitle
};

Object.assign(TopBar, TopBarParts);
