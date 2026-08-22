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
  title: "Bais & Nishad — Walima Invitation",
  description:
    "You are cordially invited to celebrate the wedding of Bais and Nishad — 29 August, Vista Convention Centre, Vengad.",
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

