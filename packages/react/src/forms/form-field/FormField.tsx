import { forwardRef, useId, type ElementType, type ReactNode, type Ref } from "react";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { cx, dataAttr } from "@zed-ui/utils";
import { Box, type BoxOwnProps } from "../../primitives/box/Box";
import { FormFieldProvider } from "./FormFieldContext";

export type FormFieldOwnProps = BoxOwnProps & {
  description?: ReactNode;
  error?: ReactNode;
  htmlFor?: string;
  label?: ReactNode;
  required?: boolean;
};

function FormFieldBase(props: PolymorphicProps<ElementType, FormFieldOwnProps>, ref: Ref<unknown>) {
  const {
    as,
    children,
    className,
    description,
    error,
    htmlFor: htmlForProp,
    id: idProp,
    label,
    required = false,
    ...rest
  } = props;

  const generatedId = useId();
  const fieldId = idProp ?? generatedId;
  const controlId = htmlForProp ?? `${fieldId}-control`;
  const hasError = Boolean(error);
  const descriptionId = description ? `${fieldId}-description` : undefined;
  const errorId = hasError ? `${fieldId}-error` : undefined;

  return (
    <FormFieldProvider
      value={{
        controlId,
        descriptionId,
        errorId,
        invalid: hasError,
        required
      }}
    >
      <Box
        ref={ref as Ref<HTMLElement>}
        as={as ?? "div"}
        className={cx("zui-form-field", className)}
        data-invalid={dataAttr(hasError)}
        data-required={dataAttr(required)}
        {...rest}
      >
        {label ? (
          <label className="zui-form-field__label" htmlFor={controlId}>
            {label}
            {required ? (
              <span aria-hidden className="zui-form-field__required">
                {" "}
                *
              </span>
            ) : null}
          </label>
        ) : null}
        <div className="zui-form-field__control">{children}</div>
        {description ? (
          <div className="zui-form-field__description" id={descriptionId}>
            {description}
          </div>
        ) : null}
        {error ? (
          <div className="zui-form-field__error" id={errorId} role="alert">
            {error}
          </div>
        ) : null}
      </Box>
    </FormFieldProvider>
  );
}

export const FormField = forwardRef(FormFieldBase) as PolymorphicComponent<
  "div",
  FormFieldOwnProps
>;
