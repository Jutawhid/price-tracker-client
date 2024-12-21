"use client";


import { Field, FieldProps, GenericFieldHTMLAttributes } from "formik";
import { InputTextarea, InputTextareaProps } from "primereact/inputtextarea";
import { useId } from "react";

type Props = InputTextareaProps & {
  label?: string;
  helperText?: string;
  error?: boolean;
  className?: string;
  requiredIcon?: string;
  showCount?: boolean;
  count?: number;
  maxLength?: number;
};

function TextField({
  name,
  id,
  showCount = false,
  count,
  maxLength,
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
          <div className="flex justify-between">
            <label
              htmlFor={inputId}
              className="font-inter text-base font-medium text-black"
            >
              {label}{" "}
              {requiredIcon && (
                <label className="text-red-500">{requiredIcon}</label>
              )}
            </label>
            {showCount && (
              <p className="text-xs font-medium text-[#7B7B7B]">
                {`${count}/${maxLength}`}
              </p>
            )}
          </div>
        )}
      </div>
      <div>
        <InputTextarea
          id={inputId}
          name={name}
          disabled={disabled}
          onFocus={(e) => e.target.select()}
          placeholder={placeholder}
          autoComplete="off"
          className="border-outline font-inter mt-2  h-[80px] w-full rounded-lg border text-sm shadow-none"
          {...rest}
        />
      </div>

      {error && <small className="text-red-500">{helperText}</small>}
      {helperText && !error && <small>{helperText}</small>}
    </div>
  );
}

type FormikTextFieldProps = GenericFieldHTMLAttributes & {
  apiError?: String;
  props?: Props;
};

export function FormikTextAreaField({
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
      }: FieldProps<string>) => (
        <TextField
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
