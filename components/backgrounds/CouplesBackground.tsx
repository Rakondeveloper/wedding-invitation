"use client";

import React from "react";
import ParticleField from "../ParticleField";

export default function CouplesBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-emerald-regal">
      {/* Soft Ambient Radial Lighting */}
      <div
        className="absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 animate-float-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,75,0.3) 0%, rgba(27,59,52,0.8) 60%, transparent 100%)",
        }}
      />

      {/* Central Rotating Geometric Star Ornament (120s slow rotation) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-25">
        <svg
          viewBox="0 0 500 500"
          className="h-[60vh] max-h-[550px] w-auto text-gold-bright animate-spin-reverse-slow"
          style={{ animationDuration: "120s" }}
          aria-hidden="true"
        >
          <polygon
            points="250,50 300,180 430,130 350,250 430,370 300,320 250,450 200,320 70,370 150,250 70,130 200,180"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="250" cy="250" r="140" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
          <circle cx="250" cy="250" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Botanical Corner Vines & Leaves Line Art */}
      <svg
        viewBox="0 0 1000 800"
        className="absolute inset-0 h-full w-full text-gold opacity-35 animate-sway"
        aria-hidden="true"
      >
        {/* Top-Left Botanical Vine */}
        <g transform="translate(20, 20)">
          <path d="M 0 0 C 80 120 180 160 300 120 C 220 200 120 220 0 300" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M 80 80 Q 110 50 140 70 Q 110 100 80 80 Z" fill="currentColor" opacity="0.4" />
          <path d="M 180 140 Q 210 110 240 130 Q 210 160 180 140 Z" fill="currentColor" opacity="0.4" />
        </g>

        {/* Top-Right Botanical Vine */}
        <g transform="translate(980, 20) scale(-1, 1)">
          <path d="M 0 0 C 80 120 180 160 300 120 C 220 200 120 220 0 300" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M 80 80 Q 110 50 140 70 Q 110 100 80 80 Z" fill="currentColor" opacity="0.4" />
          <path d="M 180 140 Q 210 110 240 130 Q 210 160 180 140 Z" fill="currentColor" opacity="0.4" />
        </g>
      </svg>

      {/* Upward Drifting Gold Particles */}
      <ParticleField count={18} />
    </div>
  );
}
