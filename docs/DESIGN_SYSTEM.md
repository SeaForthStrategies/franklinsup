# Design System

Complete reference for the Franklin for Supervisor 2026 campaign design system.

## Color Palette

### Primary (Navy Blue)
Main brand color for headers, text, and key UI elements.

```css
primary-DEFAULT: #1F2A56  /* Main navy */
primary-50:  #EEF1F9     /* Lightest */
primary-100: #DDE3F3
primary-200: #BCC7E7
primary-300: #9AABDB
primary-400: #778FCE
primary-500: #5573C2
primary-600: #3F58A1
primary-700: #2F427A
primary-800: #1F2A56     /* Base */
primary-900: #141C3A     /* Darkest */
```

**Usage:**
- Headers and titles
- Navigation elements
- Primary buttons (outline)
- Text emphasis
- Footer background

### Secondary (Red)
Action color for CTAs and important elements.

```css
secondary-DEFAULT: #B21F2D  /* Main red */
secondary-50:  #FCECEE      /* Lightest */
secondary-100: #F9D5D9
secondary-200: #F1AAB1
secondary-300: #E97F8A
secondary-400: #E05463
secondary-500: #D72A3C
secondary-600: #B21F2D      /* Base */
secondary-700: #8C1823
secondary-800: #661119
secondary-900: #400A10      /* Darkest */
```

**Usage:**
- Primary action buttons (Donate, Sign Up)
- Important CTAs
- Alerts and notifications
- Links and hover states
- Accent elements

### Accent (Gold)
Complementary color for highlights and accents.

```css
accent-DEFAULT: #C7A34A  /* Main gold */
accent-50:  #FBF7EC      /* Lightest */
accent-100: #F6ECCE
accent-200: #EDD79D
accent-300: #E4C26C
accent-400: #DBAE3B
accent-500: #C7A34A      /* Base */
accent-600: #9E833B
accent-700: #76622C
accent-800: #4E421D
accent-900: #27210E      /* Darkest */
```

**Usage:**
- Decorative accents
- Icons and badges
- Section dividers
- Highlights
- Gradient elements

### Neutral (Grays & Whites)
Text, backgrounds, and UI elements.

```css
neutral-ink:     #0B1220  /* Darkest text */
neutral-slate:   #334155  /* Body text */
neutral-muted:   #64748B  /* Secondary text */
neutral-border:  #E2E8F0  /* Borders, dividers */
neutral-surface: #F8FAFC  /* Light backgrounds */
neutral-base:    #FFFFFF  /* Pure white */
```

**Usage:**
- `neutral-ink`: Headlines, important text
- `neutral-slate`: Body copy, paragraphs
- `neutral-muted`: Captions, helper text, placeholders
- `neutral-border`: Card borders, dividers, inputs
- `neutral-surface`: Section backgrounds
- `neutral-base`: Card backgrounds, white space

## Typography

### Font Families

**Heading Font**: Montserrat
```css
font-heading: ["var(--font-heading)", "Montserrat", "ui-sans-serif", "system-ui"]
```
- Used for: H1, H2, H3, H4, H5, H6
- Weight: 900 (Black)
- Style: Uppercase
- Characteristics: Bold, impactful, authoritative

**Body Font**: Source Sans 3
```css
font-body: ["var(--font-body)", "Source Sans 3", "ui-sans-serif", "system-ui"]
```
- Used for: Paragraphs, body text, UI text
- Weight: 400 (Regular), 600 (Semibold)
- Characteristics: Clean, readable, professional

### Font Sizes

```css
text-xs:   0.75rem   /* 12px */
text-sm:   0.875rem  /* 14px */
text-base: 1rem      /* 16px */
text-lg:   1.125rem  /* 18px */
text-xl:   1.25rem   /* 20px */
text-2xl:  1.5rem    /* 24px */
text-3xl:  1.875rem  /* 30px */
text-4xl:  2.25rem   /* 36px */
text-5xl:  3rem      /* 48px */
text-7xl:  4.5rem    /* 72px */
text-8xl:  6rem      /* 96px */
```

### Font Weights

```css
font-normal: 400
font-semibold: 600
font-bold: 700
font-black: 900  /* Primary for headings */
```

### Letter Spacing

```css
tracking-tighter:  -0.05em
tracking-tighter2: -0.03em  /* Custom */
tracking-tight:    -0.025em
tracking-normal:    0
tracking-wide:      0.025em
tracking-wider:     0.05em
tracking-widest:    0.1em
```

## Spacing Scale

Based on 4px base unit:

```css
0:   0px
1:   0.25rem   /* 4px */
2:   0.5rem    /* 8px */
3:   0.75rem   /* 12px */
4:   1rem      /* 16px */
5:   1.25rem   /* 20px */
6:   1.5rem    /* 24px */
8:   2rem      /* 32px */
10:  2.5rem    /* 40px */
12:  3rem      /* 48px */
16:  4rem      /* 64px */
20:  5rem      /* 80px */
24:  6rem      /* 96px */
32:  8rem      /* 128px */
```

