import { NextAuthConfig } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import { cookies } from 'next/headers';
// import Cookies from 'js-cookie';

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
        const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/login`;

        const res = await fetch(API_URL, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json; charset=utf-8' }
        });
        const user = await res.json();
        if (res.ok && user) {
          return {
            id: user.id.toString(),
            access_token: user.access_token,
            refresh_token: user.access_token,
            role: user.role
          };
        }

        return null;
      }
    })
  ],
  // Custom auth pages
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/logout'
  },

  // Enable JWT session
  session: {
    strategy: 'jwt'
  },
  // callbacks
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          ...user
        };
      }
      return token;
    },

    async session({ session, token }: { session: any, token: any }) {
      session.user = {
        id: token.id,
        email: token.email,
        role: token.role,
      };
      session.token = token.access_token;
      session.refresh_token = token.refresh_token;
      return session;
    }
  }
} satisfies NextAuthConfig;

export default authConfig;
