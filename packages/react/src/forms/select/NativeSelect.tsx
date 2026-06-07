import { forwardRef, useEffect, type ComponentPropsWithoutRef } from "react";
import { cx, dataAttr, devWarn } from "@zed-ui/utils";
import type { ZedSize } from "../../shared/types";
import { Box } from "../../primitives/box/Box";
import { useFormFieldControlProps } from "../form-field/FormFieldContext";
import type { SelectOption } from "./Select";

export type NativeSelectOwnProps = Omit<
  ComponentPropsWithoutRef<"select">,
  "className" | "size"
> & {
  className?: string;
  invalid?: boolean;
  options?: SelectOption[];
  placeholder?: string;
  size?: ZedSize;
};

/**
 * Native HTML `<select>` fallback. Prefer `Select` / `MultiSelect` (Base UI) for overlays and a11y.
 * @deprecated Use `Select` or `MultiSelect` from `@zed-ui/react` instead.
 */
export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectOwnProps>(
  function NativeSelect(
    { className, invalid: invalidProp = false, options = [], placeholder, size = "md", ...rest },
    ref
  ) {
    useEffect(() => {
      devWarn("NativeSelect is deprecated. Use Select or MultiSelect instead.");
    }, []);

    const { invalid, id: fieldId, required: fieldRequired, ...fieldAriaProps } =
      useFormFieldControlProps({
        id: rest.id,
        invalid: invalidProp ? true : undefined,
        required: rest.required
      });
    const { id, required, ...selectRest } = rest;

    return (
      <Box
        ref={ref}
        as="select"
        className={cx("zui-select", "zui-select--native", className)}
        data-invalid={dataAttr(invalid)}
        data-size={size}
        {...fieldAriaProps}
        {...selectRest}
        id={fieldId ?? id}
        required={fieldRequired ?? required}
      >
        {placeholder ? (
          <option disabled value="">
            {placeholder}
          </option>
        ) : null}
        {options.map((option) => (
          <option key={option.value} disabled={option.disabled} value={option.value}>
            {option.label}
          </option>
        ))}
      </Box>
    );
  }
);

NativeSelect.displayName = "NativeSelect";
