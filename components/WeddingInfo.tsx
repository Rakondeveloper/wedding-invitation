"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import RevealText from "./RevealText";
import AddToCalendar from "./AddToCalendar";
import InvitationBackground from "./backgrounds/InvitationBackground";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function WeddingInfo() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const { t } = useLanguage();

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 40, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const dynamicInfo = [
    {
      id: "date",
      label: t("dateLabel"),
      value: t("dateVal"),
      sub: t("dateSub"),
      isWideOnMobile: false,
      icon: (
        <svg className="h-6 w-6 text-gold-bright" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: "time",
      label: t("timeLabel"),
      value: t("timeVal"),
      sub: t("timeSub"),
      isWideOnMobile: false,
      icon: (
        <svg className="h-6 w-6 text-gold-bright" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      id: "venue",
      label: t("venueLabel"),
      value: t("venueVal"),
      sub: t("venueSub"),
      isWideOnMobile: true,
      icon: (
        <svg className="h-6 w-6 text-gold-bright" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="details"
      className="full-width-section relative flex min-h-0 w-full flex-col items-center justify-center gap-6 sm:gap-10 overflow-hidden bg-[#E4D7BD] px-4 sm:px-6 py-10 sm:py-16 md:py-20"
    >
      <InvitationBackground />

      {/* Section Header */}
      <div className="section-content relative z-10 text-center max-w-xl">
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest2 text-emerald-regal">
          {t("saveDateLabel")}
        </span>
        <RevealText
          as="h2"
          className="mt-1.5 sm:mt-3 font-display text-2xl sm:text-4xl md:text-5xl italic text-emerald-regal font-semibold leading-tight"
        >
          {t("youAreInvited")}
        </RevealText>
        <p className="mt-3 font-body text-xs sm:text-base font-normal leading-relaxed text-charcoal">
          {t("invitationSub")}
        </p>
      </div>

      {/* Editorial Responsive Grid */}
      <div className="section-content relative z-10 grid w-full max-w-4xl grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {dynamicInfo.map((item, i) => (
          <div
            key={item.id}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className={`flex flex-col items-center gold-shimmer-border rounded-t-[32px] sm:rounded-t-[70px] border border-gold/40 bg-[#F5EEDF]/95 backdrop-blur-sm pt-5 sm:pt-6 pb-4 sm:pb-6 px-2.5 sm:px-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 opacity-0 ${
              item.isWideOnMobile ? "col-span-2 lg:col-span-1" : "col-span-1"
            }`}
          >
            {/* Icon Container */}
            <div className="mb-1.5 sm:mb-2 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gold/40 bg-emerald-regal shadow-sm animate-pulse">
              {item.icon}
            </div>

            {/* Label */}
            <span className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider sm:tracking-widest2 text-emerald-regal">
              {item.label}
            </span>

            {/* Thin Decorative Hairline Divider */}
            <span className="my-1.5 sm:my-2 h-px w-6 sm:w-8 bg-gold/40" />

            {/* Main Value */}
            <span className="font-display text-base sm:text-xl md:text-2xl font-semibold text-emerald-regal leading-tight">
              {item.value}
            </span>

            {/* Supporting Subtext */}
            <span className="mt-0.5 font-body text-[10px] sm:text-sm font-normal text-charcoal/80">
              {item.sub}
            </span>
          </div>
        ))}
      </div>

      {/* Add To Calendar Action Component */}
      <AddToCalendar />
    </section>
  );
}
