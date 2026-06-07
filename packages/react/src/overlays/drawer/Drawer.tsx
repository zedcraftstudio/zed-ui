import { Drawer as BaseDrawer } from "@base-ui/react/drawer";
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cx } from "@zed-ui/utils";
import { Box } from "../../primitives/box/Box";

export type DrawerRootProps = ComponentPropsWithoutRef<typeof BaseDrawer.Root>;

export function DrawerRoot(props: DrawerRootProps) {
  return <BaseDrawer.Root {...props} />;
}

export type DrawerTriggerProps = ComponentPropsWithoutRef<typeof BaseDrawer.Trigger>;

export const DrawerTrigger = forwardRef<HTMLButtonElement, DrawerTriggerProps>(
  function DrawerTrigger({ className, ...rest }, ref) {
    return <BaseDrawer.Trigger ref={ref} className={cx("zui-drawer__trigger", className)} {...rest} />;
  }
);

DrawerTrigger.displayName = "DrawerTrigger";

export type DrawerPortalProps = ComponentPropsWithoutRef<typeof BaseDrawer.Portal>;

export function DrawerPortal(props: DrawerPortalProps) {
  return <BaseDrawer.Portal {...props} />;
}

export type DrawerBackdropProps = ComponentPropsWithoutRef<typeof BaseDrawer.Backdrop>;

export const DrawerBackdrop = forwardRef<HTMLDivElement, DrawerBackdropProps>(
  function DrawerBackdrop({ className, ...rest }, ref) {
    return (
      <BaseDrawer.Backdrop ref={ref} className={cx("zui-drawer__backdrop", className)} {...rest} />
    );
  }
);

DrawerBackdrop.displayName = "DrawerBackdrop";

export type DrawerViewportProps = ComponentPropsWithoutRef<typeof BaseDrawer.Viewport>;

export const DrawerViewport = forwardRef<HTMLDivElement, DrawerViewportProps>(
  function DrawerViewport({ className, ...rest }, ref) {
    return (
      <BaseDrawer.Viewport ref={ref} className={cx("zui-drawer__viewport", className)} {...rest} />
    );
  }
);

DrawerViewport.displayName = "DrawerViewport";

export type DrawerPopupProps = ComponentPropsWithoutRef<typeof BaseDrawer.Popup>;

export const DrawerPopup = forwardRef<HTMLDivElement, DrawerPopupProps>(function DrawerPopup(
  { className, ...rest },
  ref
) {
  return <BaseDrawer.Popup ref={ref} className={cx("zui-drawer__popup", className)} {...rest} />;
});

DrawerPopup.displayName = "DrawerPopup";

export type DrawerTitleProps = ComponentPropsWithoutRef<typeof BaseDrawer.Title>;

export const DrawerTitle = forwardRef<HTMLHeadingElement, DrawerTitleProps>(function DrawerTitle(
  { className, ...rest },
  ref
) {
  return <BaseDrawer.Title ref={ref} className={cx("zui-drawer__title", className)} {...rest} />;
});

DrawerTitle.displayName = "DrawerTitle";

export type DrawerDescriptionProps = ComponentPropsWithoutRef<typeof BaseDrawer.Description>;

export const DrawerDescription = forwardRef<HTMLParagraphElement, DrawerDescriptionProps>(
  function DrawerDescription({ className, ...rest }, ref) {
    return (
      <BaseDrawer.Description
        ref={ref}
        className={cx("zui-drawer__description", className)}
        {...rest}
      />
    );
  }
);

DrawerDescription.displayName = "DrawerDescription";

export type DrawerCloseProps = ComponentPropsWithoutRef<typeof BaseDrawer.Close>;

export const DrawerClose = forwardRef<HTMLButtonElement, DrawerCloseProps>(function DrawerClose(
  { className, ...rest },
  ref
) {
  return <BaseDrawer.Close ref={ref} className={cx("zui-drawer__close", className)} {...rest} />;
});

DrawerClose.displayName = "DrawerClose";

export type DrawerContentProps = {
  children: ReactNode;
  className?: string;
  side?: "left" | "right" | "top" | "bottom";
  title?: ReactNode;
};

export function DrawerContent({ children, className, side = "right", title }: DrawerContentProps) {
  return (
    <DrawerPortal>
      <DrawerBackdrop />
      <DrawerViewport data-side={side}>
        <DrawerPopup className={className} data-side={side}>
          {title ? <DrawerTitle>{title}</DrawerTitle> : null}
          <Box className="zui-drawer__body">{children}</Box>
          <DrawerClose aria-label="Close" />
        </DrawerPopup>
      </DrawerViewport>
    </DrawerPortal>
  );
}

export const DrawerParts = {
  Backdrop: DrawerBackdrop,
  Close: DrawerClose,
  Content: DrawerContent,
  Description: DrawerDescription,
  Popup: DrawerPopup,
  Portal: DrawerPortal,
  Root: DrawerRoot,
  Title: DrawerTitle,
  Trigger: DrawerTrigger,
  Viewport: DrawerViewport
};

export const Drawer = DrawerParts;
