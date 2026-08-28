import React from "react";
import Reveal from "@/app/components/effects/Reveal";
import { stackCategories } from "@/lib/stack";

const Stack = () => {
  return (
    <section className="section-pad" id="stack" data-circuit-node="stack">
      <div className="wrap">
        <div className="eyebrow reveal" data-circuit-node="stack">
          01 / Stack
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
      </div>
    </section>
  );
};

export default Stack;
