import { Radio as BaseRadio } from "@base-ui/react/radio";
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode, type Ref } from "react";
import { useComponentDefaults } from "@zed-ui/themes";
import { cx, dataAttr } from "@zed-ui/utils";
import type { ZedColor, ZedSize } from "../../shared/types";

export type RadioCardVariant = "outline" | "subtle" | "solid";

export type RadioCardOwnProps = Omit<
  ComponentPropsWithoutRef<typeof BaseRadio.Root>,
  "className" | "color" | "size"
> & {
  className?: string;
  color?: ZedColor;
  description?: ReactNode;
  invalid?: boolean;
  label?: ReactNode;
  showIndicator?: boolean;
  size?: ZedSize;
  variant?: RadioCardVariant;
};

export const RadioCard = forwardRef(function RadioCard(
  {
    className,
    color: colorProp,
    description,
    disabled,
    invalid = false,
    label,
    showIndicator = true,
    size: sizeProp,
    value,
    variant: variantProp,
    ...rest
  }: RadioCardOwnProps,
  ref: Ref<HTMLElement>
) {
  const defaults = useComponentDefaults("Radio");
  const color = colorProp ?? (defaults?.color as ZedColor | undefined) ?? "primary";
  const size = sizeProp ?? (defaults?.size as ZedSize | undefined) ?? "md";
  const variant = variantProp ?? "outline";

  return (
    <label
      className={cx("zui-radio-card", className)}
      data-color={color}
      data-disabled={dataAttr(disabled)}
      data-invalid={dataAttr(invalid)}
      data-size={size}
      data-variant={variant}
    >
      <span className="zui-radio-card__body">
        <span className="zui-radio-card__content">
          {label ? <span className="zui-radio-card__label">{label}</span> : null}
          {description ? <span className="zui-radio-card__description">{description}</span> : null}
        </span>
        {showIndicator ? (
          <BaseRadio.Root
            ref={ref}
            className="zui-radio__control"
            data-color={color}
            data-invalid={dataAttr(invalid)}
            data-size={size}
            data-variant="outline"
            disabled={disabled}
            value={value}
            {...rest}
          >
            <BaseRadio.Indicator className="zui-radio__indicator">
              <span className="zui-radio__dot" />
            </BaseRadio.Indicator>
          </BaseRadio.Root>
        ) : (
          <BaseRadio.Root
            ref={ref}
            className="zui-radio-card__hidden-control"
            data-color={color}
            data-invalid={dataAttr(invalid)}
            disabled={disabled}
            value={value}
            {...rest}
          />
        )}
      </span>
    </label>
  );
});

RadioCard.displayName = "RadioCard";
