
import { FormikSubmitButton, FormikTextField } from "@/components/form";
import { Form, useFormikContext } from "formik";

export function AddWatchForm() {
  return (
    <Form>
      <div className="flex justify-between gap-2 rounded-lg bg-white px-2 py-4 md:gap-4">
        <div className="mb-1 flex flex-col gap-1 md:flex-row ">
          <FormikTextField
            name="desired_price"
            props={{
              label: "Desired Price: ",
              placeholder: "Enter your Desired Price",
              requiredIcon: "*",
              type: "number",
            }}
          />
        </div>
        <div className="mb-1 flex flex-col gap-1 md:flex-row ">
          <FormikTextField
            name="label"
            props={{
              label: "Label: ",
              placeholder: "Please enter Label",
            }}
          />
        </div>
        <div className="mb-1 flex flex-col gap-1 md:flex-row ">
          <FormikTextField
            name="label"
            props={{
              label: "Price drop alerts will be sent to: ",
              placeholder: "Please enter Label",
              disabled: true
            }}
            
          />
        </div>
      </div>
      <div className="flex">
        <FormikSubmitButton className="h-[50px] !w-[50px] rounded-[6px] bg-primary text-base">
          Add Daraz Price Watch
        </FormikSubmitButton>
      </div>
    </Form>
  );
}
