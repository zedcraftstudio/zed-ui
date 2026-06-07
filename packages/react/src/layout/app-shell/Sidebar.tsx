import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
  type Ref
} from "react";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { cx } from "@zed-ui/utils";
import { Box, type BoxOwnProps } from "../../primitives/box/Box";
import { Link } from "../../typography/link/Link";

export type SidebarOwnProps = BoxOwnProps & {
  collapsed?: boolean;
  width?: string;
};

function SidebarBase(props: PolymorphicProps<ElementType, SidebarOwnProps>, ref: Ref<unknown>) {
  const { as, className, collapsed = false, style, width, ...rest } = props;

  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "nav"}
      aria-label={rest["aria-label"] ?? "Sidebar"}
      className={cx("zui-sidebar", className)}
      data-collapsed={collapsed ? "" : undefined}
      style={
        width
          ? ({ "--zui-sidebar-width": width, ...style } as React.CSSProperties)
          : style
      }
      {...rest}
    />
  );
}

export const Sidebar = forwardRef(SidebarBase) as PolymorphicComponent<"nav", SidebarOwnProps>;

export type SidebarHeaderOwnProps = BoxOwnProps;

function SidebarHeaderBase(
  props: PolymorphicProps<ElementType, SidebarHeaderOwnProps>,
  ref: Ref<unknown>
) {
  const { className, ...rest } = props;
  return (
    <Box ref={ref as Ref<HTMLElement>} className={cx("zui-sidebar__header", className)} {...rest} />
  );
}

export const SidebarHeader = forwardRef(SidebarHeaderBase) as PolymorphicComponent<
  "div",
  SidebarHeaderOwnProps
>;

export type SidebarNavOwnProps = BoxOwnProps;

function SidebarNavBase(props: PolymorphicProps<ElementType, SidebarNavOwnProps>, ref: Ref<unknown>) {
  const { as, className, ...rest } = props;
  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "ul"}
      className={cx("zui-sidebar__nav", className)}
      {...rest}
    />
  );
}

export const SidebarNav = forwardRef(SidebarNavBase) as PolymorphicComponent<"ul", SidebarNavOwnProps>;

export type SidebarSectionOwnProps = BoxOwnProps & {
  label?: ReactNode;
};

function SidebarSectionBase(
  props: PolymorphicProps<ElementType, SidebarSectionOwnProps>,
  ref: Ref<unknown>
) {
  const { children, className, label, ...rest } = props;
  return (
    <Box ref={ref as Ref<HTMLElement>} className={cx("zui-sidebar__section", className)} {...rest}>
      {label ? <div className="zui-sidebar__section-label">{label}</div> : null}
      {children}
    </Box>
  );
}

export const SidebarSection = forwardRef(SidebarSectionBase) as PolymorphicComponent<
  "div",
  SidebarSectionOwnProps
>;

export type SidebarItemOwnProps = Omit<BoxOwnProps, "color"> & {
  active?: boolean;
  disabled?: boolean;
  href?: string;
  icon?: ReactNode;
};

function SidebarItemBase(props: PolymorphicProps<ElementType, SidebarItemOwnProps>, ref: Ref<unknown>) {
  const {
    active = false,
    as,
    children,
    className,
    disabled = false,
    href,
    icon,
    onClick,
    ...rest
  } = props;

  const content = (
    <>
      {icon ? <span className="zui-sidebar__icon">{icon}</span> : null}
      <span className="zui-sidebar__label">{children}</span>
    </>
  );

  const itemClassName = cx("zui-sidebar__item", className);
  const controlClassName = "zui-sidebar__control";

  if (href && !disabled) {
    return (
      <Box ref={ref as Ref<HTMLElement>} as={as ?? "li"} className={itemClassName} {...rest}>
        <Link
          aria-current={active ? "page" : undefined}
          className={controlClassName}
          data-active={active ? "" : undefined}
          href={href}
          underline="none"
        >
          {content}
        </Link>
      </Box>
    );
  }

  return (
    <Box ref={ref as Ref<HTMLElement>} as={as ?? "li"} className={itemClassName} {...rest}>
      <button
        className={controlClassName}
        data-active={active ? "" : undefined}
        disabled={disabled}
        type="button"
        onClick={onClick}
      >
        {content}
      </button>
    </Box>
  );
}

export const SidebarItem = forwardRef(SidebarItemBase) as PolymorphicComponent<
  "li",
  SidebarItemOwnProps
>;

export type SidebarFooterOwnProps = BoxOwnProps;

function SidebarFooterBase(
  props: PolymorphicProps<ElementType, SidebarFooterOwnProps>,
  ref: Ref<unknown>
) {
  const { className, ...rest } = props;
  return (
    <Box ref={ref as Ref<HTMLElement>} className={cx("zui-sidebar__footer", className)} {...rest} />
  );
}

export const SidebarFooter = forwardRef(SidebarFooterBase) as PolymorphicComponent<
  "div",
  SidebarFooterOwnProps
>;

export type SidebarDividerProps = ComponentPropsWithoutRef<"hr">;

export function SidebarDivider({ className, ...rest }: SidebarDividerProps) {
  return <hr className={cx("zui-sidebar__divider", className)} {...rest} />;
}

SidebarDivider.displayName = "SidebarDivider";

export const SidebarParts = {
  Divider: SidebarDivider,
  Footer: SidebarFooter,
  Header: SidebarHeader,
  Item: SidebarItem,
  Nav: SidebarNav,
  Root: Sidebar,
  Section: SidebarSection
};

Object.assign(Sidebar, SidebarParts);
