import "next-auth";
import { DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
    interface User {
        username: string;
        email: string;
        accessToken: string;
        refreshToken: string;
        accessTokenExpires: number;
    }

    interface Session {
        accessToken: string;
        error: string;
    }
}

declare module "next-auth/jwt" {

    interface JWT {
        accessToken: string;
        refreshToken: string;
        accessTokenExpires: number;
        refreshTokenExpires: number;
        error: string;
    }
}