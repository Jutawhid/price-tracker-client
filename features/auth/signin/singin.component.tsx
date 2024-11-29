"use client";

import { Api, usePost } from "@/features/api";
import { Formik } from "formik";
import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";
import { toast } from "sonner";
import { InitialValue, SignInRequest, SignInResponse, SignInSchema } from "./form.config";
import { SignInForm } from "./signin-form.component";
import Link from "next/link";
import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export function SignIn() {
  const { status } = useSession();
  const { push } = useRouter();
  const { get } = useSearchParams();
    // const callbackUrl = get("callbackUrl") !== null ? get("callbackUrl") : "/";

  // const onSubmit = async (values: any) => {
  //   const { ...restValues } = values;
  //   trigger(restValues);
  // };
  const onSubmit = async (values: SignInRequest) => {
    console.log("🚀 ~ onSubmit ~ values:", values)
    const res = await signIn("credentials", {
      redirect: false,
      ...values,
    });
   
    if (res?.ok) {
      console.log("🚀 ~ onSubmit ~ res:", res)
      // window.location.href = callbackUrl as string;
    } else {
      toast.error("Username or password incorrect");
    }
  };
  return (
    <div className="flex w-full mt-5">
      <p className="flex align-items-center justify-content-center font-bold m-2 px-5 py-3 border-round lg:w-[700px]">
        <img
          loading="eager"
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
            Sign In
          </h2>

          <Formik
            initialValues={InitialValue}
            validationSchema={SignInSchema}
            onSubmit={onSubmit}
          >
            <SignInForm />
          </Formik>
        </div>
      </div>
    </div>
  );
}
