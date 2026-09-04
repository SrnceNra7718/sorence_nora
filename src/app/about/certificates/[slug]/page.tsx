import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import PageLayout from "@/app/components/layout/PageLayout";
import JsonLd from "@/app/components/SEO/JsonLd";
import Badge from "@/app/components/ui/Badge";
import PdfPreview from "@/app/components/certificates/PdfPreview";
import { siteConfig } from "@/lib/siteConfig";
import {
  personJsonLd,
  breadcrumbJsonLd,
  certificateJsonLd,
} from "@/lib/seo";
import { Certificate, getCertificateBySlug, certificates } from "@/lib/certificates";

interface CertificatePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CertificatePageProps): Promise<Metadata> {
  const { slug } = await params;
  const cert = getCertificateBySlug(slug);
  if (!cert) return {};

  const description =
    cert.description ??
    `${cert.recipient ?? "Sorence Nora"} completed "${cert.title}" from ${cert.issuer}.`;

  return {
    title: `${cert.title} — Certificate | ${siteConfig.name}`,
    description,
    keywords: cert.skills,
    alternates: {
      canonical: `${siteConfig.siteUrl}/about/certificates/${cert.slug}`,
    },
    openGraph: {
      title: `${cert.title} — Certificate by ${cert.issuer}`,
      description,
      url: `${siteConfig.siteUrl}/about/certificates/${cert.slug}`,
      type: "article",
      locale: "en_PH",
      images: [
        {
          url: siteConfig.author.image,
          width: 400,
          height: 400,
          alt: `${cert.title} — Certificate from ${cert.issuer}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${cert.title} — Certificate by ${cert.issuer}`,
      description,
      images: [siteConfig.author.image],
    },
  };
}

export async function generateStaticParams() {
  return certificates.map((cert) => ({ slug: cert.slug }));
}

function getRelatedCertificates(cert: Certificate): Certificate[] {
  const related: Certificate[] = [];
  if (cert.learningPath) {
    related.push(
      ...certificates.filter(
        (c) =>
          c.learningPath?.title === cert.learningPath?.title &&
          c.id !== cert.id,
      ),
    );
  } else {
    related.push(
      ...certificates.filter(
        (c) => c.issuer === cert.issuer && c.id !== cert.id,
      ),
    );
  }
  return related;
}

const CertificatePage = async ({ params }: CertificatePageProps) => {
  const { slug } = await params;
  const cert = getCertificateBySlug(slug);

  if (!cert) {
    notFound();
  }

  const related = getRelatedCertificates(cert);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: cert.learningPath
        ? "Certifications"
        : "Certifications",
      href: "/about#certifications",
    },
    { label: cert.title, href: `/about/certificates/${cert.slug}` },
  ];

  const pdfUrl = cert.pdf;

