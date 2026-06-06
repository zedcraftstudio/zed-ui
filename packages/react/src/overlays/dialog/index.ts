import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import type { ComponentPropsWithoutRef } from "react";

export { DialogContent, type DialogContentProps, type DialogSize } from "./Dialog";
import { DialogContent } from "./Dialog";

export const DialogRoot = BaseDialog.Root;
export const DialogTrigger = BaseDialog.Trigger;
export const DialogPortal = BaseDialog.Portal;
export const DialogBackdrop = BaseDialog.Backdrop;
export const DialogViewport = BaseDialog.Viewport;
export const DialogPopup = BaseDialog.Popup;
export const DialogTitle = BaseDialog.Title;
export const DialogDescription = BaseDialog.Description;
export const DialogClose = BaseDialog.Close;

export const DialogParts = {
  Backdrop: DialogBackdrop,
  Close: DialogClose,
  Content: DialogContent,
  Description: DialogDescription,
  Popup: DialogPopup,
  Portal: DialogPortal,
  Root: DialogRoot,
  Title: DialogTitle,
  Trigger: DialogTrigger,
  Viewport: DialogViewport
};

export const Dialog = DialogParts;

export type DialogRootProps = ComponentPropsWithoutRef<typeof BaseDialog.Root>;
export type DialogTriggerProps = ComponentPropsWithoutRef<typeof BaseDialog.Trigger>;
export type DialogPortalProps = ComponentPropsWithoutRef<typeof BaseDialog.Portal>;
export type DialogBackdropProps = ComponentPropsWithoutRef<typeof BaseDialog.Backdrop>;
export type DialogViewportProps = ComponentPropsWithoutRef<typeof BaseDialog.Viewport>;
export type DialogPopupProps = ComponentPropsWithoutRef<typeof BaseDialog.Popup>;
export type DialogTitleProps = ComponentPropsWithoutRef<typeof BaseDialog.Title>;
export type DialogDescriptionProps = ComponentPropsWithoutRef<typeof BaseDialog.Description>;
export type DialogCloseProps = ComponentPropsWithoutRef<typeof BaseDialog.Close>;
