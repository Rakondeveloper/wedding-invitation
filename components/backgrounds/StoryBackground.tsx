"use client";

import React from "react";
import ParticleField from "../ParticleField";

export default function StoryBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#F3EBDD]">
      {/* Edge Botanical Branch Line Drawings */}
      <svg
        viewBox="0 0 1200 900"
        className="absolute inset-0 h-full w-full text-bronze opacity-30 animate-sway"
        aria-hidden="true"
      >
        {/* Left Side Flowing Branch */}
        <g transform="translate(-40, 150)">
          <path d="M 0 0 C 150 80 200 200 120 350 C 60 450 180 550 100 700" fill="none" stroke="currentColor" strokeWidth="1.2" />
          {/* Leaves */}
          <path d="M 60 40 Q 100 20 120 50 Q 80 80 60 40 Z" fill="currentColor" opacity="0.35" />
          <path d="M 140 120 Q 180 100 200 130 Q 160 160 140 120 Z" fill="currentColor" opacity="0.35" />
          <path d="M 160 260 Q 200 240 220 270 Q 180 300 160 260 Z" fill="currentColor" opacity="0.35" />
        </g>

        {/* Right Side Flowing Branch */}
        <g transform="translate(1240, 100) scale(-1, 1)">
          <path d="M 0 0 C 150 80 200 200 120 350 C 60 450 180 550 100 700" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M 60 40 Q 100 20 120 50 Q 80 80 60 40 Z" fill="currentColor" opacity="0.35" />
          <path d="M 140 120 Q 180 100 200 130 Q 160 160 140 120 Z" fill="currentColor" opacity="0.35" />
          <path d="M 160 260 Q 200 240 220 270 Q 180 300 160 260 Z" fill="currentColor" opacity="0.35" />
        </g>
      </svg>

      <ParticleField count={12} />
    </div>
  );
}
