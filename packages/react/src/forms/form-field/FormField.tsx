import { Children, cloneElement, forwardRef, isValidElement, useId, type ElementType, type ReactElement, type ReactNode, type Ref } from "react";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { cx, dataAttr } from "@zed-ui/utils";
import { Box, type BoxOwnProps } from "../../primitives/box/Box";

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
  const htmlFor = htmlForProp ?? fieldId;
  const hasError = Boolean(error);
  const errorId = `${fieldId}-error`;

  let control = children;
  if (hasError) {
    const child = Children.toArray(children).find(isValidElement);
    if (child) {
      type ControlProps = {
        invalid?: boolean;
        "aria-invalid"?: boolean;
        "aria-describedby"?: string;
      };
      const controlChild = child as ReactElement<ControlProps>;
      const prevDescribedBy = controlChild.props["aria-describedby"];
      control = cloneElement(controlChild, {
        "aria-invalid": true,
        "aria-describedby": [prevDescribedBy, errorId].filter(Boolean).join(" "),
        invalid: controlChild.props.invalid ?? true
      });
    }
  }

  return (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "div"}
      className={cx("zui-form-field", className)}
      data-invalid={dataAttr(hasError)}
      data-required={dataAttr(required)}
      id={fieldId}
      {...rest}
    >
      {label ? (
        <label className="zui-form-field__label" htmlFor={htmlFor}>
          {label}
          {required ? <span aria-hidden className="zui-form-field__required"> *</span> : null}
        </label>
      ) : null}
      <div className="zui-form-field__control">{control}</div>
      {description ? <div className="zui-form-field__description">{description}</div> : null}
      {error ? (
        <div className="zui-form-field__error" id={errorId} role="alert">
          {error}
        </div>
      ) : null}
    </Box>
  );
}

export const FormField = forwardRef(FormFieldBase) as PolymorphicComponent<"div", FormFieldOwnProps>;
