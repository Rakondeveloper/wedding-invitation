"use client";

import { useEffect, useRef, useState } from "react";

interface LuxuryVideoBackgroundProps {
  mp4Src?: string;
  webmSrc?: string;
  posterSrc: string;
  overlayOpacity?: number;
  className?: string;
  children?: React.ReactNode;
}

export default function LuxuryVideoBackground({
  mp4Src = "/videos/islamic_luxury_hero.mp4",
  webmSrc = "/videos/islamic_luxury_hero.webm",
  posterSrc,
  overlayOpacity = 0.4,
  className = "",
  children,
}: LuxuryVideoBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // 1. Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsReducedMotion(true);
      return;
    }

    // 2. Check low-bandwidth / save-data
    const connection = (navigator as unknown as { connection?: { saveData?: boolean } }).connection;
    if (connection?.saveData) {
      setIsReducedMotion(true);
      return;
    }

    // 3. Intersection Observer to load video lazily when in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldLoadVideo && videoRef.current && !isReducedMotion) {
      videoRef.current.play().catch(() => {
        // Fall back gracefully if autoplay is blocked by browser policy
        setIsVideoLoaded(false);
      });
    }
  }, [shouldLoadVideo, isReducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Fallback Poster Image */}
      <img
        src={posterSrc}
        alt="Islamic Luxury Atmosphere"
        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Optimized HTML5 Video */}
      {!isReducedMotion && shouldLoadVideo && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          onCanPlay={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          {mp4Src && <source src={mp4Src} type="video/mp4" />}
        </video>
      )}

      {/* Atmospheric Volumetric Soft Glow Overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cream/90 via-transparent to-cream/90"
        style={{ opacity: overlayOpacity }}
      />

      {/* Ambient Gold Bokeh Canvas overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />

      {/* Content Container */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
