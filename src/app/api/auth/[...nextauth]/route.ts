import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const clientId = process.env.GOOGLE_CLIENT_ID!;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET!;

const authOptions:NextAuthOptions = {
    session : {
        strategy : "jwt"
    },
    providers : [
        GoogleProvider({
            clientId : clientId,
            clientSecret : clientSecret 
        })
    ],

}

const handler = NextAuth(authOptions);

export {handler as GET , handler as POST}