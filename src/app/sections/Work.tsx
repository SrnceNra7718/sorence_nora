"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import Badge from "@/app/components/ui/Badge";
import { project } from "@/lib/projects";

const Work = () => {
  const [current, setCurrent] = useState(0);
  const total = project.images.length;

  const showFrame = useCallback(
    (i: number) => {
      setCurrent(((i % total) + total) % total);
    },
    [total],
  );

  return (
    <section className="section-pad" id="work">
      <div className="wrap">
        <div className="reveal mb-[56px] flex flex-wrap items-end justify-between gap-[20px]">
          <div>
            <div
              className="eyebrow"
              data-circuit-node="work"
              style={{ marginBottom: "14px" }}
            >
              <span className="relative flex flex-row items-center gap-[6px]">
                <span className="absolute -left-3 top-0 hidden md:block">
                  &lt;
                </span>
                <span className="material-symbols-outlined block text-[14px]">
                  {"deployed_code"}
                </span>
                <span className="hidden md:inline">{"Work"}</span>
                <span className="absolute -right-6 top-0 hidden md:block">
                  /&gt;
                </span>
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-ink-0">
              Work that
              <br />
              shipped.
            </h2>
          </div>
          <span className="font-mono text-[12px] text-ink-2">
            01 OF 01 — MORE IN PROGRESS
          </span>
        </div>

        <div className="reveal reveal-d1 grid grid-cols-1 items-center gap-[32px] md:grid-cols-[1.1fr_0.9fr] md:gap-[56px]">
          <div className="project-visual">
            {project.images.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`${project.title} — frame ${i + 1}`}
                fill
                sizes="(max-width: 900px) 100vw, 60vw"
                className={`proj-img object-cover object-top ${i === current ? "active" : ""}`}
                priority={i === 0}
              />
            ))}
            <span className="project-frame-label mono">
              FRAME{" "}
              <span id="frameCount">
                {String(current + 1).padStart(2, "0")}/
                {String(total).padStart(2, "0")}
              </span>
            </span>
            <div className="project-nav">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => showFrame(i)}
                  className={i === current ? "active" : ""}
                  aria-label={`View frame ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="mb-[12px] font-mono text-[13px] text-accent">
              {project.number}
            </p>
            <h3 className="mb-[20px] font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-[1.08]">
              {project.title}
            </h3>

            <div className="border-t border-line py-[12px] text-[14px]">
              <div className="flex gap-[16px] border-t border-line py-[12px]">
                <span className="w-[110px] flex-shrink-0 pt-[2px] font-mono text-[11px] uppercase tracking-[0.06em] text-ink-2">
                  Role
                </span>
                <span className="leading-[1.6] text-ink-1">{project.role}</span>
              </div>
              <div className="flex gap-[16px] border-t border-line py-[12px]">
                <span className="w-[110px] flex-shrink-0 pt-[2px] font-mono text-[11px] uppercase tracking-[0.06em] text-ink-2">
                  Context
                </span>
                <span className="leading-[1.6] text-ink-1">
                  {project.context}
                </span>
              </div>
              <div className="flex gap-[16px] border-t border-line py-[12px] last:border-b">
                <span className="w-[110px] flex-shrink-0 pt-[2px] font-mono text-[11px] uppercase tracking-[0.06em] text-ink-2">
                  Overview
                </span>
                <span className="leading-[1.6] text-ink-1">
                  {project.overview}
                </span>
              </div>
            </div>

            <div className="mt-[22px] flex flex-wrap gap-[8px]">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            <p className="mt-[24px] flex items-center gap-[8px] font-mono text-[12px] text-ink-2">
              <span className="text-ink-2">—</span>
              {project.liveUrl || project.githubUrl
                ? "View case study"
                : "Full case study & live links coming soon"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
