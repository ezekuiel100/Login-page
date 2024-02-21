import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }

        if (
          credentials.email === "test@gmail.com" &&
          credentials.password === "123"
        ) {
          return { id: 1, name: "test", email: "test@gmail.com" };
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
