# Architecture & Design Decisions

## Core Principles

### 1. Server Components by Default
**Decision**: Use React Server Components (RSC) as the default pattern.

**Why:**
- **Performance**: Server components don't ship JavaScript to the client
- **SEO**: Content is rendered on the server, fully available to crawlers
- **Data Fetching**: Direct database/API access without exposing credentials
- **Bundle Size**: Smaller client-side bundles = faster load times

**When to use Client Components (`'use client'`):**
- Interactive elements (buttons with `onClick`, forms with state)
- Browser APIs (localStorage, window, document)
- React hooks (useState, useEffect, useContext)
- Third-party libraries that require client-side rendering

**Example Pattern:**
```tsx
// ✅ Server Component (default)
export default async function IssuesPage() {
  const issues = await getIssues(); // Direct data fetch
  return <IssuesList issues={issues} />;
}

// ✅ Client Component (when needed)
'use client';
export function DonateButton({ amount }: { amount: number }) {
  const [isLoading, setIsLoading] = useState(false);
  return <button onClick={handleDonate}>Donate ${amount}</button>;
}
```

### 2. TypeScript Everywhere
**Decision**: Strict TypeScript for all code.

**Why:**
- **Type Safety**: Catch errors at compile time, not runtime
- **Better DX**: IntelliSense, autocomplete, refactoring support
- **Documentation**: Types serve as inline documentation
- **Maintainability**: Easier for new developers to understand code

**Conventions:**
```tsx
// ✅ Explicit prop types
interface PriorityCardProps {
  title: string;
  description: string;
  icon: string;
  bullets: string[];
}

// ✅ Type content data
interface Priority {
  id: string;
  title: string;
  lead: string;
  points: string[];
  body: string[];
}

// ✅ Type API responses
interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  source: string;
  publishedAt: string;
}
```

### 3. SEO-First Rendering
**Decision**: Optimize for search engines and social sharing.

**Why:**
- **Discoverability**: Campaign needs to be found in Google searches
- **Social Sharing**: Articles/pages need proper Open Graph tags
- **Core Web Vitals**: Fast, accessible site improves rankings
- **Accessibility**: SEO and a11y go hand-in-hand

**Strategies:**

#### Static Generation (Primary)
```tsx
// ✅ Generate at build time (best for SEO)
export default async function AboutPage() {
  return <div>Static content about John Franklin</div>;
}
```

#### Dynamic Metadata
```tsx
// ✅ Per-page SEO metadata
export const metadata: Metadata = {
  title: 'Issues - John Franklin for Supervisor',
  description: 'John\'s positions on affordability, homelessness, public safety...',
  openGraph: {
    title: 'Issues - John Franklin for Supervisor',
    description: '...',
    images: ['/og-issues.jpg'],
  },
};
```

#### Structured Data
```tsx
// ✅ Add JSON-LD for rich results
export default function CandidatePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'John Franklin',
    jobTitle: 'Candidate for San Diego County Supervisor',
    affiliation: 'District 5',
  };
  
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      {/* page content */}
    </>
  );
}
```

## Project-Specific Architectural Decisions

### Content Management Strategy

**Decision**: JSON files in `src/content/` for structured content.

**Why:**
- Simple to edit without technical knowledge
- Version controlled (track changes over time)
- Type-safe with TypeScript interfaces
- No CMS overhead for launch
- Easy migration to headless CMS later if needed

**Structure:**
```
src/content/
├── priorities.json      # 5 main issues
├── endorsements.json    # Endorser list
├── news-articles.json   # Featured press
├── videos.json          # YouTube videos
├── events.json          # Campaign events
└── site-config.json     # Global settings
```

### Component Architecture

**Decision**: Atomic design with clear separation of concerns.

**Hierarchy:**
1. **Common** - Primitive UI elements (Button, Card, Badge)
2. **Sections** - Composite sections (Hero, PrioritiesGrid)
3. **Forms** - Form components with validation
4. **Layout** - Structural components (Header, Footer)

**Pattern:**
```tsx
// ✅ Small, focused server components
export function PriorityCard({ priority }: { priority: Priority }) {
  return (
    <article className="...">
      <h3>{priority.title}</h3>
      <p>{priority.lead}</p>
      {/* Static content, no interactivity needed */}
    </article>
  );
}

// ✅ Client component only when needed
'use client';
export function VideoPlayer({ videoId }: { videoId: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  // Client-side state for video playback
}
```

### Routing Strategy

**Decision**: Next.js App Router with file-based routing.

**Routes:**
```
app/
├── page.tsx                    # / (homepage)
├── about/
│   └── page.tsx               # /about
├── issues/
│   ├── page.tsx               # /issues (overview)
│   └── [slug]/
│       └── page.tsx           # /issues/affordability (dynamic)
├── endorsements/
│   └── page.tsx               # /endorsements
├── news/
│   ├── page.tsx               # /news
│   └── [slug]/
│       └── page.tsx           # /news/article-slug (dynamic)
├── volunteer/
│   └── page.tsx               # /volunteer
└── contact/
    └── page.tsx               # /contact
```

