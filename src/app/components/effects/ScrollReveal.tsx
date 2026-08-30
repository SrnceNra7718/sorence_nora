"use client";

import React, { useEffect } from "react";

const ScrollReveal = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("in");
      });
      return;
    }

    const revealEls = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("in", entry.isIntersecting);
        });
      },
      { threshold: 0.14 }
    );

    revealEls.forEach((el) => observer.observe(el));

    requestAnimationFrame(() => {
      revealEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible =
          rect.top < window.innerHeight && rect.bottom > 0;
        el.classList.toggle("in", isVisible);
      });
    });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default ScrollReveal;
