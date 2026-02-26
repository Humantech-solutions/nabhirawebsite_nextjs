"use client";

import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ServiceHero } from "../../components/ServiceHero";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Truck, RotateCcw, Layout, Boxes, Terminal, RefreshCw, ArrowRight, CheckCircle2, Zap, ShieldCheck } from "lucide-react";

export default function CloudMigration() {
  useEffect(() => {
    document.title = "Cloud Migration Services | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ServiceHero 
        title={<>Seamless <span className="text-[#f99d1c]">Transition.</span></>}
        description="Move your mission-critical workloads to the cloud with surgical precision. Our automated migration pipelines minimize risk and maximize ROI from day one."
        subtitle="Cloud Migration"
        category="Cloud Migration"
        image="https://images.unsplash.com/photo-1628313348684-5d75dd67e7c8?auto=format&fit=crop&q=80&w=2000"
      />

        {/* The 6 R's Framework */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
              <h2 className="text-[#11253e] text-4xl font-medium tracking-normal uppercase">The 6 R's Strategy</h2>
              <div className="w-16 h-1 bg-[#f99d1c] mx-auto"></div>
              <p className="text-[#11253e]/60 text-lg font-light">
                Not every workload belongs in the cloud the same way. We apply the right strategy for every asset.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Rehost", desc: "Lift-and-shift migration for rapid data center exit.", icon: <RefreshCw size={24} /> },
                { title: "Replatform", desc: "Making minimal changes to leverage cloud-native features.", icon: <Layout size={24} /> },
                { title: "Refactor", desc: "Re-architecting applications to be fully cloud-native.", icon: <Terminal size={24} /> },
                { title: "Repurchase", desc: "Moving to SaaS alternatives (e.g., Salesforce, M365).", icon: <Boxes size={24} /> },
                { title: "Retain", desc: "Keeping legacy apps on-prem until retirement.", icon: <RotateCcw size={24} /> },
                { title: "Retire", desc: "Decommissioning redundant or outdated systems.", icon: <Truck size={24} /> }
              ].map((item, i) => (
                <div key={i} className="group p-12 border border-gray-100 hover:border-[#f99d1c] transition-all bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:shadow-[#11253e]/5">
                  <div className="text-[#11253e]/20 group-hover:text-[#f99d1c] transition-colors mb-8">
                    {item.icon}
                  </div>
                  <h3 className="text-[#11253e] text-xl font-medium uppercase tracking-normal mb-4">{item.title}</h3>
                  <p className="text-[#11253e]/50 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Pattern */}
        <section className="py-32 bg-[#11253e] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-4 gap-12 relative">
              {/* Connector Line */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 hidden lg:block"></div>
              
              {[
                { step: "01", title: "Discovery", desc: "Automated inventory of your entire digital estate." },
                { step: "02", title: "Landing Zone", desc: "Configuring hardened cloud foundations." },
                { step: "03", title: "Execution", desc: "Pilot migrations followed by wave-based execution." },
                { step: "04", title: "Optimization", desc: "Post-migration tuning for performance and cost." }
              ].map((item, i) => (
                <div key={i} className="relative z-10 space-y-8 text-center lg:text-left">
                  <div className="w-16 h-16 bg-[#f99d1c] mx-auto lg:mx-0 flex items-center justify-center text-[#11253e] font-medium text-xl">
                    {item.step}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-white text-lg font-medium uppercase tracking-normal">{item.title}</h4>
                    <p className="text-white/40 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Risk Mitigation */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200"
                  alt="Secure Migration"
                  className="rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 shadow-3xl"
                />
              </div>
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-[#11253e] text-4xl font-medium tracking-normal">Security-First Migration</h2>
                  <p className="text-[#11253e]/60 text-lg font-light leading-relaxed">
                    We don't just move data; we secure it. Every byte is encrypted in transit and at rest, and every workload is migrated into a pre-hardened landing zone compliant with your industry standards.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    "Zero-Downtime Data Synchronization",
                    "Automated Rollback Safeguards",
                    "Compliance Guardrails (SOC2, GDPR, HIPAA)",
                    "Performance Baseline Validation"
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4 items-center border-b border-gray-100 pb-4">
                      <ShieldCheck size={18} className="text-[#f99d1c]" />
                      <span className="text-[10px] font-medium text-[#11253e] uppercase tracking-normal">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
