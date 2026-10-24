"use client";

import React, { useEffect, useRef } from "react";

const cards = [
  { title: "Landing pages", desc: "One page with one job: get the visitor to act. Clear headline, proof of credibility and a call to action that is easy to find." },
  { title: "Complete business websites", desc: "Multi-page sites that look professional, load fast on any device and are straightforward for you to keep up to date." },
  { title: "Databases, login and hosting", desc: "The systems behind the site: data storage, user accounts, enquiry and booking forms, and deployment, built on Supabase." },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduce) return;
    const els = ref.current?.querySelectorAll<HTMLElement>("[data-tilt]") ?? [];
    const handlers: { el: HTMLElement; move: (e: PointerEvent) => void; leave: () => void }[] = [];
    els.forEach((el) => {
      const max = 8;
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        el.classList.add("moving");
        el.style.setProperty("--ry", ((px - 0.5) * 2 * max).toFixed(2) + "deg");
        el.style.setProperty("--rx", ((0.5 - py) * 2 * max).toFixed(2) + "deg");
        el.style.setProperty("--gx", (px * 100).toFixed(1) + "%");
        el.style.setProperty("--gy", (py * 100).toFixed(1) + "%");
      };
      const leave = () => {
        el.classList.remove("moving");
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
      };
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);
      handlers.push({ el, move, leave });
    });
    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", leave);
      });
    };
  }, []);

  return (
    <section className="section-pad" id="services">
      <div className="wrap">
        <div className="max-w-[62ch] mb-[clamp(32px,5vw,56px)]">
          <h2 className="font-display text-[clamp(1.9rem,4.2vw,3.2rem)] font-extrabold tracking-[-0.03em] text-[var(--ink-0)]">One developer for the whole website.</h2>
          <p className="mt-4 text-[1.08rem] text-[var(--ink-1)]">Front end and back end are built together, so what looks right on screen also works behind it.</p>
        </div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(16px,2.2vw,28px)]">
          {cards.map((c) => (
            <article key={c.title} data-tilt className="bg-[var(--bg-1)] rounded-[var(--radius)] p-[clamp(24px,3vw,36px)] border border-[var(--line)] transition-shadow" style={{ "--rx": "0deg", "--ry": "0deg", "--gx": "50%", "--gy": "50%" } as React.CSSProperties}>
              <h3 className="font-display text-[1.35rem] mb-2.5 text-[var(--ink-0)]">{c.title}</h3>
              <p className="text-[var(--ink-1)]">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
      <style jsx>{`
        [data-tilt] { transform: perspective(900px) rotateX(var(--rx)) rotateY(var(--ry)); transition: transform .35s cubic-bezier(.2,.8,.2,1); position: relative; }
        [data-tilt].moving { transition: transform .08s linear; }
        [data-tilt]::after { content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; opacity: 0; background: radial-gradient(240px circle at var(--gx) var(--gy), rgba(255,255,255,.15), transparent 60%); transition: opacity .3s; }
        [data-tilt].moving::after { opacity: 1; }
      `}</style>
    </section>
  );
}
