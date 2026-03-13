"use client";
import Image from "next/image";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Users, Banknote, CalendarCheck, Briefcase, Heart, UserPlus, ArrowRight, CheckCircle2, BarChart3, ShieldCheck, Globe, Zap } from "lucide-react";

export default function HRMSSolution({ wordpressData }: any) {
  useEffect(() => {
    document.title = "HRMS & Payroll Solutions | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-[#11253e] overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-5 grayscale"></div>
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
                    <Heart size={14} className="text-[#f99d1c]" />
                    <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">Culture First Architecture</span>
                  </div>
                  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                    Human <br />
                    <span className="text-[#f99d1c]">Capital</span> Intelligence.
                  </h1>
                  <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
                    Go beyond simple payroll. Nabhira’s HRMS leverages AI to identify high-potential talent, optimize performance, and simplify global compliance.
                  </p>
                  <div className="flex flex-wrap gap-8">
                    <button className="bg-[#f99d1c] text-white px-10 py-5 text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#11253e] transition-all">
                      Elevate Workforce
                    </button>
                    <button className="text-white/40 hover:text-white px-10 py-5 text-[12px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 transition-colors">
                      View Pricing Models <ArrowRight size={16} />
                    </button>
                  </div>
                </Motion.div>
              </div>
              
              <div className="lg:col-span-5 hidden lg:block">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#f99d1c] to-blue-600 rounded-sm blur opacity-20 animate-pulse"></div>
                  <div className="relative bg-[#11253e] border border-white/10 p-1 rounded-sm">
                    <div className="p-12 bg-white/5 border border-white/10 backdrop-blur-sm">
                      <div className="space-y-8">
                        <div className="w-12 h-1 bg-[#f99d1c]"></div>
                        <div className="space-y-4">
                          <h3 className="text-white text-3xl font-bold tracking-tight">Global Payroll, <br />Simplified.</h3>
                          <p className="text-white/30 text-sm font-light leading-relaxed">
                            Automated tax calculations, multi-country compliance, and seamless bank integration in over 120 jurisdictions.
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 pt-12">
                          <div className="space-y-2">
                            <p className="text-[#f99d1c] text-4xl font-bold">120+</p>
                            <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Countries Supported</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-[#f99d1c] text-4xl font-bold">0%</p>
                            <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Compliance Error Rate</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modular HRMS Pillars */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
              <h2 className="text-[#11253e] text-4xl font-bold tracking-tight uppercase">Strategic Pillars</h2>
              <div className="w-16 h-1 bg-[#f99d1c] mx-auto"></div>
              <p className="text-[#11253e] text-lg font-light">
                A modular ecosystem built to support every stage
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1px bg-gray-100 border border-gray-100 shadow-sm">
              {[
                {
                  title: "Talent Acquisition",
                  desc: "AI-native applicant tracking (ATS) with automated resume scoring and intelligent interview scheduling.",
                  icon: <UserPlus className="text-[#f99d1c]" />
                },
                {
                  title: "Dynamic Payroll",
                  desc: "Complex benefit calculations, automated deductions, and direct deposit integration with zero latency.",
                  icon: <Banknote className="text-[#f99d1c]" />
                },
                {
                  title: "Performance",
                  desc: "Continuous feedback loops, OKR tracking, and AI-driven potential mapping for career pathing.",
                  icon: <BarChart3 className="text-[#f99d1c]" />
                },
                {
                  title: "Leave & Attendance",
                  desc: "Geo-fenced check-ins, automated leave approvals, and integrated time-tracking with ERP.",
                  icon: <CalendarCheck className="text-[#f99d1c]" />
                },
                {
                  title: "Learning (LMS)",
                  desc: "Native integration with Nabhira’s AI LMS for seamless skills development and compliance training.",
                  icon: <Users className="text-[#f99d1c]" />
                },
                {
                  title: "Workforce Planning",
                  desc: "Predictive turnover analytics and strategic resource allocation for complex project environments.",
                  icon: <Briefcase className="text-[#f99d1c]" />
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-16 space-y-8 hover:bg-gray-50 transition-colors">
                  <div className="w-14 h-14 bg-[#11253e]/5 flex items-center justify-center rounded-sm">
                    {item.icon}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-[#11253e] text-lg font-bold tracking-tight uppercase">{item.title}</h3>
                    <p className="text-[#11253e] text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI-Native Intelligence Section */}
        <section className="py-32 bg-[#11253e] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(#f99d1c_1px,transparent_1px)] [background-size:40px_40px]"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#f99d1c] to-transparent rounded-sm blur opacity-20"></div>
                  <div className="relative bg-[#11253e] border border-white/10 p-12 space-y-8">
                    <div className="flex gap-6 items-start">
                      <Zap className="text-[#f99d1c] shrink-0" size={24} />
                      <div className="space-y-2">
                        <h4 className="text-white text-lg font-bold uppercase tracking-widest">Predictive Retention</h4>
                        <p className="text-white/40 text-sm font-light leading-relaxed">Early warning system identifies flight risks by analyzing engagement patterns and performance data.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <Users className="text-[#f99d1c] shrink-0" size={24} />
                      <div className="space-y-2">
                        <h4 className="text-white text-lg font-bold uppercase tracking-widest">Skill Mesh Analysis</h4>
                        <p className="text-white/40 text-sm font-light leading-relaxed">Automatically maps organizational skill gaps and suggests personalized learning pathways.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <BarChart3 className="text-[#f99d1c] shrink-0" size={24} />
                      <div className="space-y-2">
                        <h4 className="text-white text-lg font-bold uppercase tracking-widest">Bias-Free Calibration</h4>
                        <p className="text-white/40 text-sm font-light leading-relaxed">AI-driven performance reviews that normalize ratings and flag potential conscious or unconscious biases.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 space-y-8">
                <h2 className="text-white text-4xl lg:text-5xl font-bold tracking-tight uppercase leading-tight">
                  Intelligent <br />
                  <span className="text-[#f99d1c]">Workforce</span> Insights
                </h2>
                <div className="w-16 h-1 bg-[#f99d1c]"></div>
                <p className="text-white/60 text-lg font-light leading-relaxed">
                  We don't just store employee data; we turn it into a competitive advantage. Our Agentic AI layers proactively suggest optimizations for team structures and leadership succession.
                </p>
                <div className="pt-4">
                  <button className="text-[#f99d1c] text-[12px] font-bold uppercase tracking-[0.3em] flex items-center gap-4 group">
                    AI Capabilities Whitepaper <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Compliance Focus */}
        <section className="py-32 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1600880212319-7524e2727928?auto=format&fit=crop&q=80&w=1200"
                  alt="HR Team"
                  className="rounded-sm shadow-xl grayscale-100 hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-[#11253e] text-4xl font-bold tracking-tight">The Future of <br />Employee Experience</h2>
                  <p className="text-[#11253e] text-lg font-light leading-relaxed">
                    Employee self-service portals with integrated AI chatbots ensure your workforce gets answers instantly, freeing HR from administrative overhead.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    "Mobile-first ESS App",
                    "Integrated Wellness Tracking",
                    "Automated Tax Filing",
                    "Secure Document Vault"
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4 items-center border-b border-gray-200 pb-4">
                      <CheckCircle2 size={16} className="text-[#f99d1c]" />
                      <span className="text-[10px] font-bold text-[#11253e] uppercase tracking-widest">{text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6">
                  <button className="bg-[#11253e] text-white px-10 py-5 text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-[#f99d1c] transition-all">
                    Schedule a Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Scale */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="space-y-6">
                <ShieldCheck size={32} className="text-[#f99d1c]" />
                <h3 className="text-[#11253e] text-xl font-bold uppercase tracking-widest">Enterprise Security</h3>
                <p className="text-[#11253e] text-sm font-light leading-relaxed">SOC2 Type II, ISO 27001, and GDPR compliant architecture with end-to-end data encryption at rest and in transit.</p>
              </div>
              <div className="space-y-6">
                <Globe size={32} className="text-[#f99d1c]" />
                <h3 className="text-[#11253e] text-xl font-bold uppercase tracking-widest">Global Scale</h3>
                <p className="text-[#11253e] text-sm font-light leading-relaxed">Localized for over 50 languages and 120+ tax jurisdictions with automated regulatory updates.</p>
              </div>
              <div className="space-y-6">
                <Zap size={32} className="text-[#f99d1c]" />
                <h3 className="text-[#11253e] text-xl font-bold uppercase tracking-widest">API-First Design</h3>
                <p className="text-[#11253e] text-sm font-light leading-relaxed">Seamlessly connect with Slack, Microsoft Teams, SAP, and WorkbookNow ERP via robust RESTful APIs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* HRMS CTA */}
        <section className="py-32 bg-[#11253e] text-center">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            <h2 className="text-white text-4xl lg:text-6xl font-bold tracking-tighter uppercase">Empower Your People.</h2>
            <p className="text-white/40 text-xl font-light">
              Transform your HR from a cost center to a strategic powerhouse.
            </p>
            <div className="pt-8 flex flex-wrap justify-center gap-8">
              <button className="bg-[#f99d1c] text-white px-12 py-5 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#11253e] transition-all">
                Request a Demo
              </button>
              <button className="border border-white/20 text-white px-12 py-5 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
                Platform Overview
              </button>
            </div>
          </div>
        </section>
    </>
  );
}