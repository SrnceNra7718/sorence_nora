import React from "react";
import Link from "next/link";
import Badge from "@/app/components/ui/Badge";
import { Certificate } from "@/lib/certificates";
import LazyPdfPreview from "./LazyPdfPreview";

interface CertCardProps {
  certificate: Certificate;
  variant?: "compact" | "detailed";
  showPreview?: boolean;
  index?: number;
}

const CertCard: React.FC<CertCardProps> = ({
  certificate,
  variant = "compact",
  showPreview = false,
  index,
}) => {
  const {
    title,
    issuer,
    year,
    issueDate,
    recipient,
    credentialId,
    description,
    courseType,
    skills,
    slug,
    instructor,
    duration,
    isLearningPathCertificate,
  } = certificate;

  if (variant === "compact") {
    const isLP = !!isLearningPathCertificate;
    return (
      <Link
        href={`/about/certificates/${slug}`}
        className="group grid grid-cols-[100px_1fr] gap-[16px] py-[22px] transition-colors duration-200 hover:bg-bg-1/40 md:gap-[24px]"
      >
        <span className="font-mono text-[13px] text-accent pt-[2px]">
          {year}
        </span>
        <div>
          {isLP && (
            <span className="mb-[4px] inline-block font-mono text-[10px] uppercase tracking-[0.08em] text-ink-2">
              {issuer}
            </span>
          )}
          <p className="font-display text-[1.05rem] font-medium text-ink-0 group-hover:text-accent transition-colors">
            {title}
          </p>
          <p className="mt-[2px] text-[13.5px] text-ink-1">
            {isLP
              ? issuer + " · Learning Path Certificate"
              : issuer + " · " + (courseType ?? "")}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <article
      className="rounded-[6px] border border-line bg-bg-1 p-[28px]"
      aria-labelledby={`cert-title-${slug}`}
    >
      <header className="mb-[24px] flex flex-wrap items-start justify-between gap-[16px] pb-[16px] border-b border-line">
        <div>
          {certificate.learningPath && (
            <p className="mb-[6px] font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
              {certificate.learningPath.provider} · Learning Path
            </p>
          )}
          <h3
            id={`cert-title-${slug}`}
            className="font-display text-[clamp(1.3rem,2.4vw,1.6rem)] font-semibold text-ink-0"
          >
            {title}
          </h3>
        </div>
        {index !== undefined && (
          <span className="font-mono text-[12px] text-ink-2">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </header>

      <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-[180px_1fr] sm:gap-[24px]">
        <dl className="space-y-[12px]">
          {issuer && (
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
                Issuer
              </dt>
              <dd className="mt-[4px] text-[14px] text-ink-1">{issuer}</dd>
            </div>
          )}
          {issueDate && (
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
                Issue date
              </dt>
              <dd className="mt-[4px] text-[14px] text-ink-1">{issueDate}</dd>
            </div>
          )}
          {recipient && (
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
                Recipient
              </dt>
              <dd className="mt-[4px] text-[14px] text-ink-1">{recipient}</dd>
            </div>
          )}
          {instructor && (
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
                Instructor
              </dt>
              <dd className="mt-[4px] text-[14px] text-ink-1">{instructor}</dd>
            </div>
          )}
          {duration && (
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
                Duration
              </dt>
              <dd className="mt-[4px] text-[14px] text-ink-1">{duration}</dd>
            </div>
          )}
          {credentialId && (
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
                Credential ID
              </dt>
              <dd className="mt-[4px] text-[14px] font-mono text-ink-1">
                {credentialId}
              </dd>
            </div>
          )}
          {courseType && (
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
                Type
              </dt>
              <dd className="mt-[4px] text-[14px] text-ink-1">{courseType}</dd>
            </div>
          )}
        </dl>

        <div className="flex flex-col gap-[16px]">
          {description && (
            <p className="text-[15px] leading-[1.7] text-ink-1">
              {description}
            </p>
          )}
          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-[8px]">
              {skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          )}
          {showPreview && <LazyPdfPreview certificate={certificate} compact={false} />}
        </div>
      </div>

      <div className="mt-[22px] flex flex-wrap gap-[12px] border-t border-line pt-[16px]">
        <Link
          href={`/about/certificates/${slug}`}
          className="inline-flex items-center justify-center gap-[8px] rounded-[2px] border border-accent bg-accent px-[24px] py-[12px] font-mono text-[12.5px] font-medium text-accent-ink transition-colors hover:bg-[#f0b25d]"
        >
          <span className="material-symbols-outlined text-[16px]">
            visibility
          </span>
          View details
        </Link>
        <a
          href={certificate.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-[8px] rounded-[2px] border border-line-strong px-[24px] py-[12px] font-mono text-[12.5px] text-ink-0 transition-colors hover:border-accent hover:text-accent"
        >
          <span className="material-symbols-outlined text-[16px]">
            open_in_new
          </span>
          Open PDF
        </a>
      </div>
    </article>
  );
};

export default CertCard;
