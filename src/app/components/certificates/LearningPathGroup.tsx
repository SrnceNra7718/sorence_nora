import React from "react";
import CertCard from "@/app/components/certificates/CertCard";
import Badge from "@/app/components/ui/Badge";
import { Certificate, LearningPath } from "@/lib/certificates";

interface LearningPathGroupProps {
  learningPath: LearningPath;
  certificates: Certificate[];
  compact?: boolean;
}

const LearningPathGroup: React.FC<LearningPathGroupProps> = ({
  learningPath,
  certificates,
  compact = false,
}) => {
  const lpCert = certificates.find((c) => c.isLearningPathCertificate);
  const courseCerts = certificates.filter((c) => !c.isLearningPathCertificate);

  const allSkills = Array.from(
    new Set(certificates.flatMap((c) => c.skills ?? [])),
  );

  if (compact) {
    const [firstLine, ...rest] = learningPath.title.split(",");
    const secondLine = rest.join(",").trim();

    return (
      <div className="reveal reveal-d1 mb-[40px] last:mb-0">
        <div className="mb-[18px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
            {learningPath.provider}
          </p>
          <p className="font-display text-[clamp(1.2rem,2.4vw,1.5rem)] font-semibold leading-[1.1] text-ink-0">
            {firstLine}
            {secondLine && (
              <>
                <br />
                {secondLine}
              </>
            )}
          </p>
        </div>

        <div className="overflow-hidden rounded-[6px] border border-line">
          {certificates.map((cert) => (
            <CertCard
              key={cert.id}
              certificate={cert}
              variant="compact"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-[60px] last:mb-0">
      <div className="mb-[24px]">
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
          {learningPath.provider}
        </p>
        <h3 className="font-display text-[clamp(1.5rem,2.8vw,2.2rem)] font-semibold leading-[1.05] text-ink-0">
          {learningPath.title}
        </h3>
        {learningPath.description && (
          <p className="mt-[12px] max-w-[52ch] text-[15px] leading-[1.7] text-ink-1">
            {learningPath.description}
          </p>
        )}
        <p className="mt-[8px] font-mono text-[12px] text-ink-2">
          {certificates.length} certificates completed
        </p>
      </div>

      {allSkills.length > 0 && (
        <div className="mb-[24px] flex flex-wrap gap-[8px]">
          {allSkills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      )}

      {lpCert && (
        <div className="mb-[32px]">
          <CertCard
            certificate={lpCert}
            variant="detailed"
            showPreview={false}
          />
        </div>
      )}

      {courseCerts.length > 0 && (
        <div>
          <p className="mb-[18px] font-mono text-[11.5px] uppercase tracking-[0.08em] text-ink-2">
            {courseCerts.length} course certificates
          </p>
          <div className="grid grid-cols-1 gap-[24px]">
            {courseCerts.map((cert, i) => (
              <CertCard
                key={cert.id}
                certificate={cert}
                variant="detailed"
                showPreview={true}
                index={i}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LearningPathGroup;
