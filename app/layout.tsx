import type { Metadata, Viewport } from "next";

// Self-hosted fonts (fontsource) — no external network fetch at build or
// runtime, and no layout-shifting third-party font requests for guests.
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource/jost/300.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/aref-ruqaa/400.css";
import "@fontsource/aref-ruqaa/700.css";
import "@fontsource/anek-malayalam/400.css";
import "@fontsource/anek-malayalam/500.css";
import "@fontsource/anek-malayalam/600.css";

import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import StickyVenueButton from "@/components/StickyVenueButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://bais-nishad-wedding-invitation.vercel.app"),
  title: "Walima Celebration — Zyd Bais & Zydth Busthana | Zyd Nishad & Zydth Jumaila Nasri",
  description:
    "You are cordially invited to celebrate the joint Walima of Zyd Bais & Zydth Busthana and Zyd Nishad & Zydth Jumaila Nasri — 29 August, Vista Convention Centre, Vengad.",
  openGraph: {
    title: "Walima Celebration — Zyd Bais & Zydth Busthana | Zyd Nishad & Zydth Jumaila Nasri",
    description:
      "You are cordially invited to celebrate the joint Walima of Zyd Bais & Zydth Busthana and Zyd Nishad & Zydth Jumaila Nasri — 29 August, Vista Convention Centre, Vengad.",
    url: "https://bais-nishad-wedding-invitation.vercel.app",
    siteName: "Walima Celebration — Zyd Bais & Zydth Busthana | Zyd Nishad & Zydth Jumaila Nasri",
    images: [
      {
        url: "/images/couple_reference.jpg",
        width: 1200,
        height: 630,
        alt: "Walima Celebration — Zyd Bais & Zydth Busthana | Zyd Nishad & Zydth Jumaila Nasri",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Walima Celebration — Zyd Bais & Zydth Busthana | Zyd Nishad & Zydth Jumaila Nasri",
    description:
      "You are cordially invited to celebrate the joint Walima of Zyd Bais & Zydth Busthana and Zyd Nishad & Zydth Jumaila Nasri — 29 August, Vista Convention Centre, Vengad.",
    images: ["/images/couple_reference.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "rgb(234, 224, 198)",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-body bg-cream text-emerald-regal">
        <LanguageProvider>
          <StickyVenueButton />
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

