import { BarChart3, Microscope, Users, Languages } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const groups = [
  {
    icon: BarChart3,
    title: "Technical",
    items: [
      "Data Analysis & Cleaning",
      "Exploratory Data Analysis (EDA)",
      "Statistical Analysis",
      "Python · NumPy · Pandas · Matplotlib",
      "Machine Learning Fundamentals",
      "Supervised & Unsupervised Learning",
      "SQL Basics",
      "Power BI & Excel Dashboards",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    icon: Microscope,
    title: "Pharmacoinformatics",
    items: [
      "Biomedical Data Analysis",
      "Drug Data Interpretation",
      "Clinical Dataset Analysis",
      "Healthcare Data Analytics",
    ],
  },
  {
    icon: Users,
    title: "Soft Skills",
    items: [
      "Analytical Thinking",
      "Problem Solving",
      "Communication",
      "Teamwork",
      "Time Management",
    ],
  },
  {
    icon: Languages,
    title: "Languages",
    items: ["Arabic — Native", "English — Excellent"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-pad">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Skills"
          title="Tools, methods, and instincts."
          description="A blend of analytical, scientific, and communication skills built across years of lab work and modern data training."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, gi) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
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
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                        delay: gi * 0.1 + i * 0.07,
                      }}
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
