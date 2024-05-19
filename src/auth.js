import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const prisma = new PrismaClient();
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        const [hashedPass, salt] = user.password.split(":");

        const newHashed = crypto
          .createHash("sha256")
          .update(credentials.password + salt)
          .digest("hex");

        if (!user) {
          return null;
        }

        if (hashedPass !== newHashed) {
          return null;
        }

        return user;
      },
    }),

    GoogleProvider({
      clientId: process.env.GCLIENT_ID,
      clientSecret: process.env.GCLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});
