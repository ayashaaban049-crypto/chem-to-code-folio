import { Briefcase } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import digiliansLogo from "@/assets/digilians-logo.jpg";
import naliLogo from "@/assets/nali-logo.jpg";
import ultralabLogo from "@/assets/ultralab-logo.png";

const items = [
  {
    role: "Junior Data Analyst",
    org: "Digital Pioneers Initiative — MCIT & Military Technical College",
    period: "2025 — Present",
    logo: digiliansLogo,
    points: [
      "Data analysis using Python, SQL, Excel and Power BI",
      "Machine learning fundamentals and insight extraction",
      "Data cleaning, feature engineering and visualization",
    ],
  },
  {
    role: "Medical Representative",
    org: "Nali Pharma International",
    period: "2017 — 2019",
    logo: naliLogo,
    points: ["Sales and client relationship management across pharmaceutical accounts."],
  },
  {
    role: "Chemist",
    org: "Ultra Lab",
    period: "—",
    logo: ultralabLogo,
    points: ["Laboratory testing and analysis with strict protocol adherence."],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-pad">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Experience"
          title="A path from lab bench to dataset."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-6" />

          <div className="space-y-6">
            {items.map((it) => (
              <div key={it.role} className="relative pl-12 md:pl-16">
                <span className="absolute left-0 top-3 grid h-9 w-9 place-items-center rounded-full border border-border bg-surface shadow-glow-sm md:left-2">
                  <Briefcase size={14} className="text-primary" />
                </span>
                <div className="glass-card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      {it.logo && (
                        <img
                          src={it.logo}
                          alt={`${it.org} logo`}
                          className="h-12 w-12 shrink-0 rounded-lg border border-border bg-white object-contain p-1"
                          loading="lazy"
                        />
                      )}
                      <div>
                        <h3 className="font-display text-lg font-semibold">{it.role}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{it.org}</p>
                      </div>
                    </div>
                    <span className="chip border-primary/30 text-primary">{it.period}</span>
                  </div>
                  <ul className="mt-4 space-y-1.5">
                    {it.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
