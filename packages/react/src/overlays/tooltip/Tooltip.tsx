import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import type { ReactNode } from "react";
import { cx } from "@zed-ui/utils";

export type TooltipContentProps = {
  align?: "center" | "end" | "start";
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
  side?: "bottom" | "left" | "right" | "top";
  sideOffset?: number;
};

/**
 * Precomposed tooltip content following Base UI anatomy:
 * Portal → Positioner → Popup (→ Arrow? → children).
 *
 * Use Tooltip.Viewport manually when animating content between multiple triggers.
 */
export function TooltipContent({
  align,
  children,
  className,
  showArrow = true,
  side,
  sideOffset = 11
}: TooltipContentProps) {
  return (
    <BaseTooltip.Portal>
      <BaseTooltip.Positioner
        align={align}
        className="zui-tooltip__positioner"
        side={side}
        sideOffset={sideOffset}
      >
        <BaseTooltip.Popup className={cx("zui-tooltip__popup", className)}>
          {showArrow ? <BaseTooltip.Arrow className="zui-tooltip__arrow" /> : null}
          {children}
        </BaseTooltip.Popup>
      </BaseTooltip.Positioner>
    </BaseTooltip.Portal>
  );
}
