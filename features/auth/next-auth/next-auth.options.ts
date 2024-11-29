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
          console.log("🚀 ~ authorize ~ data:", data);
          if (res.status === 200) {
            return {
              ...data,
            };
          }
        } catch (error) {
          console.log("🚀 ~ authorize ~ error:", error);
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

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = token.user as SignInResponse;
      return session;
    }
  },
};
