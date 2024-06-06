import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";


const authOptions:NextAuthOptions = {
    session : {
        strategy : "jwt"
    },
    providers : [
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID!,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET! 
        })
    ],
    callbacks : {
        async session({ session, token, user }) {
          // Send properties to the client, like an access_token and user id from a provider.
          session.user.accessToken = token.accessToken as string;
          
          return session
        },
        async jwt({ token, account }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.accessToken = account.access_token as string;
            }
            return token;
        }
        
    }

}

const handler = NextAuth(authOptions);

export {handler as GET , handler as POST}