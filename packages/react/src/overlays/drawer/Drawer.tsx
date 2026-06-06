import { Drawer as BaseDrawer } from "@base-ui/react/drawer";
import type { ReactNode } from "react";
import { cx } from "@zed-ui/utils";
import { Box } from "../../primitives/box/Box";

export type DrawerContentProps = {
  children: ReactNode;
  className?: string;
  side?: "left" | "right" | "top" | "bottom";
  title?: ReactNode;
};

/**
 * Precomposed drawer content following Base UI anatomy:
 * Portal → Backdrop + Viewport → Popup.
 */
export function DrawerContent({ children, className, side = "right", title }: DrawerContentProps) {
  return (
    <BaseDrawer.Portal>
      <BaseDrawer.Backdrop className="zui-drawer__backdrop" />
      <BaseDrawer.Viewport className="zui-drawer__viewport" data-side={side}>
        <BaseDrawer.Popup className={cx("zui-drawer__popup", className)} data-side={side}>
          {title ? (
            <BaseDrawer.Title className="zui-drawer__title">{title}</BaseDrawer.Title>
          ) : null}
          <Box className="zui-drawer__body">{children}</Box>
          <BaseDrawer.Close className="zui-drawer__close" aria-label="Close" />
        </BaseDrawer.Popup>
      </BaseDrawer.Viewport>
    </BaseDrawer.Portal>
  );
}
