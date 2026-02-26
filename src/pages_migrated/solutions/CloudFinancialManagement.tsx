"use client";

import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ServiceHero } from "../../components/ServiceHero";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { BarChart3, TrendingDown, DollarSign, PieChart, Activity, Zap, ArrowRight, CheckCircle2, ShieldCheck, Scale } from "lucide-react";

export default function CloudFinancialManagement() {
  useEffect(() => {
    document.title = "Cloud Financial Management (FinOps) | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ServiceHero 
        title={<>Cloud <span className="text-[#f99d1c]">Economics.</span></>}
        description="Maximize the business value of every cloud dollar. Our FinOps services provide deep visibility, automated optimization, and cultural change to drive unit-economic efficiency at scale."
        subtitle="Cloud Financial Management"
        category="Cloud Financial Management"
        image="https://images.unsplash.com/photo-1632055186471-64814edeaab4?auto=format&fit=crop&q=80&w=2000"
      />

        {/* Visibility and Allocation Section */}
        <section className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-[#11253e] text-4xl font-medium tracking-normal uppercase leading-tight">
                    Full Visibility <br />
                    <span className="text-[#f99d1c]">Unit Economics</span>
                  </h2>
                  <p className="text-[#11253e]/60 text-lg font-light leading-relaxed">
                    Most companies struggle to attribute cloud costs to business units or specific products. We implement advanced tagging strategies and cost allocation engines to provide real-time unit economics—helping you understand the true cost of every transaction.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="p-8 border border-gray-100 space-y-4 shadow-sm hover:border-[#f99d1c] transition-colors group">
                    <PieChart size={24} className="text-[#f99d1c]" />
                    <h4 className="text-[#11253e] text-lg font-medium uppercase tracking-normal">Cost Allocation</h4>
                    <p className="text-[#11253e]/50 text-xs font-light leading-relaxed">Attributing 100% of cloud spend to products, teams, and cost centers.</p>
                  </div>
                  <div className="p-8 border border-gray-100 space-y-4 shadow-sm hover:border-[#f99d1c] transition-colors group">
                    <TrendingDown size={24} className="text-[#f99d1c]" />
                    <h4 className="text-[#11253e] text-lg font-medium uppercase tracking-normal">Optimization</h4>
                    <p className="text-[#11253e]/50 text-xs font-light leading-relaxed">Automated rightsizing and reservation management strategies.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="p-16 bg-gray-50 border border-gray-100 rounded-sm space-y-12 shadow-2xl overflow-hidden relative">
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#f99d1c]/5 blur-[60px]"></div>
                  <div className="space-y-6 relative z-10">
                    <h3 className="text-[#11253e] text-xl font-medium uppercase tracking-normal">FinOps Maturity Index</h3>
                    <div className="space-y-8">
                      {[
                        { label: "Cost Visibility", val: "92%" },
                        { label: "Resource Optimization", val: "78%" },
                        { label: "Unit Economic Maturity", val: "64%" },
                        { label: "Cultural Accountability", val: "45%" }
                      ].map((item, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between text-[10px] font-medium uppercase tracking-normal">
                            <span className="text-[#11253e]/60">{item.label}</span>
                            <span className="text-[#f99d1c]">{item.val}</span>
                          </div>
                          <div className="h-1 bg-gray-200 w-full">
                            <div className="h-full bg-[#f99d1c]" style={{ width: item.val }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FinOps Lifecycle Section */}
        <section className="py-32 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
              <h2 className="text-[#11253e] text-4xl font-medium tracking-normal uppercase">The FinOps Lifecycle</h2>
              <div className="w-16 h-1 bg-[#f99d1c] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 shadow-sm">
              {[
                { 
                  title: "Inform", 
                  desc: "Providing the data to enable business units to understand their spending behavior.", 
                  icon: <Activity size={32} /> 
                },
                { 
                  title: "Optimize", 
                  desc: "Empowering teams to identify and execute on cost-saving opportunities through rightsizing.", 
                  icon: <Zap size={32} /> 
                },
                { 
                  title: "Operate", 
                  desc: "Implementing a continuous culture of financial accountability and automated governance.", 
                  icon: <Scale size={32} /> 
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-16 space-y-8 hover:bg-gray-50 transition-all group text-center">
                  <div className="w-16 h-16 bg-[#11253e]/5 flex items-center justify-center rounded-full mx-auto group-hover:bg-[#f99d1c] transition-all">
                    <div className="group-hover:text-white transition-colors">{item.icon}</div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-[#11253e] text-2xl font-medium uppercase tracking-normal">{item.title}</h3>
                    <p className="text-[#11253e]/60 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Savings Focus CTA */}
        <section className="py-32 bg-[#11253e] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <h2 className="text-white text-4xl lg:text-6xl font-medium tracking-normal uppercase leading-tight">
                  Redirect Spend to <br />
                  <span className="text-[#f99d1c]">Innovation.</span>
                </h2>
                <p className="text-white/40 text-xl font-light leading-relaxed">
                  FinOps isn't about spending less—it's about making sure your spending drives maximum revenue. Every dollar saved in cloud waste is a dollar that can be reinvested into R&D.
                </p>
                
                <div className="flex flex-wrap gap-8">
                  <div className="space-y-2">
                    <p className="text-[#f99d1c] text-5xl font-medium">30%</p>
                    <p className="text-white/20 text-[10px] font-medium uppercase tracking-normal leading-relaxed">Average immediate <br />cost reduction.</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[#f99d1c] text-5xl font-medium">2.5x</p>
                    <p className="text-white/20 text-[10px] font-medium uppercase tracking-normal leading-relaxed">Increase in Cloud <br />ROI efficiency.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-16 space-y-12 backdrop-blur-sm">
                 <h3 className="text-white text-2xl font-medium tracking-normal">Cloud Savings Analysis</h3>
                 <p className="text-white/40 text-sm font-light leading-relaxed">Upload your current billing exports for a free, high-level optimization report.</p>
                 <div className="space-y-6">
                    <button className="w-full bg-[#f99d1c] text-white py-6 text-[12px] font-medium uppercase tracking-normal hover:bg-white hover:text-[#11253e] transition-all">
                      Request Spend Audit
                    </button>
                    <button className="w-full text-white/60 border border-white/10 py-6 text-[12px] font-medium uppercase tracking-normal hover:bg-white/10 transition-all">
                      Platform Overview
                    </button>
                 </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
