"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Crescent, EightPointStar } from "./IslamicMotifs";
import RevealText from "./RevealText";
import AnimatedBgPattern from "./AnimatedBgPattern";
import ParticleField from "./ParticleField";
import { useLanguage } from "../context/LanguageContext";
import { COUPLES_DATA } from "../lib/couplesConfig";

gsap.registerPlugin(ScrollTrigger);

export default function FinalBlessing() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const moonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(moonRef.current, {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="closing"
      className="full-width-section relative flex min-h-0 w-full flex-col items-center justify-center gap-6 sm:gap-8 overflow-hidden bg-[#142D27] px-4 sm:px-6 py-10 sm:py-16 md:py-20"
    >
      <AnimatedBgPattern variant="emerald" showStarMandala={true} showLatticeMesh={true} />
      <ParticleField count={22} />

      <div
        ref={moonRef}
        className="pointer-events-none absolute left-1/2 top-[8%] h-16 w-16 -translate-x-1/2 text-gold-bright opacity-90 animate-float-slow"
      >
        <Crescent className="h-full w-full filter drop-shadow-[0_0_15px_rgba(243,223,168,0.5)]" />
      </div>

      <div className="section-content relative z-10 flex max-w-xl flex-col items-center text-center px-2 sm:px-0">
        <EightPointStar className="mb-4 sm:mb-6 h-6 w-6 sm:h-7 sm:w-7 text-gold-bright" />

        <p dir="rtl" className="font-arabic text-xl sm:text-3xl md:text-4xl font-medium text-gold-bright">
          وَاللهُ خَيْرُ الرَّازِقِينَ
        </p>

        <RevealText
          as="h2"
          className="mt-4 sm:mt-6 font-display text-xl sm:text-3xl md:text-4xl font-semibold italic leading-relaxed text-ivory"
        >
          {t("blessingHeading")}
        </RevealText>

        <div className="mt-6 sm:mt-10 flex flex-col items-center gap-1.5 sm:gap-2">
          {COUPLES_DATA.map((c, i) => (
            <div key={c.id} className="flex flex-col items-center">
              <span className="font-display text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-gradient-gold">
                {c.groom} &amp; {c.bride}
              </span>
              {i === 0 && <span className="my-0.5 font-display text-sm sm:text-base italic font-medium text-gold-bright/70">&amp;</span>}
            </div>
          ))}
          <span className="mt-3 text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest2 text-gold-bright">
            {t("blessingSub")}
          </span>
        </div>
      </div>
    </section>
  );
}
