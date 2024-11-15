"use client";

import {
  FormikCheckbox,
  FormikSubmitButton,
  FormikTextField,
} from "@/components/ui/form";
import { FormikPasswordField } from "@/components/ui/form/formik-password-input.component";
// import { Button } from "@headlessui/react";
import { Form, useFormikContext } from "formik";
// import { signIn } from "next-auth/react";
import Link from "next/link";
// import { FaGoogle } from "react-icons/fa";
// import { TSingUp } from "./form.config";

export function SignUpForm() {
  // const { values } = useFormikContext<TSingUp>();
  // Get the current date
  const today = new Date();

  // Calculate the maximum allowable date for 13 years old
  const maxDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );

  // const handleGoogleSignIn = async () => {
  //   await signIn("google", {
  //     callbackUrl: "/",
  //   });
  // };
  return (
    <Form>
      <div className="flex flex-col justify-between gap-4 rounded-lg bg-white px-4 py-4 md:gap-12 md:p-8">
        <div className="flex-1">
          <div className="mb-4 flex flex-col gap-2 md:flex-row ">
            <FormikTextField
              name="name"
              props={{
                label: "Full Name",
                placeholder: "Enter your Full Name",
                requiredIcon: "*",
              }}
            />
          </div>
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
            Sign Up{" "}
          </FormikSubmitButton>

          <p>
            Already member?{" "}
            <Link
              href="/auth/login"
              className="cursor-pointer font-bold text-link"
            >
              Login
            </Link>{" "}
            here.
          </p>
        </div>
      </div>
    </Form>
  );
}
