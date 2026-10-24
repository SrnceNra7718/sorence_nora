export function initHome(): () => void {
  const $ = (s: string, c: Document | Element = document) => c.querySelector(s) as HTMLElement | null;
  const $$ = (s: string, c: Document | Element = document) => Array.from(c.querySelectorAll(s)) as HTMLElement[];
  const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canHover = matchMedia("(hover: hover) and (pointer: fine)").matches;

  const ac = new AbortController();
  const signal = ac.signal;

  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear().toString();

  /* Header and mobile menu */
  const header = $(".site-header");
  const menuBtn = $("#menuBtn");
  const nav = $("#nav");
  if (menuBtn && nav) {
    const setMenu = (open: boolean) => {
      nav.classList.toggle("open", open);
      menuBtn.setAttribute("aria-expanded", String(open));
    };
    menuBtn.addEventListener("click", () => setMenu(!nav.classList.contains("open")), { signal });
    $$("#nav a").forEach((a) => a.addEventListener("click", () => setMenu(false), { signal }));
    document.addEventListener("keydown", (e: KeyboardEvent) => { if (e.key === "Escape") setMenu(false); }, { signal });
    window.addEventListener("resize", () => { if (window.innerWidth > 820) setMenu(false); }, { signal });
  }

  /* Hero 3D stack */
  const hero = $(".hero") as HTMLElement | null;
  const scene = $("#scene") as HTMLElement | null;
  const stack = $("#stack-visual") as HTMLElement | null;
  const layers = $$(".layer");
  const items = $$(".legend-item");
  const spreadBtn = $("#spreadBtn") as HTMLButtonElement | null;

  if (hero && scene && stack && spreadBtn) {
    const fit = () => {
      const k = clamp(scene.clientWidth / 540, 0.45, 1.15);
      stack.style.setProperty("--k", k.toFixed(3));
    };
    const ro = new ResizeObserver(fit);
    ro.observe(scene);
    window.addEventListener("resize", fit, { signal });
    fit();

    let tx = 0, tz = 0, nx = 0, ny = 0, pointerOn = false, heroVisible = true;

    const onMove = (e: PointerEvent) => {
      const r = scene.getBoundingClientRect();
      nx = clamp((e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2), -1, 1);
      ny = clamp((e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2), -1, 1);
      pointerOn = true;
    };
    hero.addEventListener("pointermove", onMove, { signal });
    const release = () => { pointerOn = false; };
    hero.addEventListener("pointerleave", release, { signal });
    hero.addEventListener("pointercancel", release, { signal });
    hero.addEventListener("pointerup", (e: PointerEvent) => { if (e.pointerType !== "mouse") release(); }, { signal });

    const io = new IntersectionObserver(([en]) => { heroVisible = en.isIntersecting; }, { threshold: 0.05 });
    io.observe(hero);

    let raf = 0;
    const frame = (t: number) => {
      if (heroVisible) {
        const sway = reduce ? 0 : 1;
        const targetZ = pointerOn ? nx * 18 : Math.sin(t / 2300) * 7 * sway;
        const targetX = pointerOn ? ny * -9 : Math.cos(t / 2700) * 3 * sway;
        tz += (targetZ - tz) * 0.07;
        tx += (targetX - tx) * 0.07;
        stack.style.setProperty("--tz", tz.toFixed(2) + "deg");
        stack.style.setProperty("--tx", tx.toFixed(2) + "deg");
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    const order = [0, 1, 2, 3];
    const render = () => {
      layers.forEach((l) => {
        const idx = order.indexOf(Number(l.dataset.layer));
        l.style.setProperty("--i", String(idx));
        l.classList.toggle("is-top", idx === order.length - 1);
      });
    };
    const setActive = (i: number, bringToTop = false) => {
      if (bringToTop && order[order.length - 1] !== i) {
        order.splice(order.indexOf(i), 1);
        order.push(i);
        render();
      }
      layers.forEach((l) => l.classList.toggle("active", Number(l.dataset.layer) === i));
      items.forEach((b) => {
        const on = Number(b.dataset.layer) === i;
        b.classList.toggle("on", on);
        b.setAttribute("aria-pressed", String(on));
      });
    };
    items.forEach((b) => {
      const i = Number(b.dataset.layer);
      b.addEventListener("click", () => setActive(i, true), { signal });
      b.addEventListener("pointerenter", () => { if (canHover) setActive(i); }, { signal });
      b.addEventListener("focus", () => setActive(i), { signal });
    });
    layers.forEach((l) => l.addEventListener("click", () => setActive(Number(l.dataset.layer), true), { signal }));
    render();
    setActive(3);

    const setSpread = (on: boolean) => {
      scene.classList.toggle("spread", on);
      spreadBtn.setAttribute("aria-pressed", String(on));
      spreadBtn.textContent = on ? "Stack the layers" : "Spread the layers";
    };
    spreadBtn.addEventListener("click", () => setSpread(!scene.classList.contains("spread")), { signal });
    let userToggled = false;
    spreadBtn.addEventListener("click", () => { userToggled = true; }, { signal });
    let spreadTimer: number | undefined;
    if (!reduce) spreadTimer = window.setTimeout(() => { if (!userToggled) setSpread(true); }, 1700);
    else setSpread(true);

    (window as any).__homeCleanupHero = () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      if (spreadTimer) clearTimeout(spreadTimer);
    };
  }

  /* Tilt cards */
  if (canHover && !reduce) {
    const els = $$("[data-tilt]");
    els.forEach((el) => {
      const max = el.classList.contains("chipset") ? 5 : 8;
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        el.classList.add("moving");
        el.style.setProperty("--ry", ((px - 0.5) * 2 * max).toFixed(2) + "deg");
        el.style.setProperty("--rx", ((0.5 - py) * 2 * max).toFixed(2) + "deg");
        el.style.setProperty("--gx", (px * 100).toFixed(1) + "%");
        el.style.setProperty("--gy", (py * 100).toFixed(1) + "%");
      };
      const onLeave = () => {
        el.classList.remove("moving");
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
      };
      el.addEventListener("pointermove", onMove, { signal });
      el.addEventListener("pointerleave", onLeave, { signal });
    });
  }

  /* Process progress */
  const steps = $("#steps") as HTMLElement | null;
  if (steps) {
    const stepItems = $$("li", steps);
    const onScroll = () => {
      const r = steps.getBoundingClientRect();
      const line = window.innerHeight * 0.6;
      const p = clamp((line - r.top) / r.height, 0, 1);
      steps.style.setProperty("--p", p.toFixed(3));
      stepItems.forEach((li) => li.classList.toggle("reached", li.getBoundingClientRect().top < line));
    };
    let ticking = false;
    const handler = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { onScroll(); ticking = false; });
    };
    window.addEventListener("scroll", handler, { passive: true, signal });
    window.addEventListener("resize", onScroll, { signal });
    onScroll();
  }

  /* Compare */
  const compare = $("#compare") as HTMLElement | null;
  const range = $("#compareRange") as HTMLInputElement | null;
  if (compare && range) {
    const setPos = () => compare.style.setProperty("--pos", range.value + "%");
    let userDragged = false;
    range.addEventListener("input", () => { userDragged = true; setPos(); }, { signal });
    setPos();
    if (!reduce && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(([en]) => {
        if (!en.isIntersecting) return;
        io.disconnect();
        const start = performance.now(), dur = 2600;
        const step = (now: number) => {
          if (userDragged) return;
          const t = clamp((now - start) / dur, 0, 1);
          const eased = 0.5 - 0.5 * Math.cos(t * Math.PI * 2);
          range.value = String(8 + eased * 84);
          setPos();
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }, { threshold: 0.6 });
      io.observe(compare);
    }
  }

  /* Contact form */
  const form = $("#contactForm") as HTMLFormElement | null;
  if (form) {
    const EMAIL = "nora.sorence@gmail.com";
    form.addEventListener("submit", (e: Event) => {
      e.preventDefault();
      let ok = true;
      $$("label", form).forEach((label) => {
        const field = $("input, textarea", label) as HTMLInputElement | HTMLTextAreaElement | null;
        if (!field) return;
        const valid = field.type === "email"
          ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim())
          : field.value.trim().length > 0;
        label.classList.toggle("invalid", !valid);
        if (!valid && ok) { field.focus(); }
        if (!valid) ok = false;
      });
      if (!ok) return;
      const data = new FormData(form);
      const subject = `Project enquiry from ${String(data.get("name")).trim()}`;
      const body = `${String(data.get("message")).trim()}\n\nName: ${String(data.get("name")).trim()}\nEmail: ${String(data.get("email")).trim()}`;
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }, { signal });
    $$("input, textarea", form).forEach((f) => f.addEventListener("input", () => f.closest("label")?.classList.remove("invalid"), { signal }));
  }

  return () => {
    ac.abort();
    (window as any).__homeCleanupHero?.();
  };
}
