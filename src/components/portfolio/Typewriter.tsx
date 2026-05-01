import { useEffect, useState } from "react";

export const Typewriter = ({
  text,
  speed = 45,
  startDelay = 200,
  className,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
}) => {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOut(text);
      setDone(true);
      return;
    }
    let i = 0;
    let id: number;
    const start = window.setTimeout(() => {
      id = window.setInterval(() => {
        i++;
        setOut(text.slice(0, i));
        if (i >= text.length) {
          window.clearInterval(id);
          setDone(true);
        }
      }, speed);
    }, startDelay);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(id);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={`${className ?? ""} ${done ? "" : "caret"}`}>{out}</span>
  );
};
