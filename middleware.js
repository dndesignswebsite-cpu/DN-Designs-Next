import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();

  // force https
  if (url.protocol === "http:") {
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  // remove www
  if (url.hostname.startsWith("www.")) {
    url.hostname = url.hostname.replace("www.", "");
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
