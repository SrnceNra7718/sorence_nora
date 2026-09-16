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
