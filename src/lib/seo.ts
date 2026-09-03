import { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export function createMetadata(params: {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  images?: Array<{
    url: string;
    width?: number;
    height?: number;
    alt: string;
  }>;
  noIndex?: boolean;
  openGraph?: {
    type?: "website" | "article" | "profile" | "book";
  };
}): Metadata {
  const title = params.title
    ? `${params.title} | ${siteConfig.name}`
    : siteConfig.title;
  const description = params.description ?? siteConfig.description;
  const canonicalUrl = params.canonical ?? siteConfig.siteUrl;
  const ogImage = params.images?.[0] ?? {
    url: `${siteConfig.siteUrl}/SNPic.png`,
    width: 400,
    height: 400,
    alt: `${siteConfig.name} — ${siteConfig.author.jobTitle}`,
  };

  const metadata: Metadata = {
    title,
    description,
    keywords: params.keywords ?? siteConfig.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: params.openGraph?.type ?? "website",
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: siteConfig.localeLong,
      images: [
        {
          url: ogImage.url,
          width: ogImage.width,
          height: ogImage.height,
          alt: ogImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
    robots: params.noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };

  return metadata;
}

export function personJsonLd(): Record<string, unknown> {
  const socialSameAs = Object.entries(siteConfig.social)
    .filter(([key]) => key !== "email")
    .map(([, value]) => value as string);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    url: siteConfig.siteUrl,
    jobTitle: siteConfig.author.jobTitle,
    description: siteConfig.author.bio,
    location: {
      "@type": "Place",
      name: siteConfig.location,
    },
    image: {
      "@type": "ImageObject",
      url: siteConfig.author.image,
      width: siteConfig.author.imageWidth,
      height: siteConfig.author.imageHeight,
    },
    ...(socialSameAs.length > 0
      ? { sameAs: socialSameAs }
      : {}),
    knowsAbout: siteConfig.topics,
  };
}

export function websiteJsonLd() {
  const person = personJsonLd();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    author: person,
    inLanguage: siteConfig.localeLong,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.siteUrl}/search?q={search_term_string}`,
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform",
        ],
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteConfig.siteUrl}${item.href}`,
    })),
  };
}

export function articleJsonLd(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  tags?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}/favicon-v2.png`,
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    image: article.image ?? `${siteConfig.siteUrl}/SNPic.png`,
    articleSection: "Blog",
    keywords: article.tags ? article.tags.join(", ") : undefined,
  };
}

export function projectJsonLd(project: {
  name: string;
  description: string;
  slug: string;
  image: string;
  dateCreated: string;
  author: string;
  url?: string;
  programmingLanguage?: string[];
  applicationCategory?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    url: project.url ?? `${siteConfig.siteUrl}/projects/${project.slug}`,
    image: project.image,
    author: {
      "@type": "Person",
      name: project.author,
    },
    dateCreated: project.dateCreated,
    keywords: project.programmingLanguage
      ? project.programmingLanguage.join(", ")
      : undefined,
    creativeWorkStatus: "Published",
    inLanguage: "en",
  };
}

export function faqJsonLd(questions: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

export function profilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: siteConfig.siteUrl,
    dateModified: new Date().toISOString().split("T")[0],
    author: personJsonLd(),
  };
}
