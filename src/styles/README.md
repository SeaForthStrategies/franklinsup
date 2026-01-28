# Styles Directory

## Design System

See [`docs/DESIGN_SYSTEM.md`](../docs/DESIGN_SYSTEM.md) for complete design system documentation.

### Quick Reference

#### Colors
```css
/* Primary (Navy Blue) */
primary: #1F2A56 (with 50-900 scale)

/* Secondary (Red) */
secondary: #B21F2D (with 50-900 scale)

/* Accent (Gold) */
accent: #C7A34A (with 50-900 scale)

/* Neutral (Grays & Whites) */
neutral-ink: #0B1220
neutral-slate: #334155
neutral-muted: #64748B
neutral-border: #E2E8F0
neutral-surface: #F8FAFC
neutral-base: #FFFFFF
```

#### Typography
- **Heading Font**: Montserrat (Black/900, Uppercase)
- **Body Font**: Source Sans 3 (Regular/400, Semibold/600)
- **Base Size**: 16px (1rem)
- **Line Height**: 1.5-1.6 for body, 1.2 for headings

#### Spacing Scale
- 4px base unit
- Common: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px

#### Border Radius
- Standard: 8px (rounded-lg)
- Cards: 16px (rounded-xl)
- Large: 20px (rounded-2xl)
- Pills: 9999px (rounded-full)

#### Shadows
- Card: `0 12px 30px -18px rgba(2, 6, 23, 0.35)`
- Standard Tailwind shadows: shadow-sm through shadow-2xl

#### Gradients
- `.gradient-patriot`: Navy-to-blue gradient for backgrounds
- `.gradient-accent`: Blue-only gradient for accents

## File Structure
- `globals.css` - Base styles, custom utilities, font variables
- Additional component styles go in component files
