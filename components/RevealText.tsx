"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface RevealTextProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  split?: "chars" | "words" | "lines";
  delay?: number;
  start?: string;
  once?: boolean;
}

/**
 * Splits text and reveals it word-by-word (or char-by-char) as it scrolls
 * into view, with a soft blur + rise. Falls back to a plain opacity fade
 * for prefers-reduced-motion.
 */
export default function RevealText({
  children,
  as = "p",
  className = "",
  split = "words",
  delay = 0,
  start = "top 82%",
  once = true,
}: RevealTextProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      gsap.set(el, { opacity: 1 });
      return;
    }

    const typeSplit = new SplitType(el, {
      types: split === "chars" ? "chars,words" : split,
      tagName: "span",
    });

    const targets =
      split === "chars" ? typeSplit.chars : split === "lines" ? typeSplit.lines : typeSplit.words;

    if (!targets || targets.length === 0) return;

    gsap.set(targets, { opacity: 0, y: 24, filter: "blur(6px)" });
    gsap.set(el, { opacity: 1 });

    const tween = gsap.to(targets, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.9,
      delay,
      stagger: split === "chars" ? 0.02 : 0.045,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: once ? "play none none none" : "play none none reverse",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      typeSplit.revert();
    };
  }, [children, split, delay, start, once]);

  const Tag = as;
  return (
    <Tag ref={ref as never} className={`opacity-0 ${className}`}>
      {children}
    </Tag>
  );
}
