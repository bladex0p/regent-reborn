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
      { name: "description", content: "Historic Chertsey pub since 1995 — classic British food, authentic South Asian cuisine, live Six Nations, Premier League and group bookings in Surrey KT16 9AH." },
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
          <p className="eyebrow">Est. 1995 · Chertsey, Surrey · NHS Blue Card Welcome</p>
          <h1 className="mt-6 text-glow-gold" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 7vw, 92px)", color: "var(--cream-primary)", lineHeight: 1.05 }}>
            The Prince <span style={{ color: "var(--gold-primary)" }}>Regent</span>
          </h1>
          <p className="mt-4" style={{ fontFamily: "var(--font-display)", fontSize: 14, letterSpacing: "0.35em", color: "var(--gold-primary)" }}>
            CHERTSEY'S HISTORIC PUB · KITCHEN · SPORTS LOUNGE
          </p>
          <p className="mt-6 mx-auto max-w-2xl" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: 22, color: "var(--cream-secondary)" }}>
            Roaring fires, classic British plates and authentic South Asian cuisine — paired with cold pints, every match on the big screens, and a warm Chertsey welcome.
          </p>
          <p className="mt-4 mx-auto max-w-xl" style={{ color: "var(--cream-muted)", fontSize: 16 }}>
            Live <strong style={{ color: "var(--gold-primary)" }}>Six Nations</strong> every Saturday from 2pm · Pints of <strong style={{ color: "var(--gold-primary)" }}>Guinness £6</strong> · Group bookings &amp; private hire welcome.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gold btn-whatsapp">
              <MessageCircle size={14} /> Reserve a Table
            </a>
            <Link to="/menu" className="btn-gold">Explore Our Menu</Link>
            <Link to="/sports-events" className="btn-gold">See What's On</Link>
          </div>
          <p className="mt-6" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", color: "var(--cream-muted)", fontSize: 14 }}>
            NHS Blue Card holders enjoy an exclusive discount — just show your card at the bar.
          </p>
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

      {/* MAP */}
      <section className="max-w-7xl mx-auto px-6 animate-in">
        <div className="text-center">
          <p className="eyebrow">Find Us</p>
          <h2 className="section-title mt-4">126 Guildford Street, Chertsey KT16 9AH</h2>
        </div>
        <div className="mt-10 map-frame relative" style={{ border: "1px solid var(--gold-hairline)", borderRadius: 14, overflow: "hidden", minHeight: 460 }}>
          <iframe
            title="The Prince Regent — 126 Guildford Street, Chertsey KT16 9AH"
            src="https://www.google.com/maps?q=126+Guildford+Street,+Chertsey+KT16+9AH&z=16&output=embed"
            width="100%"
            height="460"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ display: "block" }}
          />
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href={SITE.maps} target="_blank" rel="noopener noreferrer" className="btn-gold">Open in Google Maps</a>
          <a href={SITE.phoneTel} className="btn-gold">Call {SITE.phone}</a>
        </div>
      </section>

      <HeraldicDivider />

      {/* HISTORY / SEO STORY */}
      <section className="max-w-5xl mx-auto px-6 animate-in">
        <div className="text-center">
          <p className="eyebrow">Our Story · Since 1995</p>
          <h2 className="section-title mt-4">Three decades of Chertsey hospitality.</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-10" style={{ color: "var(--cream-secondary)", fontSize: 17 }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--gold-primary)", letterSpacing: "0.15em" }}>THE STORY OF THE PRINCE REGENT</h3>
            <p className="mt-4">Standing proudly on Guildford Street since 1995, The Prince Regent has spent three decades earning its place as one of the best loved pubs in Chertsey, Surrey. What began as a traditional British local has grown into a destination venue — a kitchen, a sports lounge and a community gathering point under one historic roof.</p>
            <p className="mt-4">The fires still roar, the brass still gleams, and the welcome remains the same: warm, unfussy and genuinely Chertsey.</p>
          </div>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--gold-primary)", letterSpacing: "0.15em" }}>CHERTSEY'S FAVOURITE LOCAL</h3>
            <p className="mt-4">A short stroll from Chertsey town centre and an easy drive from Weybridge, Addlestone, Virginia Water, Runnymede and Woking. Locals come for the Sunday roast; visitors come for live sport, the Indian kitchen and a proper pint.</p>
            <p className="mt-4">Whatever brings you in, you leave a regular.</p>
          </div>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--gold-primary)", letterSpacing: "0.15em" }}>A PUB WITH HERITAGE</h3>
            <p className="mt-4">A heritage pub in the truest British sense — wooden beams, polished bar, real ales pulled the proper way, and a kitchen that respects its craft. We pair classic British plates with authentic South Asian cuisine because Chertsey deserves both done well.</p>
          </div>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--gold-primary)", letterSpacing: "0.15em" }}>MORE THAN A PUB</h3>
            <p className="mt-4">Live Premier League, Six Nations rugby, F1 and championship boxing on HD screens. Group dining and private hire for birthdays, corporate evenings and celebrations. NHS Blue Card discounts at the bar. There's a reason people travel from across Surrey to find us.</p>
          </div>
        </div>
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
