import { ArrowUpRight, Briefcase, Sparkles, Globe2, Languages, Building2, Handshake, Trees } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import decorAnalytics from "@/assets/decor-analytics.jpg";

type Platform = {
  name: string;
  tagline: string;
  desc: string;
  icon: typeof Briefcase;
  /** Tailwind gradient classes for the card header background */
  bg: string;
  /** Tailwind text color class for the icon + logo wordmark */
  brand: string;
  /** Hex/rgba glow color used inline for the radial highlight */
  glow: string;
  link: string;
};

const platforms: Platform[] = [
  {
    name: "Upwork",
    tagline: "Top-rated freelance marketplace",
    desc: "Hire me on Upwork for data analytics, dashboards and BI projects with secure milestones and clear deliverables.",
    icon: Briefcase,
    bg: "from-emerald-950 via-emerald-900/60 to-slate-950",
    brand: "text-emerald-400",
    glow: "rgba(16,185,129,0.35)",
    link: "https://www.upwork.com/",
  },
  {
    name: "Fiverr",
    tagline: "Productized data services",
    desc: "Order ready-to-go gigs — Excel cleaning, Power BI dashboards, EDA reports and ML prototypes, delivered fast.",
    icon: Sparkles,
    bg: "from-lime-950 via-green-900/60 to-slate-950",
    brand: "text-lime-400",
    glow: "rgba(132,204,22,0.35)",
    link: "https://www.fiverr.com/",
  },
  {
    name: "Freelancer",
    tagline: "Global project bidding",
    desc: "Reach me on Freelancer.com for custom data analysis, statistical modeling and machine learning engagements.",
    icon: Globe2,
    bg: "from-sky-950 via-blue-900/60 to-slate-950",
    brand: "text-sky-400",
    glow: "rgba(56,189,248,0.35)",
    link: "https://www.freelancer.com/",
  },
  {
    name: "Nafezly",
    tagline: "Arabic freelance network",
    desc: "Connect with me on Nafezly for data analytics, BI dashboards and AI-driven projects across the Arabic-speaking market.",
    icon: Languages,
    bg: "from-fuchsia-950 via-purple-900/60 to-slate-950",
    brand: "text-fuchsia-400",
    glow: "rgba(217,70,239,0.35)",
    link: "https://nafezly.com/u/aya_shaaban",
  },
  {
    name: "Mostaql",
    tagline: "MENA freelance marketplace",
    desc: "Hire me on Mostaql for end-to-end data analysis, reporting and machine learning solutions tailored for MENA businesses.",
    icon: Building2,
    bg: "from-green-950 via-emerald-900/60 to-slate-950",
    brand: "text-green-400",
    glow: "rgba(34,197,94,0.35)",
    link: "https://mostaql.com/u/aya_gameel94",
  },
  {
    name: "Khamsat",
    tagline: "Micro-services for data work",
    desc: "Order quick data services on Khamsat — cleaning, visualization, Excel automation and short analytics deliverables.",
    icon: Handshake,
    bg: "from-orange-950 via-blue-950/70 to-slate-950",
    brand: "text-orange-400",
    glow: "rgba(249,115,22,0.35)",
    link: "https://khamsat.com/user/aya_shaaban94",
  },
  {
    name: "Freelance Yard",
    tagline: "Curated freelance community",
    desc: "Reach me on Freelance Yard for tailored data analytics and AI engagements with a focus on quality and long-term work.",
    icon: Trees,
    bg: "from-violet-950 via-indigo-900/60 to-slate-950",
    brand: "text-violet-400",
    glow: "rgba(139,92,246,0.35)",
    link: "https://freelanceyard.com/en/account/profile",
  },
];

export const Freelancing = () => {
  return (
    <section id="freelancing" className="section-pad relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-72 max-w-5xl opacity-30 blur-2xl"
        style={{
          backgroundImage: `url(${decorAnalytics})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="container-tight relative">
        <SectionHeading
          eyebrow="Freelancing Platforms"
          title="Work with me online."
          description="I'm available on the leading freelance platforms — pick the one you already use and let's build something with data."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {platforms.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card group relative flex flex-col overflow-hidden"
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.bg}`}
                >
                  {/* Subtle radial brand glow */}
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(ellipse at 30% 30%, ${p.glow}, transparent 65%)`,
                    }}
                  />
                  {/* Faint grid texture */}
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />

                  {/* Centered icon + wordmark */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-transform duration-500 group-hover:scale-110 ${p.brand}`}
                    >
                      <Icon size={32} strokeWidth={2} />
                    </div>
                    <span
                      className={`font-display text-2xl font-bold tracking-tight ${p.brand}`}
                    >
                      {p.name}
                    </span>
                  </div>

                  {/* Bottom fade into card body */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-primary/80">{p.tagline}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-border/70 bg-surface/60 px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-surface-elevated hover:text-primary hover:shadow-glow-sm"
                  >
                    Visit profile
                    <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
