import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-line pt-[56px] pb-[40px]">
      <div className="wrap">
        <div className="flex justify-between items-end flex-wrap gap-[28px]">
          <div>
            <p className="font-display font-semibold text-[1.3rem]">Sorence Nora</p>
            <p className="font-mono text-[12px] text-ink-1 mt-[6px]">
              FRONTEND WEB DEVELOPER — PHILIPPINES
            </p>
          </div>
          <div className="flex gap-[22px] flex-wrap">
            <a
              href="mailto:nora.sorence@gmail.com"
              className="font-mono text-[12.5px] text-ink-1 hover:text-accent transition-colors"
            >
              Email
            </a>
            <a
              href="https://drive.google.com/file/d/1_2AFU6mu0gYI23akwfE4JxWfK6lw1ITj/view?usp=sharing"
              target="_blank"
              rel="noopener"
              className="font-mono text-[12.5px] text-ink-1 hover:text-accent transition-colors"
            >
              Resume
            </a>
            <a
              href="#top"
              className="font-mono text-[12.5px] text-ink-1 hover:text-accent transition-colors"
            >
              Back to top ↑
            </a>
          </div>
        </div>
        <div className="mt-[34px] pt-[22px] border-t border-line flex justify-between flex-wrap gap-[10px] font-mono text-[11px] text-ink-2">
          <span>© 2026 Sorence Nora. All rights reserved.</span>
          <span>Prototype redesign — built with HTML, CSS &amp; JavaScript</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
