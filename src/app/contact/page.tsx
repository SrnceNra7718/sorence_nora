import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import PageLayout from "@/app/components/layout/PageLayout";
import ContactForm from "@/app/components/contact/ContactForm";
import JsonLd from "@/app/components/SEO/JsonLd";
import { siteConfig } from "@/lib/siteConfig";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact — Frontend Web Developer from the Philippines",
  description:
    "Contact Sorence Nora, a frontend web developer from the Philippines. Available for freelance projects, frontend roles, and web development collaborations. Reach out via email or the contact form.",
  keywords: [
    "contact Sorence Nora",
    "hire frontend developer Philippines",
    "freelance web developer Philippines",
    "frontend developer contact",
    "web developer available for work",
  ],
  alternates: { canonical: `${siteConfig.siteUrl}/contact` },
  openGraph: {
    title: "Contact — Frontend Web Developer from the Philippines",
    description:
      "Available for freelance projects, frontend roles, and web development collaborations.",
    url: `${siteConfig.siteUrl}/contact`,
    type: "website",
    locale: "en_PH",
  },
};

const ContactPage = () => {
  return (
    <PageLayout>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { label: "Home", href: "/" },
            { label: "Contact", href: "/contact" },
          ]),
          faqJsonLd([
            {
              question: "How do I reach Sorence Nora?",
              answer:
                "The fastest way to reach me is through the contact form below or by email at nora.sorence@gmail.com. I read every message and typically respond within a few business days.",
            },
            {
              question: "Is Sorence available for freelance work?",
              answer:
                "Yes, I'm open to select freelance projects and frontend development roles. If you have a specific project in mind, please include the details in your message.",
            },
            {
              question: "Where is Sorence Nora based?",
              answer:
                "I'm based in the Philippines and work with clients and teams globally.",
            },
          ]),
        ]}
      />

      <section className="section-pad pt-[150px]">
        <div className="wrap">
          <div className="eyebrow" data-circuit-node="contact">
            <span className="relative flex flex-row items-center gap-[6px]">
              <span className="absolute -left-3 top-0 hidden md:block">&lt;</span>
              <span className="material-symbols-outlined block text-[14px]">
                {"mail"}
              </span>
              <span className="hidden md:inline">{"Contact"}</span>
              <span className="absolute -right-6 top-0 hidden md:block">/&gt;</span>
            </span>
          </div>

          <h1 className="mt-[20px] font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-ink-0">
            Have a project
            <br />
            in mind?
            <br />
            Let&apos;s build it.
          </h1>

          <div className="mt-[26px] max-w-[46ch] text-[clamp(1rem,1.6vw,1.15rem)] leading-[1.7] text-ink-1">
            I&apos;m open to freelance frontend projects, full-stack web application
            work, and collaboration opportunities. Fastest way to reach me is
            the form — I read every message.
          </div>

          <div className="mt-[40px] flex flex-col gap-[10px]">
            <a
              href="mailto:nora.sorence@gmail.com"
              className="inline-flex w-fit items-center gap-[8px] border-b border-transparent font-mono text-[13.5px] text-ink-1 transition-colors hover:border-[rgba(232,163,61,0.4)] hover:text-accent"
            >
              ↗ nora.sorence@gmail.com
            </a>
            <a
              href="https://drive.google.com/file/d/14s3Y6nlgkDAuJWRYq021temUH9k1tD1b/view?usp=sharing"
              target="_blank"
              rel="noopener"
              className="inline-flex w-fit items-center gap-[8px] border-b border-transparent font-mono text-[13.5px] text-ink-1 transition-colors hover:border-[rgba(232,163,61,0.4)] hover:text-accent"
            >
              ↗ View résumé
            </a>
            <span className="font-mono text-[13px] text-ink-2">
              Philippines · Available for select projects
            </span>
          </div>
        </div>
      </section>

      <ContactForm />

      <section className="section-pad border-t border-line">
        <div className="wrap">
          <h2 className="mb-[26px] font-display text-[clamp(1.6rem,2.8vw,2rem)] font-semibold text-ink-0">
            Frequently asked questions
          </h2>
          <div className="mt-[32px] space-y-[18px] max-w-[48rem]">
            <div>
              <h3 className="font-display text-[1.15rem] font-medium text-ink-0">
                How do I reach Sorence Nora?
              </h3>
              <p className="mt-[8px] text-[15px] leading-[1.7] text-ink-1">
                The fastest way is through the contact form below or by email at
                nora.sorence@gmail.com. I read every message and typically
                respond within a few business days.
              </p>
            </div>
            <div>
              <h3 className="font-display text-[1.15rem] font-medium text-ink-0">
                Is Sorence available for freelance work?
              </h3>
              <p className="mt-[8px] text-[15px] leading-[1.7] text-ink-1">
                Yes, I&apos;m open to select freelance projects and frontend
                development roles. If you have a specific project in mind,
                please include the details in your message.
              </p>
            </div>
            <div>
              <h3 className="font-display text-[1.15rem] font-medium text-ink-0">
                Where is Sorence Nora based?
              </h3>
              <p className="mt-[8px] text-[15px] leading-[1.7] text-ink-1">
                I&apos;m based in the Philippines and work with clients and teams
                globally on frontend and web application projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
