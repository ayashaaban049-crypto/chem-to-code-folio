import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/contexts/LanguageContext";

export const Education = () => {
  const { t } = useLang();
  return (
    <section id="education" className="section-pad">
      <div className="container-tight">
        <SectionHeading eyebrow={t.education.eyebrow} title={t.education.title} />

        <div className="grid gap-6 md:grid-cols-2">
          {t.education.items.map((e) => (
            <article key={e.title} className="glass-card flex gap-5 p-7">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow-sm">
                <GraduationCap size={22} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">{e.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.org} · {e.year}</p>
                <p className="mt-2 text-sm text-primary">{e.grade}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
