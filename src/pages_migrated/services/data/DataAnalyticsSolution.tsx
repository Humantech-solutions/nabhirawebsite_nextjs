"use client";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { ArrowRight, BarChart3, Layers, Brain, Cog, Rocket, Shield, Lightbulb, Target, GitBranch, ShieldCheck, Eye, Workflow, TrendingUp, PieChart, Activity, LineChart, Database, Search } from "lucide-react";

export default function DataAnalyticsSolution({ wordpressData }: any) {
  useEffect(() => {
    document.title = "Data Analytics Services | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const approachPoints = [
    {
      icon: <Target className="text-[#f99d1c]" size={22} />,
      text: "Enterprise KPI alignment across business functions",
    },
    {
      icon: <Eye className="text-[#f99d1c]" size={22} />,
      text: "Executive visibility through real time performance intelligence",
    },
    {
      icon: <ShieldCheck className="text-[#f99d1c]" size={22} />,
      text: "Governance, privacy and regulatory discipline by design",
    },
    {
      icon: <GitBranch className="text-[#f99d1c]" size={22} />,
      text: "Scalable architectures built for long term evolution",
    },
    {
      icon: <Workflow className="text-[#f99d1c]" size={22} />,
      text: "Embedding analytics into core operational workflows",
    },
  ];

  const methodology = [
    {
      id: "discover",
      phase: "01",
      title: "Discover",
      icon: <Search className="text-[#f99d1c]" size={26} />,
      points: [
        "Executive and stakeholder alignment",
        "Strategic KPI definition and value mapping",
        "Data maturity and architecture assessment",
        "Risk and compliance evaluation",
      ],
    },
    {
      id: "design",
      phase: "02",
      title: "Design",
      icon: <Layers className="text-[#f99d1c]" size={26} />,
      points: [
        "Target state enterprise analytics architecture",
        "Data governance and operating model design",
        "Security, privacy and access control frameworks",
        "Performance scalability and resilience planning",
      ],
    },
    {
      id: "develop",
      phase: "03",
      title: "Develop",
      icon: <Cog className="text-[#f99d1c]" size={26} />,
      points: [
        "Data engineering and integration pipelines",
        "Advanced analytics models including predictive and scenario analysis",
        "Executive dashboards and operational intelligence platforms",
        "Validation, audit readiness and quality assurance",
      ],
    },
    {
      id: "enable",
      phase: "04",
      title: "Enable & Optimize",
      icon: <Rocket className="text-[#f99d1c]" size={26} />,
      points: [
        "Change management and adoption strategy",
        "Analytics center of excellence enablement",
        "Continuous model enhancement",
        "Performance monitoring and value realization tracking",
      ],
    },
  ];

  const tools = [
    { icon: <Database size={18} />, text: "Cloud native data warehouses and lakehouse platforms" },
    { icon: <PieChart size={18} />, text: "Enterprise business intelligence and visualization systems" },
    { icon: <Activity size={18} />, text: "Real time streaming and event driven analytics engines" },
    { icon: <Brain size={18} />, text: "Advanced statistical modeling and machine learning frameworks" },
    { icon: <Shield size={18} />, text: "Enterprise grade governance security and compliance controls" },
  ];

  const valueProps = [
    { text: "Accelerated executive decision cycles", icon: <TrendingUp size={16} /> },
    { text: "Improved enterprise wide performance transparency", icon: <Eye size={16} /> },
    { text: "Enhanced forecasting accuracy and risk resilience", icon: <LineChart size={16} /> },
    { text: "Strengthened governance and regulatory confidence", icon: <Shield size={16} /> },
    { text: "Scalable foundation for AI and intelligent automation", icon: <Brain size={16} /> },
    { text: "Measurable return on data investments", icon: <BarChart3 size={16} /> },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[520px] bg-[#11253e] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1540370548792-520e6e3b12e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwYnVzaW5lc3MlMjBpbnRlbGxpZ2VuY2UlMjBkYXJrfGVufDF8fHx8MTc3MjMwMjk5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Data Analytics Infrastructure"
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
            <nav className="flex items-center space-x-3 text-[11px] md:text-[15px] font-medium tracking-[-0.02em] mb-4">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <span className="text-white/30 font-light">&gt;</span>
              <span className="text-[#f99d1c] uppercase tracking-widest">Data Analytics</span>
            </nav>

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
              Transform Data into <br />
              <span className="text-[#f99d1c]">Strategic Advantage.</span>
            </h1>

            <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
              Converting data into foresight through <span className="text-white font-medium">decision intelligence</span> that drives measurable business outcomes.
            </p>


            <div className="pt-6 flex flex-wrap gap-4">
              <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/services/data/data-analytics-solution')}&title=${encodeURIComponent('Data Analytics Solution')}&category=Service`}>
                <button className="bg-[#f99d1c] hover:bg-white hover:text-[#11253e] text-white px-10 py-5 rounded-sm transition-all inline-flex items-center space-x-3 uppercase tracking-widest shadow-2xl shadow-[#f99d1c]/20" style={{ fontSize: "14px", fontWeight: 500 }}>
                  <span>START YOUR JOURNEY</span>
                  <ArrowRight size={14} />
                </button>
              </Link>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ─── Data Analytics Intro Statement ─── */}
      <section className="py-20 bg-[#fdfbf7] relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-[#11253e] text-4xl font-medium tracking-tight">Data Analytics</h2>
              <p className="text-[#11253e] text-xl md:text-2xl font-light leading-relaxed">
                Transform Data into <span className="font-medium">Strategic</span>{" "}
                <span className="text-[#f99d1c] font-medium">Business Advantage</span>
              </p>
              <p className="text-[#11253e] text-lg font-light leading-relaxed">
                In a world defined by volatility and digital acceleration, competitive advantage belongs to organizations that convert data into foresight. Data Analytics is no longer a reporting function. It is a strategic capability that influences growth, operational resilience, capital allocation, risk mitigation and customer experience.
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
                  We help enterprises design and operationalize analytics ecosystems that deliver trusted insight at speed and scale. Our focus is not on dashboards alone — it is on decision intelligence that drives measurable business outcomes.
                </p>
              </div>
                <p className="text-[#11253e] text-base font-light leading-relaxed">
                  Our Data Analytics Experts design, integrate, analyze and govern data ecosystems that are scalable, insight-driven and decision-ready.
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
              <h2 className="text-white text-3xl lg:text-4xl font-medium tracking-tight">Approach</h2>
              <h3 className="text-[#f99d1c] text-base font-bold uppercase tracking-widest">Strategy Led Analytics</h3>
              <p className="text-white/80 text-base font-light leading-relaxed max-w-2xl">
                Analytics initiatives succeed when they are anchored in enterprise strategy. We begin at the leadership level by aligning analytics priorities with corporate objectives, market dynamics and regulatory requirements.
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
                  src="https://images.unsplash.com/photo-1758630737361-ca7532fb5e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwc3RyYXRlZ3klMjBkYXRhJTIwdmlzdWFsaXphdGlvbiUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3NzIzMDI5OTQ4MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Enterprise Analytics Strategy"
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
            <p className="text-white/80 text-lg font-light italic leading-relaxed">
              We operate as a strategic partner, ensuring analytics becomes a board level capability rather than a siloed initiative.
            </p>
          </Motion.div>
        </div>
      </section>

      {/* ─── Section 02: Methodology ─── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #11253e, #11253e 1px, transparent 1px, transparent 60px)' }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
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
              <h2 className="text-[#11253e] text-3xl lg:text-4xl font-medium tracking-tight">Methodology</h2>
              <h3 className="text-[#f99d1c] text-base font-bold uppercase tracking-widest">Structured Delivery. Sustainable Impact.</h3>
              <p className="text-[#11253e] text-base font-light leading-relaxed max-w-2xl">
                We apply a rigorous and repeatable framework to transform analytics ambition into enterprise capability.
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
                className="relative"
              >
                <div className="h-full px-[15px] py-[5px] pb-10 border border-[#11253e]/[0.06] cursor-default">
                  {/* Top accent line */}
                  <div className="w-full h-0.5 bg-[#f99d1c] mb-8"></div>

                  {/* Icon */}
                  <div className="w-12 h-12 border border-[#11253e]/10 rounded-sm flex items-center justify-center mb-6 mx-auto">
                    <div>{step.icon}</div>
                  </div>

                  {/* Title */}
                  <h4 className="text-[#11253e] text-xl font-semibold mb-6 text-center">{step.title}</h4>

                  {/* Points */}
                  <div className="space-y-3">
                    {step.points.map((point, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#f99d1c]/40 mt-1.5 shrink-0"></div>
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

      {/* ─── Section 03: Tools & Ecosystem ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1540370548792-520e6e3b12e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwYnVzaW5lc3MlMjBpbnRlbGxpZ2VuY2UlMjBkYXJrfGVufDF8fHx8MTc3MjMwMjk5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Analytics Infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#11253e]/92"></div>
        </div>

        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#f99d1c]/5 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
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
              <h2 className="text-white text-3xl lg:text-4xl font-medium tracking-tight">Tools & Ecosystem</h2>
              <h3 className="text-[#f99d1c] text-base font-bold uppercase tracking-widest">Enterprise Scale Technology Ecosystems</h3>
              <p className="text-white/80 text-base font-light leading-relaxed max-w-2xl">
                We architect secure high performance analytics platforms leveraging global cloud ecosystems including Amazon Web Services, Microsoft Azure and Google Cloud.
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

            {/* Closing cell */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-[#f99d1c]/10 p-8 flex items-center"
            >
              <p className="text-white/40 text-[13px] font-light italic leading-relaxed">
                Technology is selected based on strategic fit, scalability and long term value rather than short term convenience.
              </p>
            </Motion.div>
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
      <section className="py-20 bg-[#fdfbf7] relative overflow-hidden">
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
              <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest">From Insight to Competitive Advantage</h3>
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
                  <span className="text-[#11253e] text-[15px] font-light leading-relaxed">{item.text}</span>
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
                  Most importantly, we enable organizations to elevate analytics from operational reporting to a strategic engine that shapes long term enterprise performance.
                </p>
              </div>
            </Motion.div>
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
                 Ready to Unlock Your <br />
                  <span className="text-[#f99d1c]">Data Potential?</span>
                </h2>
                <p className="text-[#11253e] text-base font-light leading-relaxed">
                  Engage our Data Analytics Experts to evaluate your current capabilities and design a roadmap for enterprise-grade decision intelligence.
                </p>
              </div>
              <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/services/data/data-analytics-solution')}&title=${encodeURIComponent('Data Analytics Solution')}&category=Service`}>
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
