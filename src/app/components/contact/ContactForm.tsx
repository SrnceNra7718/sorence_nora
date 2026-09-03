"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Highlight, themes } from "prism-react-renderer";
import { useForm } from "@formspree/react";

type FieldName = "name" | "email" | "subject" | "message";

const wordWrap = (text: string, maxLineLength: number, indent: string) => {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    if ((current + word).trim().length > maxLineLength) {
      if (current) lines.push(current.trimEnd());
      current = `${indent}${word} `;
    } else {
      current += `${word} `;
    }
  }
  if (current) lines.push(current.trimEnd());
  return lines.join("\n");
};

const Contact = () => {
  const [state, handleSubmit] = useForm("xeojdzak");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<{
    name?: boolean;
    email?: boolean;
    message?: boolean;
  }>({});

  const [lastUpdatedField, setLastUpdatedField] = useState<FieldName | null>(
    null,
  );
  const [cursorBlink, setCursorBlink] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setCursorBlink((p) => !p), 450);
    return () => clearInterval(id);
  }, []);

  const cursor = (field: FieldName) =>
    lastUpdatedField === field ? (cursorBlink ? "|" : " ") : "";

  const codeSnippet = `
  import { useState } from "react";

// 📡 initializing interstellar transmission… 🚀🌌
// ✧ craft once, send across the cosmos 🛸✧
const [sender, setSender] = "${name}${cursor("name")}";
const [email, setEmail] = "${email}${cursor("email")}";
const [subject, setSubject] = "${subject}${cursor("subject")}🪐";
const [body, setBody] = \`Hey Sorence ✨

  "${wordWrap(message, 38, "  ")}${cursor("message")}"

  // ⚡ signing off…
  — ${name || "a passing comet"}${cursor("name")} ☄️★
\`;

// 🛸 awaiting warp speed send… ☄️
`;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name: field, value } = e.target;
    setLastUpdatedField(field as FieldName);
    switch (field) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "subject":
        setSubject(value);
        break;
      case "message":
        setMessage(value);
        break;
    }
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    if (name.trim().length < 2) newErrors.name = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      newErrors.email = true;
    if (message.trim().length < 5) newErrors.message = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLastUpdatedField(null);
    if (!validate()) return;
    await handleSubmit({
      name,
      email,
      subject: subject || "(no subject)",
      message,
    } as unknown as React.FormEvent<HTMLFormElement>);
    if (state.succeeded) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  const handlePortalMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  return (
    <section className="section-pad" id="contact">
      <div className="wrap">
        <div className="hr mb-[80px]" />

        <div className="reveal mb-[60px] grid grid-cols-1 items-start gap-[40px] md:grid-cols-[auto_1fr] md:gap-[70px]">
          <div className="flex flex-col">
            <div
              className="eyebrow"
              data-circuit-node="contact"
              style={{ marginBottom: "14px" }}
            >
              <span className="relative flex flex-row items-center gap-[6px]">
                <span className="absolute -left-3 top-0 hidden md:block">
                  &lt;
                </span>
                <span className="material-symbols-outlined block text-[14px]">
                  {"mail"}
                </span>
                <span className="hidden md:inline">{"Contact"}</span>
                <span className="absolute -right-6 top-0 hidden md:block">
                  /&gt;
                </span>
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,6vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-ink-0">
              Have a project
              <br />
              in mind?
              <br />
              Let&apos;s build it.
            </h2>
          </div>

          <div className="flex flex-col gap-[24px] md:pt-[60px]">
            <p className="max-w-[52ch] leading-[1.7] text-ink-1">
              Open to select freelance work and frontend roles. Fastest way to
              reach me is the form — I read every message.
            </p>
            <div className="flex flex-col gap-[10px]">
              <a
                href="mailto:nora.sorence@gmail.com"
                className="inline-flex w-fit items-center gap-[8px] border-b border-transparent font-mono text-[13.5px] text-ink-1 transition-colors hover:border-[rgba(232,163,61,0.4)] hover:text-accent"
              >
                ↗ nora.sorence@gmail.com
              </a>
              <a
                href="https://drive.google.com/file/d/14s3Y6nlgkDAuJWRYq021temUH9k1tD1b/view?usp=sharing"
                target="_blank"
                rel="noopener"
                className="inline-flex w-fit items-center gap-[8px] border-b border-transparent font-mono text-[13.5px] text-ink-1 transition-colors hover:border-[rgba(232,163,61,0.4)] hover:text-accent"
              >
                ↗ View résumé
              </a>
              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-[8px] border-b border-transparent font-mono text-[13.5px] text-accent transition-colors hover:border-[rgba(232,163,61,0.4)]"
              >
                ↗ Use contact form →
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-[40px] lg:grid-cols-2 lg:gap-[70px]">
          <div
            onMouseMove={handlePortalMove}
            className="code-portal reveal reveal-d1 relative order-2 lg:order-1"
          >
            <div className="relative z-10 flex items-center justify-between border-b border-[rgba(232,163,61,0.15)] px-[14px] py-[9px] font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">
              <span className="flex items-center gap-[6px]">
                <span className="h-[8px] w-[8px] rounded-full bg-[#c4634a]" />
                <span className="h-[8px] w-[8px] rounded-full bg-[#e8a33d]" />
                <span className="h-[8px] w-[8px] rounded-full bg-[#7CC29B]" />
              </span>
              <span className="flex items-center gap-[8px]">
                <span className="twinkle">✦</span>
                <span>contact.tsx</span>
                <span className="twinkle twinkle-d2">✧</span>
              </span>
            </div>
            <div className="relative z-10 grid grid-cols-[1fr_auto] items-center gap-[10px] border-b border-[rgba(232,163,61,0.08)] px-[14px] py-[6px] font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-2">
              <span className="truncate">
                <span className="text-accent">~/transmissions</span>
                <span className="text-ink-2"> / </span>
                <span>outbound</span>
                <span className="text-ink-2"> / </span>
                <span className="text-[#7CC29B]">live</span>
              </span>
              <span className="flex items-center gap-[6px] text-accent">
                <span className="twinkle twinkle-d1">⋆</span>
                <span className="twinkle twinkle-d3">⋆</span>
                <span className="twinkle twinkle-d4">⋆</span>
              </span>
            </div>
            <Highlight theme={themes.vsDark} code={codeSnippet} language="tsx">
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={`code-glow ${className} relative z-10 max-h-[460px] overflow-auto px-[16px] py-[14px] font-mono text-[12.5px] leading-[1.7] transition-colors duration-300`}
                  style={{ ...style, background: "transparent" }}
                >
                  {tokens.map((line, i) => {
                    const { key: _lk, ...lineProps } = getLineProps({
                      line,
                    });
                    return (
                      <div key={i} {...lineProps}>
                        <span className="mr-[14px] inline-block w-[28px] select-none text-right text-ink-2">
                          {i + 1}
                        </span>
                        {line.map((token, j) => {
                          const { key: _tk, ...tokenProps } = getTokenProps({
                            token,
                          });
                          return <span key={j} {...tokenProps} />;
                        })}
                      </div>
                    );
                  })}
                </pre>
              )}
            </Highlight>
            <div className="relative z-10 flex items-center justify-between border-t border-[rgba(232,163,61,0.08)] px-[14px] py-[8px] font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-2">
              <span className="flex items-center gap-[8px]">
                <span className="inline-block h-[6px] w-[6px] animate-pulse rounded-full bg-[#7CC29B]" />
                <span>signal locked</span>
              </span>
              <span className="flex items-center gap-[6px]">
                <span>UTF-8</span>
                <span className="text-ink-2">·</span>
                <span>TSX</span>
                <span className="text-ink-2">·</span>
                <span className="text-accent">★ cosmic mode</span>
              </span>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            noValidate
            className="reveal reveal-d2 order-1 lg:order-2"
          >
            <div
              className={`relative mb-[22px] ${errors.name ? "invalid" : ""}`}
            >
              <label
                htmlFor="f-name"
                className="mb-[8px] block font-mono text-[11px] uppercase tracking-[0.07em] text-ink-2"
              >
                Name
              </label>
              <input
                id="f-name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                value={name}
                onChange={handleInputChange}
                onFocus={() => setLastUpdatedField("name")}
                className={`w-full border-b border-none bg-transparent px-[2px] py-[10px] text-[15.5px] transition-colors duration-300 ${errors.name ? "border-danger text-danger" : "border-line-strong focus:border-accent"}`}
              />
              <span
                className={`mt-[6px] block font-mono text-[11px] text-danger ${errors.name ? "" : "hidden"}`}
              >
                Please enter your name.
              </span>
            </div>
            <div
              className={`relative mb-[22px] ${errors.email ? "invalid" : ""}`}
            >
              <label
                htmlFor="f-email"
                className="mb-[8px] block font-mono text-[11px] uppercase tracking-[0.07em] text-ink-2"
              >
                Email
              </label>
              <input
                id="f-email"
                name="email"
                type="email"
                placeholder="you@email.com"
                autoComplete="email"
                value={email}
                onChange={handleInputChange}
                onFocus={() => setLastUpdatedField("email")}
                className={`w-full border-b border-none bg-transparent px-[2px] py-[10px] text-[15.5px] transition-colors duration-300 ${errors.email ? "border-danger text-danger" : "border-line-strong focus:border-accent"}`}
              />
              <span
                className={`mt-[6px] block font-mono text-[11px] text-danger ${errors.email ? "" : "hidden"}`}
              >
                Please enter a valid email.
              </span>
            </div>
            <div className="relative mb-[22px]">
              <label
                htmlFor="f-subject"
                className="mb-[8px] block font-mono text-[11px] uppercase tracking-[0.07em] text-ink-2"
              >
                Subject
              </label>
              <input
                id="f-subject"
                name="subject"
                type="text"
                placeholder="Project, role, idea…"
                value={subject}
                onChange={handleInputChange}
                onFocus={() => setLastUpdatedField("subject")}
                className="w-full border-b border-none border-line-strong bg-transparent px-[2px] py-[10px] text-[15.5px] transition-colors duration-300 focus:border-accent"
              />
            </div>
            <div
              className={`relative mb-[22px] ${errors.message ? "invalid" : ""}`}
            >
              <label
                htmlFor="f-message"
                className="mb-[8px] block font-mono text-[11px] uppercase tracking-[0.07em] text-ink-2"
              >
                Message
              </label>
              <textarea
                id="f-message"
                name="message"
                placeholder="Tell me a bit about the project..."
                value={message}
                onChange={handleInputChange}
                onFocus={() => setLastUpdatedField("message")}
                className={`min-h-[110px] w-full resize-y border-b border-none bg-transparent px-[2px] py-[10px] text-[15.5px] transition-colors duration-300 ${errors.message ? "border-danger text-danger" : "border-line-strong focus:border-accent"}`}
              />
              <span
                className={`mt-[6px] block font-mono text-[11px] text-danger ${errors.message ? "" : "hidden"}`}
              >
                Please add a short message.
              </span>
            </div>
            <div className="mt-[8px] flex items-center gap-[16px]">
              <button
                type="submit"
                disabled={state.submitting}
                className="relative inline-flex items-center gap-[10px] overflow-hidden rounded-[2px] bg-accent px-[24px] py-[15px] font-mono text-[13px] font-medium tracking-[0.02em] text-accent-ink transition-colors duration-300 hover:bg-[#f0b25d] disabled:cursor-not-allowed disabled:opacity-50"
              >
                SEND MESSAGE{" "}
                <span className="inline-block transition-transform duration-300">
                  →
                </span>
              </button>
              <span
                className={`font-mono text-[12.5px] ${state.succeeded ? "text-[#7CC29B]" : "text-ink-1"}`}
              >
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
