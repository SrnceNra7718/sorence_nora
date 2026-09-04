import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import PageLayout from "@/app/components/layout/PageLayout";
import Badge from "@/app/components/ui/Badge";
import JsonLd from "@/app/components/SEO/JsonLd";
import { siteConfig } from "@/lib/siteConfig";
import { breadcrumbJsonLd, projectJsonLd } from "@/lib/seo";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Web Development Work by Sorence Nora",
  description:
    "Portfolio of web applications built by Sorence Nora, a frontend web developer from the Philippines. Showcasing projects built with React, Next.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "Sorence Nora projects",
    "web development portfolio",
    "frontend developer portfolio",
    "software developer portfolio",
    "React projects",
    "Next.js projects",
    "developer portfolio Philippines",
  ],
  alternates: { canonical: `${siteConfig.siteUrl}/projects` },
  openGraph: {
    title: "Projects — Web Development Work by Sorence Nora",
    description:
      "Portfolio of web applications built with React, Next.js, TypeScript, and Tailwind CSS.",
    url: `${siteConfig.siteUrl}/projects`,
    type: "website",
    locale: "en_PH",
  },
};

const ProjectsPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
  ];

  const projectStructuredData = projects.map((p) =>
    projectJsonLd({
      name: p.title,
      description: p.description,
      slug: p.slug,
      image: p.ogImage,
      dateCreated: p.dateCreated,
      author: "Sorence Nora",
      url: `${siteConfig.siteUrl}/projects/${p.slug}`,
    }),
  );

  return (
    <PageLayout>
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs), ...projectStructuredData]} />
      <section className="section-pad pt-[150px]">
        <div className="wrap">
          <div className="eyebrow" data-circuit-node="work">
            <span className="relative flex flex-row items-center gap-[6px]">
              <span className="absolute -left-3 top-0 hidden md:block">&lt;</span>
              <span className="material-symbols-outlined block text-[14px]">{"deployed_code"}</span>
              <span className="hidden md:inline">{"Projects"}</span>
              <span className="absolute -right-6 top-0 hidden md:block">/&gt;</span>
            </span>
          </div>

          <h1 className="mt-[20px] font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-ink-0">
            Projects.
            <br />
            case studies.
          </h1>

          <p className="mt-[26px] max-w-[46ch] text-[clamp(1rem,1.6vw,1.15rem)] leading-[1.7] text-ink-1">
            A closer look at web applications I&apos;ve built — from concept to
            production-ready code. Each project includes technical details,
            challenges, and lessons learned.
          </p>

          <div className="mt-[56px] space-y-[56px]">
            {projects.map((proj) => (
              <article
                key={proj.slug}
                className="border-t border-line pt-[36px]"
              >
                <div className="grid grid-cols-1 gap-[32px] md:grid-cols-[1.1fr_0.9fr] md:gap-[56px]">
                  <div className="project-visual">
                    <Image
                      src={proj.images[0]}
                      alt={proj.imageAlt[proj.images[0]] || proj.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 55vw"
                      className="proj-img object-cover object-top active"
                      priority={proj.slug === projects[0]?.slug}
                    />
                  </div>

                  <div>
                    <p className="mb-[12px] font-mono text-[13px] text-accent">
                      {proj.number}
                    </p>
                    <h2 className="mb-[20px] font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-[1.08] text-ink-0">
                      {proj.title}
                    </h2>

                    <div className="border-t border-line py-[12px] text-[14px]">
                      <div className="flex gap-[16px] border-t border-line py-[12px]">
                        <span className="w-[110px] flex-shrink-0 pt-[2px] font-mono text-[11px] uppercase tracking-[0.06em] text-ink-2">
                          Role
                        </span>
                        <span className="leading-[1.6] text-ink-1">{proj.role}</span>
                      </div>
                      <div className="flex gap-[16px] border-t border-line py-[12px]">
                        <span className="w-[110px] flex-shrink-0 pt-[2px] font-mono text-[11px] uppercase tracking-[0.06em] text-ink-2">
                          Context
                        </span>
                        <span className="leading-[1.6] text-ink-1">{proj.context}</span>
                      </div>
                      <div className="flex gap-[16px] border-t border-line py-[12px] last:border-b">
                        <span className="w-[110px] flex-shrink-0 pt-[2px] font-mono text-[11px] uppercase tracking-[0.06em] text-ink-2">
                          Overview
                        </span>
                        <span className="leading-[1.6] text-ink-1">{proj.overview}</span>
                      </div>
                    </div>

                    <div className="mt-[22px] flex flex-wrap gap-[8px]">
                      {proj.technologies.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${proj.slug}`}
                      className="mt-[24px] inline-flex items-center gap-[8px] font-mono text-[12.5px] text-accent"
                    >
                      View case study →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProjectsPage;
