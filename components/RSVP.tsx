"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import RevealText from "./RevealText";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

type Status = "idle" | "submitting" | "success";

export default function RSVP() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 40, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // NOTE: wire this up to your RSVP backend / form endpoint of choice
    // (e.g. Formspree, a serverless route, Google Sheets webhook).
    window.setTimeout(() => setStatus("success"), 900);
  }

  return (
    <section
      ref={sectionRef}
      id="rsvp"
      className="relative flex min-h-0 w-full flex-col items-center justify-center gap-6 sm:gap-10 overflow-hidden bg-cream px-4 sm:px-6 py-10 sm:py-16 md:py-20"
    >
      <div className="section-content relative z-10 text-center max-w-md">
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest2 text-emerald-regal">
          {t("rsvpLabel")}
        </span>
        <RevealText
          as="h2"
          className="mt-1.5 sm:mt-3 font-display text-2xl sm:text-4xl md:text-5xl font-semibold italic text-emerald-regal"
        >
          {t("rsvpHeading")}
        </RevealText>
      </div>

      <div
        ref={formRef}
        className="relative z-10 w-full max-w-md rounded-t-[70px] sm:rounded-t-[100px] border border-gold/30 bg-sand/90 p-5 sm:p-10 shadow-xl opacity-0"
      >
        <AnimatePresence mode="wait">
          {status !== "success" ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-4 sm:gap-5"
            >
              <Field label={t("fullNameLabel")} name="name" required />
              <Field label={t("phoneLabel")} name="phone" type="tel" required />
              <Field label={t("guestsLabel")} name="guests" type="number" min={1} defaultValue={1} />
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label
                  htmlFor="message"
                  className="text-[10px] uppercase tracking-wider sm:tracking-widest2 text-bronze font-medium"
                >
                  {t("personalNoteLabel")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full resize-none border-b border-bronze/40 bg-transparent py-2 font-body text-xs sm:text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/40 focus:border-emerald-regal"
                  placeholder={t("notePlaceholder")}
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="group relative mt-3 sm:mt-4 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-emerald-regal py-3 sm:py-3.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest2 text-gold-bright shadow-lg transition-transform hover:scale-105 disabled:opacity-60"
              >
                <span>{status === "submitting" ? t("submittingBtn") : t("submitBtn")}</span>
                {status !== "submitting" && (
                  <span
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                )}
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3 py-6 text-center"
            >
              <span className="text-3xl text-emerald-regal">&#10004;</span>
              <p className="font-display text-2xl italic text-emerald-regal font-medium">
                {t("successTitle")}
              </p>
              <p className="text-sm text-charcoal/80">
                {t("successMsg")}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  min,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: number;
  defaultValue?: string | number;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-[10px] uppercase tracking-widest2 text-bronze font-medium"
      >
        {label}
        {required && <span className="text-bronze-dark"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        min={min}
        defaultValue={defaultValue}
        className="w-full border-b border-bronze/40 bg-transparent py-2 font-body text-sm text-charcoal outline-none transition-colors focus:border-emerald-regal"
      />
    </div>
  );
}
