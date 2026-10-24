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
      if (compareRef.current) compareRef.current.style.setProperty("--pos", v + "%");
    };
    const onInput = () => { userDragged.current = true; setP(Number(range.value)); };
    range.addEventListener("input", onInput);
    setP(Number(range.value));

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce && "IntersectionObserver" in window && compareRef.current) {
      const io = new IntersectionObserver(([en]) => {
        if (!en.isIntersecting) return;
        io.disconnect();
        const start = performance.now(), dur = 2600;
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
      }, { threshold: 0.6 });
      io.observe(compareRef.current);
      return () => { io.disconnect(); range.removeEventListener("input", onInput); };
    }
    return () => range.removeEventListener("input", onInput);
  }, []);

  return (
    <section className="section-pad" id="details">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-[clamp(32px,5vw,80px)] items-center">
        <div>
          <h2 className="font-display text-[clamp(1.9rem,4.2vw,3.2rem)] font-extrabold tracking-[-0.03em] text-[var(--ink-0)]">Small details decide whether people trust a site.</h2>
          <p className="mt-4 text-[1.08rem] text-[var(--ink-1)]">Clear visual hierarchy, consistent spacing and interactions that behave as expected affect usability, trust and conversion. Drag the handle to compare the same page before and after.</p>
        </div>
        <div ref={compareRef} className="compare relative aspect-[4/3] rounded-[22px] overflow-hidden bg-[var(--bg-1)] border border-[var(--line)]" style={{ "--pos": pos + "%" } as React.CSSProperties}>
          <div className="pane pane-before absolute inset-0 p-[clamp(16px,4vw,40px)] grid content-center bg-[#1a1a1a]" aria-hidden="true">
            <div className="messy font-serif">
              <small className="block text-[10px] text-[#777] mb-3.5 tracking-[1px]">home | about | services | contact | blog</small>
              <h4 className="font-black text-[clamp(1rem,3.6vw,1.7rem)] text-[#8a1c1c] leading-[1.15]">WELCOME to our business website!!</h4>
              <p className="text-[clamp(0.62rem,1.6vw,0.8rem)] text-[#555] mt-1.5 mb-4.5 leading-[1.3] max-w-[90%]">We offer many services and products for all your needs and wants and we have been around for years and years.</p>
              <div className="messy-btns flex gap-1 flex-wrap">
                <span className="text-[11px] px-2 py-0.5 bg-[#cfcfcf] border border-[#999]">Submit</span>
                <span className="text-[11px] px-2 py-0.5 bg-[#cfcfcf] border border-[#999]">Click here</span>
                <span className="text-[11px] px-2 py-0.5 bg-[#cfcfcf] border border-[#999]">Learn more</span>
              </div>
            </div>
            <span className="tag tag-l absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[var(--bg-0)] text-[var(--ink-0)] text-[0.78rem] font-semibold">Before</span>
          </div>
          <div className="pane pane-after absolute inset-0 p-[clamp(16px,4vw,40px)] grid content-center bg-[var(--bg-1)]" aria-hidden="true" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
            <div className="clean grid gap-[clamp(8px,1.8vw,16px)] justify-items-start">
              <span className="clean-brand font-display font-bold text-[clamp(0.7rem,1.6vw,0.9rem)] text-[var(--accent)]">Your business</span>
              <h4 className="text-[clamp(1.3rem,4.6vw,2.4rem)] font-extrabold tracking-[-0.03em] leading-[1.02] text-[var(--ink-0)] max-w-[14ch]">Plumbing repairs, fixed today.</h4>
              <p className="text-[clamp(0.78rem,1.7vw,1rem)] text-[var(--ink-1)] max-w-[34ch]">Licensed local plumbers with upfront pricing and same-day visits.</p>
              <span className="clean-cta bg-[var(--accent)] text-[var(--bg-0)] px-[clamp(14px,2.4vw,22px)] py-[clamp(8px,1.6vw,12px)] rounded-full font-bold text-[clamp(0.75rem,1.6vw,0.95rem)]">Request a quote</span>
              <span className="clean-note text-[clamp(0.68rem,1.4vw,0.82rem)] text-[var(--ink-1)]">Reply within one business day</span>
            </div>
            <span className="tag tag-r absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[var(--bg-0)] text-[var(--ink-0)] text-[0.78rem] font-semibold">After</span>
          </div>
          <span className="handle absolute top-0 bottom-0 w-[3px] -ml-[1.5px] bg-[var(--ink-0)] pointer-events-none" style={{ left: pos + "%" }} aria-hidden="true">
            <i className="absolute top-1/2 left-1/2 w-11 h-11 -m-[22px_0_0_-22px] rounded-full bg-[var(--accent)] border-[3px] border-[var(--bg-0)] shadow-lg" />
          </span>
          <input ref={rangeRef} type="range" min={0} max={100} value={pos} aria-label="Compare before and after" className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize m-0" />
        </div>
      </div>
    </section>
  );
}
