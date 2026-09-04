# AGENTS.md

## Commands

- **Type check**: `npx tsc --noEmit`
- **Lint**: `npx eslint .`
- **Build**: `npx next build`
- **Dev**: `npx next dev --experimental-https` (HTTPS enabled via `--experimental-https` flag using self-signed cert from mkcert, serves at `https://localhost:3000`)

## Environment

- **Node.js**: >=26.0.0 (specified in `engines.node` in `package.json`)
- **HTTPS**: Development server runs over HTTPS to ensure secure context for PDF rendering
- **PDF headers**: `next.config.mjs` sets `Content-Disposition: inline`, `Content-Type: application/pdf`, `X-Content-Type-Options: nosniff`, and `X-Frame-Options: SAMEORIGIN` for PDF files

## Project Structure

```
src/
  app/
    layout.tsx        # Root layout with site-wide metadata
    page.tsx          # Homepage (all sections)
    not-found.tsx     # 404 page
    about/page.tsx    # About page
    about/certificates/
      [slug]/
        page.tsx      # Individual certificate detail page
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
      certificates/   # Certificate components (PdfPreview, CertCard, LearningPathGroup, etc.)
    sections/         # Homepage sections (Hero, Intro, Stack, Work, About, Contact)
  lib/
    siteConfig.ts     # Central SEO configuration
    seo.ts           # SEO helpers (JSON-LD builders, metadata utils)
    projects.ts      # Project data + case studies
    certificates.ts  # Centralized certificate data model + helpers
    stack.ts         # Technology stack categories
    timeline.ts      # Education/certifications timeline (education only; certificates now in certificates.ts)
    blog.ts          # Blog post metadata
    blogContent.ts   # Blog article content
```

## SEO Notes

- Metadata is defined per-page using Next.js `export const metadata`
- Layout metadata in `layout.tsx` provides defaults
- JSON-LD structured data rendered via `<JsonLd>` component
- Static `public/robots.txt` and `public/sitemap.xml`
- Canonical URLs set via `alternates.canonical` on each page

## Certificates

Certificate files are stored in `/public/certificates`.

Certificate metadata must remain centralized in `src/lib/certificates.ts` and must **not** be duplicated across UI components or other data files.

The actual certificate PDF is the source of truth for:
- Certificate title
- Issuer/provider
- Recipient name
- Completion/issue date
- Credential ID (if present)
- Course name and description
- Learning-path information
- Descriptive text

### Master.dev Learning Path

The directory:

`/public/certificates/Master React and Next.js, the Leading Technologies Powering Modern Web Development`

belongs to the Master.dev learning path:

`Master React and Next.js, the Leading Technologies Powering Modern Web Development`

Certificates inside this directory must be presented as members of this learning path rather than unrelated certifications. The individual course certificates within the folder are issued by **Frontend Masters** (as shown on each certificate), while the learning path itself is curated by **Master.dev**. The data model captures both: `learningPath.provider = "Master.dev"` and `issuer = "Frontend Masters"`.

The `react-dark.pdf` file is the learning path completion certificate (marked with `isLearningPathCertificate: true`).

### Certificate Data Model

`src/lib/certificates.ts` exports:
- `certificates: Certificate[]` — all certificates, the single source of truth
- `getCertificateBySlug(slug)` — lookup by slug
- `getCertificateGroups()` — group certificates by provider/learning path
- `getStandaloneCertificates()` — certificates without a learning path
- `getCertificatesForHomepage()` — flat list for summary displays

`Certificate` fields:
- `id` (string) — stable identifier
- `title` (string) — certificate title from the PDF (not the filename)
- `issuer` (string) — the entity that issued the certificate
- `year` (string) — year of completion
- `issueDate` (optional string) — full date from the PDF
- `dateISO` (optional string) — ISO 8601 date for structured data
- `recipient` (optional string) — only set when shown on the PDF
- `credentialId` (optional string) — credential/reference number if present
- `description` (optional string) — verified text from the PDF
- `courseType` (optional string) — e.g. "Certificate of Completion"
- `skills` (optional string[]) — topics verified from the certificate title
- `pdf` (string) — public URL path (URL-encoded)
- `slug` (string) — URL-safe slug for routes
- `instructor` (optional string) — instructor name from the PDF
- `duration` (optional string) — course duration from the PDF
- `isLearningPathCertificate` (optional boolean) — true for the overall learning path cert
- `learningPath` (optional) — `{ provider, title, description? }`

### Certificate Components

- `src/app/components/certificates/PdfPreview.tsx` — Client component. Lazy-loads an `<iframe>` PDF viewer. Shows placeholder + buttons until clicked. Mobile falls back to Open PDF link only.
- `src/app/components/certificates/CertCard.tsx` — Server component. Renders compact (homepage) or detailed (about/detail) certificate cards. Uses `next/dynamic` for PdfPreview to avoid bundling PDF viewer code in non-detail contexts.
- `src/app/components/certificates/LearningPathGroup.tsx` — Server component. Displays a learning path header + all child certificates. `compact` prop for homepage vs `/about`.
- `src/app/components/certificates/CertificationsSummary.tsx` — Client component for homepage `#about`. Shows compact, grouped certificate summaries.
- `src/app/components/certificates/CertificatesSection.tsx` — Server component for `/about`. Shows detailed, grouped certificates with PDF previews.

