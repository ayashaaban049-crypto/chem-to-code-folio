import { useEffect } from "react";

/**
 * Intercepts clicks on in-page anchor links (href="#id") and plays
 * a smooth "page flip" transition before scrolling to the target.
 *
 * The flip is applied to the element with id "page-flip-root".
 */
export const usePageFlipNav = () => {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (href.length < 2) return;
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      const root = document.getElementById("page-flip-root");

      const scrollNow = () => {
        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        // Force instant scroll regardless of CSS scroll-behavior
        const html = document.documentElement;
        const prev = html.style.scrollBehavior;
        html.style.scrollBehavior = "auto";
        window.scrollTo({ top, behavior: "auto" });
        // Restore on next frame
        requestAnimationFrame(() => {
          html.style.scrollBehavior = prev;
        });
      };

      if (!root || reduce) {
        scrollNow();
        return;
      }

      // Flip out -> instant scroll -> flip in
      root.classList.remove("page-flip-in");
      root.classList.add("page-flipping");
      root.classList.add("page-flip-out");

      window.setTimeout(() => {
        scrollNow();
        root.classList.remove("page-flip-out");
        // Force reflow so the flip-in animation restarts cleanly
        void root.offsetWidth;
        root.classList.add("page-flip-in");
        window.setTimeout(() => {
          root.classList.remove("page-flip-in");
          root.classList.remove("page-flipping");
        }, 360);
      }, 350);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
};
