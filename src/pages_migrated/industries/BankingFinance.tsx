"use client";

import React, { useEffect, useRef } from "react";
import { motion as Motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import {
  ArrowRight,
  Shield,
  CreditCard,
  Cloud,
  Smartphone,
  Database,
  Cpu,
  Check,
  Zap,
  Lock,
  FileCheck,
  UserCheck,
  Globe,
  Brain,
  TrendingUp,
  LayoutTemplate
} from "lucide-react";

export default function BankingFinance({ wordpressData }: any) {
  useEffect(() => {
    document.title = "Banking & Financial Services | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const challenges = [
    {
      title: "Legacy Systems",
      text: "Legacy core systems limiting innovation speed and agility.",
      icon: <Database className="text-[#f99d1c]" size={32} />,
    },
    {
      title: "Regulatory Complexity",
      text: "Increasing regulatory and compliance complexity across jurisdictions.",
      icon: <FileCheck className="text-[#f99d1c]" size={32} />,
    },
    {
      title: "Security Threats",
      text: "Rising cybersecurity and fraud risks in an interconnected world.",
      icon: <Lock className="text-[#f99d1c]" size={32} />,
    },
    {
      title: "Payment Evolution",
      text: "Real time payment and open banking expectations from customers.",
      icon: <CreditCard className="text-[#f99d1c]" size={32} />,
    },
    {
      title: "FinTech Competition",
      text: "Competition from digital native FinTech firms and neo-banks.",
      icon: <Zap className="text-[#f99d1c]" size={32} />,
    },
    {
      title: "Hyper-Personalization",
      text: "Demand for hyper personalized customer experiences and services.",
      icon: <UserCheck className="text-[#f99d1c]" size={32} />,
    },
  ];

  const impactAreas = [
    {
      id: "infrastructure",
      title: "Modern Core & Cloud Infrastructure",
      description: "Transitioning from monolithic legacy Banking & Finance applications to secure cloud-enabled and API-driven architectures.",
      details: ["Legacy-to-Cloud Migration", "API-First Architecture", "Scalability & Resilience"],
      icon: <Cloud size={40} />
    },
    {
      id: "digital",
      title: "Digital & Embedded Finance",
      description: "Enabling seamless omnichannel banking experiences including mobile platforms and digital onboarding.",
      details: ["Omnichannel Experience", "Digital Onboarding", "Embedded Finance"],
      icon: <Smartphone size={40} />
    },
    {
      id: "risk",
      title: "Risk Intelligence & Fraud Prevention",
      description: "AI-driven systems for credit risk modeling, fraud detection, transaction monitoring and regulatory reporting.",
      details: ["AI Risk Modeling", "Fraud Detection", "Transaction Monitoring"],
      icon: <Shield size={40} />
    },
    {
      id: "governance",
      title: "Data Governance & Regulatory Alignment",
      description: "Establishing enterprise data governance frameworks that improve reporting accuracy, transparency and audit readiness for financial institutions.",
      details: ["Data Governance", "Audit Readiness", "Reporting Accuracy"],
      icon: <LayoutTemplate size={40} />
    },
    {
      id: "operations",
      title: "Intelligent Operations",
      description: "Streamlining high-volume banking processes through automation to improve efficiency and customer response time.",
      details: ["Process Automation", "Operational Efficiency", "Faster Response Times"],
      icon: <Cpu size={40} />
    },
  ];

  const fintechServices = [
    {
      title: "Cloud Native Engineering",
      desc: "Building scalable products on modern cloud stacks.",
      icon: <Cloud />
    },
    {
      title: "Secure API Integration",
      desc: "Connecting ecosystems with banking-grade security.",
      icon: <Globe />
    },
    {
      title: "Payment Platforms",
      desc: "Next-gen payment and lending infrastructure.",
      icon: <CreditCard />
    },
    {
      title: "Data Architecture",
      desc: "Regulatory-ready data foundations.",
      icon: <Database />
    },
    {
      title: "AI Underwriting",
      desc: "Machine learning models for smarter credit decisions.",
      icon: <Brain />
    },
  ];

  return (
    <div ref={containerRef} className="bg-white text-[#11253e] selection:bg-[#f99d1c] selection:text-white">
      {/* ─── Hero Section ─── */}
      <section className="relative h-[400px] md:h-[520px] flex items-center overflow-hidden bg-[#11253e]">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Modern Financial Architecture"
            className="w-full h-full object-cover opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11253e] via-[#11253e]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] via-transparent to-transparent"></div>
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <nav className="flex items-center space-x-3 text-[11px] md:text-[13px] font-medium tracking-[-0.02em] mb-4">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <span className="text-white/30 font-light">&gt;</span>
              <span className="text-[#f99d1c] uppercase tracking-widest">Banking & Financial Services</span>
            </nav>
            
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
              Future of <br />
              <span className="text-[#f99d1c]">Trusted Finance</span>
            </h1>
            
            <p className="text-white/70 text-lg md:text-[22px] font-light max-w-2xl leading-relaxed mb-10 border-l-2 border-[#f99d1c] pl-6">
              We help financial institutions evolve from legacy-constrained operations to intelligent, secure and innovation-driven enterprises.
            </p>
          </Motion.div>
        </div>
      </section>

      {/* ─── The Industry Imperative ─── */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#11253e] mb-4">
                The Industry <span className="font-bold">Imperative</span>
              </h2>
              <div className="h-1 w-20 bg-[#f99d1c]"></div>
            </div>
            <p className="text-[#11253e] text-lg max-w-md text-right md:text-left">
              Financial institutions are navigating a defining decade. Transformation is no longer optional—it is structural.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((item, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#f99d1c]/30 transition-all duration-300 group"
              >
                <div className="mb-6 bg-[#11253e]/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-[#11253e] group-hover:text-white transition-colors duration-300">
                  <div className="group-hover:text-white text-[#11253e] transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#11253e] mb-3">{item.title}</h3>
                <p className="text-[#11253e] leading-relaxed">{item.text}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Impact Areas ─── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light text-[#11253e] mb-6">
              Where We Create <span className="italic font-serif text-[#f99d1c]">Impact</span>
            </h2>
            <p className="text-[#11253e] text-xl max-w-3xl mx-auto">
              Modernize platforms, strengthen governance and accelerate digital growth without compromising resilience.
            </p>
          </div>

          <div className="space-y-24">
            {impactAreas.map((area, idx) => (
              <Motion.div
                key={area.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-[#f99d1c] font-mono text-lg">0{idx + 1}</span>
                    <div className="h-px bg-[#11253e]/10 flex-grow"></div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#11253e]">{area.title}</h3>
                  <p className="text-[#11253e] text-lg leading-relaxed">{area.description}</p>
                  <ul className="space-y-3 pt-4">
                    {area.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-[#11253e] font-medium">
                        <div className="w-1.5 h-1.5 bg-[#f99d1c] rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/3] bg-[#f5f5f5] rounded-3xl overflow-hidden flex items-center justify-center group">
                    <div className="absolute inset-0 bg-[#11253e]/5 opacity-20"></div>
                    <div className="relative z-10 p-12 bg-white rounded-full shadow-2xl text-[#f99d1c] group-hover:scale-110 transition-transform duration-500">
                      <div className="transform scale-150">{area.icon}</div>
                    </div>
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#f99d1c]/10 rounded-full blur-3xl"></div>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FinTech Innovation ─── */}
      <section className="py-24 bg-[#11253e] text-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f99d1c]/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-light">
                Enabling <br />
                <span className="font-bold text-[#f99d1c]">FinTech Innovation</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-md">
                We combine startup agility with enterprise-grade engineering discipline to build the next generation of financial products.
              </p>
              <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/industries/banking-finance')}&title=${encodeURIComponent('Banking & Financial Services')}&category=Industries`} className="inline-flex items-center gap-2 text-[#f99d1c] font-medium hover:gap-4 transition-all">
                Partner with us <ArrowRight size={20} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {fintechServices.map((service, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-[#f99d1c] mb-4">{service.icon}</div>
                  <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                  <p className="text-white/50 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      

      
      {/* ─── Outcomes ─── */}
      <section className="py-24 bg-[#e5dfd3] relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'linear-gradient(to right, #11253e 1px, transparent 1px)', backgroundSize: '40px 100%' }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#11253e]">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold mb-4">Outcomes That Matter</h2>
              <p>Tangible results for forward-thinking institutions.</p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
              <div className="border-l-2 border-[#11253e]/20 pl-6">
                <TrendingUp size={32} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Faster Launches</h3>
                <p className="text-sm">Accelerated digital product delivery cycles.</p>
              </div>
              <div className="border-l-2 border-[#11253e]/20 pl-6">
                <Shield size={32} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Reduced Risk</h3>
                <p className="text-sm">Stronger compliance and audit readiness.</p>
              </div>
              <div className="border-l-2 border-[#11253e]/20 pl-6">
                <UserCheck size={32} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Customer Trust</h3>
                <p className="text-sm">Improved retention through secure experiences.</p>
              </div>
              <div className="border-l-2 border-[#11253e]/20 pl-6">
                <Database size={32} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Future Ready</h3>
                <p className="text-sm">Scalable infrastructure for long-term growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
