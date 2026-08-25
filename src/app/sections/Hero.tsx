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
    <section className="hero min-h-[100svh] flex items-start pt-[80px] pb-[80px]">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-[48px] md:gap-[60px] items-center">
          <div>
            <p className="font-mono text-[12px] tracking-[0.08em] text-ink-1 flex items-center gap-[10px] flex-wrap mb-[26px]" data-circuit-node="hero">
              <span className="text-accent border border-[rgba(232,163,61,0.35)] px-[8px] py-[3px] rounded-[3px] bg-[rgba(232,163,61,0.06)]">
                FRONTEND DEVELOPER
              </span>
              <span className="text-ink-2">/</span>
              <span>PHILIPPINES</span>
              <span className="text-ink-2">·</span>
              <span>AVAILABLE FOR SELECT PROJECTS</span>
            </p>
            <h1 className="font-display font-semibold tracking-[-0.02em] text-[clamp(2.6rem,6.4vw,5.2rem)] leading-[1.03] text-ink-0">
              I build interfaces<br />that hold up<br />
              <em className="text-accent" style={{ fontStyle: "normal" }}>under real use.</em>
            </h1>
            <p className="mt-[26px] max-w-[46ch] text-ink-1 text-[clamp(1rem,1.6vw,1.15rem)] leading-[1.7]">
              Frontend web developer specializing in modern, responsive web applications — from first component to production build.
            </p>
            <div className="flex items-center gap-[18px] mt-[42px] flex-wrap">
              <Magnetic>
                <Link
                  href="#work"
                  className="inline-flex items-center gap-[10px] font-mono text-[13px] tracking-[0.02em] px-[24px] py-[15px] rounded-[2px] bg-accent text-accent-ink font-medium relative overflow-hidden transition-colors duration-300 hover:bg-[#f0b25d]"
                >
                  VIEW SELECTED WORK <span className="transition-transform duration-300 inline-block">→</span>
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-[10px] font-mono text-[13px] tracking-[0.02em] px-[24px] py-[15px] rounded-[2px] border border-line-strong text-ink-0 transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  LET&apos;S TALK <span className="transition-transform duration-300 inline-block">→</span>
                </Link>
              </Magnetic>
            </div>
            <a
              href="https://drive.google.com/file/d/1_2AFU6mu0gYI23akwfE4JxWfK6lw1ITj/view?usp=sharing"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-[6px] font-mono text-[12.5px] text-ink-1 border-b border-transparent pb-[2px] mt-4 transition-colors duration-300 hover:text-ink-0 hover:border-line-strong"
            >
              View résumé ↗
            </a>
          </div>

          <div className="relative aspect-square max-w-[460px] mx-auto" aria-hidden="true">
            <span className="absolute top-[6%] right-[2%] font-mono text-[10px] text-accent border border-[rgba(232,163,61,0.4)] px-[10px] py-[6px] rounded-[2px] rotate-[3deg] bg-[rgba(232,163,61,0.05)] tracking-[0.06em]">
              REV·A — 2026
            </span>
            <svg viewBox="0 0 400 400" fill="none" className="w-full h-full overflow-visible">
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
                <line x1="200" y1="190" x2="200" y2="335" className="diagram-line" />
                <line x1="80" y1="125" x2="80" y2="270" className="diagram-line" />
                <line x1="320" y1="125" x2="320" y2="270" className="diagram-line" />
                <circle cx="200" cy="190" r="3.5" className="diagram-dot" />
                <circle cx="200" cy="60" r="3" fill="#706D66" />
                <circle cx="320" cy="125" r="3" fill="#706D66" />
                <line x1="200" y1="20" x2="200" y2="60" className="diagram-line" />
                <line x1="30" y1="125" x2="80" y2="125" className="diagram-line" />
                <line x1="320" y1="125" x2="370" y2="125" className="diagram-line" />
                <text x="205" y="18" className="diagram-anno accent" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.05em">
                  HTML · CSS · JS
                </text>
                <text x="205" y="220" className="diagram-anno" fill="var(--ink-2)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.05em">
                  COMPONENT CORE
                </text>
                <text x="15" y="118" className="diagram-anno" fill="var(--ink-2)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.05em" textAnchor="end">
                  REACT
                </text>
                <text x="375" y="118" className="diagram-anno" fill="var(--ink-2)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.05em">
                  NEXT.JS
                </text>
                <text x="82" y="290" className="diagram-anno" fill="var(--ink-2)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.05em">
                  TS
                </text>
                <text x="318" y="290" className="diagram-anno" fill="var(--ink-2)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.05em" textAnchor="end">
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
