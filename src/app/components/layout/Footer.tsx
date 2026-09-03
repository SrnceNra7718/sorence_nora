import React from "react";
import Image from "next/image";
import Link from "next/link";

const footerNavLinks = [
  { label: "HOME", href: "/" },
  { label: "SKILLS", href: "/skills" },
  { label: "WORK", href: "/projects" },
  { label: "ABOUT", href: "/about" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line pb-[56px] pt-[56px]" role="contentinfo">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-[28px]">
          <div>
            <div className="flex flex-wrap items-center gap-[12px]">
              <Image
                src="/SNLogo.png"
                alt="Sorence Nora"
                width={20}
                height={20}
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
            {footerNavLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="font-mono text-[12.5px] text-ink-1 transition-colors hover:text-accent"
              >
                {label}
              </Link>
            ))}
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
