"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Details() {
  const compareRef = useRef<HTMLDivElement>(null);
  const rangeRef = useRef<HTMLInputElement>(null);
  const [pos, setPos] = useState(8);
  const userDragged = useRef(false);

  useEffect(() => {
    const range = rangeRef.current;
    if (!range) return;
    const setP = (v: number) => {
      setPos(v);
      if (compareRef.current)
        compareRef.current.style.setProperty("--pos", v + "%");
    };
    const onInput = () => {
      userDragged.current = true;
      setP(Number(range.value));
    };
    range.addEventListener("input", onInput);
    setP(Number(range.value));

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!reduce && "IntersectionObserver" in window && compareRef.current) {
      const io = new IntersectionObserver(
        ([en]) => {
          if (!en.isIntersecting) return;
          io.disconnect();
          const start = performance.now(),
            dur = 2600;
          const step = (now: number) => {
            if (userDragged.current) return;
            const t = Math.min(1, (now - start) / dur);
            const eased = 0.5 - 0.5 * Math.cos(t * Math.PI * 2);
            const v = 8 + eased * 84;
            if (range) range.value = String(v);
            setP(v);
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        },
        { threshold: 0.6 },
      );
      io.observe(compareRef.current);
      return () => {
        io.disconnect();
        range.removeEventListener("input", onInput);
      };
    }
    return () => range.removeEventListener("input", onInput);
  }, []);

  return (
    <section className="section-pad" id="details">
      <div className="wrap grid grid-cols-1 items-center gap-[clamp(32px,5vw,80px)] lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h2 className="font-display text-[clamp(1.9rem,4.2vw,3.2rem)] font-extrabold tracking-[-0.03em] text-[var(--ink-0)]">
            Small details decide whether people trust a site.
          </h2>
          <p className="mt-4 text-[1.08rem] text-[var(--ink-1)]">
            Clear visual hierarchy, consistent spacing and interactions that
            behave as expected affect usability, trust and conversion. Drag the
            handle to compare the same page before and after.
          </p>
        </div>
        <div
          ref={compareRef}
          className="compare relative aspect-[4/3] overflow-hidden rounded-[22px] border border-[var(--line)] bg-[var(--bg-1)]"
          style={{ "--pos": pos + "%" } as React.CSSProperties}
        >
          <div
            className="pane pane-before absolute inset-0 grid content-center bg-[#1a1a1a] p-[clamp(16px,4vw,40px)]"
            aria-hidden="true"
          >
            <div className="messy font-serif">
              <small className="mb-3.5 block text-[10px] tracking-[1px] text-ink-2">
                home | about | services | contact | blog
              </small>
              <h4 className="text-[clamp(1rem,3.6vw,1.7rem)] font-black leading-[1.15] text-danger">
                WELCOME to our business website!!
              </h4>
              <p className="mb-4.5 mt-1.5 max-w-[90%] text-[clamp(0.62rem,1.6vw,0.8rem)] leading-[1.3] text-ink-1">
                We offer many services and products for all your needs and wants
                and we have been around for years and years.
              </p>
              <div className="messy-btns flex flex-wrap gap-1">
                <span className="border border-[#999] bg-[#cfcfcf] px-2 py-0.5 text-[11px]">
                  Submit
                </span>
                <span className="border border-[#999] bg-[#cfcfcf] px-2 py-0.5 text-[11px]">
                  Click here
                </span>
                <span className="border border-[#999] bg-[#cfcfcf] px-2 py-0.5 text-[11px]">
                  Learn more
                </span>
              </div>
            </div>
            <span className="tag tag-l absolute left-3.5 top-3.5 rounded-full bg-[var(--bg-0)] px-3 py-1 text-[0.78rem] font-semibold text-[var(--ink-0)]">
              Before
            </span>
          </div>
          <div
            className="pane pane-after absolute inset-0 grid content-center bg-[var(--bg-1)] p-[clamp(16px,4vw,40px)]"
            aria-hidden="true"
            style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
          >
            <div className="clean grid justify-items-start gap-[clamp(8px,1.8vw,16px)]">
              <span className="clean-brand font-display text-[clamp(0.7rem,1.6vw,0.9rem)] font-bold text-[var(--accent)]">
                Your business
              </span>
              <h4 className="max-w-[14ch] text-[clamp(1.3rem,4.6vw,2.4rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-[var(--ink-0)]">
                Plumbing repairs, fixed today.
              </h4>
              <p className="max-w-[34ch] text-[clamp(0.78rem,1.7vw,1rem)] text-[var(--ink-1)]">
                Licensed local plumbers with upfront pricing and same-day
                visits.
              </p>
              <span className="clean-cta rounded-full bg-[var(--accent)] px-[clamp(14px,2.4vw,22px)] py-[clamp(8px,1.6vw,12px)] text-[clamp(0.75rem,1.6vw,0.95rem)] font-bold text-[var(--bg-0)]">
                Request a quote
              </span>
              <span className="clean-note text-[clamp(0.68rem,1.4vw,0.82rem)] text-[var(--ink-1)]">
                Reply within one business day
              </span>
            </div>
            <span className="tag tag-r absolute right-3.5 top-3.5 rounded-full bg-[var(--bg-0)] px-3 py-1 text-[0.78rem] font-semibold text-[var(--ink-0)]">
              After
            </span>
          </div>
          <span
            className="handle pointer-events-none absolute bottom-0 top-0 -ml-[1.5px] w-[3px] bg-[var(--ink-0)]"
            style={{ left: pos + "%" }}
            aria-hidden="true"
          >
            <i className="-m-[22px_0_0_-22px] absolute left-1/2 top-1/2 h-11 w-11 rounded-full border-[3px] border-[var(--bg-0)] bg-[var(--accent)] shadow-lg" />
          </span>
          <input
            ref={rangeRef}
            type="range"
            min={0}
            max={100}
            value={pos}
            aria-label="Compare before and after"
            className="absolute inset-0 m-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>
    </section>
  );
}
