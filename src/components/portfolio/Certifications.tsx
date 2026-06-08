import { Award, ExternalLink, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/contexts/LanguageContext";

type Cert = { title: string; issuer: string; date: string; verify?: string; featured?: boolean; };

const certs: Cert[] = [
  { title: "Google Data Analytics Professional Certificate", issuer: "Google · Coursera (8-course program)", date: "Apr 2026", verify: "https://coursera.org/verify/professional-cert/ADVHN61IQABR", featured: true },
  { title: "Foundations: Data, Data, Everywhere", issuer: "Google · Coursera", date: "Mar 2026" },
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
  { title: "Python Programming Basics", issuer: "ITI · Mahara-Tech (AI Academy)", date: "Apr 2026", verify: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?code=CVqprmG9k2" },
  { title: "Introduction to Deep Learning", issuer: "ITI · Mahara-Tech (AI Academy)", date: "May 2026", verify: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?code=FWbOW8OnS5" },
  { title: "Fundamentals of Digital Transformation", issuer: "TCEU · Zagazig University (5 Mandatory + 2 Electives: Networks, Mobile App)", date: "Sep 2022" },
];

export const Certifications = () => {
  const { t } = useLang();
  return (
    <section id="certifications" className="section-pad">
      <div className="container-tight">
        <SectionHeading eyebrow={t.certifications.eyebrow} title={t.certifications.title} description={t.certifications.description} />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certs.map((c) => (
            <article key={c.title} className={`glass-card group flex h-full flex-col gap-4 p-6 transition-all hover:-translate-y-0.5 ${c.featured ? "border-primary/40 shadow-glow-sm" : ""}`}>
              <div className="flex items-start justify-between gap-3">
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${c.featured ? "bg-gradient-primary text-primary-foreground shadow-glow-sm" : "bg-surface-elevated text-primary"}`}>
                  {c.featured ? <Star size={20} /> : <Award size={20} />}
                </span>
                {c.featured && (<span className="chip border-primary/40 text-primary">{t.certifications.featured}</span>)}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-base font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.issuer}</p>
              </div>
              <div className="flex items-center justify-between border-t border-border/50 pt-3">
                <span className="text-xs text-muted-foreground">{c.date}</span>
                {c.verify && (
                  <a href={c.verify} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-primary transition-colors hover:text-primary/80">
                    {t.certifications.verify} <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
