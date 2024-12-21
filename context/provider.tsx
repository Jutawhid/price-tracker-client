"use client";

import "@/app/globals.css";

import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

export function ContextProvider({ children, session }: PropsWithChildren<any>) {
  return (
    <SessionProvider session={session}>
      {children}
      <Toaster richColors closeButton position="top-center" />
    </SessionProvider>
  );
}
