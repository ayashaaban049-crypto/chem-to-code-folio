import { LineChart, LayoutDashboard, PieChart, Cpu, Stethoscope, Brain, Bot } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: LineChart,
    title: "Data Analysis & Insights",
    desc: "Cleaning, analyzing, and extracting meaningful insights from raw datasets.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Development",
    desc: "Interactive dashboards in Power BI and Excel — built for clarity and decision-making.",
  },
  {
    icon: PieChart,
    title: "Data Visualization",
    desc: "Transforming complex numbers into clear visual stories anyone can read.",
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    desc: "Building, tuning, and evaluating predictive models with Python and scikit-learn.",
  },
  {
    icon: Brain,
    title: "Deep Learning",
    desc: "Designing neural networks for advanced pattern recognition and prediction tasks.",
  },
  {
    icon: Bot,
    title: "Agentic AI",
    desc: "Crafting autonomous AI agents that reason, plan, and act on real-world workflows.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Scientific Data",
    desc: "Specialized analysis tailored to biomedical and pharmaceutical datasets.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-pad">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Services"
          title="What I can do for you."
          description="End-to-end analytical support from messy data to a story your team can act on."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="glass-card group relative p-7"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="absolute right-6 top-6 font-display text-xs text-muted-foreground/60">
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
