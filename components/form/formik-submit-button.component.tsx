import { useFormikContext } from "formik";
import { Button, ButtonProps } from "primereact/button";

export function FormikSubmitButton({
  type = "submit",
  disabled,
  outlined,
  className,
  loadingIcon,
  ...rest
}: Readonly<ButtonProps>) {
  const { isSubmitting } = useFormikContext();

  return (
    <Button
      type={type}
      disabled={disabled || isSubmitting}
      loading={isSubmitting}
      loadingIcon={loadingIcon}
      className="flex h-[50px] w-full items-center justify-center rounded-lg border-none bg-black text-sm"
      {...rest}
    />
  );
}
