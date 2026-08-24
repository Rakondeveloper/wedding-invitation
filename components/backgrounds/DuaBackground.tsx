"use client";

import React from "react";
import ParticleField from "../ParticleField";

export default function DuaBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#F3EBDD]">
      {/* Soft Warm Radial Halo */}
      <div
        className="absolute left-1/2 top-1/2 h-[55vh] w-[55vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35 animate-float-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,75,0.25) 0%, transparent 70%)",
        }}
      />

      {/* Large Translucent Islamic Star Motif */}
      <div className="absolute inset-0 flex items-center justify-center opacity-25">
        <svg
          viewBox="0 0 500 500"
          className="h-[55vh] max-h-[480px] w-auto text-bronze animate-spin-slow"
          style={{ animationDuration: "140s" }}
          aria-hidden="true"
        >
          {/* 8-Point Star Mandala */}
          <g transform="translate(250, 250)">
            <rect x="-120" y="-120" width="240" height="240" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <rect x="-120" y="-120" width="240" height="240" fill="none" stroke="currentColor" strokeWidth="0.75" transform="rotate(45)" />
            <circle cx="0" cy="0" r="160" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="0" cy="0" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </g>
        </svg>
      </div>

      <ParticleField count={10} />
    </div>
  );
}
