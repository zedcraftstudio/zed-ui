import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cx } from "@zed-ui/utils";
import { Box } from "../../primitives/box/Box";

export type DialogSize = "sm" | "md" | "lg";

export type DialogRootProps = ComponentPropsWithoutRef<typeof BaseDialog.Root>;

export function DialogRoot(props: DialogRootProps) {
  return <BaseDialog.Root {...props} />;
}

DialogRoot.displayName = "DialogRoot";

export type DialogTriggerProps = ComponentPropsWithoutRef<typeof BaseDialog.Trigger>;

export const DialogTrigger = forwardRef<HTMLButtonElement, DialogTriggerProps>(
  function DialogTrigger({ className, ...rest }, ref) {
    return <BaseDialog.Trigger ref={ref} className={cx("zui-dialog__trigger", className)} {...rest} />;
  }
);

DialogTrigger.displayName = "DialogTrigger";

export type DialogPortalProps = ComponentPropsWithoutRef<typeof BaseDialog.Portal>;

export function DialogPortal(props: DialogPortalProps) {
  return <BaseDialog.Portal {...props} />;
}

export type DialogBackdropProps = ComponentPropsWithoutRef<typeof BaseDialog.Backdrop>;

export const DialogBackdrop = forwardRef<HTMLDivElement, DialogBackdropProps>(
  function DialogBackdrop({ className, ...rest }, ref) {
    return (
      <BaseDialog.Backdrop ref={ref} className={cx("zui-dialog__backdrop", className)} {...rest} />
    );
  }
);

DialogBackdrop.displayName = "DialogBackdrop";

export type DialogViewportProps = ComponentPropsWithoutRef<typeof BaseDialog.Viewport>;

export const DialogViewport = forwardRef<HTMLDivElement, DialogViewportProps>(
  function DialogViewport({ className, ...rest }, ref) {
    return (
      <BaseDialog.Viewport ref={ref} className={cx("zui-dialog__viewport", className)} {...rest} />
    );
  }
);

DialogViewport.displayName = "DialogViewport";

export type DialogPopupProps = ComponentPropsWithoutRef<typeof BaseDialog.Popup>;

export const DialogPopup = forwardRef<HTMLDivElement, DialogPopupProps>(function DialogPopup(
  { className, ...rest },
  ref
) {
  return <BaseDialog.Popup ref={ref} className={cx("zui-dialog__popup", className)} {...rest} />;
});

DialogPopup.displayName = "DialogPopup";

export type DialogTitleProps = ComponentPropsWithoutRef<typeof BaseDialog.Title>;

export const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(function DialogTitle(
  { className, ...rest },
  ref
) {
  return <BaseDialog.Title ref={ref} className={cx("zui-dialog__title", className)} {...rest} />;
});

DialogTitle.displayName = "DialogTitle";

export type DialogDescriptionProps = ComponentPropsWithoutRef<typeof BaseDialog.Description>;

export const DialogDescription = forwardRef<HTMLParagraphElement, DialogDescriptionProps>(
  function DialogDescription({ className, ...rest }, ref) {
    return (
      <BaseDialog.Description
        ref={ref}
        className={cx("zui-dialog__description", className)}
        {...rest}
      />
    );
  }
);

DialogDescription.displayName = "DialogDescription";

export type DialogCloseProps = ComponentPropsWithoutRef<typeof BaseDialog.Close>;

export const DialogClose = forwardRef<HTMLButtonElement, DialogCloseProps>(function DialogClose(
  { className, ...rest },
  ref
) {
  return <BaseDialog.Close ref={ref} className={cx("zui-dialog__close", className)} {...rest} />;
});

DialogClose.displayName = "DialogClose";

export type DialogContentProps = {
  children: ReactNode;
  className?: string;
  description?: ReactNode;
  footer?: ReactNode;
  size?: DialogSize;
  title?: ReactNode;
};

/** Precomposed dialog content following Base UI anatomy. */
export function DialogContent({
  children,
  className,
  description,
  footer,
  size = "md",
  title
}: DialogContentProps) {
  const hasHeader = Boolean(title || description);

  return (
    <DialogPortal>
      <DialogBackdrop />
      <DialogViewport>
        <DialogPopup className={cx(`zui-dialog__popup--${size}`, className)}>
          {hasHeader ? (
            <header className="zui-dialog__header">
              <div className="zui-dialog__header-main">
                {title ? <DialogTitle>{title}</DialogTitle> : null}
                {description ? <DialogDescription>{description}</DialogDescription> : null}
              </div>
              <DialogClose aria-label="Close dialog">
                <span className="zui-dialog__close-icon" aria-hidden>
                  ×
                </span>
              </DialogClose>
            </header>
          ) : (
            <DialogClose className="zui-dialog__close zui-dialog__close--floating" aria-label="Close dialog">
              <span className="zui-dialog__close-icon" aria-hidden>
                ×
              </span>
            </DialogClose>
          )}

          <Box className="zui-dialog__body">{children}</Box>

          {footer ? <footer className="zui-dialog__footer">{footer}</footer> : null}
        </DialogPopup>
      </DialogViewport>
    </DialogPortal>
  );
}

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
