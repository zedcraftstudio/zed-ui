import { Slider as BaseSlider } from "@base-ui/react/slider";
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cx } from "@zed-ui/utils";
import type { ZedColor, ZedSize } from "../../shared/types";

export type SliderOwnProps = Omit<ComponentPropsWithoutRef<typeof BaseSlider.Root>, "className"> & {
  className?: string;
  color?: ZedColor;
  label?: ReactNode;
  showValue?: boolean;
  size?: ZedSize;
};

export const Slider = forwardRef<HTMLDivElement, SliderOwnProps>(function Slider(
  {
    className,
    color = "primary",
    disabled,
    label,
    max = 100,
    min = 0,
    showValue = false,
    size = "md",
    step = 1,
    ...rest
  },
  ref
) {
  return (
    <BaseSlider.Root
      ref={ref}
      className={cx("zui-slider__root", className)}
      data-color={color}
      disabled={disabled}
      max={max}
      min={min}
      step={step}
      {...rest}
    >
      <div className="zui-slider" data-disabled={disabled ? "" : undefined} data-size={size}>
        {label || showValue ? (
          <div className="zui-slider__header">
            {label ? (
              <BaseSlider.Label className="zui-slider__label">{label}</BaseSlider.Label>
            ) : null}
            {showValue ? <BaseSlider.Value className="zui-slider__value" /> : null}
          </div>
        ) : null}
        <BaseSlider.Control className="zui-slider__control">
          <BaseSlider.Track className="zui-slider__track">
            <BaseSlider.Indicator className="zui-slider__indicator" />
            <BaseSlider.Thumb className="zui-slider__thumb" />
          </BaseSlider.Track>
        </BaseSlider.Control>
      </div>
    </BaseSlider.Root>
  );
});

Slider.displayName = "Slider";
