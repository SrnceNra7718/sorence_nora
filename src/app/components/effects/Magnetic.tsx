"use client";

import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "@/lib/useMediaQuery";

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
}

const Magnetic = ({ children, className = "" }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    if (reduceMotion) return;
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const mx = e.clientX - r.left - r.width / 2;
      const my = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${mx * 0.18}px, ${my * 0.28}px)`;
    };

    const handleMouseLeave = () => {
      el.style.transform = "translate(0, 0)";
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [reduceMotion]);

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      {children}
    </div>
  );
};

export default Magnetic;
