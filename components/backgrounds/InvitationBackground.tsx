"use client";

import React from "react";
import ParticleField from "../ParticleField";

export default function InvitationBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#E4D7BD]">
      {/* Soft Wave Silk Trails */}
      <svg
        viewBox="0 0 1200 600"
        className="absolute inset-0 h-full w-full text-bronze opacity-25 animate-wave-silk"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 0 150 Q 300 80 600 200 T 1200 150 L 1200 600 L 0 600 Z"
          fill="rgba(201, 162, 75, 0.05)"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <path
          d="M 0 250 Q 400 350 800 220 T 1200 300"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="6 6"
        />
        <path
          d="M 0 380 Q 350 280 700 420 T 1200 350"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
        />
      </svg>

      {/* Gentle Diagonal Shimmer Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "linear-gradient(135deg, rgba(245,238,223,0) 0%, rgba(243,223,168,0.3) 50%, rgba(245,238,223,0) 100%)",
        }}
      />

      <ParticleField count={10} />
    </div>
  );
}
