"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

const navLinks = [
  { label: "HOME", target: "hero", num: "00" },
  { label: "STACK", target: "stack", num: "01" },
  { label: "WORK", target: "work", num: "02" },
  { label: "ABOUT", target: "about", num: "03" },
  { label: "CONTACT", target: "contact", num: "04" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTarget, setActiveTarget] = useState("hero");
  const navRef = useRef<HTMLElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const linksContainerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const moveHighlight = useCallback((target: string) => {
    const container = linksContainerRef.current;
    const highlight = highlightRef.current;
    if (!container || !highlight) return;
    const link = container.querySelector(`[data-target="${target}"]`) as HTMLElement | null;
    if (!link) return;
    const containerRect = container.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    const pad = 14;
    highlight.style.width = `${linkRect.width + pad * 2}px`;
    highlight.style.transform = `translateX(${linkRect.left - containerRect.left - pad}px)`;
    highlight.classList.add("visible");
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.target))
      .filter((s): s is HTMLElement => s !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTarget(entry.target.id);
            moveHighlight(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [moveHighlight]);

  useEffect(() => {
    moveHighlight(activeTarget);
  }, [activeTarget, moveHighlight]);

  useEffect(() => {
    const handleResize = () => moveHighlight(activeTarget);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTarget, moveHighlight]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [mobileOpen]);

  const closeDrawer = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-[18px] left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-40px)] max-w-[1100px] flex items-center justify-between px-[18px] py-[12px] rounded-[999px] border border-transparent transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(13,15,18,0.72)] backdrop-blur-[14px] saturate-[140%] border-line shadow-[0_8px_30px_rgba(0,0,0,0.35)] py-[9px] px-[16px]"
            : ""
        }`}
      >
        <Link href="#top" className="flex items-center gap-[10px] font-display font-semibold text-[15px] tracking-[0.01em]">
          <span className="w-[28px] h-[28px] border border-line-strong rounded-[6px] flex items-center justify-center font-mono text-[11px] text-accent">
            SN
          </span>
          <span className="text-ink-1 text-[12px] font-mono font-normal tracking-[0.05em] hidden sm:inline">
            SORENCE&nbsp;NORA
          </span>
        </Link>

        <ul
          ref={linksContainerRef}
          className="hidden lg:flex items-center gap-[28px] list-none relative"
        >
          <span
            ref={highlightRef}
            className="absolute top-[-8px] bottom-[-8px] left-0 w-0 bg-[rgba(232,163,61,0.08)] border border-[rgba(232,163,61,0.22)] rounded-[999px] transition-all duration-[400ms] opacity-0 pointer-events-none -z-10"
            aria-hidden="true"
          />
          {navLinks.map(({ label, target, num }) => (
            <li key={target}>
              <Link
                href={`#${target}`}
                data-target={target}
                className={`font-mono text-[12px] tracking-[0.03em] text-ink-1 flex items-baseline gap-[6px] relative py-[4px] transition-colors duration-[250ms] ${
                  activeTarget === target ? "text-accent" : ""
                }`}
              >
                <span className="text-ink-2 text-[10px]">{num}</span>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-[14px]">
          <span className="hidden lg:flex items-center gap-[7px] font-mono text-[11px] tracking-[0.04em] text-ink-1 border border-line-strong px-[12px] py-[7px] rounded-[999px]">
            <span className="w-[6px] h-[6px] rounded-full bg-[#7CC29B] shadow-[0_0_0_3px_rgba(124,194,155,0.15)]" />
            AVAILABLE FOR WORK
          </span>
          <button
            className={`lg:hidden w-[38px] h-[38px] flex items-center justify-center border border-line-strong rounded-[8px] ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className={`block w-[16px] h-[1px] bg-ink-0 relative transition-all duration-300 ${mobileOpen ? "bg-transparent" : ""}`}>
              <span
                className={`absolute left-0 w-[16px] h-[1px] bg-ink-0 transition-all duration-300 ${
                  mobileOpen ? "top-0 rotate-45" : "top-[-5px]"
                }`}
              />
              <span
                className={`absolute left-0 w-[16px] h-[1px] bg-ink-0 transition-all duration-300 ${
                  mobileOpen ? "top-0 -rotate-45" : "top-[5px]"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[90] bg-bg-0 flex flex-col justify-center p-[32px] transition-all duration-[350ms] lg:hidden ${
          mobileOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-[8px]"
        }`}
      >
        {navLinks.map(({ label, target, num }) => (
          <Link
            key={target}
            href={`#${target}`}
            data-target={target}
            onClick={closeDrawer}
            className="font-display text-[clamp(2rem,10vw,3rem)] font-semibold flex items-baseline gap-[16px] py-[14px] border-b border-line text-ink-0"
          >
            <span className="font-mono text-[14px] text-accent">{num}</span>
            {label}
          </Link>
        ))}
        <Link
          href="https://drive.google.com/file/d/1_2AFU6mu0gYI23akwfE4JxWfK6lw1ITj/view?usp=sharing"
          target="_blank"
          rel="noopener"
          onClick={closeDrawer}
          className="mt-[28px] font-mono text-[14px] text-accent inline-flex items-center gap-[8px]"
        >
          Resume ↗
        </Link>
      </div>
    </>
  );
};

export default Navbar;
