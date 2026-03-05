import { NextRequest, NextResponse } from "next/server";

/**
 * Content Security Policy (CSP) proxy for XSS protection.
 * Generates a unique nonce per request and sets strict CSP headers.
 * See: https://nextjs.org/docs/app/guides/content-security-policy
 */
export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const isDev = process.env.NODE_ENV === "development";

  const cspHeader = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://tally.so https://www.youtube.com${isDev ? " 'unsafe-eval'" : ""}`,
    `style-src 'self' 'nonce-${nonce}' https://fonts.googleapis.com${isDev ? " 'unsafe-inline'" : ""}`,
    "img-src 'self' blob: data: https://franklinforsupervisor.com https://secure.franklinforsupervisor.com https://i.ytimg.com https://voiceofsandiego.org https://i.postimg.cc",
    "font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com",
    "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://tally.so",
    "connect-src 'self' https://tally.so",
    "form-action 'self' https://tally.so",
    "object-src 'none'",
    "base-uri 'self'",
    "frame-ancestors 'none'",
    ...(isDev ? [] : ["upgrade-insecure-requests"]),
  ].join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", cspHeader);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set("Content-Security-Policy", cspHeader);

  // Complementary security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

  if (!isDev) {
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=63072000; includeSubDomains; preload"
    );
  }

  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
