"use client";

import React from "react";
import ParticleField from "../ParticleField";

export default function HeroBackground({
  activeTab = "bais",
}: {
  activeTab?: "bais" | "nishad";
}) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Soft warm gold halo background */}
      <div
        className="absolute left-1/2 top-[42%] h-[75vh] w-[75vh] -translate-x-1/2 -translate-y-1/2 rounded-full animate-float-glow transition-all duration-700"
        style={{
          background:
            activeTab === "bais"
              ? "radial-gradient(circle, rgba(201,162,75,0.25) 0%, rgba(239,232,216,0.6) 45%, rgba(245,238,223,1) 100%)"
              : "radial-gradient(circle, rgba(27,59,52,0.18) 0%, rgba(201,162,75,0.2) 45%, rgba(245,238,223,1) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Ceremonial Mihrab Arch Vector Composition */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 600 800"
          className="h-[65vh] sm:h-[85vh] max-h-[740px] w-auto text-bronze opacity-40 transition-opacity duration-700"
          aria-hidden="true"
        >
          {/* Outer Arch Frame */}
          <path
            d="M 100 800 L 100 300 A 200 200 0 0 1 500 300 L 500 800"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* Inner Arch Frame */}
          <path
            d="M 120 800 L 120 310 A 180 180 0 0 1 480 310 L 480 800"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />

          {/* Tab 1: Floral Arch Crown Accent */}
          {activeTab === "bais" ? (
            <g className="transition-all duration-700">
              <circle
                cx="300"
                cy="120"
                r="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="animate-spin-slow"
              />
              <circle
                cx="300"
                cy="120"
                r="36"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                strokeDasharray="3 3"
                className="animate-spin-reverse-slow"
              />
              <path
                d="M 300 70 Q 280 110 300 150 Q 320 110 300 70 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
              />
            </g>
          ) : (
            /* Tab 2: Geometric Star Arch Crown Accent */
            <g className="transition-all duration-700">
              <polygon
                points="300,72 312,108 348,120 312,132 300,168 288,132 252,120 288,108"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="animate-spin-slow"
              />
              <circle
                cx="300"
                cy="120"
                r="42"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                strokeDasharray="2 4"
                className="animate-spin-reverse-slow"
              />
            </g>
          )}
        </svg>
      </div>

      {/* Floating particles */}
      <ParticleField count={16} />
    </div>
  );
}
