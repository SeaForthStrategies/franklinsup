# Franklin for Supervisor 2026 - Website Redesign

Total redesign of [franklinforsupervisor.com](https://franklinforsupervisor.com/) for John Franklin's San Diego County Supervisor campaign.

## Project Structure

```
Franklin4sup.web/
├── app/                          # Next.js App Router routes (pages)
│   ├── layout.tsx
│   ├── page.tsx                  # Home
│   ├── issues/page.tsx
│   └── news/page.tsx
├── components/
│   ├── layout/                   # Header, Footer
│   ├── sections/                 # Page sections (hero, priorities, news, etc.)
│   └── ui/                       # Shared UI primitives
├── docs/                         # Documentation
├── src/                          # Reserved for future (currently placeholders)
├── legacy/                       # Reserved (legacy reference removed)
└── config files                  # next/tailwind/ts/eslint/postcss configs
```

## Key Features to Implement

Based on the current site, the redesign should include:

### Pages
- **Home** - Hero, endorsements overview, quick donate
- **About** - Bio, experience, District 5 info
- **Issues** - Detailed policy positions
  - Affordability & Tax Policy
  - Homelessness Solutions
  - Public Safety
  - Fire Prevention
  - Infrastructure & Roads
- **Endorsements** - Full endorsement list
- **News/On the Record** - Op-eds and media coverage
- **Volunteer** - Sign-up form and opportunities
- **Contact** - Contact form and information

### Components to Build
- Navigation (sticky header)
- Hero section with clear CTA
- Priorities grid (5 main issues)
- Video gallery (John on the Issues)
- News/commentary feed
- Volunteer form
- Donation integration
- Footer with social links
- Newsletter signup
- Social media integration

### Design System
- **Colors**
  - Navy: `#0a1f44`
  - Ink: `#071734`
  - Accent Blue: `#1b5cff`
  - Light Blue: `#19b7ff`
  - Muted Text: `#3b4351`
- **Typography** - Bold, uppercase headers with modern sans-serif
- **Style** - Clean, professional, patriotic, mobile-first

## Tech Stack (Configured ✅)

- **Next.js 16.1.4** - SEO, static generation, modern React
- **React 19.2.3** - UI framework
- **TypeScript 5.9.3** - Type safety
- **Tailwind CSS 3.4.17** - Utility-first styling
- **ESLint** - Code quality
- **PNPM** - Package manager

## Getting Started

### ✅ Framework Setup Complete
This project uses **Next.js 14+** with:
- TypeScript for type safety
- Tailwind CSS for styling
- App Router for modern routing
- PNPM for package management

### Running the Development Server

```bash
# Install dependencies (if needed)
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Available Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Run production build
pnpm lint         # Run ESLint
pnpm type-check   # Check TypeScript types
```

### Next Steps

1. ✅ ~~Choose framework and initialize~~ (Done - Next.js 16)
2. ✅ ~~Set up development environment~~ (Done - TypeScript, Tailwind, ESLint)
3. ✅ ~~Create initial homepage~~ (Done - Hero, priorities, footer)
4. **Create component library** from design system
5. **Build pages** based on current site structure (About, Issues, Endorsements, etc.)
6. **Extract content** from legacy files into JSON
7. **Integrate donation platform** and volunteer forms
8. **Set up analytics** and tracking
9. **Deploy** to hosting platform (Vercel recommended)

📖 **Documentation:**
- [`docs/SETUP_COMPLETE.md`](docs/SETUP_COMPLETE.md) - Setup guide
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) - Architectural decisions & principles
- [`docs/PATTERNS.md`](docs/PATTERNS.md) - Common code patterns & examples

## Campaign Info
- **Candidate**: John Franklin
- **Position**: San Diego County Supervisor, District 5
- **Election**: 2026
- **FPPC ID**: 1462594

## Links
- Current Site: https://franklinforsupervisor.com/
- Volunteer: https://secure.franklinforsupervisor.com/volunteer-web
- Social Media:
  - Facebook
  - X (Twitter)
  - Instagram
  - TikTok
  - LinkedIn
