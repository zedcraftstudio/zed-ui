import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ElementType,
  type MouseEventHandler,
  type ReactNode,
  type Ref
} from "react";
import { createPortal } from "react-dom";
import { useComponentDefaults } from "@zed-ui/themes";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { cx } from "@zed-ui/utils";
import type { AlertStatus, AlertVariant, ZedColor, ZedSize } from "../../shared/types";
import { Box, type BoxOwnProps } from "../../primitives/box/Box";
import { getAlertStatusIcon } from "../alert/icons";

/** @deprecated Use `status` with `AlertStatus` instead. */
export type ToastVariant = "default" | "success" | "warning" | "danger";

const legacyVariantToStatus: Record<ToastVariant, AlertStatus> = {
  default: "info",
  success: "success",
  warning: "warning",
  danger: "error"
};

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

const legacyToastVariants = new Set<string>(["default", "success", "warning", "danger"]);
const alertVisualVariants = new Set<string>(["subtle", "surface", "outline", "solid"]);

function resolveToastStatus(
  statusProp: AlertStatus | undefined,
  colorProp: ZedColor | undefined,
  variantProp: AlertVariant | ToastVariant | undefined,
  defaultStatus: AlertStatus
): AlertStatus {
  if (statusProp) {
    return statusProp;
  }

  if (colorProp && colorToStatus[colorProp]) {
    return colorToStatus[colorProp]!;
  }

  if (variantProp && legacyToastVariants.has(variantProp)) {
    return legacyVariantToStatus[variantProp as ToastVariant];
  }

  return defaultStatus;
}

function resolveToastVisualVariant(
  variantProp: AlertVariant | ToastVariant | undefined,
  defaultVariant: AlertVariant
): AlertVariant {
  if (variantProp && alertVisualVariants.has(variantProp)) {
    return variantProp as AlertVariant;
  }

  return defaultVariant;
}

function ToastCloseIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M3 3l6 6M9 3 3 9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export type ToastOwnProps = Omit<BoxOwnProps, "color"> & {
  /** @deprecated Use `status` instead. Kept for backward compatibility as a palette override hint. */
  color?: ZedColor;
  description?: ReactNode;
  endElement?: ReactNode;
  icon?: ReactNode;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  size?: ZedSize;
  startElement?: ReactNode;
  status?: AlertStatus;
  title?: ReactNode;
  variant?: AlertVariant | ToastVariant;
};

function ToastBase(props: PolymorphicProps<ElementType, ToastOwnProps>, ref: Ref<unknown>) {
  const defaults = useComponentDefaults("Toast");
  const {
    className,
    color: colorProp,
    description,
    endElement,
    icon,
    onClose,
    size: sizeProp,
    startElement,
    status: statusProp,
    title,
    variant: variantProp,
    ...rest
  } = props;

  const status = resolveToastStatus(
    statusProp,
    colorProp,
    variantProp,
    (defaults?.status as AlertStatus | undefined) ?? "info"
  );
  const color = colorProp ?? statusColorMap[status];
  const size = sizeProp ?? (defaults?.size as ZedSize | undefined) ?? "md";
  const variant = resolveToastVisualVariant(
    variantProp,
    (defaults?.variant as AlertVariant | undefined) ?? "surface"
  );
  const indicatorSize = size === "sm" ? 18 : size === "lg" ? 22 : size === "xl" ? 24 : 20;

  const indicator = (
    <span className="zui-alert__indicator">
      {startElement ?? icon ?? getAlertStatusIcon(status, indicatorSize)}
    </span>
  );

  const closeControl =
    endElement ??
    (onClose ? (
      <button
        aria-label="Dismiss notification"
        className="zui-toast__close"
        type="button"
        onClick={onClose}
      >
        <ToastCloseIcon size={size === "sm" ? 11 : 12} />
      </button>
    ) : null);

  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      role="status"
      className={cx("zui-alert", "zui-toast", className)}
      data-color={color}
      data-size={size}
      data-status={status}
      data-variant={variant}
      {...rest}
    >
      {indicator}
      {title || description ? (
        <div className="zui-alert__content">
          {title ? <div className="zui-alert__title">{title}</div> : null}
          {description ? <div className="zui-alert__description">{description}</div> : null}
        </div>
      ) : null}
      {closeControl ? <div className="zui-alert__end">{closeControl}</div> : null}
    </Box>
  );
}

export const Toast = forwardRef(ToastBase) as PolymorphicComponent<"div", ToastOwnProps>;

export type ToastItem = ToastOwnProps & {
  duration?: number;
  id: string;
  title: ReactNode;
};

export type ToastOptions = Omit<ToastItem, "id"> & {
  title: ReactNode;
};

type ToastContextValue = {
  dismiss: (id: string) => void;
  toast: (options: ToastOptions) => string;
  toasts: ToastItem[];
};

export const ToastContext = createContext<ToastContextValue | null>(null);

export type { ToastContextValue };

export type ToastProviderProps = {
  children: ReactNode;
  limit?: number;
};

export function ToastProvider({ children, limit = 5 }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((current) => current.filter((item) => item.id !== id));
  }, []);

  const toast = useCallback(
    (options: ToastOptions) => {
      const id = crypto.randomUUID();
      const item: ToastItem = { id, ...options };

      setToasts((current) => [...current.slice(-(limit - 1)), item]);

      const duration = options.duration ?? 4000;
      if (duration > 0) {
        window.setTimeout(() => dismiss(id), duration);
      }

      return id;
    },
    [dismiss, limit]
  );

  const value = useMemo(() => ({ dismiss, toast, toasts }), [dismiss, toast, toasts]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastViewport />
    </ToastContext.Provider>
  );
}

export type ToastViewportProps = {
  className?: string;
};

export function ToastViewport({ className }: ToastViewportProps) {
  const context = useContext(ToastContext);
  if (!context || context.toasts.length === 0) {
    return null;
  }

  const viewport = (
    <div aria-live="polite" className={cx("zui-toast-viewport", className)} role="region">
      {context.toasts.map(({ id, duration, ...toastProps }) => {
        void duration;

        return <Toast key={id} {...toastProps} onClose={() => context.dismiss(id)} />;
      })}
    </div>
  );

  return typeof document !== "undefined" ? createPortal(viewport, document.body) : viewport;
}

/** @deprecated Use `ToastProvider` instead. */
export const ToastRoot = ToastProvider;

export type ToastProps = ToastOwnProps;
