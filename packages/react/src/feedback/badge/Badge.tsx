import {
  forwardRef,
  type ElementType,
  type MouseEventHandler,
  type ReactNode,
  type Ref
} from "react";
import { useComponentDefaults } from "@zed-ui/themes";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { cx, dataAttr } from "@zed-ui/utils";
import type { BadgeVariant, ZedColor, ZedRadius, ZedSize } from "../../shared/types";
import { Box, type BoxOwnProps } from "../../primitives/box/Box";

export type BadgeAvatarProps = {
  alt?: string;
  fallback?: string;
  src?: string;
};

function BadgeCloseIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M3 3l6 6M9 3 3 9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

function BadgeAvatar({ alt, fallback, src }: BadgeAvatarProps) {
  const initials = fallback?.slice(0, 2).toUpperCase() ?? "?";

  return (
    <span className="zui-badge__avatar">
      {src ? <img alt={alt ?? ""} className="zui-badge__avatar-img" src={src} /> : null}
      {!src ? <span className="zui-badge__avatar-fallback">{initials}</span> : null}
    </span>
  );
}

function formatBadgeContent(content: ReactNode, max?: number): ReactNode {
  if (typeof content === "number" && max != null && content > max) {
    return `${max}+`;
  }
  return content;
}

function resolveBadgeRadius(radius: ZedRadius | undefined, pill: boolean): ZedRadius {
  if (radius) {
    return radius;
  }

  return pill ? "full" : "md";
}

export type BadgeOwnProps = Omit<BoxOwnProps, "color"> & {
  avatar?: BadgeAvatarProps;
  color?: ZedColor;
  endIcon?: ReactNode;
  max?: number;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  pill?: boolean;
  radius?: ZedRadius;
  size?: ZedSize;
  startIcon?: ReactNode;
  statusDot?: boolean;
  variant?: BadgeVariant;
  children?: ReactNode;
};

function BadgeBase(props: PolymorphicProps<ElementType, BadgeOwnProps>, ref: Ref<unknown>) {
  const defaults = useComponentDefaults("Badge");
  const {
    as,
    avatar,
    children,
    className,
    color = (defaults?.color as ZedColor | undefined) ?? "neutral",
    endIcon,
    max,
    onClose,
    pill = true,
    radius: radiusProp,
    size = (defaults?.size as ZedSize | undefined) ?? "sm",
    startIcon,
    statusDot = false,
    variant = (defaults?.variant as BadgeVariant | undefined) ?? "soft",
    ...rest
  } = props;

  const radius = resolveBadgeRadius(radiusProp, pill);
  const closeIconSize = size === "xs" ? 10 : size === "lg" || size === "xl" ? 12 : 11;

  if (variant === "dot") {
    const label = typeof children === "string" ? children : undefined;

    return (
      <Box
        ref={ref as Ref<HTMLElement>}
        as={as ?? "span"}
        aria-label={label}
        className={cx("zui-badge", className)}
        data-color={color}
        data-radius="full"
        data-size={size}
        data-variant="dot"
        role={label ? "status" : undefined}
        {...rest}
      />
    );
  }

  const content = formatBadgeContent(children, max);
  const isCounter =
    typeof content === "number" || (typeof content === "string" && /^\d+\+?$/.test(content));

  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "span"}
      className={cx("zui-badge", className)}
      data-color={color}
      data-counter={dataAttr(isCounter)}
      data-has-avatar={dataAttr(Boolean(avatar))}
      data-has-close={dataAttr(Boolean(onClose))}
      data-radius={radius}
      data-size={size}
      data-variant={variant}
      {...rest}
    >
      {avatar ? <BadgeAvatar {...avatar} /> : null}
      {statusDot ? <span aria-hidden className="zui-badge__status-dot" /> : null}
      {startIcon ? <span className="zui-badge__icon">{startIcon}</span> : null}
      {content != null && content !== "" ? (
        <span className="zui-badge__label">{content}</span>
      ) : null}
      {endIcon ? <span className="zui-badge__icon">{endIcon}</span> : null}
      {onClose ? (
        <button
          aria-label="Remove badge"
          className="zui-badge__close"
          type="button"
          onClick={onClose}
        >
          <BadgeCloseIcon size={closeIconSize} />
        </button>
      ) : null}
    </Box>
  );
}

export const Badge = forwardRef(BadgeBase) as PolymorphicComponent<"span", BadgeOwnProps>;
