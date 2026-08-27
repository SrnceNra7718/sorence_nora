import Reveal from "@/app/components/effects/Reveal";

const Intro = () => {
  return (
    <section className="section-pad pt-0">
      <div className="wrap">
        <div className="hr" />
      </div>
      <div className="wrap pt-[80px]">
        <div className="grid grid-cols-[0.6fr_1fr] items-start gap-[60px]">
          <p className="eyebrow reveal">Approach</p>
          <div>
            <p className="reveal reveal-d1 font-display text-[clamp(1.5rem,3vw,2.2rem)] font-medium leading-[1.35] text-ink-0">
              Frontend development focused on building modern, responsive, and
              purposeful web applications — interfaces that are fast,
              accessible, and easy to maintain.
            </p>
            <br className="reveal reveal-d2" />
            <p className="reveal reveal-d1 font-display text-[clamp(1.5rem,3vw,2.2rem)] font-medium leading-[1.35] text-ink-0">
              Most of my work sits at the intersection of design and
              engineering: turning a screen full of requirements into something
              people can actually use without thinking twice about it. Currently
              building with React, Next.js, TypeScript and Supabase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
