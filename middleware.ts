import { NextRequest, NextResponse } from 'next/server';
export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  if (url.hostname === 'www.aaadevelopment.co.uk') {
    const canonical = new URL(url.pathname + url.search, 'https://aaadevelopment.co.uk');
    return NextResponse.redirect(canonical, 308);
  }
  return NextResponse.next();
}
export const config = {matcher: '/:path*'};
