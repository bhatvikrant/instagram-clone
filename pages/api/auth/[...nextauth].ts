import NextAuth, { Awaitable, Session, User } from "next-auth";
// import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

type ExtendedUserType = User & { username?: string; uid?: string };

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin", // for custom sign in page
  },
  callbacks: {
    async session({ session, token, user }): Awaitable<Session> {
      (session.user as ExtendedUserType).username = session.user?.name
        ?.split(" ")
        .join("")
        .toLocaleLowerCase();

      (session.user as ExtendedUserType).uid = token.sub;

      return session;
    },
  },
});
