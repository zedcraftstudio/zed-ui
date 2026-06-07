import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { useComponentDefaults } from "@zed-ui/themes";
import { cx, dataAttr } from "@zed-ui/utils";
import type { TimelineVariant, ZedColor, ZedSize } from "../../shared/types";
import { TimelineContext } from "./TimelineContext";

export type { TimelineVariant };

export type TimelineRootOwnProps = Omit<ComponentPropsWithoutRef<"ul">, "children"> & {
  children?: ReactNode;
  color?: ZedColor;
  showLastSeparator?: boolean;
  size?: ZedSize;
  unstyled?: boolean;
  variant?: TimelineVariant;
};

export const TimelineRoot = forwardRef<HTMLUListElement, TimelineRootOwnProps>(function TimelineRoot(
  {
    children,
    className,
    color: colorProp,
    showLastSeparator = false,
    size: sizeProp,
    unstyled = false,
    variant: variantProp,
    ...rest
  },
  ref
) {
  const defaults = useComponentDefaults("Timeline");
  const size = (sizeProp ?? (defaults?.size as ZedSize | undefined) ?? "md") as ZedSize;
  const variant = (variantProp ??
    (defaults?.variant as TimelineVariant | undefined) ??
    "solid") as TimelineVariant;
  const color = colorProp ?? (defaults?.color as ZedColor | undefined) ?? "neutral";
  return (
    <TimelineContext.Provider value={{ color, showLastSeparator, size, unstyled, variant }}>
      <ul
        ref={ref}
        className={cx("zui-timeline", className)}
        data-color={color}
        data-show-last-separator={dataAttr(showLastSeparator)}
        data-size={size}
        data-unstyled={dataAttr(unstyled)}
        data-variant={variant}
        {...rest}
      >
        {children}
      </ul>
    </TimelineContext.Provider>
  );
});

TimelineRoot.displayName = "TimelineRoot";

export type TimelineItemOwnProps = ComponentPropsWithoutRef<"li">;

export const TimelineItem = forwardRef<HTMLLIElement, TimelineItemOwnProps>(function TimelineItem(
  { className, ...rest },
  ref
) {
  return <li ref={ref} className={cx("zui-timeline__item", className)} {...rest} />;
});

TimelineItem.displayName = "TimelineItem";

export type TimelineBeforeOwnProps = ComponentPropsWithoutRef<"div">;

export const TimelineBefore = forwardRef<HTMLDivElement, TimelineBeforeOwnProps>(function TimelineBefore(
  { className, ...rest },
  ref
) {
  return <div ref={ref} className={cx("zui-timeline__before", className)} {...rest} />;
});

TimelineBefore.displayName = "TimelineBefore";

export type TimelineConnectorOwnProps = ComponentPropsWithoutRef<"div">;

export const TimelineConnector = forwardRef<HTMLDivElement, TimelineConnectorOwnProps>(
  function TimelineConnector({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("zui-timeline__connector", className)} {...rest} />;
  }
);

TimelineConnector.displayName = "TimelineConnector";

export type TimelineSeparatorOwnProps = ComponentPropsWithoutRef<"div">;

export const TimelineSeparator = forwardRef<HTMLDivElement, TimelineSeparatorOwnProps>(
  function TimelineSeparator({ className, ...rest }, ref) {
    return (
      <div ref={ref} aria-hidden className={cx("zui-timeline__separator", className)} {...rest} />
    );
  }
);

TimelineSeparator.displayName = "TimelineSeparator";

export type TimelineIndicatorOwnProps = ComponentPropsWithoutRef<"div">;

export const TimelineIndicator = forwardRef<HTMLDivElement, TimelineIndicatorOwnProps>(
  function TimelineIndicator({ className, children, ...rest }, ref) {
    return (
      <div ref={ref} className={cx("zui-timeline__indicator", className)} {...rest}>
        {children}
      </div>
    );
  }
);

TimelineIndicator.displayName = "TimelineIndicator";

export type TimelineContentOwnProps = ComponentPropsWithoutRef<"div">;

export const TimelineContent = forwardRef<HTMLDivElement, TimelineContentOwnProps>(function TimelineContent(
  { className, ...rest },
  ref
) {
  return <div ref={ref} className={cx("zui-timeline__content", className)} {...rest} />;
});

TimelineContent.displayName = "TimelineContent";

export type TimelineTitleOwnProps = ComponentPropsWithoutRef<"div">;

export const TimelineTitle = forwardRef<HTMLDivElement, TimelineTitleOwnProps>(function TimelineTitle(
  { className, ...rest },
  ref
) {
  return <div ref={ref} className={cx("zui-timeline__title", className)} {...rest} />;
});

TimelineTitle.displayName = "TimelineTitle";

export type TimelineDescriptionOwnProps = ComponentPropsWithoutRef<"div">;

export const TimelineDescription = forwardRef<HTMLDivElement, TimelineDescriptionOwnProps>(
  function TimelineDescription({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("zui-timeline__description", className)} {...rest} />;
  }
);

TimelineDescription.displayName = "TimelineDescription";

export const TimelineParts = {
  Before: TimelineBefore,
  Connector: TimelineConnector,
  Content: TimelineContent,
  Description: TimelineDescription,
  Indicator: TimelineIndicator,
  Item: TimelineItem,
  Root: TimelineRoot,
  Separator: TimelineSeparator,
  Title: TimelineTitle
};

type TimelineComponent = typeof TimelineRoot & typeof TimelineParts;

export const Timeline = Object.assign(TimelineRoot, TimelineParts) as TimelineComponent;
