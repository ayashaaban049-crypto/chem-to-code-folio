import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import gtx from "@/assets/project-gtx.jpg";
import intl from "@/assets/project-intl.jpg";
import chem from "@/assets/project-chemist.jpg";
import digiliansDashboard from "@/assets/project-digilians-dashboard.png";
import digiliansErd from "@/assets/project-digilians-erd.png";
import digiliansMgmt from "@/assets/project-digilians-mgmt.jpg";
import bodyPerformance from "@/assets/project-body-performance.jpg";

type Project = {
  img: string;
  bgImg?: string;
  title: string;
  desc: string;
  tools: string[];
  tag: string;
  link?: string;
};

const projects: Project[] = [
  {
    img: digiliansDashboard,
    bgImg: digiliansErd,
    title: "Digilians Bank: End-to-End Banking Database Architecture & BI Dashboard",
    desc: "A comprehensive banking data project bridging backend data structures and executive decision-making. Designed a robust ERD covering customers, multi-type accounts, loans, merchant transactions, branches and employees, then built a professional BI dashboard tracking critical KPIs across a 39K-record dataset — average balance $100.54K, total loans $2.62bn, average credit score 575. Includes risk segmentation by credit category and loan status, account/card-type distribution, geographic breakdowns, and balance trends from 2019–2026 — turning relational banking data into clear, data-driven insight.",
    tools: ["SQL Server", "Power BI", "Excel", "ER Diagramming", "Data Modeling"],
    tag: "BI & Database",
  },
  {
    img: digiliansMgmt,
    title: "Digilians Bank — Management System",
    desc: "End-to-end bank data analytics project covering relational database design, SQL business queries & views, Power BI interactive dashboard, and data cleaning. Built a complete schema with Branches, Employees, Customers, Accounts, and Transactions entities.",
    tools: ["SQL", "Power BI", "Python", "Excel", "EDA"],
    tag: "Data & BI",
    link: "https://github.com/ayashaaban049-crypto/Bank-Management-System-Digilians",
  },
  {
    img: bodyPerformance,
    title: "Body Performance Analytics & Intelligent Classification System",
    desc: "Full ML pipeline project analyzing human body performance data. Implemented and compared 5 machine learning models (KNN, Decision Tree, SVM, Neural Network, Linear Regression) with an interactive Streamlit web app for real-time fitness classification.",
    tools: ["Python", "Streamlit", "Scikit-learn", "Machine Learning", "EDA"],
    tag: "Machine Learning",
    link: "https://github.com/ayashaaban049-crypto/Body-Performance-Analytics-and-Intelligent-main",
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
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card tilt-card group flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {p.bgImg && (
                  <img
                    src={p.bgImg}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity transition-all duration-700 group-hover:opacity-80 group-hover:mix-blend-normal group-hover:scale-110"
                    width={1024}
                    height={640}
                  />
                )}
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className={`relative h-full w-full object-cover transition-all duration-700 group-hover:scale-110 ${
                    p.bgImg ? "group-hover:opacity-0" : ""
                  }`}
                  width={1024}
                  height={640}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <span className="absolute left-4 top-4 chip border-primary/40 text-primary">
                  {p.tag}
                </span>
                <div className="card-overlay">
                  <p className="text-xs text-foreground/90">{p.bgImg ? "Hover to reveal the ERD schema →" : `Click to explore the ${p.tag.toLowerCase()} →`}</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-xl font-semibold transition-colors hover:text-primary"
                    >
                      {p.title}
                    </a>
                  ) : (
                    <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  )}
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.title} on GitHub`}>
                      <ArrowUpRight
                        size={20}
                        className="shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                      />
                    </a>
                  ) : (
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    />
                  )}
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
