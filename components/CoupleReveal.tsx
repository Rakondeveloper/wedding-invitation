"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { EightPointStar } from "./IslamicMotifs";
import AnimatedBgPattern from "./AnimatedBgPattern";
import ParticleField from "./ParticleField";
import { useLanguage } from "../context/LanguageContext";
import { COUPLES_DATA } from "../lib/couplesConfig";

gsap.registerPlugin(ScrollTrigger);

export default function CoupleReveal() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const imgRefs = useRef<Array<HTMLImageElement | null>>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Subtle staggered scroll entrance for cards
      gsap.fromTo(
        cardRefs.current,
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
        imgRefs.current,
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

      <div className="section-content relative z-10 flex max-w-4xl flex-col items-center">
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest2 text-gold-bright">
          {t("coupleSubtitle")}
        </span>
        <h2 className="mt-2 text-center font-display text-2xl sm:text-4xl md:text-5xl font-semibold italic text-gold-bright">
          {t("coupleHeading")}
        </h2>

        {/* Dual Arched Matching Dark Green Couple Cards */}
        <div className="mt-6 sm:mt-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {COUPLES_DATA.map((couple, index) => (
            <div
              key={couple.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="group gold-shimmer-border relative flex flex-col items-center rounded-t-[100px] sm:rounded-t-[140px] border border-gold/30 bg-emerald-regal p-4 sm:p-6 shadow-xl transition-transform duration-500 hover:-translate-y-1.5"
            >
              {/* Arched Photo Frame */}
              <div className="relative h-56 sm:h-72 w-full overflow-hidden rounded-t-[90px] sm:rounded-t-[130px] border border-gold/40 shadow-inner">
                <img
                  ref={(el) => {
                    imgRefs.current[index] = el;
                  }}
                  src={couple.image}
                  alt={`${couple.groom} & ${couple.bride}`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-regal/80 via-transparent to-transparent" />
              </div>

              <div className="mt-4 sm:mt-5 flex w-full flex-col items-center text-center">
                {/* Groom Block */}
                <div className="flex flex-col items-center">
                  <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-gold-bright/70">
                    {t(couple.groomLabelKey)}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-gradient-gold">
                    {couple.groom}
                  </h3>
                </div>

                {/* Decorative & Separator */}
                <div className="my-1.5 flex items-center justify-center gap-2">
                  <span className="h-px w-6 bg-gold/40" />
                  <span className="font-display text-lg sm:text-xl italic font-medium text-gold-bright">
                    &amp;
                  </span>
                  <span className="h-px w-6 bg-gold/40" />
                </div>

                {/* Bride Block */}
                <div className="flex flex-col items-center">
                  <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-gold-bright/70">
                    {t(couple.brideLabelKey)}
                  </span>
                  <h4 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-gradient-gold">
                    {couple.bride}
                  </h4>
                </div>

                <p className="mt-3.5 max-w-xs font-body text-xs font-normal leading-relaxed text-[#E0D4B8]">
                  {t(couple.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-center px-4">
          <EightPointStar className="h-5 w-5 text-bronze shrink-0" />
          <p className="font-display text-base sm:text-lg md:text-xl italic font-medium text-gold-bright">
            “{t("coupleQuote")}”
          </p>
          <EightPointStar className="h-5 w-5 text-bronze shrink-0" />
        </div>
      </div>
    </section>
  );
}
