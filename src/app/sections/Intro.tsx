import Reveal from "@/app/components/effects/Reveal";

const Intro = () => {
  return (
    <section className="section-pad pt-0">
      <div className="wrap">
        <div className="hr" />
      </div>
      <div className="wrap pt-[80px]">
        <div className="grid grid-cols-[0.6fr_1fr] gap-[60px] items-start">
          <p className="eyebrow reveal">Approach</p>
          <div>
            <p className="font-display font-medium text-[clamp(1.5rem,3vw,2.2rem)] leading-[1.35] text-ink-0 reveal reveal-d1">
              Frontend development focused on building modern, responsive, and purposeful web applications — interfaces that are fast, accessible, and easy to maintain.
            </p>
            <p className="text-ink-1 text-[1rem] leading-[1.75] max-w-[52ch] mt-[18px] reveal reveal-d2">
              Most of my work sits at the intersection of design and engineering: turning a screen full of requirements into something people can actually use without thinking twice about it. Currently building with React, Next.js, TypeScript and Supabase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
