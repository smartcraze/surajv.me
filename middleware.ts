

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  
    const url = request.nextUrl.clone();

    if (url.pathname === "/rapidserve-demo") {
        url.pathname = "/projects/rapidserve";
        return NextResponse.redirect(url);
    }
    return NextResponse.next();

}

export const config = {
  matcher: "/rapidserve-demo",
};