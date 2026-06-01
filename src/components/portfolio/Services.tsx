import { LineChart, LayoutDashboard, PieChart, Cpu, Stethoscope, Brain, Bot } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/contexts/LanguageContext";

const icons = [LineChart, LayoutDashboard, PieChart, Cpu, Brain, Bot, Stethoscope];

export const Services = () => {
  const { t } = useLang();
  return (
    <section id="services" className="section-pad">
      <div className="container-tight">
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} description={t.services.description} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <article key={s.title} className="glass-card group relative p-7" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="absolute right-6 top-6 font-display text-xs text-muted-foreground/60 rtl:left-6 rtl:right-auto">
                  0{i + 1}
                </div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/30 transition-all group-hover:bg-gradient-primary group-hover:text-primary-foreground group-hover:shadow-glow-sm">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
