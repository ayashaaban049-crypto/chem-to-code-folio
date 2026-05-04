import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const _storedTheme = localStorage.getItem("theme");
if (_storedTheme === "light") {
  document.documentElement.classList.remove("dark");
} else {
  document.documentElement.classList.add("dark");
}

// Global ripple effect for any element with the .ripple class
if (typeof window !== "undefined") {
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    const host = target.closest(".ripple") as HTMLElement | null;
    if (!host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = host.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const dot = document.createElement("span");
    dot.className = "ripple-dot";
    dot.style.width = dot.style.height = `${size}px`;
    dot.style.left = `${e.clientX - rect.left}px`;
    dot.style.top = `${e.clientY - rect.top}px`;
    host.appendChild(dot);
    window.setTimeout(() => dot.remove(), 750);
  });
}

createRoot(document.getElementById("root")!).render(<App />);
