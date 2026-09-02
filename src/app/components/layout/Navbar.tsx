"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "HOME", target: "hero", num: "00" },
  { label: "STACK", target: "stack", num: "01" },
  { label: "WORK", target: "work", num: "02" },
  { label: "ABOUT", target: "about", num: "03" },
  { label: "CONTACT", target: "contact", num: "04" },
];

const iconMap: Record<string, string> = {
  HOME: "home",
  STACK: "stacks",
  WORK: "deployed_code",
  ABOUT: "person",
  CONTACT: "mail",
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTarget, setActiveTarget] = useState("hero");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
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
    const link = container.querySelector(
      `[data-target="${target}"]`,
    ) as HTMLElement | null;
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
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
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
        className={`fixed left-1/2 top-[18px] z-[100] flex w-[calc(100%-40px)] max-w-[1100px] -translate-x-1/2 items-center justify-between rounded-[999px] border border-transparent px-[18px] py-[12px] transition-all duration-300 ${
          scrolled
            ? "border-line bg-[rgba(13,15,18,0.72)] px-[16px] py-[9px] shadow-[0_8px_30px_rgba(0,0,0,0.35)] saturate-[140%] backdrop-blur-[14px]"
            : ""
        }`}
      >
        <Link
          href="#top"
          className="flex items-center gap-[10px] font-display text-[15px] font-semibold tracking-[0.01em]"
        >
          <Image
            className={`flex items-center justify-center transition-all duration-300 ${
              scrolled ? "h-[28px] w-[28px]" : "h-[56px] w-[56px]"
            }`}
            src="/SNLogo.png"
            alt="Sorence Nora"
            width={90}
            height={90}
          />
          <span className="hidden font-mono text-[12px] font-normal tracking-[0.05em] text-ink-1 sm:inline">
            SORENCE&nbsp;NORA
          </span>
        </Link>

        <ul
          ref={linksContainerRef}
          className="nav-links relative hidden list-none items-center gap-[28px] lg:flex"
        >
          <span
            ref={highlightRef}
            className="nav-highlight pointer-events-none absolute bottom-[-8px] left-0 top-[-8px] -z-10 w-0 rounded-[999px] border border-[rgba(232,163,61,0.22)] bg-[rgba(232,163,61,0.08)]"
            aria-hidden="true"
          />
          {navLinks.map(({ label, target }) => (
            <li key={target}>
              <Link
                href={`#${target}`}
                data-target={target}
                className={`relative flex items-baseline gap-[6px] py-[4px] font-mono text-[12px] tracking-[0.03em] text-ink-1 ${
                  activeTarget === target ? "active text-accent" : ""
                }`}
                onMouseEnter={() => setHoveredLink(target)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <span className="relative flex flex-row items-center gap-[6px]">
                  {hoveredLink === target && (
                    <span className="absolute -left-3 top-0 hidden md:block">
                      &lt;
                    </span>
                  )}
                  <span className="material-symbols-outlined block text-[14px]">
                    {iconMap[label]}
                  </span>
                  <span className="hidden md:inline">{label}</span>
                  {hoveredLink === target && (
                    <span className="absolute -right-6 top-0 hidden md:block">
                      /&gt;
                    </span>
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-[14px]">
          <span className="hidden items-center gap-[7px] rounded-[999px] border border-line-strong px-[12px] py-[7px] font-mono text-[11px] tracking-[0.04em] text-ink-1 lg:flex">
            <span className="h-[6px] w-[6px] rounded-full bg-[#7CC29B] shadow-[0_0_0_3px_rgba(124,194,155,0.15)]" />
            AVAILABLE FOR WORK
          </span>
          <button
            className={`flex h-[38px] w-[38px] items-center justify-center rounded-[8px] border border-line-strong lg:hidden ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`relative block h-[1px] w-[16px] bg-ink-0 transition-all duration-300 ${mobileOpen ? "bg-transparent" : ""}`}
            >
              <span
                className={`absolute left-0 h-[1px] w-[16px] bg-ink-0 transition-all duration-300 ${
                  mobileOpen ? "top-0 rotate-45" : "top-[-5px]"
                }`}
              />
              <span
                className={`absolute left-0 h-[1px] w-[16px] bg-ink-0 transition-all duration-300 ${
                  mobileOpen ? "top-0 -rotate-45" : "top-[5px]"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[90] flex flex-col justify-center bg-bg-0 p-[32px] transition-all duration-[350ms] lg:hidden ${
          mobileOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-[8px] opacity-0"
        }`}
      >
        {navLinks.map(({ label, target, num }) => (
          <Link
            key={target}
            href={`#${target}`}
            data-target={target}
            onClick={closeDrawer}
            className="flex items-baseline gap-[16px] border-b border-line py-[14px] font-display text-[clamp(2rem,10vw,3rem)] font-semibold text-ink-0"
          >
            <span className="material-symbols-outlined text-[24px]">
              {iconMap[label]}
            </span>
            <span className="font-mono text-[14px] text-accent">{num}</span>
            {label}
          </Link>
        ))}
        <Link
          href="https://drive.google.com/file/d/1_2AFU6mu0gYI23akwfE4JxWfK6lw1ITj/view?usp=sharing"
          target="_blank"
          rel="noopener"
          onClick={closeDrawer}
          className="mt-[28px] inline-flex items-center gap-[8px] font-mono text-[14px] text-accent"
        >
          Resume ↗
        </Link>
      </div>
    </>
  );
};

export default Navbar;
