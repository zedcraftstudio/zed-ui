import { Drawer as BaseDrawer } from "@base-ui/react/drawer";
import type { ComponentPropsWithoutRef } from "react";

export { DrawerContent, type DrawerContentProps } from "./Drawer";
import { DrawerContent } from "./Drawer";

export const DrawerRoot = BaseDrawer.Root;
export const DrawerTrigger = BaseDrawer.Trigger;
export const DrawerPortal = BaseDrawer.Portal;
export const DrawerBackdrop = BaseDrawer.Backdrop;
export const DrawerViewport = BaseDrawer.Viewport;
export const DrawerPopup = BaseDrawer.Popup;
export const DrawerTitle = BaseDrawer.Title;
export const DrawerDescription = BaseDrawer.Description;
export const DrawerClose = BaseDrawer.Close;

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

export type DrawerRootProps = ComponentPropsWithoutRef<typeof BaseDrawer.Root>;
export type DrawerTriggerProps = ComponentPropsWithoutRef<typeof BaseDrawer.Trigger>;
export type DrawerPortalProps = ComponentPropsWithoutRef<typeof BaseDrawer.Portal>;
export type DrawerBackdropProps = ComponentPropsWithoutRef<typeof BaseDrawer.Backdrop>;
export type DrawerViewportProps = ComponentPropsWithoutRef<typeof BaseDrawer.Viewport>;
export type DrawerPopupProps = ComponentPropsWithoutRef<typeof BaseDrawer.Popup>;
export type DrawerTitleProps = ComponentPropsWithoutRef<typeof BaseDrawer.Title>;
export type DrawerDescriptionProps = ComponentPropsWithoutRef<typeof BaseDrawer.Description>;
export type DrawerCloseProps = ComponentPropsWithoutRef<typeof BaseDrawer.Close>;
