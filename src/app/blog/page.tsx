import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import PageLayout from "@/app/components/layout/PageLayout";
import JsonLd from "@/app/components/SEO/JsonLd";
import { siteConfig } from "@/lib/siteConfig";
import { breadcrumbJsonLd } from "@/lib/seo";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Frontend Development Notes by Sorence Nora",
  description:
    "Technical articles on frontend development, React, Next.js, TypeScript, Tailwind CSS, and responsive web design by Sorence Nora, a frontend web developer from the Philippines.",
  keywords: [
    "frontend development blog",
    "React articles",
    "Next.js tutorials",
    "TypeScript tips",
    "Tailwind CSS patterns",
    "responsive design",
    "Sorence Nora blog",
  ],
  alternates: { canonical: `${siteConfig.siteUrl}/blog` },
  openGraph: {
    title: "Blog — Frontend Development Notes by Sorence Nora",
    description:
      "Technical articles on frontend development, React, Next.js, TypeScript, and Tailwind CSS.",
    url: `${siteConfig.siteUrl}/blog`,
    type: "website",
    locale: "en_PH",
  },
};

const BlogPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <PageLayout>
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs)]} />
      <section className="section-pad pt-[150px]">
        <div className="wrap">
          <div className="eyebrow" data-circuit-node="blog">
            <span className="relative flex flex-row items-center gap-[6px]">
              <span className="absolute -left-3 top-0 hidden md:block">&lt;</span>
              <span className="material-symbols-outlined block text-[14px]">
                {"article"}
              </span>
              <span className="hidden md:inline">{"Blog"}</span>
              <span className="absolute -right-6 top-0 hidden md:block">/&gt;</span>
            </span>
          </div>

          <h1 className="mt-[20px] font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-ink-0">
            Blog.
            <br />
            Notes &amp; write-ups.
          </h1>

          <p className="mt-[26px] max-w-[46ch] text-[clamp(1rem,1.6vw,1.15rem)] leading-[1.7] text-ink-1">
            Technical articles on frontend development, React, Next.js,
            TypeScript, and responsive web design — drawn from projects I&apos;ve
            built.
          </p>

          <div className="mt-[56px] space-y-[42px]">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="border-t border-line pt-[36px]"
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="grid grid-cols-1 gap-[24px] md:grid-cols-[1fr_1.2fr] md:gap-[56px]">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[6px] border border-line bg-bg-1">
                      <Image
                        src={post.ogImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
                      />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
                        {post.tag}
                      </span>
                      <h2 className="mt-[10px] font-display text-[clamp(1.4rem,2.2vw,1.8rem)] font-semibold leading-[1.15] text-ink-0 group-hover:text-accent transition-colors">
                        {post.title}
                      </h2>
                      <p className="mt-[12px] text-[14px] leading-[1.7] text-ink-1">
                        {post.description}
                      </p>
                      <div className="mt-[16px] flex flex-wrap items-center gap-[8px] text-[12.5px] text-ink-2">
                        <span>{post.datePublished}</span>
                        <span>·</span>
                        <span>{post.readingTime}</span>
                        <span>·</span>
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogPage;
