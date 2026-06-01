import { ArrowRight, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "./MagneticButton";
import { Typewriter } from "./Typewriter";
import { useCountUp } from "@/hooks/useCountUp";
import heroCubes from "@/assets/hero-cubes.jpg";
import profile from "@/assets/aya-profile.png";
import { useLang } from "@/contexts/LanguageContext";

const CountStat = ({ n, suffix, text, label, delay }: { n?: number | null; suffix?: string; text?: string; label: string; delay: number; }) => {
  const { value, ref } = useCountUp(n ?? 0, 1200);
  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay, ease: "easeOut" }}>
      <div ref={ref} className="font-display text-2xl font-semibold text-foreground md:text-3xl">
        {n != null ? `${value}${suffix ?? ""}` : text}
      </div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </motion.div>
  );
};

export const Hero = () => {
  const { t, lang } = useLang();
  const headingWords = lang === "ar" ? ["آية", "شعبان", "جميل"] : ["Aya", "Shaaban", "Gameel"];

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32 pb-20 md:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img src={heroCubes} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>

      <div className="container-tight flex w-full flex-col items-center text-center">
        <span className="chip animate-fade-up">
          <Sparkles size={12} className="text-primary" />
          {t.hero.chip}
        </span>

        <div className="relative mt-10 animate-fade-in">
          <div className="relative h-[280px] w-[280px] md:h-[360px] md:w-[360px]">
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30 blur-3xl animate-pulse-glow" />
            <div className="absolute inset-4 rounded-full ring-glow" />
            <div className="absolute inset-6 overflow-hidden rounded-full border border-border/70">
              <img src={profile} alt={t.hero.portraitAlt} className="h-full w-full object-cover object-[50%_20%]" width={768} height={768} />
            </div>
            <div className="absolute -left-6 top-10 animate-float rounded-full border border-border/70 bg-surface/80 px-4 py-2 text-xs backdrop-blur-md">
              <span className="text-primary">●</span> {t.hero.floats.python}
            </div>
            <div className="absolute -right-4 bottom-14 animate-float rounded-full border border-border/70 bg-surface/80 px-4 py-2 text-xs backdrop-blur-md" style={{ animationDelay: "1.5s" }}>
              <span className="text-secondary">●</span> {t.hero.floats.powerbi}
            </div>
            <div className="absolute -bottom-2 left-8 animate-float rounded-full border border-border/70 bg-surface/80 px-4 py-2 text-xs backdrop-blur-md" style={{ animationDelay: "3s" }}>
              <span className="text-ember">●</span> {t.hero.floats.ml}
            </div>
          </div>
        </div>

        <h1 className="mt-12 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          {headingWords.map((w, i) => (
            <motion.span
              key={w + i}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={i === headingWords.length - 1 ? "inline-block glow-text mr-3" : "inline-block mr-3"}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-5 max-w-2xl text-lg text-muted-foreground md:text-xl min-h-[1.75rem]"
        >
          <Typewriter key={lang} text={t.hero.tagline} loop startDelay={900} speed={55} eraseSpeed={28} pauseEnd={2200} pauseStart={500} />
        </motion.p>

        <motion.div
          initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.95, ease: "easeOut" }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton>
            <Button asChild variant="hero" size="lg" className="group cta-pulse-once ripple">
              <a href="#portfolio">
                {t.hero.cta1}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 rtl:rotate-180" />
              </a>
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button asChild variant="glass" size="lg" className="border-draw">
              <a href="#contact">{t.hero.cta2}</a>
            </Button>
          </MagneticButton>
          <Button asChild variant="glass" size="lg" className="group text-foreground border-draw">
            <a href="/Aya_Shaaban_CV.pdf" download="Aya_Shaaban_CV.pdf">
              <Download size={16} className="animate-bounce transition-transform group-hover:translate-y-0.5" /> {t.hero.cta3}
            </a>
          </Button>
        </motion.div>

        <div className="mt-14 grid w-full max-w-md grid-cols-3 gap-6">
          {[
            { n: 5, suffix: "+", label: t.hero.stats.dashboards },
            { n: 4, suffix: "", label: t.hero.stats.years },
            { n: null, text: "AI", label: t.hero.stats.healthcare },
          ].map((s, i) => (
            <CountStat key={s.label} {...s} delay={1.1 + i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
};
