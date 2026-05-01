import { useEffect, useRef, useState } from "react";

export const CursorGlow = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) {
      setEnabled(false);
      return;
    }
    setReduceMotion(reduce);

    // Hide system cursor while butterfly is active
    const prevCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const tick = () => {
      // Smooth lerp / spring-like easing
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (wrapRef.current) {
        wrapRef.current.style.transform = `translate3d(${rx - 20}px, ${ry - 20}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.body.style.cursor = prevCursor;
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <style>{`
        @keyframes flapLeft {
          0%, 100% { transform: rotateY(0deg) scaleX(1); }
          50% { transform: rotateY(70deg) scaleX(0.55); }
        }
        @keyframes flapRight {
          0%, 100% { transform: rotateY(0deg) scaleX(1); }
          50% { transform: rotateY(-70deg) scaleX(0.55); }
        }
        .butterfly-wing-left {
          transform-origin: right center;
          animation: flapLeft 0.32s ease-in-out infinite;
        }
        .butterfly-wing-right {
          transform-origin: left center;
          animation: flapRight 0.32s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .butterfly-wing-left, .butterfly-wing-right { animation: none !important; }
        }
      `}</style>
      <div
        ref={wrapRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-10 w-10"
        style={{ filter: "drop-shadow(0 0 6px hsl(var(--primary) / 0.6))" }}
      >
        <svg viewBox="0 0 40 40" width="40" height="40" style={{ overflow: "visible" }}>
          {/* Left wing */}
          <g className={reduceMotion ? "" : "butterfly-wing-left"} style={{ transformBox: "fill-box", transformOrigin: "right center" }}>
            <path
              d="M20 20 C 8 6, 0 12, 4 22 C 6 28, 14 28, 20 22 Z"
              fill="hsl(var(--primary))"
              opacity="0.85"
            />
            <path
              d="M20 22 C 10 26, 4 30, 8 34 C 12 36, 18 30, 20 26 Z"
              fill="hsl(var(--secondary))"
              opacity="0.75"
            />
          </g>
          {/* Right wing */}
          <g className={reduceMotion ? "" : "butterfly-wing-right"} style={{ transformBox: "fill-box", transformOrigin: "left center" }}>
            <path
              d="M20 20 C 32 6, 40 12, 36 22 C 34 28, 26 28, 20 22 Z"
              fill="hsl(var(--primary))"
              opacity="0.85"
            />
            <path
              d="M20 22 C 30 26, 36 30, 32 34 C 28 36, 22 30, 20 26 Z"
              fill="hsl(var(--secondary))"
              opacity="0.75"
            />
          </g>
          {/* Body */}
          <ellipse cx="20" cy="22" rx="1.2" ry="6" fill="hsl(var(--foreground))" />
          {/* Antennae */}
          <path d="M20 16 C 19 13, 17 12, 16 10" stroke="hsl(var(--foreground))" strokeWidth="0.8" fill="none" strokeLinecap="round" />
          <path d="M20 16 C 21 13, 23 12, 24 10" stroke="hsl(var(--foreground))" strokeWidth="0.8" fill="none" strokeLinecap="round" />
          <circle cx="16" cy="10" r="0.8" fill="hsl(var(--primary))" />
          <circle cx="24" cy="10" r="0.8" fill="hsl(var(--primary))" />
        </svg>
      </div>
    </>
  );
};
