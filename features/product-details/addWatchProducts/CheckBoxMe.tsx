import * as React from "react";

// Utils
function isIndeterminate(checked?: CheckedState) {
  return checked === "indeterminate";
}

function getState(checked: CheckedState) {
  return isIndeterminate(checked)
    ? "indeterminate"
    : checked
    ? "checked"
    : "unchecked";
}
// Context
type CheckboxContextType = {
  checked: boolean;
};

const CheckboxContext = React.createContext({} as CheckboxContextType);

// Main Checkbox
const CHECKBOX_NAME = "Checkbox";
const BUTTON_TAG = "button";

type CheckedState = boolean | "indeterminate";

type PrimitiveButtonProps = React.ComponentPropsWithoutRef<typeof BUTTON_TAG>;

interface CheckboxProps extends PrimitiveButtonProps {
  checked?: boolean;
}

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (props, forwardedRef) => {
    const { checked: checkedProps } = props;
    const [checked = false, setChecked] = React.useState(checkedProps);

    const checkboxContextValue = { checked };

    return (
      <CheckboxContext.Provider value={checkboxContextValue}>
        <button
          type="button"
          role="checkbox"
          aria-checked={isIndeterminate(checked) ? "mixed" : checked}
          data-state={getState(checked)}
          {...props}
          ref={forwardedRef}
          onClick={() => {
            setChecked((prevChecked) =>
              isIndeterminate(prevChecked) ? true : !prevChecked
            );
          }}
        />
      </CheckboxContext.Provider>
    );
  }
);

Checkbox.displayName = CHECKBOX_NAME;

// Checkbox Indicator (ex: tick icon)
const CHECKBOX_INDICATOR_NAME = "CheckboxIndicator";
const SPAN_TAG = "span";

type PrimitiveSpanProps = React.ComponentPropsWithoutRef<typeof SPAN_TAG>;

interface CheckboxIndicatorProps extends PrimitiveSpanProps {}

const CheckboxIndicator = React.forwardRef<
  HTMLSpanElement,
  CheckboxIndicatorProps
>((props, forwardedRef) => {
  console.log({ props });
  const { checked } = React.useContext(CheckboxContext);

  return checked ? (
    <span data-state={getState(checked)} {...props} ref={forwardedRef} />
  ) : null;
});

CheckboxIndicator.displayName = CHECKBOX_INDICATOR_NAME;

export { Checkbox, CheckboxIndicator };

// what if Checkbox does not wrap CheckboxIndicator inside?
// does React Context work?
