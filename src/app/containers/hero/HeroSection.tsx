import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [sliderValue, setSliderValue] = useState(50); // Initial slider value
  const [isDragging, setIsDragging] = useState(false); // Track dragging
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame: number;

    const animateLine = () => {
      if (!isDragging && lineRef.current) {
        const rect = lineRef.current.parentElement!.getBoundingClientRect();
        let currentLeft = (sliderValue / 100) * rect.width;
        let newLeft = (currentLeft + 2) % rect.width; // Incremental movement

        let newSliderValue = (newLeft / rect.width) * 100;
        setSliderValue(newSliderValue); // Update slider value

        animationFrame = requestAnimationFrame(animateLine); // Loop animation
      }
    };

    animationFrame = requestAnimationFrame(animateLine); // Start animation

    return () => cancelAnimationFrame(animationFrame); // Cleanup
  }, [isDragging, sliderValue]);

  const handleMouseMove = (e: MouseEvent) => {
    if (lineRef.current) {
      const rect = lineRef.current.parentElement!.getBoundingClientRect();
      let newLeft = e.clientX - rect.left; // Calculate new left position
      let newSliderValue = (newLeft / rect.width) * 100; // Convert to percentage
      newSliderValue = Math.max(0, Math.min(newSliderValue, 100)); // Clamp between 0 and 100
      setSliderValue(newSliderValue); // Update slider value
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false); // Stop dragging
    document.removeEventListener("mousemove", handleMouseMove); // Remove listeners
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDown = () => {
    setIsDragging(true); // Set dragging
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <main className="container z-10 mx-auto flex h-full w-full items-center justify-center pt-10">
      <div className="flex flex-row items-center max-sm:flex-col">
        <div className="relative">
          <div className="relative -top-[6rem] z-10 h-[480px] w-[480px] scale-50 items-center justify-center sm:scale-[97rem] md:-top-[20px]">
            {/* Scale down for small screens */}
            <div
              id="TransLine"
              ref={lineRef}
              className={`absolute top-5 z-20 h-[26rem] w-1 cursor-pointer bg-foregroundlightcyan transition-transform duration-[5s] ${isDragging ? "" : "translate-x-full"}`}
              style={{ left: `${sliderValue * 4.7}px` }} // Adjust position
              onMouseDown={handleMouseDown} // Start drag
            ></div>
            <Image
              id="SNPicCartoonize"
              src="/SNPicCartoonize.png"
              alt="Sorence"
              width={480}
              height={480}
              draggable="false"
              className="absolute"
              style={{
                userSelect: "none",
                clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`,
              }}
              onMouseDown={handleMouseDown} // Start drag
            />
            <Image
              id="SNPic"
              src="/SNPic.png"
              alt="Sorence"
              width={480}
              height={480}
              draggable="false"
              className="absolute"
              style={{
                userSelect: "none",
                clipPath: `polygon(${sliderValue}% 0, 100% 0, 100% 100%, ${sliderValue}% 100%)`,
              }}
              onMouseDown={handleMouseDown} // Start drag
            />
          </div>
          <div
            id="bgForPicture"
            className="absolute -top-[0.5rem] left-[60px] -z-10 h-[324px] w-[354px] scale-50 rounded-full bg-forbentobg sm:scale-[97rem] md:left-[56px] md:top-[5rem] md:h-[320px] md:w-[354px]"
          ></div>{" "}
          {/* Scale down the background for small screens */}
        </div>

        <div className="-mt-[20rem] flex scale-50 flex-col sm:scale-100 md:-ml-[14rem] md:-mt-[10rem]">
          <h4 className="-z-10 ml-[6rem] text-left text-[1.5rem] font-bold">
            Hi! I&apos;am
          </h4>
          <h1 className="-mt-16 text-heroheading7rem font-heroheading7rem">
            Sorence
          </h1>
          <h1 className="-mt-[5rem] ml-5 text-heroheading7rem font-heroheading7rem">
            Nora
          </h1>
          <h4 className="-mt-6 flex flex-wrap justify-center space-x-1 text-center text-[2rem] font-bold md:pl-[9rem] md:text-start md:text-[1rem]">
            a frontend web developer specializing{" "}
            <br className="hidden md:block" />
            in building modern and responsive <br className="hidden md:block" />
            web applications.
          </h4>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
