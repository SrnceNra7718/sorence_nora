import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", children, className = "", ...props }, ref) => {
    const base =
      "inline-flex items-center gap-2 font-mono text-[13px] tracking-[0.02em] px-6 py-[15px] rounded-[2px] relative overflow-hidden transition-colors duration-300";
    const variants = {
      primary: "bg-accent text-accent-ink font-medium hover:bg-[#f0b25d]",
      ghost:
        "border border-line-strong text-ink-0 hover:border-accent hover:text-accent",
    };

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
