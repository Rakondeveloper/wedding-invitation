// Hand-built SVG Islamic geometric motifs used throughout the site.
// Kept as inline SVG (not raster) so they stay crisp, themeable, and animatable.

import type { CSSProperties } from "react";

interface MotifProps {
  className?: string;
  style?: CSSProperties;
}

export function EightPointStar({ className = "", style }: MotifProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} fill="none">
      <g stroke="currentColor" strokeWidth="0.6">
        <path d="M50 6 L61 39 L94 39 L67 59 L78 92 L50 72 L22 92 L33 59 L6 39 L39 39 Z" />
      </g>
    </svg>
  );
}

export function ArchFrame({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 420"
      className={className}
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M2 418 V180 C2 90 70 24 150 24 C230 24 298 90 298 180 V418"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M28 418 V184 C28 108 82 52 150 52 C218 52 272 108 272 184 V418"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.55"
      />
    </svg>
  );
}

export function LatticeBand({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 40"
      className={className}
      fill="none"
      preserveAspectRatio="none"
    >
      <g stroke="currentColor" strokeWidth="0.7" opacity="0.7">
        {Array.from({ length: 20 }).map((_, i) => {
          const x = i * 20;
          return (
            <path
              key={i}
              d={`M${x} 20 L${x + 10} 4 L${x + 20} 20 L${x + 10} 36 Z`}
            />
          );
        })}
      </g>
    </svg>
  );
}

export function Crescent({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <path
        d="M62 12 C40 12 22 30 22 52 C22 74 40 92 62 92 C48 84 39 68 39 50 C39 32 48 20 62 12 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      <g stroke="currentColor" strokeWidth="0.8" opacity="0.6">
        <path d="M4 4 H40 M4 4 V40" />
        <circle cx="4" cy="4" r="3" />
        <path d="M20 4 Q20 20 4 20" />
      </g>
    </svg>
  );
}
