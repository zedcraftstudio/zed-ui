import { AlertDialog as BaseAlertDialog } from "@base-ui/react/alert-dialog";
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cx } from "@zed-ui/utils";
import { Button } from "../../actions/button/Button";
import { Box } from "../../primitives/box/Box";
import {
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogPopup,
  DialogPortal,
  DialogTitle,
  DialogViewport
} from "../dialog/Dialog";

export type AlertDialogRootProps = ComponentPropsWithoutRef<typeof BaseAlertDialog.Root>;

export function AlertDialogRoot(props: AlertDialogRootProps) {
  return <BaseAlertDialog.Root {...props} />;
}

export type AlertDialogTriggerProps = ComponentPropsWithoutRef<typeof BaseAlertDialog.Trigger>;

export const AlertDialogTrigger = forwardRef<HTMLButtonElement, AlertDialogTriggerProps>(
  function AlertDialogTrigger({ className, ...rest }, ref) {
    return (
      <BaseAlertDialog.Trigger ref={ref} className={cx("zui-dialog__trigger", className)} {...rest} />
    );
  }
);

AlertDialogTrigger.displayName = "AlertDialogTrigger";

export type AlertDialogContentProps = {
  cancelLabel?: ReactNode;
  children?: ReactNode;
  className?: string;
  confirmLabel?: ReactNode;
  description?: ReactNode;
  onConfirm?: () => void;
  title?: ReactNode;
};

export function AlertDialogContent({
  cancelLabel = "Cancel",
  children,
  className,
  confirmLabel = "Confirm",
  description,
  onConfirm,
  title
}: AlertDialogContentProps) {
  return (
    <DialogPortal>
      <DialogBackdrop />
      <DialogViewport>
        <DialogPopup className={cx("zui-dialog__popup", "zui-alert-dialog__popup", className)}>
          <header className="zui-dialog__header">
            <div className="zui-dialog__header-main">
              {title ? <DialogTitle>{title}</DialogTitle> : null}
              {description ? <DialogDescription>{description}</DialogDescription> : null}
            </div>
          </header>

          {children ? <Box className="zui-dialog__body">{children}</Box> : null}

          <footer className="zui-dialog__footer">
            <DialogClose render={<Button variant="outline">{cancelLabel}</Button>} />
            <DialogClose
              render={
                <Button color="danger" onClick={onConfirm}>
                  {confirmLabel}
                </Button>
              }
            />
          </footer>
        </DialogPopup>
      </DialogViewport>
    </DialogPortal>
  );
}

export const AlertDialogParts = {
  Backdrop: DialogBackdrop,
  Close: DialogClose,
  Content: AlertDialogContent,
  Description: DialogDescription,
  Popup: DialogPopup,
  Portal: DialogPortal,
  Root: AlertDialogRoot,
  Title: DialogTitle,
  Trigger: AlertDialogTrigger,
  Viewport: DialogViewport
};

export const AlertDialog = AlertDialogParts;
