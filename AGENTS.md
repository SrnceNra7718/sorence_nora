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
- `pdf` (string) — public URL path to the authoritative PDF (URL-encoded)
- `image` (string) — public URL path to the matching JPG preview (URL-encoded)
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

## Projects

Portfolio projects are stored as a single source of truth in `src/lib/projects.ts`.

Project entries include: number, slug, title, role, context, overview, description, technologies, frontendTech, backendTech, databaseTech, images, imageAlt, liveUrl, githubUrl, dateCreated, caseStudy, ogImage.

The `caseStudy` object holds: problem, purpose, targetUsers, features (array of `{title, description}`), challenges, implementation, architecture (optional), lessonsLearned (optional), futureImprovements (optional), results (optional).

The case study is rendered by the dynamic route `src/app/projects/[slug]/page.tsx`. Pages are pre-rendered at build time via `generateStaticParams`. The projects listing at `/projects` iterates the `projects` array, so adding a new entry automatically produces a card on the listing page.

The homepage `Work` section (`src/app/sections/Work.tsx`) currently highlights `projects[0]` as the featured project and links to the full projects index.

### Current Projects

#### 01 — Student Clearance Monitor

- **Slug**: `student-clearance-monitor`
- **GitHub**: not published (`githubUrl: null`)
- **Live URL**: not published (`liveUrl: null`)
- **Context**: OJT project at STI College, San Jose del Monte
- **Stack**: HTML5, CSS3, Tailwind CSS, JavaScript, TypeScript, Next.js, Supabase, PostgreSQL
- **Screenshots**: `/public/forProject_Section/scs.png`, `AdminPage.png`, `CashierPage.png`, `ProgHeadPage.png`, `RegistrarPage.png`

#### 02 — Yenzhen Tailoring

- **Slug**: `yenzhen-tailoring`
- **GitHub**: https://github.com/SrnceNra7718/yenzhen-tailoring
- **Live URL**: https://yenzhen-tailoring.vercel.app (verified — README `About` section on the repo lists the same URL)
- **Context**: Client project — Yenzhen Tailoring (premium custom sublimation sportswear)
- **Stack (verified from `package.json` and source)**: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion, Lucide React, clsx, tailwind-merge. Supabase + PostgreSQL schema is included in the repo (`sql/schema.sql`) for future CRUD functionality, and is referenced in the case study as **prepared** rather than fully wired.
- **Screenshots**: `/public/forProject_Section/yenzhen-tailoring/` (homepage, products, gallery, about, contact page renders + mobile homepage + sample product and gallery images)
- **Source-of-truth notes**:
  - Content lives in typed static data files (`data/products.ts`, `data/gallery.ts`, etc.) — there is no live Supabase query layer in the current code, even though the README and SQL schema describe one.
  - The repository's `package.json` does **not** include `@supabase/supabase-js` as a dependency; the README's "Tech Stack" mentions Supabase, but in this case study Supabase is described as prepared/scaffolded for future work.
  - The README references `lib/supabase.ts`, which does not exist in the repo (only `lib/utils.ts` exists). Do not invent Supabase helpers — refer to the repo for ground truth on future edits.
  - Admin routes (`app/admin/**`) and an `/admin` sign-up page are scaffolded but the live deployment does not currently expose them.
- **Manual fields**: `dateCreated` was not present in the repo metadata; set to `2024-01-01` as a placeholder.
- **Live deployment verification**: README "About" section on the GitHub repo explicitly links to `https://yenzhen-tailoring.vercel.app`. Screenshots were captured from that live deployment.

#### 03 — Brows By Her

- **Slug**: `brows-by-her`
- **GitHub**: https://github.com/SrnceNra7718/brows-by-her
- **Live URL**: https://brows-by-her.vercel.app (verified live deployment)
- **Context**: Client project — Brows By Her (luxury eyebrow artistry studio, Melbourne)
- **Stack (verified from `package.json` and source)**: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion, Lucide React, React Hook Form, Zod, next-themes, Cal.com scheduling integration. Route Handlers for API endpoints (`/api/contact`, `/api/subscribe`).
- **Screenshots**: `/public/forProject_Section/brows-by-her/` (homepage hero, services catalog, gallery, pricing tiers, about studio, booking page)
- **Manual fields**: `dateCreated` set to `2026-08-07` from commit history.

#### 04 — Stylish Flow Hair & Beauty

