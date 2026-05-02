import { useEffect, useRef, useState } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
  rot: number;
  vr: number;
};

export const CursorGlow = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
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

    const prevCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;
    let isHoverInteractive = false;

    const particles: Particle[] = [];
    // Iridescent pastel hues
    const hues = [200, 220, 260, 290, 320, 180, 50];

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const t = e.target as HTMLElement | null;
      isHoverInteractive = !!t?.closest('a, button, [role="button"], input, textarea, select, .ripple');
    };

    const spawnParticles = (x: number, y: number, count: number) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.2 + Math.random() * 0.6;
        const maxLife = 800 + Math.random() * 900;
        particles.push({
          x: x + (Math.random() - 0.5) * 8,
          y: y + (Math.random() - 0.5) * 8,
          vx: Math.cos(angle) * speed * 0.4,
          vy: Math.sin(angle) * speed * 0.4 + 0.15, // slight downward drift
          life: 0,
          maxLife,
          size: 1.2 + Math.random() * 2.2,
          hue: hues[Math.floor(Math.random() * hues.length)],
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.05,
        });
      }
    };

    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(40, now - last);
      last = now;

      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (wrapRef.current) {
        wrapRef.current.style.transform = `translate3d(${rx - 20}px, ${ry - 20}px, 0)`;
      }

      if (!reduce) {
        const baseCount = isHoverInteractive ? 4 : 2;
        spawnParticles(rx, ry + 4, baseCount);
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += dt;
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }
        const t = p.life / p.maxLife;
        const alpha = (1 - t) * 0.9;
        // gentle flutter
        p.vx += (Math.random() - 0.5) * 0.02;
        p.vy += 0.004; // gravity
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;

        const size = p.size * (1 - t * 0.4);
        const color = `hsl(${p.hue} 90% 70%)`;

        // Glow
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 95%, 75%, ${alpha * 0.35})`;
        ctx.arc(p.x, p.y, size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Sparkle (4-point star via two rotated rects)
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.fillRect(-size * 0.15, -size, size * 0.3, size * 2);
        ctx.fillRect(-size, -size * 0.15, size * 2, size * 0.3);
        ctx.restore();
        ctx.globalAlpha = 1;
      }
      ctx.globalCompositeOperation = "source-over";

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
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
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[99]"
      />
      <div
        ref={wrapRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-10 w-10"
        style={{ filter: "drop-shadow(0 0 6px hsl(var(--primary) / 0.6))" }}
      >
        <svg viewBox="0 0 40 40" width="40" height="40" style={{ overflow: "visible" }}>
          <g className={reduceMotion ? "" : "butterfly-wing-left"} style={{ transformBox: "fill-box", transformOrigin: "right center" }}>
            <path d="M20 20 C 8 6, 0 12, 4 22 C 6 28, 14 28, 20 22 Z" fill="hsl(var(--primary))" opacity="0.85" />
            <path d="M20 22 C 10 26, 4 30, 8 34 C 12 36, 18 30, 20 26 Z" fill="hsl(var(--secondary))" opacity="0.75" />
          </g>
          <g className={reduceMotion ? "" : "butterfly-wing-right"} style={{ transformBox: "fill-box", transformOrigin: "left center" }}>
            <path d="M20 20 C 32 6, 40 12, 36 22 C 34 28, 26 28, 20 22 Z" fill="hsl(var(--primary))" opacity="0.85" />
            <path d="M20 22 C 30 26, 36 30, 32 34 C 28 36, 22 30, 20 26 Z" fill="hsl(var(--secondary))" opacity="0.75" />
          </g>
          <ellipse cx="20" cy="22" rx="1.2" ry="6" fill="hsl(var(--foreground))" />
          <path d="M20 16 C 19 13, 17 12, 16 10" stroke="hsl(var(--foreground))" strokeWidth="0.8" fill="none" strokeLinecap="round" />
          <path d="M20 16 C 21 13, 23 12, 24 10" stroke="hsl(var(--foreground))" strokeWidth="0.8" fill="none" strokeLinecap="round" />
          <circle cx="16" cy="10" r="0.8" fill="hsl(var(--primary))" />
          <circle cx="24" cy="10" r="0.8" fill="hsl(var(--primary))" />
        </svg>
      </div>
    </>
  );
};
