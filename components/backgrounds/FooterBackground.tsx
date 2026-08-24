"use client";

import React from "react";
import ParticleField from "../ParticleField";

export default function FooterBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#142D27]">
      {/* Ambient Lighting */}
      <div
        className="absolute left-1/2 top-1/3 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35 animate-float-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(243,223,168,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Hanging Celestial Lanterns / Lights Suspended from Top Edge */}
      <svg
        viewBox="0 0 1000 400"
        className="absolute top-0 left-0 h-48 sm:h-72 w-full text-gold-bright opacity-45"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Left Suspended Lantern */}
        <g transform="translate(180, 0)" className="animate-swing" style={{ animationDelay: "0s" }}>
          <line x1="0" y1="0" x2="0" y2="90" stroke="currentColor" strokeWidth="1" />
          {/* Lantern Shape */}
          <polygon points="0,90 14,110 8,140 -8,140 -14,110" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="0" cy="115" r="4" fill="currentColor" className="animate-pulse" />
        </g>

        {/* Center-Left Suspended Light */}
        <g transform="translate(360, 0)" className="animate-swing" style={{ animationDelay: "1.5s" }}>
          <line x1="0" y1="0" x2="0" y2="130" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
          <circle cx="0" cy="135" r="5" fill="currentColor" opacity="0.8" />
        </g>

        {/* Center-Right Suspended Light */}
        <g transform="translate(640, 0)" className="animate-swing" style={{ animationDelay: "0.8s" }}>
          <line x1="0" y1="0" x2="0" y2="130" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
          <circle cx="0" cy="135" r="5" fill="currentColor" opacity="0.8" />
        </g>

        {/* Right Suspended Lantern */}
        <g transform="translate(820, 0)" className="animate-swing" style={{ animationDelay: "2.2s" }}>
          <line x1="0" y1="0" x2="0" y2="90" stroke="currentColor" strokeWidth="1" />
          <polygon points="0,90 14,110 8,140 -8,140 -14,110" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="0" cy="115" r="4" fill="currentColor" className="animate-pulse" />
        </g>
      </svg>

      {/* Downward Floating Particles */}
      <ParticleField count={18} />
    </div>
  );
}
