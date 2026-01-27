# Common Patterns & Examples

Quick reference for implementing common features following our architectural decisions.

## Table of Contents
- [Server Components](#server-components)
- [Client Components](#client-components)
- [Page Metadata](#page-metadata)
- [Data Fetching](#data-fetching)
- [Dynamic Routes](#dynamic-routes)
- [Forms](#forms)
- [Images](#images)
- [Links](#links)

---

## Server Components

### Basic Page (Server Component by default)
```tsx
// app/about/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About John Franklin - Supervisor 2026',
  description: '14 years of public service, local business owner, Vista Mayor',
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-5xl font-black uppercase gradient-navy mb-8">
        About John Franklin
      </h1>
      <p className="text-lg text-muted">
        After 14 years of elected public service...
      </p>
    </main>
  );
}
```

### Server Component with Data Fetching
```tsx
// app/endorsements/page.tsx
export default function EndorsementsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Render static or fetched endorsements here */}
    </main>
  );
}
```

---

## Client Components

### Interactive Button
```tsx
// components/common/DonateButton.tsx
'use client';

import { useState } from 'react';

interface DonateButtonProps {
  amount: number;
  className?: string;
}

export function DonateButton({ amount, className }: DonateButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDonate = () => {
    setIsLoading(true);
    window.open(
      `https://secure.franklinforsupervisor.com/donate?amount=${amount}`,
      '_blank'
    );
  };

  return (
    <button
      onClick={handleDonate}
      disabled={isLoading}
      className={`px-6 py-3 rounded-full gradient-accent text-white font-black uppercase ${className}`}
    >
      {isLoading ? 'Processing...' : `Donate $${amount}`}
    </button>
  );
}
```

### Video Player with State
```tsx
// components/sections/VideoPlayer.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

interface VideoPlayerProps {
  videoId: string;
  title: string;
  thumbnail?: string;
}

export function VideoPlayer({ videoId, title, thumbnail }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media"
          allowFullScreen
          className="w-full h-full rounded-lg"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setIsPlaying(true)}
      className="relative aspect-video w-full group"
    >
      <Image
        src={thumbnail || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        fill
        className="object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
          <div className="w-0 h-0 border-l-[20px] border-l-navy border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
        </div>
      </div>
    </button>
  );
}
```

### Composition Pattern (Server + Client)
```tsx
// app/issues/page.tsx (Server Component)
export default function IssuesPage() {
  return (
    <main>
      {/* Compose server-rendered sections + client components as needed. */}
    </main>
  );
}
```

---

## Page Metadata

### Static Metadata
```tsx
// app/issues/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Policy Issues - John Franklin for Supervisor',
  description: 'John Franklin\'s positions on affordability, homelessness, public safety, fire prevention, and infrastructure.',
  keywords: ['san diego county', 'supervisor', 'policy', 'issues', 'district 5'],
  openGraph: {
    title: 'Policy Issues - John Franklin for Supervisor',
    description: 'Clear positions on the issues that matter to District 5',
    url: 'https://franklinforsupervisor.com/issues',
    siteName: 'Franklin for Supervisor',
    images: [
      {
        url: '/og/issues.jpg',
        width: 1200,
        height: 630,
        alt: 'John Franklin Policy Positions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Policy Issues - John Franklin',
    description: 'Clear positions on District 5 priorities',
    images: ['/og/issues.jpg'],
  },
};
```

### Dynamic Metadata
```tsx
// app/news/[slug]/page.tsx
import { Metadata } from 'next';
import articles from '@/content/news-articles.json';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: `${article.title} - John Franklin`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      publishedTime: article.publishedAt,
      authors: ['John Franklin'],
    },
  };
}
```

---

## Data Fetching

### Static Data from JSON
```tsx
// app/endorsements/page.tsx
import endorsements from '@/content/endorsements.json';

export default function EndorsementsPage() {
  return (
    <div>
      {endorsements.map((endorser) => (
        <div key={endorser.id}>{endorser.name}</div>
      ))}
    </div>
  );
}
```

### Typed Data
```tsx
// lib/types.ts
export interface Priority {
  id: string;
  title: string;
  icon: string;
  lead: string;
  points: string[];
  body: string[];
}

// lib/content.ts
import prioritiesData from '@/content/priorities.json';
import { Priority } from './types';

export function getPriorities(): Priority[] {
  return prioritiesData as Priority[];
}

// app/issues/page.tsx
import { getPriorities } from '@/lib/content';

export default function IssuesPage() {
  const priorities = getPriorities();
  // TypeScript knows the structure!
}
```

### External API with Caching
```tsx
// app/news/page.tsx
import { NewsArticle } from '@/lib/types';

// Revalidate every hour
export const revalidate = 3600;

async function getLatestNews(): Promise<NewsArticle[]> {
  const res = await fetch('https://api.example.com/news', {
    next: { revalidate: 3600 },
  });
  
  if (!res.ok) throw new Error('Failed to fetch news');
  return res.json();
}

export default async function NewsPage() {
  const news = await getLatestNews();
  
  return (
    <div>
      {news.map((article) => (
        <article key={article.id}>{article.title}</article>
      ))}
    </div>
  );
}
```

---

## Dynamic Routes

### Dynamic Issue Pages
```tsx
// app/issues/[slug]/page.tsx
import { notFound } from 'next/navigation';
import priorities from '@/content/priorities.json';

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static pages at build time
export async function generateStaticParams() {
  return priorities.map((priority) => ({
    slug: priority.id,
  }));
}

export default async function IssuePage({ params }: Props) {
  const { slug } = await params;
  const priority = priorities.find((p) => p.id === slug);

  if (!priority) {
    notFound(); // Shows 404 page
  }

  return (
    <article>
      <h1>{priority.title}</h1>
      <p>{priority.lead}</p>
      <ul>
        {priority.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </article>
  );
}
```

---

## Forms

### Volunteer Form with Server Action
```tsx
// app/volunteer/actions.ts
'use server';

import { z } from 'zod';

const volunteerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  zipCode: z.string().regex(/^\d{5}$/, 'Invalid ZIP code'),
});

export async function submitVolunteerForm(formData: FormData) {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    zipCode: formData.get('zipCode'),
  };

  const result = volunteerSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  // Send to CRM/Email service
  try {
    await fetch('https://api.campaign.com/volunteers', {
      method: 'POST',
      body: JSON.stringify(result.data),
    });

    return { success: true };
  } catch (error) {
    return { success: false, message: 'Submission failed' };
  }
}
```

```tsx
// app/volunteer/VolunteerForm.tsx
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { submitVolunteerForm } from './actions';

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-3 rounded-full gradient-accent text-white font-black uppercase"
    >
      {pending ? 'Submitting...' : 'Sign Up to Volunteer'}
    </button>
  );
}

