import { Radio as BaseRadio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode, type Ref } from "react";
import { useComponentDefaults } from "@zed-ui/themes";
import { cx, dataAttr } from "@zed-ui/utils";
import type { RadioVariant, ZedColor, ZedSize } from "../../shared/types";

export type RadioGroupOwnProps = ComponentPropsWithoutRef<typeof BaseRadioGroup> & {
  className?: string;
  orientation?: "horizontal" | "vertical";
};

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupOwnProps>(function RadioGroup(
  { className, orientation = "vertical", ...rest },
  ref
) {
  return (
    <BaseRadioGroup
      ref={ref}
      className={cx("zui-radio-group", className)}
      data-orientation={orientation}
      {...rest}
    />
  );
});

RadioGroup.displayName = "RadioGroup";

export type RadioOwnProps = Omit<
  ComponentPropsWithoutRef<typeof BaseRadio.Root>,
  "className" | "color" | "size"
> & {
  className?: string;
  color?: ZedColor;
  description?: ReactNode;
  invalid?: boolean;
  label?: ReactNode;
  size?: ZedSize;
  variant?: RadioVariant;
};

export const Radio = forwardRef(function Radio(
  {
    className,
    color: colorProp,
    description,
    disabled,
    invalid = false,
    label,
    size: sizeProp,
    value,
    variant: variantProp,
    ...rest
  }: RadioOwnProps,
  ref: Ref<HTMLElement>
) {
  const defaults = useComponentDefaults("Radio");
  const color = colorProp ?? (defaults?.color as ZedColor | undefined) ?? "primary";
  const size = sizeProp ?? (defaults?.size as ZedSize | undefined) ?? "md";
  const variant = variantProp ?? (defaults?.variant as RadioVariant | undefined) ?? "outline";

  return (
    <label className={cx("zui-radio", className)} data-disabled={dataAttr(disabled)}>
      <BaseRadio.Root
        ref={ref}
        className="zui-radio__control"
        data-color={color}
        data-invalid={dataAttr(invalid)}
        data-size={size}
        data-variant={variant}
        disabled={disabled}
        value={value}
        {...rest}
      >
        <BaseRadio.Indicator className="zui-radio__indicator">
          <span className="zui-radio__dot" />
        </BaseRadio.Indicator>
      </BaseRadio.Root>
      {label || description ? (
        <span className="zui-radio__content">
          {label ? <span className="zui-radio__label">{label}</span> : null}
          {description ? <span className="zui-radio__description">{description}</span> : null}
        </span>
      ) : null}
    </label>
  );
});

Radio.displayName = "Radio";