- **Slug**: `stylish-flow-hair-beauty`
- **GitHub**: https://github.com/SrnceNra7718/stylish-flow-hair-beauty
- **Live URL**: https://stylish-flow-hair-beauty.vercel.app (verified live deployment)
- **Context**: Client project — Stylish Flow Hair & Beauty Salon (Melbourne)
- **Stack (verified from source)**: Semantic HTML5, CSS3 Custom Properties, Vanilla JavaScript (ES6+), Lucide Icons, Google Fonts (Manrope and Inter).
- **Screenshots**: `/public/forProject_Section/stylish-flow-hair-beauty/` (homepage hero with gold ribbon brand mark, about studio, service and treatment menu, filterable masonry gallery, customer testimonials, contact section)
- **Manual fields**: `dateCreated` set to `2026-08-07` from commit history.

#### 05 — Subbie Street Garage (Prototype)

- **Slug**: `subbie-street-garage-proto`
- **GitHub**: https://github.com/SrnceNra7718/subbie-street-garage-proto
- **Live URL**: https://subbie-street-garage-proto.vercel.app (verified live deployment)
- **Context**: Prototype design — Subaru specialist workshop (Dandenong VIC)
- **Stack (verified from source)**: Semantic HTML5, CSS3 Custom Properties, CSS Keyframe Animations, Custom SVG Vector Graphics (animated boxer engine), Google Fonts (Bebas Neue and Inter).
- **Screenshots**: `/public/forProject_Section/subbie-street-garage-proto/` (homepage hero with animated boxer engine SVG, specialist services, workshop philosophy, driver testimonials, contact module)
- **Manual fields**: `dateCreated` set to `2026-08-05` from commit history.

#### 06 — Subbie Street Garage

- **Slug**: `subbie-street-garage`
- **GitHub**: https://github.com/SrnceNra7718/subbie-street-garage
- **Live URL**: https://subbie-street-garage.vercel.app (verified live deployment)
- **Context**: Production application — Subaru specialist workshop (Dandenong VIC)
- **Stack (verified from `package.json` and source)**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Lucide React, React Hook Form, Zod, Schema.org AutoRepair JSON-LD structured data.
- **Screenshots**: `/public/forProject_Section/subbie-street-garage/` (homepage hero with dynamic navigation, dedicated services directory, Subaru specialist platform deep-dive, workshop build gallery, interactive quote builder, appointment booking scheduler)
- **Manual fields**: `dateCreated` set to `2026-08-05` from commit history.

#### 07 — Seek Migration

- **Slug**: `seek-migration`
- **GitHub**: https://github.com/SrnceNra7718/seek_migration
- **Live URL**: https://seek-migration.vercel.app (verified live deployment)
- **Context**: Client project — Seek Migration (international visa consultancy)
- **Stack (verified from source)**: Semantic HTML5, CSS3 (Grid, Flexbox, Keyframes), Vanilla JavaScript (ES6+), SVG Vector Graphics, Google Fonts (DM Sans and Instrument Sans).
- **Screenshots**: `/public/forProject_Section/seek-migration/` (homepage hero with navigation and consultation CTA, visa pathways breakdown, destination comparison, migrant success stories, consultation booking section)
- **Manual fields**: `dateCreated` set to `2026-08-22` from commit history.

### Adding a New Project

1. Add a new entry to the `projects` array in `src/lib/projects.ts`. Use the existing Student Clearance Monitor or Yenzhen Tailoring entry as the structural template. Reuse the existing `Project` interface — do not invent new fields.
2. Place project screenshots under `/public/forProject_Section/{slug}/`.
3. Populate `imageAlt` for every entry in `images`. Provide meaningful, frame-specific captions — never "Screenshot N".
4. If the project has a verified live URL, add it to `liveUrl`. If not, leave `liveUrl: null` — do not invent one.
5. If the project has a public GitHub repo, add it to `githubUrl`. If not, leave `githubUrl: null`.
6. Run `npx tsc --noEmit`, `npx eslint .`, and `npx next build` to verify the new route is generated under `/projects/[slug]` and that the projects listing page still renders.
7. Add a short record under `### Current Projects` in `AGENTS.md` summarising the source repo, slug, live URL status, stack, and any manual fields.

### Project Accuracy

**Never invent or infer unsupported project information.** Use the source repository (and, when available, the live deployment) as the source of truth for:
- Project title and description
- Frontend / backend / database technologies (only those actually present in `package.json` or source code)
- Features (only those visible in routes, components, or README)
- Architecture (only describe what the code actually does)
- Live URL (only if explicitly mentioned in the README or repo metadata)
- GitHub URL (only the actual repo, not a fork or unrelated project)

If a field cannot be confidently verified, either omit it or describe it accurately as prepared/scaffolded (e.g. "schema prepared, not yet wired").
