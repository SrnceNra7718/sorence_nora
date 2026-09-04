import React from "react";
import Link from "next/link";
import LearningPathGroup from "@/app/components/certificates/LearningPathGroup";
import { getCertificateGroups, getStandaloneCertificates } from "@/lib/certificates";

const CertificationsSummary: React.FC = () => {
  const groups = getCertificateGroups();
  const standalone = getStandaloneCertificates();

  return (
    <div className="mt-[70px]">
      <p className="reveal font-mono text-[12px] tracking-[0.08em] text-ink-1 uppercase mb-[22px] flex items-center gap-[10px]">
        <span className="block w-[22px] h-[1px] bg-line-strong" />
        CERTIFICATIONS
      </p>

      {groups.map((group) => {
        if (group.learningPath) {
          return (
            <LearningPathGroup
              key={group.provider}
              learningPath={group.learningPath}
              certificates={group.certificates}
              compact={true}
            />
          );
        }
        return null;
      })}

      {standalone.length > 0 && (
        <div className="reveal reveal-d2 mb-[40px] last:mb-0">
          <div className="overflow-hidden rounded-[6px] border border-line">
            {standalone.map((cert) => (
              <Link
                key={cert.id}
                href={`/about/certificates/${cert.slug}`}
                className="group grid grid-cols-[100px_1fr] gap-[16px] py-[22px] transition-colors duration-200 hover:bg-bg-1/40 md:gap-[24px]"
              >
                <span className="font-mono text-[13px] text-accent pt-[2px]">
                  {cert.year}
                </span>
                <div>
                  <p className="font-display text-[1.05rem] font-medium text-ink-0 group-hover:text-accent transition-colors">
                    {cert.title}
                  </p>
                  <p className="mt-[2px] text-[13.5px] text-ink-1">
                    {cert.issuer} · {cert.courseType ?? ""}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="reveal reveal-d3 pt-[20px]">
        <Link
          href="/about"
          className="inline-flex items-center gap-[6px] font-mono text-[12.5px] text-accent transition-colors hover:underline"
        >
          View all certifications →
        </Link>
      </div>
    </div>
  );
};

export default CertificationsSummary;
