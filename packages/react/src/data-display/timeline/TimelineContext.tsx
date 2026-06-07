import { createContext } from "react";
import type { TimelineVariant, ZedColor, ZedSize } from "../../shared/types";

export type TimelineContextValue = {
  color: ZedColor;
  showLastSeparator: boolean;
  size: ZedSize;
  unstyled: boolean;
  variant: TimelineVariant;
};

export const TimelineContext = createContext<TimelineContextValue | null>(null);
