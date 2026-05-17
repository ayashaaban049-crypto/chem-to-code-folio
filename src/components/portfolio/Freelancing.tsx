import { ArrowUpRight, Briefcase, Sparkles, Globe2, Languages, Building2, Handshake, Trees } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import upworkImg from "@/assets/freelance-upwork.jpg";
import fiverrImg from "@/assets/freelance-fiverr.jpg";
import freelancerImg from "@/assets/freelance-freelancer.jpg";
import nafezlyImg from "@/assets/freelance-nafezly.jpg";
import mostaqlImg from "@/assets/freelance-mostaql.jpg";
import khamsatImg from "@/assets/freelance-khamsat.jpg";
import yardImg from "@/assets/freelance-yard.jpg";
import decorAnalytics from "@/assets/decor-analytics.jpg";

type Platform = {
  name: string;
  tagline: string;
  desc: string;
  img: string;
  icon: typeof Briefcase;
  accent: string;
  link: string;
};

const platforms: Platform[] = [
  {
    name: "Upwork",
    tagline: "Top-rated freelance marketplace",
    desc: "Hire me on Upwork for data analytics, dashboards and BI projects with secure milestones and clear deliverables.",
    img: upworkImg,
    icon: Briefcase,
    accent: "from-emerald-500/40 to-emerald-400/10",
    link: "https://www.upwork.com/",
  },
  {
    name: "Fiverr",
    tagline: "Productized data services",
    desc: "Order ready-to-go gigs — Excel cleaning, Power BI dashboards, EDA reports and ML prototypes, delivered fast.",
    img: fiverrImg,
    icon: Sparkles,
    accent: "from-lime-400/40 to-teal-400/10",
    link: "https://www.fiverr.com/",
  },
  {
    name: "Freelancer",
    tagline: "Global project bidding",
    desc: "Reach me on Freelancer.com for custom data analysis, statistical modeling and machine learning engagements.",
    img: freelancerImg,
    icon: Globe2,
    accent: "from-indigo-500/40 to-blue-500/10",
    link: "https://www.freelancer.com/",
  },
  {
    name: "Nafezly",
    tagline: "Arabic freelance network",
    desc: "Connect with me on Nafezly for data analytics, BI dashboards and AI-driven projects across the Arabic-speaking market.",
    img: nafezlyImg,
    icon: Languages,
    accent: "from-rose-500/40 to-pink-400/10",
    link: "https://nafezly.com/u/aya_shaaban",
  },
  {
    name: "Mostaql",
    tagline: "MENA freelance marketplace",
    desc: "Hire me on Mostaql for end-to-end data analysis, reporting and machine learning solutions tailored for MENA businesses.",
    img: mostaqlImg,
    icon: Building2,
    accent: "from-amber-500/40 to-orange-400/10",
    link: "https://mostaql.com/u/aya_gameel94",
  },
  {
    name: "Khamsat",
    tagline: "Micro-services for data work",
    desc: "Order quick data services on Khamsat — cleaning, visualization, Excel automation and short analytics deliverables.",
    img: khamsatImg,
    icon: Handshake,
    accent: "from-sky-500/40 to-cyan-400/10",
    link: "https://khamsat.com/user/aya_shaaban94",
  },
  {
    name: "Freelance Yard",
    tagline: "Curated freelance community",
    desc: "Reach me on Freelance Yard for tailored data analytics and AI engagements with a focus on quality and long-term work.",
    img: yardImg,
    icon: Trees,
    accent: "from-violet-500/40 to-fuchsia-400/10",
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
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.name} freelance platform`}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${p.accent}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/70 px-3 py-1 backdrop-blur-md">
                    <Icon size={14} className="text-primary" />
                    <span className="text-xs font-medium">{p.name}</span>
                  </div>
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
