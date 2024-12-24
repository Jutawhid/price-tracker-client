import { Api } from "@/features/api";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
        const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/users/login`;
        const res = await fetch(API_URL, {
          method: "POST",
          body: JSON.stringify(credentials),
        });
        const user = await res.json();
        console.log("🚀 ~ authorize ~ res:", res)

        console.log("🚀 ~ authorize ~ user:", user)
        if (res.ok && user) {
          return {
            id: user.id.toString(),
            access_token: user.access_token,
            refresh_token: user.access_token,
          };
        }
        throw new Error(user?.message || "Authorization failed");
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
        return {
          ...token,
          ...user,
        };
      }
      return token;
    },

    async session({ session, token }) {
      console.log("🚀 ~ session ~ token:", token)
      console.log("🚀 ~ session ~ session:", session)
      session.user = {
        id: token.id,
        message: token.message,
        token: token.access_token,
        role: token.role,
      };
      session.access_token = token.access_token;
      session.refresh_token = token.refresh_token;
      session.error = token.error;
      return session;
    },
  },
};
