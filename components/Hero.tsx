"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ParticleField from "./ParticleField";
import { EightPointStar } from "./IslamicMotifs";
import AnimatedBgPattern from "./AnimatedBgPattern";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ ready }: { ready: boolean }) {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const bismillahRef = useRef<HTMLHeadingElement | null>(null);
  const translationRef = useRef<HTMLParagraphElement | null>(null);
  const inviteRef = useRef<HTMLParagraphElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const scrollHintRef = useRef<HTMLDivElement | null>(null);

  // Entrance sequence, gated on the loader finishing.
  useEffect(() => {
    if (!ready) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (prefersReduced) {
      tl.set(
        [bismillahRef.current, translationRef.current, inviteRef.current, scrollHintRef.current],
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
        bismillahRef.current,
        { opacity: 0, y: 30, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.4 },
        "-=1.6"
      )
      .fromTo(
        translationRef.current,
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
      <AnimatedBgPattern variant="cream" showStarMandala={true} showLatticeMesh={true} />

      {/* Soft warm gold halo background */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-[42%] h-[75vh] w-[75vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,75,0.22) 0%, rgba(239,232,216,0.6) 50%, rgba(245,238,223,1) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative Gold Arch vector framing in warm bronze */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 600 800" className="h-[60vh] sm:h-[80vh] max-h-[680px] w-auto text-bronze opacity-40">
          <path
            d="M 100 800 L 100 300 A 200 200 0 0 1 500 300 L 500 800"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M 120 800 L 120 310 A 180 180 0 0 1 480 310 L 480 800"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="300" cy="120" r="45" fill="none" stroke="currentColor" strokeWidth="1" className="animate-spin-slow" />
        </svg>
      </div>

      {/* Floating particles */}
      <ParticleField count={20} />

      {/* Hero Content */}
      <div
        ref={contentRef}
        className="section-content relative z-10 flex w-full max-w-3xl flex-col items-center text-center px-2 sm:px-6 mx-auto justify-center"
      >
        <EightPointStar className="mb-4 sm:mb-6 h-6 w-6 sm:h-8 sm:w-8 text-bronze" />

        <div className="mb-4 sm:mb-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="hairline hidden w-12 bg-emerald-regal/60 sm:inline-block" />
          <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider sm:tracking-widest2 text-emerald-regal">
            {t("heroSubtitle")}
          </span>
          <span className="hairline hidden w-12 bg-emerald-regal/60 sm:inline-block" />
        </div>

        <h1
          ref={bismillahRef}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-normal sm:tracking-wide text-emerald-regal font-semibold opacity-0 leading-tight"
        >
          {t("heroTitle")}
        </h1>

        <p
          ref={translationRef}
          className="mt-4 sm:mt-6 max-w-xs sm:max-w-lg font-display text-lg sm:text-2xl md:text-3xl italic font-medium leading-snug sm:leading-relaxed text-charcoal opacity-0"
        >
          {t("heroInviteText")}
        </p>

        <p
          ref={inviteRef}
          className="mt-4 sm:mt-6 text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wider sm:tracking-widest2 text-emerald-regal opacity-0"
        >
          {t("heroDateVenue")}
        </p>
      </div>

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
