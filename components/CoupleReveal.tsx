"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { EightPointStar } from "./IslamicMotifs";
import AnimatedBgPattern from "./AnimatedBgPattern";
import ParticleField from "./ParticleField";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function CoupleReveal() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const img1Ref = useRef<HTMLImageElement | null>(null);
  const img2Ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Subtle staggered scroll entrance for both cards
      gsap.fromTo(
        [card1Ref.current, card2Ref.current],
        {
          opacity: 0,
          y: 25,
          scale: 0.985,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.0,
          stagger: 0.18,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Micro scroll-linked image scaling
      gsap.fromTo(
        [img1Ref.current, img2Ref.current],
        { scale: 1.02 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="couples"
      className="full-width-section relative flex min-h-0 w-full flex-col items-center justify-center overflow-hidden bg-emerald-regal px-4 sm:px-6 py-10 sm:py-16 md:py-20"
    >
      <AnimatedBgPattern variant="emerald" showStarMandala={true} showLatticeMesh={true} />
      <ParticleField count={18} />

      <div className="section-content relative z-10 flex max-w-3xl flex-col items-center">
        <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider sm:tracking-widest2 text-gold-bright">
          {t("coupleSubtitle")}
        </span>
        <h2 className="mt-2 text-center font-display text-2xl sm:text-4xl md:text-5xl font-semibold italic text-gold-bright">
          {t("coupleHeading")}
        </h2>

        {/* Dual Arched Compact Matching Dark Green Cards */}
        <div className="mt-6 sm:mt-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {/* Card 1: Emerald Arched Card (Zyd Bais & Zydth Busthana) */}
          <div
            ref={card1Ref}
            className="group gold-shimmer-border relative flex flex-col items-center rounded-t-[100px] sm:rounded-t-[140px] border border-gold/30 bg-emerald-regal p-4 sm:p-6 shadow-xl transition-transform duration-500 hover:-translate-y-1.5"
          >
            {/* Arched Photo Frame */}
            <div className="relative h-56 sm:h-72 w-full overflow-hidden rounded-t-[90px] sm:rounded-t-[130px] border border-gold/40 shadow-inner">
              <img
                ref={img1Ref}
                src="/images/couple_reference.jpg"
                alt="Zyd Bais & Zydth Busthana"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-regal/75 via-transparent to-transparent" />
            </div>

            <div className="mt-4 sm:mt-5 flex flex-col items-center text-center">
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-gradient-gold">
                Zyd Bais
              </h3>
              <span className="mt-1 mb-0.5 font-display text-lg sm:text-xl italic font-medium text-gold-bright">
                &amp;
              </span>
              <h4 className="mb-2 sm:mb-3.5 font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-gradient-gold">
                Zydth Busthana
              </h4>
              <p className="max-w-xs font-body text-xs font-normal leading-relaxed text-[#E0D4B8]">
                {t("couple1Desc")}
              </p>
            </div>
          </div>

          {/* Card 2: Emerald Arched Card (Zyd Nishad & Zydth Jumaila Nasri) */}
          <div
            ref={card2Ref}
            className="group gold-shimmer-border relative flex flex-col items-center rounded-t-[100px] sm:rounded-t-[140px] border border-gold/30 bg-emerald-regal p-4 sm:p-6 shadow-xl transition-transform duration-500 hover:-translate-y-1.5"
          >
            {/* Arched Photo Frame */}
            <div className="relative h-56 sm:h-72 w-full overflow-hidden rounded-t-[90px] sm:rounded-t-[130px] border border-gold/40 shadow-inner">
              <img
                ref={img2Ref}
                src="/images/couple_nishad.jpg"
                alt="Zyd Nishad & Zydth Jumaila Nasri"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-regal/75 via-transparent to-transparent" />
            </div>

            <div className="mt-4 sm:mt-5 flex flex-col items-center text-center">
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-gradient-gold">
                Zyd Nishad
              </h3>
              <span className="mt-1 mb-0.5 font-display text-lg sm:text-xl italic font-medium text-gold-bright">
                &amp;
              </span>
              <h4 className="mb-2 sm:mb-3.5 font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-gradient-gold">
                Zydth Jumaila Nasri
              </h4>
              <p className="max-w-xs font-body text-xs font-normal leading-relaxed text-[#E0D4B8]">
                {t("couple2Desc")}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-center">
          <EightPointStar className="h-5 w-5 text-bronze" />
          <p className="font-display text-lg italic font-medium text-gold-bright sm:text-xl">
            {t("coupleQuote")}
          </p>
          <EightPointStar className="h-5 w-5 text-bronze" />
        </div>
      </div>
    </section>
  );
}
