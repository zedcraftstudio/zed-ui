import { Progress as BaseProgress } from "@base-ui/react/progress";
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cx } from "@zed-ui/utils";
import type { ZedColor, ZedSize } from "../../shared/types";

export type ProgressOwnProps = Omit<
  ComponentPropsWithoutRef<typeof BaseProgress.Root>,
  "className"
> & {
  className?: string;
  color?: ZedColor;
  label?: ReactNode;
  showValue?: boolean;
  size?: ZedSize;
};

export const Progress = forwardRef<HTMLDivElement, ProgressOwnProps>(function Progress(
  {
    className,
    color = "primary",
    label,
    max = 100,
    min = 0,
    showValue = false,
    size = "md",
    value,
    ...rest
  },
  ref
) {
  return (
    <BaseProgress.Root
      ref={ref}
      className={cx("zui-progress__root", className)}
      data-color={color}
      max={max}
      min={min}
      value={value}
      {...rest}
    >
      <div className="zui-progress" data-size={size}>
        {label || showValue ? (
          <div className="zui-progress__header">
            {label ? (
              <BaseProgress.Label className="zui-progress__label">{label}</BaseProgress.Label>
            ) : null}
            {showValue ? <BaseProgress.Value className="zui-progress__value" /> : null}
          </div>
        ) : null}
        <BaseProgress.Track className="zui-progress__track">
          <BaseProgress.Indicator className="zui-progress__indicator" />
        </BaseProgress.Track>
      </div>
    </BaseProgress.Root>
  );
});

Progress.displayName = "Progress";
