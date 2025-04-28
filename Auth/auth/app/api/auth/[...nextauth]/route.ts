// ... -> catch all

import { prisma } from "@/app/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
};

// By default, the session strategy is JWT, but when using an adapter, it changes to DB. At this time, we cannot use DB sessions with social logins or OAuth Providers
// Change the session strategy

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
