import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import PageLayout from "@/app/components/layout/PageLayout";
import JsonLd from "@/app/components/SEO/JsonLd";
import { siteConfig, techDescriptions } from "@/lib/siteConfig";
import { breadcrumbJsonLd, projectJsonLd } from "@/lib/seo";
import { stackCategories } from "@/lib/stack";
import { projects } from "@/lib/projects";

const techLinkMap: Record<string, string> = {
  HTML5: "/skills",
  CSS3: "/skills",
  JavaScript: "/skills",
  TypeScript: "/skills",
  React: "/skills",
  "Next.js": "/skills",
  "Tailwind CSS": "/skills",
  Supabase: "/skills",
  PostgreSQL: "/skills",
  "Responsive Design": "/skills",
};

const categoryDescriptions: Record<string, string> = {
  Frontend:
    "Core frontend technologies used to structure, style, and add interactivity to web applications.",
  Styling:
    "Tools and libraries used for creating consistent, responsive, and accessible user interfaces.",
  "Backend & Data":
    "Backend technologies and data storage solutions for full-stack application development.",
  "Design Tools":
    "Tools used for designing and preparing visual assets and user interfaces.",
};

export const metadata: Metadata = {
  title: "Technical Skills — Technologies I Build With",
  description:
    "Technical skills and technology stack of Sorence Nora, a frontend web developer specializing in React, Next.js, TypeScript, Tailwind CSS, and Supabase. Learn how each technology is used in my projects.",
  keywords: [
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "JavaScript developer",
    "Tailwind CSS developer",
    "frontend developer skills",
    "software developer skills",
    "Sorence Nora",
  ],
  alternates: { canonical: `${siteConfig.siteUrl}/skills` },
  openGraph: {
    title: "Technical Skills — Technologies I Build With",
    description:
      "Frontend web developer specializing in React, Next.js, TypeScript, Tailwind CSS, and Supabase.",
    url: `${siteConfig.siteUrl}/skills`,
    type: "website",
    locale: "en_PH",
  },
};

const SkillsPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Skills", href: "/skills" },
  ];

  const projectStructuredData = projects.map((p) =>
    projectJsonLd({
      name: p.title,
      description: p.description,
      slug: p.slug,
      image: p.ogImage,
      dateCreated: p.dateCreated,
      author: "Sorence Nora",
    }),
  );

  return (
    <PageLayout>
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs), ...projectStructuredData]} />
      <section className="section-pad pt-[150px]">
        <div className="wrap">
          <div className="eyebrow" data-circuit-node="stack">
            <span className="relative flex flex-row items-center gap-[6px]">
              <span className="absolute -left-3 top-0 hidden md:block">&lt;</span>
              <span className="material-symbols-outlined block text-[14px]">{"stacks"}</span>
              <span className="hidden md:inline">{"Skills"}</span>
              <span className="absolute -right-6 top-0 hidden md:block">/&gt;</span>
            </span>
          </div>

          <h1 className="mt-[20px] font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-ink-0">
            Technology
            <br />
            index.
          </h1>

          <p className="mt-[26px] max-w-[46ch] text-[clamp(1rem,1.6vw,1.15rem)] leading-[1.7] text-ink-1">
            Technologies I use to build modern web applications, organized by
            category with descriptions of how each is applied in real projects.
          </p>

          <div className="mt-[56px]">
            {stackCategories.map((cat, idx) => (
              <div
                key={cat.category}
                className={`stack-row border-t border-line py-[26px]${idx === stackCategories.length - 1 ? "border-b" : ""}`}
              >
                <span className="idx font-mono text-[12px] text-ink-2">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="cat font-mono text-[12px] uppercase tracking-[0.08em] text-ink-1">
                  {cat.category}
                </span>
                <div className="stack-items flex flex-wrap gap-[10px_28px]">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="font-display text-[clamp(1.1rem,2.2vw,1.5rem)] font-medium text-ink-0"
                      title={techDescriptions[item] ?? undefined}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[56px] border-t border-line pt-[42px]">
            {stackCategories.map((cat) => (
              <div
                key={cat.category}
                className="mb-[42px] last:mb-0"
              >
                <h2 className="mb-[14px] font-display text-[clamp(1.3rem,2.4vw,1.6rem)] font-semibold text-ink-0">
                  {cat.category}
                </h2>
                {categoryDescriptions[cat.category] && (
                  <p className="mb-[22px] text-[14px] leading-[1.7] text-ink-1">
                    {categoryDescriptions[cat.category]}
                  </p>
                )}
                <ul className="space-y-[14px]">
                  {cat.items.map((item) => (
                    <li key={item} className="flex flex-col gap-[4px]">
                      <span className="font-mono text-[13px] font-medium text-ink-0">
                        {item}
                      </span>
                      {techDescriptions[item] && (
                        <p className="text-[13.5px] leading-[1.7] text-ink-1">
                          {techDescriptions[item]}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-[42px] border-t border-line pt-[42px]">
            <h2 className="mb-[18px] font-display text-[clamp(1.3rem,2.4vw,1.6rem)] font-semibold text-ink-0">
              See the work
            </h2>
            <p className="mb-[28px] text-[14px] leading-[1.7] text-ink-1">
              Browse the projects where these technologies come together in real
              applications.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-[8px] rounded-[2px] border border-accent bg-accent px-[24px] py-[14px] font-mono text-[13px] font-medium text-accent-ink transition-colors hover:bg-[#f0b25d]"
            >
              View projects
              <span className="inline-block transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SkillsPage;
