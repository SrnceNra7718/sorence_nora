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
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Case Study"],
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
        caption: "The product catalog uses category filtering to make a large collection easier to browse.",
      },
      {
        type: "paragraph",
        text: "The finished-works gallery provides social proof for customers evaluating a custom order. A responsive image grid keeps the portfolio usable on small screens, while the lightbox interaction gives visitors a closer look at the details of completed uniforms.",
      },
      {
        type: "image",
        src: "/forProject_Section/yenzhen-tailoring/gallery_page.png",
        alt: "Yenzhen Tailoring finished works gallery displaying completed custom sportswear projects in a responsive image grid with lightbox",
        caption: "Completed projects are presented in a gallery designed for quick browsing and closer inspection.",
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
        caption: "The homepage introduces the brand and routes visitors toward products, packages, and inquiries.",
      },
      {
        type: "paragraph",
        text: "Framer Motion adds scroll-reveal transitions and hover feedback to cards, gallery images, and primary calls to action. The motion is used as an accent: it helps establish rhythm and polish, but the content and navigation remain usable without relying on animation.",
      },
      {
        type: "image",
        src: "/forProject_Section/yenzhen-tailoring/homepage_mobilev2.png",
        alt: "Yenzhen Tailoring homepage rendered on a mobile viewport showing the responsive layout",
        caption: "The mobile layout keeps the hero, navigation, and primary calls to action accessible.",
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
    title: "Building the Student Clearance Monitor: A Next.js & Supabase Case Study",
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
        text: "I default to Server Components and only mark a component with \"use client\" when it needs interactivity — form handling, mouse tracking, animations. This keeps the initial JavaScript bundle small and improves time-to-interactive.",
      },
      {
        type: "callout",
        text: "Rule of thumb: if the component uses useState, useEffect, or event handlers that update state, it needs \"use client\". Everything else can stay a Server Component.",
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
};
