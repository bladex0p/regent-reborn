import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle, MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { NAV_LINKS, SITE, HOURS } from "@/lib/site";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-colors duration-300"
      style={{
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        background: scrolled ? "rgba(8,4,2,0.96)" : "rgba(13,8,6,0.82)",
        borderBottom: "1px solid var(--gold-hairline)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[76px]">
        <Link to="/" className="flex items-center gap-3" aria-label="The Prince Regent home">
          <img src="/logo.webp" alt="The Prince Regent Pub Chertsey logo" className="h-14 w-14 logo-blend" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span style={{ fontFamily: "var(--font-display)", fontSize: 13, letterSpacing: "0.18em", color: "var(--gold-primary)" }}>THE PRINCE REGENT</span>
            <span style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: 11, color: "var(--cream-muted)", letterSpacing: "0.2em" }}>CHERTSEY · EST. 1676</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="nav-link" activeOptions={{ exact: l.to === "/" }}>{l.label}</Link>
          ))}
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gold ml-2">
            <MessageCircle size={14} /> Book on WhatsApp
          </a>
        </nav>
        <button className="lg:hidden text-gold" aria-label="Open menu" onClick={() => setOpen(true)} style={{ color: "var(--gold-primary)" }}>
          <Menu size={28} />
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden flex flex-col items-center justify-center gap-7" style={{ background: "radial-gradient(ellipse at center, var(--crimson-glow), var(--bg-primary) 70%)" }}>
          <button className="absolute top-6 right-6" aria-label="Close menu" onClick={() => setOpen(false)} style={{ color: "var(--gold-primary)" }}>
            <X size={32} />
          </button>
          {NAV_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="nav-link text-lg" onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gold mt-4" onClick={() => setOpen(false)}>
            <MessageCircle size={14} /> Book on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

export function HeraldicDivider() {
  return (
    <div className="heraldic-divider">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
      </svg>
    </div>
  );
}

export function FoodPlaceholder({ n, caption, className = "" }: { n: number; caption?: string; className?: string }) {
  return (
    <div className={`food-placeholder ${className}`}>
      <div style={{ fontSize: 32, color: "var(--gold-primary)", marginBottom: 10 }}>◆</div>
      <div>FOOD PHOTO {n}</div>
      <div style={{ fontSize: 9, marginTop: 6, color: "var(--cream-muted)" }}>REPLACE WITH UPLOAD</div>
      {caption && <div style={{ marginTop: 14, fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: 14, letterSpacing: "0.05em", color: "var(--cream-secondary)", textTransform: "none" }}>{caption}</div>}
    </div>
  );
}

export function WhatsAppFab() {
  return (
    <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Book on WhatsApp"
      className="wa-fab fixed bottom-7 right-7 z-[99] w-[62px] h-[62px] rounded-full flex items-center justify-center"
      style={{ background: "var(--whatsapp-green)" }}>
      <MessageCircle size={26} color="white" strokeWidth={2.2} />
    </a>
  );
}

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => { if (typeof window !== "undefined" && !localStorage.getItem("pr_cookies")) setShow(true); }, []);
  if (!show) return null;
  const close = (v: string) => { localStorage.setItem("pr_cookies", v); setShow(false); };
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-[80] p-5 rounded"
      style={{ background: "rgba(28,18,8,0.92)", backdropFilter: "blur(20px)", border: "1px solid var(--gold-hairline)" }}>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--cream-secondary)" }}>
        We use cookies to give you the warmest possible welcome — improving your visit to our site.
      </p>
      <div className="mt-4 flex gap-3">
        <button className="btn-gold" onClick={() => close("accept")}>Accept</button>
        <button className="btn-gold" style={{ opacity: 0.7 }} onClick={() => close("dismiss")}>Dismiss</button>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="grain-overlay relative pt-20 pb-8" style={{ background: "#070504", borderTop: "1px solid var(--gold-hairline)" }}>
      <HeraldicDivider />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        <div>
          <img src="/logo.webp" alt="The Prince Regent Chertsey logo" loading="lazy" className="w-[110px] mx-auto md:mx-0 logo-blend" />
          <p className="mt-5 text-center md:text-left" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", color: "var(--cream-muted)", fontSize: 14 }}>
            Traditional British Pub · South Asian Cuisine · Est. 1676
          </p>
        </div>
        <div>
          <h4 style={{ fontSize: 12, letterSpacing: "0.2em", color: "var(--gold-primary)" }}>EXPLORE</h4>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.to}><Link to={l.to} className="nav-link">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={{ fontSize: 12, letterSpacing: "0.2em", color: "var(--gold-primary)" }}>VISIT</h4>
          <ul className="mt-4 space-y-3" style={{ color: "var(--cream-secondary)", fontSize: 14 }}>
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-1" style={{ color: "var(--gold-primary)" }} />{SITE.address}</li>
            <li className="flex items-center gap-2"><Phone size={16} style={{ color: "var(--gold-primary)" }} /><a href={SITE.phoneTel}>{SITE.phone}</a></li>
            <li className="flex items-center gap-2"><Mail size={16} style={{ color: "var(--gold-primary)" }} /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          </ul>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gold btn-whatsapp mt-5"><MessageCircle size={14} />WhatsApp</a>
        </div>
        <div>
          <h4 style={{ fontSize: 12, letterSpacing: "0.2em", color: "var(--gold-primary)" }}>OPENING TIMES</h4>
          <table className="mt-4 w-full" style={{ fontSize: 14, color: "var(--cream-secondary)" }}>
            <tbody>
              {HOURS.map(([d, t]) => (
                <tr key={d} style={{ borderBottom: "1px solid var(--gold-hairline)" }}>
                  <td className="py-1.5 pr-3" style={{ color: "var(--cream-primary)" }}>{d}</td>
                  <td className="py-1.5 text-right">{t}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-5 flex gap-3">
            <a href="https://facebook.com" aria-label="Facebook" style={{ color: "var(--gold-primary)" }} className="hover:scale-110 transition-transform"><Facebook size={20} /></a>
            <a href="https://instagram.com" aria-label="Instagram" style={{ color: "var(--gold-primary)" }} className="hover:scale-110 transition-transform"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 text-center" style={{ borderTop: "1px solid var(--gold-hairline)", color: "var(--cream-muted)", fontSize: 12, fontFamily: "var(--font-body)" }}>
        © 2026 The Prince Regent. All Rights Reserved. · {SITE.address}
      </div>
    </footer>
  );
}
