import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const showArabicSoon = () =>
  toast("Arabic version coming soon!", {
    description: "النسخة العربية قادمة قريباً!",
    duration: 3500,
  });

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#freelancing", label: "Freelancing" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-5",
      )}
    >
      <div
        className={cn(
          "container-tight flex items-center justify-between rounded-full border px-5 transition-all duration-500",
          scrolled
            ? "border-border/70 bg-surface/70 backdrop-blur-xl py-2 shadow-elevated"
            : "border-transparent bg-transparent py-2",
        )}
      >
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary shadow-glow-sm">
            <span className="text-sm font-bold text-primary-foreground">A</span>
          </span>
          <span className="hidden sm:inline">Aya<span className="text-primary">.</span></span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-underline rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={showArabicSoon}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-surface/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:bg-surface-elevated hover:text-foreground hover:shadow-glow-sm"
            aria-label="Switch to Arabic"
          >
            <Globe size={14} className="text-primary" />
            العربية
          </button>
          <ThemeToggle />
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <a href="#contact">Hire me</a>
          </Button>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-surface/60 lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="container-tight mt-2 lg:hidden">
          <div className="rounded-2xl border border-border/70 bg-surface/90 p-3 backdrop-blur-xl">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-surface-elevated hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                showArabicSoon();
              }}
              className="mt-1 flex w-full items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-surface-elevated hover:text-foreground"
            >
              <Globe size={14} className="text-primary" />
              العربية
            </button>
          </div>
        </div>
      )}
    </motion.header>
  );
};
