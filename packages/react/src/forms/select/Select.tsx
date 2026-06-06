import { Select as BaseSelect } from "@base-ui/react/select";
import {
  forwardRef,
  useMemo,
  type ComponentPropsWithoutRef,
  type ReactNode,
  type Ref
} from "react";
import { cx, dataAttr } from "@zed-ui/utils";
import type { ZedSize } from "../../shared/types";

function SelectChevronIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export type SelectOption = {
  disabled?: boolean;
  label: ReactNode;
  value: string;
};

type SelectOptionsProps = {
  className?: string;
  invalid?: boolean;
  options?: SelectOption[];
  placeholder?: string;
  size?: ZedSize;
};

export type SelectOwnProps = SelectOptionsProps &
  Omit<ComponentPropsWithoutRef<typeof BaseSelect.Root<string, false>>, "className" | "children">;

export type MultiSelectOwnProps = SelectOptionsProps &
  Omit<ComponentPropsWithoutRef<typeof BaseSelect.Root<string, true>>, "className" | "children" | "multiple">;

function formatSelectValue(
  value: unknown,
  options: SelectOption[],
  multiple: boolean
): ReactNode {
  if (multiple) {
    const values = Array.isArray(value) ? value : [];
    if (values.length === 0) return null;
    return values
      .map((item) => options.find((option) => option.value === item)?.label ?? String(item))
      .join(", ");
  }

  if (value == null || value === "") return null;
  return options.find((option) => option.value === value)?.label ?? String(value);
}

type SelectInnerProps = SelectOptionsProps & {
  multiple?: boolean;
  rootProps: Record<string, unknown>;
  triggerRef: Ref<HTMLButtonElement>;
};

function SelectInner({
  className,
  invalid = false,
  multiple = false,
  options = [],
  placeholder = "Select…",
  rootProps,
  size = "md",
  triggerRef
}: SelectInnerProps) {
  const optionLabels = useMemo(
    () => new Map(options.map((option) => [option.value, option.label])),
    [options]
  );

  return (
    <BaseSelect.Root multiple={multiple || undefined} {...rootProps}>
      <BaseSelect.Trigger
        ref={triggerRef}
        className={cx("zui-select__trigger", className)}
        data-invalid={dataAttr(invalid)}
        data-size={size}
      >
        <BaseSelect.Value className="zui-select__value" placeholder={placeholder}>
          {(value) => formatSelectValue(value, options, multiple) ?? null}
        </BaseSelect.Value>
        <BaseSelect.Icon className="zui-select__icon">
          <SelectChevronIcon />
        </BaseSelect.Icon>
      </BaseSelect.Trigger>
      <BaseSelect.Portal>
        <BaseSelect.Positioner
          align="start"
          alignItemWithTrigger={false}
          className="zui-select__positioner"
          side="bottom"
          sideOffset={4}
        >
          <BaseSelect.Popup className="zui-select__popup" data-size={size}>
            <BaseSelect.List className="zui-select__list">
              {options.map((option) => (
                <BaseSelect.Item
                  key={option.value}
                  className="zui-select__item"
                  disabled={option.disabled}
                  value={option.value}
                >
                  <BaseSelect.ItemText className="zui-select__item-text">
                    {optionLabels.get(option.value) ?? option.label}
                  </BaseSelect.ItemText>
                </BaseSelect.Item>
              ))}
            </BaseSelect.List>
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
}

export const Select = forwardRef<HTMLButtonElement, SelectOwnProps>(function Select(
  { className, invalid, options, placeholder, size, ...rest },
  ref
) {
  return (
    <SelectInner
      className={className}
      invalid={invalid}
      multiple={false}
      options={options}
      placeholder={placeholder}
      rootProps={rest}
      size={size}
      triggerRef={ref}
    />
  );
});

Select.displayName = "Select";

/** Multi-select built on `@base-ui/react/select` with `multiple` enabled. */
export const MultiSelect = forwardRef<HTMLButtonElement, MultiSelectOwnProps>(function MultiSelect(
  { className, invalid, options, placeholder = "Select…", size, ...rest },
  ref
) {
  return (
    <SelectInner
      className={className}
      invalid={invalid}
      multiple
      options={options}
      placeholder={placeholder}
      rootProps={{ multiple: true, ...rest }}
      size={size}
      triggerRef={ref}
    />
  );
});

MultiSelect.displayName = "MultiSelect";

export const SelectRoot = BaseSelect.Root;
export const SelectTrigger = BaseSelect.Trigger;
export const SelectValue = BaseSelect.Value;
export const SelectIcon = BaseSelect.Icon;
export const SelectPortal = BaseSelect.Portal;
export const SelectPositioner = BaseSelect.Positioner;
export const SelectPopup = BaseSelect.Popup;
export const SelectList = BaseSelect.List;
export const SelectItem = BaseSelect.Item;
export const SelectItemIndicator = BaseSelect.ItemIndicator;
export const SelectItemText = BaseSelect.ItemText;

export const SelectParts = {
  Icon: SelectIcon,
  Item: SelectItem,
  ItemIndicator: SelectItemIndicator,
  ItemText: SelectItemText,
  List: SelectList,
  Popup: SelectPopup,
  Portal: SelectPortal,
  Positioner: SelectPositioner,
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Value: SelectValue
};
