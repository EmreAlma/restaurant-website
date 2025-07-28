// frontend/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED = ["/checkout", "/orders", "/profile"];
const ADMIN_ONLY = ["/admin"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const auth = req.cookies.get("auth")?.value;
  const role = req.cookies.get("role")?.value;

  const isProtected = PROTECTED.some((p) => pathname.startsWith(p));
  const isAdmin = ADMIN_ONLY.some((p) => pathname.startsWith(p));

  // Login gerekli ama yoksa login modalı açtırmak için ?login=1 ekle
  if (isProtected && !auth) {
    const redirectUrl = new URL("/", req.url);
    redirectUrl.searchParams.set("login", "1");
    return NextResponse.redirect(redirectUrl);
  }

  // Admin paneli
  if (isAdmin && (!auth || role !== "OWNER")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout/:path*", "/orders/:path*", "/profile/:path*", "/admin/:path*"],
};
