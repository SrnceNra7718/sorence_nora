"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Magnetic from "@/app/components/effects/Magnetic";

const Hero = () => {
  const cubeRef = useRef<SVGGElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(motionQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    motionQuery.addEventListener("change", handleChange);
    return () => motionQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const cube = cubeRef.current;
    const heroSection = document.getElementById("hero");
    if (!cube || !heroSection) return;

    const handleMouseMove = (e: MouseEvent) => {
      const r = heroSection.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      cube.style.transform = `rotate(${px * 4}deg) translate(${px * 8}px, ${py * 8}px)`;
    };

    heroSection.addEventListener("mousemove", handleMouseMove);
    return () => heroSection.removeEventListener("mousemove", handleMouseMove);
  }, [reduceMotion]);

  return (
    <section
      className="hero flex min-h-[100svh] items-start pb-[80px] pt-[150px]"
      id="hero"
    >
      <div className="wrap">
        <div className="grid grid-cols-1 items-center gap-[48px] md:grid-cols-[1.15fr_0.85fr] md:gap-[60px]">
          <div>
            <p
              className="mb-[26px] flex flex-wrap items-center gap-[10px] font-mono text-[12px] tracking-[0.08em] text-ink-1"
              data-circuit-node="hero"
            >
              <span className="rounded-[3px] border border-[rgba(232,163,61,0.35)] bg-[rgba(232,163,61,0.06)] px-[8px] py-[3px] text-accent">
                FRONTEND DEVELOPER
              </span>
              <span className="text-ink-2">/</span>
              <span>PHILIPPINES</span>
              <span className="text-ink-2">·</span>
              <span>AVAILABLE FOR SELECT PROJECTS</span>
            </p>
            <h1 className="font-display text-[clamp(2.6rem,6.4vw,5.2rem)] font-semibold leading-[1.03] tracking-[-0.02em] text-ink-0">
              <span className="sr-only">
                Sorence Nora — Frontend Web Developer based in the Philippines
              </span>
              Scalable interfaces <br />
              <em className="text-accent" style={{ fontStyle: "normal" }}>
                built for real use.{" "}
              </em>
            </h1>
            <p className="mt-[26px] max-w-[46ch] text-[clamp(1rem,1.6vw,1.15rem)] leading-[1.7] text-ink-1">
              Frontend web developer based in the Philippines, building modern,
              responsive web applications with React, Next.js, TypeScript, and
              Tailwind CSS — from first component to production build.
            </p>
            <div className="mt-[42px] flex flex-wrap items-center gap-[18px]">
              <Magnetic>
                <Link
                  href="#work"
                  className="relative inline-flex items-center gap-[10px] overflow-hidden rounded-[2px] bg-accent px-[24px] py-[15px] font-mono text-[13px] font-medium tracking-[0.02em] text-accent-ink transition-colors duration-300 hover:bg-[#f0b25d]"
                >
                  VIEW SELECTED WORK{" "}
                  <span className="inline-block transition-transform duration-300">
                    →
                  </span>
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-[10px] rounded-[2px] border border-line-strong px-[24px] py-[15px] font-mono text-[13px] tracking-[0.02em] text-ink-0 transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  LET&apos;S TALK{" "}
                  <span className="inline-block transition-transform duration-300">
                    →
                  </span>
                </Link>
              </Magnetic>
            </div>
            <a
              href="https://drive.google.com/file/d/14s3Y6nlgkDAuJWRYq021temUH9k1tD1b/view?usp=sharing"
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center gap-[6px] border-b border-transparent pb-[2px] font-mono text-[12.5px] text-ink-1 transition-colors duration-300 hover:border-line-strong hover:text-ink-0"
            >
              View résumé ↗
            </a>
          </div>

          <div
            className="relative mx-auto aspect-square max-w-[460px]"
            aria-hidden="true"
          >
            <span className="absolute right-[2%] top-[6%] rotate-[3deg] rounded-[2px] border border-[rgba(232,163,61,0.4)] bg-[rgba(232,163,61,0.05)] px-[10px] py-[6px] font-mono text-[10px] tracking-[0.06em] text-accent">
              REV·A — 2026
            </span>
            <svg
              viewBox="0 0 400 400"
              fill="none"
              className="h-full w-full overflow-visible"
            >
              <g ref={cubeRef} className="transition-transform duration-100">
                <polygon
                  points="200,60 320,125 320,270 200,335 80,270 80,125"
                  className="diagram-line"
                  strokeDasharray="3 4"
                />
                <polygon
                  points="200,60 320,125 200,190 80,125"
                  className="diagram-line accent"
                />
                <line
                  x1="200"
                  y1="190"
                  x2="200"
                  y2="335"
                  className="diagram-line"
                />
                <line
                  x1="80"
                  y1="125"
                  x2="80"
                  y2="270"
                  className="diagram-line"
                />
                <line
                  x1="320"
                  y1="125"
                  x2="320"
                  y2="270"
                  className="diagram-line"
                />
                <circle cx="200" cy="190" r="3.5" className="diagram-dot" />
                <circle cx="200" cy="60" r="3" fill="#706D66" />
                <circle cx="320" cy="125" r="3" fill="#706D66" />
                <line
                  x1="200"
                  y1="20"
                  x2="200"
                  y2="60"
                  className="diagram-line"
                />
                <line
                  x1="30"
                  y1="125"
                  x2="80"
                  y2="125"
                  className="diagram-line"
                />
                <line
                  x1="320"
                  y1="125"
                  x2="370"
                  y2="125"
                  className="diagram-line"
                />
                <text
                  x="205"
                  y="18"
                  className="diagram-anno accent"
                  fill="var(--accent)"
                  fontFamily="var(--font-mono)"
                  fontSize="9"
                  letterSpacing="0.05em"
                >
                  HTML · CSS · JS
                </text>
                <text
                  x="205"
                  y="220"
                  className="diagram-anno"
                  fill="var(--ink-2)"
                  fontFamily="var(--font-mono)"
                  fontSize="9"
                  letterSpacing="0.05em"
                >
                  COMPONENT CORE
                </text>
                <text
                  x="15"
                  y="118"
                  className="diagram-anno"
                  fill="var(--ink-2)"
                  fontFamily="var(--font-mono)"
                  fontSize="9"
                  letterSpacing="0.05em"
                  textAnchor="end"
                >
                  REACT
                </text>
                <text
                  x="375"
                  y="118"
                  className="diagram-anno"
                  fill="var(--ink-2)"
                  fontFamily="var(--font-mono)"
                  fontSize="9"
                  letterSpacing="0.05em"
                >
                  NEXT.JS
                </text>
                <text
                  x="82"
                  y="290"
                  className="diagram-anno"
                  fill="var(--ink-2)"
                  fontFamily="var(--font-mono)"
                  fontSize="9"
                  letterSpacing="0.05em"
                >
                  TS
                </text>
                <text
                  x="318"
                  y="290"
                  className="diagram-anno"
                  fill="var(--ink-2)"
                  fontFamily="var(--font-mono)"
                  fontSize="9"
                  letterSpacing="0.05em"
                  textAnchor="end"
                >
                  SUPABASE
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
