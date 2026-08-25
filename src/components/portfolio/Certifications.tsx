import { Award, ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/contexts/LanguageContext";
import khamsatCert from "@/assets/khamsat-certificate.png.asset.json";

type Skill = { name: string; value: number };

type Cert = {
  title: string;
  issuer: string;
  date: string;
  verify: string;
  featured?: boolean;
  certImage?: string;
};

const GOOGLE_PROGRAM = "https://coursera.org/verify/professional-cert/ADVHN61IQABR";

const certs: Cert[] = [
  {
    title: "Microsoft Certified: Power BI Data Analyst Associate",
    issuer: "Microsoft · PL-300",
    date: "Jul 2026",
    verify:
      "https://learn.microsoft.com/api/credentials/share/en-us/Khaleilaya51301903-0899/39794F9EDCB7E21A?sharingId=EBBB0B50DA87953F",
    featured: true,
  },
  { title: "Google Data Analytics Professional Certificate", issuer: "Google · Coursera (8-course program)", date: "Apr 2026", verify: GOOGLE_PROGRAM },
  { title: "Foundations: Data, Data, Everywhere", issuer: "Google · Coursera", date: "Mar 2026", verify: GOOGLE_PROGRAM },
  { title: "Ask Questions to Make Data-Driven Decisions", issuer: "Google · Coursera", date: "Mar 2026", verify: "https://coursera.org/verify/VRM1C6H41G91" },
  { title: "Prepare Data for Exploration", issuer: "Google · Coursera", date: "Mar 2026", verify: "https://coursera.org/verify/DC9VJ1LLIV8K" },
  { title: "Process Data from Dirty to Clean", issuer: "Google · Coursera", date: "Apr 2026", verify: "https://coursera.org/verify/LK1T531PH0QO" },
  { title: "Analyze Data to Answer Questions", issuer: "Google · Coursera", date: "Apr 2026", verify: "https://coursera.org/verify/AWR96KD3SCAD" },
  { title: "Share Data Through the Art of Visualization", issuer: "Google · Coursera", date: "Apr 2026", verify: "https://coursera.org/verify/MGQ5JDY3KT5T" },
  { title: "Data Analysis with R Programming", issuer: "Google · Coursera", date: "Apr 2026", verify: "https://coursera.org/verify/T2CJ1NH04SSK" },
  { title: "Google Data Analytics Capstone: Complete a Case Study", issuer: "Google · Coursera", date: "Apr 2026", verify: "https://coursera.org/verify/WGVBDT1JWR2L" },
  { title: "Accelerate Your Job Search with AI", issuer: "Google · Coursera", date: "Apr 2026", verify: "https://coursera.org/verify/FZZLQO754Y6G" },
  { title: "AI Workflow: Business Priorities and Data Ingestion", issuer: "IBM · Coursera", date: "May 2026", verify: "https://coursera.org/verify/8NQVAHE4IM08" },
  { title: "AI Workflow: Feature Engineering and Bias Detection", issuer: "IBM · Coursera", date: "May 2026", verify: "https://coursera.org/verify/LZIY0MB1EGAD" },
  { title: "AI Workflow: Machine Learning, Visual Recognition and NLP", issuer: "IBM · Coursera", date: "May 2026", verify: "https://coursera.org/verify/TWALV6UC93W1" },
  { title: "Deep Learning with Keras and TensorFlow", issuer: "IBM · Coursera", date: "Aug 2026", verify: "https://coursera.org/verify/DMD8KDWV4WYN" },
  { title: "Python Programming Basics", issuer: "ITI · Mahara-Tech (AI Academy)", date: "Apr 2026", verify: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?code=CVqprmG9k2" },
  { title: "Introduction to Deep Learning", issuer: "ITI · Mahara-Tech (AI Academy)", date: "May 2026", verify: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?code=FWbOW8OnS5" },
  { title: "Fundamentals of Digital Transformation", issuer: "TCEU · Zagazig University (5 Mandatory + 2 Electives: Networks, Mobile App)", date: "Sep 2022", verify: "https://tceu.zu.edu.eg/" },
  { title: "Basics of Working on Khamsat", issuer: "Khebra · Khamsat", date: "Aug 2026", verify: khamsatCert.url, certImage: khamsatCert.url },
];

const skillsFor = (issuer: string): Skill[] => {
  if (issuer.startsWith("Microsoft")) return [{ name: "Power BI", value: 95 }, { name: "DAX & Modeling", value: 90 }, { name: "Data Analysis", value: 92 }];
  if (issuer.startsWith("IBM")) return [{ name: "Data Analysis", value: 92 }, { name: "Python / SQL", value: 88 }, { name: "ML Concepts", value: 85 }];
  if (issuer.startsWith("Google")) return [{ name: "Data Analytics", value: 93 }, { name: "Spreadsheets", value: 87 }, { name: "Visualization", value: 90 }];
  if (issuer.startsWith("ITI")) return [{ name: "Python Basics", value: 91 }, { name: "OOP", value: 85 }, { name: "Problem Solving", value: 89 }];
  if (issuer.startsWith("Khebra")) return [{ name: "Freelancing", value: 90 }, { name: "Client Management", value: 86 }, { name: "Proposal Writing", value: 83 }];
  if (issuer.startsWith("TCEU")) return [{ name: "Digital Transformation", value: 88 }, { name: "Networking", value: 84 }, { name: "Mobile Strategy", value: 82 }];
  return [{ name: "Data Analysis", value: 90 }, { name: "Python / SQL", value: 86 }, { name: "Problem Solving", value: 88 }];
};

const CertCard = ({ c, i, verifyLabel, featuredLabel }: { c: Cert; i: number; verifyLabel: string; featuredLabel: string }) => (
  <motion.article
    initial={{ y: 24, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.5, delay: Math.min(i, 8) * 0.06, ease: [0.16, 1, 0.3, 1] }}
    className={`glass-card group relative flex h-full flex-col p-5 transition-transform duration-500 hover:scale-[1.02] ${
      c.featured ? "border-ember/40 shadow-ember" : ""
    }`}
  >
    {/* Date badge */}
    <span className="chip absolute right-4 top-4 z-10 bg-surface-elevated/90 text-[11px]">{c.date}</span>

    {/* Certificate preview */}
    <a
      href={c.verify}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${c.title} — ${verifyLabel}`}
      className="block overflow-hidden rounded-xl border border-border/60 shadow-lg"
    >
      {c.certImage ? (
        <img
          src={c.certImage}
          alt={c.title}
          loading="lazy"
          className="h-40 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div
          className="relative grid h-40 w-full place-items-center transition-transform duration-500 group-hover:scale-105"
          style={{ background: "var(--gradient-card)" }}
        >
          <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
          <div className="relative flex flex-col items-center gap-2 px-4 text-center">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-surface-elevated text-primary ring-1 ring-primary/25">
              <Award size={20} />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
              {c.issuer.split(" · ")[0]}
            </span>
          </div>
        </div>
      )}
    </a>

    {c.featured && (
      <span className="chip mt-4 self-start border-ember/40 text-ember">
        <Star size={12} className="fill-ember text-ember" />
        {featuredLabel}
      </span>
    )}

    <h3 className="mt-4 font-display text-sm font-bold leading-snug text-primary">{c.title}</h3>
    <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>

    <div className="mt-4 flex-1">
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        Skills Gained
      </p>
      <div className="space-y-2.5">
        {skillsFor(c.issuer).map((s) => (
          <div key={s.name}>
            <div className="flex items-center justify-between gap-2 text-[11px]">
              <span className="text-foreground/90">{s.name}</span>
              <span className="font-medium text-muted-foreground">{s.value}%</span>
            </div>
            <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full"
                style={{ background: "var(--gradient-primary)" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-4 border-t border-border/50 pt-3">
      <a
        href={c.verify}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-primary transition-colors hover:text-primary/80"
      >
        {verifyLabel} <ExternalLink size={12} />
      </a>
    </div>
  </motion.article>
);

export const Certifications = () => {
  const { t } = useLang();

  return (
    <section id="certifications" className="section-pad">
      <div className="container-tight">
        <SectionHeading
          eyebrow={t.certifications.eyebrow}
          title={t.certifications.title}
          description={t.certifications.description}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <CertCard
              key={c.title}
              c={c}
              i={i}
              verifyLabel={`${t.certifications.verify} →`}
              featuredLabel={t.certifications.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
