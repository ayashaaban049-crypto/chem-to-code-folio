import { FlaskConical, Brain, HeartPulse } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const pillars = [
  {
    icon: FlaskConical,
    title: "From Lab to Data",
    body: "A B.Sc. in Chemistry trained me in rigorous experimentation and analytical thinking — the same foundation I now apply to data.",
  },
  {
    icon: Brain,
    title: "Applied AI Mindset",
    body: "Currently training in Data Analytics & AI through the Digital Pioneers Initiative — exploring ML, statistics, and modern data tooling.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Focus",
    body: "Deeply interested in pharmacoinformatics and biomedical analytics — using data to improve healthcare outcomes.",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-pad">
      <div className="container-tight">
        <SectionHeading
          eyebrow="About me"
          title="A scientist who fell in love with data."
          description="I combine a chemist's discipline with a data analyst's curiosity — translating complex datasets into clear insight that supports real-world decisions."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <article key={p.title} className="glass-card p-7">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/30">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
