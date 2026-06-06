import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import type { ReactNode } from "react";
import { cx } from "@zed-ui/utils";
import { Box } from "../../primitives/box/Box";

export type DialogSize = "sm" | "md" | "lg";

export type DialogContentProps = {
  children: ReactNode;
  className?: string;
  description?: ReactNode;
  /** Action row (e.g. Cancel / Confirm). Rendered in a separated footer. */
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
    <BaseDialog.Portal>
      <BaseDialog.Backdrop className="zui-dialog__backdrop" />
      <BaseDialog.Viewport className="zui-dialog__viewport">
        <BaseDialog.Popup
          className={cx("zui-dialog__popup", `zui-dialog__popup--${size}`, className)}
        >
          {hasHeader ? (
            <header className="zui-dialog__header">
              <div className="zui-dialog__header-main">
                {title ? (
                  <BaseDialog.Title className="zui-dialog__title">{title}</BaseDialog.Title>
                ) : null}
                {description ? (
                  <BaseDialog.Description className="zui-dialog__description">
                    {description}
                  </BaseDialog.Description>
                ) : null}
              </div>
              <BaseDialog.Close className="zui-dialog__close" aria-label="Close dialog">
                <span className="zui-dialog__close-icon" aria-hidden>
                  ×
                </span>
              </BaseDialog.Close>
            </header>
          ) : (
            <BaseDialog.Close className="zui-dialog__close zui-dialog__close--floating" aria-label="Close dialog">
              <span className="zui-dialog__close-icon" aria-hidden>
                ×
              </span>
            </BaseDialog.Close>
          )}

          <Box className="zui-dialog__body">{children}</Box>

          {footer ? <footer className="zui-dialog__footer">{footer}</footer> : null}
        </BaseDialog.Popup>
      </BaseDialog.Viewport>
    </BaseDialog.Portal>
  );
}
