import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero3D } from "@/components/Hero3D";
import { HeraldicDivider } from "@/components/SiteShell";
import { SITE } from "@/lib/site";
import { MENU } from "@/lib/menu";
import { MessageCircle, Star } from "lucide-react";
import tandooriImg from "@/assets/food-tandoori.jpg";
import roastImg from "@/assets/food-roast.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Prince Regent — Traditional British Pub & South Asian Restaurant in Chertsey" },
      { name: "description", content: "A historic Chertsey pub pairing classic British hospitality with authentic South Asian cuisine. Live sports, group bookings and takeaway in Surrey KT16 9AH." },
      { property: "og:title", content: "The Prince Regent — Pub & Restaurant in Chertsey, Surrey" },
      { property: "og:description", content: "Traditional British pub with authentic South Asian cuisine. Live sports, events and group bookings in Chertsey." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const REVIEWS = [
  { name: "Sarah J.", text: "The best Indian food in Chertsey, hands down. Beautiful pub, warm welcome." },
  { name: "Mark T.", text: "Watched the match here with mates — incredible atmosphere and the mixed grill is unreal." },
  { name: "Priya K.", text: "Hosted my birthday for 25 people. The team made it effortless and the food was outstanding." },
];

function HomePage() {
  const picks = MENU.flatMap((c) => c.items.filter((i) => i.tags?.includes("pick"))).slice(0, 6);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden grain-overlay" style={{ minHeight: "92vh" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, var(--crimson-glow), transparent 70%), var(--bg-primary)", zIndex: 0 }} />
        <Hero3D />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 60%, var(--bg-primary))", zIndex: 2 }} />
        <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-24 text-center" style={{ zIndex: 3 }}>
          <p className="eyebrow">Est. 1676 · Chertsey, Surrey</p>
          <h1 className="mt-6 text-glow-gold" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 7vw, 92px)", color: "var(--cream-primary)", lineHeight: 1.05 }}>
            The Prince <span style={{ color: "var(--gold-primary)" }}>Regent</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: 22, color: "var(--cream-secondary)" }}>
            A traditional British pub serving authentic South Asian cuisine — at the heart of Chertsey since centuries past.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gold btn-whatsapp">
              <MessageCircle size={14} /> Book a Table
            </a>
            <Link to="/menu" className="btn-gold">View the Menu</Link>
          </div>
        </div>
      </section>

      <HeraldicDivider />

      {/* WELCOME */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center animate-in">
        <figure className="tilt-card overflow-hidden">
          <img src={tandooriImg} alt="Tandoori chicken tikka platters with mint yogurt at The Prince Regent Chertsey" loading="lazy" className="w-full h-full object-cover" />
        </figure>
        <div>
          <p className="eyebrow">A Royal Welcome</p>
          <h2 className="section-title mt-4">Two great traditions, one historic pub.</h2>
          <p className="mt-5" style={{ color: "var(--cream-secondary)" }}>
            Step inside The Prince Regent and you'll find roaring open fires, polished brass and the unmistakable aroma of freshly ground spices. Our kitchen blends timeless British favourites with the authentic flavours of the Indian subcontinent — slow-cooked curries, tandoori grills, and stone-baked breads — all served alongside a curated selection of cask ales, fine wines and signature cocktails.
          </p>
          <div className="mt-8 flex gap-4">
            <Link to="/menu" className="btn-gold">Our Menu</Link>
            <Link to="/contact" className="btn-gold">Find Us</Link>
          </div>
        </div>
      </section>

      <HeraldicDivider />

      {/* CHEF'S PICKS */}
      <section className="max-w-7xl mx-auto px-6 animate-in">
        <div className="text-center">
          <p className="eyebrow">From Our Kitchen</p>
          <h2 className="section-title mt-4">Chef's Selection</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {picks.map((p) => (
            <article key={p.name} className="tilt-card p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--cream-primary)", letterSpacing: "0.05em" }}>{p.name}</h3>
                <span style={{ fontFamily: "var(--font-display)", color: "var(--gold-primary)", fontSize: 18 }}>{p.price}</span>
              </div>
              {p.desc && <p className="mt-3" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", color: "var(--cream-muted)", fontSize: 15 }}>{p.desc}</p>}
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/menu" className="btn-gold">Explore Full Menu</Link>
        </div>
      </section>

      <HeraldicDivider />

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 animate-in">
        <div className="text-center">
          <p className="eyebrow">Words From Our Guests</p>
          <h2 className="section-title mt-4">A reputation kept warm.</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <blockquote key={r.name} className="tilt-card p-8">
              <div className="flex gap-1 mb-4" style={{ color: "var(--gold-primary)" }}>
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", color: "var(--cream-secondary)", fontSize: 17 }}>"{r.text}"</p>
              <footer className="mt-5" style={{ fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: "0.2em", color: "var(--gold-primary)" }}>— {r.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <HeraldicDivider />

      {/* SUNDAY ROAST FEATURE */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center animate-in">
        <div className="md:order-2">
          <p className="eyebrow">Sunday Tradition</p>
          <h2 className="section-title mt-4">A proper Sunday roast.</h2>
          <p className="mt-5" style={{ color: "var(--cream-secondary)" }}>
            Slow-roasted meats, golden Yorkshires, hand-cut roast potatoes and rich gravy — served by the open fire, the way a Sunday should be.
          </p>
          <Link to="/menu" className="btn-gold mt-7">See What's Cooking</Link>
        </div>
        <figure className="tilt-card overflow-hidden md:order-1">
          <img src={roastImg} alt="Traditional British Sunday roast served by the fire at The Prince Regent Chertsey" loading="lazy" className="w-full h-full object-cover" />
        </figure>
      </section>

      <HeraldicDivider />

      {/* CTA */}
      <section className="relative grain-overlay py-24 text-center" style={{ background: "linear-gradient(135deg, var(--crimson-deep), var(--bg-primary))" }}>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="section-title">Reserve your table tonight.</h2>
          <p className="mt-4" style={{ color: "var(--cream-secondary)" }}>Book directly via WhatsApp — our team will respond within minutes.</p>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gold btn-whatsapp mt-8">
            <MessageCircle size={14} /> Book on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
