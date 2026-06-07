import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import {
  forwardRef,
  useMemo,
  type ComponentPropsWithoutRef,
  type ForwardRefExoticComponent,
  type ReactNode,
  type Ref,
  type RefAttributes
} from "react";
import { useComponentDefaults } from "@zed-ui/themes";
import { cx, dataAttr } from "@zed-ui/utils";
import type { ZedSize } from "../../shared/types";
import {
  useFormFieldControlProps,
  useWarnMissingAccessibleName
} from "../form-field/FormFieldContext";

function ComboboxChevronIcon() {
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

export type ComboboxOption = {
  disabled?: boolean;
  label: ReactNode;
  value: string;
};

type ComboboxOptionsProps = {
  className?: string;
  emptyMessage?: string;
  invalid?: boolean;
  options?: ComboboxOption[];
  placeholder?: string;
  size?: ZedSize;
};

export type ComboboxOwnProps = ComboboxOptionsProps &
  Omit<ComponentPropsWithoutRef<typeof BaseCombobox.Root<string, false>>, "className" | "children">;

function ComboboxInner({
  className,
  emptyMessage = "No results found.",
  invalid: invalidProp = false,
  options = [],
  placeholder = "Search…",
  rootProps,
  size: sizeProp,
  inputRef
}: ComboboxOptionsProps & {
  inputRef: Ref<HTMLInputElement>;
  rootProps: Record<string, unknown>;
}) {
  const defaults = useComponentDefaults("Combobox");
  const size = (sizeProp ?? (defaults?.size as ZedSize | undefined) ?? "md") as ZedSize;
  const { invalid, ...fieldAriaProps } = useFormFieldControlProps({
    invalid: invalidProp ? true : undefined
  });

  useWarnMissingAccessibleName("Combobox", fieldAriaProps, {
    "aria-label": rootProps["aria-label"] as string | undefined,
    "aria-labelledby": rootProps["aria-labelledby"] as string | undefined
  });

  const itemValues = useMemo(
    () => options.filter((option) => !option.disabled).map((option) => option.value),
    [options]
  );

  const optionLabels = useMemo(
    () => new Map(options.map((option) => [option.value, option.label])),
    [options]
  );

  const itemToStringLabel = (value: string) => String(optionLabels.get(value) ?? value);

  return (
    <BaseCombobox.Root itemToStringLabel={itemToStringLabel} items={itemValues} {...rootProps}>
      <BaseCombobox.InputGroup
        className={cx("zui-combobox__input-group", className)}
        data-invalid={dataAttr(invalid)}
        data-size={size}
      >
        <BaseCombobox.Input
          ref={inputRef}
          className="zui-combobox__input"
          placeholder={placeholder}
          {...fieldAriaProps}
        />
        <BaseCombobox.Trigger className="zui-combobox__trigger" aria-label="Toggle options">
          <BaseCombobox.Icon className="zui-combobox__icon">
            <ComboboxChevronIcon />
          </BaseCombobox.Icon>
        </BaseCombobox.Trigger>
      </BaseCombobox.InputGroup>
      <BaseCombobox.Portal>
        <BaseCombobox.Positioner
          align="start"
          className="zui-combobox__positioner"
          side="bottom"
          sideOffset={4}
        >
          <BaseCombobox.Popup className="zui-combobox__popup" data-size={size}>
            <BaseCombobox.Empty className="zui-combobox__empty">{emptyMessage}</BaseCombobox.Empty>
            <BaseCombobox.List className="zui-combobox__list">
              {(value: string) => {
                const option = options.find((item) => item.value === value);
                return (
                  <BaseCombobox.Item
                    key={value}
                    className="zui-combobox__item"
                    disabled={option?.disabled}
                    value={value}
                  >
                    {optionLabels.get(value) ?? value}
                  </BaseCombobox.Item>
                );
              }}
            </BaseCombobox.List>
          </BaseCombobox.Popup>
        </BaseCombobox.Positioner>
      </BaseCombobox.Portal>
    </BaseCombobox.Root>
  );
}

export const Combobox: ForwardRefExoticComponent<ComboboxOwnProps & RefAttributes<HTMLInputElement>> =
  forwardRef<HTMLInputElement, ComboboxOwnProps>(function Combobox(
  { className, emptyMessage, invalid, options, placeholder, size, ...rest },
  ref
) {
  return (
    <ComboboxInner
      className={className}
      emptyMessage={emptyMessage}
      inputRef={ref}
      invalid={invalid}
      options={options}
      placeholder={placeholder}
      rootProps={rest}
      size={size}
    />
  );
  });

Combobox.displayName = "Combobox";

export const ComboboxRoot = BaseCombobox.Root;
export const ComboboxInput = BaseCombobox.Input;
export const ComboboxInputGroup = BaseCombobox.InputGroup;
export const ComboboxTrigger = BaseCombobox.Trigger;
export const ComboboxIcon = BaseCombobox.Icon;
export const ComboboxPortal = BaseCombobox.Portal;
export const ComboboxPositioner = BaseCombobox.Positioner;
export const ComboboxPopup = BaseCombobox.Popup;
export const ComboboxList = BaseCombobox.List;
export const ComboboxItem = BaseCombobox.Item;
export const ComboboxEmpty = BaseCombobox.Empty;
export const ComboboxClear = BaseCombobox.Clear;
export const ComboboxValue = BaseCombobox.Value;

export const ComboboxParts = {
  Clear: ComboboxClear,
  Empty: ComboboxEmpty,
  Icon: ComboboxIcon,
  Input: ComboboxInput,
  InputGroup: ComboboxInputGroup,
  Item: ComboboxItem,
  List: ComboboxList,
  Popup: ComboboxPopup,
  Portal: ComboboxPortal,
  Positioner: ComboboxPositioner,
  Root: ComboboxRoot,
  Trigger: ComboboxTrigger,
  Value: ComboboxValue
};
