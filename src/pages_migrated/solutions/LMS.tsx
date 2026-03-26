"use client";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion as Motion } from "motion/react";
import { SalesBrochureModal } from "../../components/SalesBrochureModal";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { GraduationCap, BrainCircuit, BarChart, Laptop, Globe, UserCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function LMSSolution({ wordpressData }: any) {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  useEffect(() => {
    document.title = "AI-Powered LMS | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    {
      title: "Adaptive Learning Paths",
      description: "AI-driven curriculum that adjusts in real-time based on learner performance and knowledge gaps.",
      icon: <BrainCircuit className="text-[#f99d1c]" />
    },
    {
      title: "Enterprise Grade Analytics",
      description: "Deep insights into organizational skill mapping and ROI on training initiatives.",
      icon: <BarChart className="text-[#f99d1c]" />
    },
    {
      title: "Multilingual Intelligence",
      description: "Automatic translation and culturally nuanced content adaptation for global workforces.",
      icon: <Globe className="text-[#f99d1c]" />
    },
    {
      title: "Seamless Integration",
      description: "Native connectors for HRMS, ERP, and collaboration tools like Slack and Microsoft Teams.",
      icon: <UserCheck className="text-[#f99d1c]" />
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[650px] bg-[#11253e] overflow-hidden flex items-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="max-w-4xl">
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-[#f99d1c]/20 px-4 py-2 rounded-full mb-8">
                  <GraduationCap size={16} className="text-[#f99d1c]" />
                  <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-widest">Next-Gen Education</span>
                </div>
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                  Empower Your Workforce with <br />
                  <span className="text-[#f99d1c]">Cognitive Learning</span>
                </h1>
                <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
                  Nabhira's AI-Powered LMS goes beyond hosting videos. It's a cognitive partner that understands how your employees learn and optimizes for maximum retention.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/lms')}&title=${encodeURIComponent('Cognitive Learning LMS')}&category=Solutions`}>
                    <button className="bg-[#f99d1c] text-white px-10 py-4 text-[12px] font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(249,157,28,0.3)] transition-all">
                      Start Your Transformation
                    </button>
                  </Link>
                  <button 
                    onClick={() => setIsBrochureModalOpen(true)}
                    className="text-white px-10 py-4 text-[12px] font-bold uppercase tracking-widest border border-white/20 hover:bg-white/10 transition-all"
                  >
                    Download Brochure
                  </button>
                </div>
              </Motion.div>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="space-y-6">
                  <div className="w-16 h-16 bg-[#11253e] flex items-center justify-center rounded-sm">
                    {pillar.icon}
                  </div>
                  <h3 className="text-[#11253e] text-xl font-bold uppercase tracking-tight">{pillar.title}</h3>
                  <p className="text-[#11253e] text-sm leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Focus */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -inset-4 bg-[#f99d1c]/5 -rotate-2 rounded-lg"></div>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                  alt="Learning Team"
                  className="relative rounded-sm shadow-2xl aspect-video"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-10">
                <div className="space-y-4">
                  <h2 className="text-[#11253e] text-3xl md:text-4xl font-bold tracking-tight">The Architecture of <br />Intelligent Upskilling</h2>
                  <div className="w-16 h-1 bg-[#f99d1c]"></div>
                </div>
                <p className="text-[#11253e] text-lg font-light leading-relaxed">
                  Our system utilizes a decentralized data mesh to ensure that learning data is secure yet accessible for cross-departmental analytics. From micro-learning modules to comprehensive certification tracks, every interaction is measured and mapped.
                </p>
                
                <div className="grid gap-6">
                  {[
                    { label: "AI Proctoring", desc: "Integrity-first assessments with biometric and behavioral analysis." },
                    { label: "Gamified Ecosystem", desc: "Drive engagement through competitive leaderboards and token rewards." },
                    { label: "Content Generation", desc: "Automatically create quizzes and summaries from existing documents." }
                  ].map((feat, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="w-1 bg-[#f99d1c]/20 group-hover:bg-[#f99d1c] transition-colors"></div>
                      <div>
                        <h4 className="text-[#11253e] text-sm font-bold uppercase tracking-widest mb-1">{feat.label}</h4>
                        <p className="text-[#11253e] text-xs uppercase tracking-wider">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-[#11253e] text-3xl font-bold text-center mb-16 uppercase tracking-widest">Why Nabhira LMS?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#11253e] p-12 text-white">
                <h3 className="text-[#f99d1c] text-xl font-bold mb-8 uppercase tracking-widest">Modern AI LMS</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4 items-start opacity-90"><CheckCircle2 className="text-green-400 shrink-0" size={20} /> Personalized based on neural behavior</li>
                  <li className="flex gap-4 items-start opacity-90"><CheckCircle2 className="text-green-400 shrink-0" size={20} /> Real-time skill gap automated mitigation</li>
                  <li className="flex gap-4 items-start opacity-90"><CheckCircle2 className="text-green-400 shrink-0" size={20} /> Agentic AI teaching assistants 24/7</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-12">
                <h3 className="text-[#11253e] text-xl font-bold mb-8 uppercase tracking-widest">Traditional LMS</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4 items-start opacity-40"><CheckCircle2 size={20} className="shrink-0" /> Linear, one-size-fits-all approach</li>
                  <li className="flex gap-4 items-start opacity-40"><CheckCircle2 size={20} className="shrink-0" /> Manual reporting and gap analysis</li>
                  <li className="flex gap-4 items-start opacity-40"><CheckCircle2 size={20} className="shrink-0" /> static content hosting only</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-[#11253e] text-4xl font-bold mb-12">Ready to architect your organization's future?</h2>
            <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/lms')}&title=${encodeURIComponent('Cognitive Learning LMS')}&category=Solutions`}>
              <button className="bg-[#11253e] text-white px-12 py-5 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-[#f99d1c] transition-all">
                Request Platform Tour
              </button>
            </Link>
            <button 
              onClick={() => setIsBrochureModalOpen(true)}
              className="mt-6 border border-[#11253e] text-[#11253e] px-12 py-5 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-[#11253e] hover:text-white transition-all ml-4"
            >
              Download Brochure
            </button>
          </div>
        </section>

      <SalesBrochureModal 
        isOpen={isBrochureModalOpen} 
        onClose={() => setIsBrochureModalOpen(false)} 
        pageTitle="Cognitive Learning LMS" 
      />
    </>
  );
}