"use client";

import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ShieldAlert, Fingerprint, Lock, Activity, Layers, Code, ArrowRight, CheckCircle2 } from "lucide-react";

export default function PolicyEngineSolution() {
  useEffect(() => {
    document.title = "Policy Engine System | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-[#11253e] overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f99d1c1a_0%,transparent_70%)]"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 space-y-12">
                <Motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-5 py-2 mb-10">
                    <ShieldAlert size={14} className="text-[#f99d1c]" />
                    <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">Advanced Governance</span>
                  </div>
                  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                    Decentralized <br />
                    <span className="text-[#f99d1c]">Policy Intelligence</span>
                  </h1>
                  <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
                    Nabhira’s Policy Engine System is a high-performance, programmable governance layer that enforces complex business rules across distributed architectures with microsecond latency.
                  </p>
                  <div className="flex flex-wrap gap-8">
                    <button className="bg-[#f99d1c] text-white px-10 py-5 text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#11253e] transition-all">
                      Integrate Now
                    </button>
                    <button className="text-white/40 hover:text-white px-10 py-5 text-[12px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 transition-colors">
                      Technical Documentation <ArrowRight size={16} />
                    </button>
                  </div>
                </Motion.div>
              </div>
              
              <div className="lg:col-span-5 hidden lg:block">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#f99d1c] to-blue-600 rounded-sm blur opacity-20 animate-pulse"></div>
                  <div className="relative bg-[#11253e] border border-white/10 p-1 rounded-sm">
                    <div className="bg-black/40 p-8 space-y-4 font-mono text-xs">
                      <div className="flex gap-4"><span className="text-blue-400">01</span><span className="text-white/40">policy "DynamicDiscount" {"{"}</span></div>
                      <div className="flex gap-4"><span className="text-blue-400">02</span><span className="text-[#f99d1c] ml-4">condition: </span><span className="text-white/80">user.loyalty_tier == "platinum"</span></div>
                      <div className="flex gap-4"><span className="text-blue-400">03</span><span className="text-[#f99d1c] ml-4">action: </span><span className="text-white/80">apply_discount(0.15)</span></div>
                      <div className="flex gap-4"><span className="text-blue-400">04</span><span className="text-white/40">{"}"}</span></div>
                      <div className="flex gap-4 mt-8"><span className="text-green-400"># Policy deployed to 14 Edge Nodes</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Capabilities */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-20">
              {[
                {
                  title: "Granular Access",
                  desc: "Attribute-Based Access Control (ABAC) that scales to millions of identities and billions of requests.",
                  icon: <Fingerprint className="text-[#f99d1c]" />
                },
                {
                  title: "Audit Transparency",
                  desc: "Every policy evaluation is immutably logged for total regulatory compliance and forensic analysis.",
                  icon: <Activity className="text-[#f99d1c]" />
                },
                {
                  title: "Edge Execution",
                  desc: "Execute complex logic at the edge of your network, reducing latency and offloading central compute.",
                  icon: <Layers className="text-[#f99d1c]" />
                }
              ].map((item, i) => (
                <div key={i} className="space-y-8 group">
                  <div className="w-12 h-px bg-gray-200 group-hover:w-24 group-hover:bg-[#f99d1c] transition-all duration-500"></div>
                  <div className="space-y-6">
                    <div className="text-[#11253e] opacity-40 group-hover:opacity-100 transition-opacity">
                      {item.icon}
                    </div>
                    <h3 className="text-[#11253e] text-lg font-bold uppercase tracking-widest">{item.title}</h3>
                    <p className="text-[#11253e] text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architect Section */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-32 items-center">
              <div>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200"
                  alt="Server Infrastructure"
                  className="rounded-sm shadow-3xl"
                />
              </div>
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-[#11253e] text-4xl font-bold tracking-tight leading-tight">Decouple Logic from <br />Legacy Codebases</h2>
                  <div className="w-16 h-1 bg-[#f99d1c]"></div>
                  <p className="text-[#11253e] text-lg font-light leading-relaxed">
                    Nabhira's Policy Engine allows business analysts to update rules in real-time without requiring code redeployments or engineering sprints.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    "Hot-swappable policy definitions",
                    "Simulated 'What-If' testing environments",
                    "Native support for OPA (Open Policy Agent)",
                    "Unified governance dashboard"
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <CheckCircle2 size={16} className="text-[#f99d1c]" />
                      <span className="text-[11px] font-bold text-[#11253e] uppercase tracking-[0.1em]">{text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-8">
                  <button className="bg-[#11253e] text-white px-10 py-5 text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-[#f99d1c] transition-all">
                    View Architecture Guide
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Clients */}
        <section className="py-32 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-[#11253e] text-[10px] font-bold uppercase tracking-[0.5em] mb-20">Securing Global Enterprises</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
              {/* Placeholders for partner logos */}
              <div className="h-12 flex items-center justify-center font-bold text-[#11253e] text-2xl">FINTECH_CORE</div>
              <div className="h-12 flex items-center justify-center font-bold text-[#11253e] text-2xl">RETAIL_FLOW</div>
              <div className="h-12 flex items-center justify-center font-bold text-[#11253e] text-2xl">GLOBAL_SEC</div>
              <div className="h-12 flex items-center justify-center font-bold text-[#11253e] text-2xl">DATA_GUARD</div>
            </div>
          </div>
        </section>
    </>
  );
}