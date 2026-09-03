import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import PageLayout from "@/app/components/layout/PageLayout";
import Timeline from "@/app/components/ui/Timeline";
import { education, certifications } from "@/lib/timeline";
import { siteConfig, techDescriptions } from "@/lib/siteConfig";
import { personJsonLd, breadcrumbJsonLd, profilePageJsonLd } from "@/lib/seo";
import JsonLd from "@/app/components/SEO/JsonLd";
import { stackCategories } from "@/lib/stack";

export const metadata: Metadata = {
  title: "About Sorence Nora — Frontend Web Developer",
  description:
    "About Sorence Nora, a frontend web developer from the Philippines. Learn about my education, certifications, approach to web development, and my focus on building modern, responsive web applications.",
  keywords: [
    "Sorence Nora",
    "frontend developer Philippines",
    "about Sorence Nora",
    "web developer portfolio",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
  ],
  alternates: { canonical: `${siteConfig.siteUrl}/about` },
  openGraph: {
    title: "About Sorence Nora — Frontend Web Developer",
    description:
      "Frontend web developer from the Philippines building modern, responsive web applications with React, Next.js, and TypeScript.",
    url: `${siteConfig.siteUrl}/about`,
    type: "profile",
    locale: "en_PH",
    images: [
      {
        url: siteConfig.author.image,
        width: 400,
        height: 400,
        alt: "Sorence Nora — Frontend Web Developer",
      },
    ],
  },
};

const AboutPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ];

  return (
    <PageLayout>
      <JsonLd data={[personJsonLd(), breadcrumbJsonLd(breadcrumbs), profilePageJsonLd()]} />
      <div className="bg-grid" aria-hidden="true" />
      <section className="section-pad" id="about-hero">
        <div className="wrap pt-[150px]">
          <div className="grid grid-cols-1 gap-[48px] md:grid-cols-[0.6fr_1fr] md:gap-[70px]">
            <div>
              <div className="eyebrow" data-circuit-node="about">
                <span className="relative flex flex-row items-center gap-[6px]">
                  <span className="absolute -left-3 top-0 hidden md:block">&lt;</span>
                  <span className="material-symbols-outlined block text-[14px]">{"person"}</span>
                  <span className="hidden md:inline">{"About"}</span>
                  <span className="absolute -right-6 top-0 hidden md:block">/&gt;</span>
                </span>
              </div>
              <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-ink-0">
                Sorence Nora.
              </h1>
            </div>
            <div className="mt-[10px] md:mt-0">
              <Image
                src="/SNPic.png"
                alt="Sorence Nora — Frontend Web Developer"
                width={400}
                height={400}
                className="rounded-[6px] border border-line object-cover"
                priority
                loading="eager"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>

          <div className="mt-[56px] max-w-[42rem]">
            <p className="text-[1.05rem] leading-[1.85] text-ink-1">
              I&apos;m a frontend web developer based in the Philippines, specializing
              in building modern, responsive web applications. My work sits at
              the intersection of design and engineering — turning requirements
              into interfaces that are fast, accessible, and easy to maintain.
            </p>
            <br />
            <p className="mt-[18px] text-[1.05rem] leading-[1.85] text-ink-1">
              Currently building with React, Next.js, TypeScript, and Supabase. I
              care about the details that make an interface feel considered —
              clear hierarchy, consistent spacing, and interactions that respond
              the way people expect.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-line">
        <div className="wrap">
          <h2 className="mb-[40px] font-display text-[clamp(1.8rem,3vw,2.2rem)] font-semibold text-ink-0">
            Technology Stack
          </h2>
          <div className="mt-[40px]">
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
                      className="stack-item font-display text-[clamp(1.1rem,2.2vw,1.5rem)] font-medium text-ink-0"
                      title={techDescriptions[item] ?? undefined}
                    >
                      {item}
                      {techDescriptions[item] && (
                        <span className="ml-[6px] font-mono text-[10px] text-ink-2 align-text-bottom">
                          ⓘ
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-line">
        <div className="wrap">
          <Timeline heading={education.heading} items={education.items} />
          <Timeline heading={certifications.heading} items={certifications.items} />
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