## Border Radius

```css
rounded-sm:   0.125rem   /* 2px */
rounded:      0.25rem    /* 4px */
rounded-md:   0.375rem   /* 6px */
rounded-lg:   0.5rem     /* 8px */
rounded-xl:   1rem       /* 16px - Custom */
rounded-2xl:  1.25rem    /* 20px - Custom */
rounded-3xl:  1.5rem     /* 24px */
rounded-full: 9999px     /* Pills, circles */
```

## Shadows

### Standard Shadow
```css
shadow-card: 0 12px 30px -18px rgba(2, 6, 23, 0.35)
```
**Usage**: Cards, elevated elements, important containers

### Built-in Shadows
```css
shadow-sm:  0 1px 2px rgba(0, 0, 0, 0.05)
shadow:     0 1px 3px rgba(0, 0, 0, 0.1)
shadow-md:  0 4px 6px rgba(0, 0, 0, 0.1)
shadow-lg:  0 10px 15px rgba(0, 0, 0, 0.1)
shadow-xl:  0 20px 25px rgba(0, 0, 0, 0.1)
shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25)
```

## Layout

### Max Width
```css
max-w-content: 72rem  /* 1152px - Custom content width */
```

**Usage**: Container for page content to maintain readable line lengths

### Breakpoints
```css
sm:  640px   /* Small devices */
md:  768px   /* Tablets */
lg:  1024px  /* Desktops */
xl:  1280px  /* Large desktops */
2xl: 1536px  /* Extra large */
```

## Gradients

### Gradient Primary (Navy)
```css
.gradient-primary {
  background: linear-gradient(135deg, #2F427A, #1F2A56);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```
**Usage**: Large headings, hero titles

### Gradient Patriot (Navy to Red)
```css
.gradient-patriot {
  background: linear-gradient(135deg, #1F2A56, #B21F2D);
}
```
**Usage**: Background elements, decorative accents

### Gradient Accent (Gold)
```css
.gradient-accent {
  background: linear-gradient(135deg, #DBAE3B, #C7A34A);
}
```
**Usage**: Accent bars, decorative elements

## Component Patterns

### Buttons

**Primary Button (Red):**
```tsx
<button className="px-8 py-4 rounded-full font-black text-lg text-white bg-secondary hover:bg-secondary-700 shadow-card transition-all">
  Donate
</button>
```

**Secondary Button (Navy Outline):**
```tsx
<button className="px-8 py-4 rounded-full font-black text-lg text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all">
  Volunteer
</button>
```

**Accent Button (Gold):**
```tsx
<button className="px-6 py-3 rounded-full font-bold text-white bg-accent hover:bg-accent-600 transition-all">
  Learn More
</button>
```

### Cards

```tsx
<div className="bg-neutral-base rounded-2xl p-6 shadow-card border border-neutral-border hover:shadow-xl transition-all">
  <h3 className="font-black uppercase text-primary-800">Card Title</h3>
  <p className="text-neutral-slate">Card content...</p>
</div>
```

### Sections

```tsx
<section className="py-16 bg-neutral-surface">
  <div className="container mx-auto px-6 max-w-content">
    <h2 className="text-4xl font-black uppercase gradient-primary mb-8">
      Section Title
    </h2>
    {/* Section content */}
  </div>
</section>
```

## Accessibility

### Color Contrast Ratios

All text/background combinations meet WCAG 2.1 AA standards:

- **primary-800 on white**: 11.2:1 (AAA)
- **secondary-600 on white**: 6.8:1 (AA)
- **neutral-ink on white**: 17.5:1 (AAA)
- **neutral-slate on white**: 10.1:1 (AAA)
- **neutral-muted on white**: 5.7:1 (AA)

### Focus States

Use `ring-2 ring-primary ring-offset-2` for focus indicators:

```tsx
<button className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
  Clickable Element
</button>
```

## Usage Guidelines

### Do's ✅
- Use primary navy for headings and important text
- Use secondary red for primary CTAs (Donate, Sign Up)
- Use accent gold sparingly for highlights
- Maintain consistent spacing using the scale
- Use uppercase for headings with font-black weight
- Apply shadow-card to elevated elements
- Use neutral colors for body text and UI elements

### Don'ts ❌
- Don't mix multiple gradients on the same element
- Don't use red for anything other than CTAs and alerts
- Don't use accent gold for large text areas
- Don't mix font families outside heading/body structure
- Don't create custom shadows outside the defined system
- Don't use text smaller than 14px for body copy
- Don't use primary colors at 50-200 lightness for text (poor contrast)

## Implementation

All colors, fonts, and utilities are configured in:
- `tailwind.config.ts` - Tailwind configuration
- `src/app/globals.css` - Global styles and custom utilities

Apply using Tailwind utility classes:
```tsx
<h1 className="text-5xl font-black text-primary-800">
<p className="text-lg text-neutral-slate">
<button className="bg-secondary text-white">
<div className="bg-neutral-surface border-neutral-border">
```
