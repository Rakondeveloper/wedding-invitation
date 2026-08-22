"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import RevealText from "./RevealText";
import AnimatedBgPattern from "./AnimatedBgPattern";
import { VENUE_DETAILS } from "../lib/eventConfig";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function VenueMap() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        mapRef.current,
        { opacity: 0, scale: 0.92, filter: "blur(10px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="venue"
      className="full-width-section relative flex min-h-0 w-full flex-col items-center justify-center gap-6 sm:gap-10 overflow-hidden bg-[#E8DDCC] px-4 sm:px-6 py-10 sm:py-16 md:py-20"
    >
      <AnimatedBgPattern variant="sand" showStarMandala={true} showLatticeMesh={true} />

      <div className="section-content relative z-10 text-center max-w-md">
        <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider sm:tracking-widest2 text-emerald-regal">
          {t("findWayLabel")}
        </span>
        <RevealText
          as="h2"
          className="mt-1.5 sm:mt-3 font-display text-2xl sm:text-4xl md:text-5xl font-semibold italic text-emerald-regal"
        >
          {VENUE_DETAILS.name}
        </RevealText>
      </div>

      {/* Embedded Map Frame — 100% Edge-to-Edge Flush with Zero Gap */}
      <div
        ref={mapRef}
        className="relative z-10 w-full max-w-3xl overflow-hidden rounded-t-[60px] sm:rounded-t-[80px] border border-gold/50 shadow-2xl p-0 m-0 opacity-0"
      >
        <div className="w-full block p-0 m-0 overflow-hidden leading-none">
          <iframe
            title={`${VENUE_DETAILS.name} — map`}
            src={VENUE_DETAILS.embedUrl}
            className="block w-full h-72 sm:h-96 border-0 p-0 m-0 leading-none"
            style={{ width: "100%", display: "block", border: 0, margin: 0, padding: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Side-by-Side Dual Navigation Controls: Google Maps & Apple Maps */}
      <div className="section-content relative z-10 flex w-full max-w-xs sm:max-w-md items-center justify-center gap-3 sm:gap-5 px-4 sm:px-0">
        {/* Google Maps Button */}
        <a
          href={VENUE_DETAILS.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex-1 sm:flex-initial inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full border border-gold/40 bg-emerald-regal px-4 sm:px-6 text-[11px] sm:text-xs font-medium uppercase tracking-wider sm:tracking-widest2 text-gold-bright shadow-lg transition-all hover:scale-103 whitespace-nowrap"
        >
          <svg className="h-4 w-4 fill-current text-gold-bright shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span>{t("googleMapsBtn")}</span>
        </a>

        {/* Apple Maps Button */}
        <a
          href={VENUE_DETAILS.appleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex-1 sm:flex-initial inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full border border-gold/40 bg-emerald-regal px-4 sm:px-6 text-[11px] sm:text-xs font-medium uppercase tracking-wider sm:tracking-widest2 text-gold-bright shadow-lg transition-all hover:scale-103 whitespace-nowrap"
        >
          <svg className="h-4 w-4 fill-current text-gold-bright shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.13-1.96.99-3.12-.98.04-2.19.66-2.88 1.47-.62.72-1.16 1.88-1.01 3.01 1.1.09 2.23-.54 2.9-1.36z" />
          </svg>
          <span>{t("appleMapsBtn")}</span>
        </a>
      </div>
    </section>
  );
}
