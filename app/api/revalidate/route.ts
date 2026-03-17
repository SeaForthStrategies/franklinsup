import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

/**
 * On-demand revalidation for the endorsements page.
 *
 * When you add or edit endorsements in WordPress, call this endpoint so the
 * Vercel site refreshes the /endorsements page instead of waiting for the
 * 60-second ISR window.
 *
 * Setup:
 * 1. In Vercel: Project → Settings → Environment Variables
 *    Add REVALIDATION_SECRET (e.g. a long random string).
 * 2. From WordPress: when an endorsement is saved, send a POST or GET request:
 *    - POST https://your-vercel-site.vercel.app/api/revalidate?secret=YOUR_SECRET
 *    - Or use a plugin like "WP Webhooks" or custom code on save_post.
 */
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const expected = process.env.REVALIDATION_SECRET;

  if (!expected || secret !== expected) {
    return NextResponse.json({ revalidated: false, error: "Invalid secret" }, { status: 401 });
  }

  revalidatePath("/endorsements");
  return NextResponse.json({ revalidated: true, path: "/endorsements", now: Date.now() });
}

export async function POST(request: NextRequest) {
  const url = new URL(request.url);
  const secret = url.searchParams.get("secret") ?? request.headers.get("x-revalidate-secret");
  const expected = process.env.REVALIDATION_SECRET;

  if (!expected || secret !== expected) {
    return NextResponse.json({ revalidated: false, error: "Invalid secret" }, { status: 401 });
  }

  revalidatePath("/endorsements");
  return NextResponse.json({ revalidated: true, path: "/endorsements", now: Date.now() });
}
