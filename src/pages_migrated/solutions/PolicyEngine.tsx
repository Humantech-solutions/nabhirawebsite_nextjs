"use client";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion as Motion } from "motion/react";
import { SalesBrochureModal } from "../../components/SalesBrochureModal";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ShieldCheck, FileText, Users, CheckCircle2, ArrowRight, FileSearch, AlertTriangle, Lock, TrendingUp, Scale, BookOpen, Clock } from "lucide-react";

export default function PolicyEngineSolution({ wordpressData }: any) {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Policy Reinforcement Agent | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

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
                  Policy Reinforcement <br />
                  <span className="text-[#f99d1c] font-medium">Agent</span>
                </h1>
                
                <p className="text-white text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
                  AI-Powered Policy Validation & Compliance Automation
                </p>
                
                <div className="flex flex-wrap gap-6 pt-4">
                  <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/policy-engine')}&title=${encodeURIComponent('Policy Reinforcement Agent')}&category=Solutions`}>
                    <button className="bg-[#f99d1c] text-[#11253e] px-12 py-6 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all">
                      Request Demo
                    </button>
                  </Link>
                </div>
              </Motion.div>
            </div>
            
            {/* Stats Panel */}
            <div className="lg:col-span-5">
              <Motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white p-10 rounded-sm space-y-8"
              >
                <div className="space-y-4">
                  <div className="w-16 h-1 bg-[#f99d1c]"></div>
                  <h3 className="text-[#11253e] text-2xl font-bold">Proven Impact</h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    { value: "85-90%", label: "Reduction in Manual Review Effort" },
                    { value: "100%", label: "Compliance Adherence Rate" },
                    { value: "Real-time", label: "Audit Trail & Traceability" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-6 pb-6 border-b border-gray-200 last:border-0">
                      <div className="w-2 h-2 bg-[#f99d1c] rounded-full shrink-0"></div>
                      <div className="space-y-1">
                        <p className="text-[#f99d1c] text-3xl font-bold">{stat.value}</p>
                        <p className="text-[#11253e]/60 text-md font-medium">{stat.label}</p>
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
                Nabhira's Policy Reinforcement Agent automates policy management, validation, and enforcement—ensuring accurate, consistent, and compliant decision-making across the organization.
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
      </section>

      {/* Our Solution Section */}
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
                Nabhira Policy Reinforcement Agent
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
                  Nabhira's Policy Reinforcement Agent integrates directly with enterprise applications to automate the entire policy management lifecycle.
                </p>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                  The system extracts rules from policy documents, validates claims automatically, and ensures consistent policy enforcement.
                </p>
                
                <div className="pt-4">
                  <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/policy-engine')}&title=${encodeURIComponent('Policy Reinforcement Agent')}&category=Solutions`}>
                    <button className="bg-[#f99d1c] text-[#11253e] px-12 py-6 font-bold text-[14px] uppercase tracking-[0.2em] hover:bg-white transition-all">
                      Explore Architecture
                    </button>
                  </Link>
                </div>
              </Motion.div>
              
              <Motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1704969724221-8b7361b61f75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wbGlhbmNlJTIwYXV0b21hdGlvbiUyMGJ1c2luZXNzJTIwZG9jdW1lbnRzfGVufDF8fHx8MTc3MzMwODQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Policy Automation System"
                  className="rounded-sm shadow-2xl"
                />
              </Motion.div>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Key Capabilities Section */}
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
                Key Capabilities
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FileText size={40} className="text-[#f99d1c]" />,
                  title: "Automated Policy Management",
                  description: "Upload, create, modify, and manage policy documents through a centralized system."
                },
                {
                  icon: <CheckCircle2 size={40} className="text-[#f99d1c]" />,
                  title: "Real-Time Policy Validation",
                  description: "Employee claims are validated automatically against extracted policy rules."
                },
                {
                  icon: <Users size={40} className="text-[#f99d1c]" />,
                  title: "Role-Based Access Control",
                  description: "Different user roles can manage, query, or interpret policies without manual intervention."
                },
                {
                  icon: <BookOpen size={40} className="text-[#f99d1c]" />,
                  title: "Transparent Decision-Making",
                  description: "Every decision is documented with clear reasoning and traceability."
                },
                {
                  icon: <ShieldCheck size={40} className="text-[#f99d1c]" />,
                  title: "OPA & Rego Policy Engine",
                  description: "Uses industry-standard Open Policy Agent (OPA) and Rego for scalable policy enforcement."
                },
                {
                  icon: <Scale size={40} className="text-[#f99d1c]" />,
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
                    <div className="space-y-3">
                      <h3 className="text-[#11253e] font-bold text-xl">{capability.title}</h3>
                      <p className="text-[#11253e]/80 font-light leading-relaxed">{capability.description}</p>
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Measurable Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-[#11253e] to-[#1a3a5f] relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(249, 157, 28, 0.3) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
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
                Measurable Benefits
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
              <p className="text-white/80 text-lg font-light leading-relaxed">
                Transform your policy management with quantifiable results
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Operational Efficiency",
                  metrics: [
                    "85–90% reduction in manual policy review effort",
                    "Faster claim validation and approval"
                  ]
                },
                {
                  title: "Compliance & Risk Reduction",
                  metrics: [
                    "Eliminates compliance violations through automated enforcement",
                    "Ensures adherence to regulations such as FMLA and ACA"
                  ]
                },
                {
                  title: "Complete Audit Traceability",
                  metrics: [
                    "Real-time audit trail for regulatory reporting",
                    "Simplifies dispute resolution with full decision history"
                  ]
                },
                {
                  title: "Regulatory Adaptability",
                  metrics: [
                    "Handles state-specific benefit rules across locations",
                    "Quickly adapts to changing regulatory requirements"
                  ]
                },
                {
                  title: "Cost Optimization",
                  metrics: [
                    "Reduces operational costs significantly",
                    "Improves accuracy and consistency in policy enforcement"
                  ]
                },
                {
                  title: "Scalable Policy Infrastructure",
                  metrics: [
                    "Reusable policy framework across multiple business domains",
                    "Client-side validation and server-side enforcement"
                  ]
                }
              ].map((benefit, idx) => (
                <Motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-sm space-y-6 hover:transform hover:scale-105 transition-transform"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-1 bg-[#f99d1c]"></div>
                    <h3 className="text-[#11253e] font-bold text-xl">{benefit.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {benefit.metrics.map((metric, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <CheckCircle2 size={18} className="text-[#f99d1c] shrink-0 mt-0.5" />
                        <span className="text-[#11253e]/80 font-light text-md leading-relaxed">{metric}</span>
                      </div>
                    ))}
                  </div>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#11253e] to-[#1a3a5f] p-16 rounded-sm relative overflow-hidden"
          >
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(249, 157, 28, 0.6) 1px, transparent 1px)`,
                backgroundSize: '32px 32px'
              }}
            ></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight leading-tight">
                  Ready to Automate Your Policy Compliance?
                </h2>
                <div className="w-24 h-1 bg-[#f99d1c]"></div>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                  Discover how Nabhira's Policy Reinforcement Agent can transform your compliance operations and reduce operational costs.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/policy-engine')}&title=${encodeURIComponent('Policy Reinforcement Agent')}&category=Solutions`}>
                  <button className="bg-[#f99d1c] text-[#11253e] px-12 py-6 font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all">
                    Schedule Consultation
                  </button>
                </Link>
                <button 
                  onClick={() => setIsBrochureModalOpen(true)}
                  className="border-2 border-white text-white px-12 py-6 font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-[#11253e] transition-all"
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

      <SalesBrochureModal 
        isOpen={isBrochureModalOpen} 
        onClose={() => setIsBrochureModalOpen(false)} 
        pageTitle="Policy Reinforcement Agent" 
      />
    </>
  );
}