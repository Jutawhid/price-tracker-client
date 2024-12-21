"use client";

import { Formik } from "formik";
import { AddWatchForm } from "./add-watch-form.component";
import { AddWatchSchema, InitialValue } from "./form.config";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "primereact/button";

export function AddWatchedProduct() {
  const onSubmit = () => {};
  const { status } = useSession();
  console.log("🚀 ~ AddWatchedProduct ~ status:", status)
  return (
    <>
      {status === "authenticated" ? (
        <Formik
          initialValues={InitialValue}
          validationSchema={AddWatchSchema}
          onSubmit={onSubmit}
        >
          <AddWatchForm />
        </Formik>
      ) : (
        <div className="flex">
          <Link
            href="/auth/signin"
          >
            <Button
              className="h-[50px] w-full rounded-[6px] bg-primary text-base"
            >
              Add Daraz Price Watch
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}
