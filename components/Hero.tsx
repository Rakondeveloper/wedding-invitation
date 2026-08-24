"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HeroBackground from "./backgrounds/HeroBackground";
import { EightPointStar } from "./IslamicMotifs";
import { useLanguage } from "../context/LanguageContext";
import { HERO_COUPLES, HeroCoupleData } from "../lib/couplesConfig";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ ready }: { ready: boolean }) {
  const { t } = useLanguage();
  const [activeCoupleId, setActiveCoupleId] = useState<"bais" | "nishad">("bais");
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const titleBlockRef = useRef<HTMLDivElement | null>(null);
  const taglineRef = useRef<HTMLParagraphElement | null>(null);
  const inviteRef = useRef<HTMLParagraphElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const scrollHintRef = useRef<HTMLDivElement | null>(null);

  const activeCouple: HeroCoupleData =
    HERO_COUPLES.find((c) => c.id === activeCoupleId) || HERO_COUPLES[0];

  const handleTabChange = (newId: "bais" | "nishad") => {
    if (newId === activeCoupleId || isTransitioning) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setActiveCoupleId(newId);
      return;
    }

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCoupleId(newId);
      setIsTransitioning(false);
    }, 220);
  };

  // Entrance sequence, gated on the loader finishing.
  useEffect(() => {
    if (!ready) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (prefersReduced) {
      tl.set(
        [titleBlockRef.current, taglineRef.current, inviteRef.current, scrollHintRef.current],
        { opacity: 1, y: 0, filter: "blur(0px)" }
      );
      return;
    }

    tl.fromTo(
      glowRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 2.2, ease: "power2.out" }
    )
      .fromTo(
        titleBlockRef.current,
        { opacity: 0, y: 30, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.4 },
        "-=1.6"
      )
      .fromTo(
        taglineRef.current,
        { opacity: 0, y: 18, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1 },
        "-=0.5"
      )
      .fromTo(
        inviteRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.4"
      )
      .fromTo(
        scrollHintRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=0.3"
      );

    return () => {
      tl.kill();
    };
  }, [ready]);

  // Scroll-linked parallax: background glow drifts, content fades/scales out
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(glowRef.current, {
        yPercent: 30,
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(contentRef.current, {
        yPercent: -18,
        opacity: 0,
        scale: 0.94,
        filter: "blur(4px)",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(scrollHintRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom 80%",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="full-width-section relative flex min-h-[85vh] sm:min-h-[100vh] w-full items-center justify-center overflow-hidden py-10 px-4 sm:px-6"
    >
      <HeroBackground activeTab={activeCoupleId} />

      {/* Hero Content */}
      <div
        ref={contentRef}
        className="section-content relative z-10 flex w-full max-w-3xl flex-col items-center text-center px-2 sm:px-6 mx-auto justify-center"
      >
        <EightPointStar className="mb-2 sm:mb-3 h-6 w-6 sm:h-8 sm:w-8 text-bronze" />

        {/* Main Eyebrow Header */}
        <div className="mb-2 sm:mb-3 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="hairline hidden w-10 bg-emerald-regal/50 sm:inline-block" />
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest2 text-emerald-regal">
            {t("heroSubtitle")}
          </span>
          <span className="hairline hidden w-10 bg-emerald-regal/50 sm:inline-block" />
        </div>

        {/* Refined Editorial Tab Selector */}
        <div className="my-2 sm:my-4 flex flex-col items-center w-full">
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-bronze-dark/80 mb-2">
            {t("twoUnionsLabel")}
          </span>

          <div
            role="tablist"
            aria-label="Select couple union"
            className="flex items-center justify-center gap-3 sm:gap-6 border-b border-bronze/30 pb-1.5 max-w-[420px] w-full"
          >
            {HERO_COUPLES.map((couple, idx) => {
              const isActive = activeCoupleId === couple.id;
              return (
                <div key={couple.id} className="flex items-center gap-3 sm:gap-6">
                  <button
                    type="button"
                    role="tab"
                    id={`tab-${couple.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${couple.id}`}
                    onClick={() => handleTabChange(couple.id)}
                    className={`relative py-1 px-1.5 sm:px-3 text-sm sm:text-base font-display font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold ${
                      isActive
                        ? "text-emerald-regal font-semibold opacity-100"
                        : "text-emerald-regal/60 hover:text-emerald-regal opacity-70"
                    }`}
                  >
                    <span>{couple.tabLabel}</span>

                    {/* Active Champagne-Gold Underline & Gold Accent */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/40 via-gold-bright to-gold/40 rounded-full" />
                    )}
                  </button>

                  {idx === 0 && (
                    <span className="text-bronze/40 font-light select-none">|</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Couple Display Panel */}
        <div
          id={`panel-${activeCouple.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCouple.id}`}
          ref={titleBlockRef}
          className={`mt-2 flex flex-col items-center gap-2 sm:gap-3 w-full px-1 transition-all duration-300 transform ${
            isTransitioning
              ? "opacity-0 -translate-y-2 scale-98"
              : "opacity-100 translate-y-0 scale-100"
          }`}
        >
          {/* Small Decorative Circular Portrait Avatar */}
          <div className="relative h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-full border-2 border-gold/40 shadow-md p-0.5 bg-emerald-regal/10">
            <img
              src={activeCouple.avatar}
              alt={`${activeCouple.groom} & ${activeCouple.bride}`}
              className="h-full w-full rounded-full object-cover object-top"
            />
          </div>

          {/* Active Groom & Bride Names in Two Stacked Rows */}
          <div className="flex flex-col items-center justify-center text-center w-full my-1 sm:my-2">
            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight sm:tracking-wide text-emerald-regal font-semibold leading-tight">
              {activeCouple.groom}
            </h1>
            <div className="my-1 sm:my-1.5 flex items-center justify-center gap-2 sm:gap-3">
              <span className="h-px w-6 sm:w-10 bg-bronze/40" />
              <span className="font-display italic text-base sm:text-2xl font-medium text-bronze-dark">
                &amp;
              </span>
              <span className="h-px w-6 sm:w-10 bg-bronze/40" />
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight sm:tracking-wide text-emerald-regal font-semibold leading-tight">
              {activeCouple.bride}
            </h2>
          </div>

          {/* Family Invitation Sentence */}
          <p
            ref={taglineRef}
            className="mt-2 sm:mt-3 font-display text-sm sm:text-lg md:text-xl italic font-medium leading-snug text-bronze-dark max-w-lg"
          >
            “{t("heroTagline")}”
          </p>

          <p
            ref={inviteRef}
            className="mt-3 sm:mt-4 text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider sm:tracking-widest2 text-emerald-regal"
          >
            {t("heroDateVenue")}
          </p>
        </div>
      </div>

      {/* Scroll Hint */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 opacity-0"
      >
        <span className="text-[10px] font-medium uppercase tracking-widest2 text-bronze-dark">
          {t("heroScroll")}
        </span>
        <span className="h-8 w-px animate-pulse bg-gradient-to-b from-bronze-dark to-transparent" />
      </div>
    </section>
  );
}
