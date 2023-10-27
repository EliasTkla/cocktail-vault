import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {},
                password: {}
            }, async authorize(credentials) {
                try {


                    const url = process.env.NEXT_PUBLIC_SERVER_URL + '/login';
                    const options = {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password
                        })
                    };

                    const response = await fetch(url, options);
                    const user = await response.json();

                    if (user.tokens) {
                        return user;
                    }

                    return null;
                } catch (error) {
                    console.log(error);
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: "/pages/login",
        signOut: "/pages/login"
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                return {
                    name: user.username,
                    email: user.email,
                    accessToken: user.tokens.accessToken,
                    refreshToken: user.tokens.refreshToken,
                    accessTokenExpires: Math.floor(Date.now() / 1000 + (user.tokens.accessTokenExpires - 120)),
                    refreshTokenExpires: Math.floor(Date.now() / 1000 + (user.tokens.refreshTokenExpires - 600))
                }
            }

            if (Date.now() > token.accessTokenExpires * 1000 || Date.now() > token.refreshTokenExpires * 1000) {
                try {
                    const url = process.env.NEXT_PUBLIC_SERVER_URL + '/user/refresh';
                    const options = {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'auth-token': `Bearer ${token.refreshToken}`
                        }
                    };

                    const response = await fetch(url, options);
                    const refreshedTokens = await response.json();

                    if (!refreshedTokens) {
                        throw refreshedTokens;
                    }

                    return {
                        ...token,
                        user: refreshedTokens.user,
                        accessToken: refreshedTokens.tokens.accessToken,
                        accessTokenExpires: Math.floor(Date.now() / 1000 + (refreshedTokens.tokens.accessTokenExpires - 120)),
                        refreshToken: refreshedTokens.tokens.refreshToken ?? token.refreshToken,
                        refreshTokenExpires: Math.floor(Date.now() / 1000 + (refreshedTokens.tokens.refreshTokenExpires - 600)) ?? token.refreshTokenExpires
                    }
                } catch (error) {
                    console.log("Refresh token is missing");

                    return { ...token, error: "Refresh token unauthorized" }
                }
            }

            return token;
        },
        async session({ session, token }) {
            return {
                ...session,
                user: { name: token.name, email: token.email },
                accessToken: token.accessToken,
                error: token.error,
            };
        },
    }
}