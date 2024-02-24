import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/database/prisma";

const handler = NextAuth({
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        let data = await prisma.user.findFirst({
          where: {
            email: credentials.email,
            password: credentials.password,
          },
        });

        if (!credentials) {
          return null;
        }

        if (
          credentials.email === data?.email &&
          credentials.password === data?.password
        ) {
          return { id: data.id, name: data.name, email: data.email };
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
