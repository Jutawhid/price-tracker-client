import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { ContextProvider } from "@/context/provider";
import { PrimeReactProvider } from 'primereact/api';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { SessionProvider } from "next-auth/react";



const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pricewise",
  description:
    "Track product prices effortlessly and save money on your online shopping.",
};

export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode;
  session: any
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const style = document.createElement('style')
              style.innerHTML = '@layer tailwind-base, primereact, tailwind-utilities;'
              style.setAttribute('type', 'text/css')
              document.querySelector('head').prepend(style)
            `,
          }}
        />
      </head>
      <body className={notoSans.className}>
        <main className="max-w-10xl mx-auto">
        <PrimeReactProvider>
          <ContextProvider>
            <Navbar />
            {children}
          </ContextProvider>
        </PrimeReactProvider>
        </main>
      </body>
    </html>
  );
}
