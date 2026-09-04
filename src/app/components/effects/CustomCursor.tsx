"use client";

import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "@/lib/useMediaQuery";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const coordRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isFinePointer = useMediaQuery("(hover: hover) and (pointer: fine)");

  useEffect(() => {
    if (reduceMotion || !isFinePointer) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const coord = coordRef.current;
    const glow = glowRef.current;
    if (!dot || !ring || !coord || !glow) return;

    let rx = 0,
      ry = 0,
      gx = 0,
      gy = 0;
    let dx = 0,
      dy = 0;

    // Apply centering transform once
    const centerStyle = "translate(-50%, -50%)";
    dot.style.transform = centerStyle;
    ring.style.transform = centerStyle;
    glow.style.transform = centerStyle;
    coord.style.transform = centerStyle;

    const handleMouseMove = (e: MouseEvent) => {
      dx = e.clientX;
      dy = e.clientY;
      // Dot follows instantly
      dot.style.left = dx + "px";
      dot.style.top = dy + "px";
      // Coord follows instantly (position and text)
      coord.style.left = dx + "px";
      coord.style.top = dy + "px";
      coord.textContent = `X:${Math.round(e.clientX)} Y:${Math.round(e.clientY)}`;
      glow.classList.add("visible");
    };

    const handleMouseLeave = () => {
      glow.classList.remove("visible");
    };

    const animateRing = () => {
      // Smooth interpolation
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      gx += (dx - gx) * 0.09;
      gy += (dy - gy) * 0.09;

      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      glow.style.left = gx + "px";
      glow.style.top = gy + "px";

      requestAnimationFrame(animateRing);
    };

    const handleEnter = () => {
      ring.classList.add("hover");
      glow.classList.add("hover");
    };
    const handleLeave = () => {
      ring.classList.remove("hover");
      glow.classList.remove("hover");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    animateRing();

    document
      .querySelectorAll("a, button, .stack-item, input, textarea")
      .forEach((el) => {
        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
      });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document
        .querySelectorAll("a, button, .stack-item, input, textarea")
        .forEach((el) => {
          el.removeEventListener("mouseenter", handleEnter);
          el.removeEventListener("mouseleave", handleLeave);
        });
    };
  }, [reduceMotion, isFinePointer]);

  if (reduceMotion || !isFinePointer) return null;

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={coordRef} className="cursor-coord" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
