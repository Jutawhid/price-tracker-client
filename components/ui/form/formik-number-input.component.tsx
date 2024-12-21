"use client";

import { Field, FieldProps, GenericFieldHTMLAttributes } from "formik";
import { InputNumber, InputNumberProps } from "primereact/inputnumber";
import { useId } from "react";

type Props = InputNumberProps & {
  label?: string;
  helperText?: string;
  error?: boolean;
  className?: string;
  requiredIcon?: string;
};

function NumberField({
  name,
  id,
  label,
  placeholder,
  disabled,
  error,
  helperText,
  requiredIcon,
  className,
  ...rest
}: Props) {
  const generatedID = useId();
  const inputId = id || generatedID;

  return (
    <div className="w-full">
      <div>
        {label && (
          <label
            htmlFor={inputId}
            className="font-inter text-sm font-normal text-black"
          >
            {label}
          </label>
        )}
        {requiredIcon && <label>{requiredIcon}</label>}
      </div>
      <div>
        <InputNumber
          showButtons
          min={0}
          id={inputId}
          name={name}
          disabled={disabled}
          onFocus={(e) => e.target.select()}
          placeholder={placeholder}
          className="w-full rounded-lg"
          pt={{
            input: {
              root: {
                className:
                  "h-[42px] rounded-none border border-outline shadow-none text-sm color-mainText w-full font-inter mt-2",
              },
            },
          }}
          {...rest}
        />
      </div>

      {error && <small>{helperText}</small>}
      {helperText && !error && <small>{helperText}</small>}
    </div>
  );
}

type FormikTextFieldProps = GenericFieldHTMLAttributes & {
  apiError?: String;
  props?: Props;
};

export function FormikNumberField({
  props,
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
      }: FieldProps<number>) => (
        <NumberField
          {...field}
          {...props}
          disabled={disabled || isSubmitting}
          error={!!apiError || (touched && !!error)}
          helperText={
            apiError
              ? (apiError as string)
              : touched && !!error
                ? (error as string)
                : props?.helperText
          }
        />
      )}
    </Field>
  );
}
