"use client";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { LimitlessTogether } from "./Footer";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Cloud, Database, Cpu, ChevronRight, ArrowRight } from "lucide-react";

interface ServiceBlock {
  title: string;
  description: string;
  features: string[];
}

interface IndustryLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  overview: string;
  cloudService: ServiceBlock;
  dataService: ServiceBlock;
  aiService: ServiceBlock;
}

export function IndustryLayout({
  title,
  subtitle,
  heroImage,
  overview,
  cloudService,
  dataService,
  aiService
}: IndustryLayoutProps) {
  useEffect(() => {
    document.title = `${title} | Nabhira Technologies`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <>
      {/* Industry Hero */}
      <section className="relative min-h-[450px] md:min-h-[520px] overflow-hidden flex items-center py-12 md:py-24">
          <div className="absolute inset-0">
            <ImageWithFallback
              src={heroImage}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#11253e]/90 via-[#11253e]/70 to-transparent"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="max-w-3xl space-y-6 md:space-y-8">
              <Motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-3 text-[11px] md:text-[13px] font-medium tracking-[-0.02em] mb-6 md:mb-8">
                  <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
                  <span className="text-white/30 font-light">&gt;</span>
                  <span className="text-[#f99d1c]">Industries</span>
                </nav>

                <div className="border-l-[1px] border-white/20 pl-6 md:pl-12 py-2">
                  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-4 md:mb-8">
                    {title}
                  </h1>
                  <p className="text-[#f99d1c] text-base md:text-xl font-medium tracking-normal uppercase mb-4">
                    {subtitle}
                  </p>
                  <p className="text-white/90 text-sm sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm">
                    {overview}
                  </p>
                </div>
              </Motion.div>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="mb-20">
              <h2 className="text-[#11253e] text-3xl md:text-4xl font-light mb-4 tracking-tight">
                Architectural <span className="font-medium">Solutions</span>
              </h2>
              <div className="w-20 h-1 bg-[#f99d1c]"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cloud Block */}
              <Motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-8 border border-gray-100 bg-[#f8f9fa] hover:border-[#f99d1c]/30 hover:shadow-xl transition-all duration-500 rounded-sm"
              >
                <div className="w-14 h-14 bg-[#11253e] flex items-center justify-center rounded-sm mb-8 group-hover:bg-[#f99d1c] transition-colors">
                  <Cloud className="text-white" size={28} />
                </div>
                <h3 className="text-[#11253e] text-xl font-medium mb-4 tracking-normal uppercase text-[12px]">Cloud Transformation</h3>
                <h4 className="text-[#11253e] text-lg font-medium mb-4">{cloudService.title}</h4>
                <p className="text-[#11253e] font-light text-sm leading-relaxed mb-8">
                  {cloudService.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {cloudService.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-[#11253e]">
                      <div className="w-1 h-1 bg-[#f99d1c] rounded-full mt-1.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Motion.div>

              {/* Data Block */}
              <Motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group p-8 border border-gray-100 bg-white hover:border-[#f99d1c]/30 hover:shadow-xl transition-all duration-500 rounded-sm"
              >
                <div className="w-14 h-14 bg-[#11253e] flex items-center justify-center rounded-sm mb-8 group-hover:bg-[#f99d1c] transition-colors">
                  <Database className="text-white" size={28} />
                </div>
                <h3 className="text-[#11253e] text-xl font-medium mb-4 tracking-normal uppercase text-[12px]">Data & Analytics</h3>
                <h4 className="text-[#11253e] text-lg font-medium mb-4">{dataService.title}</h4>
                <p className="text-[#11253e] font-light text-sm leading-relaxed mb-8">
                  {dataService.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {dataService.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-[#11253e]">
                      <div className="w-1 h-1 bg-[#f99d1c] rounded-full mt-1.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Motion.div>

              {/* AI Block */}
              <Motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group p-8 border border-gray-100 bg-[#f8f9fa] hover:border-[#f99d1c]/30 hover:shadow-xl transition-all duration-500 rounded-sm"
              >
                <div className="w-14 h-14 bg-[#11253e] flex items-center justify-center rounded-sm mb-8 group-hover:bg-[#f99d1c] transition-colors">
                  <Cpu className="text-white" size={28} />
                </div>
                <h3 className="text-[#11253e] text-xl font-medium mb-4 tracking-normal uppercase text-[12px]">Agentic AI</h3>
                <h4 className="text-[#11253e] text-lg font-medium mb-4">{aiService.title}</h4>
                <p className="text-[#11253e] font-light text-sm leading-relaxed mb-8">
                  {aiService.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {aiService.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-[#11253e]">
                      <div className="w-1 h-1 bg-[#f99d1c] rounded-full mt-1.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Motion.div>
            </div>
          </div>
        </section>

        {/* Strategic Outcome Section */}
        <section className="py-24 bg-[#11253e] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f99d1c] opacity-[0.03] skew-x-12 translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-light mb-8 leading-tight">
                  Driving <span className="font-medium text-[#f99d1c]">Architectural Maturity</span> In Your Domain.
                </h2>
                <p className="text-white/60 font-light text-lg mb-10 leading-relaxed">
                  Our industry-specific delivery frameworks ensure that Cloud, Data, and AI initiatives are not just isolated projects, but integrated components of a resilient enterprise architecture.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <button className="bg-[#f99d1c] text-white px-8 py-4 text-[12px] font-medium tracking-normal uppercase rounded-sm hover:bg-[#e89018] transition-all flex items-center justify-center gap-3">
                    Download Framework <ArrowRight size={16} />
                  </button>
                  <button className="border border-white/20 text-white px-8 py-4 text-[12px] font-medium tracking-normal uppercase rounded-sm hover:bg-white hover:text-[#11253e] transition-all">
                    Consult an Architect
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 border border-white/10 rounded-sm">
                  <div className="text-3xl font-medium text-[#f99d1c] mb-2">40%</div>
                  <div className="text-xs font-medium uppercase tracking-normal text-white/40">Efficiency Gain</div>
                </div>
                <div className="p-8 border border-white/10 rounded-sm">
                  <div className="text-3xl font-medium text-[#f99d1c] mb-2">2.5x</div>
                  <div className="text-xs font-medium uppercase tracking-normal text-white/40">Data Velocity</div>
                </div>
                <div className="p-8 border border-white/10 rounded-sm">
                  <div className="text-3xl font-medium text-[#f99d1c] mb-2">Zero</div>
                  <div className="text-xs font-medium uppercase tracking-normal text-white/40">Security Breaches</div>
                </div>
                <div className="p-8 border border-white/10 rounded-sm">
                  <div className="text-3xl font-medium text-[#f99d1c] mb-2">15+</div>
                  <div className="text-xs font-medium uppercase tracking-normal text-white/40">Global Centers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LimitlessTogether />
    </>
  );
}