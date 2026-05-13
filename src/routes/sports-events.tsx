import { createFileRoute } from "@tanstack/react-router";
import { HeraldicDivider } from "@/components/SiteShell";
import barBeersImg from "@/assets/bar-beers.jpg";
import { SITE } from "@/lib/site";
import { Tv, Trophy, Music, PartyPopper, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/sports-events")({
  head: () => ({
    meta: [
      { title: "Live Sports & Events — The Prince Regent Chertsey" },
      { name: "description", content: "Watch live football, cricket, rugby and major sporting events on big screens at The Prince Regent in Chertsey. Quiz nights, live music and private hire." },
      { property: "og:title", content: "Live Sports & Events — The Prince Regent" },
      { property: "og:description", content: "Big screens, live sport, quiz nights and private hire in Chertsey, Surrey." },
      { property: "og:url", content: "/sports-events" },
    ],
    links: [{ rel: "canonical", href: "/sports-events" }],
  }),
  component: SportsPage,
});

const FEATURES = [
  { icon: Tv, title: "Multi-Screen HD Sport", text: "Big screens throughout the bar and lounge — pin-sharp picture, perfect sightlines from every seat." },
  { icon: Trophy, title: "Every Major Fixture", text: "Premier League, Champions League, Europa League, Carabao Cup, FA Cup, Six Nations, F1, Cricket, Boxing & UFC — all covered." },
  { icon: Music, title: "Quiz & Live Music Nights", text: "Themed quiz nights and live music regularly. Follow our Facebook & Instagram for the next date." },
  { icon: PartyPopper, title: "Private Match-Day Hire", text: "Reserve a section for your group — perfect for derby days, finals and stag-do watch parties." },
];

const SPORTS = [
  "Premier League", "Champions League", "Europa League", "FA Cup", "Carabao Cup",
  "Six Nations Rugby", "Premiership Rugby", "Formula 1", "Cricket — Internationals & T20",
  "Boxing — World Title Nights", "UFC Pay-Per-View", "World Cups",
];

const EVENTS = [
  { date: "EVERY SAT · 2PM", title: "Six Nations Live", text: "Every fixture on the big screens. Pints of Guinness £6 all match long." },
  { date: "MATCH DAYS", title: "Premier League Sundays", text: "Sharing platters, mixed grills and the best seat in Chertsey." },
  { date: "FOLLOW US", title: "Quiz & Music Nights", text: "Themed quiz evenings, live acoustic sets and seasonal events — announced on Facebook & Instagram." },
];

function SportsPage() {
  return (
    <>
      <section className="relative grain-overlay" style={{ minHeight: "60vh", background: "radial-gradient(ellipse at top, var(--crimson-glow), var(--bg-primary) 60%)" }}>
        <div className="max-w-5xl mx-auto px-6 py-24 text-center relative z-10">
          <p className="eyebrow">Match Day · Live Music · Quiz Nights</p>
          <h1 className="mt-4 text-glow-gold" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 72px)", color: "var(--cream-primary)" }}>
            The Ultimate Sports <span style={{ color: "var(--gold-primary)" }}>Viewing Experience</span> in Chertsey
          </h1>
          <p className="mt-5 mx-auto max-w-2xl" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: 19, color: "var(--cream-secondary)" }}>
            Live sport. Cold pints. Unbeatable atmosphere. HD screens throughout, sharp sightlines from every seat, and a kitchen that knows how to feed a crowd on match day.
          </p>
          <div className="mt-6 inline-block px-6 py-3" style={{ border: "1px solid var(--gold-primary)", borderRadius: 999, background: "rgba(196,146,42,0.08)" }}>
            <span style={{ fontFamily: "var(--font-display)", color: "var(--gold-primary)", fontSize: 13, letterSpacing: "0.2em" }}>SIX NATIONS LIVE · EVERY SAT 2PM · GUINNESS £6</span>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gold btn-whatsapp">
              <MessageCircle size={14} /> Book Your Match Day Table
            </a>
          </div>
        </div>
      </section>

      <HeraldicDivider />

      <section className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in">
        {FEATURES.map(({ icon: Icon, title, text }) => (
          <article key={title} className="tilt-card p-7 text-center">
            <Icon size={32} style={{ color: "var(--gold-primary)" }} className="mx-auto" />
            <h3 className="mt-4" style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--cream-primary)", letterSpacing: "0.08em" }}>{title}</h3>
            <p className="mt-2" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", color: "var(--cream-secondary)", fontSize: 15 }}>{text}</p>
          </article>
        ))}
      </section>

      <HeraldicDivider />

      <section className="max-w-6xl mx-auto px-6 animate-in">
        <div className="text-center">
          <p className="eyebrow">All The Sport · One Pub</p>
          <h2 className="section-title mt-4">Every fixture covered.</h2>
          <p className="mt-4 mx-auto max-w-2xl" style={{ color: "var(--cream-secondary)" }}>
            From derby-day football to championship boxing, we screen the lot. Pull up a stool, get the round in, and settle in for the best seat in Chertsey.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {SPORTS.map((s) => (
            <span key={s} className="px-4 py-2" style={{ border: "1px solid var(--gold-hairline)", borderRadius: 999, fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: "0.18em", color: "var(--cream-primary)" }}>{s}</span>
          ))}
        </div>
      </section>

      <HeraldicDivider />

      <section className="max-w-6xl mx-auto px-6 animate-in">
        <div className="text-center">
          <p className="eyebrow">What's On</p>
          <h2 className="section-title mt-4">Upcoming & Regular Events</h2>
          <p className="mt-4 mx-auto max-w-2xl" style={{ color: "var(--cream-secondary)" }}>
            Follow us on Facebook and Instagram for fixture updates, themed nights and special screenings.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {EVENTS.map((e, i) => (
            <article key={i} className="tilt-card p-8 text-center">
              <div style={{ fontFamily: "var(--font-display)", color: "var(--gold-primary)", fontSize: 11, letterSpacing: "0.25em" }}>{e.date}</div>
              <h3 className="mt-3" style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--cream-primary)" }}>{e.title}</h3>
              <p className="mt-3" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", color: "var(--cream-secondary)" }}>{e.text}</p>
            </article>
          ))}
        </div>
      </section>

      <HeraldicDivider />

      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center animate-in">
        <figure className="tilt-card overflow-hidden">
          <img src={barBeersImg} alt="Pints of beer with live sports on screens at The Prince Regent pub Chertsey" loading="lazy" className="w-full h-full object-cover" />
        </figure>
        <div>
          <p className="eyebrow">Sharing Boards</p>
          <h2 className="section-title mt-4">Built for the big game.</h2>
          <p className="mt-5" style={{ color: "var(--cream-secondary)" }}>
            Mixed grills, wings, kebab platters and a properly-pulled pint. Get the table booked, get the round in, get ready for kick-off.
          </p>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gold btn-whatsapp mt-8">
            <MessageCircle size={14} /> Reserve for Match Day
          </a>
        </div>
      </section>
    </>
  );
}
