import { forwardRef, type ElementType, type ReactNode, type Ref } from "react";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { useComponentDefaults } from "@zed-ui/themes";
import { cx, dataAttr } from "@zed-ui/utils";
import type { InputVariant, ZedSize } from "../../shared/types";
import { Box, type BoxOwnProps } from "../../primitives/box/Box";
import { useFormFieldControlProps } from "../form-field/FormFieldContext";

export type InputOwnProps = Omit<BoxOwnProps, "color"> & {
  endIcon?: ReactNode;
  invalid?: boolean;
  size?: ZedSize;
  startIcon?: ReactNode;
  variant?: InputVariant;
};

function InputBase(props: PolymorphicProps<ElementType, InputOwnProps>, ref: Ref<unknown>) {
  const defaults = useComponentDefaults("Input");
  const {
    as,
    className,
    endIcon,
    invalid: invalidProp = false,
    size = (defaults?.size as ZedSize | undefined) ?? "md",
    startIcon,
    variant = (defaults?.variant as InputVariant | undefined) ?? "outline",
    ...rest
  } = props;

  const {
    invalid,
    id: fieldId,
    required: fieldRequired,
    ...fieldAriaProps
  } = useFormFieldControlProps({
    id: rest.id,
    invalid: invalidProp ? true : undefined,
    required: rest.required
  });
  const { id, required, ...inputRest } = rest;

  const hasIcons = Boolean(startIcon || endIcon);

  const input = (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "input"}
      className={cx(
        "zui-input",
        startIcon ? "zui-input--start-icon" : undefined,
        endIcon ? "zui-input--end-icon" : undefined,
        className
      )}
      data-invalid={dataAttr(invalid)}
      data-size={size}
      data-variant={variant}
      {...fieldAriaProps}
      {...inputRest}
      id={fieldId ?? id}
      required={fieldRequired ?? required}
    />
  );

  if (!hasIcons) {
    return input;
  }

  return (
    <div
      className="zui-input-group"
      data-invalid={dataAttr(invalid)}
      data-size={size}
      data-variant={variant}
    >
      {startIcon ? (
        <span className="zui-input__start-icon" aria-hidden>
          {startIcon}
        </span>
      ) : null}
      {input}
      {endIcon ? (
        <span className="zui-input__end-icon" aria-hidden>
          {endIcon}
        </span>
      ) : null}
    </div>
  );
}

export const Input = forwardRef(InputBase) as PolymorphicComponent<"input", InputOwnProps>;

(Input as { displayName?: string }).displayName = "Input";
