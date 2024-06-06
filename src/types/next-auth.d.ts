import 'next-auth'
import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
     interface User {
        accessToken ?: string
     }
     interface Session {
        user: {
            accessToken ?: string
        } & DefaultSession['user']
     }
}