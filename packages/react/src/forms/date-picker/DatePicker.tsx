import { forwardRef, useState, type Ref } from "react";
import { useComponentDefaults } from "@zed-ui/themes";
import { cx, dataAttr } from "@zed-ui/utils";
import type { ZedSize } from "../../shared/types";
import { useFormFieldControlProps } from "../form-field/FormFieldContext";
import { Calendar } from "../calendar/Calendar";
import {
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTrigger
} from "../../overlays/popover/Popover";

export type DatePickerOwnProps = {
  className?: string;
  disabled?: boolean;
  id?: string;
  invalid?: boolean;
  max?: Date;
  min?: Date;
  name?: string;
  onValueChange?: (value: Date | null) => void;
  placeholder?: string;
  required?: boolean;
  size?: ZedSize;
  value?: Date | null;
};

function formatDate(value: Date | null | undefined): string {
  if (!value) return "";
  return value.toLocaleDateString();
}

export const DatePicker = forwardRef<HTMLButtonElement, DatePickerOwnProps>(function DatePicker(
  {
    className,
    disabled = false,
    id,
    invalid: invalidProp = false,
    max,
    min,
    name,
    onValueChange,
    placeholder = "Select date",
    required,
    size: sizeProp,
    value = null
  },
  ref
) {
  const defaults = useComponentDefaults("DatePicker");
  const size = (sizeProp ?? (defaults?.size as ZedSize | undefined) ?? "md") as ZedSize;
  const [open, setOpen] = useState(false);
  const {
    invalid,
    id: fieldId,
    ...fieldAriaProps
  } = useFormFieldControlProps({
    id,
    invalid: invalidProp ? true : undefined,
    required
  });

  return (
    <PopoverRoot modal={false} open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        ref={ref as Ref<HTMLButtonElement>}
        className={cx("zui-date-picker__trigger", className)}
        data-invalid={dataAttr(invalid)}
        data-size={size}
        disabled={disabled}
        id={fieldId ?? id}
        name={name}
        type="button"
        {...fieldAriaProps}
      >
        <span
          className={cx("zui-date-picker__value", !value && "zui-date-picker__value--placeholder")}
        >
          {value ? formatDate(value) : placeholder}
        </span>
        <span aria-hidden className="zui-date-picker__icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="2.5" y="3.5" width="11" height="10" rx="1.5" />
            <path d="M2.5 6.5h11M5.5 2v2M10.5 2v2" strokeLinecap="round" />
          </svg>
        </span>
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverPositioner align="start" side="bottom">
          <PopoverPopup className="zui-date-picker__popup">
            <Calendar
              disabled={disabled}
              max={max}
              min={min}
              value={value}
              onValueChange={(next) => {
                onValueChange?.(next);
                setOpen(false);
              }}
            />
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </PopoverRoot>
  );
});

DatePicker.displayName = "DatePicker";
