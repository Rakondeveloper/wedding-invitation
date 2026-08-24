"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CountdownBackground from "./backgrounds/CountdownBackground";
import RevealText from "./RevealText";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

// Wedding: Saturday 29 August 2026, 3:00 PM IST.
const TARGET = new Date("2026-08-29T16:00:00+05:30").getTime();

function getRemaining() {
  const diff = Math.max(0, TARGET - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function Ring({
  value,
  max,
  label,
}: {
  value: number;
  max: number;
  label: string;
}) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.min(1, value / max);
  const offset = circumference * (1 - pct);

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <div className="relative h-20 w-20 sm:h-32 sm:w-32">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="rgba(140,109,70,0.25)"
            strokeWidth="3"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="url(#goldRing)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 0.6s ease" }}
          />
          <defs>
            <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6B5335" />
              <stop offset="100%" stopColor="#C9A24B" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-display text-2xl font-semibold text-emerald-regal sm:text-4xl">
          {value}
        </div>
      </div>
      <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest2 text-bronze-dark">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const { t } = useLanguage();
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
    setTime(getRemaining());
    const id = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrapRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="countdown"
      className="full-width-section relative flex min-h-0 w-full flex-col items-center justify-center gap-6 sm:gap-12 overflow-hidden bg-[#EAE0C6] px-4 sm:px-6 py-10 sm:py-16 md:py-20"
    >
      <CountdownBackground />

      <div className="section-content relative z-10 text-center max-w-md">
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest2 text-emerald-regal">
          {t("countdownLabel")}
        </span>
        <RevealText
          as="h2"
          className="mt-1.5 sm:mt-3 font-display text-2xl sm:text-4xl md:text-5xl font-semibold italic text-emerald-regal"
        >
          {t("countdownHeading")}
        </RevealText>
      </div>

      <div
        ref={wrapRef}
        className="section-content relative z-10 flex flex-wrap items-center justify-center gap-3 sm:gap-8 opacity-0"
      >
        <Ring value={mounted ? time.days : 0} max={60} label={t("unitDays")} />
        <Ring value={mounted ? time.hours : 0} max={24} label={t("unitHours")} />
        <Ring value={mounted ? time.minutes : 0} max={60} label={t("unitMins")} />
        <Ring value={mounted ? time.seconds : 0} max={60} label={t("unitSecs")} />
      </div>
    </section>
  );
}

