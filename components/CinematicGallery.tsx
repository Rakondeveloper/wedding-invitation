"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AnimatedBgPattern from "./AnimatedBgPattern";
import ParticleField from "./ParticleField";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function CinematicGallery() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const mainImageRef = useRef<HTMLDivElement | null>(null);
  const frameLeftRef = useRef<HTMLDivElement | null>(null);
  const frameRightRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const width = typeof window !== "undefined" ? window.innerWidth : 1200;
      const startScale = width < 640 ? 0.86 : width < 1024 ? 0.80 : 0.75;

      // Pure scale-only 1:1 scroll-driven reveal (Small -> Big -> Full Size)
      gsap.fromTo(
        mainImageRef.current,
        {
          scale: startScale,
        },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: mainImageRef.current,
            start: "top 85%",
            end: "top 30%",
            scrub: 0.4,
          },
        }
      );

      // Side frames floating in
      gsap.fromTo(
        frameLeftRef.current,
        { y: 60, opacity: 0, rotate: -3 },
        {
          y: 0,
          opacity: 1,
          rotate: -0.5,
          scrollTrigger: {
            trigger: frameLeftRef.current,
            start: "top 85%",
            end: "top 55%",
            scrub: 0.6,
          },
        }
      );

      gsap.fromTo(
        frameRightRef.current,
        { y: 70, opacity: 0, rotate: 3 },
        {
          y: 0,
          opacity: 1,
          rotate: 0.5,
          scrollTrigger: {
            trigger: frameRightRef.current,
            start: "top 85%",
            end: "top 55%",
            scrub: 0.6,
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "top 40%",
            scrub: 0.5,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cinematic-gallery"
      className="full-width-section relative flex min-h-0 w-full flex-col items-center justify-center overflow-hidden bg-[#F3EBDD] px-4 sm:px-6 py-10 sm:py-16 md:py-20"
    >
      <AnimatedBgPattern variant="cream" showStarMandala={true} showLatticeMesh={true} />
      <ParticleField count={16} />

      <div ref={textRef} className="section-content relative z-10 mb-10 sm:mb-16 text-center max-w-2xl">
        <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider sm:tracking-widest2 text-emerald-regal">
          {t("galleryLabel")}
        </span>
        <h2 className="mt-2 sm:mt-3 font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold italic text-emerald-regal">
          {t("galleryHeading")}
        </h2>
        <p className="mt-2 sm:mt-4 font-display text-sm sm:text-lg md:text-xl font-medium text-charcoal">
          {t("gallerySub")}
        </p>
      </div>

      {/* Unfolding Photo Showcase */}
      <div className="section-content relative z-10 w-full max-w-5xl">
        {/* Main Central Unfolding Wide Card */}
        <div
          ref={mainImageRef}
          className="relative h-[45vh] min-h-[300px] sm:min-h-[400px] w-full overflow-hidden rounded-[16px] sm:rounded-[20px] border border-gold/40 shadow-2xl"
        >
          <img
            src="/images/couple_unfold_1.png"
            alt="Cinematic couple walking"
            className="h-full w-full object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-regal/85 via-emerald-regal/20 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col items-center sm:items-start text-ivory">
            <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider sm:tracking-widest2 text-gold-bright">
              {t("portraitLabel")}
            </span>
            <p className="mt-0.5 sm:mt-1 font-display text-lg sm:text-2xl md:text-3xl font-medium italic text-ivory">
              {t("portraitSub")}
            </p>
          </div>
        </div>

        {/* Side Floating Arched Accent Photos */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div
            ref={frameLeftRef}
            className="relative flex flex-col rounded-t-[120px] border border-gold/40 bg-[#F5EEDF] p-5 shadow-xl backdrop-blur-sm"
          >
            <div className="relative h-72 w-full overflow-hidden rounded-t-[100px]">
              <img
                src="/images/couple_unfold_2.png"
                alt="Henna and gold ring detail"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-5 text-center">
              <span className="font-display text-2xl italic font-semibold text-emerald-regal">
                {t("sacredTitle")}
              </span>
              <p className="text-sm font-medium text-emerald-regal mt-1">{t("sacredSub")}</p>
            </div>
          </div>

          <div
            ref={frameRightRef}
            className="relative flex flex-col rounded-t-[120px] border border-gold/40 bg-[#F5EEDF] p-5 shadow-xl backdrop-blur-sm"
          >
            <div className="relative h-72 w-full overflow-hidden rounded-t-[100px]">
              <img
                src="/images/couple_hero.png"
                alt="Palace portrait"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-5 text-center">
              <span className="font-display text-2xl italic font-semibold text-emerald-regal">
                {t("grandTitle")}
              </span>
              <p className="text-sm font-medium text-emerald-regal mt-1">{t("grandSub")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
