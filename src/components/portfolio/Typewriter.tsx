import { useEffect, useState } from "react";

export const Typewriter = ({
  text,
  speed = 45,
  startDelay = 200,
  className,
  loop = false,
  pauseEnd = 1800,
  pauseStart = 600,
  eraseSpeed = 25,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  loop?: boolean;
  pauseEnd?: number;
  pauseStart?: number;
  eraseSpeed?: number;
}) => {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOut(text);
      setDone(true);
      return;
    }

    let cancelled = false;
    let timer: number | undefined;

    const sleep = (ms: number) =>
      new Promise<void>((res) => {
        timer = window.setTimeout(res, ms);
      });

    const run = async () => {
      await sleep(startDelay);
      while (!cancelled) {
        // type
        for (let i = 1; i <= text.length; i++) {
          if (cancelled) return;
          setOut(text.slice(0, i));
          await sleep(speed);
        }
        setDone(true);
        if (!loop) return;
        await sleep(pauseEnd);
        // erase
        for (let i = text.length - 1; i >= 0; i--) {
          if (cancelled) return;
          setOut(text.slice(0, i));
          await sleep(eraseSpeed);
        }
        setDone(false);
        await sleep(pauseStart);
      }
    };

    run();
    return () => {
      cancelled = true;
      if (timer) window.clearTimeout(timer);
    };
  }, [text, speed, startDelay, loop, pauseEnd, pauseStart, eraseSpeed]);

  return (
    <span className={`${className ?? ""} ${done && !loop ? "" : "caret"}`}>{out}</span>
  );
};
