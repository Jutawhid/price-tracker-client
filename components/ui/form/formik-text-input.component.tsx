"use client";


import { Field, FieldProps, GenericFieldHTMLAttributes } from "formik";
import { InputText, InputTextProps } from "primereact/inputtext";
import { useId } from "react";
import { MdVerifiedUser } from "react-icons/md";

type Props = InputTextProps & {
  label?: string;
  helperText?: string;
  error?: boolean;
  className?: string;
  requiredIcon?: string;
  isVerify?: boolean;
  isApplicablePage?: boolean;
  isDisable?: boolean;
  onVerifyClick?: () => void;
};

function TextField({
  name,
  id,
  label,
  placeholder,
  disabled,
  error,
  helperText,
  requiredIcon,
  className,
  isVerify = false,
  isDisable,
  isApplicablePage = false,
  onVerifyClick,
  ...rest
}: Props) {
  const generatedID = useId();

  const inputId = id || generatedID;
  // Only allow `isVerify` for 'email' and 'phone' fields otherwise not
  const isVerificationField = name === "email" || name === "phone";

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div>
          {label && (
            <label
              htmlFor={inputId}
              className="font-inter text-base font-medium text-black"
            >
              {label}
            </label>
          )}
          {requiredIcon && (
            <label className="text-red-500">{requiredIcon}</label>
          )}
        </div>
        {isVerificationField && isVerify && isApplicablePage && (
          <span className="flex items-center gap-1 text-right text-[16px] font-normal text-[#317D35]">
            <MdVerifiedUser />
            Verified
          </span>
        )}
      </div>
      <div className="relative">
        <InputText
          id={inputId}
          name={name}
          disabled={disabled}
          onFocus={(e) => e.target.select()}
          placeholder={placeholder}
          autoComplete="off"
          className="border-outline font-inter   mt-2 h-[42px] w-full rounded-lg border text-sm shadow-none"
          {...rest}
        />
        {!isVerify && isVerificationField && isApplicablePage && (
          <button
            className={`p absolute bottom-3 right-2 z-50 rounded-lg bg-[#64748B] px-2 py-1 text-[14px] font-bold text-white ${
              isDisable ? "cursor-not-allowed" : ""
            }`}
            type="button"
            onClick={onVerifyClick}
            disabled={isDisable}
          >
            Verify
          </button>
        )}
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

export function FormikTextField({
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
