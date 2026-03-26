"use client";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion as Motion } from "motion/react";
import { SalesBrochureModal } from "../../components/SalesBrochureModal";

import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import aiServerImg from "../../assets/ai.png";
import { Target, Brain, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export default function AIConsulting({ wordpressData }: any) {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  useEffect(() => {
    document.title = "AI Consulting | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const strategies = [
    {
      title: "AI Strategy & Roadmap",
      desc: "Architecting a multi-year AI vision that aligns with your business objectives and delivers measurable ROI.",
      icon: <Target className="text-[#f99d1c]" size={24} />
    },
    {
      title: "LLM Implementation",
      desc: "Customizing and deploying Large Language Models for enterprise-specific use cases with precision and safety.",
      icon: <Brain className="text-[#f99d1c]" size={24} />
    },
    {
      title: "Data Readiness Audit",
      desc: "Evaluating your data ecosystem to ensure it is structured, clean, and ready to fuel high-performance AI models.",
      icon: <ShieldCheck className="text-[#f99d1c]" size={24} />
    },
    {
      title: "Cognitive Automation",
      desc: "Applying advanced ML algorithms to automate complex decision-making processes and unlock efficiency.",
      icon: <Zap className="text-[#f99d1c]" size={24} />
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative min-h-[450px] md:h-[650px] bg-[#11253e] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
            <ImageWithFallback 
              src={aiServerImg}
              alt="AI Intelligence Brain"
              className="w-full h-full object-cover opacity-40 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#11253e] via-[#11253e]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] via-transparent to-transparent"></div>
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
            <Motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl space-y-6 md:space-y-8"
            >
              <nav className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4 font-bold">
                <span>Home</span>
                <span className="w-1 h-1 rounded-full bg-[#f99d1c]"></span>
                <span className="text-[#f99d1c]">Artificial Intelligence</span>
              </nav>
              
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-4 md:mb-8">
                Strategic <br /> 
                <span className="text-white/40">AI Advantage.</span>
              </h1>
              
              <p className="text-white/90 text-sm sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm">
                Navigating the complex landscape of <span className="text-white font-medium">Artificial Intelligence</span> to drive business transformation and operational excellence.
              </p>

              <div className="pt-4 md:pt-8 flex flex-wrap gap-4">
                <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/ai-consulting')}&title=${encodeURIComponent('AI Consulting')}&category=Solutions`}>
                  <button 
                    onClick={() => setIsBrochureModalOpen(true)}
                    className="border-2 border-white/20 text-white px-8 md:px-10 py-4 md:py-5 rounded-sm font-medium hover:bg-white hover:text-[#11253e] transition-all uppercase text-[10px] md:text-[11px] tracking-widest"
                  >
                    Download Brochure
                  </button>
                </Link>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* Content Section 1: The AI Paradigm */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-8">
                <h2 className="text-[#11253e] text-4xl lg:text-5xl font-medium tracking-tight">The AI-First Enterprise</h2>
                <p className="text-[#11253e] text-lg leading-relaxed font-light">
                  Moving beyond experimentation to industrial-scale implementation.
                </p>
                <p className="text-[#11253e] text-lg leading-relaxed font-light">
                  We specialize in identifying high-impact use cases where machine learning and generative AI can deliver immediate value, while building a foundation for long-term innovation.
                </p>
                <div className="flex flex-col space-y-4 pt-4">
                  {[
                    "Ethical AI Governance",
                    "Custom ML Model Development",
                    "Enterprise Search & Knowledge Graphs"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-[#f99d1c]/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#f99d1c]"></div>
                      </div>
                      <span className="text-[#11253e] text-sm font-medium uppercase tracking-wider">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-[#f99d1c]/5 rounded-sm -rotate-3 transform"></div>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                  alt="AI Analytics Visualization"
                  className="w-full h-full object-cover rounded-sm shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Strategies Grid */}
        <section className="py-32 bg-[#eeede9]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
              <h2 className="text-[#11253e] text-4xl font-medium tracking-tight uppercase">Consulting Pillars</h2>
              <div className="w-12 h-1 bg-[#f99d1c] mx-auto"></div>
              <p className="text-[#11253e] text-lg font-light leading-relaxed">
                A comprehensive suite of services designed to take you from initial assessment to full-scale deployment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {strategies.map((item, i) => (
                <Motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 hover:shadow-xl transition-all group border border-transparent hover:border-[#f99d1c]/20"
                >
                  <div className="mb-8">{item.icon}</div>
                  <h3 className="text-[#11253e] text-lg font-bold mb-4 tracking-normal">{item.title}</h3>
                  <p className="text-[#11253e] text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative bg-[#11253e] overflow-hidden">
          <div 
            className="absolute inset-0 opacity-[0.05]" 
            style={{ 
              backgroundImage: `radial-gradient(#f99d1c 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }}
          />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <Motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto space-y-12"
            >
              <h2 className="text-white text-4xl md:text-6xl font-medium tracking-tight leading-tight">
                Accelerate Your <span className="text-[#f99d1c]">Intelligence.</span>
              </h2>
              <p className="text-white/50 text-xl font-light">
                Our AI architects are ready to help you define and execute your next breakthrough.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/ai-consulting')}&title=${encodeURIComponent('AI Consulting')}&category=Solutions`}>
                  <button className="bg-[#f99d1c] text-white px-12 py-6 rounded-sm font-medium hover:bg-white hover:text-[#11253e] transition-all uppercase text-xs tracking-widest shadow-xl">
                    Connect with an AI Expert
                  </button>
                </Link>
                <button 
                  onClick={() => setIsBrochureModalOpen(true)}
                  className="border border-white/40 text-white px-12 py-6 rounded-sm font-medium hover:bg-white hover:text-[#11253e] transition-all uppercase text-xs tracking-widest"
                >
                  Download Brochure
                </button>
              </div>
            </Motion.div>
          </div>
        </section>

      <SalesBrochureModal 
        isOpen={isBrochureModalOpen} 
        onClose={() => setIsBrochureModalOpen(false)} 
        pageTitle="AI Consulting" 
      />
    </>
  );
}