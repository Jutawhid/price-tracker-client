import { NextAuthConfig } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

const authConfig = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? ''
    }),
    CredentialProvider({
      credentials: {
        email: {
          type: 'email'
        },
        password: {
          type: 'password'
        }
      },
      // this function is called at server side only
      async authorize(credentials) {
        const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/v1/admins/login`;

        const res = await fetch(API_URL, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json; charset=utf-8' }
        });
        const user = await res.json();
        console.log("🚀 ~ authorize ~ user:", user)
        if (res.ok && user) {
          return user;
        }

        return null;
      }
    })
  ],
  // Custom auth pages
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
  },

  // Enable JWT session
  session: {
    strategy: "jwt",
  },
} satisfies NextAuthConfig;

export default authConfig;
