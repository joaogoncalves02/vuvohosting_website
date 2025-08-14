import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/_next/") || pathname === "/favicon.ico" || pathname === "/logo.svg") {
    return NextResponse.next();
  }

  const auth = request.headers.get("authorization") || "";
  const [type, credentials] = auth.split(" ");

  if (type === "Basic" && credentials) {
    const [user, pass] = atob(credentials).split(":");
    if (user === process.env.BASIC_AUTH_USER && pass === process.env.BASIC_AUTH_PASS) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Unauthorized", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="NABO"' },
  });
}
