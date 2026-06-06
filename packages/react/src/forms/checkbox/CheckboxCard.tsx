import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode, type Ref } from "react";
import { useComponentDefaults } from "@zed-ui/themes";
import { cx, dataAttr } from "@zed-ui/utils";
import type { ZedColor, ZedSize } from "../../shared/types";
import { CheckboxCheckIcon, CheckboxIndeterminateIcon } from "./icons";

export type CheckboxCardVariant = "outline" | "subtle" | "solid";

export type CheckboxCardOwnProps = Omit<
  ComponentPropsWithoutRef<typeof BaseCheckbox.Root>,
  "className" | "color" | "size"
> & {
  className?: string;
  color?: ZedColor;
  description?: ReactNode;
  invalid?: boolean;
  label?: ReactNode;
  showIndicator?: boolean;
  size?: ZedSize;
  variant?: CheckboxCardVariant;
};

export const CheckboxCard = forwardRef(function CheckboxCard(
  {
    checked,
    className,
    color: colorProp,
    description,
    disabled,
    indeterminate,
    invalid = false,
    label,
    showIndicator = true,
    size: sizeProp,
    variant: variantProp,
    ...rest
  }: CheckboxCardOwnProps,
  ref: Ref<HTMLElement>
) {
  const defaults = useComponentDefaults("Checkbox");
  const color = colorProp ?? (defaults?.color as ZedColor | undefined) ?? "primary";
  const size = sizeProp ?? (defaults?.size as ZedSize | undefined) ?? "md";
  const variant = variantProp ?? "outline";

  return (
    <label
      className={cx("zui-checkbox-card", className)}
      data-color={color}
      data-disabled={dataAttr(disabled)}
      data-invalid={dataAttr(invalid)}
      data-size={size}
      data-variant={variant}
    >
      <span className="zui-checkbox-card__body">
        <span className="zui-checkbox-card__content">
          {label ? <span className="zui-checkbox-card__label">{label}</span> : null}
          {description ? (
            <span className="zui-checkbox-card__description">{description}</span>
          ) : null}
        </span>
        {showIndicator ? (
          <BaseCheckbox.Root
            ref={ref}
            checked={checked}
            className="zui-checkbox__control"
            data-color={color}
            data-invalid={dataAttr(invalid)}
            data-size={size}
            data-variant="solid"
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
        ) : (
          <BaseCheckbox.Root
            ref={ref}
            checked={checked}
            className="zui-checkbox-card__hidden-control"
            data-color={color}
            data-invalid={dataAttr(invalid)}
            disabled={disabled}
            indeterminate={indeterminate}
            {...rest}
          />
        )}
      </span>
    </label>
  );
});

CheckboxCard.displayName = "CheckboxCard";
