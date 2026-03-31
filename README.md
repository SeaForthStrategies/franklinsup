# Franklin for Supervisor 2026

Official campaign website for John Franklin, candidate for San Diego County Supervisor, District 5.

## Campaign Info

- **Candidate**: John Franklin
- **Position**: San Diego County Supervisor, District 5
- **Election**: 2026
- **FPPC ID**: 1462594
- **Website**: [franklinforsupervisor.com](https://franklinforsupervisor.com/)
- **Volunteer**: [Volunteer Portal](https://secure.franklinforsupervisor.com/volunteer-web)

## Project Structure

- `app/` — Next.js App Router routes/pages
- `components/`
  - `components/layout/` — global layout (Header/Footer)
  - `components/sections/` — page sections (homepage hero, donate band, etc.)
  - `components/ui/` — shared UI primitives
- `public/` — static assets
- `docs/` — project docs

## Development

### Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Package Manager**: PNPM

### Getting started (non-dev friendly)

```bash
cd "/Volumes/Franklin26/Website/Web.comp.next/franklinsup"

# Install dependencies (first time, or after pulling changes)
pnpm install

# Dev server (port 3010)
pnpm dev

# Alternate dev server (port 3000)
pnpm dev:local

# Checks (optional but helpful)
pnpm lint
pnpm type-check

# Production build (advanced)
pnpm build
pnpm start
```

Local URLs:
- `pnpm dev` → `http://127.0.0.1:3010`
- `pnpm dev:local` → `http://127.0.0.1:3000`

## Making small edits in Cursor (non-dev guide)

The safest workflow:
- Run the site locally (`pnpm dev`) and keep it running.
- In Cursor, press `Cmd+Shift+F` and search for the exact text/URL you want to change.
- Click a match, make a small edit, save (`Cmd+S`), refresh the browser.

“Don’t break it” rules:
- Only change words/URLs inside quotes when possible.
- Avoid deleting symbols like `{ } [ ] ( ) < >` unless you’re sure.
- If it looks broken, undo (`Cmd+Z`) and try again with a smaller change.
- If the local site won’t load, stop the server (`Ctrl+C`) and re-run `pnpm dev`.

## Boss Guide: the most common website edits (this exact repo)

These prompts are designed to be copy/paste friendly. When in doubt, use `Cmd+Shift+F` with the search string shown.

### 1) Change the Volunteer link to a Tally form

Goal: replace `https://secure.franklinforsupervisor.com/volunteer-web` with `https://tally.so/r/XXXX`.

Where it lives:
- `components/layout/Header.tsx` (desktop + mobile drawer “Volunteer” button)
- `app/(main)/page.tsx` (homepage passes `volunteerUrl` into sections)

Prompt:
- “Change every Volunteer link from `https://secure.franklinforsupervisor.com/volunteer-web` to `https://tally.so/r/XXXX`.”

### 2) Change the Donate link

Goal: replace `https://secure.franklinforsupervisor.com/15` with `NEW_URL`.

Where it lives:
- `components/layout/Header.tsx` (desktop + mobile drawer “Donate” button)
- `app/(main)/page.tsx` (homepage `donateUrl`)

Prompt:
- “Change the Donate link from `https://secure.franklinforsupervisor.com/15` to `NEW_URL` everywhere.”

### 3) Change the big homepage headline (hero)

Where it lives:
- `components/sections/HomeCoverHero.client.tsx`

Prompt:
- “Change the homepage hero headline ‘A Safer, More Affordable North County.’ to ‘NEW HEADLINE’ (mobile + desktop).”

### 4) Change the homepage hero description sentence

Where it lives:
- `components/sections/HomeCoverHero.client.tsx`

Prompt:
- “Change the hero description sentence to: ‘NEW SENTENCE’ (keep styling the same).”

### 5) Change the 3 homepage story cards (titles/bodies/images)

Where it lives:
- `app/(main)/page.tsx` (search `HomeStoryStack`)

Prompt:
- “Update the 3 homepage story cards (titles, body text, and image URLs). Keep layout the same.”

### 6) Change footer social links (Facebook / X / Instagram / TikTok / LinkedIn / YouTube)

Where it lives:
- `components/layout/Footer.tsx`

Prompt:
- “Update the footer social URLs to these new links: … (only change URLs).”

### 7) Change footer legal/disclaimer line

Where it lives:
- `components/layout/Footer.tsx`

Prompt:
- “Change the footer ‘Paid for by John Franklin for Supervisor 2026 • FPPC ID 1462594’ line to: ‘NEW TEXT’.”

## Fast search strings (use in Cmd+Shift+F)

- Volunteer link: `secure.franklinforsupervisor.com/volunteer-web`
- Donate link: `secure.franklinforsupervisor.com/15`
- Hero headline: `A Safer, More Affordable`
- Footer legal: `Paid for by John Franklin for Supervisor 2026`

## WordPress endorsements & revalidation

The `/endorsements` page pulls data from the WordPress site (franklinforsupervisor.com). The page is cached (ISR, 60s), so new or updated endorsements in WordPress may not appear until the cache refreshes.

To refresh the endorsements page **on demand** when you publish or edit an endorsement in WordPress:

1. **Vercel**: In the project’s **Settings → Environment Variables**, add:
   - Name: `REVALIDATION_SECRET`  
   - Value: a long random string (e.g. from a password generator).  
   Redeploy after adding it.

2. **WordPress**: When an endorsement is saved, call the revalidate API:
   - **GET or POST**: `https://<your-vercel-domain>/api/revalidate?secret=<REVALIDATION_SECRET>`
   - You can use a webhook plugin (e.g. “WP Webhooks”) on the endorsement post type, or custom `save_post` code that does a server-side request to that URL.

After a successful call, the next request to `/endorsements` will use fresh data from WordPress.

## Documentation

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) - Architecture & Principles
- [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) - Design Tokens & Styles
- [`docs/PATTERNS.md`](docs/PATTERNS.md) - Component Patterns
