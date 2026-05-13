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
  { icon: Tv, title: "Multi-Screen Sports", text: "HD screens throughout — never miss a moment of the match." },
  { icon: Trophy, title: "Match-Day Atmosphere", text: "Football, cricket, rugby, F1, boxing — every fixture covered." },
  { icon: Music, title: "Quiz & Live Music Nights", text: "Follow our socials for upcoming themed evenings." },
  { icon: PartyPopper, title: "Private Party Hire", text: "Birthdays, corporate gatherings and group celebrations." },
];

const EVENTS = [
  { date: "TBA", title: "Event Coming Soon", text: "Follow our Facebook & Instagram for upcoming themes." },
  { date: "TBA", title: "Event Coming Soon", text: "Match-day specials, quiz nights and live music announced regularly." },
  { date: "TBA", title: "Event Coming Soon", text: "Get in touch to suggest a screening or theme night." },
];

function SportsPage() {
  return (
    <>
      <section className="relative grain-overlay" style={{ minHeight: "60vh", background: "radial-gradient(ellipse at top, var(--crimson-glow), var(--bg-primary) 60%)" }}>
        <div className="max-w-5xl mx-auto px-6 py-24 text-center relative z-10">
          <p className="eyebrow">Match Day · Live Music · Quiz Nights</p>
          <h1 className="mt-4 text-glow-gold" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 72px)", color: "var(--cream-primary)" }}>
            Sports <span style={{ color: "var(--gold-primary)" }}>& Events</span>
          </h1>
          <p className="mt-5 mx-auto max-w-2xl" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: 19, color: "var(--cream-secondary)" }}>
            Big screens. Big atmosphere. Bigger flavours. Reserve your spot for match day.
          </p>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gold btn-whatsapp mt-10">
            <MessageCircle size={14} /> Reserve Your Spot
          </a>
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
          <p className="eyebrow">What's On</p>
          <h2 className="section-title mt-4">Upcoming Events</h2>
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
