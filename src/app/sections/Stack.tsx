import React from "react";
import Link from "next/link";
import { stackCategories } from "@/lib/stack";

const Stack = () => {
  return (
    <section className="section-pad" id="stack">
      <div className="wrap">
        <div className="eyebrow reveal" data-circuit-node="stack">
          <span className="relative flex flex-row items-center gap-[6px]">
            <span className="absolute -left-3 top-0 hidden md:block">&lt;</span>
            <span className="material-symbols-outlined block text-[14px]">
              {"stacks"}
            </span>
            <span className="hidden md:inline">{"Stack"}</span>
            <span className="absolute -right-6 top-0 hidden md:block">
              /&gt;
            </span>
          </span>
        </div>
        <h2 className="reveal reveal-d1 font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-ink-0">
          Technology
          <br />
          index.
        </h2>

        <div className="mt-[50px]">
          {stackCategories.map((cat, idx) => (
            <div
              key={cat.category}
              className={`stack-row reveal border-t border-line py-[26px]${idx === stackCategories.length - 1 ? "border-b" : ""}`}
            >
              <span className="idx pt-[4px] font-mono text-[12px] text-ink-2">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="cat pt-[4px] font-mono text-[12px] uppercase tracking-[0.08em] text-ink-1">
                {cat.category}
              </span>
              <div className="stack-items flex flex-wrap gap-[10px_28px]">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="stack-item font-display text-[clamp(1.1rem,2.2vw,1.5rem)] font-medium text-ink-0"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal reveal-d2 mt-[40px]">
          <Link
            href="/skills"
            className="inline-flex items-center gap-[6px] font-mono text-[12.5px] text-accent transition-colors hover:underline"
          >
            See detailed technology descriptions →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Stack;
