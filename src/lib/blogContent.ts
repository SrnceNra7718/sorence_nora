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
