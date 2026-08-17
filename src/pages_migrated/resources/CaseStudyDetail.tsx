"use client";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ArrowLeft, CheckCircle2, Quote } from "lucide-react";
import architectureDiagram from "../../assets/f86ef792b8fce95bf78f308f3a39f029fb47c6a1.png";

export default function CaseStudyDetail({ wordpressData }: { wordpressData: any }) {
  // Use wordpressData exclusively
  const study = wordpressData;

  useEffect(() => {
    if (study) {
      document.title = `${study.title} | Nabhira Case Studies`;
      window.scrollTo(0, 0);
    }
  }, [study]);

  if (!study) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-[#11253e]">Case Study Not Found</h2>
          <Link href="/resources/case-studies" className="text-[#f99d1c] font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2">
            <ArrowLeft size={14} /> Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  // Helper to parse line-separated metrics/items
  const parseList = (text: string) => text ? text.split('\n').filter(line => line.trim() !== '') : [];

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="relative h-[600px] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src={study.image} 
            alt={study.title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#11253e]/95 via-[#11253e]/85 to-[#11253e]/75"></div>
          
          {/* Dot Grid Overlay */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(249, 157, 28, 0.4) 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }}
          ></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <Motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-8"
          >
            <nav className="flex items-center space-x-3 text-[11px] font-bold uppercase tracking-[0.2em]">
              <Link href="/resources/case-studies" className="text-white/60 hover:text-white transition-colors">Case Studies</Link>
              <span className="text-[#f99d1c]">/</span>
              <span className="text-[#f99d1c]">{study.clientIndustry}</span>
            </nav>
            
            <div className="space-y-6">
              <div className="inline-block px-6 py-2 bg-[#f99d1c]/20 border border-[#f99d1c]">
                <p className="text-[#f99d1c] font-bold text-xs uppercase tracking-[0.2em]">{study.clientName}</p>
              </div>
              
              <h1 className="text-white text-5xl md:text-7xl font-light tracking-tight leading-[1.1]">
                {study.title}
              </h1>
              
              <div className="flex items-center gap-8 pt-4">
                <div className="space-y-2">
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Industry</p>
                  <p className="text-white text-lg">{study.clientIndustry}</p>
                </div>
                <div className="h-12 w-px bg-white/20"></div>
                <div className="space-y-2">
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Impact</p>
                  <p className="text-[#f99d1c] text-lg font-bold">{study.impactMetric}</p>
                </div>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Key Results Highlight Bar */}
      <section className="bg-[#f99d1c] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[study.highlight1, study.highlight2, study.highlight3].filter(Boolean).map((result, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <CheckCircle2 size={24} className="text-[#11253e] shrink-0" />
                <p className="text-[#11253e] font-medium leading-relaxed">{result}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Summary & Customer Background */}
      {(study.executiveSummary || study.customerBackground) && (
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {study.executiveSummary && (
                <Motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-1 h-16 bg-[#f99d1c]"></div>
                    <h2 className="text-[#11253e] font-bold uppercase tracking-[0.2em] text-xs">
                      {study.executiveSummaryTitle || "Executive Summary"}
                    </h2>
                  </div>
                  <div className="text-[#11253e] text-lg font-light leading-relaxed whitespace-pre-line">
                    {study.executiveSummary}
                  </div>
                </Motion.div>
              )}
              
              {study.customerBackground && (
                <Motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-1 h-16 bg-[#f99d1c]"></div>
                    <h2 className="text-[#11253e] font-bold uppercase tracking-[0.2em] text-xs">
                      {study.customerBackgroundTitle || "Customer Background"}
                    </h2>
                  </div>
                  <div className="text-[#11253e] text-lg font-light leading-relaxed whitespace-pre-line">
                    {study.customerBackground}
                  </div>
                </Motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* The Challenge Section */}
      {study.challengeDescription && (
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="max-w-3xl">
                <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight mb-6">
                  {study.challengeMainTitle || "The Challenge"}
                </h2>
                <div className="w-24 h-1 bg-[#f99d1c] mb-8"></div>
                <div className="text-[#11253e] text-xl font-light leading-relaxed whitespace-pre-line">
                  {study.challengeDescription}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-16">
                {[1,2,3,4,5,6,7,8].map(num => {
                  const title = study[`challenge${num}Title`];
                  const desc = study[`challenge${num}Description`];
                  if (!title && !desc) return null;
                  return (
                    <Motion.div
                      key={num}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="bg-white p-8 border-l-4 border-[#f99d1c] shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#f99d1c]/10 flex items-center justify-center shrink-0">
                          <span className="text-[#f99d1c] font-bold text-lg">{num}</span>
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-[#11253e] font-bold text-lg">{title}</h3>
                          <p className="text-[#11253e]/80 font-light leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    </Motion.div>
                  );
                })}
              </div>
            </Motion.div>
          </div>
        </section>
      )}

      {/* Our Solution Section */}
      {study.solutionDescription && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12 mb-20"
            >
              <div className="max-w-3xl">
                <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight mb-6">
                  {study.solutionMainTitle || "Our Solution"}
                </h2>
                <div className="w-24 h-1 bg-[#f99d1c] mb-8"></div>
                <div className="text-[#11253e] text-xl font-light leading-relaxed whitespace-pre-line">
                  {study.solutionDescription}
                </div>
              </div>
            </Motion.div>

            <div className="space-y-20">
              {[1,2,3,4,5,6,7,8,9,10].map((num, idx) => {
                const title = study[`solution${num}Title`];
                const desc = study[`solution${num}Description`];
                const itemsStr = study[`solution${num}Items`];
                if (!title && !desc) return null;
                const items = parseList(itemsStr);

                return (
                  <Motion.div
                    key={num}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`grid lg:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                  >
                    <div className="space-y-4">
                      <div className="inline-block px-4 py-2 bg-[#f99d1c]/10 border border-[#f99d1c]/30">
                        <p className="text-[#f99d1c] font-bold text-xs uppercase tracking-[0.2em]">Step {num}</p>
                      </div>
                      <h3 className="text-[#11253e] text-3xl font-light tracking-tight">{title}</h3>
                      <p className="text-[#11253e]/80 text-lg font-light leading-relaxed">{desc}</p>
                    </div>
                    {items.length > 0 && (
                      <div className="bg-gradient-to-br from-[#11253e] to-[#1a3a5f] p-8 rounded-sm">
                        <ul className="space-y-4">
                          {items.map((item, i) => (
                            <li key={i} className="flex gap-4 text-white font-light">
                              <CheckCircle2 size={20} className="text-[#f99d1c] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </Motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Detailed Results Section */}
      {study.result1Title && (
        <section className="py-24 bg-[#11253e] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 mb-16 text-center max-w-3xl mx-auto"
            >
              <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight">
                {study.impactMainTitle || "Results & Business Impact"}
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
              <p className="text-white/80 text-lg font-light leading-relaxed">
                {study.impactIntro}
              </p>
            </Motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1,2,3,4,5,6,7,8,9].map(num => {
                const title = study[`result${num}Title`];
                const desc = study[`result${num}Description`];
                const metricsStr = study[`result${num}Metrics`];
                if (!title) return null;
                const metrics = parseList(metricsStr);

                return (
                  <Motion.div
                    key={num}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-sm space-y-6 hover:transform hover:scale-105 transition-transform h-full"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-1 bg-[#f99d1c]"></div>
                      <h3 className="text-[#11253e] font-bold text-xl">{title}</h3>
                      <p className="text-[#11253e]/80 font-light leading-relaxed">{desc}</p>
                    </div>
                    {metrics.length > 0 && (
                      <div className="pt-6 border-t border-gray-200 space-y-3">
                        {metrics.map((impact, i) => (
                          <div key={i} className="flex gap-3 items-start">
                            <CheckCircle2 size={18} className="text-[#f99d1c] shrink-0 mt-0.5" />
                            <span className="text-[#11253e] font-medium text-sm">{impact}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </Motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Quote Section */}
      {study.quoteText && (
        <section className="py-32 bg-gradient-to-br from-white via-[#fdfbf7] to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none">
            <Quote size={500} className="text-[#11253e]" />
          </div>
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="w-16 h-1 bg-[#f99d1c] mx-auto"></div>
              <Quote size={56} className="text-[#f99d1c] mx-auto opacity-30" />
              <h2 className="text-[#11253e] text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight">
                {study.quoteText}
              </h2>
              <div className="space-y-3 pt-8">
                <p className="text-[#11253e] font-bold uppercase tracking-[0.2em] text-sm">{study.quoteAuthor}</p>
                <div className="w-12 h-px bg-[#11253e]/20 mx-auto"></div>
              </div>
            </Motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-[#11253e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight leading-tight">
                {study.ctaTitle || "Ready for Your Transformation?"}
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c]"></div>
              <p className="text-white/80 text-lg font-light leading-relaxed">
                {study.ctaDescription || "Every enterprise has unique challenges. Our experts are ready to design your specific roadmap to success."}
              </p>
            </Motion.div>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href={study.ctaButton1Url || "/contact"}>
                <button className="w-full sm:w-auto bg-[#f99d1c] text-[#11253e] px-12 py-6 font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all">
                  {study.ctaButton1Text || "Consult Our Experts"}
                </button>
              </Link>
              <Link href={study.ctaButton2Url || "/resources/case-studies"}>
                <button className="w-full sm:w-auto border-2 border-white text-white px-12 py-6 font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-[#11253e] transition-all">
                  {study.ctaButton2Text || "View More Cases"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}