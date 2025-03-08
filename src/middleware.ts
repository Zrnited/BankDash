//protect routes
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const protectedRoute = "/dashboard";

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get("user")?.value;

  // const { pathname } = request.nextUrl

  if(!authCookie && protectedRoute){
    return NextResponse.redirect(new URL ('/', request.url));
  }

  return NextResponse.next();

}

// where you want the middleware to run
export const config = {
  matcher: ["/dashboard/:path*"]
}
