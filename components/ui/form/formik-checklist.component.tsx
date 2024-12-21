import { Field, FieldProps, GenericFieldHTMLAttributes } from "formik";
import {
  Checkbox,
  CheckboxChangeEvent,
  CheckboxProps,
} from "primereact/checkbox";
import { useId } from "react";
import { FieldContainer } from "./filed-container.component";

type CheckboxFieldProps = Partial<CheckboxProps> & {
  label?: string;
  helperText?: string;
  error?: boolean;
  inputClassName?: string;
  labelClassName?: string;
  showSearchIcon?: boolean;
  checked?: boolean;
  onUpdate?: (e: CheckboxChangeEvent) => void;
  handleSearch?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  customValue?: string | number;
};

function CheckboxField({
  name,
  id,
  label,
  placeholder,
  disabled,
  className = "",
  error,
  helperText,
  inputClassName = "",
  labelClassName = "",
  showSearchIcon,
  handleSearch,
  checked = false,
  onUpdate,
  ...rest
}: CheckboxFieldProps) {
  const generatedID = useId();
  const inputId = id || generatedID;

  return (
    <FieldContainer>
      <div className=" flex items-center">
        <Checkbox
          {...rest}
          inputId={inputId}
          name={name}
          disabled={disabled}
          className={`p-input mr-2 ${inputClassName}`}
          checked={!!checked}
        />
        {label && (
          <label
            htmlFor={inputId}
            className={`cursor-pointer ${labelClassName}`}
          >
            {label}
            {rest?.required === true ? <span className="p-error">*</span> : ""}
          </label>
        )}
      </div>

      {error && <small className="p-error">{helperText}</small>}
      {helperText && !error && <small>{helperText}</small>}
    </FieldContainer>
  );
}

type FormikTextFieldProps = GenericFieldHTMLAttributes & {
  apiError?: string;
  checkboxFieldProps?: CheckboxFieldProps;
};

export function FormikCheckboxField({
  checkboxFieldProps,
  apiError,
  disabled,
  ...rest
}: FormikTextFieldProps) {
  return (
    <Field {...rest}>
      {({
        field,
        meta: { touched, error },
        form: { isSubmitting },
      }: FieldProps<boolean>) => (
        <CheckboxField
          {...field}
          {...checkboxFieldProps}
          disabled={disabled || isSubmitting}
          error={!!apiError || (touched && !!error)}
          checked={field.value}
          helperText={
            apiError ||
            (touched && !!error
              ? (error as string)
              : checkboxFieldProps?.helperText)
          }
        />
      )}
    </Field>
  );
}
