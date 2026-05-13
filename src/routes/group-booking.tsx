import { createFileRoute } from "@tanstack/react-router";
import { useState, FormEvent } from "react";
import { HeraldicDivider } from "@/components/SiteShell";
import { SITE } from "@/lib/site";
import { CheckCircle2, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/group-booking")({
  head: () => ({
    meta: [
      { title: "Group & Tour Bookings — The Prince Regent Chertsey" },
      { name: "description", content: "Host birthdays, corporate outings and private parties at The Prince Regent. Bespoke menus, private dining for up to 50 guests in Chertsey, Surrey." },
      { property: "og:title", content: "Group & Tour Bookings — The Prince Regent" },
      { property: "og:description", content: "Private hire, group dining and bespoke event packages in Chertsey." },
      { property: "og:url", content: "/group-booking" },
    ],
    links: [{ rel: "canonical", href: "/group-booking" }],
  }),
  component: GroupPage,
});

const FEATURES = [
  "Birthday parties, anniversaries & milestone celebrations",
  "Corporate lunches, team dinners & Christmas parties",
  "Sports watch parties — derby days, finals, Six Nations weekends",
  "Hen & stag gatherings, farewells, family reunions",
  "Bespoke set menus and drinks packages tailored to your group",
  "Reserved areas and semi-private spaces for groups up to 50",
  "Group bar tabs and dedicated event coordination",
  "NHS Blue Card holders — discount applies to group bookings",
];

function GroupPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const lines = [
      `*New Group Booking Enquiry*`,
      ``,
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Event type: ${get("eventType")}`,
      `Date: ${get("date")}`,
      `Time: ${get("time")}`,
      `Guests: ${get("guests")}`,
      `Budget: ${get("budget") || "—"}`,
      ``,
      `Notes:`,
      get("notes") || "—",
    ].join("\n");
    const url = `https://wa.me/447506736185?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <>
      <section className="relative grain-overlay" style={{ minHeight: "55vh", background: "linear-gradient(135deg, var(--crimson-deep), var(--bg-primary))" }}>
        <div className="max-w-5xl mx-auto px-6 py-24 text-center relative z-10">
          <p className="eyebrow">Groups · Tours · Private Hire</p>
          <h1 className="mt-4 text-glow-gold" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 72px)", color: "var(--cream-primary)" }}>
            Host Your <span style={{ color: "var(--gold-primary)" }}>Celebration</span> Here
          </h1>
          <p className="mt-5 mx-auto max-w-2xl" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: 19, color: "var(--cream-secondary)" }}>
            Birthdays, corporate evenings, group tours and private parties — bespoke experiences, expertly hosted.
          </p>
        </div>
      </section>

      <HeraldicDivider />

      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start animate-in">
        <div>
          <p className="eyebrow">What We Offer</p>
          <h2 className="section-title mt-4">Tailored, every time.</h2>
          <p className="mt-5" style={{ color: "var(--cream-secondary)" }}>
            Planning a birthday, corporate outing, group tour or private party? We love hosting groups of all sizes. Our team will craft a bespoke experience around your guests, your menu, and your budget.
          </p>
          <ul className="mt-8 space-y-3">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3" style={{ color: "var(--cream-primary)", fontSize: 16 }}>
                <CheckCircle2 size={20} style={{ color: "var(--gold-primary)", flexShrink: 0, marginTop: 2 }} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="tilt-card p-8" style={{ background: "var(--bg-card)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--gold-primary)", letterSpacing: "0.08em" }}>Enquire Now</h3>
          <p className="mt-2 mb-6" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", color: "var(--cream-muted)", fontSize: 15 }}>
            Tell us about your event — we'll reply via WhatsApp within minutes.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Full Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Event Type" name="eventType" placeholder="Birthday, Corporate, Tour…" required />
            <Field label="Preferred Date" name="date" type="date" required />
            <Field label="Time" name="time" type="time" required />
            <Field label="Number of Guests" name="guests" type="number" min={2} max={50} required />
            <Field label="Budget per Head (£)" name="budget" type="number" />
          </div>

          <div className="mt-5">
            <label className="label-gold">Notes & Special Requests</label>
            <textarea name="notes" rows={4} className="input-gold" placeholder="Dietary requirements, decoration, special requests…" />
          </div>

          <button type="submit" className="btn-gold btn-whatsapp mt-7 w-full justify-center">
            <MessageCircle size={14} /> Send Enquiry via WhatsApp
          </button>

          {sent && (
            <p className="mt-5 text-center" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", color: "var(--gold-primary)" }}>
              ✓ Your enquiry has opened in WhatsApp. Send the message to confirm — we'll be in touch shortly.
            </p>
          )}

          <p className="mt-4 text-center" style={{ fontSize: 13, color: "var(--cream-muted)" }}>
            Prefer to talk? Call <a href={SITE.phoneTel} style={{ color: "var(--gold-primary)" }}>{SITE.phone}</a>
          </p>
        </form>
      </section>

      <HeraldicDivider />
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder, min, max }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; min?: number; max?: number }) {
  return (
    <div>
      <label className="label-gold" htmlFor={name}>{label}{required && " *"}</label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder} min={min} max={max} className="input-gold" />
    </div>
  );
}
