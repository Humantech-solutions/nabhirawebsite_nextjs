"use client";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import { ServiceHero } from "../../../components/ServiceHero";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { renderHeroTitle, formatQuotesToBold } from "../../../lib/utils";
import {
  ArrowRight,
  Database,
  Layers,
  CheckCircle2,
  Brain,
  Cog,
  Rocket,
  Sparkles,
  Shield,
  BarChart3,
  GitBranch,
  ShieldCheck,
  Eye,
  Workflow,
  Search,
  TrendingUp,
  Cpu
} from "lucide-react";

export default function DataEngineering({ wordpressData }: { wordpressData?: any }) {
  useEffect(() => {
    document.title = "Data Engineering Services | Hutech Solutions Technologies";
    window.scrollTo(0, 0);
  }, []);

  const gs = wordpressData?.globalSettings;
  const heroData = gs?.heroSlides;

  const methodology = [
    {
      id: "discover",
      title: "Discover & Assess",
      icon: <Search className="text-[#f99d1c]" size={24} />,
      points: [
        "Evaluate existing data sources and systems",
        "Identify data silos, quality gaps and integration challenges",
        "Define business KPIs and reporting priorities",
        "Benchmark data architecture maturity"
      ],
    },
    {
      id: "design",
      title: "Design",
      icon: <Layers className="text-[#f99d1c]" size={24} />,
      points: [
        "Architect modern data platforms (lakes, warehouses, lakehouses)",
        "Define ingestion, transformation and storage strategies",
        "Establish governance and data quality standards",
        "Design security and access control models"
      ],
    },
    {
      id: "build",
      title: "Build & Integrate",
      icon: <Cog className="text-[#f99d1c]" size={24} />,
      points: [
        "Develop automated ETL/ELT pipelines",
        "Implement real-time or batch data processing",
        "Integrate structured and unstructured data sources",
        "Enable secure self-service access controls"
      ],
    },
    {
      id: "optimize",
      title: "Optimize & Scale",
      icon: <TrendingUp className="text-[#f99d1c]" size={24} />,
      points: [
        "Monitor pipeline performance and reliability",
        "Implement data observability and validation checks",
        "Optimize cost and infrastructure performance",
        "Establish the foundation for AI and advanced analytics"
      ],
    },
  ];

  return (
    <>
      <ServiceHero
        title={renderHeroTitle(heroData?.heroS1Title || (
          <>Engineered for <br /> <span className="text-[#f99d1c]">Performance.</span></>
        ))}
        description={formatQuotesToBold(heroData?.heroS1Desc || "Transforming raw data into strategic assets through high-performance pipeline architectures and automated processing.") as any}
        subtitle="Data Engineering"
        category="Data Engineering"
        image={heroData?.heroS1ImageUrl || heroData?.heroS1Image?.node?.sourceUrl || "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXRhJTIwZW5naW5lZXJpbmclMjBpbmZyYXN0cnVjdHVyZSUyMHNlcnZlciUyMHJvb218ZW58MXx8fHwxNzcyMDcyMjk4fDA&ixlib=rb-4.1.0&q=80&w=1080"}
      />

      {/* Intro Section */}
      <section className="py-20 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <Motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-[#11253e] text-3xl md:text-5xl font-medium tracking-tight leading-tight">
                {formatQuotesToBold("Turn Raw Data into \n^Reliable Business Intelligence^")}
              </h2>
              <p className="text-[#11253e] text-lg md:text-xl font-light leading-relaxed">
                Data has the power to transform decisions — but only when it is accurate, accessible, and trusted.
              </p>
            </Motion.div>
            
            <Motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-[#11253e] text-lg leading-relaxed font-light">
                {formatQuotesToBold("Our Data Engineering services help you build a strong, scalable data foundation so your teams can move from fragmented data to confident, real-time insights.")}
              </p>
              <div className="w-20 h-px bg-[#f99d1c]"></div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* 1. Our Approach Section */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1764716580465-0e66349a51a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwQUklMjBzdHJhdGVneSUyMGRpZ2l0YWwlMjB0cmFuc2Zvcm1hdGlvbiUyMGRhcmt8ZW58MXx8fHwxNzcyMzAwNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Data Engineering Strategy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-[#11253e]/10"></div>
            </div>

            <div className="order-1 lg:order-2 space-y-12 p-5">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-[#f99d1c] font-black text-6xl">01</span>
                  <div className="h-px w-12 bg-[#f99d1c]"></div>
                </div>
                <h2 className="text-[#11253e] text-4xl lg:text-5xl font-medium tracking-tight">{formatQuotesToBold("Our 'Approach'")}</h2>
                <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest">{formatQuotesToBold("Build the Foundation Before Scaling Intelligence")}</h3>
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed">
                Advanced analytics, AI, and executive dashboards only work when the underlying data is clean, connected, and governed.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  "Understanding your business goals and reporting needs",
                  "Unifying data from multiple systems into a single source of truth",
                  "Designing scalable, cloud-ready data architectures",
                  "Embedding data quality, governance, and security from the start",
                  "Enabling self-service access for business users"
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-[#f99d1c] shrink-0 mt-1" size={18} />
                    <span className="text-[#11253e] text-sm font-medium">{formatQuotesToBold(item)}</span>
                  </div>
                ))}
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed italic">
                {formatQuotesToBold("'We do not just build pipelines — we build trust in your enterprise data.'")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Methodology Section */}
      <section className="py-20 bg-[#eeede9] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-24 space-y-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-[#f99d1c] font-black text-6xl">02</span>
              <div className="h-px w-12 bg-[#f99d1c]"></div>
            </div>
            <h2 className="text-[#11253e] text-4xl lg:text-5xl font-medium tracking-tight">{formatQuotesToBold("Our 'Methodology'")}</h2>
            <h3 className="text-[#11253e] text-xl font-light uppercase tracking-[0.2em]">{formatQuotesToBold("Structured, Scalable, and Built for Growth")}</h3>
            <p className="text-[#11253e] text-lg font-light max-w-2xl mx-auto">
              {formatQuotesToBold("We follow a phased framework to ensure your data ecosystem is reliable, scalable, and future-ready.")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((step, idx) => (
              <Motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-5 pb-10 border-b-4 border-[#11253e]/10 hover:border-[#f99d1c] transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 bg-[#11253e]/5 rounded-sm flex items-center justify-center mb-8 mx-auto group-hover:bg-[#f99d1c]/10 transition-colors">
                  {step.icon}
                </div>
                <h4 className="text-[#11253e] text-2xl font-medium mb-6 w-full">{formatQuotesToBold(step.title)}</h4>
                <div className="space-y-4 flex-grow text-left w-full">
                  {step.points.map((point, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-1 h-1 rounded-full bg-[#f99d1c] mt-2 shrink-0"></div>
                      <span className="text-[#11253e] text-[15px] leading-relaxed font-normal">{formatQuotesToBold(point)}</span>
                    </div>
                  ))}
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Tools & Accelerators Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12 p-5">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-[#f99d1c] font-black text-6xl">03</span>
                  <div className="h-px w-12 bg-[#f99d1c]"></div>
                </div>
                <h2 className="text-[#11253e] text-4xl lg:text-5xl font-medium tracking-tight leading-tight">{formatQuotesToBold("Tools & 'Accelerators'")}</h2>
                <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest leading-snug">{formatQuotesToBold("Modern Data Stack. High Throughput.")}</h3>
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed">
                We leverage industry-leading cloud data warehouses, real-time streaming engines, and automated ETL tools to power high-speed data flow.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { icon: <Database size={18} />, text: "Cloud data warehouses & lakehouse architectures" },
                  { icon: <Sparkles size={18} />, text: "Distributed processing frameworks (Spark/Flink)" },
                  { icon: <Workflow size={18} />, text: "Real-time event streaming platforms" },
                  { icon: <Cog size={18} />, text: "ETL / ELT pipeline automation tools" },
                  { icon: <Shield size={18} />, text: "Data governance & cataloging frameworks" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-[#f99d1c] shrink-0 mt-1" size={18} />
                    <span className="text-[#11253e] text-sm font-medium">{formatQuotesToBold(item.text)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-[#11253e] p-1 rounded-sm overflow-hidden shadow-2xl group">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1680992044138-ce4864c2b962?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwc2VydmVyJTIwcm9vbSUyMGNsb3VkJTIwY29tcHV0aW5nJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzcyMzAxMTEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Cloud Data Infrastructure"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#f99d1c] p-8 text-[#11253e] max-w-xs shadow-xl hidden md:block">
                <p className="text-sm font-medium italic">
                  {formatQuotesToBold("'Our modern data stack accelerates pipeline delivery while ensuring data quality and security across all layers.'")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Value Proposition Section */}
      <section className="py-20 bg-[#11253e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-[#f99d1c] font-black text-6xl">04</span>
              <div className="h-px w-12 bg-[#f99d1c]"></div>
            </div>
            <h2 className="text-white text-4xl lg:text-5xl font-medium tracking-tight">{formatQuotesToBold("Value 'Proposition'")}</h2>
            <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest">{formatQuotesToBold("Clean Data. Real-Time Insights.")}</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Break Down Silos", desc: "Unify fragmented data sources across the entire organization." },
              { title: "Reporting Accuracy", desc: "Improve precision, consistency, and auditability in executive reporting." },
              { title: "Real-Time Analytics", desc: "Enable instant data ingestion for faster, event-driven decision making." },
              { title: "Hardened Governance", desc: "Strengthen privacy, compliance, and access control across all pipelines." },
              { title: "Cost Efficiency", desc: "Optimize cloud compute and storage costs with intelligent architecture." },
              { title: "AI-Ready Foundation", desc: "Build a scalable, trustworthy foundation for Machine Learning and AI models." }
            ].map((item, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 hover:border-[#f99d1c]/50 transition-all group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#f99d1c] flex items-center justify-center text-[#11253e]">
                    <CheckCircle2 size={16} />
                  </div>
                  <h4 className="text-white text-lg font-medium tracking-tight">{formatQuotesToBold(item.title)}</h4>
                </div>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  {formatQuotesToBold(item.desc)}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 relative bg-[#e5dfd3] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `repeating-linear-gradient(110deg, transparent, transparent 20px, #11253e 20px, #11253e 21px)` }} />
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#11253e]/20 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#fdfbf7] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 relative"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#f99d1c]"></div>
            <div className="max-w-xl space-y-4">
              <h2 className="text-[#11253e] text-3xl md:text-4xl font-bold tracking-tight leading-[1.2]">
                {formatQuotesToBold("Ready to engineer your \n^data foundation?^")}
              </h2>
              <p className="text-[#11253e] text-base font-light leading-relaxed">
                Let our experts design high-throughput data architectures that turn raw information into competitive business advantage.
              </p>
            </div>
            <button
              className="whitespace-nowrap bg-[#f99d1c] hover:bg-[#10243c] text-white px-10 py-5 rounded-md transition-all inline-flex items-center space-x-3 uppercase tracking-[0.18em] group shrink-0"
              style={{ fontSize: "13px", fontWeight: 600 }}
            >
              <span>START YOUR JOURNEY</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Motion.div>
        </div>
      </section>
    </>
  );
}
