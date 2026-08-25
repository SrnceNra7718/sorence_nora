import React from "react";
import Reveal from "@/app/components/effects/Reveal";
import SectionEyebrow from "@/app/components/ui/SectionEyebrow";
import Timeline from "@/app/components/ui/Timeline";
import { education, certifications } from "@/lib/timeline";

const About = () => {
  return (
    <section className="section-pad" id="about">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-[0.5fr_1fr] gap-[30px] md:gap-[60px]">
          <div>
            <SectionEyebrow className="reveal" data-circuit-node="about">
              03 / About
            </SectionEyebrow>
            <h2 className="font-display font-semibold text-[clamp(2.4rem,5.5vw,4.4rem)] leading-[1.02] tracking-[-0.01em] text-ink-0 reveal reveal-d1">
              Sorence<br />Nora.
            </h2>
          </div>
          <div>
            <div className="text-[1.05rem] text-ink-1 leading-[1.85] reveal reveal-d1">
              <p>
                I&apos;m a frontend web developer based in the <strong className="text-ink-0 font-medium">Philippines</strong>, specializing in building modern, responsive web applications.
              </p>
              <p className="mt-[18px]">
                I care about the details that make an interface feel considered — clear hierarchy, consistent spacing, and interactions that respond the way people expect. My current focus is building full-stack features with React, Next.js and Supabase, and refining how I ship production-ready frontend work.
              </p>
            </div>
            <div className="flex flex-wrap gap-0 mt-[36px] items-center reveal reveal-d2">
              <span className="font-mono text-[12px] text-ink-1 border border-line-strong px-[14px] py-[8px] rounded-[999px]">
                Education
              </span>
              <span className="text-ink-2 px-[10px] text-[13px]">→</span>
              <span className="font-mono text-[12px] text-ink-1 border border-line-strong px-[14px] py-[8px] rounded-[999px]">
                OJT
              </span>
              <span className="text-ink-2 px-[10px] text-[13px]">→</span>
              <span className="font-mono text-[12px] text-ink-1 border border-line-strong px-[14px] py-[8px] rounded-[999px]">
                Projects
              </span>
              <span className="text-ink-2 px-[10px] text-[13px]">→</span>
              <span className="font-mono text-[12px] text-ink-1 border border-line-strong px-[14px] py-[8px] rounded-[999px]">
                Current focus
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[70px]">
          <Timeline heading={education.heading} items={education.items} />
          <Timeline heading={certifications.heading} items={certifications.items} />
        </div>
      </div>
    </section>
  );
};

export default About;
