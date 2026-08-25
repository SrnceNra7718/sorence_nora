"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Reveal from "@/app/components/effects/Reveal";
import Badge from "@/app/components/ui/Badge";
import { project } from "@/lib/projects";
import { CAROUSEL_INTERVAL } from "@/lib/motion";

const Work = () => {
  const [current, setCurrent] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const total = project.images.length;

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(motionQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    motionQuery.addEventListener("change", handleChange);
    return () => motionQuery.removeEventListener("change", handleChange);
  }, []);

  const showFrame = useCallback(
    (i: number) => {
      setCurrent(((i % total) + total) % total);
    },
    [total]
  );

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => {
      showFrame(current + 1);
    }, CAROUSEL_INTERVAL);
    return () => clearInterval(timer);
  }, [current, reduceMotion, showFrame]);

  return (
    <section className="section-pad" id="work">
      <div className="wrap">
        <div className="flex justify-between items-end flex-wrap gap-[20px] mb-[56px] reveal">
          <div>
            <div
              className="eyebrow"
              data-circuit-node="work"
              style={{ marginBottom: "14px" }}
            >
              02 / Selected Work
            </div>
            <h2 className="font-display font-semibold text-[clamp(2.4rem,5.5vw,4.4rem)] leading-[1.02] tracking-[-0.01em] text-ink-0">
              Work that<br />shipped.
            </h2>
          </div>
          <span className="font-mono text-[12px] text-ink-2">01 OF 01 — MORE IN PROGRESS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-[32px] md:gap-[56px] items-center reveal reveal-d1">
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
              FRAME <span id="frameCount">{String(current + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}</span>
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
            <p className="font-mono text-[13px] text-accent mb-[12px]">{project.number}</p>
            <h3 className="font-display font-semibold text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.08] mb-[20px]">
              {project.title}
            </h3>

            <div className="py-[12px] border-t border-line text-[14px]">
              <div className="flex gap-[16px] py-[12px] border-t border-line">
                <span className="font-mono text-[11px] tracking-[0.06em] text-ink-2 w-[110px] flex-shrink-0 pt-[2px] uppercase">
                  Role
                </span>
                <span className="text-ink-1 leading-[1.6]">{project.role}</span>
              </div>
              <div className="flex gap-[16px] py-[12px] border-t border-line">
                <span className="font-mono text-[11px] tracking-[0.06em] text-ink-2 w-[110px] flex-shrink-0 pt-[2px] uppercase">
                  Context
                </span>
                <span className="text-ink-1 leading-[1.6]">{project.context}</span>
              </div>
              <div className="flex gap-[16px] py-[12px] border-t border-line last:border-b">
                <span className="font-mono text-[11px] tracking-[0.06em] text-ink-2 w-[110px] flex-shrink-0 pt-[2px] uppercase">
                  Overview
                </span>
                <span className="text-ink-1 leading-[1.6]">{project.overview}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-[8px] mt-[22px]">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            <p className="font-mono text-[12px] text-ink-2 mt-[24px] flex items-center gap-[8px]">
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
