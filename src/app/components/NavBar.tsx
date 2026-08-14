"use client";
import React, { useState } from "react";
import Image from "next/image";

const iconMap: { [key: string]: string } = {
  Home: "home",
  Skills: "stacks",
  Projects: "deployed_code",
  Resume: "account_box",
  Contact: "mail",
};

const CustomNavLink: React.FC<{
  scrollTo: () => void;
  children: React.ReactNode;
}> = ({ scrollTo, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const linkClasses = `transition-all duration-200 outline-none ring-0 focus:outline-none focus:ring-0 ${
    isHovered
      ? "text-foregroundparchment"
      : "text-foregroundlightcyan opacity-30"
  }`;

  const iconName = iconMap[children as string];

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo();
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={linkClasses}
    >
      <span className="relative flex flex-row items-center">
        {isHovered && (
          <span className="absolute -left-3 top-0 hidden md:block">&lt;</span>
        )}
        <span className="material-symbols-outlined block max-sm:h-6 max-sm:w-6">
          {iconName}
        </span>
        <span className={`hidden md:inline`}>{children}</span>
        {isHovered && (
          <span className="absolute -right-6 top-0 hidden md:block">/&gt;</span>
        )}
      </span>
    </a>
  );
};

const NavBar: React.FC<{
  isSticky: boolean;
  refs: {
    homeRef: React.RefObject<HTMLDivElement>;
    skillsRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    resumeRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  };
}> = ({ isSticky, refs }) => {
  const navLinks = [
    { label: "Home", ref: refs.homeRef },
    { label: "Skills", ref: refs.skillsRef },
    { label: "Projects", ref: refs.projectsRef },
    { label: "Resume", ref: refs.resumeRef },
    { label: "Contact", ref: refs.contactRef },
  ];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,600,1,0"
      />
      <div
        className={`mx-auto my-4 flex max-w-4xl items-center justify-between rounded-[50px] border-[1px] outline-none ring-0 transition-all duration-300 focus:outline-none focus:ring-0 ${
          isSticky
            ? "border-[#00FFFF] bg-[#00FFFF] bg-opacity-5 px-5 py-3 backdrop-blur-[5px]"
            : "border-transparent bg-transparent px-4"
        }`}
      >
        {/* Logo – hidden when sticky */}
        {!isSticky && (
          <div className="hidden md:block md:px-4 lg:p-0">
            <div className="relative flex items-center">
              <div className="absolute h-20 w-20 rounded-lg bg-bg backdrop-blur-[30px]"></div>
              <Image
                draggable="false"
                src="/NeonStyles.png"
                alt="Logo"
                width={50}
                height={50}
                className="relative mr-6 h-20 w-20"
              />
            </div>
          </div>
        )}

        {/* Nav links – always centered */}
        <nav
          className={`flex flex-1 items-center justify-center font-sans font-semibold ${
            isSticky ? "" : "md:justify-end"
          }`}
        >
          <div
            className={`flex space-x-4 text-sm md:space-x-8 md:text-xl ${
              isSticky ? "lg:space-x-16" : "lg:space-x-16"
            }`}
          >
            {navLinks.map(({ label, ref }) => (
              <CustomNavLink
                key={label}
                scrollTo={() =>
                  ref.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {label}
              </CustomNavLink>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
