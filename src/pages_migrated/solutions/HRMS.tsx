"use client";
import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Users, Banknote, CalendarCheck, Briefcase, Heart, UserPlus, ArrowRight, CheckCircle2, BarChart3, ShieldCheck, Globe, Zap, Package, DollarSign, Headphones, Target, TrendingUp, Shield } from "lucide-react";
import { renderHeroTitle, formatQuotesToBold } from "../../lib/utils";

export default function HRMSSolution({ wordpressData }: { wordpressData?: any }) {
  useEffect(() => {
    document.title = "HRMS and Payroll Solutions | Hutech Solutions Technologies";
    window.scrollTo(0, 0);
  }, []);

  const gs = wordpressData?.globalSettings;
  const heroData = gs?.heroSlides;

  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-[#11253e] overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-cover bg-center opacity-5 grayscale" style={{ backgroundImage: `url('${heroData?.heroS1ImageUrl || heroData?.heroS1Image?.node?.sourceUrl || "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000"}')` }}></div>
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
                    {renderHeroTitle(heroData?.heroS1Title || (
                      <>
                        Human <br /> <span className="text-[#f99d1c]">Capital</span> Intelligence.
                      </>
                    ))}
                  </h1>
                  <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
                    {formatQuotesToBold(heroData?.heroS1Desc || "Go beyond simple payroll. Hutech Solutions’s HRMS leverages AI to identify high-potential talent, optimize performance, and simplify global compliance.")}
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
                          <h3 className="text-white text-3xl font-bold tracking-tight">{formatQuotesToBold("Global Payroll, \nSimplified.")}</h3>
                          <p className="text-white/30 text-sm font-light leading-relaxed">
                            {formatQuotesToBold("Automated tax calculations, multi-country compliance, and seamless bank integration in over 120 jurisdictions.")}
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

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-4 py-2 mb-8">
              <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">COMPREHENSIVE HR SYSTEM</span>
            </div>
            <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight mb-6">
              Manage your workforce efficiently with automation
            </h2>
            <div className="w-24 h-1 bg-[#f99d1c] mx-auto mb-8"></div>
            <p className="text-[#11253e]/80 text-xl font-light leading-relaxed">
              The HRMS module helps organizations manage their workforce efficiently by automating employee lifecycle processes. From employee onboarding to performance tracking, payroll management to leave administration, our comprehensive solution brings all human resource functions into one unified platform.
            </p>
          </Motion.div>
        </div>
      </section>

      {/* HRMS Module Features */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-4 py-2 mb-8">
              <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">HRMS MODULE</span>
            </div>
            <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight mb-6">
              Human Resource Management System
            </h2>
            <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-10 border-l-4 border-[#f99d1c] shadow-sm hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
                <Users className="text-[#f99d1c]" size={32} />
              </div>
              <div className="space-y-3">
                <h3 className="text-[#11253e] text-2xl font-bold tracking-tight">Complete Workforce Management</h3>
                <p className="text-[#11253e]/70 font-light leading-relaxed">
                  Comprehensive tools to manage your entire workforce lifecycle from recruitment to retirement.
                </p>
              </div>
            </div>            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1px bg-gray-100 border border-gray-100 shadow-sm">
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
                  desc: "Native integration with Hutech Solutions’s AI LMS for seamless skills development and compliance training.",
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
                    <h3 className="text-[#11253e] text-lg font-bold tracking-tight uppercase">{formatQuotesToBold(item.title)}</h3>
                    <p className="text-[#11253e] text-sm font-light leading-relaxed">{formatQuotesToBold(item.desc)}</p>
                  </div>
                </div>
              ))}
            </div>
            </Motion.div>
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
                        <h4 className="text-white text-lg font-bold uppercase tracking-widest">{formatQuotesToBold("Predictive Retention")}</h4>
                        <p className="text-white/40 text-sm font-light leading-relaxed">{formatQuotesToBold("Early warning system identifies flight risks by analyzing engagement patterns and performance data.")}</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <Users className="text-[#f99d1c] shrink-0" size={24} />
                      <div className="space-y-2">
                        <h4 className="text-white text-lg font-bold uppercase tracking-widest">{formatQuotesToBold("Skill Mesh Analysis")}</h4>
                        <p className="text-white/40 text-sm font-light leading-relaxed">{formatQuotesToBold("Automatically maps organizational skill gaps and suggests personalized learning pathways.")}</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <BarChart3 className="text-[#f99d1c] shrink-0" size={24} />
                      <div className="space-y-2">
                        <h4 className="text-white text-lg font-bold uppercase tracking-widest">{formatQuotesToBold("Bias-Free Calibration")}</h4>
                        <p className="text-white/40 text-sm font-light leading-relaxed">{formatQuotesToBold("AI-driven performance reviews that normalize ratings and flag potential conscious or unconscious biases.")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 space-y-8">
                <h2 className="text-white text-4xl lg:text-5xl font-bold tracking-tight uppercase leading-tight">
                  {renderHeroTitle("Intelligent \n|Workforce| Insights")}
                </h2>
                <div className="w-16 h-1 bg-[#f99d1c]"></div>
                <p className="text-white/60 text-lg font-light leading-relaxed">
                  {formatQuotesToBold("We don't just store employee data; we turn it into a competitive advantage. Our Agentic AI layers proactively suggest optimizations for team structures and leadership succession.")}
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
                  <h2 className="text-[#11253e] text-4xl font-bold tracking-tight">{formatQuotesToBold("The Future of \nEmployee Experience")}</h2>
                  <p className="text-[#11253e] text-lg font-light leading-relaxed">
                    {formatQuotesToBold("Employee self-service portals with integrated AI chatbots ensure your workforce gets answers instantly, freeing HR from administrative overhead.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Integrated Modules */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-4 py-2 mb-8">
              <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">INTEGRATED MODULES</span>
            </div>
            <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight mb-6">
              Complete business management suite
            </h2>
            <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
          </Motion.div>
 
          {/* Solution Cards Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: <Package className="text-[#f99d1c]" size={32} />,
                title: "Inventory Management",
                description: "The inventory module provides real-time visibility into stock levels and product movement.",
                features: [
                  "Product and stock tracking",
                  "Inventory alerts and notifications",
                  "Supplier management",
                  "Purchase and stock reports",
                  "Multi-location inventory tracking"
                ]
              },
              {
                icon: <DollarSign className="text-[#f99d1c]" size={32} />,
                title: "Accounting & Finance",
                description: "The accounting module simplifies financial management by automating transactions and generating accurate reports.",
                features: [
                  "Invoice and billing management",
                  "Expense tracking",
                  "Financial reporting",
                  "Tax management",
                  "Cash flow monitoring"
                ]
              },
              {
                icon: <Headphones className="text-[#f99d1c]" size={32} />,
                title: "Support Ticket Management",
                description: "The support ticket system helps businesses track and resolve customer issues efficiently.",
                features: [
                  "Ticket creation and assignment",
                  "Issue tracking and resolution workflow",
                  "Priority-based ticket handling",
                  "Customer communication tracking",
                  "Support analytics and reporting"
                ]
              }
            ].map((service, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white p-10 border-l-4 border-[#f99d1c] shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-[#f99d1c] transition-colors">
                    {service.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-[#11253e] text-2xl font-bold tracking-tight">{service.title}</h3>
                    <p className="text-[#11253e]/70 font-light leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <div className="space-y-3 pl-[88px]">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#f99d1c] shrink-0 mt-0.5" />
                      <span className="text-[#11253e]/80 text-md font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-[#11253e] relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(249, 157, 28, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-4 py-2 mb-8">
              <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">KEY BENEFITS</span>
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight mb-6">
              Transform your business operations
            </h2>
            <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
          </Motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="text-[#f99d1c]" size={40} />,
                title: "Centralized Business Operations",
                description: "Manage HR, inventory, accounting, and customer support from a single integrated platform."
              },
              {
                icon: <Zap className="text-[#f99d1c]" size={40} />,
                title: "Improved Efficiency",
                description: "Automated workflows reduce manual tasks and increase productivity across teams."
              },
              {
                icon: <BarChart3 className="text-[#f99d1c]" size={40} />,
                title: "Better Decision Making",
                description: "Real-time reports and analytics provide insights that help leaders make informed decisions."
              },
              {
                icon: <Users className="text-[#f99d1c]" size={40} />,
                title: "Enhanced Customer Experience",
                description: "A structured support system ensures faster issue resolution and improved customer satisfaction."
              },
              {
                icon: <TrendingUp className="text-[#f99d1c]" size={40} />,
                title: "Scalable for Growth",
                description: "WorkbookNow ERP is designed to scale with your business, supporting future growth and operational expansion."
              },
              {
                icon: <Shield className="text-[#f99d1c]" size={40} />,
                title: "Data Security & Compliance",
                description: "Enterprise-grade security ensures your sensitive business data remains protected and compliant."
              }
            ].map((benefit, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all text-center space-y-6"
              >
                <div className="w-20 h-20 bg-white/5 border border-[#f99d1c]/30 flex items-center justify-center mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-white text-xl font-bold uppercase tracking-wide">{benefit.title}</h3>
                <p className="text-white/70 text-md font-light leading-relaxed">
                  {benefit.description}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-4 py-2 mb-8">
              <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">BUSINESS IMPACT</span>
            </div>
            <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight mb-6">
              Real results for modern organizations
            </h2>
            <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
          </Motion.div>

        <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Users className="text-[#f99d1c]" size={48} />,
                title: "Streamlined HR Operations",
                description: "Automate repetitive HR tasks, reduce administrative burden, and empower your HR team to focus on strategic initiatives."
              },
              {
                icon: <BarChart3 className="text-[#f99d1c]" size={48} />,
                title: "Real-Time Business Insights",
                description: "Access comprehensive dashboards and reports that provide visibility into all aspects of your business operations."
              },
              {
                icon: <TrendingUp className="text-[#f99d1c]" size={48} />,
                title: "Accelerated Business Growth",
                description: "Eliminate operational bottlenecks and scale your business efficiently with integrated, automated workflows."
              }
            ].map((impact, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-6"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-gray-50 to-white border-2 border-[#f99d1c]/30 flex items-center justify-center mx-auto">
                  {impact.icon}
                </div>
                <h3 className="text-[#11253e] text-2xl font-bold tracking-tight">{impact.title}</h3>
                <p className="text-[#11253e]/70 text-md font-light leading-relaxed">
                  {impact.description}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HRMS CTA */}
      <section className="py-32 bg-[#11253e] text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <h2 className="text-white text-4xl lg:text-6xl font-bold tracking-tighter uppercase">{formatQuotesToBold("Empower Your People.")}</h2>
          <p className="text-white/40 text-xl font-light">
            {formatQuotesToBold("Transform your HR from a cost center to a strategic powerhouse.")}
          </p>
          <div className="pt-8 flex flex-wrap justify-center gap-8">
            <Link href="/contact">
              <button className="bg-[#f99d1c] text-white px-12 py-5 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#11253e] transition-all">
                Request a Demo
              </button>
            </Link>
            <button className="border border-white/20 text-white px-12 py-5 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
              Platform Overview
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-[#11253e] to-[#1a3a5f] p-16 rounded-sm relative overflow-hidden"
          >
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(249, 157, 28, 0.6) 1px, transparent 1px)`,
                backgroundSize: '32px 32px'
              }}
            ></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight leading-tight">
                  Ready to transform your workforce management?
                </h2>
                <div className="w-24 h-1 bg-[#f99d1c]"></div>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                  Discover how our comprehensive HRMS and business management solutions can streamline your operations and drive growth.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Link href="/contact">
                  <button className="bg-[#f99d1c] text-[#11253e] px-12 py-6 font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all">
                    Schedule Consultation
                  </button>
                </Link>
                <Link href="/resources">
                  <button className="border-2 border-white text-white px-12 py-6 font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-[#11253e] transition-all">
                    Download Brochure
                  </button>
                </Link>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>
    </>
  );
}
