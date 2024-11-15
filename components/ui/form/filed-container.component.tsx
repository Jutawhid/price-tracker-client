import { PropsWithChildren } from "react";

export const FieldContainer = ({
  className = "",
  children,
}: PropsWithChildren<{
  className?: string;
}>) => {
  return (
    <div className={`flex-column flex gap-1 ${className}`}>{children}</div>
  );
};
