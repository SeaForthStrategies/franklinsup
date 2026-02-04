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

```
Franklin4sup.web/
├── app/                          # Next.js App Router routes
├── components/
│   ├── layout/                   # Global layout components (Header, Footer)
│   ├── sections/                 # Page-specific sections
│   └── ui/                       # Shared UI primitives
├── docs/                         # Project documentation
├── public/                       # Static assets
└── config files                  # Tooling configuration
```

## Development

### Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Package Manager**: PNPM

### Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Run production build
pnpm start

# Linting & Type Checking
pnpm lint
pnpm type-check
```

## Documentation

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) - Architecture & Principles
- [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) - Design Tokens & Styles
- [`docs/PATTERNS.md`](docs/PATTERNS.md) - Component Patterns
