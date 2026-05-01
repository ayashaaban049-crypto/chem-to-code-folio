import { useEffect, useRef, useState } from "react";

export const useCountUp = (end: number, duration = 1400) => {
  const [value, setValue] = useState(0);
  const nodeRef = useRef<Element | null>(null);
  const started = useRef(false);

  const ref = (node: Element | null) => {
    nodeRef.current = node;
  };

  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(end);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(end * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);

  return { value, ref };
};
