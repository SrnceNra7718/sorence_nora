import React from "react";
import { Metadata } from "next";
import PageLayout from "@/app/components/layout/PageLayout";
import Timeline from "@/app/components/ui/Timeline";
import { education } from "@/lib/timeline";
import CertificatesSection from "@/app/components/certificates/CertificatesSection";
import { siteConfig, techDescriptions } from "@/lib/siteConfig";
import { personJsonLd, breadcrumbJsonLd, profilePageJsonLd } from "@/lib/seo";
import JsonLd from "@/app/components/SEO/JsonLd";
import { stackCategories } from "@/lib/stack";
import ImageSlider from "@/app/components/effects/ImageSlider";
import ContactForm from "../components/contact/ContactForm";

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
      <JsonLd
        data={[
          personJsonLd(),
          breadcrumbJsonLd(breadcrumbs),
          profilePageJsonLd(),
        ]}
      />
      <div className="bg-grid" aria-hidden="true" />
      <section className="section-pad" id="about-hero">
        <div className="wrap pt-[40px] md:pt-[56px]">
          <div className="grid grid-cols-[minmax(0,1fr)_120px] items-start gap-x-[16px] gap-y-[16px] md:grid-cols-[minmax(0,1fr)_220px] md:gap-x-[48px] md:gap-y-[20px] lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-x-[64px] xl:grid-cols-[minmax(0,1fr)_340px]">
            {/* H1 (left on all sizes) */}
            <div className="min-w-0 md:col-start-1 md:row-start-1">
              <div className="eyebrow" data-circuit-node="about">
                <span className="relative flex flex-row items-center gap-[6px]">
                  <span className="absolute -left-3 top-0 hidden md:block">
                    &lt;
                  </span>
                  <span className="material-symbols-outlined block text-[14px]">
                    {"person"}
                  </span>
                  <span className="hidden md:inline">{"About"}</span>
                  <span className="absolute -right-6 top-0 hidden md:block">
                    /&gt;
                  </span>
                </span>
              </div>
              <h1 className="font-display text-[clamp(2rem,9vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-ink-0 md:text-[clamp(2.4rem,5.5vw,4.4rem)]">
                Sorence Nora.
              </h1>
            </div>

            {/* Image (right on all sizes) */}
            <div className="w-[120px] max-w-full self-start justify-self-end md:col-start-2 md:row-span-2 md:row-start-1 md:w-[220px] lg:w-[280px] xl:w-[340px]">
              <ImageSlider
                cartoonSrc="/SNPicCartoonize1.png"
                photoSrc="/SNPic1.png"
                alt="Sorence Nora — Frontend Web Developer"
                width={200}
                height={300}
                className="rounded-[6px] border border-line"
              />
            </div>

            {/* Paragraphs — full-width on mobile, left column on desktop */}
            <div className="col-span-full min-w-0 max-w-[42rem] md:col-span-1 md:col-start-1 md:row-start-2">
              <p className="text-[1.05rem] leading-[1.85] text-ink-1">
                I&apos;m a frontend web developer based in the Philippines,
                specializing in building modern, responsive web applications. My
                work sits at the intersection of design and engineering —
                turning requirements into interfaces that are fast, accessible,
                and easy to maintain.
              </p>
              <p className="mt-[12px] text-[1.05rem] leading-[1.85] text-ink-1">
                Currently building with React, Next.js, TypeScript, and
                Supabase. I care about the details that make an interface feel
                considered — clear hierarchy, consistent spacing, and
                interactions that respond the way people expect.
              </p>
            </div>
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
                        <span className="ml-[6px] align-text-bottom font-mono text-[10px] text-ink-2">
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
        </div>
      </section>

      <CertificatesSection />
    </PageLayout>
  );
};

export default AboutPage;
