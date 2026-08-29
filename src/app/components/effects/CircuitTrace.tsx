"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

const CircuitTrace = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const progressPathRef = useRef<SVGPathElement | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(motionQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    motionQuery.addEventListener("change", handleChange);
    return () => motionQuery.removeEventListener("change", handleChange);
  }, []);

  // Build the SVG paths and circles from DOM positions
  const buildCircuit = useCallback(() => {
    const svg = svgRef.current;
    const layer = layerRef.current;
    if (!svg || !layer) return;

    const wrapEl = document.querySelector(".wrap");
    if (!wrapEl) return;
    const wrapLeft = wrapEl.getBoundingClientRect().left;

    const traceX = Math.max(14, Math.round(wrapLeft - 62));
    const branchX = Math.max(34, Math.round(wrapLeft - 20));

    // Clear previous SVG content and reset ref
    svg.innerHTML = "";
    progressPathRef.current = null;

    const mainEl = document.getElementById("top");
    if (!mainEl) return;
    const docHeight = mainEl.offsetHeight;
    const pageWidth = window.innerWidth;

    svg.setAttribute("viewBox", `0 0 ${pageWidth} ${docHeight}`);
    layer.style.height = `${docHeight}px`;

    // Gather all data-circuit-node elements and compute their Y positions
    const targets = Array.prototype.slice.call(
      document.querySelectorAll("[data-circuit-node]"),
    );
    const points = targets.map((t) => {
      const r = t.getBoundingClientRect();
      const mainRect = mainEl.getBoundingClientRect();
      let y = r.top - mainRect.top + r.height / 2;

      // Prefer the heading inside the section for better vertical alignment
      const section = t.closest("section");
      if (section) {
        const heading = section.querySelector("h1, h2, h3");
        if (heading) {
          const hr = heading.getBoundingClientRect();
          y = hr.top - mainRect.top + hr.height / 2;
        }
      }

      return { y, id: t.dataset.circuitNode || "" };
    });

    // Build the path string (zig-zag trace)
    let d = `M ${traceX} 0`;
    points.forEach((p) => {
      d += ` L ${traceX} ${p.y - 26}`;
      d += ` L ${branchX} ${p.y}`;
      d += ` L ${traceX} ${p.y + 26}`;
    });
    d += ` L ${traceX} ${docHeight}`;

    const NS = "http://www.w3.org/2000/svg";

    // Base path (static background)
    const basePath = document.createElementNS(NS, "path");
    basePath.setAttribute("d", d);
    basePath.setAttribute("class", "circuit-base");
    svg.appendChild(basePath);

    // Progress path (animated with stroke-dashoffset)
    const progressPath = document.createElementNS(NS, "path");
    progressPath.setAttribute("d", d);
    progressPath.setAttribute("class", "circuit-progress");
    svg.appendChild(progressPath);
    progressPathRef.current = progressPath;

    // Set up dasharray/dashoffset for scroll-driven animation
    const len = progressPath.getTotalLength();
    progressPath.style.strokeDasharray = `${len}`;
    progressPath.style.strokeDashoffset = `${len}`;

    // Create circles: glow (large) then node (small) for each point
    points.forEach((p) => {
      const glowC = document.createElementNS(NS, "circle");
      glowC.setAttribute("cx", `${branchX}`);
      glowC.setAttribute("cy", `${p.y}`);
      glowC.setAttribute("r", "9");
      glowC.setAttribute("class", "circuit-node-glow");
      // Store the id on the glow as well, to easily find it later
      glowC.dataset.id = p.id;

      const nodeC = document.createElementNS(NS, "circle");
      nodeC.setAttribute("cx", `${branchX}`);
      nodeC.setAttribute("cy", `${p.y}`);
      nodeC.setAttribute("r", "4");
      nodeC.setAttribute("class", "circuit-node");
      nodeC.dataset.id = p.id;

      svg.appendChild(glowC);
      svg.appendChild(nodeC);
    });
  }, []);

  // Update the progress path offset based on scroll position
  // and highlight nodes that the trace has reached
  const updateProgress = useCallback(() => {
    const progressPath = progressPathRef.current;
    if (!progressPath) return;
    const len = progressPath.getTotalLength();
    const mainEl = document.getElementById("top");
    if (!mainEl) return;
    const docH = mainEl.offsetHeight;
    const scrollTop = window.scrollY;
    const winH = window.innerHeight;
    const p = Math.min(1, Math.max(0, (scrollTop + winH * 0.5) / docH));
    progressPath.style.strokeDashoffset = `${len - len * p}`;

    const currentLength = len * p;
    const tipPoint = progressPath.getPointAtLength(currentLength);
    const tipY = tipPoint.y;

    const svg = svgRef.current;
    if (!svg) return;
    const nodes = svg.querySelectorAll(".circuit-node");
    nodes.forEach((node) => {
      const el = node as SVGElement;
      const cy = parseFloat(el.getAttribute("cy") || "0");
      const shouldBeActive = cy <= tipY;
      const isActive = el.classList.contains("active");
      if (shouldBeActive !== isActive) {
        el.classList.toggle("active", shouldBeActive);
        const glow = el.previousElementSibling;
        if (glow && glow.classList.contains("circuit-node-glow")) {
          glow.classList.toggle("pulse", shouldBeActive);
        }
      }
    });

    if (scrollTop + winH >= docH - 2) {
      progressPath.style.strokeDashoffset = "0";
    }
  }, []);

  // Main effect: set up scroll, resize, and initial build
  useEffect(() => {
    if (reduceMotion) return;

    buildCircuit();
    updateProgress();

    // Throttled scroll handler using requestAnimationFrame
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
      }
    };

    const handleResize = () => {
      buildCircuit();
      updateProgress();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", () => {
      buildCircuit();
      updateProgress();
    });
    const timeout = setTimeout(() => {
      buildCircuit();
      updateProgress();
    }, 200);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, [reduceMotion, buildCircuit, updateProgress]);

  if (reduceMotion) return null;

  return (
    <div
      ref={layerRef}
      className="circuit-layer"
      id="circuitLayer"
      aria-hidden="true"
    >
      <svg
        ref={svgRef}
        className="circuit-svg"
        id="circuitSvg"
        style={{ overflow: "visible" }}
      />
    </div>
  );
};

export default CircuitTrace;
