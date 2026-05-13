import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MENU } from "@/lib/menu";
import { HeraldicDivider } from "@/components/SiteShell";
import tandooriImg from "@/assets/food-tandoori.jpg";
import { SITE } from "@/lib/site";
import { Flame, Leaf, Crown, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — The Prince Regent | British Pub & Indian Restaurant Chertsey" },
      { name: "description", content: "Explore our full menu: tandoori grills, biryanis, classic curries, burgers, vegetarian and Indo-Chinese dishes — served in Chertsey, Surrey." },
      { property: "og:title", content: "Menu — The Prince Regent, Chertsey" },
      { property: "og:description", content: "British pub classics meet authentic South Asian cuisine. Browse our full à la carte menu." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState(MENU[0].id);
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    MENU.forEach((c) => { const el = document.getElementById(c.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <section className="relative grain-overlay" style={{ minHeight: "50vh", background: "linear-gradient(135deg, var(--crimson-deep), var(--bg-primary))" }}>
        <div className="max-w-5xl mx-auto px-6 py-24 text-center relative z-10">
          <p className="eyebrow">À La Carte</p>
          <h1 className="mt-4 text-glow-gold" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 72px)", color: "var(--cream-primary)" }}>
            Our <span style={{ color: "var(--gold-primary)" }}>Menu</span>
          </h1>
          <p className="mt-5 mx-auto max-w-2xl" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: 19, color: "var(--cream-secondary)" }}>
            British pub classics, hand-crafted curries, tandoori grills and stone-baked breads.
          </p>
        </div>
      </section>

      {/* Sticky tabs */}
      <nav className="sticky top-[76px] z-30 grain-overlay" style={{ background: "rgba(8,4,2,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid var(--gold-hairline)" }}>
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <ul className="flex gap-6 py-4 whitespace-nowrap">
            {MENU.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className="nav-link" data-status={active === c.id ? "active" : undefined}>{c.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        {MENU.map((cat, idx) => (
          <section key={cat.id} id={cat.id} className="animate-in scroll-mt-40">
            <div className="flex items-end justify-between gap-6 border-b pb-4" style={{ borderColor: "var(--gold-hairline)" }}>
              <h2 className="section-title">{cat.title}</h2>
              <span style={{ fontFamily: "var(--font-display)", color: "var(--gold-primary)", fontSize: 12, letterSpacing: "0.25em" }}>0{idx + 1}</span>
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-x-12 gap-y-8">
              {cat.items.map((d) => (
                <article key={d.name} className="tilt-card p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="flex items-center gap-2" style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--cream-primary)", letterSpacing: "0.04em" }}>
                      {d.name}
                      {d.tags?.includes("pick") && <Crown size={12} style={{ color: "var(--gold-primary)" }} />}
                    </h3>
                    <span style={{ fontFamily: "var(--font-display)", color: "var(--gold-primary)" }}>{d.price}</span>
                  </div>
                  {d.desc && <p className="mt-2" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", color: "var(--cream-muted)", fontSize: 15 }}>{d.desc}</p>}
                  {d.tags && (
                    <div className="mt-3 flex gap-2">
                      {d.tags.includes("spicy") && <Flame size={13} style={{ color: "var(--crimson-bright)" }} />}
                      {d.tags.includes("veg") && <Leaf size={13} style={{ color: "#7DB069" }} />}
                    </div>
                  )}
                </article>
              ))}
            </div>
            {idx === 1 && (
              <figure className="mt-12 tilt-card overflow-hidden">
                <img src={tandooriImg} alt="Sizzling tandoori platters from the charcoal grill at The Prince Regent Chertsey" loading="lazy" className="w-full h-auto object-cover" />
              </figure>
            )}
          </section>
        ))}
      </div>

      <HeraldicDivider />

      <section className="text-center pb-20 px-6">
        <h2 className="section-title">Hungry yet?</h2>
        <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gold btn-whatsapp mt-6">
          <MessageCircle size={14} /> Reserve a Table
        </a>
      </section>
    </>
  );
}
