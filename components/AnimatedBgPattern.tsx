"use client";

import { EightPointStar } from "./IslamicMotifs";

interface AnimatedBgPatternProps {
  variant?: "cream" | "emerald" | "sand";
  showStarMandala?: boolean;
  showLatticeMesh?: boolean;
}

export default function AnimatedBgPattern({
  variant = "cream",
  showStarMandala = true,
  showLatticeMesh = true,
}: AnimatedBgPatternProps) {
  const isEmerald = variant === "emerald";
  const strokeColor = isEmerald ? "rgba(201, 162, 75, 0.15)" : "rgba(140, 109, 70, 0.18)";
  const starColor = isEmerald ? "text-gold/20" : "text-bronze/20";
  const glowGradient = isEmerald
    ? "radial-gradient(circle, rgba(201,162,75,0.18) 0%, transparent 70%)"
    : "radial-gradient(circle, rgba(201,162,75,0.22) 0%, transparent 68%)";

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      {/* 1. Slow Breathing Glow Orb */}
      <div
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-float-glow"
        style={{ background: glowGradient }}
      />

      {/* 2. Rotating Mandalas (Top Left & Bottom Right) */}
      {showStarMandala && (
        <>
          <div className="absolute -left-20 -top-20 h-72 w-72 animate-spin-slow opacity-60 sm:opacity-80">
            <EightPointStar className={`h-full w-full ${starColor}`} />
          </div>
          <div className="absolute -right-20 -bottom-20 h-72 w-72 animate-spin-reverse-slow opacity-60 sm:opacity-80">
            <EightPointStar className={`h-full w-full ${starColor}`} />
          </div>
        </>
      )}

      {/* 3. Floating Geometric Animated Line Mesh */}
      {showLatticeMesh && (
        <svg
          className="absolute inset-0 h-full w-full opacity-40 sm:opacity-60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id={`lattice-pattern-${variant}`}
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 30 0 L 60 30 L 30 60 L 0 30 Z"
                fill="none"
                stroke={strokeColor}
                strokeWidth="0.75"
              />
              <circle cx="30" cy="30" r="2" fill={strokeColor} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#lattice-pattern-${variant})`} />
        </svg>
      )}

      {/* 4. Ambient Sparkle Floating Dots */}
      <div className="absolute top-1/4 left-1/5 h-2 w-2 rounded-full bg-gold/40 animate-sparkle" style={{ animationDelay: "0s" }} />
      <div className="absolute top-3/4 left-4/5 h-1.5 w-1.5 rounded-full bg-gold/50 animate-sparkle" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 right-1/4 h-2 w-2 rounded-full bg-gold/30 animate-sparkle" style={{ animationDelay: "3s" }} />
    </div>
  );
}
