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
        try {
          const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/users/login`;
          const res = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });
          const data = await res.json();
          if (!res.ok) {
            throw new Error(data.message || "Authentication failed");
          }
          return {
            id: data.id.toString(),
            access_token: data.access_token,
            refresh_token: data.access_token,
          };
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
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
