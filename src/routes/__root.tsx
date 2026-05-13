import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Nav, Footer, WhatsAppFab, CookieBanner } from "@/components/SiteShell";
import { ScrollReveal, ClientFx } from "@/components/Effects";
import { SITE } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-md text-center">
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 96, color: "var(--gold-primary)" }}>404</h1>
        <p className="mt-2" style={{ color: "var(--cream-secondary)" }}>This page has wandered off. Let's get you back to the bar.</p>
        <div className="mt-6">
          <Link to="/" className="btn-gold">Return Home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-md text-center">
        <h1 style={{ fontFamily: "var(--font-display)", color: "var(--gold-primary)" }}>Something went wrong</h1>
        <p className="mt-2" style={{ color: "var(--cream-secondary)" }}>{error.message}</p>
        <div className="mt-6 flex gap-3 justify-center">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-gold">Try again</button>
          <a href="/" className="btn-gold">Go home</a>
        </div>
      </div>
    </div>
  );
}

const ldJson = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  name: "The Prince Regent",
  image: "/logo.webp",
  url: "/",
  telephone: "+447506736185",
  servesCuisine: ["British", "South Asian", "Indian"],
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    streetAddress: "126 Guildford Street",
    addressLocality: "Chertsey",
    addressRegion: "Surrey",
    postalCode: "KT16 9AH",
    addressCountry: "GB",
  },
  geo: { "@type": "GeoCoordinates", latitude: 51.3895, longitude: -0.5076 },
  openingHours: ["Mo-Sa 12:00-23:00", "Su 12:00-22:30"],
});

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Prince Regent — Pub & Restaurant in Chertsey, Surrey" },
      { name: "description", content: "Traditional British pub serving authentic South Asian cuisine in Chertsey, Surrey. Live sports, Six Nations, group bookings and private hire." },
      { property: "og:site_name", content: "The Prince Regent" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/logo.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0D0806" },
      { property: "og:title", content: "The Prince Regent — Pub & Restaurant in Chertsey, Surrey" },
      { name: "twitter:title", content: "The Prince Regent — Pub & Restaurant in Chertsey, Surrey" },
      { property: "og:description", content: "Traditional British pub serving authentic South Asian cuisine in Chertsey, Surrey. Live sports, Six Nations, group bookings and private hire." },
      { name: "twitter:description", content: "Traditional British pub serving authentic South Asian cuisine in Chertsey, Surrey. Live sports, Six Nations, group bookings and private hire." },
      { name: "twitter:image", content: "/logo.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/logo.webp" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cormorant+Garamond:ital,wght@1,400;1,600&family=EB+Garamond:wght@400;500&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: ldJson },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  // SITE referenced for tree-shake safety
  void SITE;
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <main className="pt-[76px]">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
      <CookieBanner />
      <ScrollReveal />
      <ClientFx />
    </QueryClientProvider>
  );
}
