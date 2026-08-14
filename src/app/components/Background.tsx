"use client";

import React, { useEffect, useState } from "react";

const Background = () => {
  const [mousePos, setMousePos] = useState({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Function to calculate the distance between two points (x1, y1) and (x2, y2)
  const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2); // Pythagorean theorem
  };

  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      {/* Main background */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            circle at ${mousePos.x}px ${mousePos.y}px,
            #00ffff 0%,
            #000b0d 60%
          )`,
        }}
      />

      {/* Hexagon grid */}
      <div className="absolute inset-[-20px] overflow-hidden opacity-90">
        {[...Array(45)].map((_, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              display: "inline-flex", // Each row of hexagons will be displayed inline-flex
              marginLeft: rowIndex % 2 === 0 ? "-25px" : "1px", // Offset the hexagons to create a staggered effect
              marginTop: "-20px", // Add a margin between rows
              overflow: "hidden", // Prevent overflow of hexagons outside the div
            }}
          >
            {/* For each row, create 30 hexagons */}
            {[...Array(30)].map((_, hexIndex) => {
              // Calculate the hexagon's x and y position on the grid
              const hexX = hexIndex * 52 + (rowIndex % 2 ? 26 : 0); // Stagger hexagons horizontally
              const hexY = rowIndex * 60; // Space hexagons vertically

              // Calculate the distance between the current hexagon and the mouse position
              const distance = getDistance(mousePos.x, mousePos.y, hexX, hexY);

              // Return the individual hexagon div
              return (
                <div
                  key={hexIndex}
                  style={{
                    position: "relative", // Each hexagon is positioned relative to its container
                    height: "60px", // Hexagon height
                    width: "50px", // Hexagon width
                    background: "#000e10", // Hexagon background color (default)
                    margin: "1px", // Space between hexagons
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", // Clip path to create the hexagon shape
                    boxShadow: distance < 2 ? "0 0 2px #00ffff" : "none", // Add glow if hexagon is close to the mouse
                    transition: "2s", // Smooth transition of the glow effect
                  }}
                  className="lg:h-[120px] xl:w-[100px]"
                ></div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Soft cyan mouse glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            circle 180px at ${mousePos.x}px ${mousePos.y}px,
            rgba(0, 255, 255, 0.12),
            transparent 70%
          )`,
        }}
      />

      {/* Fade the edges of the screen */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              to right,
              rgba(0, 11, 13, 0.95) 0%,
              transparent 12%,
              transparent 88%,
              rgba(0, 11, 13, 0.95) 100%
            ),
            linear-gradient(
              to bottom,
              rgba(0, 11, 13, 0.95) 0%,
              transparent 12%,
              transparent 88%,
              rgba(0, 11, 13, 0.95) 100%
            )
          `,
        }}
      />

      {/* Extra corner fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 45%, rgba(0, 11, 13, 0.85) 100%)",
        }}
      />
    </div>
  );
};

export default Background;
