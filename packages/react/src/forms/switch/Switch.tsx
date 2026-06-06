import { Switch as BaseSwitch } from "@base-ui/react/switch";
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode, type Ref } from "react";
import { useComponentDefaults } from "@zed-ui/themes";
import { cx, dataAttr } from "@zed-ui/utils";
import type { SwitchVariant, ZedColor, ZedSize } from "../../shared/types";

export type SwitchLabelPair = {
  on: ReactNode;
  off: ReactNode;
};

export type SwitchOwnProps = Omit<
  ComponentPropsWithoutRef<typeof BaseSwitch.Root>,
  "className" | "color" | "size"
> & {
  className?: string;
  color?: ZedColor;
  description?: ReactNode;
  invalid?: boolean;
  label?: ReactNode;
  size?: ZedSize;
  thumbLabel?: SwitchLabelPair;
  trackLabel?: SwitchLabelPair;
  variant?: SwitchVariant;
};

export const Switch = forwardRef(function Switch(
  {
    checked,
    className,
    color: colorProp,
    description,
    disabled,
    invalid = false,
    label,
    size: sizeProp,
    thumbLabel,
    trackLabel,
    variant: variantProp,
    ...rest
  }: SwitchOwnProps,
  ref: Ref<HTMLElement>
) {
  const defaults = useComponentDefaults("Switch");
  const color = colorProp ?? (defaults?.color as ZedColor | undefined) ?? "primary";
  const size = sizeProp ?? (defaults?.size as ZedSize | undefined) ?? "md";
  const variant = variantProp ?? (defaults?.variant as SwitchVariant | undefined) ?? "solid";

  return (
    <label className={cx("zui-switch", className)} data-disabled={dataAttr(disabled)}>
      <BaseSwitch.Root
        ref={ref}
        checked={checked}
        className="zui-switch__control"
        data-color={color}
        data-has-track-label={dataAttr(Boolean(trackLabel))}
        data-invalid={dataAttr(invalid)}
        data-size={size}
        data-variant={variant}
        disabled={disabled}
        {...rest}
      >
        {trackLabel ? (
          <>
            <span className="zui-switch__track-indicator" data-state="unchecked">
              {trackLabel.off}
            </span>
            <span className="zui-switch__track-indicator" data-state="checked">
              {trackLabel.on}
            </span>
          </>
        ) : null}
        <BaseSwitch.Thumb className="zui-switch__thumb">
          {thumbLabel ? (
            <>
              <span className="zui-switch__thumb-indicator" data-state="unchecked">
                {thumbLabel.off}
              </span>
              <span className="zui-switch__thumb-indicator" data-state="checked">
                {thumbLabel.on}
              </span>
            </>
          ) : null}
        </BaseSwitch.Thumb>
      </BaseSwitch.Root>
      {label || description ? (
        <span className="zui-switch__content">
          {label ? <span className="zui-switch__label">{label}</span> : null}
          {description ? <span className="zui-switch__description">{description}</span> : null}
        </span>
      ) : null}
    </label>
  );
});

Switch.displayName = "Switch";
