import { createFileRoute } from "@tanstack/react-router";
import { HeraldicDivider } from "@/components/SiteShell";
import { SITE, HOURS } from "@/lib/site";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Find Us — The Prince Regent, Chertsey KT16 9AH" },
      { name: "description", content: "Visit The Prince Regent at 126 Guildford Street, Chertsey, Surrey KT16 9AH. Call 07506 736185 or message us on WhatsApp to book a table." },
      { property: "og:title", content: "Contact The Prince Regent — Chertsey, Surrey" },
      { property: "og:description", content: "Find us in the heart of Chertsey. Opening times, directions, phone and WhatsApp." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="relative grain-overlay" style={{ minHeight: "45vh", background: "linear-gradient(135deg, var(--bg-primary), var(--crimson-deep))" }}>
        <div className="max-w-5xl mx-auto px-6 py-24 text-center relative z-10">
          <p className="eyebrow">Visit · Call · Message</p>
          <h1 className="mt-4 text-glow-gold" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 72px)", color: "var(--cream-primary)" }}>
            Come Find Us in the <span style={{ color: "var(--gold-primary)" }}>Heart of Chertsey</span>
          </h1>
          <p className="mt-5 mx-auto max-w-2xl" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: 19, color: "var(--cream-secondary)" }}>
            We'd love to hear from you. Drop in for a pint, call to book a table, or message us on WhatsApp — we reply within minutes.
          </p>
          <p className="mt-3" style={{ color: "var(--cream-muted)", fontSize: 14 }}>
            NHS Blue Card holders enjoy an exclusive discount — just show your card at the bar.
          </p>
        </div>
      </section>

      <HeraldicDivider />

      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 animate-in">
        <article className="tilt-card p-8 text-center">
          <MapPin size={28} style={{ color: "var(--gold-primary)" }} className="mx-auto" />
          <h3 className="mt-4" style={{ fontFamily: "var(--font-display)", fontSize: 14, letterSpacing: "0.2em", color: "var(--gold-primary)" }}>LOCATION</h3>
          <p className="mt-3" style={{ color: "var(--cream-secondary)" }}>{SITE.address}</p>
          <a href={SITE.maps} target="_blank" rel="noopener noreferrer" className="btn-gold mt-5">Get Directions</a>
        </article>
        <article className="tilt-card p-8 text-center">
          <Phone size={28} style={{ color: "var(--gold-primary)" }} className="mx-auto" />
          <h3 className="mt-4" style={{ fontFamily: "var(--font-display)", fontSize: 14, letterSpacing: "0.2em", color: "var(--gold-primary)" }}>PHONE</h3>
          <p className="mt-3" style={{ color: "var(--cream-secondary)" }}>{SITE.phone}</p>
          <a href={SITE.phoneTel} className="btn-gold mt-5"><Phone size={14} /> Call Us</a>
        </article>
        <article className="tilt-card p-8 text-center">
          <Mail size={28} style={{ color: "var(--gold-primary)" }} className="mx-auto" />
          <h3 className="mt-4" style={{ fontFamily: "var(--font-display)", fontSize: 14, letterSpacing: "0.2em", color: "var(--gold-primary)" }}>EMAIL & WHATSAPP</h3>
          <p className="mt-3" style={{ color: "var(--cream-secondary)" }}>{SITE.email}</p>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gold btn-whatsapp mt-5">
            <MessageCircle size={14} /> WhatsApp
          </a>
        </article>
      </section>

      <HeraldicDivider />

      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start animate-in">
        <div>
          <Clock size={28} style={{ color: "var(--gold-primary)" }} />
          <h2 className="section-title mt-4">Opening Hours</h2>
          <table className="mt-6 w-full" style={{ color: "var(--cream-secondary)", fontSize: 16 }}>
            <tbody>
              {HOURS.map(([d, t]) => (
                <tr key={d} style={{ borderBottom: "1px solid var(--gold-hairline)" }}>
                  <td className="py-3" style={{ fontFamily: "var(--font-display)", color: "var(--cream-primary)", fontSize: 13, letterSpacing: "0.15em" }}>{d.toUpperCase()}</td>
                  <td className="py-3 text-right" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}>{t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="map-frame" style={{ border: "1px solid var(--gold-hairline)", minHeight: 420 }}>
          <iframe
            title="The Prince Regent location map"
            src="https://www.google.com/maps?q=126+Guildford+Street,+Chertsey+KT16+9AH&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <HeraldicDivider />
    </>
  );
}
