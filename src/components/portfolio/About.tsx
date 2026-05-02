import { FlaskConical, Brain, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Typewriter } from "./Typewriter";

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
          description="Junior Data Analyst with a strong scientific background in Chemistry and ongoing training in Data Analytics and Artificial Intelligence."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl space-y-5 text-center text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          <p>
            Hi, I'm Aya! I am a Junior Data Analyst with a strong scientific background in Chemistry
            and ongoing training in Data Analytics and Artificial Intelligence. I combine my expertise
            as a chemist with data analysis skills to extract meaningful insights and support
            data-driven decision-making.
          </p>
          <p>
            I am skilled in data analysis, statistical modeling, Python, and machine learning
            fundamentals, with the ability to work with complex datasets and translate them into
            actionable insights. With a Bachelor's degree in Science (Chemistry), I apply analytical
            thinking, experimentation, and problem-solving to real-world data challenges.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center font-display text-xl text-foreground md:text-2xl"
        >
          <Typewriter text="Turning data into decisions." />
        </motion.p>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            const fromLeft = i === 0;
            const fromRight = i === pillars.length - 1;
            const x = fromLeft ? -60 : fromRight ? 60 : 0;
            const y = fromLeft || fromRight ? 0 : 30;
            return (
              <motion.article
                key={p.title}
                initial={{ x, y, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
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
