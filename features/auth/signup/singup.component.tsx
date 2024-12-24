"use client";

import { Api, usePost } from "@/features/api";
import { Formik } from "formik";
import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";
import { toast } from "sonner";
import {
  InitialValue,
  SignupRequest,
  SignupResponse,
  SignUpSchema,
} from "./form.config";
import { SignUpForm } from "./signup-form.component";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Message } from "primereact/message";

export function SignUp() {
  const { status } = useSession();
  const { push } = useRouter();
  const [error, setError] = useState("");

  //SING UP START
  const {
    data,
    trigger,
    error: signupError,
  } = usePost<SignupRequest, SignupResponse>(Api.SignUp, undefined);

  useEffect(() => {
    if (data?.isSuccess) {
      toast.success(data?.message);
      push("/auth/signin");
    }
  }, [data]);

  useEffect(() => {
    if (signupError) {
      toast.error(signupError?.message);
      setError(signupError?.message!);
    }
  }, [signupError]);
  const onSubmit = async (values: any) => {
    const { ...restValues } = values;
    trigger(restValues);
  };

  return (
    <div className="flex w-full mt-5">
      <p className="flex align-items-center justify-content-center font-bold m-2 px-5 py-3 border-round lg:w-[700px]">
        <img
          src="https://camelcamelcamel.com/cdn-cgi/imagedelivery/xo6xxztHGfobo4prc8GRDw/5a070f4d-565d-4ecd-b9e7-7f288c923900/public"
          width={555}
          height={270}
          alt=""
        />
      </p>
      <div className="font-bold m-2 px-5 py-3 rounded-xl border border-gray-200 lg:w-[540px]">
        <div className="py-[33px] flex align-items-center justify-center">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/assets/icons/logo.svg"
              width={27}
              height={27}
              alt="logo"
            />

            <p className="nav-logo">
              Price<span className="text-primary">Spy</span>BD
            </p>
          </Link>
        </div>
        <div className="mx-auto">
          <h2 className="text-center pb-2 pl-4 text-3xl font-bold md:pb-6 md:pl-0">
            Sign Up
          </h2>
          {error && (
            <Message severity="error" content={error} className="mb-3 w-full" />
          )}

          <Formik
            initialValues={InitialValue}
            validationSchema={SignUpSchema}
            onSubmit={onSubmit}
          >
            <SignUpForm />
          </Formik>
        </div>
      </div>
    </div>
  );
}
