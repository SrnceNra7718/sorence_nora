import React from "react";
import { TimelineItem } from "@/lib/timeline";

interface TimelineProps {
  heading: string;
  items: TimelineItem[];
}

const Timeline = ({ heading, items }: TimelineProps) => {
  return (
    <div className="mt-[70px]">
      <p className="font-mono text-[12px] tracking-[0.08em] text-ink-1 uppercase mb-[22px] flex items-center gap-[10px]">
        <span className="block w-[22px] h-[1px] bg-line-strong" />
        {heading}
      </p>
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[100px_1fr] gap-[24px] py-[22px] border-t border-line last:border-b"
          >
            <span className="font-mono text-[13px] text-accent pt-[2px]">
              {item.year}
            </span>
            <div>
              <p className="font-display text-[1.15rem] font-medium text-ink-0 mb-[4px]">
                {item.title}
              </p>
              <p className="text-[13.5px] text-ink-1">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
