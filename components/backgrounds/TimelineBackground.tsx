"use client";

import React from "react";

export default function TimelineBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#EAE0C6]">
      {/* Constellation Nodes & Ultra-thin Connecting Lines */}
      <svg
        viewBox="0 0 1000 800"
        className="absolute inset-0 h-full w-full text-bronze opacity-30"
        aria-hidden="true"
      >
        {/* Constellation Line Paths */}
        <polyline points="150,100 220,180 180,300 280,420" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
        <polyline points="850,120 780,240 820,380 720,500" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />

        {/* Pulsing Nodes */}
        <g className="animate-sparkle" style={{ animationDelay: "0.2s" }}>
          <circle cx="150" cy="100" r="3" fill="currentColor" />
          <circle cx="150" cy="100" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </g>
        <g className="animate-sparkle" style={{ animationDelay: "1.2s" }}>
          <circle cx="220" cy="180" r="2.5" fill="currentColor" />
        </g>
        <g className="animate-sparkle" style={{ animationDelay: "0.7s" }}>
          <circle cx="180" cy="300" r="3.5" fill="currentColor" />
        </g>
        <g className="animate-sparkle" style={{ animationDelay: "1.8s" }}>
          <circle cx="850" cy="120" r="3" fill="currentColor" />
          <circle cx="850" cy="120" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </g>
        <g className="animate-sparkle" style={{ animationDelay: "0.5s" }}>
          <circle cx="780" cy="240" r="2.5" fill="currentColor" />
        </g>
        <g className="animate-sparkle" style={{ animationDelay: "1.4s" }}>
          <circle cx="820" cy="380" r="3.5" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}
