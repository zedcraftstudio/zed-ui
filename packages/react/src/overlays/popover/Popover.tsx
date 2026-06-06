import { Popover as BasePopover } from "@base-ui/react/popover";
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cx } from "@zed-ui/utils";

export type PopoverRootProps = ComponentPropsWithoutRef<typeof BasePopover.Root>;

export function PopoverRoot(props: PopoverRootProps) {
  return <BasePopover.Root {...props} />;
}

export type PopoverTriggerProps = ComponentPropsWithoutRef<typeof BasePopover.Trigger>;

export const PopoverTrigger = forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  function PopoverTrigger({ className, ...rest }, ref) {
    return (
      <BasePopover.Trigger ref={ref} className={cx("zui-popover__trigger", className)} {...rest} />
    );
  }
);

PopoverTrigger.displayName = "PopoverTrigger";

export type PopoverPortalProps = ComponentPropsWithoutRef<typeof BasePopover.Portal>;

export function PopoverPortal(props: PopoverPortalProps) {
  return <BasePopover.Portal {...props} />;
}

export type PopoverBackdropProps = ComponentPropsWithoutRef<typeof BasePopover.Backdrop>;

export const PopoverBackdrop = forwardRef<HTMLDivElement, PopoverBackdropProps>(
  function PopoverBackdrop({ className, ...rest }, ref) {
    return (
      <BasePopover.Backdrop ref={ref} className={cx("zui-popover__backdrop", className)} {...rest} />
    );
  }
);

PopoverBackdrop.displayName = "PopoverBackdrop";

export type PopoverPositionerProps = ComponentPropsWithoutRef<typeof BasePopover.Positioner>;

export const PopoverPositioner = forwardRef<HTMLDivElement, PopoverPositionerProps>(
  function PopoverPositioner({ className, sideOffset = 8, ...rest }, ref) {
    return (
      <BasePopover.Positioner
        ref={ref}
        className={cx("zui-popover__positioner", className)}
        sideOffset={sideOffset}
        {...rest}
      />
    );
  }
);

PopoverPositioner.displayName = "PopoverPositioner";

export type PopoverPopupProps = ComponentPropsWithoutRef<typeof BasePopover.Popup>;

export const PopoverPopup = forwardRef<HTMLDivElement, PopoverPopupProps>(function PopoverPopup(
  { className, ...rest },
  ref
) {
  return <BasePopover.Popup ref={ref} className={cx("zui-popover__popup", className)} {...rest} />;
});

PopoverPopup.displayName = "PopoverPopup";

export type PopoverViewportProps = ComponentPropsWithoutRef<typeof BasePopover.Viewport>;

export const PopoverViewport = forwardRef<HTMLDivElement, PopoverViewportProps>(
  function PopoverViewport({ className, ...rest }, ref) {
    return (
      <BasePopover.Viewport ref={ref} className={cx("zui-popover__viewport", className)} {...rest} />
    );
  }
);

PopoverViewport.displayName = "PopoverViewport";

export type PopoverArrowProps = ComponentPropsWithoutRef<typeof BasePopover.Arrow>;

export const PopoverArrow = forwardRef<HTMLDivElement, PopoverArrowProps>(
  function PopoverArrow({ className, ...rest }, ref) {
    return (
      <BasePopover.Arrow ref={ref} className={cx("zui-popover__arrow", className)} {...rest} />
    );
  }
);

PopoverArrow.displayName = "PopoverArrow";

export type PopoverCloseProps = ComponentPropsWithoutRef<typeof BasePopover.Close>;

export const PopoverClose = forwardRef<HTMLButtonElement, PopoverCloseProps>(
  function PopoverClose({ className, ...rest }, ref) {
    return (
      <BasePopover.Close ref={ref} className={cx("zui-popover__close", className)} {...rest} />
    );
  }
);

PopoverClose.displayName = "PopoverClose";

export type PopoverTitleProps = ComponentPropsWithoutRef<typeof BasePopover.Title>;

export const PopoverTitle = forwardRef<HTMLHeadingElement, PopoverTitleProps>(
  function PopoverTitle({ className, ...rest }, ref) {
    return <BasePopover.Title ref={ref} className={cx("zui-popover__title", className)} {...rest} />;
  }
);

PopoverTitle.displayName = "PopoverTitle";

export type PopoverDescriptionProps = ComponentPropsWithoutRef<typeof BasePopover.Description>;

export const PopoverDescription = forwardRef<HTMLParagraphElement, PopoverDescriptionProps>(
  function PopoverDescription({ className, ...rest }, ref) {
    return (
      <BasePopover.Description
        ref={ref}
        className={cx("zui-popover__description", className)}
        {...rest}
      />
    );
  }
);

PopoverDescription.displayName = "PopoverDescription";

export type PopoverPanelProps = {
  align?: "center" | "end" | "start";
  children: ReactNode;
  className?: string;
  description?: ReactNode;
  footer?: ReactNode;
  showArrow?: boolean;
  showBackdrop?: boolean;
  side?: "bottom" | "left" | "right" | "top";
  sideOffset?: number;
  title?: ReactNode;
};

/**
 * Precomposed popover panel: Portal → Backdrop? → Positioner → Popup → Viewport.
 */
export function PopoverPanel({
  align,
  children,
  className,
  description,
  footer,
  showArrow = false,
  showBackdrop = false,
  side,
  sideOffset = 8,
  title
}: PopoverPanelProps) {
  const hasHeader = Boolean(title || description);

  return (
    <BasePopover.Portal>
      {showBackdrop ? <BasePopover.Backdrop className="zui-popover__backdrop" /> : null}
      <BasePopover.Positioner
        align={align}
        className="zui-popover__positioner"
        side={side}
        sideOffset={sideOffset}
      >
        <BasePopover.Popup className={cx("zui-popover__popup", className)}>
          {showArrow ? <BasePopover.Arrow className="zui-popover__arrow" /> : null}
          {hasHeader ? (
            <header className="zui-popover__header">
              {title ? (
                <BasePopover.Title className="zui-popover__title">{title}</BasePopover.Title>
              ) : null}
              {description ? (
                <BasePopover.Description className="zui-popover__description">
                  {description}
                </BasePopover.Description>
              ) : null}
            </header>
          ) : null}
          <BasePopover.Viewport className="zui-popover__viewport">{children}</BasePopover.Viewport>
          {footer ? <footer className="zui-popover__footer">{footer}</footer> : null}
        </BasePopover.Popup>
      </BasePopover.Positioner>
    </BasePopover.Portal>
  );
}

/** @deprecated Use `PopoverPopup` or `PopoverPanel` */
export const PopoverContent = PopoverPopup;

export const PopoverParts = {
  Arrow: PopoverArrow,
  Backdrop: PopoverBackdrop,
  Close: PopoverClose,
  Description: PopoverDescription,
  Panel: PopoverPanel,
  Popup: PopoverPopup,
  Portal: PopoverPortal,
  Positioner: PopoverPositioner,
  Root: PopoverRoot,
  Title: PopoverTitle,
  Trigger: PopoverTrigger,
  Viewport: PopoverViewport
};

export const Popover = PopoverParts;