### Homepage

`#about` displays a compact certification summary:

- Year
- Provider/issuer
- Certificate title

Master.dev certificates are grouped under the learning path title. A "View all certifications →" link points to `/about`.

The homepage must **not** load any PDFs. Only text summaries and links are rendered.

### About Page

`/about` contains the detailed certificate information:

- Master.dev learning path with full title, description, and all child certificates
- Each certificate shows full details (issuer, date, recipient, instructor, duration, skills)
- PDF previews are lazily loaded (user must click "View PDF")
- Open PDF button available for each certificate
- Standalone certificates (Oracle Academy, STI College) shown in a separate group

### Certificate Detail Route

`/about/certificates/[slug]` — one static page per certificate.

- H1 with certificate title
- Breadcrumb: Home → About → Certificate title
- Full certificate details grid
- Lazy PDF preview with Open PDF button
- "Related certificates" section (same learning path or issuer)
- "Back to About" link
- SEO metadata with canonical URL
- JSON-LD `EducationalOccupationalCredential` structured data

`generateStaticParams` is used to statically generate all certificate pages at build time.

### URL/Path Conventions

- PDFs in `/public` are served at their path relative to `/public`
- The `pdfUrl(folder, filename)` helper in `certificates.ts` constructs URL-encoded paths
- Spaces and special characters in folder/file names are encoded with `encodeURIComponent`
- Certificate detail URLs use the `slug` field: `/about/certificates/{slug}`
- Always use `cert.pdf` directly in `href` or `src` attributes (it is already URL-encoded)

### Adding a New Certificate

1. Place the real PDF in the appropriate directory under `/public/certificates/`.
2. Inspect the PDF and extract the verified title, issuer, date, recipient, and any other details.
3. Add a new entry to the `certificates` array in `src/lib/certificates.ts` with:
   - `title` from the PDF (not the filename)
   - `issuer` from the PDF
   - `year` and `issueDate` from the PDF
   - `dateISO` in ISO 8601 format
   - `slug` matching the title (or a unique URL-safe variant)
   - `pdf` using the `pdfUrl(folder, filename)` helper
   - `learningPath` if it belongs to the Master.dev learning path
4. Verify the PDF URL resolves correctly (check encoding of spaces/special chars).
5. Run `npx tsc --noEmit` and `npx next build` to verify everything compiles and routes are generated.
6. Verify the certificate appears in the homepage `#about` summary and the `/about` detail page.

### Adding a New Learning Path

1. Create a new folder under `/public/certificates/` (e.g., `/public/certificates/New Provider/`).
2. Place certificate PDFs in the folder.
3. Define a new `LearningPath` constant in `src/lib/certificates.ts` with the provider name and full title.
4. Add certificates with the `learningPath` field set to the new constant.
5. The `getCertificateGroups()` function automatically groups certificates by learning path.
6. Verify the learning path appears correctly in the homepage summary and `/about` page.

### SEO

- Each certificate detail page has unique `title`, `description`, `canonical` URL
- Canonical: `${siteConfig.siteUrl}/about/certificates/${slug}`
- JSON-LD: `EducationalOccupationalCredential` with `recognizedBy` (Organization) and `partOf` (Course) for learning path members
- `certificateCollectionJsonLd` provides an `ItemList` of all credentials for collection pages
- Internal linking: homepage → `/about`, `/about` → individual certificate pages

### Accessibility

- All certificate cards use semantic `<article>` and `<header>` elements
- PDF preview buttons have descriptive text (not icon-only)
- `aria-labelledby` used for card titles
- Breadcrumb navigation included on detail pages
- `prefers-reduced-motion` respected (animations disabled via CSS)
- Focus states styled with `outline: 2px solid var(--accent)` (from global CSS)
- PDFs open in new tabs with `rel="noopener noreferrer"`
- iframe titles include the certificate name

### Performance

- **Homepage**: No PDFs loaded. Only text summaries (year, provider, title) and links
- **PDF previews**: Lazy-loaded via `next/dynamic` with `ssr: false`. The iframe is only rendered after user interaction ("View PDF" click)
- **Mobile**: PDF previews fall back to Open PDF button (no iframe)
- **Static generation**: All certificate detail pages are pre-rendered at build time via `generateStaticParams`
- **Bundle splitting**: PdfPreview is dynamically imported, keeping the initial bundle small

### Accuracy

**Never invent or infer unsupported certificate information.** Use the actual certificate PDF as the source of truth for:
- Certificate title (must match the PDF, not the filename)
- Provider/issuer (must match what's shown on the certificate)
- Issue date (must match the PDF)
- Credential ID (only if present on the PDF)
- Recipient (only if shown on the PDF)
- Course name and description
- Learning-path membership

If information cannot be confidently verified from the PDF or existing project data, **omit it**.
