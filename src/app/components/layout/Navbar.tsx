"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavLink {
  label: string;
  target: string;
  path: string;
  num: string;
}

const navLinks: NavLink[] = [
  { label: "HOME", target: "hero", path: "/", num: "00" },
  { label: "STACK", target: "stack", path: "/skills", num: "01" },
  { label: "WORK", target: "work", path: "/projects", num: "02" },
  { label: "ABOUT", target: "about", path: "/about", num: "03" },
  { label: "BLOG", target: "blog", path: "/blog", num: "04" },
  { label: "CONTACT", target: "contact", path: "/#contact", num: "05" },
];

const iconMap: Record<string, string> = {
  HOME: "home",
  STACK: "stacks",
  WORK: "deployed_code",
  ABOUT: "person",
  BLOG: "article",
  CONTACT: "mail",
};

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
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
    if (isHome) {
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
    }
  }, [moveHighlight, isHome]);

  useEffect(() => {
    moveHighlight(activeTarget);
  }, [activeTarget, moveHighlight]);

  useEffect(() => {
    const handleResize = () => moveHighlight(activeTarget);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTarget, moveHighlight]);

  useEffect(() => {
    if (!isHome) {
      const path = pathname as string;
      const matched = navLinks.find(
        (l) =>
          l.path === path ||
          (path.startsWith("/projects/") && l.label === "WORK"),
      );
      if (matched) {
        moveHighlight(matched.target);
      }
    }
  }, [pathname, isHome, moveHighlight]);

  const getHref = (link: NavLink): string => {
    if (isHome) {
      return `#${link.target}`;
    }
    return link.path;
  };

  const isActiveLink = (link: NavLink): boolean => {
    if (isHome) {
      return activeTarget === link.target;
    }
    return (
      link.path === pathname ||
      (link.path === "/projects" && pathname?.startsWith("/projects/"))
    );
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed left-1/2 top-[18px] z-[100] hidden w-[calc(100%-40px)] max-w-[1100px] -translate-x-1/2 items-center justify-between rounded-[999px] border border-transparent px-[18px] py-[12px] transition-all duration-300 md:flex md:px-[14px] md:py-[8px] ${
          scrolled
            ? "border-line bg-[rgba(13,15,18,0.72)] px-[16px] py-[9px] shadow-[0_8px_30px_rgba(0,0,0,0.35)] saturate-[140%] backdrop-blur-[14px] md:px-[12px] md:py-[6px]"
            : ""
        }`}
      >
        <Link
          href={getHref(navLinks[0])}
          className="flex items-center gap-[10px] font-display text-[15px] font-semibold tracking-[0.01em]"
        >
          <Image
            className={`flex items-center justify-center transition-all duration-300 ${
              scrolled
                ? "h-[28px] w-[28px] md:h-[24px] md:w-[24px]"
                : "h-[56px] w-[56px] md:h-[36px] md:w-[36px]"
            }`}
            src="/sorence-nora-portfolio-logo.png"
            alt="Sorence Nora"
            width={90}
            height={90}
          />
          <span className="hidden font-mono text-[12px] font-normal tracking-[0.05em] text-ink-1 sm:inline md:text-[10px]">
            SORENCE&nbsp;NORA
          </span>
        </Link>

        <ul
          ref={linksContainerRef}
          className="nav-links relative hidden list-none items-center gap-[28px] md:flex md:gap-[10px] lg:gap-[28px]"
        >
          <span
            ref={highlightRef}
            className="nav-highlight pointer-events-none absolute bottom-[-8px] left-0 top-[-8px] -z-10 w-0 rounded-[999px] border border-[rgba(232,163,61,0.22)] bg-[rgba(232,163,61,0.08)]"
            aria-hidden="true"
          />
          {navLinks.map(({ label, target, path }) => {
            const href = getHref({ label, target, path, num: "00" });
            const isActive = isActiveLink({ label, target, path, num: "00" });
            return (
              <li key={target}>
                <Link
                  href={href}
                  data-target={target}
                  className={`relative flex items-baseline gap-[4px] py-[4px] font-mono text-[12px] tracking-[0.03em] text-ink-1 md:gap-[3px] md:text-[11px] ${
                    isActive ? "active text-accent" : ""
                  }`}
                  onMouseEnter={() => setHoveredLink(target)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span className="relative flex flex-row items-center gap-[3px] md:scale-[0.85] md:gap-[2px] lg:scale-100">
                    {hoveredLink === target && (
                      <span className="absolute -left-3 top-0 hidden md:block">
                        &lt;
                      </span>
                    )}
                    <span className="material-symbols-outlined block scale-[0.8]">
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
            );
          })}
        </ul>

        <span className="hidden items-center gap-[7px] rounded-[999px] border border-line-strong px-[12px] py-[7px] font-mono text-[11px] tracking-[0.04em] text-ink-1 md:flex md:text-[10px] lg:text-[11px]">
          <span className="h-[6px] w-[6px] rounded-full bg-[#7CC29B] shadow-[0_0_0_3px_rgba(124,194,155,0.15)]" />
          AVAILABLE FOR WORK
        </span>
      </nav>

      <nav className="fixed bottom-[18px] left-1/2 z-[90] flex w-[calc(100%-40px)] max-w-[1100px] -translate-x-1/2 items-center justify-center gap-[8px] rounded-[999px] border border-[rgba(232,163,61,0.22)] bg-[rgba(13,15,18,0.72)] px-[12px] py-[10px] backdrop-blur-[14px] transition-all duration-300 md:hidden">
        {navLinks.map(({ label, target, path }) => {
          const href = getHref({ label, target, path, num: "00" });
          const isActive = isActiveLink({
            label,
            target,
            path,
            num: "00",
          });
          return (
            <Link
              key={target}
              href={href}
              data-target={target}
              className={`flex h-[46px] w-[46px] items-center justify-center rounded-[10px] ${
                isActive
                  ? "border border-[rgba(232,163,61,0.3)] text-accent"
                  : "text-ink-1"
              }`}
              title={label}
            >
              {label === "HOME" ? (
                <Image
                  src="/sorence-nora-portfolio-logo.png"
                  alt="Home"
                  width={90}
                  height={90}
                  className="h-[28px] w-[28px]"
                />
              ) : (
                <span className="material-symbols-outlined text-[22px]">
                  {iconMap[label]}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;
