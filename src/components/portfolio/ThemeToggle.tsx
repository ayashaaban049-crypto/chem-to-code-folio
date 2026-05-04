import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "theme";

const getInitialTheme = (): "dark" | "light" => {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return "dark";
};

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"dark" | "light">(getInitialTheme);
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggle = () => {
    setSpin(true);
    setTheme((t) => (t === "dark" ? "light" : "dark"));
    window.setTimeout(() => setSpin(false), 400);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-surface/60 text-foreground hover:border-primary/50 hover:text-primary"
    >
      <span
        style={{
          display: "inline-flex",
          transition: "transform 0.4s ease",
          transform: spin ? "rotate(360deg)" : "rotate(0deg)",
        }}
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </span>
    </button>
  );
};
