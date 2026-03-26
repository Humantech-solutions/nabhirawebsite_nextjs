"use client";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ServiceHero } from "../../../components/ServiceHero";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import ctaPatternBg from "figma:asset/cbeefd763cefbda8203e7be9a6c037607e216183.png";
import {
  ArrowRight,
  Database,
  Layers,
  CheckCircle2,
  Brain,
  Crosshair,
  Cog,
  Rocket,
  Sparkles,
  Server,
  Shield,
  Lightbulb,
  BarChart3,
  Target,
  GitBranch,
  ShieldCheck,
  Eye,
  Workflow,
  Search,
  TrendingUp,
} from "lucide-react";

export default function DataEngineering({ wordpressData }: any) {
  useEffect(() => {
    document.title = "Data Engineering Services | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const approachPoints = [
    {
      icon: <Target className="text-[#f99d1c]" size={22} />,
      text: "Understanding your business goals and reporting needs",
    },
    {
      icon: <GitBranch className="text-[#f99d1c]" size={22} />,
      text: "Unifying data from multiple systems into a single source of truth",
    },
    {
      icon: <Layers className="text-[#f99d1c]" size={22} />,
      text: "Designing scalable, cloud-ready data architectures",
    },
    {
      icon: <ShieldCheck className="text-[#f99d1c]" size={22} />,
      text: "Embedding data quality, governance and security from the start",
    },
    {
      icon: <Eye className="text-[#f99d1c]" size={22} />,
      text: "Enabling self-service access for business users",
    },
  ];

  const methodology = [
    {
      id: "discover",
      title: "Discover & Assess",
      icon: <Search className="text-[#f99d1c]" size={26} />,
      points: [
        "Evaluate existing data sources and systems",
        "Identify data silos, quality gaps and integration challenges",
        "Define business KPIs and reporting priorities",
      ],
    },
    {
      id: "design",
      title: "Design",
      icon: <Layers className="text-[#f99d1c]" size={26} />,
      points: [
        "Architect modern data platforms (data lakes, data warehouses or lakehouses)",
        "Define ingestion, transformation and storage strategies",
        "Establish governance and data quality standards",
      ],
    },
    {
      id: "build",
      title: "Build & Integrate",
      icon: <Cog className="text-[#f99d1c]" size={26} />,
      points: [
        "Develop automated ETL pipelines",
        "Implement real-time or batch data processing",
        "Integrate structured and unstructured data sources",
        "Enable secure access controls",
      ],
    },
    {
      id: "optimize",
      title: "Optimize & Scale",
      icon: <TrendingUp className="text-[#f99d1c]" size={26} />,
      points: [
        "Monitor pipeline performance and reliability",
        "Implement data observability and validation checks",
        "Optimize cost and performance",
        "Establish the foundation for AI and advanced analytics",
      ],
    },
  ];

  const tools = [
    { icon: <Database size={18} />, text: "Cloud data warehouses and lakehouse architectures" },
    { icon: <Sparkles size={18} />, text: "Distributed data processing frameworks (e.g. Spark)" },
    { icon: <Workflow size={18} />, text: "Real-time streaming platforms" },
    { icon: <Cog size={18} />, text: "ETL automation tools" },
    { icon: <Shield size={18} />, text: "Data governance and cataloging solutions" },
    { icon: <Eye size={18} />, text: "Monitoring and data quality frameworks" },
  ];

  const valueProps = [
    { text: "Break down data silos across the organization", icon: <Database size={16} /> },
    { text: "Improve accuracy and consistency in reporting", icon: <BarChart3 size={16} /> },
    { text: "Enable real-time analytics and faster decision-making", icon: <Rocket size={16} /> },
    { text: "Strengthen governance and data security", icon: <Shield size={16} /> },
    { text: "Optimize infrastructure costs", icon: <Cog size={16} /> },
    { text: "Build a scalable foundation for AI and machine learning", icon: <Brain size={16} /> },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[520px] bg-[#11253e] overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXRhJTIwZW5naW5lZXJpbmclMjBpbmZyYXN0cnVjdHVyZSUyMHNlcnZlciUyMHJvb218ZW58MXx8fHwxNzcyMDcyMjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Data Engineering Infrastructure"
              className="w-full h-full object-cover opacity-30 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#11253e] via-[#11253e]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] via-transparent to-transparent"></div>
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-16">
            <Motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl space-y-8"
            >
              <nav className="flex items-center space-x-3 text-[11px] md:text-[13px] font-medium tracking-[-0.02em] mb-4">
                <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
                <span className="text-white/30 font-light">&gt;</span>
                <span className="text-[#f99d1c] uppercase tracking-widest">Data Engineering</span>
              </nav>
              
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                Engineered for <br /> 
                <span className="text-[#f99d1c]">Performance.</span>
              </h1>
              
              <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
                Transforming raw data into strategic assets through high-performance pipeline architectures and automated processing.
              </p>

              <div className="pt-6 flex flex-wrap gap-4">
                <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/services/data/data-engineering')}&title=${encodeURIComponent('Data Engineering')}&category=Service`}>
                  <button className="bg-[#f99d1c] hover:bg-white hover:text-[#11253e] text-white px-10 py-5 rounded-sm transition-all inline-flex items-center space-x-3 uppercase tracking-widest shadow-2xl shadow-[#f99d1c]/20" style={{ fontSize: "14px", fontWeight: 500 }}>
                    <span>START YOUR JOURNEY</span>
                    <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* ─── Data Engineering Intro Statement ─── */}
        <section className="py-20 bg-[#fdfbf7] relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-[#11253e] text-4xl font-medium tracking-tight">Data Engineering</h2>
                <p className="text-[#11253e] text-xl md:text-2xl font-light leading-relaxed">
                  Turn Raw Data into{" "}
                  <span className="text-[#f99d1c] font-medium">Reliable Business Intelligence</span>
                </p>
                <p className="text-[#11253e] text-lg font-light leading-relaxed">
                  Data has the power to transform decisions — but only when it is accurate, accessible and trusted.
                </p>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="space-y-6"
              >
                <div className="border-l-3 border-[#f99d1c] pl-6">
                  <p className="text-[#11253e] text-lg font-medium leading-relaxed italic">
                    Many organizations struggle with scattered data sources, inconsistent reporting, slow dashboards and unreliable pipelines. The problem is not lack of data — rather it is lack of structure.
                  </p>
                </div>
                <p className="text-[#11253e] text-base font-light leading-relaxed">
                  Our Data Engineering services help you build a strong, scalable data foundation so your teams can move from fragmented data to confident, real-time insights.
                </p>
                <div className="w-16 h-px bg-[#f99d1c]"></div>
              </Motion.div>
            </div>
          </div>
        </section>

        {/* ─── Section 01: Approach ─── */}
        <section className="py-16 bg-[#11253e] relative overflow-hidden">
          {/* Background textures */}
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f99d1c]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.05] rounded-full blur-[100px]"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="max-w-3xl mb-10">
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-[#f99d1c] font-black text-5xl leading-none">01</span>
                  <div className="h-px w-16 bg-[#f99d1c]/40"></div>
                </div>
                <h2 className="text-white text-3xl lg:text-4xl font-medium tracking-tight">Our Approach</h2>
                <h3 className="text-[#f99d1c] text-base font-bold uppercase tracking-widest">Build the Foundation Before Scaling the Intelligence</h3>
                <p className="text-white/80 text-base font-normal leading-relaxed max-w-2xl">
                  Advanced analytics, AI and dashboards only work when the underlying data is clean, connected and governed. Our approach focuses on:
                </p>
              </Motion.div>
            </div>

            {/* Image Left + Points Right */}
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              {/* Left — Image */}
              <Motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="overflow-hidden relative group h-[300px]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1764716580465-0e66349a51a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwQUklMjBzdHJhdGVneSUyMGRpZ2l0YWwlMjB0cmFuc2Zvcm1hdGlvbiUyMGRhcmt8ZW58MXx8fHwxNzcyMzAwNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Data Foundation Strategy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11253e]/60 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-[#11253e]/20 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
                {/* Accent corner */}
                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#f99d1c]/40 hidden lg:block"></div>
                <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#f99d1c]/40 hidden lg:block"></div>
              </Motion.div>

              {/* Right — Approach Points */}
              <div className="flex flex-col gap-4 justify-center">
                {approachPoints.map((point, i) => (
                  <Motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.09, duration: 0.5 }}
                    className="group flex items-center space-x-4"
                  >
                    <div className="w-2 h-2 bg-[#f99d1c] rounded-full shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-white text-lg font-light leading-relaxed group-hover:text-white/90 transition-colors">{point.text}</span>
                  </Motion.div>
                ))}
              </div>
            </div>

            {/* Closing quote */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 flex items-center space-x-6"
            >
              <div className="w-1 h-10 bg-[#f99d1c] shrink-0"></div>
              <p className="text-white/80 text-lg font-normal italic leading-relaxed">
                We do not just build pipelines — we build trust in your data.
              </p>
            </Motion.div>
          </div>
        </section>

        {/* ─── Section 02: Methodology ─── */}
        <section className="py-14 bg-white relative overflow-hidden">
          {/* Subtle background texture */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #11253e, #11253e 1px, transparent 1px, transparent 60px)' }}></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header — left aligned */}
            <div className="max-w-3xl mb-16">
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-[#f99d1c] font-black text-5xl leading-none">02</span>
                  <div className="h-px w-16 bg-[#f99d1c]/40"></div>
                </div>
                <h2 className="text-[#11253e] text-3xl lg:text-4xl font-medium tracking-tight">Our Methodology</h2>
                <h3 className="text-[#f99d1c] text-base font-bold uppercase tracking-widest">Structured, Scalable, and Built for Growth</h3>
                <p className="text-[#11253e]/90 text-base font-normal leading-relaxed max-w-2xl">
                  We follow a phased framework to ensure your data ecosystem is reliable and future-ready.
                </p>
              </Motion.div>
            </div>

            {/* Phase cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
              {methodology.map((step, idx) => (
                <Motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group relative"
                >
                  <div className="h-full px-8 py-10 border border-[#11253e]/10 bg-white hover:bg-[#fdfbf7] hover:shadow-xl transition-all duration-500 cursor-default flex flex-col">
                    {/* Top accent line */}
                    <div className="w-full h-[3px] bg-[#f99d1c] mb-8 group-hover:w-full transition-all duration-500"></div>

                    {/* Step number + Icon row */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[#f99d1c]/20 font-black text-6xl leading-none group-hover:text-[#f99d1c]/30 transition-colors duration-500">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="w-14 h-14 border border-[#11253e]/10 group-hover:border-[#f99d1c]/40 rounded-sm flex items-center justify-center shrink-0 transition-colors duration-500">
                        <div>{step.icon}</div>
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-[#11253e] text-[22px] font-semibold mb-5 leading-snug">{step.title}</h4>

                    {/* Divider */}
                    <div className="w-8 h-px bg-[#f99d1c] mb-5"></div>

                    {/* Points */}
                    <div className="space-y-4 flex-1">
                      {step.points.map((point, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-[#f99d1c] mt-[7px] shrink-0"></div>
                          <span className="text-[#11253e] text-[15px] leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>

            {/* Closing quote bar */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 flex items-center space-x-6"
            >

            </Motion.div>
          </div>
        </section>

        {/* ─── Section 03: Tools & Platforms ─── */}
        <section className="relative overflow-hidden">
          {/* Full-width background image with dark overlay */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1680992044138-ce4864c2b962?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwc2VydmVyJTIwcm9vbSUyMGNsb3VkJTIwY29tcHV0aW5nJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzcyMzAxMTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Cloud Data Infrastructure"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#11253e]/92"></div>
          </div>

          {/* Background patterns */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <svg className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.06]" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="195" stroke="white" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="150" stroke="#f99d1c" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="105" stroke="white" strokeWidth="0.5" />
          </svg>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#f99d1c]/5 rounded-full blur-[100px]"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 py-10">
            {/* Header */}
            <div className="max-w-3xl mb-14">
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-[#f99d1c] font-black text-5xl leading-none">03</span>
                  <div className="h-px w-16 bg-[#f99d1c]/40"></div>
                </div>
                <h2 className="text-white text-3xl lg:text-4xl font-medium tracking-tight">Tools & Platforms</h2>
                <h3 className="text-[#f99d1c] text-base font-bold uppercase tracking-widest">Modern Data Stack. Cloud-Ready. Scalable.</h3>
                <p className="text-white/[0.80] text-base font-normal leading-relaxed max-w-2xl">
                  We leverage leading cloud platforms such as Amazon Web Services, Microsoft Azure and Google Cloud to build resilient and scalable data architectures.
                </p>
              </Motion.div>
            </div>

            {/* Tools grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
              {tools.map((tool, i) => (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group bg-[#11253e] hover:bg-white/[0.06] p-8 transition-all duration-600 relative"
                >
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f99d1c] group-hover:w-full transition-all duration-700"></div>
                  <div className="flex items-start space-x-5">
                    <div className="w-11 h-11 border border-white/10 group-hover:border-[#f99d1c]/40 rounded-sm flex items-center justify-center shrink-0 transition-colors duration-500">
                      <div className="text-[#f99d1c]">{tool.icon}</div>
                    </div>
                    <div>
                      <span className="text-white/80 group-hover:text-white text-[14px] font-light leading-relaxed transition-colors duration-500">{tool.text}</span>
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>

            {/* Closing quote bar */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 flex items-center space-x-6"
            >

            </Motion.div>
          </div>
        </section>

        {/* ─── Section 04: Value Proposition ─── */}
        <section className="py-14 bg-[#fdfbf7] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'repeating-linear-gradient(135deg, #11253e, #11253e 1px, transparent 1px, transparent 40px)' }}></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16 space-y-4"
              >
                <div className="flex items-center justify-center space-x-4 mb-2">
                  <span className="text-[#f99d1c] font-black text-6xl">04</span>
                  <div className="h-px w-12 bg-[#f99d1c]"></div>
                </div>
                <h2 className="text-[#11253e] text-4xl lg:text-5xl font-medium tracking-tight">Value Proposition</h2>
                <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest">Trusted Data. Faster Decisions. Competitive Advantage.</h3>

              </Motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {valueProps.map((item, i) => (
                  <Motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start space-x-4 p-6 bg-white border border-[#11253e]/5 hover:border-[#f99d1c]/40 hover:shadow-lg transition-all duration-500 group"
                  >
                    <div className="w-9 h-9 bg-[#f99d1c]/10 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-[#f99d1c]/20 transition-colors">
                      <div className="text-[#f99d1c]">{item.icon}</div>
                    </div>
                    <span className="text-[#11253e] text-base font-light leading-relaxed">{item.text}</span>
                  </Motion.div>
                ))}
              </div>

              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 p-8 md:p-12 bg-[#11253e] text-white relative overflow-hidden"
              >
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#f99d1c]/10 rounded-full blur-3xl"></div>
                <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                <div className="relative z-10 flex items-start space-x-4">
                  <Lightbulb className="text-[#f99d1c] shrink-0 mt-1" size={24} />
                  <p className="text-white/80 text-lg font-light leading-relaxed italic">
                    Most importantly, we help your organization move from reactive reporting to proactive, data-driven strategy.
                  </p>
                </div>
              </Motion.div>
            </div>
          </div>
        </section>

        {/* Technology Stack Pattern */}
        <section className="py-14 bg-[#0b1a2c] overflow-hidden relative">
          {/* Deep grid pattern */}
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(249,157,28,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(249,157,28,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
          {/* Radial glow center */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,157,28,0.08)_0%,_transparent_70%)]"></div>
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#f99d1c]/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#f99d1c]/5 rounded-full blur-[120px]"></div>
          {/* Dot pattern overlay */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center space-x-3 mb-4">
                <div className="h-px w-10 bg-[#f99d1c]/50"></div>
                <span className="text-[#f99d1c] text-xs font-bold uppercase tracking-[0.3em]">Technology Stack</span>
                <div className="h-px w-10 bg-[#f99d1c]/50"></div>
              </div>
              <h2 className="text-white text-4xl font-medium tracking-tight uppercase">Modern Data Stack</h2>
              <div className="w-12 h-1 bg-[#f99d1c] mx-auto"></div>
              <p className="text-white text-[18px] font-light tracking-wide whitespace-nowrap mx-auto">Industry-leading tools powering every layer of your data platform</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-white/[0.05]">
              {[
                { name: 'Databricks', category: 'Lakehouse' },
                { name: 'Snowflake', category: 'Warehouse' },
                { name: 'Airflow', category: 'Orchestration' },
                { name: 'dbt', category: 'Transform' },
                { name: 'Kafka', category: 'Streaming' },
                { name: 'Spark', category: 'Processing' },
                { name: 'AWS', category: 'Cloud' },
                { name: 'Azure', category: 'Cloud' },
                { name: 'GCP', category: 'Cloud' },
                { name: 'Terraform', category: 'Infra' },
                { name: 'Kubernetes', category: 'DevOps' },
                { name: 'Python', category: 'Language' },
              ].map((tech, i) => (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="group bg-[#0b1a2c] hover:bg-[#f99d1c]/10 p-6 flex flex-col items-center justify-center gap-2 cursor-default transition-all duration-400 relative overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f99d1c] group-hover:w-full transition-all duration-500"></div>
                  <span className="text-white group-hover:text-[#f99d1c] font-bold text-sm uppercase tracking-widest transition-colors duration-400">{tech.name}</span>
                  <span className="text-[#019ead] group-hover:text-[#f99d1c] text-[12px] font-semibold uppercase tracking-[0.2em] transition-colors duration-400">{tech.category}</span>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-14 relative bg-[#e5dfd3] overflow-hidden">
          {/* Diagonal stripe texture */}
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `repeating-linear-gradient(110deg, transparent, transparent 20px, #11253e 20px, #11253e 21px)` }} />
          {/* Corner glow blobs */}
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
                  Ready to Build Your <br />
                  <span className="text-[#f99d1c]">Data Backbone?</span>
                </h2>
                <p className="text-[#11253e] text-base font-light leading-relaxed">
                  Engage our Data Engineers to evaluate your current architecture and design a roadmap for scalable, future-proof data operations.
                </p>
              </div>
              <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/services/data/data-engineering')}&title=${encodeURIComponent('Data Engineering')}&category=Service`}>
                <button
                  className="whitespace-nowrap bg-[#f99d1c] hover:bg-[#10243c] text-white px-10 py-5 rounded-md transition-all inline-flex items-center space-x-3 uppercase tracking-[0.18em] group shrink-0"
                  style={{ fontSize: "13px", fontWeight: 600 }}
                >
                  <span>START YOUR JOURNEY</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </Motion.div>
          </div>
        </section>
    </>
  );
}
