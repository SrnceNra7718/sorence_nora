import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import PageLayout from "@/app/components/layout/PageLayout";
import JsonLd from "@/app/components/SEO/JsonLd";
import { siteConfig } from "@/lib/siteConfig";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description:
    "The page you're looking for doesn't exist. Return to Sorence Nora's frontend developer portfolio.",
  alternates: { canonical: `${siteConfig.siteUrl}/404` },
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFoundPage() {
  return (
    <PageLayout>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { label: "Home", href: "/" },
            { label: "404", href: "/404" },
          ]),
        ]}
      />
      <section className="flex min-h-[70svh] items-center justify-center pt-[100px]">
        <div className="wrap text-center">
          <span className="font-display text-[clamp(4rem,12vw,6rem)] font-bold text-accent">
            404
          </span>
          <h1 className="mt-[16px] font-display text-[clamp(1.4rem,3vw,1.8rem)] font-semibold text-ink-0">
            Page not found
          </h1>
          <p className="mt-[18px] max-w-[42ch] text-[15px] leading-[1.7] text-ink-1">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-[32px] inline-flex items-center gap-[8px] rounded-[2px] border border-accent bg-accent px-[24px] py-[14px] font-mono text-[13px] font-medium text-accent-ink transition-colors hover:bg-[#f0b25d]"
          >
            Back to homepage
            <span>→</span>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
