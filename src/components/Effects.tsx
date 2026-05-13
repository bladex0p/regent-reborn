import { useEffect } from "react";

// Scroll-reveal: starts hidden, fades in on first paint AND on intersection.
// Fail-safe: if IntersectionObserver isn't supported, everything is visible.
export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.classList.add("js-ready");
    const els = document.querySelectorAll<HTMLElement>(".animate-in");
    const reveal = (el: Element) => el.classList.add("is-visible");
    if (!("IntersectionObserver" in window)) {
      els.forEach(reveal);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (reveal(e.target), io.unobserve(e.target))),
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
    );
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) reveal(el);
      else io.observe(el);
    });
    const t = window.setTimeout(() => els.forEach(reveal), 1200);
    return () => { io.disconnect(); window.clearTimeout(t); };
  }, []);
  return null;
}

// Tilt only — no Lenis (was hijacking scroll), no custom cursor (UX issue)
export function ClientFx() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    let cleanup: Array<() => void> = [];
    (async () => {
      try {
        const VT = (await import("vanilla-tilt")).default;
        const cards = document.querySelectorAll<HTMLElement>(".tilt-card");
        VT.init(Array.from(cards), { max: 6, speed: 400, glare: true, "max-glare": 0.12, scale: 1.01 } as any);
        cleanup.push(() => cards.forEach((c: any) => c.vanillaTilt && c.vanillaTilt.destroy()));
      } catch {}
    })();
    return () => cleanup.forEach((fn) => fn());
  }, []);
  return null;
}
