"use client";

import "@/app/globals.css";

import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { store } from "./store";

export function ContextProvider({ children, session }: PropsWithChildren<any>) {
  return (
    <SessionProvider session={session}>
        <Provider store={store}>
          {children}
        </Provider>
        <Toaster
          richColors
          closeButton
          position="top-center"
        />
    </SessionProvider>
  );
}
