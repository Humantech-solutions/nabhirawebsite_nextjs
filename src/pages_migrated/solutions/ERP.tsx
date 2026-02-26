"use client";

import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Briefcase, BarChart3, PieChart, Truck, Users2, Workflow, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ERPSolution() {
  useEffect(() => {
    document.title = "WorkbookNow ERP | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Modern Corporate Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#11253e] -skew-x-12 translate-x-24 hidden lg:block"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <Motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-1 bg-[#f99d1c]"></div>
                    <span className="text-[#11253e] text-[10px] font-bold uppercase tracking-[0.4em]">Integrated Intelligence</span>
                  </div>
                  <h1 className="text-[#11253e] text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                    WorkbookNow <br />
                    <span className="text-[#f99d1c]">Enterprise ERP</span>
                  </h1>
                  <p className="text-[#11253e]/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
                    One source of truth. Nabhira’s WorkbookNow ERP synchronizes your entire business—from procurement to final delivery—on a unified, AI-native platform.
                  </p>
                  <div className="flex flex-wrap gap-6 pt-6">
                    <button className="bg-[#11253e] text-white px-10 py-5 text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-[#f99d1c] transition-all">
                      Discover the Platform
                    </button>
                    <button className="text-[#11253e] px-10 py-5 text-[12px] font-bold uppercase tracking-[0.2em] border border-gray-200 hover:bg-gray-50 transition-all">
                      Watch Video
                    </button>
                  </div>
                </Motion.div>
              </div>
              
              <div className="hidden lg:block">
                <div className="relative p-12 bg-white shadow-2xl rounded-sm border border-gray-100">
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { label: "Revenue Growth", val: "+24%", color: "text-green-500" },
                      { label: "Efficiency Gain", val: "+40%", color: "text-[#f99d1c]" },
                      { label: "Data Accuracy", val: "99.9%", color: "text-blue-500" },
                      { label: "Cloud Uptime", val: "99.99%", color: "text-purple-500" }
                    ].map((stat, i) => (
                      <div key={i} className="p-8 bg-gray-50 border border-gray-100 rounded-sm space-y-2">
                        <p className={`${stat.color} text-4xl font-bold tracking-tight`}>{stat.val}</p>
                        <p className="text-[#11253e]/40 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modular Ecosystem */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
              <h2 className="text-[#11253e] text-3xl md:text-4xl font-bold tracking-tight uppercase">Modular Excellence</h2>
              <div className="w-16 h-1 bg-[#f99d1c] mx-auto"></div>
              <p className="text-[#11253e]/60 text-lg font-light leading-relaxed">
                WorkbookNow is designed to grow with you. Activate only the modules you need today, and scale seamlessly as your business complexity evolves.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Financial Control",
                  desc: "Global multi-currency accounting with real-time consolidated reporting and automated tax compliance.",
                  icon: <PieChart className="text-[#f99d1c]" />
                },
                {
                  title: "Supply Chain",
                  desc: "Intelligent procurement and inventory management driven by predictive demand forecasting.",
                  icon: <Truck className="text-[#f99d1c]" />
                },
                {
                  title: "Manufacturing (MES)",
                  desc: "Real-time production tracking, quality management, and shop floor automation integration.",
                  icon: <Workflow className="text-[#f99d1c]" />
                },
                {
                  title: "Sales & CRM",
                  desc: "Integrated pipeline management with automated lead scoring and 360-degree customer insights.",
                  icon: <Users2 className="text-[#f99d1c]" />
                },
                {
                  title: "BI & Analytics",
                  desc: "Advanced data visualization and AI-native forecasting for strategic decision making.",
                  icon: <BarChart3 className="text-[#f99d1c]" />
                },
                {
                  title: "HRM Integration",
                  desc: "Seamless synchronization with Nabhira HRMS for unified workforce management.",
                  icon: <Briefcase className="text-[#f99d1c]" />
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-12 border border-gray-100 group hover:border-[#f99d1c]/40 transition-all">
                  <div className="w-12 h-12 mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-[#11253e] text-lg font-bold mb-4 uppercase tracking-widest">{item.title}</h3>
                  <p className="text-[#11253e]/60 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Logic Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-32 items-center">
              <div>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1200"
                  alt="Modern Office"
                  className="rounded-sm shadow-xl"
                />
              </div>
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-[#11253e] text-4xl font-bold tracking-tight">The Architecture of Efficiency</h2>
                  <p className="text-[#11253e]/60 text-lg font-light leading-relaxed">
                    WorkbookNow isn't just software; it's a reflection of best-in-class business processes. We bake international standards into every module.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    "ISO 9001/27001 compliant workflows",
                    "Native cloud-first architecture",
                    "Extensible API-first design",
                    "Integrated Policy Engine for complex business rules"
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <CheckCircle2 size={16} className="text-[#f99d1c]" />
                      <span className="text-[11px] font-bold text-[#11253e] uppercase tracking-[0.2em]">{text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6">
                  <button className="text-[#11253e] text-[12px] font-bold uppercase tracking-[0.3em] flex items-center gap-4 group">
                    Platform Architecture <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global CTA */}
        <section className="py-32 bg-[#11253e] text-center">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            <h2 className="text-white text-4xl lg:text-5xl font-bold tracking-tight uppercase">Scale Without Limits.</h2>
            <p className="text-white/40 text-xl font-light">
              Transform your enterprise with a platform built for the complexities of tomorrow.
            </p>
            <div className="pt-8 flex flex-wrap justify-center gap-8">
              <button className="bg-[#f99d1c] text-white px-12 py-5 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#11253e] transition-all">
                Request a Demo
              </button>
              <button className="border border-white/20 text-white px-12 py-5 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
    </>
  );
}
