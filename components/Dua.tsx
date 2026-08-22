"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AnimatedBgPattern from "./AnimatedBgPattern";
import ParticleField from "./ParticleField";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function Dua() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        glowRef.current,
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 26, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="dua"
      className="full-width-section relative flex min-h-0 w-full items-center justify-center overflow-hidden bg-[#F3EBDD] px-4 sm:px-6 py-10 sm:py-16 md:py-20"
    >
      <AnimatedBgPattern variant="cream" showStarMandala={true} showLatticeMesh={true} />
      <ParticleField count={14} />

      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,75,0.25) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div ref={textRef} className="section-content relative z-10 max-w-xl text-center opacity-0 px-2 sm:px-0">
        <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider sm:tracking-widest2 text-emerald-regal">
          {t("duaLabel")}
        </span>

        <p dir="rtl" className="mt-4 sm:mt-6 font-arabic text-xl sm:text-3xl md:text-4xl font-medium leading-relaxed sm:leading-loose text-emerald-regal">
          بَارَكَ اللهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
        </p>

        <p className="mt-4 sm:mt-6 font-display text-sm sm:text-xl md:text-2xl italic font-medium leading-relaxed text-charcoal">
          {t("duaTranslation")}
        </p>

        <div className="mx-auto mt-6 sm:mt-8 flex items-center justify-center gap-3 sm:gap-4 opacity-90">
          <span className="hairline w-12 sm:w-16 bg-emerald-regal/60" />
          <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider sm:tracking-widest2 text-emerald-regal">
            {t("ameen")}
          </span>
          <span className="hairline w-12 sm:w-16 bg-emerald-regal/60" />
        </div>
      </div>
    </section>

  );
}
