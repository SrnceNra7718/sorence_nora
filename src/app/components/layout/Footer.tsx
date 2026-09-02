import React from "react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line pb-[40px] pt-[56px]">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-[28px]">
          <div>
            <div className="flex flex-wrap items-center gap-[12px]">
              <Image
                src="/SNLogo.png"
                alt="Sorence Nora"
                width={18}
                height={18}
              />
              <p className="font-display text-[1.3rem] font-semibold">
                Sorence Nora
              </p>
            </div>
            <p className="mt-[6px] font-mono text-[12px] text-ink-1">
              FRONTEND WEB DEVELOPER — PHILIPPINES
            </p>
          </div>
          <div className="flex flex-wrap gap-[22px]">
            <a
              href="mailto:nora.sorence@gmail.com"
              className="font-mono text-[12.5px] text-ink-1 transition-colors hover:text-accent"
            >
              Email
            </a>
            <a
              href="https://drive.google.com/file/d/14s3Y6nlgkDAuJWRYq021temUH9k1tD1b/view?usp=sharing"
              target="_blank"
              rel="noopener"
              className="font-mono text-[12.5px] text-ink-1 transition-colors hover:text-accent"
            >
              Resume
            </a>
            <a
              href="#top"
              className="font-mono text-[12.5px] text-ink-1 transition-colors hover:text-accent"
            >
              Back to top ↑
            </a>
          </div>
        </div>
        <div className="mt-[34px] flex flex-wrap justify-between gap-[10px] border-t border-line pt-[22px] font-mono text-[11px] text-ink-2">
          <span>© {currentYear} Sorence Nora. All rights reserved.</span>
          <span>Official website — built with HTML, CSS &amp; JavaScript</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
