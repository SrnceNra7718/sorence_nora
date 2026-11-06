"use client";

import { useEffect, useSyncExternalStore } from "react";

const THEME_CHANGE_EVENT = "theme-change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(THEME_CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_CHANGE_EVENT, callback);
  };
}

function getTheme() {
  return localStorage.getItem("theme") === "light" ? "light" : "dark";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-line-strong text-ink-1 transition hover:text-accent"
    >
      <span className="material-symbols-outlined text-[18px]">
        {theme === "dark" ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}