### Data Fetching Strategy

**Decision**: Server-side data fetching with caching.

**Patterns:**

```tsx
// ✅ Static data from JSON
import priorities from '@/content/priorities.json';

export default function IssuesPage() {
  return <PrioritiesList priorities={priorities} />;
}

// ✅ Revalidate external data
export const revalidate = 3600; // 1 hour

export default async function NewsPage() {
  const articles = await fetch('https://api.news.com/articles', {
    next: { revalidate: 3600 }
  });
  return <NewsList articles={articles} />;
}

// ✅ Dynamic routes with generateStaticParams
export async function generateStaticParams() {
  const issues = await getIssues();
  return issues.map((issue) => ({ slug: issue.slug }));
}
```

### Styling Strategy

**Decision**: Tailwind CSS with custom design tokens.

**Why:**
- **Rapid Development**: Utility classes speed up prototyping
- **Consistency**: Design system enforced through configuration
- **Performance**: PurgeCSS removes unused styles
- **Customization**: Campaign colors in tailwind.config

**Pattern:**
```tsx
// ✅ Tailwind utilities for layout
<div className="container mx-auto px-6 md:px-8 max-w-7xl">

// ✅ Custom gradient utilities for brand
<h1 className="gradient-navy">John Franklin</h1>

// ✅ Responsive design
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
```

### Performance Optimizations

**Decisions:**

1. **Image Optimization**: Use Next.js `<Image>` component
   ```tsx
   import Image from 'next/image';
   <Image src="/hero.jpg" alt="..." width={1200} height={630} priority />
   ```

2. **Font Optimization**: System fonts (already configured)
   ```css
   font-family: system-ui, -apple-system, 'Segoe UI', Arial, sans-serif;
   ```

3. **Code Splitting**: Automatic with Next.js App Router

4. **Lazy Loading**: Dynamic imports for heavy components
   ```tsx
   const VideoGallery = dynamic(() => import('@/components/VideoGallery'), {
     loading: () => <LoadingSpinner />
   });
   ```

### Form Handling Strategy

**Decision**: Progressive enhancement with Server Actions.

**Why:**
- Works without JavaScript (accessibility)
- Type-safe form submissions
- No API routes needed
- Built-in validation and error handling

**Pattern:**
```tsx
// ✅ Server Action for form submission
'use server';
export async function submitVolunteerForm(formData: FormData) {
  const email = formData.get('email') as string;
  // Validate, process, send to API
  return { success: true };
}

// ✅ Client component for form
'use client';
export function VolunteerForm() {
  const [state, formAction] = useFormState(submitVolunteerForm, null);
  return <form action={formAction}>...</form>;
}
```

### Analytics & Tracking

**Decision**: Privacy-first analytics with opt-in tracking.

**Approach:**
- Google Analytics 4 (pageviews, conversions)
- Plausible Analytics (privacy-friendly alternative)
- Conversion tracking (donate, volunteer sign-ups)
- No third-party cookies without consent

### Deployment Strategy

**Decision**: Vercel for hosting.

**Why:**
- **Zero Config**: Automatic builds from Git
- **Edge Network**: Global CDN for fast delivery
- **Preview Deployments**: Test before production
- **Analytics**: Built-in Web Vitals monitoring
- **Free Tier**: Sufficient for campaign site

**Workflow:**
```bash
# Automatic on git push
git push origin main  # → Deploys to production

# Preview deployments
git push origin feature-branch  # → Creates preview URL
```

## Security Considerations

1. **Environment Variables**: Never commit secrets
   ```
   .env.local  (gitignored)
   SENDGRID_API_KEY=...
   ```

2. **Form Validation**: Server-side validation always
3. **HTTPS Only**: Enforced by Vercel
4. **CSP Headers**: Content Security Policy in next.config.ts
5. **Rate Limiting**: Protect form submissions from spam

## Accessibility Standards

**Target**: WCAG 2.1 AA compliance

**Requirements:**
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<article>`)
- ARIA labels where needed
- Keyboard navigation support
- Color contrast ratios (checked in design)
- Alt text on all images
- Focus indicators
- Skip to content link

## Mobile-First Approach

**Breakpoints:**
```css
/* Mobile: default (0-640px) */
/* Tablet: md:  (641px-1024px) */
/* Desktop: lg: (1025px+) */
```

**Strategy:**
- Design for mobile first
- Progressive enhancement for larger screens
- Touch-friendly targets (min 44x44px)
- Optimized images for mobile networks

---

## Summary

This architecture prioritizes:
1. ✅ **Performance** - Fast loads, small bundles
2. ✅ **SEO** - Discoverable, shareable, crawlable
3. ✅ **Accessibility** - Usable by everyone
4. ✅ **Developer Experience** - Type-safe, well-organized
5. ✅ **Maintainability** - Clear patterns, documented decisions

All code should follow these principles unless there's a compelling reason to deviate.
