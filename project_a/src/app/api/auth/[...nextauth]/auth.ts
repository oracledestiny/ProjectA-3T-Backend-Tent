import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? "" ,
      clientSecret: process.env.GITHUB_SECRET_ID ?? "" ,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "" ,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "" ,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET ?? "",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