  return (
    <PageLayout>
      <JsonLd
        data={[
          certificateJsonLd(cert),
          breadcrumbJsonLd(breadcrumbs),
          personJsonLd(),
        ]}
      />

      <section className="section-pad pt-[150px]">
        <div className="wrap">
          <div className="eyebrow" data-circuit-node="certificates">
            <span className="relative flex flex-row items-center gap-[6px]">
              <span className="absolute -left-3 top-0 hidden md:block">
                &lt;
              </span>
              <span className="material-symbols-outlined block text-[14px]">
                {"workspace_premium"}
              </span>
              <span className="hidden md:inline">{"Certificate"}</span>
              <span className="absolute -right-6 top-0 hidden md:block">
                /&gt;
              </span>
            </span>
          </div>

          <nav aria-label="Breadcrumb" className="mt-[20px]">
            <ol className="flex items-center gap-[8px] text-[11.5px] font-mono uppercase tracking-[0.08em] text-ink-2">
              <li>
                <Link href="/" className="hover:text-accent">
                  Home
                </Link>
              </li>
              <span>›</span>
              <li>
                <Link href="/about" className="hover:text-accent">
                  About
                </Link>
              </li>
              <span>›</span>
              <li className="text-ink-1">{cert.title}</li>
            </ol>
          </nav>

          <h1
            id="cert-title"
            className="mt-[20px] font-display text-[clamp(2.2rem,4.8vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.01em] text-ink-0"
          >
            {cert.title}
          </h1>

          {cert.learningPath && (
            <p className="mt-[12px] font-mono text-[12px] text-ink-2">
              Part of{" "}
              <Link
                href="/about"
                className="text-accent hover:underline"
              >
                {cert.learningPath.provider}
              </Link>{" "}
              ·{" "}
              <span className="text-ink-1">{cert.learningPath.title}</span>
            </p>
          )}

          <div className="mt-[36px] grid grid-cols-1 gap-[24px] lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-[22px]">
              <dl className="space-y-[12px]">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
                    Issuer
                  </dt>
                  <dd className="mt-[4px] text-[14px] text-ink-1">
                    {cert.issuer}
                  </dd>
                </div>
                {cert.issueDate && (
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
                      Issue date
                    </dt>
                    <dd className="mt-[4px] text-[14px] text-ink-1">
                      {cert.issueDate}
                    </dd>
                  </div>
                )}
                {cert.recipient && (
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
                      Recipient
                    </dt>
                    <dd className="mt-[4px] text-[14px] text-ink-1">
                      {cert.recipient}
                    </dd>
                  </div>
                )}
                {cert.instructor && (
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
                      Instructor
                    </dt>
                    <dd className="mt-[4px] text-[14px] text-ink-1">
                      {cert.instructor}
                    </dd>
                  </div>
                )}
                {cert.duration && (
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
                      Duration
                    </dt>
                    <dd className="mt-[4px] text-[14px] text-ink-1">
                      {cert.duration}
                    </dd>
                  </div>
                )}
                {cert.credentialId && (
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
                      Credential ID
                    </dt>
                    <dd className="mt-[4px] text-[14px] font-mono text-ink-1">
                      {cert.credentialId}
                    </dd>
                  </div>
                )}
                {cert.courseType && (
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
                      Certificate type
                    </dt>
                    <dd className="mt-[4px] text-[14px] text-ink-1">
                      {cert.courseType}
                    </dd>
                  </div>
                )}
                {cert.isLearningPathCertificate && (
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
                      Learning path
                    </dt>
                    <dd className="mt-[4px] text-[14px] text-ink-1">
                      {cert.learningPath?.provider} —{" "}
                      {cert.learningPath?.title}
                    </dd>
                  </div>
                )}
              </dl>

              {cert.skills && cert.skills.length > 0 && (
                <div className="flex flex-wrap gap-[8px]">
                  {cert.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              )}

              {cert.description && (
                <p className="max-w-[48rem] text-[15px] leading-[1.7] text-ink-1">
                  {cert.description}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-[16px]">
              <PdfPreview certificate={cert} />

              <div className="flex flex-wrap gap-[12px]">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-[8px] rounded-[2px] border border-accent bg-accent px-[24px] py-[12px] font-mono text-[12.5px] font-medium text-accent-ink transition-colors hover:bg-[#f0b25d]"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    open_in_full
                  </span>
                  Open PDF
                </a>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-[48px]">
              <h2 className="mb-[20px] font-display text-[clamp(1.3rem,2.4vw,1.6rem)] font-semibold text-ink-0">
                {cert.learningPath
                  ? "More from this learning path"
                  : "Related certificates"}
              </h2>
              <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/about/certificates/${rel.slug}`}
                    className="group flex items-center justify-between gap-[16px] rounded-[6px] border border-line bg-bg-1 p-[18px] transition-colors hover:border-accent"
                  >
                    <div>
                      <p className="font-display text-[1.05rem] font-medium text-ink-0 group-hover:text-accent transition-colors">
                        {rel.title}
                      </p>
                      <p className="mt-[2px] text-[13px] text-ink-1">
                        {rel.issuer} · {rel.year}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-[20px] text-ink-2 group-hover:text-accent transition-colors">
                      chevron_right
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-[48px] border-t border-line pt-[24px]">
            <Link
              href="/about"
              className="inline-flex items-center gap-[6px] font-mono text-[12.5px] text-accent transition-colors hover:underline"
            >
              ← Back to About
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CertificatePage;
