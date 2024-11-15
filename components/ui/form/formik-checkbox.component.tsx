"use client";

import EmptyChecked from "@/../public/new/empty-checked.svg";
import FilledChecked from "@/../public/new/filled-checked-black.svg";
import { useField, useFormikContext } from "formik";
import Image from "next/image";

type FormikCheckboxProps = {
  name: string;
  label?: string;
  requiredIcon?: string;
  helperText?: string;
  className?: string;
};

export function FormikCheckbox({
  name,
  requiredIcon,
  label,
  helperText,
  className,
}: FormikCheckboxProps) {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  return (
    <>
      <div
        className="flex cursor-pointer gap-2 font-medium text-black"
        onClick={() => setFieldValue(name, !field?.value)}
      >
        {field?.value === true ? (
          <Image
            src={FilledChecked}
            alt=""
          />
        ) : (
          <Image
            src={EmptyChecked}
            alt=""
          />
        )}
        <p>{label}</p>
        {requiredIcon && <span className="text-red-500">{requiredIcon}</span>}
      </div>

      {meta?.error && meta?.touched && (
        <small className="text-red-500">{meta?.error}</small>
      )}
      {helperText && !meta?.error && <small>{helperText}</small>}
    </>
  );
}
