import React from "react";

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level: 2 | 3 | 4 }
  | { type: "code"; language: string; code: string; filename?: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "callout"; text: string };

export interface BlogContent {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: string;
  tag: string;
  tags: string[];
  readingTime: string;
  ogImage: string;
  content: BlogContentBlock[];
}

export const blogContent: Record<string, BlogContent> = {
  "seek-migration-case-study": {
    slug: "seek-migration-case-study",
    title:
      "Building Seek Migration: An Immigration Consultancy Website with Animated Route Graphics",
    description:
      "How I built an authoritative web presence for an international visa consultancy — demystifying Australia and New Zealand migration pathways with clean typography, SVG route maps, and a structured consultation booking flow.",
    datePublished: "2026-08-25",
    dateModified: "2026-08-25",
    author: "Sorence Nora",
    tag: "Project Case Study",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "SVG Graphics",
      "Responsive Design",
      "Case Study",
    ],
    readingTime: "6 min read",
    ogImage: "/forProject_Section/seek-migration/homepage_hero.png",
    content: [
      {
        type: "paragraph",
        text: "Seek Migration is a professional immigration consultancy website tailored for individuals and families in the Philippines planning their migration journey to Australia or New Zealand. Built with semantic HTML5, modern CSS3, and vanilla JavaScript, the site guides prospective migrants through complex visa pathways including skilled migration, student visas, partner visas, and employer sponsorships.",
      },
      {
        type: "paragraph",
        text: "This case study walks through the design and development decisions — from organising dense regulatory information into scannable sections, to crafting animated flight-path SVG graphics, to building a consultation booking interface that converts anxious visitors into confident applicants.",
      },
      {
        type: "heading",
        text: "The problem: overwhelming immigration rules",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Immigration rules and visa categories are notoriously complicated and overwhelming, causing anxiety and hesitation for Filipino applicants. Many potential clients never reach out because they cannot quickly find which subclass applies to them, what the next step is, or even whether their situation qualifies. Without a clear digital guide, a high-value consultancy was losing qualified leads to confusion.",
      },
      {
        type: "heading",
        text: "Project goals and audience",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The target audience is Filipino professionals, skilled workers, students, and families exploring permanent residency or study options in Australia and New Zealand. The website needed to communicate authority and trustworthiness, demystify visa categories, and provide a frictionless path to a consultation.",
      },
      {
        type: "list",
        items: [
          "Establish a credible, professional brand presence for the consultancy.",
          "Break down complex visa pathways into clear, scannable sections.",
          "Highlight successful client journeys to build confidence and social proof.",
          "Provide a structured consultation booking flow that captures the right applicant information upfront.",
          "Ensure the experience performs well across mobile devices, where many Filipino users browse on limited data plans.",
        ],
      },
      {
        type: "heading",
        text: "Tech stack and why these choices",
        level: 2,
      },
      {
        type: "paragraph",
        text: "For a high-stakes service like international migration, performance, accessibility, and SEO clarity matter more than flashy framework features. I chose a lightweight vanilla stack that loads instantly, ranks well, and works reliably in every browser and on every connection speed.",
      },
      {
        type: "list",
        items: [
          "Semantic HTML5 — for maximum accessibility and SEO clarity, since immigration content must be indexed accurately.",
          "Modern CSS3 (Grid, Flexbox, Keyframes) — for responsive layouts and subtle scroll-triggered animations without framework overhead.",
          "Vanilla JavaScript (ES6+) — for interactive drawer menus, destination tab switching, form validation, and SVG animation triggers.",
          "Custom SVG route maps — for animated flight trajectories symbolising the journey from Manila to Australian and New Zealand capitals.",
          "Google Fonts (DM Sans and Instrument Sans) — for an authoritative yet approachable typographic hierarchy.",
          "Vercel — for fast global edge deployment and reliable hosting.",
        ],
      },
      {
        type: "image",
        src: "/forProject_Section/seek-migration/homepage_hero.png",
        alt: "Seek Migration homepage hero section with professional branding, tagline, and consultation booking call to action",
        caption:
          "The homepage hero establishes authority immediately and routes visitors to the consultation flow.",
      },
      {
        type: "heading",
        text: "Visa pathways and destination comparison",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The core of the website is a structured breakdown of visa subclasses — General Skilled Migration (189/190/491), Student Visas (500), Partner Visas (820/801), and New Zealand Essential Skills visas. Each pathway has its own section with clear eligibility criteria, step-by-step process, and required documentation summaries.",
      },
      {
        type: "image",
        src: "/forProject_Section/seek-migration/services_section.png",
        alt: "Seek Migration visa pathways breakdown covering skilled migration, student visas, and partner applications",
        caption:
          "Each visa category is presented as a scannable card with the subclass number and key requirements.",
      },
      {
        type: "paragraph",
        text: "A dedicated destination comparison section contrasts Australia and New Zealand across lifestyle, employment sectors, and immigration requirements. Interactive tab panels let users switch between countries without a page reload, while SVG flag accents reinforce the geographic context.",
      },
      {
        type: "image",
        src: "/forProject_Section/seek-migration/destinations_section.png",
        alt: "Seek Migration Australia and New Zealand destination comparison with animated pathway indicators",
        caption:
          "The destination comparison uses tab-based interactivity to contrast both countries at a glance.",
      },
      {
        type: "heading",
        text: "Animated migration route graphics",
        level: 2,
      },
      {
        type: "paragraph",
        text: "To visualise the journey from the Philippines to the destination countries, I created custom SVG route maps with animated flight trajectory lines. CSS keyframes animate the stroke-dashoffset to draw the path progressively, while marker icons move along the route to symbolise the migration journey.",
      },
      {
        type: "code",
        language: "css",
        code: `.route-line {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw-route 3s ease-in-out forwards;
}

@keyframes draw-route {
  to {
    stroke-dashoffset: 0;
  }
}`,
      },
      {
        type: "callout",
        text: "The animation runs only when the section scrolls into view, triggered by an Intersection Observer — so visitors on metered connections don't pay a performance cost for off-screen graphics.",
      },
      {
        type: "heading",
        text: "Client success stories",
        level: 2,
      },
      {
        type: "paragraph",
        text: "A curated carousel of verified client success stories reinforces trust. Each story includes a photo, visa subclass, timeline, and outcome — presented without autoplay so users control the pace.",
      },
      {
        type: "image",
        src: "/forProject_Section/seek-migration/stories_section.png",
        alt: "Seek Migration client success stories featuring testimonials from Filipino migrants living abroad",
        caption:
          "Verified success stories include subclass, timeline, and outcome to build credibility.",
      },
      {
        type: "heading",
        text: "Responsive design and performance",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The site was designed mobile-first. SVG graphics scale cleanly, the destination tab panels collapse into an accordion on small screens, and the booking form uses responsive Grid and Flexbox to keep fields readable on any viewport.",
      },
      {
        type: "callout",
        text: "On the Student Visa (500) detail page, the FAQ accordion starts fully collapsed on mobile to keep the initial view short, then expands inline when tapped — avoiding heavy JavaScript modals.",
      },
      {
        type: "heading",
        text: "Key challenges",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The biggest challenge was organizing extensive regulatory information into clean, digestible sections without losing accuracy. Every visa requirement was carefully vetted against official government sources. The solution was a card-based layout with progressive disclosure, allowing users to read an overview and expand details only when needed.",
      },
      {
        type: "paragraph",
        text: "A second challenge was ensuring the SVG route animations felt premium without impacting load performance. By keeping the SVGs inline and lightweight, and triggering animations only on scroll entry, the graphics add motion without sacrificing speed.",
      },
      {
        type: "heading",
        text: "Lessons learned",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Designing for high-stakes services like international migration requires deep empathy and clear visual hierarchy. Establishing trust upfront through clean typography and verified client stories dramatically increases consultation conversions.",
      },
      {
        type: "heading",
        text: "What's next",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Future improvements include building an interactive visa points eligibility calculator for both Australia and New Zealand, adding client portal access for document uploads, and implementing multi-language support (English and Tagalog).",
      },
    ],
  },

  "subbie-street-garage-case-study": {
    slug: "subbie-street-garage-case-study",
    title:
      "Building Subbie Street Garage: A Next.js 16 Production Automotive Web Application",
    description:
      "How I transformed a prototype into a full-scale production web application for a Subaru specialist workshop — Next.js 16, React 19, Tailwind CSS v4, and type-safe multi-step quote & booking forms.",
    datePublished: "2026-08-09",
    dateModified: "2026-08-09",
    author: "Sorence Nora",
    tag: "Project Case Study",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "Case Study",
    ],
    readingTime: "8 min read",
    ogImage: "/forProject_Section/subbie-street-garage/homepage_hero.png",
    content: [
      {
        type: "paragraph",
        text: "Subbie Street Garage is a full-featured web application engineered for an independent Subaru mechanical and performance workshop in Dandenong, Victoria. Built on Next.js 16, React 19, TypeScript, and Tailwind CSS v4, the application expands upon initial concept work to deliver a complete multi-route digital experience.",
      },
      {
        type: "paragraph",
        text: "This case study walks through how the initial prototype evolved into a production application — covering the transition from vanilla SVG to a React-powered platform deep-dive, the architecture of type-safe multi-step forms, and the implementation of Local SEO structured data.",
      },
      {
        type: "heading",
        text: "From prototype to production",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The Subbie Street Garage project began as a brand-validation prototype using pure HTML5 and CSS3 with an animated SVG boxer engine. Once the visual identity was proven and the motorsport branding hooks validated, the decision was made to build out the full production application with a modern React framework, routing, form validation, and SEO infrastructure.",
      },
      {
        type: "heading",
        text: "The problem: workshops need complete technical intake",
        level: 2,
      },
      {
        type: "paragraph",
        text: "High-performance automotive workshops require comprehensive job intake forms to capture precise vehicle specifications — engine code, modifications, target power levels, and specific symptoms — before quoting. Traditional contact forms were too vague, while paper-based intake caused inefficiencies and miscommunication.",
      },
      {
        type: "heading",
        text: "Project goals and audience",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The target users are Subaru owners needing certified logbook maintenance, performance enthusiasts commissioning forged engine builds or ECU tuning, and drivers requiring urgent diagnostics or drivetrain repairs across Greater Melbourne.",
      },
      {
        type: "list",
        items: [
          "Showcase deep technical Subaru expertise across EJ and FA/FB platforms.",
          "Streamline service scheduling with a structured booking system.",
          "Capture granular quote requests with type-safe validation.",
          "Build a visual workshop gallery that demonstrates completed projects.",
          "Implement comprehensive Local SEO so Melbourne Subaru owners can find the workshop.",
        ],
      },
      {
        type: "heading",
        text: "Tech stack and why these choices",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Building on the early release of Next.js 16 and Tailwind CSS v4 required careful attention to evolving bundling and CSS conventions, but the payoff was superior compilation performance and clean component boundaries.",
      },
      {
        type: "list",
        items: [
          "Next.js 16 (App Router) — for file-based routing, static generation, and server components.",
          "React 19 — leveraging the latest React features for reactivity and concurrent rendering.",
          "TypeScript — to enforce strict data shapes across the complex vehicle specification forms.",
          "Tailwind CSS v4 — for a modernized styling ruleset and shared design tokens.",
          "Lucide React — for clean, consistent service and navigation icons.",
          "React Hook Form + Zod — for type-safe, validated multi-step form flows with instant field feedback.",
          "Schema.org AutoRepair JSON-LD — for Local SEO structured data targeting Melbourne Subaru searches.",
        ],
      },
      {
        type: "image",
        src: "/forProject_Section/subbie-street-garage/homepage_hero.png",
        alt: "Subbie Street Garage production homepage hero section with dynamic navigation and service highlights",
        caption:
          "The production homepage introduces the brand with a dynamic navigation and service highlights.",
      },
      {
        type: "heading",
        text: "Architecture",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The frontend uses the Next.js 16 App Router with React 19 Server Components for high-performance static rendering. Interactive forms are isolated as Client Components to avoid shipping unnecessary JavaScript to static pages. Next.js Route Handlers process form submissions, and the Metadata API generates per-page SEO.",
      },
      {
        type: "code",
        language: "text",
        code: `src/
  app/
    layout.tsx
    page.tsx
    services/
      page.tsx
      [slug]/page.tsx
    specialists/page.tsx
    gallery/page.tsx
    quote/
      page.tsx
    booking/
      page.tsx
    contact/page.tsx
    api/
      quote/route.ts
      booking/route.ts
  components/
    forms/
      QuoteBuilder.tsx
      BookingForm.tsx
    gallery/
      GalleryGrid.tsx`,
      },
      {
        type: "heading",
        text: "Key features",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Subaru platform specialist deep-dive pages (EJ20/EJ25, FA20, FA24, Symmetrical AWD).",
          "Granular multi-field quote builder capturing model, year, VIN, modifications, and target specs.",
          "Service booking scheduler with preferred date and time selection.",
          "Categorized service directory with route-driven individual service pages.",
          "Workshop gallery showcasing completed track and street builds.",
          "Complete LocalBusiness + AutoRepair JSON-LD with geo-coordinates and trading hours.",
        ],
      },
      {
        type: "image",
        src: "/forProject_Section/subbie-street-garage/quote_page.png",
        alt: "Subbie Street Garage interactive quote builder with detailed vehicle specification fields",
        caption:
          "The quote builder captures detailed vehicle specifications with type-safe Zod validation at each step.",
      },
      {
        type: "image",
        src: "/forProject_Section/subbie-street-garage/services_page.png",
        alt: "Subbie Street Garage dedicated services catalog detailing engine building, transmission, and dyno tuning",
        caption:
          "Services are organized into route-driven pages for engine builds, transmission, and dyno tuning.",
      },
      {
        type: "heading",
        text: "Form validation strategy",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The quote and booking forms use React Hook Form for state management and Zod schemas for validation. Each step of the multi-step flow validates its fields before allowing progression, with inline error messages and toast notifications for success and failure states.",
      },
      {
        type: "callout",
        text: "Using Zod's schema inference means the form types are generated directly from the validation schema — so the frontend and backend share the exact same type definitions without manual duplication.",
      },
      {
        type: "heading",
        text: "Local SEO and structured data",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The site includes comprehensive Schema.org AutoRepair JSON-LD with geo-coordinates, trading hours, service catalogs, and review snippets. The sitemap and robots files are generated programmatically, and every service page has unique metadata with canonical URLs.",
      },
      {
        type: "heading",
        text: "Key challenges",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Building on the early release of Next.js 16 and Tailwind CSS v4 required careful adherence to evolving bundling and CSS conventions. The team had to stay closely aligned with release notes and adjust conventions as the framework stabilized.",
      },
      {
        type: "paragraph",
        text: "Another challenge was designing forms complex enough to capture technical vehicle specifications while keeping the user experience approachable. Progressive disclosure and inline validation helped bridge that gap.",
      },
      {
        type: "heading",
        text: "Lessons learned",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Early adoption of Next.js 16 and Tailwind v4 rewarded the project with superior compilation performance and clean component boundaries, but required disciplined attention to breaking changes and convention updates.",
      },
      {
        type: "heading",
        text: "What's next",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Future improvements include integrating an automated customer SMS notification pipeline for live vehicle service updates, dyno graph PDF generation, and a customer portal for service history access.",
      },
    ],
  },

  "subbie-street-garage-prototype-case-study": {
    slug: "subbie-street-garage-prototype-case-study",
    title:
      "Prototyping Subbie Street Garage: Animated SVG Boxer Engine & Motorsport Branding",
    description:
      "How I validated the brand identity for a Subaru specialist workshop using pure HTML5, CSS3, and a custom animated SVG boxer engine — the prototype that became the blueprint for the full production build.",
    datePublished: "2026-08-06",
    dateModified: "2026-08-06",
    author: "Sorence Nora",
    tag: "Project Case Study",
    tags: ["HTML5", "CSS3", "SVG Animation", "JavaScript", "Case Study"],
    readingTime: "5 min read",
    ogImage: "/forProject_Section/subbie-street-garage-proto/homepage_hero.png",
    content: [
      {
        type: "paragraph",
        text: "Subbie Street Garage (Prototype) is the foundational concept and interactive prototype developed for a dedicated Subaru mechanical and performance workshop in Dandenong, Victoria. Crafted with pure HTML5, CSS3, and custom SVG animation, the prototype establishes the brand's aggressive motorsport identity before any production framework is introduced.",
      },
      {
        type: "paragraph",
        text: "This case study covers how the prototype was used to validate visual direction, test animated SVG concepts, and serve as the blueprint for the full Next.js production application that followed.",
      },
      {
        type: "heading",
        text: "The problem: generic automotive doesn't speak to enthusiasts",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Automotive specialist workshops need visual branding and digital interfaces that resonate specifically with passionate car enthusiasts and track drivers — not generic repair-shop templates. For a Subaru-focused business, the visual language had to reflect the boxer engine, rally heritage, and performance culture.",
      },
      {
        type: "heading",
        text: "Project goals and audience",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The target audience is Subaru WRX, STI, Forester XT, and BRZ owners, track day enthusiasts seeking performance tuning, and everyday drivers looking for certified boxer engine maintenance. The goal was to prototype an energetic, motorsport-inspired digital interface that speaks directly to this community.",
      },
      {
        type: "list",
        items: [
          "Establish a bold motorsport visual identity for the brand.",
          "Validate the animated SVG boxer engine concept as a brand hook.",
          "Prototype the high-contrast colour palette and racing livery textures.",
          "Test service card layouts and driver testimonial presentation.",
          "Gather feedback on the visual direction before investing in production development.",
        ],
      },
      {
        type: "heading",
        text: "Tech stack and why these choices",
        level: 2,
      },
      {
        type: "paragraph",
        text: "For a prototype focused on brand validation, vanilla HTML5 and CSS3 were the right choice — no framework overhead, instant loading, and full control over visual details. The scope was narrow: validate visuals, not build a full application.",
      },
      {
        type: "list",
        items: [
          "Semantic HTML5 — for a lightweight, fast-loading prototype.",
          "CSS3 Custom Properties — to define and test the motorsport colour theme (#0B0B0B, #F36C21, #FFFFFF).",
          "CSS Keyframe Animations — to drive the boxer engine piston stroke cycles.",
          "Custom inline SVG — for the boxer engine schematic and chevron racing livery textures.",
          "Google Fonts (Bebas Neue and Inter) — for display headers and body text.",
          "Vercel — for fast global deployment and easy sharing of the prototype.",
        ],
      },
      {
        type: "heading",
        text: "The animated SVG boxer engine",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The centerpiece of the prototype is a custom SVG vector graphic illustrating horizontally opposed pistons firing in synchrony. CSS keyframes animate each piston's stroke cycle, with the opposing pistons moving in opposite directions to mimic the real boxer engine firing pattern. The animation loops continuously but at a low frequency to avoid distraction.",
      },
      {
        type: "code",
        language: "css",
        code: `.boxer-piston-1 {
  animation: piston-stroke 2s ease-in-out infinite;
}

.boxer-piston-2 {
  animation: piston-stroke 2s 0.1s ease-in-out infinite;
}

@keyframes piston-stroke {
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(-12px); }
  50% { transform: translateY(0); }
  75% { transform: translateY(12px); }
}`,
      },
      {
        type: "image",
        src: "/forProject_Section/subbie-street-garage-proto/homepage_hero.png",
        alt: "Subbie Street Garage prototype hero section featuring animated boxer engine SVG and dark motorsport typography",
        caption:
          "The hero section features the animated SVG boxer engine as the primary visual anchor.",
      },
      {
        type: "heading",
        text: "Motorsport visual language",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The dark high-contrast colour palette (black, orange, white) and angled chevron race patterns establish an aggressive motorsport identity. CSS gradients add carbon-fiber texture accents to section backgrounds, reinforcing the performance aesthetic.",
      },
      {
        type: "list",
        items: [
          "Black (#0B0B0B) — primary background, evoking asphalt and workshop bays.",
          "Orange (#F36C21) — accent color, matching Subaru WRX brake calipers.",
          "White (#FFFFFF) — text and contrast elements for readability.",
          "Chevron livery patterns — applied as CSS background images on service cards.",
        ],
      },
      {
        type: "image",
        src: "/forProject_Section/subbie-street-garage-proto/services_section.png",
        alt: "Subbie Street Garage prototype service cards showing boxer rebuilds, ECU tuning, and logbook maintenance",
        caption:
          "Service cards use the orange accent against dark backgrounds for clear hierarchy.",
      },
      {
        type: "heading",
        text: "Key challenges",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The biggest challenge was designing complex vector graphics and smooth continuous piston animations purely in CSS and SVG while keeping the site featherweight and compatible across mobile and desktop browsers. The SVG had to be optimised for both crispness at large sizes and performance on mobile devices.",
      },
      {
        type: "callout",
        text: "The piston animation uses transform-based keyframes rather than layout-affecting properties, keeping it eligible for GPU acceleration and avoiding jank on lower-end devices.",
      },
      {
        type: "heading",
        text: "Lessons learned",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Prototyping brand visual hooks — like the animated boxer engine — early provided an engaging identity that established the design foundation for the full Next.js production build. The prototype served as both a design system testbed and a stakeholder presentation tool.",
      },
      {
        type: "heading",
        text: "What's next",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The visual motifs validated in this prototype were carried directly into the full Subbie Street Garage production website — reimagined as React components with the same colour palette, SVG engine reference, and motorsport typography, but now with routing, form validation, and comprehensive Local SEO.",
      },
    ],
  },

  "stylish-flow-hair-beauty-case-study": {
    slug: "stylish-flow-hair-beauty-case-study",
    title:
      "Building Stylish Flow Hair & Beauty: A Lightweight Vanilla CSS Luxury Salon Website",
    description:
      "How I crafted an ultra-fast, luxury salon website using pure semantic HTML5, modern CSS3 custom properties, and vanilla JavaScript — featuring a signature gold scroll-progress line and filterable masonry gallery.",
    datePublished: "2026-08-11",
    dateModified: "2026-08-11",
    author: "Sorence Nora",
    tag: "Project Case Study",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Vanilla JavaScript",
      "Responsive Design",
      "Case Study",
    ],
    readingTime: "6 min read",
    ogImage: "/forProject_Section/stylish-flow-hair-beauty/homepage_hero.png",
    content: [
      {
        type: "paragraph",
        text: "Stylish Flow Hair & Beauty is a bespoke marketing website built for a premier Melbourne salon offering haircuts, balayage, bespoke colour treatments, and beauty therapies. Developed with clean semantic HTML5, modern CSS3 custom properties, and vanilla JavaScript, the site delivers a high-end luxury feel without heavy framework overhead.",
      },
      {
        type: "paragraph",
        text: "This case study walks through how a deliberately lightweight stack — no frameworks, no build step bloat — can still produce a rich, interactive experience with fluid animations, a filterable masonry gallery, and a signature scroll-progress indicator.",
      },
      {
        type: "heading",
        text: "The problem: bloated salon websites",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Traditional salon websites often suffer from slow page loads, bloated third-party templates, and clunky mobile layouts. Prospective clients struggled to browse hairstyle galleries, check pricing, or find the salon's address and opening hours without friction.",
      },
      {
        type: "heading",
        text: "Project goals and audience",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The target audience is Melbourne residents seeking haircuts, colouring, balayage, and beauty services; wedding and event groups booking styling packages; and mobile users checking opening hours and service pricing. The goal was an elegant, ultra-fast web presence.",
      },
      {
        type: "list",
        items: [
          "Highlight the salon's premium positioning with a luxury visual system.",
          "Present an extensive service and pricing menu clearly and scannably.",
          "Showcase before-and-after transformations in a responsive gallery.",
          "Embed client testimonials prominently for social proof.",
          "Make appointment contact and location details effortless to find.",
        ],
      },
      {
        type: "heading",
        text: "Tech stack and why these choices",
        level: 2,
      },
      {
        type: "paragraph",
        text: "For a marketing site where visual impact and load speed are everything, I chose a deliberately minimal stack with zero framework overhead. This delivers near-zero load latency and pristine Core Web Vitals.",
      },
      {
        type: "list",
        items: [
          "Semantic HTML5 — for accessibility, SEO, and a clean document structure.",
          "Modern CSS3 (Custom Properties, Flexbox, Grid) — for the layout system, dark-mode-ready tokens, and the signature gold scroll-progress bar.",
          "Vanilla JavaScript (ES6+) — for smooth scrolling, mobile drawer navigation, gallery filtering, and scroll-progress tracking.",
          "Lucide Icons — for clean vector icon accents.",
          "Google Fonts (Manrope and Inter) — for a refined typographic hierarchy.",
          "Vercel Edge Network — for fast global hosting.",
        ],
      },
      {
        type: "image",
        src: "/forProject_Section/stylish-flow-hair-beauty/homepage_hero.png",
        alt: "Stylish Flow Hair & Beauty homepage hero section with custom gold ribbon brand mark and appointment call to action",
        caption:
          "The homepage hero features a custom gold ribbon brand mark and a direct booking call to action.",
      },
      {
        type: "heading",
        text: "The signature gold scroll-progress flow line",
        level: 2,
      },
      {
        type: "paragraph",
        text: "A distinctive feature of the site is a gold scroll-progress line that runs across the top of the viewport. It grows as the user scrolls down and shrinks as they scroll back up, providing a continuous visual cue of reading depth. The effect uses a CSS transform on a pseudo-element driven by scroll event listeners.",
      },
      {
        type: "code",
        language: "javascript",
        code: `window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const max = document.body.scrollHeight - window.innerHeight;
  const progress = Math.min(scrolled / max, 1);
  progressBar.style.transform = \`scaleX(\${progress})\`;
});`,
      },
      {
        type: "callout",
        text: "The progress bar uses transform scaleX rather than width changes, so the animation stays on the compositor thread and avoids layout thrashing.",
      },
      {
        type: "heading",
        text: "Filterable masonry gallery",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The transformation gallery uses CSS Grid with grid-auto-rows to create a responsive masonry layout. JavaScript handles category filtering: clicking a category button hides non-matching items and reflows the grid without a page reload.",
      },
      {
        type: "image",
        src: "/forProject_Section/stylish-flow-hair-beauty/gallery_section.png",
        alt: "Stylish Flow Hair & Beauty filterable client transformation gallery displaying hair styling and colour results",
        caption:
          "The gallery reflows instantly when category filters are applied.",
      },
      {
        type: "heading",
        text: "Service and testimonial presentation",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Services are organized into collapsible accordion sections by category — cutting, colouring, balayage, keratin, and beauty treatments. Each service shows duration and pricing, with a 'book now' link that scrolls to the contact form.",
      },
      {
        type: "image",
        src: "/forProject_Section/stylish-flow-hair-beauty/services_section.png",
        alt: "Stylish Flow Hair & Beauty comprehensive service menu with pricing for styling, cuts, colour, and treatments",
        caption:
          "The service menu uses accordion sections to keep the page scannable.",
      },
      {
        type: "image",
        src: "/forProject_Section/stylish-flow-hair-beauty/testimonials_section.png",
        alt: "Stylish Flow Hair & Beauty client testimonials and customer reviews highlighting service satisfaction",
        caption:
          "Client testimonials are presented as a carousel with auto-pause on hover.",
      },
      {
        type: "heading",
        text: "Responsive design",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The entire site is designed mobile-first. The masonry grid collapses to a single column on small screens, the service accordion becomes the primary navigation pattern, and the contact form fields stack vertically. CSS Grid and Flexbox handle all layout transitions without media query overrides.",
      },
      {
        type: "heading",
        text: "Key challenges",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The main challenge was achieving fluid animations, responsive masonry layouts, and instant tab filtering using purely vanilla JavaScript and CSS — no frameworks. The solution relied on CSS Grid's auto-flow for the masonry effect and a lightweight filtering function that toggles a hidden class on gallery items.",
      },
      {
        type: "callout",
        text: "A CSS-only smooth-scroll polyfill ensures the anchor navigation works consistently across browsers, while the scroll event listener is debounced with requestAnimationFrame to maintain 60fps.",
      },
      {
        type: "heading",
        text: "Lessons learned",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Mastering high-performance vanilla web design demonstrates how much can be achieved without JavaScript framework overhead. The result was near-zero load latency, pristine Core Web Vitals, and a site that feels instant on every device.",
      },
      {
        type: "heading",
        text: "What's next",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Future improvements include integrating an automated calendar availability engine, adding customer review submission via API, and implementing gift card purchase capabilities.",
      },
    ],
  },

  "brows-by-her-case-study": {
    slug: "brows-by-her-case-study",
    title:
      "Building Brows By Her: A Next.js Luxury Beauty Booking Website Case Study",
    description:
      "How I built a luxury brow artistry studio website with Next.js 14, TypeScript, Tailwind CSS, and Cal.com scheduling — combining refined aesthetics with type-safe form validation and seamless appointment booking.",
    datePublished: "2026-08-10",
    dateModified: "2026-08-10",
    author: "Sorence Nora",
    tag: "Project Case Study",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Hook Form",
      "Zod",
      "Cal.com",
      "Case Study",
    ],
    readingTime: "7 min read",
    ogImage: "/forProject_Section/brows-by-her/homepage_hero.png",
    content: [
      {
        type: "paragraph",
        text: "Brows By Her is a modern, responsive web application and brand presence created for an eyebrow artistry studio in Melbourne, Australia. Built with Next.js 14, React 18, TypeScript, and Tailwind CSS, the site showcases signature beauty services including brow sculpting, brow lamination, hybrid dye, and cosmetic tattooing.",
      },
      {
        type: "paragraph",
        text: "This case study walks through the design and development of a luxury beauty booking website — from establishing a high-end visual system, through building type-safe validated forms, to integrating Cal.com for seamless appointment scheduling.",
      },
      {
        type: "heading",
        text: "The problem: fragmented beauty bookings",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Eyebrow studios often struggle with fragmented customer booking and answering repetitive inquiries about pricing and aftercare via direct messaging. Without a dedicated website, the business had no central place to present its portfolio, communicate its service offerings, or streamline the booking process.",
      },
      {
        type: "heading",
        text: "Project goals and audience",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The target audience includes clients seeking professional brow shaping, lamination, tinting, and cosmetic tattooing in Melbourne; beauty enthusiasts evaluating artist portfolios; and existing clients booking routine maintenance sessions.",
      },
      {
        type: "list",
        items: [
          "Establish a refined luxury aesthetic that communicates professionalism and attention to detail.",
          "Present a comprehensive treatment catalog with procedure times, frequencies, and aftercare guidance.",
          "Showcase a transformation gallery to build confidence in the artist's skill.",
          "Communicate transparent, tiered pricing without hidden fees.",
          "Enable direct appointment booking through integrated Cal.com scheduling.",
        ],
      },
      {
        type: "heading",
        text: "Tech stack and why these choices",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The project uses a modern React framework stack chosen for its ability to deliver a fast, type-safe, and interactive booking experience while maintaining the luxury feel the brand requires.",
      },
      {
        type: "list",
        items: [
          "Next.js 14 (App Router) — for file-based routing, server-side rendering, and optimised metadata.",
          "React 18 — for component-based composition and state management.",
          "TypeScript — to enforce consistent data shapes across treatments, pricing tiers, and gallery items.",
          "Tailwind CSS — for mobile-first layouts and a shared visual system.",
          "Framer Motion — for tasteful scroll-reveal transitions and micro-interactions on cards and CTAs.",
          "Lucide React — for accessible interface icons.",
          "React Hook Form + Zod — for instant field validation on the contact and inquiry forms.",
          "next-themes — for a polished dark mode toggle.",
          "Cal.com — for embedded real-time appointment scheduling.",
        ],
      },
      {
        type: "image",
        src: "/forProject_Section/brows-by-her/homepage_hero.png",
        alt: "Brows By Her luxury salon homepage hero section with elegant typography, studio tagline, and direct booking call to action",
        caption:
          "The homepage hero establishes the luxury aesthetic with warm gold, charcoal, and cream tones.",
      },
      {
        type: "heading",
        text: "Visual system and branding",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The colour palette — cream, warm gold, and charcoal — creates an ultra-clean luxury feel. Custom serif display fonts are paired with a clean sans-serif body font for readability. Framer Motion adds restrained scroll-reveal animations to sections and hover effects on service cards.",
      },
      {
        type: "callout",
        text: "Motion is used as an accent: it helps establish rhythm and polish, but the content and navigation remain fully usable without relying on animation.",
      },
      {
        type: "heading",
        text: "Treatment catalog and gallery",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Each service — brow sculpt, lamination, hybrid tint, cosmetic tattoo — has its own breakdown with procedure times, recommended frequencies, preparation notes, and aftercare guidance. The transformation gallery is categorised and presented in a responsive grid with a lightbox for closer inspection.",
      },
      {
        type: "image",
        src: "/forProject_Section/brows-by-her/services_page.png",
        alt: "Brows By Her services catalog showcasing brow sculpt, lamination, hybrid tint, and cosmetic tattoo treatment options",
        caption:
          "The service catalog uses consistent card layouts with clear treatment descriptions.",
      },
      {
        type: "image",
        src: "/forProject_Section/brows-by-her/gallery_page.png",
        alt: "Brows By Her client transformation gallery with responsive photo grid and high-definition beauty results",
        caption:
          "The gallery provides high-resolution before-and-after results with lightbox inspection.",
      },
      {
        type: "heading",
        text: "Type-safe form validation",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Contact and inquiry forms are built with React Hook Form and Zod schemas, enforcing strict data validation with instant field-level feedback and toast notifications. Next.js Route Handlers (/api/contact, /api/subscribe) process the submissions on the backend.",
      },
      {
        type: "code",
        language: "typescript",
        code: `import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});`,
      },
      {
        type: "heading",
        text: "Cal.com scheduling integration",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The booking flow embeds Cal.com for real-time appointment scheduling. Clients can select their preferred date, time, and service type without any back-and-forth messaging. The embedded widget is styled to match the brand's colour palette.",
      },
      {
        type: "image",
        src: "/forProject_Section/brows-by-her/booking_page.png",
        alt: "Brows By Her appointment booking page integrated with Cal.com for real-time consultation scheduling",
        caption:
          "Cal.com is seamlessly integrated into the brand's visual system for appointment booking.",
      },
      {
        type: "heading",
        text: "Responsive design and dark mode",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The site is built mobile-first with Tailwind CSS. Service cards and gallery images collapse into single-column layouts on small screens, then expand to multi-column grids on desktop. A dark mode toggle, powered by next-themes, switches the entire interface between light and dark variants.",
      },
      {
        type: "heading",
        text: "Key challenges",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The main challenge was balancing aesthetic minimalism with rich commercial information architecture — the site needed to feel luxurious while communicating all the necessary service details, pricing, and booking actions. The solution was a clear visual hierarchy with ample whitespace, progressive disclosure for detailed service info, and consistent CTAs throughout.",
      },
      {
        type: "paragraph",
        text: "Integrating third-party Cal.com booking workflows seamlessly into the custom brand UI while preserving responsive usability across device sizes required careful attention to the embed configuration and breakpoint handling.",
      },
      {
        type: "heading",
        text: "Lessons learned",
        level: 2,
      },
      {
        type: "paragraph",
        text: "This project reinforced how much structure typed static data and Zod schemas provide for a content-heavy site. Building a consistent responsive catalog and gallery taught me how Tailwind utility composition plus Next.js Image optimization keeps a large set of images feeling fast. Using Framer Motion for scroll-reveal also sharpened my sense of when subtle motion adds polish and when it becomes noise.",
      },
      {
        type: "heading",
        text: "What's next",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Future improvements include integrating an automated SMS/email appointment reminder system, introducing an interactive brow shape visualizer, and building an e-commerce shelf for aftercare serums and styling balms.",
      },
    ],
  },

  "yenzhen-tailoring-case-study": {
    slug: "yenzhen-tailoring-case-study",
    title:
      "Building the Yenzhen Tailoring Website: A Next.js, Tailwind & Static Data Case Study",
    description:
      "How I built a marketing website for a custom sublimation sportswear business — a product catalog of over forty items, a finished-works gallery, and a lead-generation flow, all powered by typed static data and a prepared Supabase schema.",
    datePublished: "2024-07-10",
    dateModified: "2024-07-10",
    author: "Sorence Nora",
    tag: "Project Case Study",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "Case Study",
    ],
    readingTime: "7 min read",
    ogImage: "/forProject_Section/yenzhen-tailoring/homepage_pagev3.png",
    content: [
      {
        type: "paragraph",
        text: "Yenzhen Tailoring is a client project for a custom sublimation sportswear business specializing in basketball jerseys, team uniforms, and complete team packages. The goal was to create a marketing website that could present the brand, showcase more than forty products, display finished work, and give potential customers a clear way to start an inquiry.",
      },
      {
        type: "paragraph",
        text: "This case study walks through the project goals, frontend architecture, content model, responsive design decisions, and the prepared data layer that can support the next phase of the website.",
      },
      {
        type: "heading",
        text: "The problem: a sportswear business without a central web presence",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Before the website, the business relied on social channels to answer questions and collect interest. That made it difficult for a new customer to review the full product range, understand the custom ordering process, inspect previous work, and find a direct path to request a quote. The site needed to turn that scattered experience into one focused journey.",
      },
      {
        type: "heading",
        text: "Project goals and audience",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The primary audience is made up of basketball team managers, coaches, schools, leagues, event organizers, and individual players looking for custom jerseys or sportswear. The website therefore needed to communicate the brand quickly, make the catalog easy to browse, build confidence through finished-work examples, and keep the contact flow visible.",
      },
      {
        type: "list",
        items: [
          "Introduce the Yenzhen Tailoring brand and its focus on custom sublimation sportswear.",
          "Present a large product catalog with clear categories and useful product details.",
          "Showcase completed uniforms and custom work in a responsive gallery.",
          "Explain the ordering process and give visitors a direct way to contact the business or request a quote.",
          "Keep the experience fast and consistent across mobile and desktop devices.",
        ],
      },
      {
        type: "heading",
        text: "Tech stack and why these choices",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The project is a content-heavy marketing site rather than an application that needs live database reads on every page. I used a static-first frontend stack that keeps content close to the pages while leaving a clear path toward a database-backed admin experience.",
      },
      {
        type: "list",
        items: [
          "Next.js 14 with the App Router — for file-based routing, optimized images, and a production-ready React frontend.",
          "React 18 — for reusable page and component composition.",
          "TypeScript — to keep product, gallery, and navigation data shapes consistent as the catalog grows.",
          "Tailwind CSS — for mobile-first layouts and a shared visual system across marketing pages and product grids.",
          "Framer Motion — for restrained scroll-reveal and hover motion that supports the brand without distracting from the catalog.",
          "Lucide React, clsx, and tailwind-merge — for accessible interface icons and predictable conditional class handling.",
          "Supabase and PostgreSQL — represented by a prepared SQL schema for future products, gallery items, quotes, contact messages, and admin workflows.",
        ],
      },
      {
        type: "heading",
        text: "Frontend architecture",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The site is organized around the customer journey: a homepage introduces the brand and directs visitors into the catalog, gallery, about page, and contact flow. Each page has a focused responsibility, while shared navigation and visual primitives keep the experience consistent.",
      },
      {
        type: "code",
        language: "text",
        code: `src/
  app/
    page.tsx
    products/page.tsx
    gallery/page.tsx
    about/page.tsx
    contact/page.tsx
  data/
    products.ts
    gallery.ts
    faqs.ts
  sql/
    schema.sql`,
      },
      {
        type: "heading",
        text: "Content architecture: typed static data",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Products, gallery entries, FAQs, testimonials, services, and navigation content live in typed TypeScript data files. This keeps the marketing content easy to review and update without introducing a CMS or a live database dependency for the first release. The pages consume those data files directly, so the catalog remains predictable and the build can optimize the rendered content.",
      },
      {
        type: "callout",
        text: "The current website is a static marketing experience. The Supabase schema is prepared for future CRUD functionality; it is not presented as a live query layer in the current release.",
      },
      {
        type: "heading",
        text: "Catalog and gallery experience",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The catalog contains more than forty sportswear items across categories such as basketball jerseys, volleyball jerseys, t-shirts, riding sleeves, warmers, and team packages. Category filtering and a responsive grid help visitors narrow the collection without losing the context of the wider range.",
      },
      {
        type: "image",
        src: "/forProject_Section/yenzhen-tailoring/products_page.png",
        alt: "Yenzhen Tailoring product catalog page showing a responsive grid of custom sportswear items with category filters",
        caption:
          "The product catalog uses category filtering to make a large collection easier to browse.",
      },
      {
        type: "paragraph",
        text: "The finished-works gallery provides social proof for customers evaluating a custom order. A responsive image grid keeps the portfolio usable on small screens, while the lightbox interaction gives visitors a closer look at the details of completed uniforms.",
      },
      {
        type: "image",
        src: "/forProject_Section/yenzhen-tailoring/gallery_page.png",
        alt: "Yenzhen Tailoring finished works gallery displaying completed custom sportswear projects in a responsive image grid with lightbox",
        caption:
          "Completed projects are presented in a gallery designed for quick browsing and closer inspection.",
      },
      {
        type: "heading",
        text: "Responsive design and motion",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The layout was designed mobile-first. Product cards, gallery tiles, navigation, and calls to action collapse into readable single-column arrangements on small screens, then expand into multi-column grids when more space is available. Tailwind utilities keep those breakpoint changes close to the markup they affect.",
      },
      {
        type: "image",
        src: "/forProject_Section/yenzhen-tailoring/homepage_pagev3.png",
        alt: "Yenzhen Tailoring homepage hero section with the brand name, tagline, and calls to action for browsing products and team packages",
        caption:
          "The homepage introduces the brand and routes visitors toward products, packages, and inquiries.",
      },
      {
        type: "paragraph",
        text: "Framer Motion adds scroll-reveal transitions and hover feedback to cards, gallery images, and primary calls to action. The motion is used as an accent: it helps establish rhythm and polish, but the content and navigation remain usable without relying on animation.",
      },
      {
        type: "image",
        src: "/forProject_Section/yenzhen-tailoring/homepage_mobilev2.png",
        alt: "Yenzhen Tailoring homepage rendered on a mobile viewport showing the responsive layout",
        caption:
          "The mobile layout keeps the hero, navigation, and primary calls to action accessible.",
      },
      {
        type: "heading",
        text: "Key challenges",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The first challenge was organizing a large catalog without overwhelming visitors. Typed data, category grouping, and a consistent card layout made it possible to scale the product collection while keeping each page scannable. Image optimization was also important because a sportswear catalog depends on photography but cannot afford unnecessarily heavy pages.",
      },
      {
        type: "paragraph",
        text: "The second challenge was creating a brand-led visual system that could work across marketing pages and dense product grids. The dark green and gold palette, brush-style wordmark, and shared typography had to remain readable at different sizes and across responsive breakpoints.",
      },
      {
        type: "callout",
        text: "A marketing site still has to make decisions for the visitor. The contact and quote path stays visible so browsing the catalog leads naturally toward a conversation with the business.",
      },
      {
        type: "heading",
        text: "Prepared backend and future phase",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The repository includes a Supabase and PostgreSQL schema for product categories, gallery images, templates, quote requests, contact messages, and ratings. Admin routes are also scaffolded, giving the next development phase a defined direction without pretending that those workflows are already connected in the current release.",
      },
      {
        type: "list",
        items: [
          "Connect the prepared schema to live CRUD operations for products, gallery items, templates, quotes, and contact messages.",
          "Add an authenticated admin panel with Supabase Auth.",
          "Build a persistent multi-step quote calculator.",
          "Send email notifications for new quote and contact submissions.",
          "Expand SEO and analytics support for product and inquiry traffic.",
        ],
      },
      {
        type: "heading",
        text: "Lessons learned",
        level: 2,
      },
      {
        type: "paragraph",
        text: "This project reinforced how much structure typed static data can provide for a content-heavy marketing site. Keeping content in reviewable files made the catalog and supporting pages straightforward to maintain, while the prepared schema preserved a clean migration path for future database features.",
      },
      {
        type: "paragraph",
        text: "It also highlighted the value of treating responsive design and motion as product decisions. A consistent mobile layout, optimized imagery, and restrained animation make a large visual catalog feel approachable instead of noisy.",
      },
      {
        type: "heading",
        text: "Results",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The result is a complete, responsive marketing website for Yenzhen Tailoring. It presents the brand, product range, finished work, ordering process, and contact flow in one place, while the repository is prepared for the next stage of admin and quote functionality.",
      },
      {
        type: "heading",
        text: "What's next",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The next phase would turn the prepared data layer into live workflows: persistent quote requests, authenticated content management, notifications, and richer customer feedback. That would extend the site from a strong marketing presence into a complete inquiry and order-support platform.",
      },
    ],
  },

  "student-clearance-monitor-case-study": {
    slug: "student-clearance-monitor-case-study",
    title:
      "Building the Student Clearance Monitor: A Next.js & Supabase Case Study",
    description:
      "How I built a real-time student clearance system for my OJT project using Next.js App Router, TypeScript, and Supabase. From problem to implementation.",
    datePublished: "2024-06-01",
    dateModified: "2024-06-01",
    author: "Sorence Nora",
    tag: "Project Case Study",
    tags: ["Next.js", "Supabase", "TypeScript", "Case Study"],
    readingTime: "6 min read",
    ogImage: "/forProject_Section/scs.png",
    content: [
      {
        type: "paragraph",
        text: "During my On-the-Job Training at STI College, San Jose del Monte, I built the Student Clearance Monitor — a web application that digitizes the manual clearance process students go through when graduating. Instead of passing physical forms between the admin office, cashier, program head, and registrar, the system lets each department update clearance status in real time through a shared database.",
      },
      {
        type: "paragraph",
        text: "This case study walks through the architecture, key decisions, and lessons learned from building a production-ready Next.js frontend with a Supabase backend.",
      },
      {
        type: "heading",
        text: "The problem: paper forms and disconnected workflows",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The existing clearance process relied on paper forms that students had to physically carry from one department to the next. A single lost form could delay a student's graduation clearance by days. Staff had no central place to check a student's overall status — you had to call or visit each department individually.",
      },
      {
        type: "heading",
        text: "Tech stack and why these choices",
        level: 2,
      },
      {
        type: "paragraph",
        text: "I chose technologies that matched the constraints of the project: a solo frontend developer, a short timeline, and the need for real-time updates.",
      },
      {
        type: "list",
        items: [
          "Next.js (App Router) — for server-side rendering, routing, and a familiar React development experience.",
          "TypeScript — to catch data shape errors across the frontend-backend boundary before runtime.",
          "Tailwind CSS — for fast, consistent styling without writing custom CSS from scratch.",
          "Supabase — for PostgreSQL storage and real-time subscriptions without managing backend infrastructure.",
        ],
      },
      {
        type: "heading",
        text: "Frontend architecture",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The frontend uses the Next.js App Router structure, separating layouts from pages. Each department — admin, cashier, program head, registrar — gets its own section within the application, showing only the records relevant to that role.",
      },
      {
        type: "paragraph",
        text: "Data is fetched server-side via the Supabase client, so the initial page load includes the current clearance status without requiring a client-side round trip. Real-time updates are handled through Supabase's subscription model, so when one department marks a student's clearance, the change propagates to all other open views.",
      },
      {
        type: "code",
        language: "tsx",
        code: `import { createClient } from "@/lib/supabase/client";

export async function getClearanceStatus(studentId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("clearances")
    .select(\`
      *,
      student:students!inner(name, student_number)
    \`)
    .eq("student_id", studentId)
    .single();

  return { data, error };
}`,
      },
      {
        type: "heading",
        text: "Key challenges",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The biggest challenge was designing the data model so each department could see only their relevant records while still understanding the overall student status. The solution was department-scoped database views in Supabase, combined with UI that clearly shows which departments have completed their clearance step.",
      },
      {
        type: "callout",
        text: "Real-time updates add a layer of complexity: you need to handle the case where a department completes a step while another staff member is viewing the list. Supabase's real-time subscriptions handled this gracefully, but the UI needed explicit loading states to avoid showing stale data briefly.",
      },
      {
        type: "heading",
        text: "Lessons learned",
        level: 2,
      },
      {
        type: "paragraph",
        text: "This project taught me the value of designing data visibility at the schema level rather than filtering in the frontend. Department-scoped views were more reliable and performant than fetching all records and filtering client-side.",
      },
      {
        type: "paragraph",
        text: "I also learned how to balance a minimal, focused interface with the need for staff to understand the overall workflow — the dashboard needed at-a-glance status indicators without overwhelming the user with detail.",
      },
      {
        type: "heading",
        text: "What's next",
        level: 2,
      },
      {
        type: "paragraph",
        text: "If I were to continue this project, I'd add staff authentication so each person logs into their own department view, PDF export for clearance reports, and student-facing status tracking so students can check their own clearance progress.",
      },
    ],
  },

  "structuring-nextjs-app-router": {
    slug: "structuring-nextjs-app-router",
    title: "How I Structure Frontend Projects with Next.js App Router",
    description:
      "My approach to organizing Next.js projects using the App Router — folder structure, data fetching patterns, and component organization for maintainable frontend applications.",
    datePublished: "2024-05-15",
    dateModified: "2024-05-15",
    author: "Sorence Nora",
    tag: "Development Practices",
    tags: ["Next.js", "Frontend Development", "Architecture"],
    readingTime: "5 min read",
    ogImage: "/forProject_Section/scs.png",
    content: [
      {
        type: "paragraph",
        text: "When I started building the Student Clearance Monitor, I spent time upfront deciding on a folder structure that would scale as the application grew. The right structure makes it easy to find components, avoids prop drilling, and keeps data fetching logic close to where it's used.",
      },
      {
        type: "heading",
        text: "Folder structure",
        level: 2,
      },
      {
        type: "paragraph",
        text: "I use a domain-oriented structure under the App Router, organizing by feature rather than by file type:",
      },
      {
        type: "code",
        language: "text",
        code: `src/
  app/
    layout.tsx
    page.tsx
    projects/
      [slug]/
        page.tsx
    about/
      page.tsx
    contact/
      page.tsx
    lib/
      supabase.ts
      utils.ts
    components/
      layout/
        Navbar.tsx
        Footer.tsx
      ui/
        Button.tsx
        Badge.tsx
      effects/
        ScrollReveal.tsx
        CustomCursor.tsx
    lib/
      projects.ts
      stack.ts
`,
      },
      {
        type: "heading",
        text: "Server vs. Client components",
        level: 2,
      },
      {
        type: "paragraph",
        text: 'I default to Server Components and only mark a component with "use client" when it needs interactivity — form handling, mouse tracking, animations. This keeps the initial JavaScript bundle small and improves time-to-interactive.',
      },
      {
        type: "callout",
        text: 'Rule of thumb: if the component uses useState, useEffect, or event handlers that update state, it needs "use client". Everything else can stay a Server Component.',
      },
      {
        type: "heading",
        text: "Data fetching patterns",
        level: 2,
      },
      {
        type: "paragraph",
        text: "For server-rendered data, I fetch directly in the page or layout. This means the initial HTML includes the data, improving both SEO and perceived performance. Client-only fetches are used for filters, search, or user-triggered refreshes.",
      },
      {
        type: "heading",
        text: "Component organization",
        level: 2,
      },
      {
        type: "paragraph",
        text: "UI components (Button, Badge, Input) live in components/ui and are framework-agnostic where possible. Layout components (Navbar, Footer) live in components/layout. Interactive effects (cursor, scroll animation) live in components/effects and are isolated as client components.",
      },
      {
        type: "heading",
        text: "Styling approach",
        level: 2,
      },
      {
        type: "paragraph",
        text: "I use Tailwind CSS with a shared globals.css that defines the design system — colors, typography scales, component primitives. This keeps styles consistent across pages without CSS-in-JS overhead.",
      },
      {
        type: "heading",
        text: "Conclusion",
        level: 2,
      },
      {
        type: "paragraph",
        text: "A well-structured project pays dividends as it grows. Starting with clear conventions for routing, component boundaries, and data fetching makes it easier to onboard collaborators and maintain the codebase over time.",
      },
    ],
  },

  "responsive-design-tailwind": {
    slug: "responsive-design-tailwind",
    title: "Responsive Web Design Patterns with Tailwind CSS",
    description:
      "The responsive design principles and Tailwind CSS utilities I use to build interfaces that work across every screen size — from mobile to desktop.",
    datePublished: "2024-04-20",
    dateModified: "2024-04-20",
    author: "Sorence Nora",
    tag: "Responsive Design",
    tags: ["Tailwind CSS", "Responsive Design", "CSS"],
    readingTime: "4 min read",
    ogImage: "/forProject_Section/scs.png",
    content: [
      {
        type: "paragraph",
        text: "Responsive design is about more than just making things fit on a small screen. It's about ensuring the experience works well across the full range of devices users might have — from a 320px phone to a 1440px+ desktop monitor.",
      },
      {
        type: "heading",
        text: "Mobile-first breakpoints",
        level: 2,
      },
      {
        type: "paragraph",
        text: "I design mobile-first: start with the smallest screen and add complexity as space allows. Tailwind's default breakpoints (sm, md, lg, xl, 2xl) map well to common device sizes.",
      },
      {
        type: "code",
        language: "html",
        code: `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <article class="p-6 border border-line rounded-[6px]">
    <h3 class="text-lg font-semibold mb-2">Card title</h3>
    <p class="text-ink-1">Description here.</p>
  </article>
</div>`,
      },
      {
        type: "heading",
        text: "Flexible grids with Tailwind",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Instead of fixed columns, I use CSS Grid and Flexbox with Tailwind's utility classes. This automatically adapts the layout as the viewport changes, without writing media queries.",
      },
      {
        type: "list",
        items: [
          "grid-cols-1 md:grid-cols-2 — stacks vertically on mobile, two columns on medium screens.",
          "gap-4 sm:gap-6 — increases spacing as the screen grows.",
          "text-sm md:text-base — scales font size responsively.",
        ],
      },
      {
        type: "heading",
        text: "Images and media",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Tailwind's object-cover, aspect-ratio utilities, and responsive image sizing ensure media never breaks the layout. I use the sizes attribute on responsive images to help the browser choose the right width.",
      },
      {
        type: "callout",
        text: "On the Student Clearance Monitor, the dashboard uses a responsive grid that shows one column on mobile and two on desktop, ensuring department staff can access the system from any device.",
      },
      {
        type: "heading",
        text: "Content priority",
        level: 2,
      },
      {
        type: "paragraph",
        text: "On smaller screens, less essential elements are hidden with hidden md:flex or reordered with flex order utilities. The core content — the data table or form — always comes first.",
      },
    ],
  },
  "typescript-strict-mode-patterns": {
    slug: "typescript-strict-mode-patterns",
    title: "TypeScript Strict Mode: Patterns I Use in Every Project",
    description:
      "How I use TypeScript strict mode, safer compiler options, discriminated unions, and runtime validation to catch bugs early and keep frontend codebases maintainable.",
    datePublished: "2024-09-01",
    dateModified: "2024-09-01",
    author: "Sorence Nora",
    tag: "TypeScript",
    tags: ["TypeScript", "Frontend Development", "Architecture", "Type Safety"],
    readingTime: "7 min read",
    ogImage: "/og-image.svg",
    content: [
      {
        type: "paragraph",
        text: "TypeScript becomes most valuable when it helps prevent invalid states instead of simply adding type annotations to JavaScript. In my projects, I enable strict checking from the beginning and use types to make component contracts, API responses, and application state easier to understand. The goal is not to make every line complicated with generics. It is to make incorrect assumptions visible while the code is being written.",
      },
      {
        type: "paragraph",
        text: "This approach is especially useful in applications with forms, dashboards, reusable components, and data coming from APIs or databases. A small mismatch in a product, order, or user record can otherwise travel through several components before becoming a runtime bug.",
      },
      {
        type: "heading",
        text: "Start with strict compiler settings",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The strict option enables a group of checks that make TypeScript less permissive. I also consider additional compiler options that expose common assumptions around array access and optional properties. These settings may require fixing older code, but that work creates a much more predictable foundation.",
      },
      {
        type: "code",
        language: "json",
        filename: "tsconfig.json",
        code: `{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitOverride": true,
    "noFallthroughCasesInSwitch": true
  }
}`,
      },
      {
        type: "list",
        items: [
          "strict — enables important checks such as strictNullChecks and noImplicitAny.",
          "noUncheckedIndexedAccess — makes indexed array and record access account for missing values.",
          "exactOptionalPropertyTypes — distinguishes an omitted property from a property explicitly assigned undefined.",
          "noImplicitOverride — helps make intentional class method overrides explicit.",
          "noFallthroughCasesInSwitch — catches accidental switch-case fallthrough.",
        ],
      },
      {
        type: "callout",
        text: "Enable strictness early in a project. Turning it on after a large application has grown can create a substantial cleanup task, so I prefer to establish the rules before adding many features.",
      },
      {
        type: "heading",
        text: "Handle nullable values explicitly",
        level: 2,
      },
      {
        type: "paragraph",
        text: "With strictNullChecks enabled, a value that may be missing must be handled before it is used. Instead of relying on non-null assertions everywhere, I prefer an early return, a fallback, or a clear branch that communicates what should happen when data is unavailable.",
      },
      {
        type: "code",
        language: "typescript",
        filename: "user-profile.ts",
        code: `interface User {
  id: string;
  name: string;
  email?: string;
}

function getContactLabel(user: User | null): string {
  if (!user) {
    return "Guest";
  }

  return user.email ?? "Email not provided";
}`,
      },
      {
        type: "paragraph",
        text: "Optional chaining is useful when a nested value is genuinely optional, while nullish coalescing provides a fallback only for null or undefined. I avoid replacing every access with optional chaining automatically: required data should still be validated and treated as required.",
      },
      {
        type: "heading",
        text: "Use unions to model real application states",
        level: 2,
      },
      {
        type: "paragraph",
        text: "A group of loosely related booleans can allow impossible combinations. For example, isLoading, hasError, and isComplete could all become true at the same time. A discriminated union describes the valid states directly and lets TypeScript narrow the available properties in each branch.",
      },
      {
        type: "code",
        language: "typescript",
        filename: "request-state.ts",
        code: `type RequestState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };

function renderMessage<T>(state: RequestState<T>): string {
  switch (state.status) {
    case "idle":
      return "Ready to load";
    case "loading":
      return "Loading...";
    case "success":
      return "Request completed";
    case "error":
      return state.message;
    default: {
      const exhaustiveCheck: never = state;
      return exhaustiveCheck;
    }
  }
}`,
      },
      {
        type: "callout",
        text: "Discriminated unions are particularly useful for API requests, multi-step forms, payment states, and workflows where only certain values are valid at each stage.",
      },
      {
        type: "heading",
        text: "Avoid any and define useful boundaries",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The any type disables checking at the point where it is used and can spread uncertainty into other parts of the application. I use unknown when a value has not been validated yet, then narrow it with a type guard or schema before using it. This is a safer boundary for values from local storage, third-party APIs, and untrusted input.",
      },
      {
        type: "code",
        language: "typescript",
        filename: "safe-parsing.ts",
        code: `function isStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) &&
    value.every((item: unknown) => typeof item === "string")
  );
}

function readLabels(value: unknown): string[] {
  if (!isStringArray(value)) {
    return [];
  }

  return value;
}`,
      },
      {
        type: "heading",
        text: "Type API data at the boundary",
        level: 2,
      },
      {
        type: "paragraph",
        text: "A TypeScript interface does not validate JSON at runtime. If an API response is malformed, a type assertion will not protect the application. I keep request and response types close to the service layer and use runtime validation when data crosses a trust boundary. This separates what the compiler knows from what the application has actually verified.",
      },
      {
        type: "list",
        items: [
          "Define clear request and response types for service functions.",
          "Treat external JSON as unknown until it has been checked.",
          "Use a runtime schema library when the response shape is important or complex.",
          "Normalize API data in one place rather than repeating defensive checks throughout the UI.",
          "Keep UI components focused on rendering already-understood data.",
        ],
      },
      {
        type: "heading",
        text: "Make component props precise",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Reusable components benefit from small, explicit prop interfaces. I avoid passing an entire database record when a component only needs an identifier and a display label. Narrow props reduce coupling and make components easier to test, reuse, and refactor.",
      },
      {
        type: "code",
        language: "tsx",
        filename: "status-badge.tsx",
        code: `type Status = "pending" | "approved" | "rejected";

interface StatusBadgeProps {
  status: Status;
  label: string;
}

export function StatusBadge({
  status,
  label,
}: StatusBadgeProps) {
  return (
    <span data-status={status}>
      {label}
    </span>
  );
}`,
      },
      {
        type: "heading",
        text: "Patterns I apply during code review",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Remove unnecessary any types and replace them with concrete types or unknown.",
          "Check array lookups and object access for missing values.",
          "Prefer narrowing and early returns over non-null assertions.",
          "Use literal unions for finite statuses instead of unrestricted strings.",
          "Keep type definitions aligned with actual runtime data.",
          "Avoid overengineering types that make simple code harder to understand.",
        ],
      },
      {
        type: "heading",
        text: "Conclusion",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Strict TypeScript is not about writing the largest possible type system. It is about making assumptions explicit and catching mistakes close to where they are introduced. By enabling strict compiler options, modeling states with unions, validating external data, and keeping component contracts focused, I can build applications that are easier to maintain as features and teams grow.",
      },
    ],
  },

  "supabase-realtime-data-patterns": {
    slug: "supabase-realtime-data-patterns",
    title: "Real-Time Data Patterns with Supabase and Next.js",
    description:
      "A practical approach to combining server-rendered initial data with Supabase Realtime subscriptions in Next.js dashboards, including channel cleanup, event handling, and data consistency.",
    datePublished: "2024-09-10",
    dateModified: "2024-09-10",
    author: "Sorence Nora",
    tag: "Backend Integration",
    tags: ["Supabase", "Next.js", "TypeScript", "React", "Realtime"],
    readingTime: "8 min read",
    ogImage: "/og-image.svg",
    content: [
      {
        type: "paragraph",
        text: "Dashboards and operational tools often need to reflect changes as soon as they happen. A staff member might update a record while another person is viewing the same list, and stale information can lead to duplicated work or incorrect decisions. Supabase Realtime provides a way to listen for database changes and update connected interfaces without repeatedly polling the database.",
      },
      {
        type: "paragraph",
        text: "In a Next.js application, I prefer a hybrid approach: load the initial data through the server, then use a small Client Component to subscribe to relevant changes. This keeps the first render useful while adding live updates only where interaction requires them.",
      },
      {
        type: "heading",
        text: "Separate initial loading from live updates",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Server Components are a good place to load the initial state because the page can render with data already available. A Client Component can then receive that initial data and manage the subscription lifecycle. This avoids making the entire page a Client Component just because one table needs live updates.",
      },
      {
        type: "code",
        language: "tsx",
        filename: "app/orders/page.tsx",
        code: `import { createClient } from "@/lib/supabase/server";
import { LiveOrders } from "@/components/live-orders";

export default async function OrdersPage() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("orders")
    .select("id, status, customer_name, updated_at")
    .order("updated_at", { ascending: false });

  if (error) {
    throw new Error("Unable to load orders");
  }

  return <LiveOrders initialOrders={data ?? []} />;
}`,
      },
      {
        type: "callout",
        text: "The server and browser Supabase clients have different responsibilities. Use the server-side client for server data access and the browser client for subscriptions that run inside Client Components. Follow the authentication and cookie-handling pattern recommended by your Supabase setup.",
      },
      {
        type: "heading",
        text: "Subscribe to database changes",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The subscription belongs in a Client Component because it depends on browser-side effects and must be cleaned up when the component unmounts. The example below listens for changes to a specific table and removes the channel during cleanup so the component does not leave unused subscriptions behind.",
      },
      {
        type: "code",
        language: "tsx",
        filename: "components/live-orders.tsx",
        code: `"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface Order {
  id: string;
  status: string;
  customer_name: string;
  updated_at: string;
}

interface LiveOrdersProps {
  initialOrders: Order[];
}

export function LiveOrders({ initialOrders }: LiveOrdersProps) {
  const [orders, setOrders] = useState(initialOrders);

  useEffect(() => {
    const supabase = createClient();

    const channel = supabase
      .channel("orders-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "orders",
        },
        (payload) => {
          if (payload.eventType === "INSERT") {
            const newOrder = payload.new as Order;
            setOrders((current) => [
              newOrder,
              ...current.filter((order) => order.id !== newOrder.id),
            ]);
          }

          if (payload.eventType === "UPDATE") {
            const updatedOrder = payload.new as Order;
            setOrders((current) =>
              current.map((order) =>
                order.id === updatedOrder.id ? updatedOrder : order
              )
            );
          }

          if (payload.eventType === "DELETE") {
            const deletedId = String(payload.old.id);
            setOrders((current) =>
              current.filter((order) => order.id !== deletedId)
            );
          }
        }
      )
      .subscribe();

    return () => {
      void supabase.removeChannel(channel);
    };
  }, []);

  return (
    <ul>
      {orders.map((order) => (
        <li key={order.id}>
          {order.customer_name} — {order.status}
        </li>
      ))}
    </ul>
  );
}`,
      },
      {
        type: "paragraph",
        text: "This example illustrates the event flow, but production applications should generate database types from the Supabase schema and validate or map event payloads before treating them as trusted application records. The exact payload shape also depends on the table configuration and the event being received.",
      },
      {
        type: "heading",
        text: "Configure Realtime deliberately",
        level: 2,
      },
      {
        type: "paragraph",
        text: "A client subscription will only receive the events that the project is configured to publish and that the connected user is permitted to read. Enable the relevant table for Realtime in the Supabase project configuration, review Row Level Security policies, and test subscriptions with users that have different access levels.",
      },
      {
        type: "list",
        items: [
          "Enable Realtime for only the tables that need live updates.",
          "Use Row Level Security to control which records each authenticated user can access.",
          "Subscribe to a narrow set of tables and events instead of listening to everything.",
          "Avoid placing service-role credentials in browser code.",
          "Confirm that the client has the expected authentication session before relying on private data events.",
        ],
      },
      {
        type: "heading",
        text: "Handle initial data and subscription timing",
        level: 2,
      },
      {
        type: "paragraph",
        text: "A common edge case occurs when a record changes between the initial server query and the moment the browser subscription becomes active. For interfaces where missing an event would be costly, consider a refresh or reconciliation query after the subscription is established. You can also provide a manual refresh action and periodically revalidate data as a fallback.",
      },
      {
        type: "callout",
        text: "Realtime events are a notification mechanism, not a replacement for a reliable source of truth. For critical workflows, reconcile the displayed state with the database and make update operations safe to retry.",
      },
      {
        type: "heading",
        text: "Choose between patching state and refetching",
        level: 2,
      },
      {
        type: "paragraph",
        text: "For a simple list, applying INSERT, UPDATE, and DELETE events directly to local state can feel immediate and reduce unnecessary requests. However, if an update changes sorting, pagination, aggregate totals, or related records, a targeted refetch may be safer than trying to reproduce all database logic in the browser.",
      },
      {
        type: "list",
        items: [
          "Patch local state when the event maps cleanly to one visible record.",
          "Refetch when an update affects sorting, filters, pagination, or derived totals.",
          "Deduplicate inserts by primary key because the same logical record may already be present.",
          "Represent connection and loading states so users know when the view may be stale.",
          "Use optimistic updates only when rollback behavior is clearly defined.",
        ],
      },
      {
        type: "heading",
        text: "Keep subscriptions scoped and clean",
        level: 2,
      },
      {
        type: "paragraph",
        text: "A subscription should exist only while the relevant interface needs it. If the user changes a selected project, organization, or record identifier, the old channel should be removed and a new channel created with the updated filter. Always return a cleanup function from the effect and avoid creating channels during render.",
      },
      {
        type: "heading",
        text: "Key challenges",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The main challenge is keeping server-rendered data, browser state, and database events consistent. Another challenge is access control: a subscription that works for an administrator may correctly return fewer events for a regular user because of Row Level Security. These behaviors need to be tested as part of the application rather than treated as frontend-only concerns.",
      },
      {
        type: "heading",
        text: "Conclusion",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Combining server-loaded initial data with scoped Supabase Realtime subscriptions gives Next.js dashboards a useful balance of fast first renders and responsive updates. Keep subscriptions inside focused Client Components, clean up channels, enforce database permissions, and reconcile data when correctness matters more than minimizing requests.",
      },
    ],
  },

  "framer-motion-scroll-reveals": {
    slug: "framer-motion-scroll-reveals",
    title: "Scroll-Reveal Animations with Framer Motion",
    description:
      "How I build subtle, accessible, and performant scroll-reveal animations with Framer Motion in React and Next.js without distracting from the content.",
    datePublished: "2024-09-18",
    dateModified: "2024-09-18",
    author: "Sorence Nora",
    tag: "Animation",
    tags: [
      "Framer Motion",
      "React",
      "Next.js",
      "UI Animation",
      "Accessibility",
    ],
    readingTime: "6 min read",
    ogImage: "/og-image.svg",
    content: [
      {
        type: "paragraph",
        text: "Motion can make a website feel more polished, but animation should support the content rather than compete with it. One effect I use selectively is scroll reveal: an element starts slightly offset or transparent and transitions into its normal position as it enters the viewport.",
      },
      {
        type: "paragraph",
        text: "Framer Motion, now commonly documented as Motion for React, provides declarative animation APIs that fit naturally into React components. With whileInView and viewport options, it is possible to create these effects without manually calculating scroll positions for every element.",
      },
      {
        type: "heading",
        text: "Install and create a reusable reveal component",
        level: 2,
      },
      {
        type: "paragraph",
        text: "I prefer to centralize common reveal behavior in a small component. This keeps transition timing consistent across sections and avoids repeating animation configuration throughout the application.",
      },
      {
        type: "code",
        language: "tsx",
        filename: "components/scroll-reveal.tsx",
        code: `"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}`,
      },
      {
        type: "paragraph",
        text: "The component uses a small vertical offset and opacity transition. The viewport amount controls how much of the element should be visible before the animation starts, while once prevents the reveal from replaying every time the visitor scrolls away and back.",
      },
      {
        type: "callout",
        text: "Keep the movement restrained. A small offset and a duration around half a second usually provide enough feedback without making the page feel slow.",
      },
      {
        type: "heading",
        text: "Reveal multiple elements with staggered timing",
        level: 2,
      },
      {
        type: "paragraph",
        text: "For a group of cards, a staggered animation can create a natural reading sequence. Instead of assigning a separate delay to every child manually, parent and child variants can coordinate the timing.",
      },
      {
        type: "code",
        language: "tsx",
        filename: "components/reveal-grid.tsx",
        code: `"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

export function RevealGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="grid gap-6 md:grid-cols-3"
    >
      {["Design", "Development", "Performance"].map((title) => (
        <motion.article key={title} variants={item}>
          <h3>{title}</h3>
          <p>Focused content for this section.</p>
        </motion.article>
      ))}
    </motion.div>
  );
}`,
      },
      {
        type: "heading",
        text: "Use the right animation for the content",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Not every section needs the same entrance. A heading may use a subtle fade, a card can move upward a few pixels, and a large image may benefit from a gentle scale transition. The important part is consistency: animations should feel like one design system rather than a collection of unrelated effects.",
      },
      {
        type: "list",
        items: [
          "Use opacity and transform for simple entrance effects.",
          "Keep travel distances short so content does not appear to fly across the screen.",
          "Use stagger only for related groups, such as cards or list items.",
          "Avoid animating large blocks of text line by line unless it serves a clear purpose.",
          "Do not hide essential information behind an animation that may fail to run.",
        ],
      },
      {
        type: "heading",
        text: "Respect reduced-motion preferences",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Some visitors prefer reduced motion because of vestibular sensitivity or personal accessibility settings. Motion provides the useReducedMotion hook so an interface can reduce or remove non-essential movement when the operating system requests it.",
      },
      {
        type: "code",
        language: "tsx",
        filename: "components/accessible-reveal.tsx",
        code: `"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function AccessibleReveal({
  children,
}: {
  children: ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y: 20 }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : { opacity: 1, y: 0 }
      }
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}`,
      },
      {
        type: "callout",
        text: "Accessibility should be part of the animation design, not a patch added at the end. The page must remain understandable and usable when motion is reduced or JavaScript is unavailable.",
      },
      {
        type: "heading",
        text: "Performance considerations in Next.js",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Animation components need client-side JavaScript, so I isolate them instead of marking an entire page as a Client Component. Keep static content and layout in Server Components where possible, and wrap only the elements that genuinely need animation.",
      },
      {
        type: "list",
        items: [
          "Prefer transform and opacity because they generally avoid layout recalculation.",
          "Avoid attaching expensive work to every scroll event.",
          "Do not animate dozens of large elements simultaneously.",
          "Use lazy loading and optimized image dimensions for media-heavy sections.",
          "Test on lower-powered mobile devices, not only a desktop development machine.",
          "Check the page with reduced motion enabled.",
        ],
      },
      {
        type: "heading",
        text: "Common mistakes to avoid",
        level: 2,
      },
      {
        type: "paragraph",
        text: "A frequent mistake is adding motion to every heading, paragraph, icon, and button. This creates unnecessary delay and makes it harder to scan the page. Another is using large offsets or long durations that cause visitors to wait for content. I also avoid making important navigation or form controls depend on a reveal animation.",
      },
      {
        type: "heading",
        text: "Conclusion",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Scroll reveals work best when they are subtle, consistent, and optional. By creating reusable variants, using viewport detection, respecting reduced-motion preferences, and isolating client-side animation components, I can add visual polish without compromising usability or the performance benefits of the Next.js App Router.",
      },
    ],
  },

  "seo-json-ld-nextjs": {
    slug: "seo-json-ld-nextjs",
    title: "SEO with JSON-LD Structured Data in Next.js",
    description:
      "How I add accurate Schema.org JSON-LD, metadata, canonical URLs, and article and breadcrumb structured data to Next.js pages to help search engines understand website content.",
    datePublished: "2024-09-25",
    dateModified: "2024-09-25",
    author: "Sorence Nora",
    tag: "SEO",
    tags: ["Next.js", "SEO", "Frontend Development", "JSON-LD", "Schema.org"],
    readingTime: "7 min read",
    ogImage: "/og-image.svg",
    content: [
      {
        type: "paragraph",
        text: "Search engine optimization is not only about choosing keywords and writing page titles. Search engines also need to understand what a page represents, who published it, and how it relates to the rest of a website. Structured data provides machine-readable context that can help search engines interpret that information.",
      },
      {
        type: "paragraph",
        text: "JSON-LD is a format recommended by Google for expressing structured data. In Next.js, it can be generated from the same content data used to render a page, which helps keep metadata and schema consistent. Structured data does not guarantee rich results or higher rankings; it simply makes eligible page information easier for supported search systems to interpret.",
      },
      {
        type: "heading",
        text: "Start with the Next.js Metadata API",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Before adding JSON-LD, make sure each route has a meaningful title, description, canonical URL, and social sharing metadata. The Metadata API is the built-in way to define this information in the App Router. For dynamic routes, generate metadata from the same record used to render the page.",
      },
      {
        type: "code",
        language: "tsx",
        filename: "app/blog/[slug]/page.tsx",
        code: `import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Article not found",
    };
  }

  const canonicalUrl = \`https://example.com/blog/\${post.slug}\`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonicalUrl,
      type: "article",
      images: [post.ogImage],
    },
  };
}`,
      },
      {
        type: "callout",
        text: "Replace example.com with the real production domain and ensure ogImage resolves to an absolute, publicly accessible URL when generating social metadata.",
      },
      {
        type: "heading",
        text: "Create Article structured data",
        level: 2,
      },
      {
        type: "paragraph",
        text: "An Article schema can describe the headline, description, author, publication date, modification date, image, and canonical page URL. These values should match the visible article. Do not add ratings, reviews, or other properties that are not genuinely present on the page.",
      },
      {
        type: "code",
        language: "tsx",
        filename: "components/article-json-ld.tsx",
        code: `interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
}

export function ArticleJsonLd(props: ArticleJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: props.title,
    description: props.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": props.url,
    },
    image: [props.image],
    datePublished: props.datePublished,
    dateModified: props.dateModified,
    author: {
      "@type": "Person",
      name: props.author,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\\\u003c"),
      }}
    />
  );
}`,
      },
      {
        type: "paragraph",
        text: "The example escapes less-than characters before embedding serialized JSON. This is a useful defensive measure when structured data contains text that could otherwise be interpreted as HTML. Keep the schema object as data and serialize it rather than manually concatenating JSON strings.",
      },
      {
        type: "heading",
        text: "Add BreadcrumbList structured data",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Breadcrumbs describe the hierarchy that leads to the current page. For a blog article, a simple path might be Home, Blog, and the current article. The structured data should reflect navigation that visitors can also see on the page.",
      },
      {
        type: "code",
        language: "typescript",
        filename: "lib/breadcrumb-json-ld.ts",
        code: `export function createBreadcrumbJsonLd(
  title: string,
  articleUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://example.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://example.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: articleUrl,
      },
    ],
  };
}`,
      },
      {
        type: "heading",
        text: "Describe the website author or publisher",
        level: 2,
      },
      {
        type: "paragraph",
        text: "A Person or Organization entity can describe the author or publisher behind a website. For a personal developer portfolio, Person may be appropriate when the site is genuinely authored and maintained by an individual. Keep the name, URL, and profile links consistent with the visible About or author information.",
      },
      {
        type: "list",
        items: [
          "Use Article for editorial posts and technical tutorials.",
          "Use BreadcrumbList when the page has a visible breadcrumb hierarchy.",
          "Use Person for an individual author when that accurately describes the publisher.",
          "Use Organization for a business or organization publishing the content.",
          "Use WebSite for site-level information where it adds useful context.",
          "Do not add schema properties solely to target a rich result if the visible page does not support them.",
        ],
      },
      {
        type: "heading",
        text: "Render JSON-LD from the page data",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The most maintainable pattern is to generate structured data from the article record rather than maintaining a second set of hard-coded values. This reduces the chance that the visible title, date, author, and schema drift apart when an article is edited.",
      },
      {
        type: "code",
        language: "tsx",
        filename: "app/blog/[slug]/page.tsx",
        code: `export default async function BlogPostPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return <main>Article not found</main>;
  }

  const url = \`https://example.com/blog/\${post.slug}\`;

  return (
    <main>
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        url={url}
        image={\`https://example.com\${post.ogImage}\`}
        datePublished={post.datePublished}
        dateModified={post.dateModified}
        author={post.author}
      />
      <article>
        <h1>{post.title}</h1>
        {/* Render the article content here */}
      </article>
    </main>
  );
}`,
      },
      {
        type: "heading",
        text: "Validate structured data before publishing",
        level: 2,
      },
      {
        type: "paragraph",
        text: "A page can render valid JSON while still containing inaccurate or unsupported schema properties. After deployment, test representative URLs with Google's Rich Results Test and Schema.org's validator. Review warnings, confirm that required properties are present for the intended result type, and check that the rendered page and structured data describe the same content.",
      },
      {
        type: "list",
        items: [
          "Confirm the JSON-LD script is present in the rendered HTML.",
          "Check that URLs use the canonical production domain.",
          "Use valid ISO date strings for publication and modification dates.",
          "Ensure images are crawlable and resolve successfully.",
          "Match author and headline values to visible page content.",
          "Revalidate after changing the schema or page template.",
        ],
      },
      {
        type: "callout",
        text: "Structured data is a way to describe content, not a shortcut to rankings. Accurate metadata, useful writing, crawlable pages, performance, and a good user experience remain essential.",
      },
      {
        type: "heading",
        text: "Conclusion",
        level: 2,
      },
      {
        type: "paragraph",
        text: "JSON-LD fits naturally into a Next.js content workflow when it is generated from the same data that powers the page. I use the Metadata API for titles and canonical URLs, Article schema for editorial content, and BreadcrumbList for page hierarchy. Keeping the data accurate and validating the final output makes the implementation easier to maintain and more useful to search engines.",
      },
    ],
  },

  "react-hook-form-zod-validation": {
    slug: "react-hook-form-zod-validation",
    title: "Type-Safe Forms with React Hook Form and Zod",
    description:
      "How I build accessible, maintainable forms with React Hook Form and Zod, sharing validation rules between the UI and server while keeping TypeScript types aligned with real input data.",
    datePublished: "2024-10-02",
    dateModified: "2024-10-02",
    author: "Sorence Nora",
    tag: "Forms",
    tags: ["React Hook Form", "Zod", "TypeScript", "React", "Form Validation"],
    readingTime: "8 min read",
    ogImage: "/og-image.svg",
    content: [
      {
        type: "paragraph",
        text: "Forms are one of the most important points of interaction in a web application. They collect contact details, booking requests, quote information, and other data that the rest of the system depends on. A form that only checks whether fields are empty is not enough: it should guide users, provide clear feedback, and ensure the submitted data matches what the backend expects.",
      },
      {
        type: "paragraph",
        text: "React Hook Form and Zod work well together because each library has a focused responsibility. React Hook Form manages field state and submission with minimal re-rendering, while Zod defines the validation rules and can infer TypeScript types from the schema.",
      },
      {
        type: "heading",
        text: "Define one validation schema",
        level: 2,
      },
      {
        type: "paragraph",
        text: "I start by describing valid form data in a Zod schema. The schema becomes the source of truth for required fields, formats, limits, and custom validation. It can then be reused by the form resolver and, where appropriate, the server-side submission handler.",
      },
      {
        type: "code",
        language: "typescript",
        filename: "lib/validation/contact-schema.ts",
        code: `import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must contain at least 2 characters")
    .max(80, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .optional(),
  message: z
    .string()
    .trim()
    .min(10, "Message must contain at least 10 characters")
    .max(2000, "Message is too long"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;`,
      },
      {
        type: "paragraph",
        text: "The inferred ContactFormValues type stays aligned with the schema. If a field becomes required or its validation changes, TypeScript can help identify the places that need updating. This avoids maintaining a separate interface that slowly drifts away from the actual validation rules.",
      },
      {
        type: "heading",
        text: "Connect Zod to React Hook Form",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The zodResolver connects the schema to React Hook Form. Each field can display its own validation message, and handleSubmit only calls the valid submission callback when the resolver accepts the data.",
      },
      {
        type: "code",
        language: "tsx",
        filename: "components/contact-form.tsx",
        code: `"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/validation/contact-schema";

export function ContactForm() {
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Unable to send your message");
      }

      setServerMessage("Your message has been sent.");
      reset();
    } catch {
      setServerMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <label htmlFor="name">Name</label>
      <input id="name" {...register("name")} />
      {errors.name && <p role="alert">{errors.name.message}</p>}

      <label htmlFor="email">Email</label>
      <input id="email" type="email" {...register("email")} />
      {errors.email && <p role="alert">{errors.email.message}</p>}

      <label htmlFor="phone">Phone (optional)</label>
      <input id="phone" {...register("phone")} />

      <label htmlFor="message">Message</label>
      <textarea id="message" {...register("message")} />
      {errors.message && <p role="alert">{errors.message.message}</p>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send message"}
      </button>

      <p aria-live="polite">{serverMessage}</p>
    </form>
  );
}`,
      },
      {
        type: "callout",
        text: "Client-side validation improves the user experience, but it is not a security boundary. Always validate submitted data again on the server before saving it or calling another service.",
      },
      {
        type: "heading",
        text: "Validate again in a Next.js Route Handler",
        level: 2,
      },
      {
        type: "paragraph",
        text: "A browser request can be modified or sent without using the form interface. The Route Handler should parse the request body as untrusted input and run the same schema before processing it. This ensures the backend does not rely on client-side validation.",
      },
      {
        type: "code",
        language: "typescript",
        filename: "app/api/contact/route.ts",
        code: `import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact-schema";

export async function POST(request: Request) {
  const body: unknown = await request.json();
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        message: "Please check the submitted fields.",
        errors: result.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const contact = result.data;

  // Save the validated contact or send it to a trusted service.
  // Add rate limiting and abuse protection for public endpoints.

  return NextResponse.json(
    { message: "Message received" },
    { status: 201 }
  );
}`,
      },
      {
        type: "paragraph",
        text: "safeParse returns a result object instead of throwing for ordinary validation failures. The server can return a clear client error for invalid input and continue with the parsed data only when validation succeeds. Production handlers should also handle malformed JSON, unexpected database failures, rate limits, and spam protection.",
      },
      {
        type: "heading",
        text: "Understand input types and transformed values",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Some schemas transform values while parsing. For example, a form may collect a number as a string from an HTML input and convert it to a number for the backend. In those cases, Zod distinguishes the input type from the parsed output type. React Hook Form can model both types so the form fields and submitted values remain accurate.",
      },
      {
        type: "code",
        language: "typescript",
        filename: "lib/validation/quote-schema.ts",
        code: `import { z } from "zod";

export const quoteSchema = z.object({
  quantity: z
    .string()
    .regex(/^\\\\d+$/, "Enter a whole number")
    .transform(Number)
    .pipe(z.number().int().min(1).max(10000)),
});

export type QuoteFormInput = z.input<typeof quoteSchema>;
export type QuoteFormOutput = z.output<typeof quoteSchema>;`,
      },
      {
        type: "paragraph",
        text: "The input type represents what the form controls provide, while the output type represents the validated and transformed value. This distinction is useful for quantities, dates, numeric prices, and normalized strings.",
      },
      {
        type: "heading",
        text: "Build accessible validation feedback",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Good validation is not only about rejecting incorrect values. Users need to know which field needs attention and how to fix it. Associate labels with inputs, connect error text with aria-describedby, mark invalid fields with aria-invalid, and announce submission status without relying only on colour.",
      },
      {
        type: "list",
        items: [
          "Use a real label for every form control.",
          "Show concise messages next to the field that needs correction.",
          "Set aria-invalid when a field has an error.",
          "Connect the input to its error message with aria-describedby.",
          "Use aria-live for asynchronous success and failure feedback.",
          "Disable duplicate submission while a request is in progress.",
          "Preserve user input when a server error occurs.",
        ],
      },
      {
        type: "heading",
        text: "Organize larger and multi-step forms",
        level: 2,
      },
      {
        type: "paragraph",
        text: "For quote builders and booking flows, I separate schemas by step or domain and compose them when the complete form is submitted. Each step can validate only the fields needed to continue, while the final server submission validates the complete payload. This keeps each component focused and makes complex forms easier to maintain.",
      },
      {
        type: "list",
        items: [
          "Group related fields into reusable form sections.",
          "Keep schema definitions outside the component so they are not recreated on every render.",
          "Use shared field components only when they improve consistency without hiding important accessibility behavior.",
          "Validate the current step before moving forward.",
          "Validate the complete payload again on the server.",
          "Keep server-only secrets and privileged database operations out of browser code.",
        ],
      },
      {
        type: "heading",
        text: "Common mistakes to avoid",
        level: 2,
      },
      {
        type: "paragraph",
        text: "One common mistake is assuming that a TypeScript type validates data at runtime. It does not. Another is duplicating validation rules in the UI and API until they disagree. I also avoid displaying raw server exceptions to users, trusting hidden inputs, or using a disabled button as the only protection against duplicate requests.",
      },
      {
        type: "heading",
        text: "Conclusion",
        level: 2,
      },
      {
        type: "paragraph",
        text: "React Hook Form and Zod provide a strong foundation for forms that are easier to build, validate, and maintain. React Hook Form manages interaction state, Zod defines the data contract, and server-side parsing protects the application at the API boundary. When these pieces share one clear schema and accessible feedback pattern, forms become more predictable for both developers and users.",
      },
    ],
  },
};
