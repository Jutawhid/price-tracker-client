import { Api } from "@/features/api";
import { AuthApiClient } from "@/features/api/client";
import { AxiosResponse } from "axios";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { SignInResponse } from "../signin/form.config";
import { toast } from "sonner";

export const AuthOptions: NextAuthOptions = {
  // Auth providers
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        // required for normal login
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "text" },
      },

      // This function is called at server side only
      async authorize(credentials) {
        let res: AxiosResponse;
        try {
          const API_URL = `${process.env.NEXT_PUBLIC_API_URL}${Api.SignIn}`;
          const res = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });
          const data = await res.json();

            return {
              ...data,
            };
        } catch (error) {
          toast.error(error as string);
        }
        return null;
      },
    }),
  ],

  // Custom auth pages
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/logout",
  },

  // Enable JWT session
  session: {
    strategy: "jwt",
  },

  // Provide user data in the session
  callbacks: {
    async jwt({ token, user, account }) {
      // initial sign in
      // add user data in the token
      if (user && account?.provider !== "google") {
        return {
          ...token,
          ...user,
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.access_token = token.access_token;
        session.error = token.error;
      }

      return session;
    },
  },
};
