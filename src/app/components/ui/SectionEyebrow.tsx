import React from "react";

interface SectionEyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const SectionEyebrow = ({
  children,
  className = "",
  ...props
}: SectionEyebrowProps) => {
  return (
    <p
      className={`inline-flex items-center gap-[10px] font-mono text-[12px] tracking-[0.08em] text-accent uppercase mb-[18px] ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default SectionEyebrow;
