"use client";

import React from "react";

export default function VenueBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#E8DDCC]">
      {/* Architectural Grid Lines Overlay */}
      <svg
        viewBox="0 0 1000 600"
        className="absolute inset-0 h-full w-full text-bronze opacity-20"
        aria-hidden="true"
      >
        {/* Subtle Grid Lines */}
        <defs>
          <pattern id="archGrid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#archGrid)" />

        {/* Slow Rotating Compass Motif in Top Right */}
        <g transform="translate(850, 100)" className="animate-spin-slow" style={{ animationDuration: "120s" }}>
          <circle cx="0" cy="0" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="0" cy="0" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <path d="M 0 -55 L 0 55 M -55 0 L 55 0" stroke="currentColor" strokeWidth="0.75" />
          <polygon points="0,-48 6,-10 0,0 -6,-10" fill="currentColor" opacity="0.6" />
          <polygon points="0,48 6,10 0,0 -6,10" fill="currentColor" opacity="0.3" />
        </g>

        {/* Route Path Line Drawing Effect */}
        <path
          d="M 100 500 C 250 420 400 480 600 350 S 800 250 900 150"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="6 6"
        />
      </svg>
    </div>
  );
}
