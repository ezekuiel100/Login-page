import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/database/prisma";
import bcrypt from "bcrypt";

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
        if (!credentials.email || !credentials.password) {
          return;
        }

        let data = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        const password = bcrypt.compareSync(
          credentials.password,
          data.password
        );

        if (credentials.email === data?.email && password) {
          return { id: data.id, name: data.name, email: data.email };
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
