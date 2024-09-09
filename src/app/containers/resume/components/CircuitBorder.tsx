import React from "react";

interface CircuitBorderProps {
  flip: boolean; // Adding a boolean prop named 'flip'
}

const CircuitBorder: React.FC<CircuitBorderProps> = ({ flip }) => {
  return (
    <div
      className={` ${flip ? "-left-0.5 scale-x-[-1]" : ""}`} // Conditionally adding 'scale-x-[-1]' class based on the 'flip' prop
    >
      <div
        id="main"
        className="z-10 hidden h-[24px] w-[650px] items-center justify-center md:relative md:flex"
      >
        {/* Horizontal line with circles */}
        <div className="absolute -top-[170px] left-[54px] flex h-9 w-9 items-center justify-center rounded-full bg-foregroundlightcyan">
          <div className="h-5 w-5 rounded-full bg-bg"></div>
          <div className="absolute left-[10px] top-[29px] h-[160px] w-4 bg-foregroundlightcyan"></div>
        </div>

        <div className="flex h-4 w-[520px] items-center justify-center bg-foregroundlightcyan"></div>

        <div className="absolute right-[55px] top-[165px] flex h-9 w-9 items-center justify-center rounded-full bg-foregroundlightcyan">
          <div className="h-5 w-5 rounded-full bg-bg"></div>
          <div className="absolute -top-[152px] left-[10px] h-[159px] w-4 bg-foregroundlightcyan"></div>
        </div>
      </div>
    </div>
  );
};

export default CircuitBorder;
