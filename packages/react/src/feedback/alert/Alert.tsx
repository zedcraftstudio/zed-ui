import { forwardRef, type ElementType, type ReactNode, type Ref } from "react";
import { useComponentDefaults } from "@zed-ui/themes";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { cx, dataAttr } from "@zed-ui/utils";
import { Box, type BoxOwnProps } from "../../primitives/box/Box";
import type { AlertStatus, AlertVariant, ZedColor, ZedSize } from "../../shared/types";
import { getAlertStatusIcon } from "./icons";

const statusColorMap: Record<AlertStatus, ZedColor> = {
  error: "danger",
  info: "info",
  neutral: "neutral",
  success: "success",
  warning: "warning"
};

const colorToStatus: Partial<Record<ZedColor, AlertStatus>> = {
  danger: "error",
  info: "info",
  neutral: "neutral",
  primary: "info",
  success: "success",
  warning: "warning"
};

export type AlertOwnProps = Omit<BoxOwnProps, "color"> & {
  /** @deprecated Use `status` instead. Kept for backward compatibility as a palette override hint. */
  color?: ZedColor;
  compact?: boolean;
  description?: ReactNode;
  endElement?: ReactNode;
  icon?: ReactNode;
  inline?: boolean;
  size?: ZedSize;
  startElement?: ReactNode;
  status?: AlertStatus;
  title?: ReactNode;
  variant?: AlertVariant;
};

function AlertBase(props: PolymorphicProps<ElementType, AlertOwnProps>, ref: Ref<unknown>) {
  const {
    children,
    className,
    color: colorProp,
    compact = false,
    description,
    endElement,
    icon,
    inline = false,
    size: sizeProp,
    startElement,
    status: statusProp,
    title,
    variant: variantProp,
    ...rest
  } = props;

  const defaults = useComponentDefaults("Alert");
  const status =
    statusProp ??
    (colorProp ? colorToStatus[colorProp] : undefined) ??
    (defaults?.status as AlertStatus | undefined) ??
    "info";
  const color = colorProp ?? statusColorMap[status];
  const size = sizeProp ?? (defaults?.size as ZedSize | undefined) ?? "md";
  const variant = variantProp ?? (defaults?.variant as AlertVariant | undefined) ?? "subtle";
  const indicatorSize = compact ? 16 : size === "sm" ? 18 : size === "lg" ? 22 : 20;

  const indicator = (
    <span className="zui-alert__indicator">
      {startElement ?? icon ?? getAlertStatusIcon(status, indicatorSize)}
    </span>
  );

  const hasContent = Boolean(title || description || children);

  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      role="alert"
      className={cx("zui-alert", className)}
      data-color={color}
      data-compact={dataAttr(compact)}
      data-inline={dataAttr(inline)}
      data-size={size}
      data-status={status}
      data-variant={variant}
      {...rest}
    >
      {indicator}
      {hasContent ? (
        <div className="zui-alert__content">
          {title ? <div className="zui-alert__title">{title}</div> : null}
          {description ? <div className="zui-alert__description">{description}</div> : null}
          {children}
        </div>
      ) : null}
      {endElement ? <div className="zui-alert__end">{endElement}</div> : null}
    </Box>
  );
}

export const Alert = forwardRef(AlertBase) as PolymorphicComponent<"div", AlertOwnProps>;