export function VolunteerForm() {
  const [state, formAction] = useFormState(submitVolunteerForm, null);

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label htmlFor="name" className="block font-bold mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg border border-navy/20"
        />
        {state?.errors?.name && (
          <p className="text-red-600 text-sm mt-1">{state.errors.name[0]}</p>
        )}
      </div>

      {/* More fields... */}

      <SubmitButton />

      {state?.success && (
        <p className="text-green-600 font-bold">Thank you for signing up!</p>
      )}
    </form>
  );
}
```

---

## Images

### Next.js Image Component
```tsx
import Image from 'next/image';

// Local image
<Image
  src="/images/john-franklin.jpg"
  alt="John Franklin, Supervisor candidate"
  width={800}
  height={600}
  priority // Load immediately (for above-fold images)
  className="rounded-lg"
/>

// Remote image (domain must be in next.config.ts)
<Image
  src="https://i.ytimg.com/vi/abc123/hqdefault.jpg"
  alt="Video thumbnail"
  width={480}
  height={360}
  loading="lazy" // Default behavior
/>

// Fill container (responsive)
<div className="relative aspect-video w-full">
  <Image
    src="/images/hero.jpg"
    alt="Hero image"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
</div>
```

---

## Links

### Internal Navigation
```tsx
import Link from 'next/link';

// Basic link
<Link href="/issues" className="text-accent hover:underline">
  View Issues
</Link>

// With prefetching (default)
<Link href="/about" prefetch={true}>
  About John
</Link>

// Styled as button
<Link
  href="/volunteer"
  className="inline-block px-6 py-3 rounded-full gradient-accent text-white font-black uppercase"
>
  Volunteer Now
</Link>
```

### External Links
```tsx
// External link with proper attributes
<a
  href="https://secure.franklinforsupervisor.com/donate"
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
  Donate
</a>
```

---

## Best Practices Summary

✅ **DO:**
- Start with Server Components
- Add `'use client'` only when needed
- Use TypeScript interfaces for all props
- Optimize images with Next.js Image
- Add descriptive alt text
- Use semantic HTML
- Include proper metadata on every page

❌ **DON'T:**
- Use client components for static content
- Forget to validate form inputs
- Skip image optimization
- Hardcode content that should be in JSON
- Omit error boundaries
- Use `any` type in TypeScript
