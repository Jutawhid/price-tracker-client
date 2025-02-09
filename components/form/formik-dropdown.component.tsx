import { useField, useFormikContext } from "formik";
import {
  Dropdown,
  DropdownChangeEvent,
  DropdownProps,
} from "primereact/dropdown";
import { useEffect, useId } from "react";

type TProps<T> = DropdownProps & {
  name: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  className?: string;
  requiredIcon?: string;
  placeholder?: string;
  options: T[];
  labelPosition?: "top" | "left";
  onSelect?: (value: T) => void;
};

export function FormikDropdown<T>({
  name,
  id,
  label,
  placeholder,
  disabled,
  helperText,
  requiredIcon,
  className,
  onSelect,
  options,
  labelPosition = "top",
  ...rest
}: TProps<T>) {
  const generatedID = useId();
  const inputId = id || generatedID;

  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    onSelect &&
      onSelect(options?.find((option) => option.value === field.value));
  }, [field.value]);

  return (
    <div className="w-full">
      {labelPosition === "top" && (
        <>
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
              <span className="text-red-500">{requiredIcon}</span>
            )}
          </div>
          <div>
            <Dropdown
              value={field?.value}
              id={inputId}
              disabled={disabled}
              options={options}
              placeholder={placeholder}
              className="border-outline font-inter mt-2 h-[42px] w-full rounded-lg border text-sm shadow-none"
              onChange={(e: DropdownChangeEvent) => {
                setFieldValue(name, e?.value);
              }}
              {...rest}
            />
          </div>
        </>
      )}
      {labelPosition === "left" && (
        <div className="flex items-center">
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
              <span className="text-red-500">{requiredIcon}</span>
            )}
          </div>
          <div className="pl-3">
            <Dropdown
              value={field?.value}
              id={inputId}
              disabled={disabled}
              options={options}
              placeholder={placeholder}
              className="border-outline font-inter h-[42px] w-full rounded-lg border text-sm shadow-none"
              onChange={(e: DropdownChangeEvent) => {
                setFieldValue(name, e?.value);
              }}
              {...rest}
            />
          </div>
        </div>
      )}

      {meta?.error && meta?.touched && (
        <small className="text-red-500">{meta?.error}</small>
      )}
      {helperText && !meta?.error && <small>{helperText}</small>}
    </div>
  );
}
