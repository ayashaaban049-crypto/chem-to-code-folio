import { FlaskConical, Brain, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Typewriter } from "./Typewriter";
import { useLang } from "@/contexts/LanguageContext";

const icons = [FlaskConical, Brain, HeartPulse];

export const About = () => {
  const { t, lang } = useLang();
  return (
    <section id="about" className="section-pad">
      <div className="container-tight">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl space-y-5 text-center text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center font-display text-xl text-foreground md:text-2xl"
        >
          <Typewriter key={lang} text={t.about.tagline} />
        </motion.p>

        <div className="grid gap-6 md:grid-cols-3">
          {t.about.pillars.map((p, i) => {
            const Icon = icons[i];
            const fromLeft = i === 0;
            const fromRight = i === t.about.pillars.length - 1;
            const x = fromLeft ? -60 : fromRight ? 60 : 0;
            const y = fromLeft || fromRight ? 0 : 30;
            return (
              <motion.article
                key={p.title}
                initial={{ x, y, opacity: 0 }} whileInView={{ x: 0, y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-7"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/30">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
