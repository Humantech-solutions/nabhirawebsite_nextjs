"use client";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import { ServiceHero } from "../../../components/ServiceHero";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { renderHeroTitle, formatQuotesToBold } from "../../../lib/utils";
import { 
  ArrowRight, 
  Shield, 
  Layers, 
  Brain, 
  Cog, 
  Rocket, 
  CheckCircle2, 
  Search, 
  Lock, 
  BarChart3, 
  Users, 
  FileCheck, 
  Database, 
  Eye, 
  Workflow, 
  GitBranch, 
  ShieldCheck 
} from "lucide-react";

export default function DataGovernance({ wordpressData }: { wordpressData?: any }) {
  useEffect(() => {
    document.title = "Data Governance & Quality | Hutech Solutions Technologies";
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
        "Enterprise data maturity assessment",
        "Regulatory and compliance gap analysis",
        "Stakeholder alignment across legal, risk & technology",
        "Identification of critical data domains"
      ],
    },
    {
      id: "design",
      title: "Design Framework",
      icon: <Layers className="text-[#f99d1c]" size={24} />,
      points: [
        "Target state data governance operating model",
        "Data ownership & stewardship structures",
        "Policies for data quality, privacy & lifecycle",
        "Metadata management and lineage strategy"
      ],
    },
    {
      id: "implement",
      title: "Implement Controls",
      icon: <Cog className="text-[#f99d1c]" size={24} />,
      points: [
        "Data classification and automated cataloging",
        "Policy enforcement mechanisms",
        "Data quality rules and continuous monitoring",
        "Access controls and audit trail setup"
      ],
    },
    {
      id: "monitor",
      title: "Monitor & Evolve",
      icon: <Rocket className="text-[#f99d1c]" size={24} />,
      points: [
        "Continuous compliance and risk monitoring",
        "Governance KPI performance reporting",
        "Periodic policy review and refinement",
        "Enterprise adoption and change enablement"
      ],
    },
  ];

  return (
    <>
      <ServiceHero
        title={renderHeroTitle(heroData?.heroS1Title || (
          <>Governance by <br /> <span className="text-[#f99d1c]">Design.</span></>
        ))}
        description={formatQuotesToBold(heroData?.heroS1Desc || "Embedding 'trust' and ^compliance^ into every layer of your data lifecycle through automated governance.") as any}
        subtitle="Data Governance"
        category="Data Governance"
        image={heroData?.heroS1ImageUrl || heroData?.heroS1Image?.node?.sourceUrl || "https://images.unsplash.com/photo-1767972464040-8bfee42d7bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZ292ZXJuYW5jZSUyMHNlY3VyaXR5JTIwY29tcGxpYW5jZSUyMGRpZ2l0YWwlMjBjb25jZXB0fGVufDF8fHx8MTc3MjA3MjI5OHww&ixlib=rb-4.1.0&q=80&w=1080"}
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
                {formatQuotesToBold("Trust as the Foundation of \n^Digital Enterprise^")}
              </h2>
              <p className="text-[#11253e] text-lg md:text-xl font-light leading-relaxed">
                In a data-driven economy, trust is foundational. Without strong governance, enterprises face inconsistent reporting, regulatory exposure, and security risks.
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
                {formatQuotesToBold("Data Governance is not about restricting access. It is about creating clarity, confidence, and control. We help you establish automated governance frameworks that protect data while empowering teams.")}
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
                src="https://images.unsplash.com/photo-1682559736721-c2e77ff4c650?auto=format&fit=crop&q=80&w=1200"
                alt="Data Governance Architecture"
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
                <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest">{formatQuotesToBold("Pragmatic. Policy-Driven. Scalable.")}</h3>
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed">
                We design data governance models that balance strict regulatory compliance with business agility and operational speed.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  "Establishing clear data ownership and stewardship",
                  "Aligning governance with global regulatory frameworks",
                  "Enabling enterprise-wide data transparency and lineage",
                  "Embedding privacy and security into the data lifecycle",
                  "Balancing compliance discipline with business agility"
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-[#f99d1c] shrink-0 mt-1" size={18} />
                    <span className="text-[#11253e] text-sm font-medium">{formatQuotesToBold(item)}</span>
                  </div>
                ))}
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed italic">
                {formatQuotesToBold("'Governance becomes an enabler of speed when compliance controls are automated into daily workflows.'")}
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
            <h3 className="text-[#11253e] text-xl font-light uppercase tracking-[0.2em]">{formatQuotesToBold("Structured Data Control Framework")}</h3>
            <p className="text-[#11253e] text-lg font-light max-w-2xl mx-auto">
              {formatQuotesToBold("We follow a phased lifecycle to ensure data quality, regulatory compliance, and audit readiness.")}
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
                <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest leading-snug">{formatQuotesToBold("Automated Quality & Lineage Systems.")}</h3>
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed">
                We implement industry-leading cataloging, privacy, and data quality platforms to ensure zero-trust compliance.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { icon: <Database size={18} />, text: "Enterprise data catalogs & metadata platforms" },
                  { icon: <GitBranch size={18} />, text: "Data lineage & automated impact analysis" },
                  { icon: <FileCheck size={18} />, text: "Continuous data quality monitoring tools" },
                  { icon: <Lock size={18} />, text: "Privacy & regulatory compliance enforcement" },
                  { icon: <Shield size={18} />, text: "Role-based access management & audit systems" }
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
                  src="https://images.unsplash.com/photo-1586036308218-5ed6553c98b6?auto=format&fit=crop&q=80&w=1000"
                  alt="Data Governance Security"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#f99d1c] p-8 text-[#11253e] max-w-xs shadow-xl hidden md:block">
                <p className="text-sm font-medium italic">
                  {formatQuotesToBold("'Automated governance gives business teams trusted data while ensuring legal and security compliance.'")}
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
            <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest">{formatQuotesToBold("Accountability. Quality. Audit Readiness.")}</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Enterprise Accountability", desc: "Establish clear data stewardship and ownership across departments." },
              { title: "High Data Quality", desc: "Drastically improve data accuracy, consistency, and trustworthiness." },
              { title: "Audit Readiness", desc: "Strengthen compliance with GDPR, HIPAA, CCPA, and global regulations." },
              { title: "Enhanced Privacy", desc: "Protect sensitive customer and enterprise assets with automated controls." },
              { title: "Consistent Reporting", desc: "Eliminate conflicting metrics with a unified metadata glossary." },
              { title: "AI-Ready Foundation", desc: "Ensure AI models are trained on ethically sourced, clean data." }
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
                {formatQuotesToBold("Ready to embed trust into \n^your data lifecycle?^")}
              </h2>
              <p className="text-[#11253e] text-base font-light leading-relaxed">
                Partner with Nabhira to establish automated data governance that minimizes risk while maximizing business value.
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
