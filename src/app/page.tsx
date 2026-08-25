import CustomCursor from "@/app/components/effects/CustomCursor";
import CircuitTrace from "@/app/components/effects/CircuitTrace";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Hero from "@/app/sections/Hero";
import Intro from "@/app/sections/Intro";
import Stack from "@/app/sections/Stack";
import Work from "@/app/sections/Work";
import About from "@/app/sections/About";
import Contact from "@/app/sections/Contact";

export default function Home() {
  return (
    <>
      <main id="top" className="relative">
        <div className="bg-grid" aria-hidden="true" />
        <div className="bg-glow" aria-hidden="true" />
        <div className="ruler-v hidden md:flex" aria-hidden="true">
          <span>0000 — 0100</span>
          <span>0100 — 0200</span>
        </div>
        <CustomCursor />
        <CircuitTrace />
        <Navbar />
        <Hero />
        <Intro />
        <Stack />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
