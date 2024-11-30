"use client";

import {
  FormikCheckbox,
  FormikSubmitButton,
  FormikTextField,
} from "@/components/ui/form";
import { FormikPasswordField } from "@/components/ui/form/formik-password-input.component";

import { Form } from "formik";
import Link from "next/link";

export function SignInForm() {
  return (
    <Form>
      <div className="flex flex-col justify-between gap-4 rounded-lg bg-white px-4 py-4 md:gap-12 md:p-8">
        <div className="flex-1">
          <div className="mb-4  flex flex-col gap-2 md:flex-row ">
            <FormikTextField
              name="email"
              props={{
                label: "Email Address: ",
                placeholder: "Please enter your Email",
                requiredIcon: "*",
              }}
            />
          </div>

          <div className="mb-4  flex flex-col gap-2 md:flex-row ">
            <FormikPasswordField
              name="password"
              props={{
                label: "Password: ",
                placeholder: "Please enter your password",
                requiredIcon: "*",
              }}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <FormikSubmitButton className="h-[50px] rounded-[6px] bg-primary text-base">
            {" "}
            Sign In{" "}
          </FormikSubmitButton>

          <p>
            Don't have account?{" "}
            <Link
              href="/auth/signup"
              className="cursor-pointer font-bold text-link"
            >
              SignUp
            </Link>{" "}
            here.
          </p>
        </div>
      </div>
    </Form>
  );
}
