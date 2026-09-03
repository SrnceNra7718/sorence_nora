import React from "react";
import Image from "next/image";
import Link from "next/link";
import Timeline from "@/app/components/ui/Timeline";
import { education, certifications } from "@/lib/timeline";

const About = () => {
  return (
    <section className="section-pad" id="about">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-[0.5fr_1fr] md:gap-[60px]">
          <div>
            <div
              className="eyebrow"
              data-circuit-node="about"
              style={{ marginBottom: "14px" }}
            >
              <span className="relative flex flex-row items-center gap-[6px]">
                <span className="absolute -left-3 top-0 hidden md:block">
                  &lt;
                </span>
                <span className="material-symbols-outlined block text-[14px]">
                  {"person"}
                </span>
                <span className="hidden md:inline">{"About"}</span>
                <span className="absolute -right-6 top-0 hidden md:block">
                  /&gt;
                </span>
              </span>
            </div>
            <h2 className="reveal reveal-d1 flex items-center gap-[18px] font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-ink-0">
              <Image
                src="/SNLogo.png"
                alt="Sorence Nora"
                width={90}
                height={90}
              />
              <span>
                Sorence
                <br />
                Nora.
              </span>
            </h2>
          </div>
          <div>
            <div className="reveal reveal-d1 text-[1.05rem] leading-[1.85] text-ink-1">
              <p>
                I&apos;m a frontend web developer based in the{" "}
                <strong className="font-medium text-ink-0">Philippines</strong>,
                specializing in building modern, responsive web applications.
              </p>
              <p className="mt-[18px]">
                I care about the details that make an interface feel considered
                — clear hierarchy, consistent spacing, and interactions that
                respond the way people expect. My current focus is building
                full-stack features with React, Next.js and Supabase, and
                refining how I ship production-ready frontend work.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-[18px] inline-flex items-center gap-[6px] font-mono text-[12.5px] text-accent"
            >
              Read more about me →
            </Link>
            <div className="reveal reveal-d2 mt-[36px] flex flex-wrap items-center gap-0">
              <span className="rounded-[999px] border border-line-strong px-[14px] py-[8px] font-mono text-[12px] text-ink-1">
                Education
              </span>
              <span className="px-[10px] text-[13px] text-ink-2">→</span>
              <span className="rounded-[999px] border border-line-strong px-[14px] py-[8px] font-mono text-[12px] text-ink-1">
                OJT
              </span>
              <span className="px-[10px] text-[13px] text-ink-2">→</span>
              <span className="rounded-[999px] border border-line-strong px-[14px] py-[8px] font-mono text-[12px] text-ink-1">
                Projects
              </span>
              <span className="px-[10px] text-[13px] text-ink-2">→</span>
              <span className="rounded-[999px] border border-line-strong px-[14px] py-[8px] font-mono text-[12px] text-ink-1">
                Current focus
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[70px]">
          <Timeline heading={education.heading} items={education.items} />
          <Timeline
            heading={certifications.heading}
            items={certifications.items}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
