import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { cx, dataAttr } from "@zed-ui/utils";
import type { ZedSize } from "../../shared/types";
import { Box } from "../../primitives/box/Box";
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
    { className, invalid = false, options = [], placeholder, size = "md", ...rest },
    ref
  ) {
    return (
      <Box
        ref={ref}
        as="select"
        className={cx("zui-select", "zui-select--native", className)}
        data-invalid={dataAttr(invalid)}
        data-size={size}
        {...rest}
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
