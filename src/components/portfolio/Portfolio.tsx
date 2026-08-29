import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import gtx from "@/assets/project-gtx.jpg";
import intl from "@/assets/project-intl.jpg";
import chem from "@/assets/project-chemist.jpg";
import digiliansDashboard from "@/assets/project-digilians-dashboard.png";
import digiliansErd from "@/assets/project-digilians-erd.png";
import digiliansMgmt from "@/assets/project-digilians-mgmt.jpg";
import bodyPerformance from "@/assets/project-body-performance.jpg";
import salesTableau from "@/assets/sales-dashboard-tableau.png";
import sales2026 from "@/assets/sales-dashboard-2026.png";
import gtxMain from "@/assets/gtx-dashboard-main.png";
import gtxDecomp from "@/assets/gtx-decomposition.png";
import gtxKey from "@/assets/gtx-key-influencers.png";
import gtxMap from "@/assets/gtx-map.png";
import chemSafetyRag from "@/assets/project-chem-safety-ai.jpg";
import egyTeraVolt from "@/assets/project-egytera-volt.png";
import egyTeraLogin from "@/assets/project-egytera-login.png.asset.json";

import { useLang } from "@/contexts/LanguageContext";


type Project = {
  img: string;
  bgImg?: string;
  images?: string[];
  title: string;
  desc: string;
  tools: string[];
  tag: string;
  link?: string;
  demo?: string;
  github?: string;
};

const projects: Project[] = [
  {
    img: egyTeraVolt,
    images: [egyTeraVolt, egyTeraLogin.url],
    title: "EgyTera Volt AI — Electricity Demand Forecasting System",
    desc: "AI-powered electricity demand forecasting and intelligent decision-support system. Built with XGBoost for 7-day recursive load forecasting, FastAPI REST backend, Gemini AI for executive analysis, automated recommendation engine for peak/low demand management, and an interactive frontend dashboard. Developed as a team project.",
    tools: ["Python", "XGBoost", "FastAPI", "Machine Learning", "Gemini AI", "Time Series", "Data Analytics"],
    tag: "AI & Forecasting",
    link: "https://github.com/tokashablangy-ui/EgyTera-Volt-AI",
    demo: "https://egytera-volt-ai-frontend.onrender.com/forecast",
    github: "https://github.com/tokashablangy-ui/EgyTera-Volt-AI",
  },
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
    img: chemSafetyRag,
    title: "Chemical Safety AI",
    desc: "AI-powered RAG assistant for answering chemical safety questions using official MSDS documents with semantic search and an interactive Streamlit interface.",
    tools: ["Python", "Streamlit", "LangChain", "FAISS", "Hugging Face", "Sentence Transformers"],
    tag: "AI & RAG",
    link: "https://chemical-safety-msds-intelligent-assistant.streamlit.app/",
    demo: "https://chemical-safety-msds-intelligent-assistant.streamlit.app/",
    github: "https://github.com/ayashaaban049-crypto/chem-safety-rag",
  },
  {
    img: gtxMain,
    images: [gtxMain, gtxDecomp, gtxKey, gtxMap],
    title: "GTX Sales Dashboard — Power BI",
    desc: "Interactive sales dashboard built in Power BI analyzing $20.94M in total sales across 9K orders. Features include monthly sales treemap, waterfall chart by product, top 15 sales agents bar chart, donut charts for manager and regional office breakdown, global sales map, decomposition tree for drill-down analysis, and AI-powered key influencers visual identifying GTK 500 as the top sales price driver.",
    tools: ["Power BI", "Data Visualization", "Sales Analytics", "DAX", "Business Intelligence"],
    tag: "Dashboard",
  },
  {
    img: salesTableau,
    title: "Sales Dashboard — Tableau (Sample Superstore)",
    desc: "End-to-end BI dashboard built in Tableau analyzing 9,994 sales records across the US. Five visualizations: sub-category bar chart, regional stacked bars, monthly trend line, state-level bubble map, and category pie. Key findings: November peaked at $352K, California led at $457K, Technology topped categories at $836K, Phones drove $330K in sub-category revenue.",
    tools: ["Tableau", "Data Modeling", "Calculated Fields", "Geo Mapping", "Time-Series"],
    tag: "Dashboard",
    link: "/sales-dashboard",
  },
  {
    img: sales2026,
    title: "Sales Dashboard Year 2026 — Tableau (Amazing Dataset)",
    desc: "European sales analytics dashboard visualizing $11.9M in B2B/B2C sales across 14 countries. Four interactive visualizations: packed bubble chart of top 10 customers, segment pie (Consumer/Corporate/Home Office), regional bar chart, and a country-level choropleth map. Key findings: Consumer segment leads at $6.16M, Central region dominates at $6.66M, France tops countries at $3.11M, and Bettie Lang is the top customer at $112,602.",
    tools: ["Tableau", "Choropleth Mapping", "Bubble Charts", "Multi-table Joins", "Segment Analysis"],
    tag: "Dashboard",
    link: "/sales-dashboard-2026",
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

const ProjectMedia = ({ p, hoverErd, hoverExplore }: { p: Project; hoverErd: string; hoverExplore: (tag: string) => string }) => {
  const [idx, setIdx] = useState(0);
  const gallery = p.images && p.images.length > 1 ? p.images : null;
  const current = gallery ? gallery[idx] : p.img;
  const go = (e: React.MouseEvent, dir: 1 | -1) => {
    e.preventDefault();
    e.stopPropagation();
    if (!gallery) return;
    setIdx((i) => (i + dir + gallery.length) % gallery.length);
  };
  return (
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
        src={current}
        alt={p.title}
        loading="lazy"
        className={`relative h-full w-full object-cover transition-all duration-700 group-hover:scale-110 ${
          p.bgImg ? "group-hover:opacity-0" : ""
        }`}
        width={1024}
        height={640}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
      <span className="absolute left-4 top-4 chip border-primary/40 text-primary">{p.tag}</span>
      {gallery && (
        <>
          <button
            type="button"
            onClick={(e) => go(e, -1)}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground backdrop-blur transition hover:bg-background"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={(e) => go(e, 1)}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground backdrop-blur transition hover:bg-background"
          >
            <ChevronRight size={16} />
          </button>
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {gallery.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${i === idx ? "w-5 bg-primary" : "w-1.5 bg-foreground/40"}`}
              />
            ))}
          </div>
        </>
      )}
      <div className="card-overlay">
        <p className="text-xs text-foreground/90">{p.bgImg ? hoverErd : hoverExplore(p.tag)}</p>
      </div>
    </div>
  );
};

export const Portfolio = () => {
  const { t } = useLang();
  return (
    <section id="portfolio" className="section-pad">
      <div className="container-tight">
        <SectionHeading
          eyebrow={t.portfolio.eyebrow}
          title={t.portfolio.title}
          description={t.portfolio.description}
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
              <ProjectMedia p={p} hoverErd={t.portfolio.hoverErd} hoverExplore={t.portfolio.hoverExplore} />

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
                {(p.demo || p.github) && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:shadow-glow-sm hover:-translate-y-0.5"
                      >
                        🚀 Live Demo
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 px-4 py-2 text-xs font-semibold text-primary transition-all hover:bg-primary/10 hover:-translate-y-0.5"
                      >
                        💻 GitHub
                      </a>
                    )}
                  </div>
                )}
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
