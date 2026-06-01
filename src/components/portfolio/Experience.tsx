import { Briefcase, Pill, LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import digiliansLogo from "@/assets/digilians-logo.jpg";
import naliLogo from "@/assets/nali-logo.jpg";
import ultralabLogo from "@/assets/ultralab-logo.png";
import groupPhoto from "@/assets/digital-pioneers-group.png";
import expLab from "@/assets/exp-lab.jpg";
import expPharma from "@/assets/exp-pharma.jpg";
import { useLang } from "@/contexts/LanguageContext";

type Visual = {
  logo: string;
  image?: string;
  imageAlt?: string;
  hasCaption?: boolean;
  accentIcon?: LucideIcon;
};

const visuals: Visual[] = [
  { logo: digiliansLogo, image: groupPhoto, imageAlt: "Group photo from the Digital Pioneers Initiative launch", hasCaption: true },
  { logo: naliLogo, image: expPharma, imageAlt: "Pharmaceutical visual with pills and analytics dashboards", accentIcon: Pill },
  { logo: ultralabLogo, image: expLab, imageAlt: "Glowing blue beaker with chemical formulas in a cosmic laboratory setting" },
];

const DecorIcon = ({ className, delay, duration, children }: { className: string; delay: string; duration: string; children: React.ReactNode; }) => (
  <div aria-hidden className={`pointer-events-none absolute text-primary ${className}`} style={{ animation: `expFloat ${duration} ease-in-out ${delay} infinite` }}>
    {children}
  </div>
);

export const Experience = () => {
  const { t } = useLang();
  return (
    <section id="experience" className="section-pad relative overflow-hidden">
      <style>{`@keyframes expFloat { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }`}</style>

      <div aria-hidden className="pointer-events-none absolute inset-0">
        <DecorIcon className="top-[8%] left-[6%] opacity-[0.10]" delay="0s" duration="5s">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M6 17V9m6 8V5m6 12v-7" strokeLinecap="round" /></svg>
        </DecorIcon>
        <DecorIcon className="top-[22%] right-[8%] opacity-[0.09]" delay="1.2s" duration="6s">
          <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="5" cy="6" r="1.5" /><circle cx="5" cy="12" r="1.5" /><circle cx="5" cy="18" r="1.5" />
            <circle cx="12" cy="9" r="1.5" /><circle cx="12" cy="15" r="1.5" />
            <circle cx="19" cy="6" r="1.5" /><circle cx="19" cy="12" r="1.5" /><circle cx="19" cy="18" r="1.5" />
            <path d="M6.5 6L10.5 9M6.5 12L10.5 9M6.5 12L10.5 15M6.5 18L10.5 15M13.5 9L17.5 6M13.5 9L17.5 12M13.5 15L17.5 12M13.5 15L17.5 18" />
          </svg>
        </DecorIcon>
        <DecorIcon className="bottom-[14%] right-[6%] opacity-[0.10]" delay="2s" duration="6.5s">
          <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
            <path d="M9 3h4a3 3 0 0 1 3 3v4H8a3 3 0 0 0-3 3v2" />
            <path d="M15 21h-4a3 3 0 0 1-3-3v-4h8a3 3 0 0 0 3-3v-2" />
          </svg>
        </DecorIcon>
      </div>

      <div className="container-tight relative">
        <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-6 rtl:left-auto rtl:right-4 rtl:md:right-6" />

          <div className="space-y-6">
            {t.experience.items.map((it, idx) => {
              const v = visuals[idx];
              const AccentIcon = v.accentIcon;
              return (
                <div key={it.role} className="relative pl-12 md:pl-16 rtl:pl-0 rtl:pr-12 rtl:md:pr-16">
                  <span className="absolute left-0 top-3 grid h-9 w-9 place-items-center rounded-full border border-border bg-surface shadow-glow-sm md:left-2 rtl:left-auto rtl:right-0 rtl:md:right-2">
                    <Briefcase size={14} className="text-primary" />
                  </span>
                  <div className="glass-card overflow-hidden p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        {v.logo && (
                          <img src={v.logo} alt={`${it.org} logo`} className="h-12 w-12 shrink-0 rounded-lg border border-border bg-white object-contain p-1" loading="lazy" />
                        )}
                        <div>
                          <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
                            {AccentIcon && (
                              <span className="grid h-7 w-7 place-items-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                                <AccentIcon size={14} />
                              </span>
                            )}
                            {it.role}
                          </h3>
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

                    {v.image && (
                      <figure className="mt-5">
                        <div className="overflow-hidden rounded-xl border border-border/70 shadow-glow-sm">
                          <img src={v.image} alt={v.imageAlt ?? ""} className="h-full w-full object-cover" loading="lazy" />
                        </div>
                        {v.hasCaption && "imageCaption" in it && it.imageCaption && (
                          <figcaption className="mt-2 text-center text-xs italic text-muted-foreground">
                            {it.imageCaption}
                          </figcaption>
                        )}
                      </figure>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
