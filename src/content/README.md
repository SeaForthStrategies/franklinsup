# Content Directory

## Purpose
Store structured content as JSON, YAML, or Markdown files for easy editing without touching code.

## Suggested Files

### `priorities.json`
```json
[
  {
    "id": "affordability",
    "title": "Affordability",
    "icon": "dollar-sign",
    "lead": "We must tackle the rising cost of living...",
    "points": [
      "Oppose the Vehicle Milage Tax (VMT)",
      "Oppose Sales Tax Increases",
      ...
    ],
    "body": ["...paragraph 1...", "...paragraph 2..."]
  },
  ...
]
```

### `endorsements.json`
List of endorsers with names, titles, photos, quotes

### `issues.json`
Detailed policy positions with full text

### `news-articles.json`
Featured articles, op-eds, press coverage

### `videos.json`
Video content with YouTube IDs, titles, thumbnails

### `site-config.json`
Site-wide settings:
- Social media links
- Contact information
- Campaign colors/branding
- Feature flags
- API endpoints (donation, volunteer forms)

### `district-info.json`
District 5 information, maps, demographics, communities

## Benefits
- Non-developers can update content
- Version control for content changes
- Easy to import/export
- Type-safe with TypeScript interfaces
- CMS-ready structure
