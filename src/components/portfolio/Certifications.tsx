import { Award, ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/contexts/LanguageContext";

const MicrosoftLogo = ({ className = "h-9 w-9" }: { className?: string }) => (
  <svg viewBox="0 0 21 21" className={className} aria-hidden="true">
    <rect x="1" y="1" width="9" height="9" fill="#f25022" />
    <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
    <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
    <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
  </svg>
);

type Cert = {
  title: string;
  issuer: string;
  date: string;
  verify?: string;
  featured?: boolean;
  desc?: string;
  descAr?: string;
};

const certs: Cert[] = [
  {
    title: "Microsoft Certified: Power BI Data Analyst Associate",
    issuer: "Microsoft · PL-300",
    date: "Jul 2026",
    verify: "https://learn.microsoft.com/api/credentials/share/en-us/Khaleilaya51301903-0899/39794F9EDCB7E21A?sharingId=EBBB0B50DA87953F",
    featured: true,
    desc: "Officially certified by Microsoft, validating skills in data analysis and building interactive dashboards using Power BI.",
    descAr: "معتمدة رسمياً من Microsoft، تثبت مهارات تحليل البيانات وبناء لوحات المعلومات التفاعلية باستخدام Power BI.",
  },
  { title: "Google Data Analytics Professional Certificate", issuer: "Google · Coursera (8-course program)", date: "Apr 2026", verify: "https://coursera.org/verify/professional-cert/ADVHN61IQABR" },
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
  const { t, lang } = useLang();
  const featured = certs.find((c) => c.featured);
  const others = certs.filter((c) => !c.featured);

  return (
    <section id="certifications" className="section-pad">
      <div className="container-tight">
        <SectionHeading
          eyebrow={t.certifications.eyebrow}
          title={t.certifications.title}
          description={t.certifications.description}
        />

        {featured && (
          <motion.article
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card group relative mb-10 overflow-hidden rounded-2xl border-2 border-ember/40 p-7 shadow-ember md:p-9"
          >
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-ember/5 via-transparent to-transparent" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-surface-elevated shadow-ember ring-1 ring-ember/30">
                <MicrosoftLogo className="h-9 w-9" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="chip border-ember/40 text-ember">
                    <Star size={12} className="fill-ember text-ember" />
                    {t.certifications.featured}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">{featured.issuer}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug md:text-2xl">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {lang === "ar" && featured.descAr ? featured.descAr : featured.desc}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-5">
                  <span className="text-xs font-medium text-muted-foreground">{featured.date}</span>
                  {featured.verify && (
                    <a
                      href={featured.verify}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-ember transition-colors hover:text-ember/80"
                    >
                      {t.certifications.verify} <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        )}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {others.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card group flex h-full flex-col gap-3 p-5 transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-surface-elevated text-primary">
                  <Award size={18} />
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-sm font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
              </div>
              <div className="flex items-center justify-between border-t border-border/50 pt-3">
                <span className="text-xs text-muted-foreground">{c.date}</span>
                {c.verify && (
                  <a href={c.verify} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-primary transition-colors hover:text-primary/80">
                    {t.certifications.verify} <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
