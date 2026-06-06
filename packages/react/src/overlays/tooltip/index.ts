import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import type { ComponentPropsWithoutRef } from "react";

export { TooltipContent, type TooltipContentProps } from "./Tooltip";
import { TooltipContent } from "./Tooltip";

export const TooltipProvider = BaseTooltip.Provider;
export const TooltipRoot = BaseTooltip.Root;
export const TooltipTrigger = BaseTooltip.Trigger;
export const TooltipPortal = BaseTooltip.Portal;
export const TooltipPositioner = BaseTooltip.Positioner;
export const TooltipPopup = BaseTooltip.Popup;
export const TooltipViewport = BaseTooltip.Viewport;
export const TooltipArrow = BaseTooltip.Arrow;

export const TooltipParts = {
  Arrow: TooltipArrow,
  Content: TooltipContent,
  Popup: TooltipPopup,
  Portal: TooltipPortal,
  Positioner: TooltipPositioner,
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Viewport: TooltipViewport,
  createHandle: BaseTooltip.createHandle
};

export const Tooltip = TooltipParts;

export type TooltipProviderProps = ComponentPropsWithoutRef<typeof BaseTooltip.Provider>;
export type TooltipRootProps = ComponentPropsWithoutRef<typeof BaseTooltip.Root>;
export type TooltipTriggerProps = ComponentPropsWithoutRef<typeof BaseTooltip.Trigger>;
export type TooltipPortalProps = ComponentPropsWithoutRef<typeof BaseTooltip.Portal>;
export type TooltipPositionerProps = ComponentPropsWithoutRef<typeof BaseTooltip.Positioner>;
export type TooltipPopupProps = ComponentPropsWithoutRef<typeof BaseTooltip.Popup>;
export type TooltipViewportProps = ComponentPropsWithoutRef<typeof BaseTooltip.Viewport>;
export type TooltipArrowProps = ComponentPropsWithoutRef<typeof BaseTooltip.Arrow>;
