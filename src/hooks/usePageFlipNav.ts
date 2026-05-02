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

      const scrollTo = () => {
        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
      };

      if (!root || reduce) {
        scrollTo();
        return;
      }

      // Flip out -> scroll -> flip in
      root.classList.add("page-flipping");
      root.classList.add("page-flip-out");

      window.setTimeout(() => {
        scrollTo();
        root.classList.remove("page-flip-out");
        root.classList.add("page-flip-in");
        window.setTimeout(() => {
          root.classList.remove("page-flip-in");
          root.classList.remove("page-flipping");
        }, 450);
      }, 350);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
};
