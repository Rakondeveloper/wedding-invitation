"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EightPointStar } from "./IslamicMotifs";
import { useLanguage } from "../context/LanguageContext";

export default function Loader({ onDone }: { onDone: () => void }) {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setProgress(100);
      const t = setTimeout(() => {
        setVisible(false);
        onDone();
      }, 300);
      return () => clearTimeout(t);
    }

    let raf: number;
    const start = performance.now();
    const durationMs = 2200;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / durationMs) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setVisible(false);
          onDone();
        }, 500);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
        >
          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              className="relative h-24 w-24 text-bronze"
              initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              >
                <EightPointStar className="h-full w-full text-bronze" />
              </motion.div>
            </motion.div>

            <div className="text-center">
              <p className="font-display text-xl italic tracking-widest2 text-emerald-regal font-medium">
                {t("heroTitle")}
              </p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-widest2 text-bronze">
                {t("loaderStatus")}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-display text-3xl font-medium text-emerald-regal tabular-nums">
                {progress}
              </span>
              <span className="text-xs font-medium text-bronze">%</span>
            </div>

            <div className="h-px w-40 overflow-hidden bg-bronze/20">
              <motion.div
                className="h-full bg-emerald-regal"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
