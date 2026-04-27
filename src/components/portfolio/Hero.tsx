import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCubes from "@/assets/hero-cubes.jpg";
import profile from "@/assets/aya-profile.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-20 md:px-10"
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

      <div className="container-tight grid w-full items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        {/* Left: copy */}
        <div className="animate-fade-up">
          <span className="chip">
            <Sparkles size={12} className="text-primary" />
            Available for opportunities · Cairo, Egypt
          </span>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Aya Shaaban
            <br />
            <span className="glow-text">Khaleil</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-muted-foreground md:text-xl">
            Data Analytics Specialist · Applied AI &amp; Data Science Enthusiast
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground/90">
            Junior Data Analyst with a scientific background in Chemistry and ongoing training in
            Data Analytics &amp; AI. I turn complex datasets into clear, actionable insight that
            drives better decisions.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild variant="hero" size="lg" className="group">
              <a href="#portfolio">
                View My Work
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="glass" size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground">
              <a href="#about">
                <Download size={16} /> Download CV
              </a>
            </Button>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-6">
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

        {/* Right: profile */}
        <div className="relative mx-auto animate-fade-in delay-200">
          <div className="relative h-[340px] w-[340px] md:h-[420px] md:w-[420px]">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30 blur-3xl animate-pulse-glow" />
            <div className="absolute inset-4 rounded-full ring-glow" />
            <div className="absolute inset-6 overflow-hidden rounded-full border border-border/70">
              <img
                src={profile}
                alt="Portrait of Aya Shaaban Khaleil, Data Analyst"
                className="h-full w-full object-cover"
                width={768}
                height={768}
              />
            </div>
            {/* Floating chips */}
            <div className="absolute -left-4 top-12 animate-float rounded-full border border-border/70 bg-surface/80 px-4 py-2 text-xs backdrop-blur-md">
              <span className="text-primary">●</span> Python · Pandas
            </div>
            <div className="absolute -right-2 bottom-16 animate-float rounded-full border border-border/70 bg-surface/80 px-4 py-2 text-xs backdrop-blur-md" style={{ animationDelay: "1.5s" }}>
              <span className="text-secondary">●</span> Power BI
            </div>
            <div className="absolute -bottom-2 left-10 animate-float rounded-full border border-border/70 bg-surface/80 px-4 py-2 text-xs backdrop-blur-md" style={{ animationDelay: "3s" }}>
              <span className="text-ember">●</span> ML Fundamentals
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
