"use client";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion as Motion } from "motion/react";
import { SalesBrochureModal } from "../../components/SalesBrochureModal";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ArrowRight, Box, Layout, ShieldCheck, Database, HardDrive, Share2 } from "lucide-react";

export default function DataFoundation({ wordpressData }: any) {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Data Foundation & Storage | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    {
      title: "Master Data Management",
      desc: "Creating a single, trusted version of truth for your most critical business entities.",
      icon: <ShieldCheck className="text-[#f99d1c]" size={24} />
    },
    {
      title: "Cloud Data Warehousing",
      desc: "Architecting high-performance storage solutions that scale elastically with your needs.",
      icon: <Database className="text-[#f99d1c]" size={24} />
    },
    {
      title: "Metadata Management",
      desc: "Implementing cataloging systems to ensure data discoverability and lineage tracking.",
      icon: <Layout className="text-[#f99d1c]" size={24} />
    },
    {
      title: "Unified Data Fabric",
      desc: "Connecting disparate data sources into a cohesive architecture for seamless access.",
      icon: <Share2 className="text-[#f99d1c]" size={24} />
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[650px] bg-[#11253e] overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1636347172071-6d17b1139816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGF0YSUyMGZvdW5kYXRpb24lMjBhcmNoaXRlY3R1cmUlMjBzdG9yYWdlfGVufDF8fHx8MTc3MjA3MjI5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Data Foundation Global View"
              className="w-full h-full object-cover opacity-30 mix-blend-screen"
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
              className="max-w-3xl space-y-8"
            >
              <nav className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4 font-bold">
                <span>Home</span>
                <span className="w-1 h-1 rounded-full bg-[#f99d1c]"></span>
                <span className="text-[#f99d1c]">Data & Analytics</span>
              </nav>
              
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                Solid Data <br /> 
                <span className="text-white/40">Foundations.</span>
              </h1>
              
              <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
                Building the structural integrity required for <span className="text-white font-medium">Enterprise AI</span> through robust storage and master data frameworks.
              </p>

              <div className="pt-8 flex flex-wrap gap-4">
                <button 
                  onClick={() => setIsBrochureModalOpen(true)}
                  className="border-2 border-white/20 text-white px-10 py-5 rounded-sm font-medium hover:bg-white hover:text-[#11253e] transition-all uppercase text-[11px] tracking-widest"
                >
                  Download Brochure
                </button>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* Foundations Grid */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
              <h2 className="text-[#11253e] text-4xl font-medium tracking-tight">The Pillars of <span className="text-[#f99d1c]">Scalability</span></h2>
              <p className="text-[#11253e] text-lg font-light leading-relaxed">
                A house is only as strong as its foundation. We ensure your data estate is built on rock-solid principles of integrity and accessibility.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 shadow-sm">
              {pillars.map((pillar, i) => (
                <Motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-12 space-y-8 hover:bg-[#fdfbf7] transition-all"
                >
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-sm text-[#f99d1c]">
                    {pillar.icon}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-[#11253e] text-lg font-bold tracking-normal uppercase">{pillar.title}</h3>
                    <p className="text-[#11253e] text-sm font-light leading-relaxed">{pillar.desc}</p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Structural Section */}
        <section className="py-32 bg-[#11253e] text-white overflow-hidden relative">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
             <div className="absolute inset-0 border-l-[1px] border-white/20 -skew-x-12 transform origin-top translate-x-20"></div>
             <div className="absolute inset-0 border-l-[1px] border-white/10 -skew-x-12 transform origin-top translate-x-40"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight">
                    Architecting for <br />
                    <span className="text-[#f99d1c]">Unbounded Growth.</span>
                  </h2>
                  <p className="text-white/60 text-lg font-light leading-relaxed">
                    We move away from rigid silos toward flexible, componentized data architectures that adapt as your business evolves.
                  </p>
                </div>

                <div className="space-y-8">
                  {[
                    "Decoupled Storage & Compute",
                    "Elastic Resource Provisioning",
                    "Automated Data Tiering",
                    "Cross-Region Synchronization"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-4">
                      <div className="w-2 h-2 rounded-full bg-[#f99d1c]"></div>
                      <span className="text-sm font-medium uppercase tracking-widest text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                  alt="High tech hardware foundation"
                  className="w-full aspect-[4/5] object-cover grayscale brightness-75 border border-white/10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-[#eeede9] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 relative">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#f99d1c]"></div>
              <div className="max-w-2xl space-y-6">
                <h2 className="text-[#11253e] text-3xl md:text-5xl font-medium tracking-tight">
                  Design Your <span className="text-[#f99d1c]">Data Legacy.</span>
                </h2>
                <p className="text-[#11253e] text-lg font-light leading-relaxed">
                  Start with a baseline assessment of your storage architecture. Our experts will design a foundation that supports your 10-year growth plan.
                </p>
              </div>
              <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/data-foundation')}&title=${encodeURIComponent('Data Foundation')}&category=Solutions`}>
                <button className="whitespace-nowrap bg-[#11253e] hover:bg-[#f99d1c] text-white px-12 py-6 rounded-sm font-medium transition-all inline-flex items-center space-x-4 uppercase text-xs tracking-[0.2em] group">
                  <span>View Framework</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <button 
                onClick={() => setIsBrochureModalOpen(true)}
                className="mt-6 md:mt-0 border border-[#11253e]/20 text-[#11253e] px-12 py-6 rounded-sm font-medium hover:bg-[#11253e] hover:text-white transition-all uppercase text-xs tracking-[0.2em]"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </section>

      <SalesBrochureModal 
        isOpen={isBrochureModalOpen} 
        onClose={() => setIsBrochureModalOpen(false)} 
        pageTitle="Data Foundation" 
      />
    </>
  );
}