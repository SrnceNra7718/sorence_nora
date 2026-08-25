"use client";

import React, { useState, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Reveal from "@/app/components/effects/Reveal";
import SectionEyebrow from "@/app/components/ui/SectionEyebrow";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeojdzak");
  const [errors, setErrors] = useState<{ name?: boolean; email?: boolean; message?: boolean }>({});

  const validate = () => {
    const name = (document.getElementById("f-name") as HTMLInputElement)?.value.trim() || "";
    const email = (document.getElementById("f-email") as HTMLInputElement)?.value.trim() || "";
    const message = (document.getElementById("f-message") as HTMLTextAreaElement)?.value.trim() || "";
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const newErrors: typeof errors = {};
    if (name.length < 2) newErrors.name = true;
    if (!emailOk) newErrors.email = true;
    if (message.length < 5) newErrors.message = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    await handleSubmit(e);
  };

  return (
    <section className="section-pad" id="contact" data-circuit-node="contact">
      <div className="wrap">
        <div className="hr mb-[80px]" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[70px] items-start">
          <div className="reveal">
            <SectionEyebrow className="mb-[18px]" data-circuit-node="contact">
              04 / Contact
            </SectionEyebrow>
            <h2 className="font-display font-semibold text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.02] tracking-[-0.01em] text-ink-0">
              Have a project<br />in mind?<br />Let&apos;s build it.
            </h2>
            <p className="mt-[22px] text-ink-1 max-w-[38ch] leading-[1.7]">
              Open to select freelance work and frontend roles. Fastest way to reach me is the form — I read every message.
            </p>
            <div className="mt-[38px] flex flex-col gap-[10px]">
              <a
                href="mailto:nora.sorence@gmail.com"
                className="font-mono text-[13.5px] text-ink-1 inline-flex items-center gap-[8px] border-b border-transparent w-fit hover:text-accent hover:border-[rgba(232,163,61,0.4)] transition-colors"
              >
                ↗ nora.sorence@gmail.com
              </a>
              <a
                href="https://drive.google.com/file/d/1_2AFU6mu0gYI23akwfE4JxWfK6lw1ITj/view?usp=sharing"
                target="_blank"
                rel="noopener"
                className="font-mono text-[13.5px] text-ink-1 inline-flex items-center gap-[8px] border-b border-transparent w-fit hover:text-accent hover:border-[rgba(232,163,61,0.4)] transition-colors"
              >
                ↗ View résumé
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="reveal reveal-d1"
            noValidate
          >
            <div className={`relative mb-[26px] ${errors.name ? "invalid" : ""}`}>
              <label htmlFor="f-name" className="block font-mono text-[11px] tracking-[0.07em] text-ink-2 uppercase mb-[8px]">
                Name
              </label>
              <input
                id="f-name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                className={`w-full bg-transparent border-none border-b px-[2px] py-[10px] text-[15.5px] transition-colors duration-300 ${errors.name ? "border-danger text-danger" : "border-line-strong focus:border-accent"}`}
              />
              <span className={`font-mono text-[11px] text-danger mt-[6px] ${errors.name ? "block" : "hidden"}`}>
                Please enter your name.
              </span>
            </div>
            <div className={`relative mb-[26px] ${errors.email ? "invalid" : ""}`}>
              <label htmlFor="f-email" className="block font-mono text-[11px] tracking-[0.07em] text-ink-2 uppercase mb-[8px]">
                Email
              </label>
              <input
                id="f-email"
                name="email"
                type="email"
                placeholder="you@email.com"
                autoComplete="email"
                className={`w-full bg-transparent border-none border-b px-[2px] py-[10px] text-[15.5px] transition-colors duration-300 ${errors.email ? "border-danger text-danger" : "border-line-strong focus:border-accent"}`}
              />
              <span className={`font-mono text-[11px] text-danger mt-[6px] ${errors.email ? "block" : "hidden"}`}>
                Please enter a valid email.
              </span>
            </div>
            <div className={`relative mb-[26px] ${errors.message ? "invalid" : ""}`}>
              <label htmlFor="f-message" className="block font-mono text-[11px] tracking-[0.07em] text-ink-2 uppercase mb-[8px]">
                Message
              </label>
              <textarea
                id="f-message"
                name="message"
                placeholder="Tell me a bit about the project..."
                className={`w-full bg-transparent border-none border-b px-[2px] py-[10px] text-[15.5px] transition-colors duration-300 resize-y min-h-[100px] ${errors.message ? "border-danger text-danger" : "border-line-strong focus:border-accent"}`}
              />
              <span className={`font-mono text-[11px] text-danger mt-[6px] ${errors.message ? "block" : "hidden"}`}>
                Please add a short message.
              </span>
            </div>
            <div className="mt-[8px] flex items-center gap-[16px]">
              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex items-center gap-[10px] font-mono text-[13px] tracking-[0.02em] px-[24px] py-[15px] rounded-[2px] bg-accent text-accent-ink font-medium relative overflow-hidden transition-colors duration-300 hover:bg-[#f0b25d] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                SEND MESSAGE <span className="transition-transform duration-300 inline-block">→</span>
              </button>
              <span className={`font-mono text-[12.5px] ${state.succeeded ? "text-[#7CC29B]" : "text-ink-1"}`}>
                {state.submitting
                  ? "SENDING..."
                  : state.succeeded
                  ? "MESSAGE SENT ✓"
                  : ""}
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
