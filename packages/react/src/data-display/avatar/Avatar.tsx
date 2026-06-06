import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
  type Ref
} from "react";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { cx } from "@zed-ui/utils";
import type { ZedColor, ZedSize } from "../../shared/types";
import type { BoxOwnProps } from "../../primitives/box/Box";
import { AvatarIcon } from "./AvatarIcon";
import { getAvatarInitials } from "./utils";

export type AvatarVariant = "outline" | "solid" | "subtle";
export type AvatarShape = "full" | "rounded" | "square";

export type AvatarOwnProps = Omit<BoxOwnProps, "color"> & {
  alt?: string;
  color?: ZedColor;
  fallback?: ReactNode;
  icon?: ReactNode;
  name?: string;
  ring?: boolean;
  shape?: AvatarShape;
  size?: ZedSize;
  src?: string;
  srcSet?: string;
  variant?: AvatarVariant;
};

function AvatarBase(props: PolymorphicProps<ElementType, AvatarOwnProps>, ref: Ref<unknown>) {
  const {
    alt,
    children,
    className,
    color = "primary",
    fallback,
    icon,
    name,
    ring = false,
    shape = "full",
    size = "md",
    src,
    srcSet,
    variant = "subtle",
    ...rest
  } = props;

  const resolvedFallback =
    fallback ??
    (typeof children === "string" ? children : undefined) ??
    (name ? getAvatarInitials(name) : undefined);

  const showIcon = resolvedFallback == null && !src;

  return (
    <BaseAvatar.Root
      ref={ref as Ref<HTMLSpanElement>}
      className={cx("zui-avatar", className)}
      data-color={color}
      data-ring={ring ? "true" : undefined}
      data-shape={shape}
      data-size={size}
      data-variant={variant}
      {...rest}
    >
      {src ? (
        <BaseAvatar.Image
          alt={alt ?? name ?? ""}
          className="zui-avatar__img"
          src={src}
          srcSet={srcSet}
        />
      ) : null}
      <BaseAvatar.Fallback className="zui-avatar__fallback" delay={src ? 300 : undefined}>
        {showIcon ? (icon ?? <AvatarIcon className="zui-avatar__icon" />) : resolvedFallback}
      </BaseAvatar.Fallback>
    </BaseAvatar.Root>
  );
}

export const AvatarRoot = forwardRef<HTMLSpanElement, ComponentPropsWithoutRef<typeof BaseAvatar.Root>>(
  function AvatarRoot({ className, ...rest }, ref) {
    return <BaseAvatar.Root ref={ref} className={cx("zui-avatar", className)} {...rest} />;
  }
);

AvatarRoot.displayName = "AvatarRoot";

export const AvatarImage = forwardRef<HTMLImageElement, ComponentPropsWithoutRef<typeof BaseAvatar.Image>>(
  function AvatarImage({ className, ...rest }, ref) {
    return <BaseAvatar.Image ref={ref} className={cx("zui-avatar__img", className)} {...rest} />;
  }
);

AvatarImage.displayName = "AvatarImage";

export const AvatarFallback = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithoutRef<typeof BaseAvatar.Fallback>
>(function AvatarFallback({ className, ...rest }, ref) {
  return (
    <BaseAvatar.Fallback ref={ref} className={cx("zui-avatar__fallback", className)} {...rest} />
  );
});

AvatarFallback.displayName = "AvatarFallback";

export const Avatar = forwardRef(AvatarBase) as PolymorphicComponent<"span", AvatarOwnProps>;

export { getAvatarColorFromName, getAvatarInitials } from "./utils";
