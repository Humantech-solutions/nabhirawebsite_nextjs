"use client";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import Link from "next/link";
import { ServiceHero } from "../../../components/ServiceHero";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { renderHeroTitle, formatQuotesToBold } from "../../../lib/utils";
import automationHeroImg from "../../../assets/ai.png";
import {
  ArrowRight,
  CheckCircle2,
  Brain,
  Layers,
  Cog,
  Rocket,
  Shield,
  Bot,
  Workflow,
  FileText,
  BarChart3,
  Cpu,
  Zap,
  Target,
  Clock,
  TrendingUp,
  Search,
  Check
} from "lucide-react";

export default function IntelligentAutomation({ wordpressData }: { wordpressData?: any }) {
  useEffect(() => {
    document.title = "Intelligent Automation Services | Hutech Solutions Technologies";
    window.scrollTo(0, 0);
  }, []);

  const gs = wordpressData?.globalSettings;
  const heroData = gs?.heroSlides;

  const methodology = [
    {
      id: "assess",
      title: "Assess & Discover",
      icon: <Search className="text-[#f99d1c]" size={24} />,
      points: [
        "Process discovery and task mining",
        "ROI estimation and automation feasibility",
        "Risk, compliance, and governance evaluation",
        "High-impact workflow prioritization"
      ],
    },
    {
      id: "design",
      title: "Architecture & Design",
      icon: <Layers className="text-[#f99d1c]" size={24} />,
      points: [
        "Target state automation architecture",
        "Bot and workflow orchestration design",
        "Cognitive AI and decision integration",
        "Governance, control, and audit frameworks"
      ],
    },
    {
      id: "build",
      title: "Build & Integrate",
      icon: <Cog className="text-[#f99d1c]" size={24} />,
      points: [
        "Bot development and API integrations",
        "Intelligent document processing setup",
        "Resilience, exception handling, and compliance testing",
        "Secure production deployment"
      ],
    },
    {
      id: "optimize",
      title: "Scale & Optimize",
      icon: <Rocket className="text-[#f99d1c]" size={24} />,
      points: [
        "Real-time analytics and performance monitoring",
        "Continuous feedback and optimization cycles",
        "Exception management and automated self-healing",
        "Enterprise-wide automation expansion"
      ],
    },
  ];

  return (
    <>
      <ServiceHero
        title={renderHeroTitle(heroData?.heroS1Title || (
          <>Intelligent <br /><span className="text-[#f99d1c]">Automation</span></>
        ))}
        description={formatQuotesToBold(heroData?.heroS1Desc || "Transforming 'Core Operations' with ^Cognitive AI & Enterprise RPA^") as any}
        subtitle="Intelligent Automation"
        category="Intelligent Automation"
        image={heroData?.heroS1ImageUrl || heroData?.heroS1Image?.node?.sourceUrl || automationHeroImg}
      />

      {/* Intro Section */}
      <section className="py-20 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-[#11253e] text-3xl md:text-5xl font-medium tracking-tight leading-tight">
                {formatQuotesToBold("Automation is not just about efficiency, ^it is about accelerating enterprise agility.^")}
              </h2>
              <p className="text-[#11253e] text-lg md:text-xl font-medium leading-relaxed italic">
                {formatQuotesToBold('"From fragmented manual tasks to unified, self-optimizing digital workflows."')}
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
                {formatQuotesToBold("Our Intelligent Automation services combine Robotic Process Automation (RPA), Cognitive AI, and Machine Learning to streamline end-to-end workflows. We help organizations eliminate operational friction, reduce errors, and free human talent for strategic innovation.")}
              </p>
              <div className="w-20 h-px bg-[#f99d1c]"></div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* 1. Our Approach Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/5] rounded-sm overflow-hidden shadow-3xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000"
                alt="Intelligent Automation Approach"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-[#11253e]/10 group-hover:bg-transparent transition-colors"></div>
            </div>

            <div className="order-1 lg:order-2 space-y-12 p-5">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-[#f99d1c] font-black text-6xl">01</span>
                  <div className="h-px w-12 bg-[#f99d1c]"></div>
                </div>
                <h2 className="text-[#11253e] text-4xl lg:text-5xl font-medium tracking-tight">{formatQuotesToBold("Our 'Approach'")}</h2>
                <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest">{formatQuotesToBold("Human-Centered, AI-Driven Execution")}</h3>
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed">
                We design automation architectures that combine rule-based precision with cognitive AI decision support, creating scalable and auditable workflows across hybrid cloud environments.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  "Strategic identification of high-impact processes across operations",
                  "End-to-end workflow mapping and automation blueprinting",
                  "Combining rule-based RPA with AI decision intelligence",
                  "Scalable automation infrastructure across cloud and hybrid stacks",
                  "Embedded governance, compliance controls, and audit readiness"
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-[#f99d1c] shrink-0 mt-1" size={18} />
                    <span className="text-[#11253e] text-sm font-medium">{formatQuotesToBold(item)}</span>
                  </div>
                ))}
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed italic">
                {formatQuotesToBold("'We build resilient automation systems that evolve and scale alongside your business.'")}
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
            <h3 className="text-[#11253e] text-xl font-light uppercase tracking-[0.2em]">{formatQuotesToBold("End-to-End Automation Lifecycle")}</h3>
            <p className="text-[#11253e] text-lg font-light max-w-2xl mx-auto">
              {formatQuotesToBold("A disciplined 4-stage framework that ensures rapid deployment, measurable ROI, and seamless enterprise integration.")}
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
                <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest leading-snug">{formatQuotesToBold("Leading RPA Platforms & Cognitive Tech.")}</h3>
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed">
                We integrate enterprise-grade RPA platforms, intelligent OCR engines, and automated orchestration workflows to deliver robust process execution.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { icon: <Bot size={18} />, text: "Enterprise RPA (UiPath, Automation Anywhere, Blue Prism)" },
                  { icon: <Workflow size={18} />, text: "Workflow & Orchestration engines" },
                  { icon: <Brain size={18} />, text: "Cognitive AI & Machine Learning decision models" },
                  { icon: <FileText size={18} />, text: "Intelligent Document Processing (IDP) & OCR" },
                  { icon: <BarChart3 size={18} />, text: "Real-time monitoring dashboards & process analytics" }
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
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000"
                  alt="Intelligent Automation Platform"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#f99d1c] p-8 text-[#11253e] max-w-xs shadow-xl hidden md:block">
                <p className="text-sm font-medium italic">
                  {formatQuotesToBold("'Accelerate digital transformation with continuous operational intelligence.'")}
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
            <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest">{formatQuotesToBold("Efficiency. Accuracy. Operational Speed.")}</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Cost Reduction", desc: "Lower operational expenditure and eliminate repetitive manual processing overhead." },
              { title: "Zero Error Rates", desc: "Achieve near 100% processing accuracy and standardized regulatory compliance." },
              { title: "Faster Turnaround", desc: "Accelerate transaction cycles, invoice settlements, and customer response times." },
              { title: "Workforce Empowerment", desc: "Enable knowledge workers to focus on high-value creative and analytical tasks." },
              { title: "Full Auditability", desc: "Complete digital audit trails for total transparency and risk governance." },
              { title: "Enterprise Scalability", desc: "Seamlessly scale automated workloads across business units and global operations." }
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
                {formatQuotesToBold("Ready to accelerate with \n^Intelligent Automation?^")}
              </h2>
              <p className="text-[#11253e] text-base font-light leading-relaxed">
                Partner with Hutech Solutions to build scalable, AI-powered automation workflows that transform operations.
              </p>
            </div>
            <Link href="/contact" className="shrink-0">
              <button
                className="whitespace-nowrap bg-[#f99d1c] hover:bg-[#10243c] text-white px-10 py-5 rounded-md transition-all inline-flex items-center space-x-3 uppercase tracking-[0.18em] group"
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
