import { useEffect } from "react";

// Lightweight scroll-reveal using IntersectionObserver (replaces heavy GSAP for ship-readiness)
export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = document.querySelectorAll(".animate-in");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

// Tilt + smooth scroll + cursor — all dynamically imported, client-only
export function ClientFx() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    let cleanup: Array<() => void> = [];

    // Smooth scroll
    (async () => {
      try {
        const Lenis = (await import("@studio-freight/lenis")).default;
        const lenis = new Lenis({ duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        let rafId = 0;
        const raf = (time: number) => { lenis.raf(time); rafId = requestAnimationFrame(raf); };
        rafId = requestAnimationFrame(raf);
        cleanup.push(() => { cancelAnimationFrame(rafId); lenis.destroy(); });
      } catch {}
    })();

    // Vanilla Tilt
    (async () => {
      try {
        const VT = (await import("vanilla-tilt")).default;
        const cards = document.querySelectorAll<HTMLElement>(".tilt-card");
        VT.init(Array.from(cards), { max: 8, speed: 400, glare: true, "max-glare": 0.18, scale: 1.02 } as any);
        cleanup.push(() => cards.forEach((c: any) => c.vanillaTilt && c.vanillaTilt.destroy()));
      } catch {}
    })();

    // Custom cursor (desktop only)
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      document.body.classList.add("has-custom-cursor");
      const dot = document.createElement("div"); dot.className = "cursor-dot";
      const ring = document.createElement("div"); ring.className = "cursor-ring";
      document.body.append(dot, ring);
      let mx = 0, my = 0, rx = 0, ry = 0;
      const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`; };
      const tick = () => { rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18; ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`; raf = requestAnimationFrame(tick); };
      let raf = requestAnimationFrame(tick);
      const onOver = (e: Event) => {
        const t = e.target as HTMLElement;
        if (t.closest("a,button,[role=button],.tilt-card")) document.body.classList.add("cursor-hover");
        else document.body.classList.remove("cursor-hover");
      };
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseover", onOver);
      cleanup.push(() => {
        cancelAnimationFrame(raf);
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseover", onOver);
        dot.remove(); ring.remove();
        document.body.classList.remove("has-custom-cursor", "cursor-hover");
      });
    }

    return () => cleanup.forEach((fn) => fn());
  }, []);
  return null;
}
