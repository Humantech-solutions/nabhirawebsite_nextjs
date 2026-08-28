"use client";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { motion as Motion } from "motion/react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { DownloadModal } from "../../components/DownloadModal";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  FileText,
  Users,
  FileSearch,
  AlertTriangle,
  TrendingUp,
  Scale,
  BookOpen,
  Clock
} from "lucide-react";
import { renderHeroTitle, formatQuotesToBold } from "../../lib/utils";

export default function PolicyEngineSolution({ wordpressData }: { wordpressData?: any }) {
  useEffect(() => {
    document.title = "Policy Reinforcement Agent | Hutech Solutions Technologies";
    window.scrollTo(0, 0);
  }, []);

  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const gs = wordpressData?.globalSettings;
  const heroData = gs?.heroSlides;

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-[#11253e] overflow-hidden">
        <div className="absolute inset-0">
          {/* Dot Grid Pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(249, 157, 28, 0.4) 1px, transparent 1px)`,
              backgroundSize: '32px 32px'
            }}
          ></div>
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#11253e] via-[#11253e]/95 to-[#1a3a5f]/90"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f99d1c]/5 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-12">
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-6 py-3 bg-[#f99d1c]/10">
                  <ShieldCheck size={16} className="text-[#f99d1c]" />
                  <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">AI-Powered Compliance</span>
                </div>

                <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight">
                  {renderHeroTitle(heroData?.heroS1Title || (
                    <>
                      Policy Reinforcement <br />
                      <span className="text-[#f99d1c] font-medium">Agent</span>
                    </>
                  ))}
                </h1>

                <p className="text-white text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
                  {formatQuotesToBold(heroData?.heroS1Desc || "AI-Powered Policy Validation & Compliance Automation")}
                </p>

                <div className="flex flex-wrap gap-6 pt-4">
                  <button className="bg-[#f99d1c] text-[#11253e] px-12 py-6 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all">
                    Request Demo
                  </button>
                </div>
              </Motion.div>
            </div>

            {/* Stats Panel */}
            <div className="lg:col-span-5 w-full">
              <Motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white p-8 md:p-10 rounded-sm space-y-8 shadow-2xl border border-gray-100"
              >
                <div className="space-y-4">
                  <div className="w-16 h-1 bg-[#f99d1c]"></div>
                  <h3 className="text-[#11253e] text-2xl font-bold tracking-tight">Proven Impact</h3>
                </div>

                <div className="space-y-6">
                  {[
                    { value: "85-90%", label: "Reduction in Manual Review Effort" },
                    { value: "100%", label: "Compliance Adherence Rate" },
                    { value: "Real-time", label: "Audit Trail & Traceability" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-start gap-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="w-2 h-2 bg-[#f99d1c] rounded-full shrink-0 mt-3"></div>
                      <div className="space-y-1">
                        <p className="text-[#f99d1c] text-3xl md:text-4xl font-extrabold tracking-tight">{stat.value}</p>
                        <p className="text-[#11253e] text-base font-bold">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-block px-6 py-2 bg-[#f99d1c]/10 border border-[#f99d1c]/30">
                <span className="text-[#f99d1c] font-bold text-xs uppercase tracking-[0.2em]">Overview</span>
              </div>
              <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight leading-tight">
                Intelligent Policy Management for Modern Enterprises
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
            </div>

            <div className="space-y-8 text-[#11253e] text-lg font-light leading-relaxed max-w-4xl mx-auto">
              <p>
                Travel and expense companies process thousands of employee claims daily. Each claim must comply with internal company policies and external regulatory requirements. However, these policies are often stored in lengthy documents and legal PDFs, making them difficult to interpret quickly.
              </p>
              <p>
                Manual validation by trained staff creates operational bottlenecks, delays processing, and increases the risk of errors. Inconsistent interpretation of policies can lead to unfair claim decisions, compliance violations, and regulatory penalties.
              </p>
              <p className="text-xl font-medium text-[#11253e]">
                Hutech Solutions&apos; Policy Reinforcement Agent automates policy management, validation, and enforcement—ensuring accurate, consistent, and compliant decision-making across the organization.
              </p>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #11253e 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="max-w-3xl">
              <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight mb-6">
                The Challenge
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c]"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FileSearch size={32} className="text-[#f99d1c]" />,
                  title: "Complex Policy Interpretation",
                  description: "Company policies are often stored in lengthy legal documents that are difficult and time-consuming to interpret."
                },
                {
                  icon: <Clock size={32} className="text-[#f99d1c]" />,
                  title: "Manual Claim Validation",
                  description: "Employees manually review thousands of claims, leading to delays and operational inefficiencies."
                },
                {
                  icon: <AlertTriangle size={32} className="text-[#f99d1c]" />,
                  title: "Compliance & Regulatory Risks",
                  description: "Organizations must comply with regulations such as FMLA, ACA, and state-specific benefit rules, which change frequently."
                },
                {
                  icon: <FileText size={32} className="text-[#f99d1c]" />,
                  title: "Lack of Decision Traceability",
                  description: "Tracking claim approvals and maintaining documentation for audits is highly manual and error-prone."
                },
                {
                  icon: <TrendingUp size={32} className="text-[#f99d1c]" />,
                  title: "High Operational Costs",
                  description: "Manual processes require significant human effort and increase compliance risks."
                }
              ].map((challenge, idx) => (
                <Motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 border-l-4 border-[#f99d1c] shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="space-y-6">
                    <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                      {challenge.icon}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-[#11253e] font-bold text-xl">{challenge.title}</h3>
                      <p className="text-[#11253e]/80 font-light leading-relaxed">{challenge.description}</p>
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>      {/* Our Solution Section */}
      <section className="py-24 bg-[#11253e] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(249, 157, 28, 0.6) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight">
                Our Solution
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
              <p className="text-white/90 text-xl font-light leading-relaxed">
                Hutech Solutions Policy Reinforcement Agent
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <p className="text-white text-lg font-light leading-relaxed">
                  Hutech Solutions' Policy Reinforcement Agent integrates directly with enterprise applications to automate the entire policy management lifecycle.
                </p>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                  The system extracts rules from policy documents, validates claims automatically, and ensures consistent policy enforcement across departments.
                </p>

                <div className="pt-4">
                  <Link href="/contact">
                    <button className="bg-[#f99d1c] text-[#11253e] px-12 py-6 font-bold text-[14px] uppercase tracking-[0.2em] hover:bg-white transition-all">
                      EXPLORE PLATFORM
                    </button>
                  </Link>
                </div>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full relative min-h-[350px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[500px]"
              >
                <ImageWithFallback
                  src="/assets/solution_detail_hero.jpg"
                  alt="Policy Automation System"
                  width={800}
                  height={600}
                  className="rounded-sm shadow-2xl w-full h-auto max-h-[550px] object-cover"
                />
              </Motion.div>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight">
                Key Features
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FileText size={36} className="text-[#f99d1c]" />,
                  title: "Automated Policy Management",
                  description: "Upload, create, modify, and manage policy documents through a centralized system."
                },
                {
                  icon: <CheckCircle2 size={36} className="text-[#f99d1c]" />,
                  title: "Real-Time Policy Validation",
                  description: "Employee claims are validated automatically against extracted policy rules."
                },
                {
                  icon: <Users size={36} className="text-[#f99d1c]" />,
                  title: "Role-Based Access Control",
                  description: "Different user roles can manage, query, or interpret policies without manual intervention."
                },
                {
                  icon: <BookOpen size={36} className="text-[#f99d1c]" />,
                  title: "Transparent Decision-Making",
                  description: "Every decision is documented with clear reasoning and traceability."
                },
                {
                  icon: <ShieldCheck size={36} className="text-[#f99d1c]" />,
                  title: "OPA & Rego Policy Engine",
                  description: "Uses industry-standard Open Policy Agent (OPA) and Rego for scalable policy enforcement."
                },
                {
                  icon: <Scale size={36} className="text-[#f99d1c]" />,
                  title: "Domain-Agnostic Architecture",
                  description: "Designed to work across multiple industries including HR, finance, insurance, and travel."
                }
              ].map((capability, idx) => (
                <Motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white p-10 border border-gray-200 rounded-sm hover:border-[#f99d1c] transition-all group"
                >
                  <div className="space-y-6">
                    <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                      {capability.icon}
                    </div>
                    <h3 className="text-[#11253e] font-bold text-xl">{capability.title}</h3>
                    <p className="text-[#11253e]/70 font-light leading-relaxed">{capability.description}</p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Advanced AI Architecture Section */}
      <section className="py-24 bg-[#11253e] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(249, 157, 28, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20 space-y-6"
          >
            <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-4 py-2">
              <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">TECHNICAL INNOVATION</span>
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight">
              Advanced AI architecture
            </h2>
            <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
          </Motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <ShieldCheck className="text-[#f99d1c]" size={40} />,
                title: "OPA & REGO ENGINE",
                description: "Uses industry-standard Open Policy Agent for declarative policy definitions and high-performance evaluation."
              },
              {
                icon: <FileSearch className="text-[#f99d1c]" size={40} />,
                title: "AUTOMATED RULE EXTRACTION",
                description: "AI pipelines ingest complex regulatory PDFs and extract structured policy constraints automatically."
              },
              {
                icon: <TrendingUp className="text-[#f99d1c]" size={40} />,
                title: "REAL-TIME AUDIT TRAIL",
                description: "Generates immutable logs for every decision to guarantee transparent compliance reporting."
              }
            ].map((innovation, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-6"
              >
                <div className="w-20 h-20 bg-white/5 border border-[#f99d1c]/30 flex items-center justify-center mx-auto rounded-sm">
                  {innovation.icon}
                </div>
                <h3 className="text-white text-xl font-bold uppercase tracking-wide">{innovation.title}</h3>
                <p className="text-white/70 text-base font-light leading-relaxed">
                  {innovation.description}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-4 py-2">
                <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">BUSINESS BENEFITS</span>
              </div>
              <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight">
                Transform your business operations
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: <TrendingUp className="text-[#f99d1c]" size={40} />,
                  title: "Operational Efficiency",
                  description: "85–90% reduction in manual policy review effort with faster claim validation and automated approval workflows."
                },
                {
                  icon: <ShieldCheck className="text-[#f99d1c]" size={40} />,
                  title: "Enhanced Compliance",
                  description: "Eliminates compliance violations through automated enforcement and strict regulatory adherence."
                },
                {
                  icon: <Scale className="text-[#f99d1c]" size={40} />,
                  title: "Cost Optimization",
                  description: "Significantly lowers operational overheads while maintaining complete audit trails and decision transparency."
                }
              ].map((benefit, idx) => (
                <Motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-6 group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-white border border-gray-200 flex items-center justify-center mx-auto rounded-sm group-hover:border-[#f99d1c] transition-all">
                    {benefit.icon}
                  </div>
                  <h3 className="text-[#11253e] text-xl font-bold tracking-tight">{benefit.title}</h3>
                  <p className="text-[#11253e]/70 text-base font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-[#e5dfd3] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-12 md:p-16 border-l-8 border-[#f99d1c] shadow-xl flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-[#11253e] text-3xl md:text-4xl font-bold tracking-tight">
                Ready to Automate Your Policy Compliance?
              </h2>
              <p className="text-[#11253e]/70 text-lg font-light leading-relaxed">
                Discover how Nabhira's Policy Reinforcement Agent can transform your compliance operations and reduce operational costs.
              </p>
            </div>

            <Link href="/contact" className="shrink-0">
              <button className="bg-[#f99d1c] text-white px-10 py-5 font-bold text-[13px] uppercase tracking-[0.2em] hover:bg-[#11253e] transition-all flex items-center gap-3">
                START YOUR JOURNEY <ArrowRight size={16} />
              </button>
            </Link>
          </Motion.div>
        </div>
      </section>
      <DownloadModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} documentName="Policy Reinforcement Agent Whitepaper" />
    </>
  );
}
