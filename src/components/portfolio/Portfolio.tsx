import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import gtx from "@/assets/project-gtx.jpg";
import intl from "@/assets/project-intl.jpg";
import chem from "@/assets/project-chemist.jpg";
import bankEda from "@/assets/project-bank-eda.jpg";

const projects = [
  {
    img: bankEda,
    title: "Bank Management System — EDA Report",
    desc: "Full Exploratory Data Analysis on a 38,838-row banking dataset (31 columns): data quality checks, missing value handling, univariate & multivariate analysis, correlation heatmaps, multicollinearity fixes, and a Ridge baseline + Logistic Regression PoC for loan prediction.",
    tools: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
    tag: "EDA Project",
  },
  {
    img: gtx,
    title: "GTX Sales Dashboard",
    desc: "Interactive sales analysis with sector revenue insights, regional office performance, product-level waterfall analysis and sales-agent comparisons.",
    tools: ["Power BI", "Excel", "DAX"],
    tag: "Dashboard",
  },
  {
    img: intl,
    title: "International Sales Dashboard 2023",
    desc: "KPI tracking (sales, orders, AOV), monthly trends, country performance, an interactive global sales map and shipping evaluation.",
    tools: ["Power BI", "Excel"],
    tag: "Dashboard",
  },
  {
    img: chem,
    title: "The Future Chemist",
    desc: "A presentation exploring AI in chemistry — augmented discovery and human + AI collaboration in healthcare research.",
    tools: ["Research", "Presentation"],
    tag: "Talk",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="section-pad">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured work."
          description="A selection of dashboards and projects from my training and ongoing learning journey."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="glass-card group flex flex-col overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={1024}
                  height={640}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <span className="absolute left-4 top-4 chip border-primary/40 text-primary">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  />
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
