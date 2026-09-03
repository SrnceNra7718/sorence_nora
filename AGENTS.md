# AGENTS.md

## Commands

- **Type check**: `npx tsc --noEmit`
- **Lint**: `npx next lint`
- **Build**: `npx next build`
- **Dev**: `npx next dev`

## Project Structure

```
src/
  app/
    layout.tsx        # Root layout with site-wide metadata
    page.tsx          # Homepage (all sections)
    not-found.tsx     # 404 page
    about/page.tsx    # About page
    skills/page.tsx   # Technology stack page
    projects/
      page.tsx        # Projects listing
      [slug]/
        page.tsx      # Project case study
    contact/page.tsx  # Contact page
    blog/
      page.tsx        # Blog listing
      [slug]/
        page.tsx      # Individual article
    components/
      layout/         # Navbar, Footer, PageLayout
      ui/             # Badge, Button, Timeline, SectionEyebrow
      effects/        # CustomCursor, ScrollReveal, CircuitTrace, Magnetic, Reveal
      contact/        # ContactForm (client component)
      SEO/            # JsonLd component
    sections/         # Homepage sections (Hero, Intro, Stack, Work, About, Contact)
  lib/
    siteConfig.ts     # Central SEO configuration
    seo.ts           # SEO helpers (JSON-LD builders, metadata utils)
    projects.ts      # Project data + case studies
    stack.ts         # Technology stack categories
    timeline.ts      # Education/certifications timeline
    blog.ts          # Blog post metadata
    blogContent.ts   # Blog article content
```

## SEO Notes

- Metadata is defined per-page using Next.js `export const metadata`
- Layout metadata in `layout.tsx` provides defaults
- JSON-LD structured data rendered via `<JsonLd>` component
- Static `public/robots.txt` and `public/sitemap.xml`
- Canonical URLs set via `alternates.canonical` on each page
