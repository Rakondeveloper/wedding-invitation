"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TimelineBackground from "./backgrounds/TimelineBackground";
import { LatticeBand } from "./IslamicMotifs";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([]);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const dynamicEvents = [
    {
      time: t("event1Time"),
      title: t("event1Title"),
      desc: t("event1Desc"),
    },
    {
      time: t("event2Time"),
      title: t("event2Title"),
      desc: t("event2Desc"),
    },
    {
      time: t("event3Time"),
      title: t("event3Title"),
      desc: t("event3Desc"),
    },
  ];

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header entrance animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 24, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Central Vertical Gold Line Progressive Draw (Scrub 1:1)
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: lineRef.current,
              start: "top 75%",
              end: "bottom 60%",
              scrub: 0.5,
            },
          }
        );
      }

      // Event Nodes & Content Box Reveals
      const isMobile = window.innerWidth < 768;

      itemRefs.current.forEach((item, idx) => {
        if (!item) return;
        const node = nodeRefs.current[idx];
        const isEven = idx % 2 === 0;

        // Node Activation as timeline reaches it
        if (node) {
          gsap.fromTo(
            node,
            { scale: 0.6, opacity: 0.3, boxShadow: "0 0 0px rgba(201,162,75,0)" },
            {
              scale: 1,
              opacity: 1,
              boxShadow: "0 0 16px rgba(201,162,75,0.7)",
              ease: "power2.out",
              scrollTrigger: {
                trigger: node,
                start: "top 78%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Content Box Outward Reveal
        const xInitial = isMobile ? 35 : isEven ? -45 : 45;

        gsap.fromTo(
          item,
          { opacity: 0, x: xInitial, scale: 0.96 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Active Event Focal Highlight when scrolled to center of screen
        gsap.to(item, {
          scale: 1.03,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 55%",
            end: "bottom 45%",
            toggleActions: "play reverse play reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="full-width-section relative flex min-h-0 w-full flex-col items-center justify-center overflow-hidden bg-[#EAE0C6] px-4 sm:px-6 py-10 sm:py-16 md:py-20"
    >
      <TimelineBackground />
      <LatticeBand className="absolute top-8 h-6 w-full max-w-2xl text-bronze opacity-40" />

      <div className="section-content relative z-10 flex max-w-3xl flex-col items-center text-center">
        {/* Animated Header */}
        <div ref={headerRef} className="flex flex-col items-center text-center">
          <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider sm:tracking-widest2 text-emerald-regal">
            {t("scheduleLabel")}
          </span>
          <h2 className="mt-1.5 sm:mt-2 font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold italic text-emerald-regal">
            {t("scheduleHeading")}
          </h2>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-medium text-bronze-dark">
            {t("scheduleDate")}
          </p>
        </div>

        {/* Vertical Gold Animated Timeline Container */}
        <div className="relative mt-10 sm:mt-16 w-full">
          {/* Vertical line: progressive draw scaleY from top center */}
          <div
            ref={lineRef}
            style={{ transformOrigin: "top center" }}
            className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 md:-translate-x-1/2 bg-gradient-to-b from-gold/50 via-gold to-gold/40 shadow-sm"
          />

          <div className="flex flex-col gap-8 md:gap-14">
            {dynamicEvents.map((item, idx) => (
              <div
                key={item.title}
                className={`relative flex w-full items-start md:items-center ${
                  idx % 2 === 0
                    ? "md:justify-start md:text-right"
                    : "md:justify-end md:text-left"
                }`}
              >
                {/* Timeline Dot Node */}
                <div
                  ref={(el) => {
                    nodeRefs.current[idx] = el;
                  }}
                  className="absolute left-4 md:left-1/2 top-2 md:top-1/2 h-4 w-4 sm:h-5 sm:w-5 -translate-x-1/2 md:-translate-y-1/2 rounded-full border-2 border-gold bg-emerald-regal shadow-md transition-all duration-300"
                />

                {/* Content Box */}
                <div
                  ref={(el) => {
                    itemRefs.current[idx] = el;
                  }}
                  className={`w-full pl-9 md:pl-0 md:w-[45%] transition-transform duration-300 ${
                    idx % 2 === 0
                      ? "md:mr-auto md:pr-10 md:text-right text-left"
                      : "md:ml-auto md:pl-10 text-left"
                  }`}
                >
                  <span className="font-display text-lg sm:text-2xl font-semibold text-bronze-dark">
                    {item.time}
                  </span>
                  <h3 className="mt-0.5 sm:mt-1 font-display text-lg sm:text-2xl md:text-3xl font-semibold italic text-emerald-regal">
                    {item.title}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium leading-relaxed text-charcoal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <LatticeBand className="absolute bottom-8 h-6 w-full max-w-2xl rotate-180 text-bronze opacity-40" />
    </section>
  );
}
