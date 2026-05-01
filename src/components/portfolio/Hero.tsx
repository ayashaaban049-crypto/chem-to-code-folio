import { ArrowRight, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "./MagneticButton";
import heroCubes from "@/assets/hero-cubes.jpg";
import profile from "@/assets/aya-profile.png";

const headingWords = ["Aya", "Shaaban", "Gameel"];

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32 pb-20 md:px-10"
    >
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src={heroCubes}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>

      <div className="container-tight flex w-full flex-col items-center text-center">
        <span className="chip animate-fade-up">
          <Sparkles size={12} className="text-primary" />
          Available for opportunities · Cairo, Egypt
        </span>

        {/* Centered profile */}
        <div className="relative mt-10 animate-fade-in">
          <div className="relative h-[280px] w-[280px] md:h-[360px] md:w-[360px]">
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30 blur-3xl animate-pulse-glow" />
            <div className="absolute inset-4 rounded-full ring-glow" />
            <div className="absolute inset-6 overflow-hidden rounded-full border border-border/70">
              <img
                src={profile}
                alt="Portrait of Aya Shaaban Gameel, Data Analyst"
                className="h-full w-full object-cover object-[50%_20%]"
                width={768}
                height={768}
              />
            </div>
            {/* Floating chips */}
            <div className="absolute -left-6 top-10 animate-float rounded-full border border-border/70 bg-surface/80 px-4 py-2 text-xs backdrop-blur-md">
              <span className="text-primary">●</span> Python · Pandas
            </div>
            <div className="absolute -right-4 bottom-14 animate-float rounded-full border border-border/70 bg-surface/80 px-4 py-2 text-xs backdrop-blur-md" style={{ animationDelay: "1.5s" }}>
              <span className="text-secondary">●</span> Power BI
            </div>
            <div className="absolute -bottom-2 left-8 animate-float rounded-full border border-border/70 bg-surface/80 px-4 py-2 text-xs backdrop-blur-md" style={{ animationDelay: "3s" }}>
              <span className="text-ember">●</span> ML Fundamentals
            </div>
          </div>
        </div>

        {/* Name & title below */}
        <h1 className="mt-12 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          {headingWords.map((w, i) => (
            <motion.span
              key={w}
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
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-5 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Data Analytics Specialist · Applied AI &amp; Data Analytics Enthusiast
        </motion.p>

        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.95, ease: "easeOut" }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton>
            <Button asChild variant="hero" size="lg" className="group cta-pulse-once">
              <a href="#portfolio">
                View My Work
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button asChild variant="glass" size="lg" className="border-draw">
              <a href="#contact">Contact Me</a>
            </Button>
          </MagneticButton>
          <Button asChild variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground border-draw">
            <a href="#about">
              <Download size={16} /> Download CV
            </a>
          </Button>
        </motion.div>

        <div className="mt-14 grid w-full max-w-md grid-cols-3 gap-6">
          {[
            { k: "5+", v: "Dashboards" },
            { k: "4", v: "Years science" },
            { k: "AI", v: "+ Healthcare" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-2xl font-semibold text-foreground md:text-3xl">{s.k}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
