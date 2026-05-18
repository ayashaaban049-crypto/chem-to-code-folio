import { Briefcase, Pill, LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import digiliansLogo from "@/assets/digilians-logo.jpg";
import naliLogo from "@/assets/nali-logo.jpg";
import ultralabLogo from "@/assets/ultralab-logo.png";
import groupPhoto from "@/assets/digital-pioneers-group.png";
import expLab from "@/assets/exp-lab.jpg";

type Item = {
  role: string;
  org: string;
  period: string;
  logo: string;
  points: string[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  accentIcon?: LucideIcon;
};

const items: Item[] = [
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
    image: groupPhoto,
    imageAlt: "Group photo from the Digital Pioneers Initiative launch",
    imageCaption: "Commemorative photo from the Digital Pioneers Initiative launch",
  },
  {
    role: "Medical Representative",
    org: "Nali Pharma International",
    period: "2017 — 2019",
    logo: naliLogo,
    points: ["Sales and client relationship management across pharmaceutical accounts."],
    accentIcon: Pill,
  },
  {
    role: "Chemist",
    org: "Ultra Lab",
    period: "—",
    logo: ultralabLogo,
    points: ["Laboratory testing and analysis with strict protocol adherence."],
    image: expLab,
    imageAlt: "Glowing blue beaker with chemical formulas in a cosmic laboratory setting",
  },
];

// Floating decorative SVG icons (data & AI themed)
const DecorIcon = ({
  className,
  delay,
  duration,
  children,
}: {
  className: string;
  delay: string;
  duration: string;
  children: React.ReactNode;
}) => (
  <div
    aria-hidden
    className={`pointer-events-none absolute text-primary ${className}`}
    style={{
      animation: `expFloat ${duration} ease-in-out ${delay} infinite`,
    }}
  >
    {children}
  </div>
);

export const Experience = () => {
  return (
    <section id="experience" className="section-pad relative overflow-hidden">
      {/* keyframes for floating */}
      <style>{`
        @keyframes expFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
      `}</style>

      {/* Decorative background SVGs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Bar chart */}
        <DecorIcon className="top-[8%] left-[6%] opacity-[0.10]" delay="0s" duration="5s">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 21h18M6 17V9m6 8V5m6 12v-7" strokeLinecap="round" />
          </svg>
        </DecorIcon>
        {/* Neural network / brain */}
        <DecorIcon className="top-[22%] right-[8%] opacity-[0.09]" delay="1.2s" duration="6s">
          <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="5" cy="6" r="1.5" /><circle cx="5" cy="12" r="1.5" /><circle cx="5" cy="18" r="1.5" />
            <circle cx="12" cy="9" r="1.5" /><circle cx="12" cy="15" r="1.5" />
            <circle cx="19" cy="6" r="1.5" /><circle cx="19" cy="12" r="1.5" /><circle cx="19" cy="18" r="1.5" />
            <path d="M6.5 6L10.5 9M6.5 12L10.5 9M6.5 12L10.5 15M6.5 18L10.5 15M13.5 9L17.5 6M13.5 9L17.5 12M13.5 15L17.5 12M13.5 15L17.5 18" />
          </svg>
        </DecorIcon>
        {/* Scatter plot */}
        <DecorIcon className="top-[55%] left-[4%] opacity-[0.08]" delay="0.6s" duration="7s">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="4" cy="20" r="1" /><circle cx="7" cy="16" r="1" /><circle cx="10" cy="18" r="1" />
            <circle cx="12" cy="13" r="1" /><circle cx="15" cy="10" r="1" /><circle cx="18" cy="12" r="1" />
            <circle cx="20" cy="6" r="1" /><circle cx="9" cy="11" r="1" /><circle cx="16" cy="17" r="1" />
          </svg>
        </DecorIcon>
        {/* Python-like double snake outline */}
        <DecorIcon className="bottom-[14%] right-[6%] opacity-[0.10]" delay="2s" duration="6.5s">
          <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
            <path d="M9 3h4a3 3 0 0 1 3 3v4H8a3 3 0 0 0-3 3v2" />
            <path d="M15 21h-4a3 3 0 0 1-3-3v-4h8a3 3 0 0 0 3-3v-2" />
            <circle cx="10" cy="6" r=".6" fill="currentColor" /><circle cx="14" cy="18" r=".6" fill="currentColor" />
          </svg>
        </DecorIcon>
        {/* Circuit board */}
        <DecorIcon className="top-[40%] right-[18%] opacity-[0.07]" delay="1.6s" duration="5.5s">
          <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M3 7h6l2 2h4l2-2h4M3 17h6l2-2h4l2 2h4" />
            <circle cx="9" cy="7" r="1" /><circle cx="15" cy="17" r="1" />
          </svg>
        </DecorIcon>
        {/* Binary digits */}
        <DecorIcon className="bottom-[20%] left-[14%] opacity-[0.08] font-mono text-xs tracking-widest" delay="0.9s" duration="5s">
          <div className="leading-tight">
            01001010<br />10110011<br />00101101
          </div>
        </DecorIcon>
        {/* Pie chart */}
        <DecorIcon className="top-[12%] left-[42%] opacity-[0.07]" delay="2.4s" duration="6s">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
            <circle cx="12" cy="12" r="9" /><path d="M12 3v9l7 5" />
          </svg>
        </DecorIcon>
        {/* Line chart */}
        <DecorIcon className="bottom-[8%] left-[44%] opacity-[0.08]" delay="3s" duration="7s">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
            <path d="M3 17l5-6 4 3 4-7 5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </DecorIcon>
      </div>

      <div className="container-tight relative">
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
                <div className="glass-card overflow-hidden p-6">
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

                  {it.image && (
                    <figure className="mt-5">
                      <div className="overflow-hidden rounded-xl border border-border/70 shadow-glow-sm">
                        <img
                          src={it.image}
                          alt={it.imageAlt ?? ""}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      {it.imageCaption && (
                        <figcaption className="mt-2 text-center text-xs italic text-muted-foreground">
                          {it.imageCaption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
