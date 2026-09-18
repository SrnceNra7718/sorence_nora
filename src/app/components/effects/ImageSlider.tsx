"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "@/lib/useMediaQuery";

interface ImageSliderProps {
  cartoonSrc: string;
  photoSrc: string;
  alt: string;
  /** Design dimensions — used only to compute the slider's aspect ratio. */
  width: number;
  height: number;
  /**
   * Responsive sizes hint passed to next/image.
   * Defaults match the About-page hero breakpoints; override if reused elsewhere.
   */
  sizes?: string;
  className?: string;
}

const MIN_VALUE = 5;
const MAX_VALUE = 95;
const STEP = 0.6;
const INTERVAL = 40;

const DEFAULT_SIZES =
  "(max-width: 768px) 120px, (max-width: 1024px) 220px, (max-width: 1280px) 280px, 340px";

const ImageSlider = ({
  cartoonSrc,
  photoSrc,
  alt,
  width,
  height,
  sizes = DEFAULT_SIZES,
  className = "",
}: ImageSliderProps) => {
  const [sliderValue, setSliderValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef(1);
  const lastClientXRef = useRef<number | null>(null);
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const updateSlider = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(
      MIN_VALUE,
      Math.min(MAX_VALUE, (x / rect.width) * 100),
    );
    setSliderValue(percent);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    lastClientXRef.current = e.clientX;
    setIsDragging(true);
    updateSlider(e.clientX);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const previousClientX = lastClientXRef.current;
    if (previousClientX !== null && e.clientX !== previousClientX) {
      directionRef.current = e.clientX > previousClientX ? 1 : -1;
    }
    lastClientXRef.current = e.clientX;
    updateSlider(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    lastClientXRef.current = null;
    setIsDragging(false);
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    lastClientXRef.current = null;
    setIsDragging(false);
  };

  useEffect(() => {
    if (reduceMotion || isDragging) return;
    const id = window.setInterval(() => {
      setSliderValue((previousValue) => {
        const nextValue = previousValue + directionRef.current * STEP;
        if (nextValue >= MAX_VALUE) {
          directionRef.current = -1;
          return MAX_VALUE;
        }
        if (nextValue <= MIN_VALUE) {
          directionRef.current = 1;
          return MIN_VALUE;
        }
        return nextValue;
      });
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, [isDragging, reduceMotion]);

  return (
    <div
      ref={containerRef}
      role="slider"
      aria-label={alt}
      aria-valuemin={MIN_VALUE}
      aria-valuemax={MAX_VALUE}
      aria-valuenow={Math.round(sliderValue)}
      tabIndex={0}
      className={`relative w-full select-none overflow-hidden ${className}`}
      style={{
        touchAction: "none",
        aspectRatio: `${width} / ${height}`,
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
    >
      <div
        id="TransLine"
        className="absolute top-0 z-20 h-full w-[2px] cursor-ew-resize bg-accent"
        style={{
          left: `${sliderValue}%`,
          transform: "translateX(-50%)",
        }}
      />
      <Image
        id="SNPicCartoonize"
        src={cartoonSrc}
        alt={alt}
        fill
        sizes={sizes}
        draggable="false"
        className="object-contain"
        style={{
          userSelect: "none",
          clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`,
        }}
      />
      <Image
        id="SNPic"
        src={photoSrc}
        alt={alt}
        fill
        sizes={sizes}
        draggable="false"
        className="object-contain"
        style={{
          userSelect: "none",
          clipPath: `polygon(${sliderValue}% 0, 100% 0, 100% 100%, ${sliderValue}% 100%)`,
        }}
      />
    </div>
  );
};

export default ImageSlider;
