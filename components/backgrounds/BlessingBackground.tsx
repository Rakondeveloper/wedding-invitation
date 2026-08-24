"use client";

import React from "react";
import { Crescent } from "../IslamicMotifs";
import ParticleField from "../ParticleField";

export default function BlessingBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Soft warm glow background */}
      <div
        className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 animate-float-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,75,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Floating Soft Crescent */}
      <div className="absolute right-[8%] top-[10%] h-16 w-16 text-bronze opacity-40 sm:h-24 sm:w-24 animate-float-slow">
        <Crescent className="h-full w-full filter drop-shadow-[0_0_12px_rgba(201,162,75,0.3)]" />
      </div>

      {/* Orbital Circles & Twinkling Stars */}
      <svg
        viewBox="0 0 800 600"
        className="absolute inset-0 h-full w-full text-bronze opacity-30"
        aria-hidden="true"
      >
        {/* Orbital Ring Lines */}
        <circle
          cx="400"
          cy="300"
          r="220"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeDasharray="4 6"
          className="animate-spin-slow"
        />
        <circle
          cx="400"
          cy="300"
          r="160"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />

        {/* Twinkling Star Motifs */}
        <g className="animate-sparkle" style={{ animationDelay: "0s" }}>
          <polygon points="180,120 183,127 190,130 183,133 180,140 177,133 170,130 177,127" fill="currentColor" />
        </g>
        <g className="animate-sparkle" style={{ animationDelay: "1s" }}>
          <polygon points="620,160 623,167 630,170 623,173 620,180 617,173 610,170 617,167" fill="currentColor" />
        </g>
        <g className="animate-sparkle" style={{ animationDelay: "2s" }}>
          <polygon points="120,420 123,427 130,430 123,433 120,440 117,433 110,430 117,427" fill="currentColor" />
        </g>
        <g className="animate-sparkle" style={{ animationDelay: "1.5s" }}>
          <polygon points="680,440 683,447 690,450 683,453 680,460 677,453 670,450 677,447" fill="currentColor" />
        </g>
      </svg>

      <ParticleField count={12} />
    </div>
  );
}
