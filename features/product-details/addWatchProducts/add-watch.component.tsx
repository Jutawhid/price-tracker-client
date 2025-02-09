"use client";

import { Formik } from "formik";
import { AddWatchSchema, InitialValue } from "./form.config";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AddWatchForm from "./add-watch-form-new.component";

export function AddWatchedProduct() {
  const onSubmit = () => {};
  const { status } = useSession();
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
