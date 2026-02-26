"use client";

import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ServiceHero } from "../../components/ServiceHero";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Layers, Terminal, Database, Server, Cpu, Workflow, ArrowRight, CheckCircle2, Zap, Layout } from "lucide-react";

export default function CloudModernization() {
  useEffect(() => {
    document.title = "Cloud Modernization Services | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ServiceHero 
        title={<>Evolve Your <span className="text-[#f99d1c]">Core Architecture.</span></>}
        description="Dismantle legacy monoliths and build the agile, cloud-native foundation your future demands. Modernization isn't just an update—it's a transformation of speed and resilience."
        subtitle="Cloud Modernization"
        category="Cloud Modernization"
        image="https://images.unsplash.com/photo-1763128516808-785e80c1dd68?auto=format&fit=crop&q=80&w=2000"
      />

        {/* Legacy vs Modern Pattern */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
              <div className="bg-white p-20 space-y-12">
                <div className="space-y-6">
                  <span className="text-gray-300 text-[10px] font-medium uppercase tracking-normal">The Past</span>
                  <h3 className="text-[#11253e] text-4xl font-medium uppercase tracking-normal">Legacy Monolith</h3>
                  <div className="w-12 h-1 bg-gray-200"></div>
                </div>
                <ul className="space-y-6">
                  {[
                    "Siloed Data Silos",
                    "Rigid Release Cycles",
                    "High Maintenance Overhead",
                    "Scaling Bottlenecks",
                    "Brittle Security Posture"
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 items-center text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
                      <span className="text-sm font-light uppercase tracking-normal">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-[#11253e] p-20 space-y-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#f99d1c]/10 blur-[100px] group-hover:bg-[#f99d1c]/20 transition-all duration-1000"></div>
                <div className="space-y-6">
                  <span className="text-[#f99d1c] text-[10px] font-medium uppercase tracking-normal">The Future</span>
                  <h3 className="text-white text-4xl font-medium uppercase tracking-normal">Cloud-Native Ecosystem</h3>
                  <div className="w-12 h-1 bg-[#f99d1c]"></div>
                </div>
                <ul className="space-y-6">
                  {[
                    "Event-Driven Microservices",
                    "Continuous Delivery (CI/CD)",
                    "Automated Operations (SRE)",
                    "Elastic Auto-Scaling",
                    "Zero-Trust Security Mesh"
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 items-center text-white/70">
                      <CheckCircle2 size={16} className="text-[#f99d1c]" />
                      <span className="text-sm font-medium uppercase tracking-normal">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Evolution Visualization */}
        <section className="py-32 bg-gray-50 border-y border-gray-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
              <div className="max-w-2xl space-y-6 text-left">
                <h2 className="text-[#11253e] text-4xl font-medium tracking-normal uppercase">Modernization Path</h2>
                <div className="w-12 h-1 bg-[#f99d1c]"></div>
              </div>
              <p className="text-[#11253e]/60 text-lg font-light max-w-lg leading-relaxed">
                Strategic modernization of applications, data, and infrastructure to unlock the power of cloud capabilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  title: "App Refactoring", 
                  desc: "Breaking down monoliths into resilient, scalable microservices architectures.", 
                  icon: <Cpu size={32} /> 
                },
                { 
                  title: "Data Modernization", 
                  desc: "Moving from rigid relational DBs to specialized, high-performance data planes.", 
                  icon: <Database size={32} /> 
                },
                { 
                  title: "Platform Ops", 
                  desc: "Building internal developer platforms to accelerate innovation velocity.", 
                  icon: <Terminal size={32} /> 
                },
                { 
                  title: "DevSecOps", 
                  desc: "Shifting security and operations left to build quality into the pipeline.", 
                  icon: <Layers size={32} /> 
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-12 space-y-10 border border-gray-200 hover:border-[#f99d1c] transition-all hover:-translate-y-2">
                  <div className="text-[#11253e]">{item.icon}</div>
                  <div className="space-y-4">
                    <h3 className="text-[#11253e] text-lg font-medium tracking-normal uppercase">{item.title}</h3>
                    <p className="text-[#11253e]/50 text-xs font-light leading-relaxed">{item.desc}</p>
                  </div>
                  <button className="text-[10px] font-medium text-[#f99d1c] uppercase tracking-normal flex items-center gap-3">
                    View Methodology <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Focused Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"
                  alt="Modern Data Center"
                  className="rounded-sm shadow-3xl grayscale grayscale-100 hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="space-y-12">
                <h2 className="text-[#11253e] text-4xl lg:text-5xl font-medium tracking-normal leading-tight">Quantifiable Impact <br />of Modernization</h2>
                <div className="grid grid-cols-2 gap-12">
                  <div className="space-y-2">
                    <p className="text-[#f99d1c] text-5xl font-medium tracking-normal">70%</p>
                    <p className="text-[#11253e]/40 text-[10px] font-medium uppercase tracking-normal">Deployment Frequency Increase</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[#f99d1c] text-5xl font-medium tracking-normal">45%</p>
                    <p className="text-[#11253e]/40 text-[10px] font-medium uppercase tracking-normal">Operational Cost Reduction</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[#f99d1c] text-5xl font-medium tracking-normal">99.9%</p>
                    <p className="text-[#11253e]/40 text-[10px] font-medium uppercase tracking-normal">Reduction in MTTR</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[#f99d1c] text-5xl font-medium tracking-normal">3x</p>
                    <p className="text-[#11253e]/40 text-[10px] font-medium uppercase tracking-normal">Application Performance Gain</p>
                  </div>
                </div>
                <div className="pt-6">
                  <button className="bg-[#11253e] text-white px-12 py-6 text-[12px] font-medium uppercase tracking-normal hover:bg-[#f99d1c] transition-all">
                    Schedule Value Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
