import React from "react";
import LearningPathGroup from "@/app/components/certificates/LearningPathGroup";
import CertCard from "@/app/components/certificates/CertCard";
import {
  getCertificateGroups,
  getStandaloneCertificates,
} from "@/lib/certificates";

const CertificatesSection: React.FC = () => {
  const groups = getCertificateGroups();
  const standalone = getStandaloneCertificates();

  return (
    <section className="section-pad border-t border-line">
      <div className="wrap">
        <div className="eyebrow" data-circuit-node="certifications">
          <span className="relative flex flex-row items-center gap-[6px]">
            <span className="absolute -left-3 top-0 hidden md:block">
              &lt;
            </span>
            <span className="material-symbols-outlined block text-[14px]">
              {"workspace_premium"}
            </span>
            <span className="hidden md:inline">{"Certifications"}</span>
            <span className="absolute -right-6 top-0 hidden md:block">
              /&gt;
            </span>
          </span>
        </div>

        <h2 className="font-display text-[clamp(1.8rem,3vw,2.2rem)] font-semibold text-ink-0">
          Certifications
        </h2>

        <div className="mt-[40px]">
          {groups.map((group) => {
            if (group.learningPath) {
              return (
                <LearningPathGroup
                  key={group.provider}
                  learningPath={group.learningPath}
                  certificates={group.certificates}
                />
              );
            }
            return null;
          })}

          {standalone.length > 0 && (
            <div>
              <h3 className="mb-[20px] font-display text-[clamp(1.3rem,2.4vw,1.6rem)] font-semibold text-ink-0">
                Other Certifications
              </h3>
              <div className="grid grid-cols-1 gap-[24px]">
                {standalone.map((cert, i) => (
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
      </div>
    </section>
  );
};

export default CertificatesSection;
