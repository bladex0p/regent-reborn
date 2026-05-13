import { createFileRoute, Link } from "@tanstack/react-router";
import { HeraldicDivider, FoodPlaceholder } from "@/components/SiteShell";
import { SITE } from "@/lib/site";
import { MessageCircle, Phone, Clock, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/takeaway")({
  head: () => ({
    meta: [
      { title: "Takeaway — The Prince Regent | Indian Takeaway Chertsey, Surrey" },
      { name: "description", content: "Order our authentic Indian and British takeaway in Chertsey. Call or WhatsApp to collect your favourite curries, grills and burgers from KT16 9AH." },
      { property: "og:title", content: "Takeaway — The Prince Regent, Chertsey" },
      { property: "og:description", content: "Indian and British takeaway from Chertsey's beloved historic pub. Order via WhatsApp for collection." },
      { property: "og:url", content: "/takeaway" },
    ],
    links: [{ rel: "canonical", href: "/takeaway" }],
  }),
  component: TakeawayPage,
});

function TakeawayPage() {
  return (
    <>
      <section className="relative grain-overlay" style={{ minHeight: "60vh", background: "linear-gradient(135deg, var(--bg-primary), var(--crimson-deep))" }}>
        <div className="max-w-5xl mx-auto px-6 py-24 text-center relative z-10">
          <p className="eyebrow">Collection · Chertsey KT16 9AH</p>
          <h1 className="mt-4 text-glow-gold" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 72px)", color: "var(--cream-primary)" }}>
            Takeaway <span style={{ color: "var(--gold-primary)" }}>& Collection</span>
          </h1>
          <p className="mt-5 mx-auto max-w-2xl" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: 19, color: "var(--cream-secondary)" }}>
            All your Prince Regent favourites — freshly prepared, ready to collect.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gold btn-whatsapp">
              <MessageCircle size={14} /> Order on WhatsApp
            </a>
            <a href={SITE.phoneTel} className="btn-gold"><Phone size={14} /> Call {SITE.phone}</a>
          </div>
        </div>
      </section>

      <HeraldicDivider />

      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 animate-in">
        {[
          { icon: ShoppingBag, title: "1. Choose Your Order", text: "Browse the full menu and pick your favourites." },
          { icon: MessageCircle, title: "2. Send via WhatsApp", text: "Message us your order — we'll confirm a collection time." },
          { icon: Clock, title: "3. Collect & Enjoy", text: "Pop in to KT16 9AH at your scheduled time. Hot, fresh, ready." },
        ].map(({ icon: Icon, title, text }) => (
          <article key={title} className="tilt-card p-8 text-center">
            <Icon size={32} style={{ color: "var(--gold-primary)" }} className="mx-auto" />
            <h3 className="mt-4" style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--cream-primary)", letterSpacing: "0.08em" }}>{title}</h3>
            <p className="mt-3" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", color: "var(--cream-secondary)", fontSize: 16 }}>{text}</p>
          </article>
        ))}
      </section>

      <HeraldicDivider />

      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center animate-in">
        <div>
          <p className="eyebrow">Collection Only</p>
          <h2 className="section-title mt-4">Freshly cooked, just for you.</h2>
          <p className="mt-5" style={{ color: "var(--cream-secondary)" }}>
            We don't cut corners on takeaway. Every dish is prepared to the same standard as our restaurant — biryanis layered fresh, breads stone-baked to order, grills fired on charcoal.
          </p>
          <ul className="mt-6 space-y-2" style={{ color: "var(--cream-secondary)" }}>
            <li>◆ Hot food ready in 20–30 minutes</li>
            <li>◆ Cash and card accepted on collection</li>
            <li>◆ Family-size portions available — just ask</li>
          </ul>
          <Link to="/menu" className="btn-gold mt-8">View Full Menu</Link>
        </div>
        <FoodPlaceholder n={3} caption="Curries, grills & breads — packed for collection" />
      </section>

      <HeraldicDivider />

      <section className="text-center pb-20 px-6">
        <h2 className="section-title">Place your order</h2>
        <p className="mt-4" style={{ color: "var(--cream-secondary)" }}>The fastest way to order — message our team directly.</p>
        <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gold btn-whatsapp mt-6">
          <MessageCircle size={14} /> Order on WhatsApp
        </a>
      </section>
    </>
  );
}
