import CustomCursor from "@/app/components/effects/CustomCursor";
import ScrollReveal from "@/app/components/effects/ScrollReveal";
import CircuitTrace from "@/app/components/effects/CircuitTrace";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Hero from "@/app/sections/Hero";
import Intro from "@/app/sections/Intro";
import Stack from "@/app/sections/Stack";
import Work from "@/app/sections/Work";
import About from "@/app/sections/About";
import Blog from "@/app/sections/Blog";
import Contact from "@/app/sections/Contact";
import JsonLd from "@/app/components/SEO/JsonLd";
import {
  personJsonLd,
  websiteJsonLd,
  profilePageJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          personJsonLd(),
          websiteJsonLd(),
          profilePageJsonLd(),
          faqJsonLd([
            {
              question: "Who is Sorence Nora?",
              answer:
                "Sorence Nora is a frontend web developer based in the Philippines, specializing in building modern, responsive web applications with React, Next.js, and TypeScript.",
            },
            {
              question: "What does Sorence Nora specialize in?",
              answer:
                "Sorence specializes in frontend web development with React, Next.js, TypeScript, and Tailwind CSS, building responsive web applications from concept to production-ready code.",
            },
            {
              question: "What technologies does Sorence Nora use?",
              answer:
                "Sorence builds with HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Supabase, and PostgreSQL.",
            },
            {
              question: "Where is Sorence Nora based?",
              answer: "Sorence Nora is based in the Philippines.",
            },
            {
              question: "What projects has Sorence Nora built?",
              answer:
                "Sorence built the Student Clearance Monitor, a real-time web application that digitizes student clearance workflows across departments at STI College, San Jose del Monte.",
            },
            {
              question: "Is Sorence Nora a frontend developer?",
              answer:
                "Yes, Sorence Nora is a frontend web developer with experience in full-stack development using Next.js and Supabase.",
            },
            {
              question: "What is the Student Clearance Monitor project?",
              answer:
                "The Student Clearance Monitor is a web application Sorence built during OJT at STI College. It manages and monitors student clearance status across admin, cashier, program head, and registrar departments in real time.",
            },
          ]),
          breadcrumbJsonLd([{ label: "Home", href: "/" }]),
        ]}
      />

      <main id="top" className="circuit-main">
        <div className="bg-grid" aria-hidden="true" />
        <div className="bg-glow" aria-hidden="true" />
        <div className="ruler-v circuit-ruler" aria-hidden="true">
          <span>0000 — 0100</span>
          <span>0100 — 0200</span>
        </div>
        <CustomCursor />
        <ScrollReveal />
        <CircuitTrace />
        <Navbar />
        <Hero />
        <Intro />
        <Stack />
        <Work />
        <About />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
