import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode, type Ref } from "react";
import { useComponentDefaults } from "@zed-ui/themes";
import { cx, dataAttr } from "@zed-ui/utils";
import type { CheckboxVariant, ZedColor, ZedSize } from "../../shared/types";
import { CheckboxCheckIcon, CheckboxIndeterminateIcon } from "./icons";

export type CheckboxOwnProps = Omit<
  ComponentPropsWithoutRef<typeof BaseCheckbox.Root>,
  "className" | "color" | "size"
> & {
  className?: string;
  color?: ZedColor;
  description?: ReactNode;
  invalid?: boolean;
  label?: ReactNode;
  size?: ZedSize;
  variant?: CheckboxVariant;
};

export const Checkbox = forwardRef(function Checkbox(
  {
    checked,
    className,
    color: colorProp,
    description,
    disabled,
    indeterminate,
    invalid = false,
    label,
    size: sizeProp,
    variant: variantProp,
    ...rest
  }: CheckboxOwnProps,
  ref: Ref<HTMLElement>
) {
  const defaults = useComponentDefaults("Checkbox");
  const color = colorProp ?? (defaults?.color as ZedColor | undefined) ?? "primary";
  const size = sizeProp ?? (defaults?.size as ZedSize | undefined) ?? "md";
  const variant = variantProp ?? (defaults?.variant as CheckboxVariant | undefined) ?? "solid";

  return (
    <label className={cx("zui-checkbox", className)} data-disabled={dataAttr(disabled)}>
      <BaseCheckbox.Root
        ref={ref}
        checked={checked}
        className="zui-checkbox__control"
        data-color={color}
        data-invalid={dataAttr(invalid)}
        data-size={size}
        data-variant={variant}
        disabled={disabled}
        indeterminate={indeterminate}
        {...rest}
      >
        <BaseCheckbox.Indicator className="zui-checkbox__indicator">
          <span className="zui-checkbox__check-icon">
            <CheckboxCheckIcon />
          </span>
          <span className="zui-checkbox__indeterminate-icon">
            <CheckboxIndeterminateIcon />
          </span>
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
      {label || description ? (
        <span className="zui-checkbox__content">
          {label ? <span className="zui-checkbox__label">{label}</span> : null}
          {description ? <span className="zui-checkbox__description">{description}</span> : null}
        </span>
      ) : null}
    </label>
  );
});

Checkbox.displayName = "Checkbox";
