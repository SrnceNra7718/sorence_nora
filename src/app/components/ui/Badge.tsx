import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const Badge = ({ children, className = "", ...props }: BadgeProps) => {
  return (
    <span
      className={`inline-block font-mono text-[11.5px] text-ink-1 border border-line-strong px-[11px] py-[6px] rounded-[3px] ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
