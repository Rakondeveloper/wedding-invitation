"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Language } from "../lib/translations";
import { VENUE_DETAILS } from "../lib/eventConfig";

const LANGUAGES: { code: Language; label: string; name: string }[] = [
  { code: "en", label: "EN", name: "English" },
  { code: "ml", label: "ML", name: "മലയാളം" },
  { code: "ar", label: "AR", name: "العربية" },
];

export default function StickyVenueButton() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) return null;

  const handleScrollToVenue = () => {
    const venueEl = document.getElementById("venue");
    if (venueEl) {
      venueEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(VENUE_DETAILS.googleMapsUrl, "_blank");
    }
    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-[9990] flex flex-col items-end gap-2"
    >
      {/* Combined Quick Options Popover Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.94 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex w-64 flex-col gap-2.5 rounded-2xl border border-gold/40 bg-[#F5EEDF]/98 p-3.5 shadow-2xl backdrop-blur-md text-emerald-regal"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gold/20 pb-2">
              <span className="text-[10px] font-semibold uppercase tracking-widest2 text-bronze-dark">
                Quick Options
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-charcoal/60 hover:text-emerald-regal text-xs p-1"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Venue Location (Page Map) */}
            <button
              onClick={handleScrollToVenue}
              className="group flex items-center gap-3 rounded-xl border border-gold/20 bg-white/60 p-2.5 text-left text-xs font-medium text-emerald-regal shadow-xs transition-all hover:border-gold/50 hover:bg-emerald-regal hover:text-gold-bright"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-regal text-gold-bright group-hover:bg-gold-bright group-hover:text-emerald-regal transition-colors">
                <svg
                  className="h-3.5 w-3.5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5-2.5z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">{t("stickyVenueBtn")}</span>
                <span className="text-[10px] opacity-75 font-normal">
                  Page Map Section
                </span>
              </div>
            </button>

            {/* Google Maps (GPS) */}
            <a
              href={VENUE_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-3 rounded-xl border border-gold/20 bg-white/60 p-2.5 text-left text-xs font-medium text-emerald-regal shadow-xs transition-all hover:border-gold/50 hover:bg-emerald-regal hover:text-gold-bright"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-regal text-gold-bright group-hover:bg-gold-bright group-hover:text-emerald-regal transition-colors">
                <svg
                  className="h-3.5 w-3.5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5-2.5z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">{t("googleMapsBtn")}</span>
                <span className="text-[10px] opacity-75 font-normal">
                  GPS Directions
                </span>
              </div>
            </a>

            {/* Divider */}
            <div className="my-0.5 h-px w-full bg-gold/25" />

            {/* Language Selector */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-bronze-dark">
                Language
              </span>
              <div className="flex items-center gap-1 rounded-full border border-gold/30 bg-cream/90 p-1 shadow-inner">
                {LANGUAGES.map((lang) => {
                  const isActive = language === lang.code;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      title={lang.name}
                      className={`flex flex-1 h-7 items-center justify-center rounded-full text-[11px] font-semibold tracking-wider transition-all ${
                        isActive
                          ? "bg-emerald-regal text-gold-bright shadow-sm"
                          : "text-emerald-regal hover:bg-emerald-regal/10"
                      }`}
                    >
                      {lang.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Combined Sticky Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Venue location and language options"
        className="flex h-11 w-11 sm:w-auto items-center justify-center p-0 sm:px-4 sm:gap-2 rounded-full border border-gold/50 bg-emerald-regal text-gold-bright shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-emerald-regal/95"
      >
        {/* Pulsing Gold Map Pin Icon */}
        <span className="relative flex h-4 w-4 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/40 opacity-75" />
          <svg
            className="relative h-4 w-4 fill-current text-gold-bright"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5-2.5z" />
          </svg>
        </span>

        <span className="hidden sm:inline-block font-body text-xs font-semibold uppercase tracking-wider text-gold-bright">
          {t("floatingMenuBtn")}
        </span>

        {/* Chevron Icon */}
        <svg
          className={`hidden sm:inline-block h-3.5 w-3.5 text-gold-bright transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.button>
    </div>
  );
}
