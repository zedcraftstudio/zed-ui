import { devWarn } from "@zed-ui/utils";
import { createContext, useContext, useEffect, type ReactNode } from "react";

export type FormFieldContextValue = {
  controlId: string;
  descriptionId?: string;
  errorId?: string;
  invalid: boolean;
  required: boolean;
};

const FormFieldContext = createContext<FormFieldContextValue | null>(null);

export function FormFieldProvider({
  children,
  value
}: {
  children: ReactNode;
  value: FormFieldContextValue;
}) {
  return <FormFieldContext.Provider value={value}>{children}</FormFieldContext.Provider>;
}

export function useFormFieldContext(): FormFieldContextValue | null {
  return useContext(FormFieldContext);
}

export type FormFieldControlProps = {
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
  "aria-required"?: boolean;
  id?: string;
  invalid?: boolean;
  required?: boolean;
};

export type AccessibleNameProps = {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  id?: string;
};

export function useWarnMissingAccessibleName(
  component: string,
  props: AccessibleNameProps,
  extra?: AccessibleNameProps
): void {
  const field = useFormFieldContext();

  useEffect(() => {
    const merged = { ...extra, ...props };
    const hasAriaName =
      Boolean(merged["aria-label"]?.trim()) || Boolean(merged["aria-labelledby"]?.trim());
    const hasFormFieldAssociation = Boolean(field?.controlId && merged.id);

    if (!hasAriaName && !hasFormFieldAssociation) {
      devWarn(
        `${component}: provide an accessible name via aria-label, aria-labelledby, or a FormField label.`
      );
    }
  }, [component, extra, field, props]);
}

export function useFormFieldControlProps(props: FormFieldControlProps = {}): FormFieldControlProps {
  const field = useFormFieldContext();

  const describedBy = [props["aria-describedby"], field?.descriptionId, field?.errorId]
    .filter(Boolean)
    .join(" ");

  const invalid = props.invalid === true || (props.invalid !== false && field?.invalid === true);
  const required = props.required ?? field?.required;

  return {
    id: props.id ?? field?.controlId,
    invalid,
    required,
    "aria-required": props["aria-required"] ?? (required ? true : undefined),
    "aria-invalid": props["aria-invalid"] ?? (invalid ? true : undefined),
    "aria-describedby": describedBy || undefined
  };
}
