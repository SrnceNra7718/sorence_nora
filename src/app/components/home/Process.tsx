"use client";

import React, { useEffect, useRef } from "react";

const steps = ["Requirements", "Planning", "Development", "Launch", "Handover"];
const descs = [
  "We agree on your goals, pages, content and what \"done\" means.",
  "Scope, milestones and deadlines are written down before any code starts.",
  "Interface and back end are built together, with progress you can review along the way.",
  "Deployment, domain, speed and mobile checks, then a final review with you.",
  "A walkthrough and clear notes so you can manage the site confidently after launch.",
];

export default function Process() {
  const stepsRef = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const el = stepsRef.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll("li"));
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const line = window.innerHeight * 0.6;
      const p = Math.min(1, Math.max(0, (line - r.top) / r.height));
      el.style.setProperty("--p", p.toFixed(3));
      items.forEach((li) => li.classList.toggle("reached", li.getBoundingClientRect().top < line));
    };
    let ticking = false;
    const handler = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { onScroll(); ticking = false; });
    };
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="section-pad bg-[var(--bg-1)]" id="process">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-[clamp(32px,6vw,96px)] items-start">
        <div className="lg:sticky lg:top-[110px]">
          <h2 className="font-display text-[clamp(1.9rem,4.2vw,3.2rem)] font-extrabold tracking-[-0.03em] text-[var(--ink-0)]">You always know where the project stands.</h2>
          <p className="mt-4 text-[1.08rem] text-[var(--ink-1)]">I work with you directly through every stage, so expectations are agreed up front and delivery matches them.</p>
          <a href="#contact" className="btn btn-primary mt-7 inline-flex">Plan your project</a>
        </div>
        <ol ref={stepsRef} className="steps relative grid gap-3.5 pl-14" style={{ "--p": "0" } as React.CSSProperties}>
          {steps.map((s, i) => (
            <li key={s} className="bg-[var(--bg-2)] rounded-2xl p-[22px_26px] opacity-60 transition-all duration-400">
              <h3 className="font-display text-[1.2rem] mb-1 text-[var(--ink-0)]">{s}</h3>
              <p className="text-[var(--ink-1)]">{descs[i]}</p>
            </li>
          ))}
        </ol>
      </div>
      <style jsx>{`
        .steps { --p: 0; counter-reset: step; }
        .steps::before, .steps::after { content: ""; position: absolute; left: 17px; top: 18px; bottom: 18px; width: 3px; border-radius: 3px; background: rgba(243,241,236,0.14); }
        .steps::after { background: var(--accent); transform-origin: top; transform: scaleY(var(--p)); }
        .steps li { counter-increment: step; position: relative; }
        .steps li::before { content: counter(step); position: absolute; left: -56px; top: 18px; width: 38px; height: 38px; border-radius: 50%; display: grid; place-items: center; font: 700 .95rem var(--font-display); background: var(--bg-2); color: var(--ink-1); border: 3px solid rgba(243,241,236,0.14); transition: background-color .3s, color .3s, border-color .3s, transform .3s; }
        .steps li.reached { opacity: 1; }
        .steps li.reached::before { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); transform: scale(1.08); }
        @media (max-width: 640px) { .steps { padding-left: 48px; } .steps li::before { left: -48px; width: 34px; height: 34px; } .steps::before, .steps::after { left: 15px; } }
      `}</style>
    </section>
  );
}
