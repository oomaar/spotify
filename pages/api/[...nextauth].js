import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { LOGIN_URL, spotifyAPI } from "../../lib/spotify";

async function refreshAccessToken(token) {
  try {
    spotifyAPI.setAccessToken(token.accessToken);
    spotifyAPI.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await spotifyAPI.refreshAccessToken();
    console.log(
      "🚀 ~ file: [...nextauth].js ~ line 11 ~ refreshAccessToken ~ refreshToken",
      refreshedToken
    );

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now + refreshAccessToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.log(
      "🚀 ~ file: [...nextauth].js ~ line 9 ~ refreshAccessToken ~ error)",
      error
    );

    return {
      ...token,
      error: "Refresh Access Token Error",
    };
  }
}

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // innitial signin
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000,
        };
      }

      // Return previous token if the access token has not expired yet
      if (Date.now < token.accessTokenExpires) {
        return token;
      }

      // Access token expired, so we need to refresh it...
      console.log("ACCESS TOKEN HAS EXPIRED, REFRESHING...");
      return await refreshAccessToken(token);
    },

    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    },
  },
});
