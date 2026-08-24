"use client";

import React from "react";
import ParticleField from "../ParticleField";

export default function CountdownBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#EAE0C6]">
      {/* Outer Rotating Ceremonial Clock Rings */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <svg
          viewBox="0 0 600 600"
          className="h-[75vh] max-h-[620px] w-auto text-bronze animate-spin-slow"
          aria-hidden="true"
        >
          <circle cx="300" cy="300" r="260" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 6" />
          <circle cx="300" cy="300" r="240" fill="none" stroke="currentColor" strokeWidth="0.75" />
          
          {/* Tick Marks around Clock Ring */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 300 + 230 * Math.cos(angle);
            const y1 = 300 + 230 * Math.sin(angle);
            const x2 = 300 + 240 * Math.cos(angle);
            const y2 = 300 + 240 * Math.sin(angle);
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.5" />
            );
          })}
        </svg>
      </div>

      {/* Inner Counter-Rotating Ring */}
      <div className="absolute inset-0 flex items-center justify-center opacity-25">
        <svg
          viewBox="0 0 600 600"
          className="h-[55vh] max-h-[480px] w-auto text-bronze animate-spin-reverse-slow"
          aria-hidden="true"
        >
          <circle cx="300" cy="300" r="190" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 8" />
          <circle cx="300" cy="300" r="170" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <ParticleField count={14} />
    </div>
  );
}
