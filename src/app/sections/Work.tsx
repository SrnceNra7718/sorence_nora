"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/projects";

const STEP = 52;
const PERSP = 1200;
const PI = Math.PI;
const N = projects.length;
const pad = (n: number) => String(n).padStart(2, "0");

function ProjectImageCycle({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const fadeTimerRef = useRef(0);
  const currentImageRef = useRef<HTMLImageElement>(null);
  const [imageState, setImageState] = useState({
    currentIndex: 0,
    previousIndex: null as number | null,
    isFading: false,
  });
  const imageCount = project.images.length;
  const currentImage = project.images[imageState.currentIndex];
  const previousImage =
    imageState.previousIndex === null
      ? undefined
      : project.images[imageState.previousIndex];

  const startFade = (index: number) => {
    if (fadeTimerRef.current) window.clearTimeout(fadeTimerRef.current);
    fadeTimerRef.current = window.setTimeout(() => {
      setImageState((current) =>
        current.currentIndex === index && current.previousIndex !== null
          ? { ...current, isFading: true }
          : current,
      );
    }, 32);
  };

  useEffect(() => {
    if (imageCount < 2) return;

    const interval = window.setInterval(() => {
      setImageState((current) => ({
        currentIndex: (current.currentIndex + 1) % imageCount,
        previousIndex: current.currentIndex,
        isFading: false,
      }));
    }, 2000);

    return () => {
      window.clearInterval(interval);
      if (fadeTimerRef.current) window.clearTimeout(fadeTimerRef.current);
    };
  }, [imageCount]);

  useEffect(() => {
    const image = currentImageRef.current;
    if (!image || imageState.previousIndex === null || imageState.isFading)
      return;

    if (image.complete) {
      startFade(imageState.currentIndex);
      return;
    }

    const onLoad = () => startFade(imageState.currentIndex);
    image.addEventListener("load", onLoad);
    image.addEventListener("error", onLoad);
    return () => {
      image.removeEventListener("load", onLoad);
      image.removeEventListener("error", onLoad);
    };
  }, [
    currentImage,
    imageState.currentIndex,
    imageState.isFading,
    imageState.previousIndex,
  ]);

  useEffect(() => {
    if (!imageState.isFading || imageState.previousIndex === null) return;

    const previousIndex = imageState.previousIndex;
    const timeout = window.setTimeout(() => {
      setImageState((current) =>
        current.previousIndex === previousIndex
          ? { ...current, previousIndex: null }
          : current,
      );
    }, 500);

    return () => window.clearTimeout(timeout);
  }, [imageState.isFading, imageState.previousIndex]);

  if (!currentImage) return null;

  return (
    <>
      {previousImage && (
        <img
          key={`previous-${imageState.previousIndex}`}
          src={previousImage}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          className={`card-img ${imageState.isFading ? "card-img--fade-out" : ""}`}
        />
      )}
      <img
        key={`current-${imageState.currentIndex}`}
        ref={currentImageRef}
        src={currentImage}
        alt={
          project.imageAlt?.[currentImage] ??
          `${project.title} project screenshot`
        }
        loading="eager"
        decoding="async"
        className={`card-img ${previousImage && !imageState.isFading ? "card-img--fade-in" : ""}`}
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
    </>
  );
}

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const helixBRef = useRef<SVGSVGElement>(null);
  const helixFRef = useRef<SVGSVGElement>(null);
  const pathBRef = useRef<SVGPathElement | null>(null);
  const pathFRef = useRef<SVGPathElement | null>(null);
  const poleSvgRef = useRef<SVGSVGElement>(null);
  const maskRectRef = useRef<SVGRectElement | null>(null);
  const patDimRef = useRef<SVGPatternElement | null>(null);
  const patLitRef = useRef<SVGPatternElement | null>(null);
  const stopRefs = useRef<(SVGStopElement | null)[]>(Array(5).fill(null));
  const pingRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLParagraphElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  const cardsEls = useRef<(HTMLElement | null)[]>(Array(N).fill(null));
  const linksRef = useRef<(HTMLAnchorElement | null)[]>(Array(N).fill(null));
  const dotsEls = useRef<(HTMLButtonElement | null)[]>(Array(N).fill(null));

  const dimRef = useRef({ W: 0, H: 0, R: 0, dy: 0, yOff: 0 });
  const reduceRef = useRef(
    typeof matchMedia === "function"
      ? matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );
  const curRef = useRef(0);
  const tgtRef = useRef(0);
  const activeIdxRef = useRef(-1);
  const rafRef = useRef(0);

  const clamp = (v: number, a: number, b: number) =>
    Math.min(b, Math.max(a, v));

  const project = (u: number) => {
    const rad = (u * STEP * PI) / 180;
    const s = Math.sin(rad),
      c = Math.cos(rad);
    const z = (c - 1) * dimRef.current.R * 0.85;
    return {
      x: dimRef.current.R * s,
      y: u * dimRef.current.dy + dimRef.current.yOff,
      z,
      c,
      s,
      f: PERSP / (PERSP - z),
    };
  };

  const buildHelix = () => {
    const pathB = pathBRef.current;
    const pathF = pathFRef.current;
    if (!pathB || !pathF) return;
    let fp = "",
      bp = "",
      last = "";
    let prev: { x: number; y: number; c: number } | null = null;
    for (let u = -4.2; u <= 4.2001; u += 0.035) {
      const q = project(u);
      const p = { x: q.x * q.f, y: q.y * q.f, c: q.c };
      if (prev) {
        const type = (prev.c + p.c) / 2 >= 0 ? "f" : "b";
        const seg =
          (type !== last ? `M${prev.x.toFixed(1)} ${prev.y.toFixed(1)}` : "") +
          `L${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
        if (type === "f") fp += seg;
        else bp += seg;
        last = type;
      }
      prev = p;
    }
    pathF.setAttribute("d", fp);
    pathB.setAttribute("d", bp);
  };

  const measure = () => {
    const stage = stageRef.current;
    const section = sectionRef.current;
    if (!stage || !section) return;

    const W = stage.clientWidth;
    const H = stage.clientHeight;
    dimRef.current = {
      W,
      H,
      R: clamp(W * 0.33, 140, 520),
      dy: clamp(H * 0.17, 80, 150),
      yOff: H * 0.05,
    };
    stage.style.setProperty("--yoff", `${dimRef.current.yOff}px`);

    const vhs = 100 + (N - 1) * 90;
    section.style.height = `${vhs}vh`;
    section.style.height = `${vhs}svh`;

    const vb = `${-W / 2} ${-H / 2} ${W} ${H}`;
    helixBRef.current?.setAttribute("viewBox", vb);
    helixFRef.current?.setAttribute("viewBox", vb);
    buildHelix();

    poleSvgRef.current?.setAttribute("viewBox", `0 0 120 ${H}`);
    maskRectRef.current?.setAttribute("height", String(H));

    const c = (H / 2 + dimRef.current.yOff) / H;
    [-0.34, -0.14, 0, 0.14, 0.34].forEach((d, k) => {
      const stop = stopRefs.current[k];
      if (stop) stop.setAttribute("offset", String(clamp(c + d, 0, 1)));
    });
  };

  const getTarget = () => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return 0;
    const r = section.getBoundingClientRect();
    const total = Math.max(1, section.offsetHeight - stage.offsetHeight);
    return clamp(-r.top / total, 0, 1) * (N - 1);
  };

  const scrollToIndex = (i: number) => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;
    const total = section.offsetHeight - stage.offsetHeight;
    const top =
      window.scrollY +
      section.getBoundingClientRect().top +
      (i / (N - 1)) * total;
    window.scrollTo({ top, behavior: reduceRef.current ? "auto" : "smooth" });
  };

  const render = (t: number) => {
    const stage = stageRef.current;
    if (!stage) return;
    const { dy } = dimRef.current;

    const tr = `translate(0 ${(-t * dy * 1.6).toFixed(1)})`;
    patDimRef.current?.setAttribute("patternTransform", tr);
    patLitRef.current?.setAttribute("patternTransform", tr);

    for (let i = 0; i < N; i++) {
      const el = cardsEls.current[i];
      if (!el) continue;
      const u = i - t;
      const q = project(u);
      const face = (q.c + 1) / 2;
      const fade = clamp(1 - (Math.abs(u) - 2.4) / 1.3, 0, 1);
      const ang = (Math.atan2(q.s, q.c) * 180) / PI;
      const rot = clamp(ang * 0.8, -60, 60);
      const a = clamp(1 - Math.abs(u) / 0.75, 0, 1);

      el.style.transform = `translate(-50%,-50%) translate3d(${q.x.toFixed(1)}px,${q.y.toFixed(1)}px,${q.z.toFixed(1)}px) rotateY(${rot.toFixed(1)}deg)`;
      el.style.opacity = (fade * (0.28 + 0.72 * Math.pow(face, 0.8))).toFixed(
        3,
      );
      el.style.filter = face > 0.92 ? "none" : `blur(${(1 - face) * 3}px)`;
      el.style.zIndex = String(100 + Math.round(q.c * 90));
      el.style.pointerEvents = Math.abs(u) < 2.6 ? "auto" : "none";
      el.style.setProperty("--u", u.toFixed(3));
      el.style.setProperty("--image-y", `${(-u * 16).toFixed(1)}px`);
      el.style.setProperty("--a", a.toFixed(3));
    }

    const idx = clamp(Math.round(t), 0, N - 1);
    if (idx !== activeIdxRef.current) {
      const first = activeIdxRef.current === -1;
      activeIdxRef.current = idx;
      counterRef.current &&
        (counterRef.current.textContent = `${pad(idx + 1)} OF ${pad(N)}`);
      dotsEls.current.forEach((d, k) => d?.classList.toggle("on", k === idx));
      linksRef.current.forEach((l, k) => {
        if (l) l.tabIndex = k === idx ? 0 : -1;
      });
      if (!first && !reduceRef.current) {
        const ping = pingRef.current;
        if (ping) {
          ping.classList.remove("go");
          void ping.offsetWidth;
          ping.classList.add("go");
        }
      }
    }
  };

  const tick = () => {
    rafRef.current = 0;
    tgtRef.current = getTarget();
    curRef.current = reduceRef.current
      ? tgtRef.current
      : curRef.current + (tgtRef.current - curRef.current) * 0.1;
    if (Math.abs(tgtRef.current - curRef.current) < 0.0008)
      curRef.current = tgtRef.current;
    render(curRef.current);
    if (curRef.current !== tgtRef.current)
      rafRef.current = requestAnimationFrame(tick);
  };

  const kick = () => {
    if (!rafRef.current) rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    measure();
    curRef.current = getTarget();
    render(curRef.current);

    const mq = matchMedia("(prefers-reduced-motion: reduce)");
    const onReduceChange = () => {
      reduceRef.current = mq.matches;
    };
    mq.addEventListener("change", onReduceChange);

    const onScroll = kick;
    const onResize = () => {
      measure();
      kick();
    };
    const onLoad = () => {
      measure();
      kick();
    };

    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onResize);
    addEventListener("load", onLoad, { once: true });

    kick();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onResize);
      removeEventListener("load", onLoad);
      mq.removeEventListener("change", onReduceChange);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      aria-label="Selected work"
      style={{ height: "640vh" }}
    >
      <div ref={stageRef} className="stage" id="stage">
        <svg ref={helixBRef} id="helixB" className="helix" aria-hidden="true">
          <path ref={pathBRef} id="pathB" />
        </svg>

        <div className="pole" aria-hidden="true">
          <svg
            ref={poleSvgRef}
            id="poleSvg"
            viewBox="0 0 120 900"
            preserveAspectRatio="xMidYMin meet"
          >
            <defs>
              <g
                id="tile"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M60 0V360" strokeWidth="2.6" />
                <path
                  d="M36 0V70L24 82V150L36 162V232L48 244V300L36 312V360"
                  strokeWidth="1.6"
                />
                <path
                  d="M84 0V92L96 104V176L84 188V250L72 262V322L84 334V360"
                  strokeWidth="1.6"
                />
                <path d="M12 0V110L20 118V190L12 198V360" strokeWidth="1.2" />
                <path
                  d="M108 0V250L100 258V300L108 308V360"
                  strokeWidth="1.2"
                />
                <path
                  d="M60 120H24M60 140H96M60 270H48M60 290H72M24 96H12M84 200H108"
                  strokeWidth="1.2"
                />
                <circle cx="24" cy="120" r="2.6" fill="currentColor" />
                <circle cx="96" cy="140" r="2.6" fill="currentColor" />
                <circle cx="48" cy="270" r="2.2" fill="currentColor" />
                <circle cx="72" cy="290" r="2.2" fill="currentColor" />
                <circle cx="12" cy="96" r="2.2" fill="currentColor" />
                <circle cx="108" cy="200" r="2.2" fill="currentColor" />
                <circle
                  cx="60"
                  cy="60"
                  r="5"
                  strokeWidth="1.4"
                  fill="#08090b"
                />
                <circle cx="60" cy="60" r="1.6" fill="currentColor" />
                <circle
                  cx="60"
                  cy="200"
                  r="5"
                  strokeWidth="1.4"
                  fill="#08090b"
                />
                <circle cx="60" cy="200" r="1.6" fill="currentColor" />
                <circle
                  cx="60"
                  cy="330"
                  r="5"
                  strokeWidth="1.4"
                  fill="#08090b"
                />
                <circle cx="60" cy="330" r="1.6" fill="currentColor" />
                <rect
                  x="48"
                  y="18"
                  width="24"
                  height="16"
                  rx="2"
                  strokeWidth="1.2"
                  fill="#08090b"
                />
                <path
                  d="M44 23H48M44 29H48M72 23H76M72 29H76"
                  strokeWidth="1.1"
                />
              </g>

              <pattern
                id="patDim"
                ref={patDimRef}
                width="120"
                height="360"
                patternUnits="userSpaceOnUse"
              >
                <use href="#tile" className="use-dim" />
              </pattern>
              <pattern
                id="patLit"
                ref={patLitRef}
                width="120"
                height="360"
                patternUnits="userSpaceOnUse"
              >
                <use href="#tile" className="use-lit" />
              </pattern>

              <linearGradient id="litGrad" x1="0" y1="0" x2="0" y2="1">
                <stop
                  ref={(el) => {
                    stopRefs.current[0] = el;
                  }}
                  id="g1"
                  offset="0.16"
                  stopColor="#fff"
                  stopOpacity="0"
                />
                <stop
                  ref={(el) => {
                    stopRefs.current[1] = el;
                  }}
                  id="g2"
                  offset="0.36"
                  stopColor="#fff"
                  stopOpacity="0.35"
                />
                <stop
                  ref={(el) => {
                    stopRefs.current[2] = el;
                  }}
                  id="g3"
                  offset="0.5"
                  stopColor="#fff"
                  stopOpacity="1"
                />
                <stop
                  ref={(el) => {
                    stopRefs.current[3] = el;
                  }}
                  id="g4"
                  offset="0.64"
                  stopColor="#fff"
                  stopOpacity="0.35"
                />
                <stop
                  ref={(el) => {
                    stopRefs.current[4] = el;
                  }}
                  id="g5"
                  offset="0.84"
                  stopColor="#fff"
                  stopOpacity="0"
                />
              </linearGradient>
              <mask
                id="litMask"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="120"
                height="4000"
              >
                <rect
                  ref={maskRectRef}
                  id="maskRect"
                  x="0"
                  y="0"
                  width="120"
                  height="900"
                  fill="url(#litGrad)"
                />
              </mask>
            </defs>

            <rect x="0" y="0" width="120" height="100%" fill="url(#patDim)" />
            <rect
              className="lit"
              x="0"
              y="0"
              width="120"
              height="100%"
              fill="url(#patLit)"
              mask="url(#litMask)"
            />
          </svg>
          <span className="pulse" />
          <span className="pulse" />
          <span className="pulse" />
        </div>
        <div ref={pingRef} className="ping" id="ping" />

        <svg ref={helixFRef} id="helixF" className="helix" aria-hidden="true">
          <path ref={pathFRef} id="pathF" />
        </svg>

        <div ref={cardsRef} id="cards">
          {projects.map((p, i) => {
            const hue = (i * 47) % 360;
            return (
              <Link
                key={p.slug}
                ref={(el) => {
                  cardsEls.current[i] = el;
                  linksRef.current[i] = el;
                  if (el) el.style.setProperty("--h", String(hue));
                }}
                href={`/projects/${p.slug}`}
                className="card"
                aria-label={`View ${p.title} case study`}
              >
                <div className="card-media">
                  <ProjectImageCycle project={p} />
                  <span className="card-idx">{pad(i + 1)}</span>
                </div>
                <div className="px-[18px] py-4">
                  <h3 className="font-display text-lg font-semibold leading-tight tracking-tight md:text-xl">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 font-mono text-[11px] tracking-wide text-ink-2">
                    {p.role} · {p.context}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {p.technologies.map((t) => (
                      <li
                        key={t}
                        className="work-tech-chip text-ink-2/75 rounded border border-white/10 px-2 py-1 font-mono text-[10px] tracking-wide"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span className="card-link mt-4 inline-flex items-center gap-2 font-mono text-xs tracking-[.14em] text-accent">
                    VIEW CASE STUDY <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="fade-top" />
        <div className="fade-bot" />

        <header className="head px-6 pt-20 md:px-12 md:pt-24">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] tracking-[.24em] text-accent">
                &lt;WORK/&gt;
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Work that shipped.
              </h2>
            </div>
            <div className="shrink-0 text-right">
              <p
                ref={counterRef}
                id="counter"
                className="font-mono text-xs tracking-[.2em] text-ink-2"
              >
                {pad(1)} OF {pad(N)}
              </p>
              <Link
                href="/projects"
                className="text-ink-2/80 mt-2 inline-block font-mono text-xs tracking-[.14em] transition-colors hover:text-accent"
              >
                VIEW ALL PROJECTS →
              </Link>
            </div>
          </div>
        </header>

        <div className="absolute bottom-5 left-0 right-0 z-[300] flex flex-col items-center gap-3 md:bottom-7">
          <div ref={dotsRef} id="dots" className="flex items-center gap-1.5">
            {projects.map((p, i) => (
              <button
                key={i}
                ref={(el) => {
                  dotsEls.current[i] = el;
                }}
                type="button"
                className="dot"
                aria-label={`Go to project ${i + 1}: ${p.title}`}
                onClick={() => scrollToIndex(i)}
              />
            ))}
          </div>
          <p className="font-mono text-[10px] tracking-[.3em] text-ink-2">
            SCROLL ↓
          </p>
        </div>
      </div>
    </section>
  );
}
