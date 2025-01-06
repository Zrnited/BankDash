//protect routes
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const user = request.cookies.get("user")?.value;
  // console.log(user);

  const protectedPaths = [
    "/dashboard/transactions",
    "/dashboard/accounts",
    "/dashboard/investments",
    "/dashboard/creditcards",
    "/dashboard/accounts",
    "/dashboard/loans",
    "/dashboard/services",
    "/dashboard/setting",
  ];

  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.next();
  }

  if (!user && pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!user && protectedPaths.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (user && pathname === "/redirectDashboard") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

// where you want the middleware to run
// export const config = {
//   matcher: "/dashboard/:path*"
// }
