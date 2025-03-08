import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(
    req: NextRequest,
) {
    const token = await getToken({
        req
    })

    if (req.nextUrl.pathname === "/admin" ) {
        if (!token || token.role !== "admin") {
            return NextResponse.redirect("/login")
        }
    }

    if (req.nextUrl.pathname === "/user") {
        if (!token || token.role !== "user") {
            return NextResponse.redirect("/login")
        }
    }

    return NextResponse.next();
}

export const config = {
    mathcer: ["/admin/*", "/user/*"],
}