"use client";

import React from "react";
import { motion as Motion } from "motion/react";
import { ServiceHero } from "../../../components/ServiceHero";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { Database, BarChart3, ShieldCheck, Zap, ArrowRight, Layers, FileSpreadsheet, Network } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DataAnalytics({ wordpressData }: any) {
  const solutions = [
    {
      title: "Data Engineering",
      path: "/solutions/data-engineering",
      desc: "Robust ETL/ELT workflows that automate data movement and transformation with surgical precision.",
      icon: <Database className="text-[#f99d1c]" size={24} />
    },
    {
      title: "Data Foundation",
      path: "/solutions/data-foundation",
      desc: "Architecting scalable data lakes and warehouses that serve as the single source of truth.",
      icon: <Layers className="text-[#f99d1c]" size={24} />
    },
    {
      title: "Data Governance",
      path: "/solutions/data-governance",
      desc: "Ensuring compliance, security, and quality across your entire data landscape.",
      icon: <ShieldCheck className="text-[#f99d1c]" size={24} />
    }
  ];

  const features = [
    {
      title: "Predictive Modeling",
      desc: "Anticipate market shifts and customer behavior with advanced statistical models.",
      icon: <BarChart3 size={20} />
    },
    {
      title: "Real-time Processing",
      desc: "Process millions of events per second for immediate business responsiveness.",
      icon: <Zap size={20} />
    },
    {
      title: "Automated Reporting",
      desc: "Eliminate manual data prep with self-service dashboards and automated insights.",
      icon: <FileSpreadsheet size={20} />
    },
    {
      title: "Knowledge Graphs",
      desc: "Uncover hidden relationships in your data with semantic graph technologies.",
      icon: <Network size={20} />
    }
  ];

  return (
    <div className="flex flex-col">
      <ServiceHero
        subtitle="Data & Analytics"
        title={
          <>
            Turn Data into <br />
            <span className="text-white/40 font-light italic">Strategic Capital.</span>
          </>
        }
        description="From foundation to foresight, we build the architectures that empower data-driven enterprises. Our solutions turn raw complexity into clear competitive advantage."
        image="https://images.unsplash.com/photo-1686061593213-98dad7c599b9?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Solutions Grid */}
      <section className="py-24 lg:py-32 bg-white text-[#11253e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 lg:mb-24">
            <h2 className="text-3xl lg:text-5xl font-medium tracking-tight mb-8">
              End-to-End <span className="text-[#f99d1c]">Data Excellence</span>
            </h2>
            <p className="text-[#11253e] text-lg lg:text-xl leading-relaxed font-light">
              We provide the full spectrum of data services, ensuring your organization can ingest, store, manage, and analyze information at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, idx) => (
              <Motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-[#fdfbf7] p-10 border border-[#11253e]/5 hover:border-[#f99d1c]/30 transition-all duration-500"
              >
                <div className="mb-8 p-4 bg-white shadow-sm inline-block rounded-sm transition-transform duration-500 group-hover:scale-110">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-medium mb-4 group-hover:text-[#f99d1c] transition-colors">{solution.title}</h3>
                <p className="text-[#11253e] text-sm leading-relaxed mb-8 font-light">
                  {solution.desc}
                </p>
                <Link href={solution.path}
                  className="inline-flex items-center space-x-2 text-[11px] font-bold uppercase tracking-widest text-[#11253e] hover:text-[#f99d1c] transition-colors"
                >
                  <span>Explore Solution</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 lg:py-32 bg-[#11253e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-5xl font-medium tracking-tight">
                  Advanced <span className="text-[#f99d1c]">Capabilities</span>
                </h2>
                <p className="text-white/60 text-lg font-light leading-relaxed">
                  Beyond standard pipelines, we implement cutting-edge analytics techniques that provide deep business intelligence.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="text-[#f99d1c]">{feature.icon}</div>
                    <h4 className="text-xl font-medium">{feature.title}</h4>
                    <p className="text-white/40 text-sm font-light leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-white/5 backdrop-blur-3xl border border-white/10 p-1 rounded-sm overflow-hidden group">
                <Image src="https://images.unsplash.com/photo-1551288049-bbbda5366fd2?auto=format&fit=crop&q=80&w=1000" 
                  alt="Analytics Dashboard" 
                  className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#f99d1c] p-10 text-[#11253e] hidden md:block">
                <p className="text-4xl font-bold tracking-tighter">70%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest">Faster Insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-4xl lg:text-6xl font-medium tracking-tight text-[#11253e]">
            Ready to unlock the <br /> 
            <span className="italic font-light">value in your data?</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/services/data/data-analytics')}&title=${encodeURIComponent('Data & Analytics')}&category=Service`}>
              <button className="bg-[#11253e] text-white px-12 py-6 rounded-sm font-medium uppercase text-[11px] tracking-[0.2em] hover:bg-[#f99d1c] transition-all duration-300 w-full sm:w-auto shadow-2xl">
                Consult our Experts
              </button>
            </Link>
            <Link href="/resources/case-studies">
              <button className="border border-[#11253e]/20 text-[#11253e] px-12 py-6 rounded-sm font-medium uppercase text-[11px] tracking-[0.2em] hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto">
                View Case Studies
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
