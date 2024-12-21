"use client";

import { Field, FieldProps, useFormikContext } from "formik";
import { InputSwitch, InputSwitchChangeEvent } from "primereact/inputswitch";

type FormikSwitchProps = {
  name: string;
  label?: string;
  requiredIcon?: string;
  error?: boolean;
};

export function FormikSwitch({
  name,
  requiredIcon,
  label,
  error,
  ...rest
}: FormikSwitchProps) {
  const { setFieldValue } = useFormikContext();
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps<boolean>) => {
        const isFormFieldInvalid = meta.touched && meta.error;
        const className = isFormFieldInvalid ? "p-invalid" : "";
        return (
          <>
            <div className="align-items-center flex flex-row gap-2">
              <div>
                {label && (
                  <label
                    style={{
                      color: "#333333",
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: "20px",
                    }}
                    htmlFor="item"
                  >
                    {label}
                  </label>
                )}
                {requiredIcon && (
                  <label style={{ color: "red" }}>{requiredIcon}</label>
                )}
              </div>
              <div className="card justify-content-center flex">
                <InputSwitch
                  name={name}
                  className={className}
                  checked={field.value}
                  onChange={(e: InputSwitchChangeEvent) =>
                    setFieldValue(name, e.value ?? false)
                  }
                  pt={{
                    slider: {
                      className: `${field.value && "bg-green"}`,
                    },
                  }}
                />
              </div>
            </div>
            {isFormFieldInvalid && <div className="p-error">{meta.error}</div>}
          </>
        );
      }}
    </Field>
  );
}
