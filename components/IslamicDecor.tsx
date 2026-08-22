"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Crescent, EightPointStar } from "./IslamicMotifs";
import AnimatedBgPattern from "./AnimatedBgPattern";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function IslamicDecor() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const moonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (moonRef.current) {
        gsap.to(moonRef.current, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="full-width-section relative flex min-h-0 w-full items-center justify-center overflow-hidden bg-[#EFE5CE] px-4 sm:px-6 py-10 sm:py-16 md:py-20"
    >
      <AnimatedBgPattern variant="sand" showStarMandala={true} showLatticeMesh={true} />

      <div
        ref={moonRef}
        className="absolute right-[6%] top-[8%] h-16 w-16 text-bronze opacity-60 sm:h-24 sm:w-24 animate-float-slow"
      >
        <Crescent className="h-full w-full filter drop-shadow-[0_0_12px_rgba(201,162,75,0.4)]" />
      </div>

      {/* Center Arched Framed Card matching reference image */}
      <div className="section-content gold-shimmer-border relative z-10 w-full max-w-2xl rounded-t-[90px] sm:rounded-t-[140px] border border-gold/40 bg-[#F5EEDF]/95 backdrop-blur-sm p-5 sm:p-12 text-center shadow-xl">
        <div className="mx-auto mb-4 sm:mb-6 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gold/50 bg-[#EFE5CE]/60 shadow-sm animate-pulse">
          <EightPointStar className="h-5 w-5 sm:h-6 sm:w-6 text-bronze" />
        </div>

        <p dir="rtl" className="font-arabic text-2xl font-medium leading-relaxed text-emerald-regal sm:text-4xl md:text-5xl">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </p>

        <p dir="rtl" className="mt-5 sm:mt-8 font-arabic text-xl font-medium leading-relaxed sm:leading-loose text-emerald-regal sm:text-3xl md:text-4xl">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
        </p>

        <div className="my-6 sm:my-8 flex items-center justify-center gap-3 sm:gap-4">
          <span className="hairline w-10 sm:w-16 bg-emerald-regal/50" />
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest2 text-emerald-regal">
            {t("surahTitle")}
          </span>
          <span className="hairline w-10 sm:w-16 bg-emerald-regal/50" />
        </div>

        <p className="font-display text-xs sm:text-lg italic font-medium leading-relaxed text-charcoal sm:text-xl">
          {t("quranTranslation")}
        </p>
      </div>
    </section>
  );
}
