"use client";

import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ArrowRight, Shield, FileCheck, Search, Users, Eye, Lock } from "lucide-react";

export default function DataGovernance() {
  useEffect(() => {
    document.title = "Data Governance & Quality | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const principles = [
    {
      title: "Data Stewardship",
      desc: "Establishing clear ownership and accountability for data assets across the enterprise.",
      icon: <Users className="text-[#f99d1c]" size={24} />
    },
    {
      title: "Quality Assurance",
      desc: "Automated profiling and cleansing to ensure data accuracy, completeness, and consistency.",
      icon: <FileCheck className="text-[#f99d1c]" size={24} />
    },
    {
      title: "Privacy & Compliance",
      desc: "Aligning data operations with GDPR, CCPA, and industry-specific regulatory frameworks.",
      icon: <Lock className="text-[#f99d1c]" size={24} />
    },
    {
      title: "Cataloging & Lineage",
      desc: "Visualizing data movement from source to consumption for total transparency.",
      icon: <Eye className="text-[#f99d1c]" size={24} />
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[650px] bg-[#11253e] overflow-hidden flex items-center pt-8 md:pt-12">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000"
              alt="Data Governance Documentation"
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#11253e] via-[#11253e]/90 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] via-transparent to-transparent"></div>
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
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
                Governance by <br /> 
                <span className="text-white/40">Design.</span>
              </h1>
              
              <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
                Embedding <span className="text-white font-medium">trust</span> and <span className="text-[#f99d1c] font-medium">compliance</span> into every layer of your data lifecycle through automated governance.
              </p>

              <div className="pt-8 flex flex-wrap gap-4">
                <button className="bg-[#f99d1c] hover:bg-white hover:text-[#11253e] text-white px-10 py-5 rounded-sm font-medium transition-all inline-flex items-center space-x-3 uppercase text-[11px] tracking-widest shadow-2xl shadow-[#f99d1c]/20">
                  <span>Compliance Audit</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* Governance Principles */}
        <section className="py-32 bg-[#fdfbf7]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                 <h2 className="text-[#11253e] text-4xl font-medium tracking-tight mb-8">Trust is the <br /><span className="text-[#f99d1c]">New Currency.</span></h2>
                 <p className="text-[#11253e]/60 text-lg font-light leading-relaxed mb-12">
                   Without governance, data becomes a liability. We transform your data into a verified asset by implementing automated policies that enforce quality and privacy at scale.
                 </p>
                 
                 <div className="space-y-6">
                   {principles.map((item, i) => (
                     <Motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-6 p-6 bg-white border border-gray-100 group hover:border-[#f99d1c]/30 transition-all"
                     >
                       <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-gray-50 text-[#f99d1c] group-hover:bg-[#f99d1c] group-hover:text-white transition-all">
                         {item.icon}
                       </div>
                       <div>
                         <h4 className="text-[#11253e] text-sm font-bold uppercase tracking-normal mb-2">{item.title}</h4>
                         <p className="text-[#11253e]/50 text-xs font-light leading-relaxed">{item.desc}</p>
                       </div>
                     </Motion.div>
                   ))}
                 </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 border border-[#f99d1c]/20 rounded-sm"></div>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000"
                  alt="Professional data review"
                  className="w-full h-full object-cover rounded-sm shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Block with Pattern */}
        <section className="py-32 bg-[#11253e] relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, #ffffff, #ffffff 1px, transparent 1px, transparent 40px)' }}></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
             <div className="max-w-3xl mx-auto space-y-8">
               <h2 className="text-white text-3xl md:text-5xl font-medium tracking-tight">Automating Compliance Across the <span className="text-[#f99d1c]">Cloud Continuum.</span></h2>
               <p className="text-white/50 text-lg font-light leading-relaxed">
                 Our governance frameworks are built for multi-cloud environments, ensuring that whether your data sits in AWS, Azure, or On-prem, the same rigorous standards apply.
               </p>
               <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                 {[
                   { label: "Data Quality", val: "100%" },
                   { label: "Audit Readiness", val: "Instant" },
                   { label: "Risk Mitigation", val: "95%+" },
                   { label: "Compliance", val: "Global" }
                 ].map((stat, i) => (
                   <div key={i} className="space-y-2">
                     <p className="text-[#f99d1c] text-4xl font-bold">{stat.val}</p>
                     <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold">{stat.label}</p>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <Motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#11253e] p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden"
            >
              {/* Pattern Background for CTA */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#f99d1c 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              
              <div className="max-w-2xl space-y-6 relative z-10">
                <h2 className="text-white text-3xl md:text-5xl font-medium tracking-tight">
                  Secure Your <span className="text-[#f99d1c]">Competitive Edge.</span>
                </h2>
                <p className="text-white/60 text-lg font-light leading-relaxed">
                  Join the ranks of data-driven enterprises that prioritize trust. Schedule a governance workshop to identify your compliance gaps.
                </p>
              </div>
              
              <button className="relative z-10 whitespace-nowrap bg-[#f99d1c] hover:bg-white hover:text-[#11253e] text-white px-12 py-6 rounded-sm font-medium transition-all inline-flex items-center space-x-4 uppercase text-xs tracking-[0.2em] group">
                <span>Start Audit</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Motion.div>
          </div>
        </section>
    </>
  );
}
