export interface BlogPost {
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
}

export const blogPosts: BlogPost[] = [
  {
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
  },
  {
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
      "Case Study",
      "React Hook Form",
      "Zod",
    ],
    readingTime: "8 min read",
    ogImage: "/forProject_Section/subbie-street-garage/homepage_hero.png",
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
    ogImage: "/forVlog_Section/AppStructure.png",
  },
  {
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
    ogImage: "/forVlog_Section/RespWebDes.png",
  },
];

export const blogTags = [
  "Next.js",
  "TypeScript",
  "React",
  "Supabase",
  "Tailwind CSS",
  "Responsive Design",
  "Frontend Development",
  "Case Study",
  "Architecture",
  "CSS",
  "CSS3",
  "JavaScript",
  "HTML5",
  "Framer Motion",
  "React Hook Form",
  "Zod",
  "Cal.com",
  "Lucide React",
  "SVG Animation",
  "SVG Graphics",
  "Vanilla JavaScript",
];
