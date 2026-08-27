"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

const CircuitTrace = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const progressPathRef = useRef<SVGPathElement | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(motionQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    motionQuery.addEventListener("change", handleChange);
    return () => motionQuery.removeEventListener("change", handleChange);
  }, []);

  const buildCircuit = useCallback(() => {
    const svg = svgRef.current;
    const layer = layerRef.current;
    if (!svg || !layer) return;

    const wrapEl = document.querySelector(".wrap");
    if (!wrapEl) return;
    const wrapLeft = wrapEl.getBoundingClientRect().left;

    if (wrapLeft < 90) {
      layer.style.display = "none";
      return;
    }
    layer.style.display = "";

    const traceX = Math.round(wrapLeft - 78);
    const branchX = Math.round(wrapLeft - 35);

    svg.innerHTML = "";
    progressPathRef.current = null;

    const mainEl = document.getElementById("top");
    if (!mainEl) return;
    const docHeight = mainEl.offsetHeight;
    const pageWidth = window.innerWidth;

    svg.setAttribute("viewBox", `0 0 ${pageWidth} ${docHeight}`);
    layer.style.height = `${docHeight}px`;

    const targets = Array.prototype.slice.call(
      document.querySelectorAll("[data-circuit-node]"),
    );
    const points = targets.map((t) => {
      const r = t.getBoundingClientRect();
      const mainRect = mainEl.getBoundingClientRect();
      let y = r.top - mainRect.top + r.height / 2;

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

    let d = `M ${traceX} 0`;
    points.forEach((p) => {
      d += ` L ${traceX} ${p.y - 26}`;
      d += ` L ${branchX} ${p.y}`;
      d += ` L ${traceX} ${p.y + 26}`;
    });
    d += ` L ${traceX} ${docHeight}`;

    const NS = "http://www.w3.org/2000/svg";

    const basePath = document.createElementNS(NS, "path");
    basePath.setAttribute("d", d);
    basePath.setAttribute("class", "circuit-base");
    svg.appendChild(basePath);

    const progressPath = document.createElementNS(NS, "path");
    progressPath.setAttribute("d", d);
    progressPath.setAttribute("class", "circuit-progress");
    svg.appendChild(progressPath);
    progressPathRef.current = progressPath;

    const len = progressPath.getTotalLength();
    progressPath.style.strokeDasharray = `${len}`;
    progressPath.style.strokeDashoffset = `${len}`;

    points.forEach((p) => {
      const glowC = document.createElementNS(NS, "circle");
      glowC.setAttribute("cx", `${branchX}`);
      glowC.setAttribute("cy", `${p.y}`);
      glowC.setAttribute("r", "9");
      glowC.setAttribute("class", "circuit-node-glow");

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

  const updateActiveNode = useCallback((id: string | null) => {
    const svg = svgRef.current;
    if (!svg) return;
    const nodes = svg.querySelectorAll(".circuit-node");
    nodes.forEach((node) => {
      const el = node as SVGElement;
      const nodeId = el.dataset.id || "";
      if (nodeId === id) {
        el.classList.add("active");
        const glow = el.nextElementSibling;
        if (glow && glow.classList.contains("circuit-node-glow")) {
          glow.classList.add("pulse");
        }
      } else {
        el.classList.remove("active");
        const glow = el.nextElementSibling;
        if (glow && glow.classList.contains("circuit-node-glow")) {
          glow.classList.remove("pulse");
        }
      }
    });
  }, []);

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
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    buildCircuit();
    updateProgress();

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

    const handleResize = () => { buildCircuit(); updateProgress(); };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", () => { buildCircuit(); updateProgress(); });
    const timeout = setTimeout(() => { buildCircuit(); updateProgress(); }, 200);

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveNode(id);
          updateActiveNode(id);
        }
      });
    };

    const sections = ["hero", "stack", "work", "about", "contact"].map((id) =>
      document.getElementById(id),
    );
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-45% 0px -50% 0px",
      threshold: 0,
    });
    sections.forEach((s) => {
      if (s) observer.observe(s);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [reduceMotion, buildCircuit, updateProgress, updateActiveNode]);

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
