"use client";

import React, { useRef, useState } from "react";
import Background from "./components/Background";
import HeroSection from "./containers/hero/HeroSection";
import SkillSection from "./containers/skills/SkillSection";
import ProjectsSection from "./containers/projects/ProjectsSection";
import ResumeSection from "./containers/resume/ResumeSection";
import ContactSection from "./containers/contact/ContactSection";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const scrollTop = e.currentTarget.scrollTop;

    // Change navbar immediately when scrolling starts
    setIsScrolledPastHero(scrollTop > 0);
  };

  const refs = {
    homeRef,
    skillsRef,
    projectsRef,
    resumeRef,
    contactRef,
  };

  return (
    <main
      draggable="false"
      onScroll={handleScroll}
      className="relative z-10 h-screen w-full items-center justify-center overflow-y-auto overflow-x-hidden text-center font-sans text-foregroundparchment"
      style={{ userSelect: "none" }}
    >
      {/* Navbar changes immediately when scrolling starts */}
      <div className="sticky top-0 z-20">
        <NavBar isSticky={isScrolledPastHero} refs={refs} />
      </div>

      {/* Hero */}
      <div ref={homeRef}>
        <HeroSection />
      </div>

      {/* Skills */}
      <div ref={skillsRef}>
        <SkillSection />
      </div>

      {/* Projects */}
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>

      {/* Resume */}
      <div ref={resumeRef}>
        <ResumeSection />
      </div>

      {/* Contact */}
      <div ref={contactRef}>
        <ContactSection />
      </div>

      <Footer />
      <Background />
    </main>
  );
}
