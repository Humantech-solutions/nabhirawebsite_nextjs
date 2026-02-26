"use client";

import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Cloud, Server, BarChart3, ShieldCheck, Terminal, Database, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CloudInfraSolution() {
  useEffect(() => {
    document.title = "Cloud Infra Deployment & Monitoring | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Engineering Hero */}
      <section className="relative py-24 lg:py-40 bg-[#11253e] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <Motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-10"
              >
                <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-2">
                  <Terminal size={16} className="text-[#f99d1c]" />
                  <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">Infrastructure as Code</span>
                </div>
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                  Architecting <br />
                  <span className="text-[#f99d1c]">Resilience.</span>
                </h1>
                <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
                  Automated deployment, predictive monitoring, and sovereign cloud governance. Nabhira builds the foundations that never fail.
                </p>
                <div className="flex flex-wrap gap-6 pt-4">
                  <button className="bg-[#f99d1c] text-white px-10 py-5 text-[12px] font-bold uppercase tracking-[0.2em] hover:shadow-[0_0_50px_rgba(249,157,28,0.4)] transition-all">
                    Scale Infrastructure
                  </button>
                  <button className="text-white/60 hover:text-white px-10 py-5 text-[12px] font-bold uppercase tracking-[0.2em] border border-white/10 transition-all">
                    Explore Stack
                  </button>
                </div>
              </Motion.div>
              
              <div className="relative hidden lg:block">
                <div className="aspect-[4/5] bg-gradient-to-br from-[#11253e] to-black border border-white/10 p-12 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#f99d1c]/10 blur-[120px]"></div>
                  <div className="space-y-8 relative z-10">
                    <div className="w-12 h-1 bg-[#f99d1c]"></div>
                    <div className="space-y-4">
                      <h3 className="text-white text-3xl font-bold tracking-tight">Cloud Sovereignty <br />First Principles</h3>
                      <p className="text-white/30 text-sm font-light leading-relaxed">
                        Every deployment is designed with data residency and sovereignty at its core. We don't just deploy to the cloud; we own the architectural integrity of your digital estate.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 pt-12">
                      <div className="space-y-2">
                        <p className="text-[#f99d1c] text-4xl font-bold">99.999%</p>
                        <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Target Uptime</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-[#f99d1c] text-4xl font-bold">&lt;50ms</p>
                        <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Global Latency</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Lifecycle */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
              <div className="max-w-2xl space-y-6">
                <h2 className="text-[#11253e] text-4xl font-bold tracking-tight">The Modern Deployment <br />Lifecycle</h2>
                <div className="w-12 h-1 bg-[#f99d1c]"></div>
              </div>
              <p className="text-[#11253e]/40 text-sm uppercase tracking-widest font-bold max-w-sm">
                From Terraform orchestration to Prometheus observability, our stack is enterprise-ready.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-1px bg-gray-100 border border-gray-100">
              {[
                {
                  title: "Automated Orchestration",
                  desc: "Zero-touch provisioning across multi-cloud and hybrid environments using declarative IaC patterns.",
                  icon: <Server className="text-[#f99d1c]" />
                },
                {
                  title: "Predictive Monitoring",
                  desc: "AI-native anomaly detection that identifies infrastructure fatigue before it leads to downtime.",
                  icon: <BarChart3 className="text-[#f99d1c]" />
                },
                {
                  title: "Sovereign Security",
                  desc: "Hardened deployments with automated compliance checks and real-time threat intelligence integration.",
                  icon: <ShieldCheck className="text-[#f99d1c]" />
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-16 space-y-10 hover:bg-gray-50 transition-colors">
                  <div className="w-14 h-14 bg-gray-50 flex items-center justify-center border border-gray-100">
                    {item.icon}
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-[#11253e] text-xl font-bold tracking-tight uppercase">{item.title}</h3>
                    <p className="text-[#11253e]/60 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                  <button className="text-[10px] font-bold text-[#11253e] uppercase tracking-[0.3em] flex items-center gap-3 group">
                    View Spec <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hybrid Cloud Focus */}
        <section className="py-32 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-[#11253e] text-4xl font-bold tracking-tight">The Unified Data Plane</h2>
                  <p className="text-[#11253e]/60 text-lg font-light leading-relaxed">
                    Nabhira provides a single pane of glass for your entire hybrid cloud estate. Whether it's AWS, Azure, GCP, or On-premise bare metal, your monitoring and deployment remain consistent.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { label: "Multi-Cloud Mesh", icon: <Cloud size={16} /> },
                    { label: "Edge Computing", icon: <Server size={16} /> },
                    { label: "Data Sovereignty", icon: <Database size={16} /> },
                    { label: "SecOps Pipelines", icon: <ShieldCheck size={16} /> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white p-6 border border-gray-200 shadow-sm">
                      <div className="text-[#f99d1c]">{item.icon}</div>
                      <span className="text-[10px] font-bold text-[#11253e] uppercase tracking-widest">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
                  alt="DevOps Center"
                  className="rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-3xl"
                />
                <div className="absolute -bottom-10 -right-10 bg-[#f99d1c] p-10 hidden md:block">
                  <p className="text-white text-sm font-bold uppercase tracking-[0.2em] mb-4">Live Status</p>
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-xs font-mono">ALL SYSTEMS OPERATIONAL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure CTA */}
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
            <h2 className="text-[#11253e] text-5xl font-bold tracking-tighter">Build Your Digital Fortress.</h2>
            <p className="text-[#11253e]/60 text-xl font-light">
              Stop fighting with infrastructure. Let Nabhira architect a cloud environment that scales with your ambition.
            </p>
            <div className="pt-6">
              <button className="bg-[#11253e] text-white px-12 py-5 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-[#f99d1c] transition-all">
                Speak to an Architect
              </button>
            </div>
          </div>
        </section>
    </>
  );
}
