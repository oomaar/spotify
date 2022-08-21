import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // Token will only exist if the user is logged in
  const token = getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;

  // Allow the requests if the following is true...
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  // Redirect user to login if there is no token AND if a protected Route is requested
  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login");
  }
}
