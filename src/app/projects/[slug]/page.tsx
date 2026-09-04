import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import PageLayout from "@/app/components/layout/PageLayout";
import Badge from "@/app/components/ui/Badge";
import JsonLd from "@/app/components/SEO/JsonLd";
import { siteConfig } from "@/lib/siteConfig";
import { breadcrumbJsonLd, projectJsonLd } from "@/lib/seo";
import { projects, Project } from "@/lib/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

function getProject(slug: string): Project | null {
  return projects.find((p) => p.slug === slug) ?? null;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const proj = projects.find((p) => p.slug === slug);
  if (!proj) return {};

  return {
    title: `${proj.title} — Case Study by Sorence Nora`,
    description: proj.overview,
    keywords: proj.technologies,
    alternates: {
      canonical: `${siteConfig.siteUrl}/projects/${proj.slug}`,
    },
    openGraph: {
      title: `${proj.title} — Case Study by Sorence Nora`,
      description: proj.overview,
      url: `${siteConfig.siteUrl}/projects/${proj.slug}`,
      type: "article",
      locale: "en_PH",
      images: [
        {
          url: proj.ogImage,
          width: 1200,
          height: 630,
          alt: `${proj.title} — web application built with ${proj.technologies.join(", ")}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${proj.title} — Case Study by Sorence Nora`,
      description: proj.overview,
      images: [proj.ogImage],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = await params;
  const proj = getProject(slug);

  if (!proj) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: proj.title, href: `/projects/${proj.slug}` },
  ];

  return (
    <PageLayout>
      <JsonLd
        data={[
          projectJsonLd({
            name: proj.title,
            description: proj.description,
            slug: proj.slug,
            image: proj.ogImage,
            dateCreated: proj.dateCreated,
            author: "Sorence Nora",
            url: `${siteConfig.siteUrl}/projects/${proj.slug}`,
            programmingLanguage: proj.technologies,
          }),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />

      <section className="section-pad pt-[150px]">
        <div className="wrap">
          <div className="eyebrow" data-circuit-node="work">
            <span className="relative flex flex-row items-center gap-[6px]">
              <span className="absolute -left-3 top-0 hidden md:block">&lt;</span>
              <span className="material-symbols-outlined block text-[14px]">
                {"deployed_code"}
              </span>
              <span className="hidden md:inline">{"Project"}</span>
              <span className="absolute -right-6 top-0 hidden md:block">/&gt;</span>
            </span>
          </div>

          <h1 className="mt-[20px] font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-ink-0">
            {proj.title}
          </h1>

          <p className="mt-[12px] font-mono text-[13px] text-accent">{proj.number}</p>

          <p className="mt-[26px] max-w-[46ch] text-[clamp(1rem,1.6vw,1.15rem)] leading-[1.7] text-ink-1">
            {proj.overview}
          </p>

          <div className="mt-[22px] flex flex-wrap gap-[8px]">
            {proj.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-line">
        <div className="wrap">
          <h2 className="mb-[26px] font-display text-[clamp(1.6rem,2.8vw,2rem)] font-semibold text-ink-0">
            Project overview
          </h2>
          <p className="max-w-[48rem] text-[15px] leading-[1.7] text-ink-1">
            {proj.description}
          </p>

          <div className="mt-[32px] grid grid-cols-1 gap-[24px] sm:grid-cols-2 sm:gap-[32px]">
            <div className="rounded-[6px] border border-line bg-bg-1 p-[22px]">
              <h3 className="mb-[10px] font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
                Role
              </h3>
              <p className="font-display text-[1.1rem] font-medium text-ink-0">
                {proj.role}
              </p>
            </div>
            <div className="rounded-[6px] border border-line bg-bg-1 p-[22px]">
              <h3 className="mb-[10px] font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
                Context
              </h3>
              <p className="font-display text-[1.1rem] font-medium text-ink-0">
                {proj.context}
              </p>
            </div>
          </div>

          <div className="mt-[32px] grid grid-cols-1 gap-[24px] sm:grid-cols-3 sm:gap-[32px]">
            <div>
              <h3 className="mb-[12px] font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
                Frontend
              </h3>
              <ul className="space-y-[6px]">
                {proj.frontendTech.map((t) => (
                  <li key={t} className="text-[14px] text-ink-1">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            {proj.backendTech && (
              <div>
                <h3 className="mb-[12px] font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
                  Backend
                </h3>
                <ul className="space-y-[6px]">
                  {proj.backendTech.map((t) => (
                    <li key={t} className="text-[14px] text-ink-1">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {proj.databaseTech && (
              <div>
                <h3 className="mb-[12px] font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
                  Database
                </h3>
                <ul className="space-y-[6px]">
                  {proj.databaseTech.map((t) => (
                    <li key={t} className="text-[14px] text-ink-1">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-line">
        <div className="wrap">
          <h2 className="mb-[26px] font-display text-[clamp(1.6rem,2.8vw,2rem)] font-semibold text-ink-0">
            Screenshots
          </h2>
          <div className="grid grid-cols-1 gap-[24px] sm:grid-cols-2 sm:gap-[28px]">
            {proj.images.map((img, i) => (
              <div key={img} className="project-visual">
                <Image
                  src={img}
                  alt={proj.imageAlt[img] || `${proj.title} — frame ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 45vw"
                  className="proj-img object-cover object-top active"
                  priority={i === 0}
                />
                <span className="project-frame-label mono">
                  FRAME {String(i + 1).padStart(2, "0")}/{String(proj.images.length).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-line">
        <div className="wrap">
          <h2 className="mb-[26px] font-display text-[clamp(1.6rem,2.8vw,2rem)] font-semibold text-ink-0">
            Problem &amp; purpose
          </h2>
          <div className="grid gap-[20px] md:grid-cols-[200px_1fr]">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
              Problem
            </p>
            <p className="text-[15px] leading-[1.7] text-ink-1">
              {proj.caseStudy.problem}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
              Purpose
            </p>
            <p className="text-[15px] leading-[1.7] text-ink-1">
              {proj.caseStudy.purpose}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
              Target users
            </p>
            <p className="text-[15px] leading-[1.7] text-ink-1">
              {proj.caseStudy.targetUsers}
            </p>
          </div>

          {proj.caseStudy.architecture && (
            <>
              <h3 className="mt-[32px] mb-[12px] font-display text-[1.3rem] font-semibold text-ink-0">
                Architecture
              </h3>
              <p className="max-w-[48rem] text-[15px] leading-[1.7] text-ink-1">
                {proj.caseStudy.architecture}
              </p>
            </>
          )}

          <h3 className="mt-[32px] mb-[12px] font-display text-[1.3rem] font-semibold text-ink-0">
            Features
          </h3>
          <ul className="space-y-[18px]">
            {proj.caseStudy.features.map((f) => (
              <li key={f.title}>
                <h4 className="font-display text-[1.1rem] font-medium text-ink-0">
                  {f.title}
                </h4>
                <p className="mt-[4px] text-[15px] leading-[1.7] text-ink-1">
                  {f.description}
                </p>
              </li>
            ))}
          </ul>

          <h3 className="mt-[32px] mb-[12px] font-display text-[1.3rem] font-semibold text-ink-0">
            Implementation
          </h3>
          <p className="max-w-[48rem] text-[15px] leading-[1.7] text-ink-1">
            {proj.caseStudy.implementation}
          </p>

          <h3 className="mt-[32px] mb-[12px] font-display text-[1.3rem] font-semibold text-ink-0">
            Challenges
          </h3>
          <p className="max-w-[48rem] text-[15px] leading-[1.7] text-ink-1">
            {proj.caseStudy.challenges}
          </p>

          {proj.caseStudy.lessonsLearned && (
            <>
              <h3 className="mt-[32px] mb-[12px] font-display text-[1.3rem] font-semibold text-ink-0">
                Lessons learned
              </h3>
              <p className="max-w-[48rem] text-[15px] leading-[1.7] text-ink-1">
                {proj.caseStudy.lessonsLearned}
              </p>
            </>
          )}

          {proj.caseStudy.results && (
            <>
              <h3 className="mt-[32px] mb-[12px] font-display text-[1.3rem] font-semibold text-ink-0">
                Results
              </h3>
              <p className="max-w-[48rem] text-[15px] leading-[1.7] text-ink-1">
                {proj.caseStudy.results}
              </p>
            </>
          )}

          {proj.caseStudy.futureImprovements && (
            <>
              <h3 className="mt-[32px] mb-[12px] font-display text-[1.3rem] font-semibold text-ink-0">
                Future improvements
              </h3>
              <p className="max-w-[48rem] text-[15px] leading-[1.7] text-ink-1">
                {proj.caseStudy.futureImprovements}
              </p>
            </>
          )}
        </div>
      </section>

      <section className="section-pad border-t border-line">
        <div className="wrap">
          <div className="flex flex-wrap items-center justify-between gap-[28px]">
            <div>
              <h2 className="font-display text-[clamp(1.3rem,2.4vw,1.6rem)] font-semibold text-ink-0">
                Interested in similar work?
              </h2>
              <p className="mt-[8px] max-w-[42ch] text-[14px] leading-[1.7] text-ink-1">
                I&apos;m open to frontend development and full-stack web application
                projects. Reach out to discuss how I can help.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-[8px] rounded-[2px] border border-accent bg-accent px-[24px] py-[14px] font-mono text-[13px] font-medium text-accent-ink transition-colors hover:bg-[#f0b25d]"
            >
              Get in touch
              <span className="inline-block transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProjectPage;
