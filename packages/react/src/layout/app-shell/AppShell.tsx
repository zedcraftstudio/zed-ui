import { forwardRef, type CSSProperties, type ElementType, type ReactNode, type Ref } from "react";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { cx } from "@zed-ui/utils";
import { Box, type BoxOwnProps } from "../../primitives/box/Box";

export type AppShellOwnProps = BoxOwnProps & {
  footer?: ReactNode;
  header?: ReactNode;
  height?: "auto" | "screen";
  mainPadding?: boolean;
  sidebar?: ReactNode;
  sidebarWidth?: string;
};

function AppShellBase(props: PolymorphicProps<ElementType, AppShellOwnProps>, ref: Ref<unknown>) {
  const {
    as,
    children,
    className,
    footer,
    header,
    height = "screen",
    mainPadding = true,
    sidebar,
    sidebarWidth = "16rem",
    style,
    ...rest
  } = props;

  const shellStyle = {
    "--zui-sidebar-width": sidebarWidth,
    ...style
  } as CSSProperties;

  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "div"}
      className={cx("zui-app-shell", className)}
      data-has-footer={footer ? "" : undefined}
      data-has-header={header ? "" : undefined}
      data-has-sidebar={sidebar ? "" : undefined}
      data-height={height}
      style={shellStyle}
      {...rest}
    >
      {sidebar ? <div className="zui-app-shell__sidebar">{sidebar}</div> : null}
      <div className="zui-app-shell__main-column">
        {header ? <div className="zui-app-shell__header">{header}</div> : null}
        <main
          className="zui-app-shell__main"
          data-padded={mainPadding ? "" : undefined}
        >
          {children}
        </main>
        {footer ? <div className="zui-app-shell__footer">{footer}</div> : null}
      </div>
    </Box>
  );
}

export const AppShell = forwardRef(AppShellBase) as PolymorphicComponent<"div", AppShellOwnProps>;
