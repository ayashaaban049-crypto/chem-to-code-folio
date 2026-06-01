import { BarChart3, Microscope, Users, Languages } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/contexts/LanguageContext";

const groupIcons = [BarChart3, Microscope, Users, Languages];

export const Skills = () => {
  const { t } = useLang();
  return (
    <section id="skills" className="section-pad">
      <div className="container-tight">
        <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} description={t.skills.description} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.skills.groups.map((g, gi) => {
            const Icon = groupIcons[gi];
            return (
              <motion.div
                key={g.title}
                initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: gi * 0.1, ease: "easeOut" }}
                className="glass-card p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow-sm">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{g.title}</h3>
                </div>
                <ul className="space-y-2">
                  {g.items.map((it, i) => (
                    <motion.li
                      key={it}
                      initial={{ scale: 0.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18, delay: gi * 0.1 + i * 0.07 }}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {it}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
