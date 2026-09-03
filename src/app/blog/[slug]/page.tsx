import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import PageLayout from "@/app/components/layout/PageLayout";
import JsonLd from "@/app/components/SEO/JsonLd";
import { siteConfig } from "@/lib/siteConfig";
import { breadcrumbJsonLd, articleJsonLd, personJsonLd } from "@/lib/seo";
import { blogPosts } from "@/lib/blog";
import { blogContent, BlogContentBlock } from "@/lib/blogContent";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `${siteConfig.siteUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.siteUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      locale: "en_PH",
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.ogImage,
          width: 1200,
          height: 630,
          alt: `${post.title} — article by ${post.author}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.ogImage],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

const renderBlock = (block: BlogContentBlock, index: number) => {
  const key = `${block.type}-${index}`;

  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={key}
          className="mb-[18px] text-[15px] leading-[1.7] text-ink-1"
        >
          {block.text}
        </p>
      );
    case "heading":
      const headingClasses: Record<number, string> = {
        2: "mb-[16px] mt-[32px] font-display text-[clamp(1.6rem,2.8vw,2rem)] font-semibold text-ink-0 first:mt-0",
        3: "mb-[12px] mt-[24px] font-display text-[1.3rem] font-semibold text-ink-0",
        4: "mb-[10px] mt-[20px] font-display text-[1.1rem] font-semibold text-ink-0",
      };
      const Tag = `h${block.level}` as keyof JSX.IntrinsicElements;
      return (
        <Tag key={key} className={headingClasses[block.level] as string}>
          {block.text}
        </Tag>
      );
    case "code":
      return (
        <div
          key={key}
          className="relative mb-[18px] overflow-x-auto rounded-[6px] border border-line bg-bg-1"
        >
          <div className="flex items-center justify-between border-b border-line px-[14px] py-[6px] font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-2">
            <span>{block.language}</span>
            {block.filename && <span>{block.filename}</span>}
          </div>
          <pre className="p-[16px] text-[13px] leading-[1.6]">
            <code>{block.code}</code>
          </pre>
        </div>
      );
    case "list":
      return (
        <ul key={key} className="mb-[18px] list-disc space-y-[6px] pl-[22px] text-[15px] leading-[1.7] text-ink-1">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "image":
      return (
        <figure key={key} className="mb-[18px]">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[6px] border border-line bg-bg-1">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover object-top"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-[8px] font-mono text-[11.5px] text-ink-2">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "callout":
      return (
        <aside
          key={key}
          className="mb-[18px] rounded-[6px] border-l-2 border-accent bg-bg-1 px-[22px] py-[16px]"
        >
          <p className="text-[14.5px] leading-[1.7] text-ink-1">
            <span className="mr-[8px] font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
              Note
            </span>
            {block.text}
          </p>
        </aside>
      );
    default:
      return null;
  }
};

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post || !blogContent[slug]) {
    notFound();
  }

  const content = blogContent[slug];
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <PageLayout>
      <JsonLd
        data={[
          articleJsonLd({
            title: post.title,
            description: post.description,
            slug: post.slug,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
            image: post.ogImage,
            tags: post.tags,
          }),
          breadcrumbJsonLd(breadcrumbs),
          personJsonLd(),
        ]}
      />

      <article className="section-pad pt-[150px]">
        <div className="wrap">
          <div className="eyebrow" data-circuit-node="blog">
            <span className="relative flex flex-row items-center gap-[6px]">
              <span className="absolute -left-3 top-0 hidden md:block">&lt;</span>
              <span className="material-symbols-outlined block text-[14px]">
                {"article"}
              </span>
              <span className="hidden md:inline">{"Article"}</span>
              <span className="absolute -right-6 top-0 hidden md:block">/&gt;</span>
            </span>
          </div>

          <h1 className="mt-[20px] font-display text-[clamp(2.2rem,4.8vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.01em] text-ink-0">
            {post.title}
          </h1>

          <div className="mt-[18px] flex flex-wrap items-center gap-[16px] text-[13px] text-ink-2">
            <span className="font-mono text-accent">{post.tag}</span>
            <span>·</span>
            <span>By {post.author}</span>
            <span>·</span>
            <span>{post.datePublished}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>

          {post.ogImage && post.ogImage !== "/forProject_Section/scs.png" && (
            <div className="mt-[32px] aspect-[16/9] overflow-hidden rounded-[6px] border border-line">
              <Image
                src={post.ogImage}
                alt={post.title}
                width={1200}
                height={630}
                className="h-full w-full object-cover object-top"
              />
            </div>
          )}

          <nav className="mt-[32px] mb-[36px]">
            <ol className="flex items-center gap-[8px] text-[11.5px] font-mono uppercase tracking-[0.08em] text-ink-2">
              <li>
                <Link href="/" className="hover:text-accent">
                  Home
                </Link>
              </li>
              <span>›</span>
              <li>
                <Link href="/blog" className="hover:text-accent">
                  Blog
                </Link>
              </li>
              <span>›</span>
              <li className="text-ink-1">{post.title}</li>
            </ol>
          </nav>

          <div className="mt-[12px] max-w-[48rem]">
            {content.content.map((block, index) => renderBlock(block, index))}
          </div>

          <div className="mt-[48px] border-t border-line pt-[36px]">
            <div className="flex flex-wrap items-center justify-between gap-[24px]">
              <div>
                <p className="font-display text-[clamp(1.1rem,2vw,1.3rem)] font-semibold text-ink-0">
                  Read more
                </p>
              </div>
              <div className="flex flex-wrap gap-[16px]">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-[6px] font-mono text-[13px] text-ink-1 transition-colors hover:text-accent"
                >
                  ← All articles
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-[6px] font-mono text-[13px] text-ink-1 transition-colors hover:text-accent"
                >
                  Projects →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
};

export default BlogPostPage;
