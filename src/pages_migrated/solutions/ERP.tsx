"use client";
import React, { useEffect, useState } from "react";
import { motion as Motion } from "motion/react";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { DownloadModal } from "../../components/DownloadModal";
import { Briefcase, Building2, Users, Package, DollarSign, Headphones, CheckCircle2, BarChart3, Shield, Zap, Database, Workflow, ArrowRight, PieChart, Truck, Users2 } from "lucide-react";
import { renderHeroTitle, formatQuotesToBold } from "../../lib/utils";

export default function ERPSolution({ wordpressData }: { wordpressData?: any }) {
  useEffect(() => {
    document.title = "ERP Systems | Hutech Solutions Technologies";
    window.scrollTo(0, 0);
  }, []);

  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const gs = wordpressData?.globalSettings;
  const heroData = gs?.heroSlides;

  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-[#11253e] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f99d1c1a_0%,transparent_70%)]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
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
                  <Briefcase size={14} className="text-[#f99d1c]" />
                  <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">Integrated Intelligence</span>
                </div>
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                  {renderHeroTitle(heroData?.heroS1Title || (
                    <>
                      WorkbookNow <br /> <span className="text-[#f99d1c]">Enterprise ERP</span>
                    </>
                  ))}
                </h1>
                <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
                  {formatQuotesToBold(heroData?.heroS1Desc || "One source of truth. Hutech Solutions’s WorkbookNow ERP synchronizes your entire business—from procurement to final delivery—on a unified, AI-native platform.")}
                </p>
                <div className="flex flex-wrap gap-8">
                  <button className="bg-[#f99d1c] text-white px-10 py-5 text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#11253e] transition-all">
                    Discover Platform
                  </button>
                  <button className="text-white/40 hover:text-white px-10 py-5 text-[12px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 transition-colors">
                    Watch Product Demo <ArrowRight size={16} />
                  </button>
                </div>
              </Motion.div>
            </div>

            {/* Stats Panel */}
            <div className="lg:col-span-5 w-full">
              <Motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white p-8 md:p-10 rounded-sm space-y-8 shadow-2xl border border-gray-100"
              >
                <div className="space-y-4">
                  <div className="w-16 h-1 bg-[#f99d1c]"></div>
                  <h3 className="text-[#11253e] text-2xl font-bold tracking-tight">Proven Impact</h3>
                </div>

                <div className="space-y-6">
                  {[
                    { val: "+24%", label: "Revenue Growth" },
                    { val: "+40%", label: "Efficiency Gain" },
                    { val: "99.9%", label: "Data Accuracy" },
                    { val: "99.99%", label: "Cloud Uptime" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-start gap-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="w-2 h-2 bg-[#f99d1c] rounded-full shrink-0 mt-3"></div>
                      <div className="space-y-1">
                        <p className="text-[#f99d1c] text-3xl md:text-4xl font-extrabold tracking-tight">{stat.val}</p>
                        <p className="text-[#11253e] text-base font-bold">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Modular Ecosystem */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-[#11253e] text-3xl md:text-4xl font-bold tracking-tight uppercase">{formatQuotesToBold("Modular Excellence")}</h2>
            <div className="w-16 h-1 bg-[#f99d1c] mx-auto"></div>
            <p className="text-[#11253e] text-lg font-light leading-relaxed">
              {formatQuotesToBold("WorkbookNow is designed to grow with you. Activate only the modules you need today, and scale seamlessly as your business complexity evolves.")}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-block px-6 py-2 bg-[#f99d1c]/10 border border-[#f99d1c]/30">
                <span className="text-[#f99d1c] font-bold text-xs uppercase tracking-[0.2em]">UNIFIED BUSINESS PLATFORM</span>
              </div>
              <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight leading-tight">
                Everything together in one unified system
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
            </div>

            <div className="space-y-8 text-[#11253e] text-lg font-light leading-relaxed max-w-4xl mx-auto">
              <p>
                Businesses often struggle with disconnected tools, manual processes, and inefficient workflows. WorkbookNow ERP solves these challenges by providing a centralized platform that improves productivity, transparency, and decision-making.
              </p>
              <p>
                With modules like HRMS, Inventory Management, Accounting, and Support Ticket Management, WorkbookNow ERP empowers organizations to streamline operations and scale efficiently.
              </p>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #11253e 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="max-w-3xl">
              <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight mb-6">
                Operational Difficulties We Solve
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c]"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Database size={32} className="text-[#f99d1c]" />,
                  title: "Disconnected Systems",
                  description: "Teams rely on multiple non-integrated tools, creating operational silos and manual reporting headaches."
                },
                {
                  icon: <Users size={32} className="text-[#f99d1c]" />,
                  title: "Manual HR Processes",
                  description: "Managing attendance, payroll, and performance manually increases administrative overhead."
                },
                {
                  icon: <Package size={32} className="text-[#f99d1c]" />,
                  title: "Inventory Mismanagement",
                  description: "Lack of real-time stock visibility causes inventory shortages, overstocking, and inaccurate reporting."
                },
                {
                  icon: <DollarSign size={32} className="text-[#f99d1c]" />,
                  title: "Financial Complexity",
                  description: "Managing invoices and expenses across disconnected spreadsheets makes accounting error-prone."
                },
                {
                  icon: <Headphones size={32} className="text-[#f99d1c]" />,
                  title: "Poor Support Tracking",
                  description: "Without structured ticketing, customer issues get delayed or lost, hurting customer satisfaction."
                }
              ].map((challenge, idx) => (
                <Motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 border-l-4 border-[#f99d1c] shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="space-y-6">
                    <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                      {challenge.icon}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-[#11253e] font-bold text-xl">{challenge.title}</h3>
                      <p className="text-[#11253e]/80 font-light leading-relaxed">{challenge.description}</p>
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-24 bg-[#11253e] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(249, 157, 28, 0.6) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight">
                Our Solution
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
              <p className="text-white/90 text-xl font-light leading-relaxed">
                WorkbookNow Enterprise ERP Platform
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <p className="text-white text-lg font-light leading-relaxed">
                  WorkbookNow ERP provides an integrated platform that centralizes key business operations into a single system. It eliminates inefficiencies by automating processes and ensuring every department accesses real-time data.
                </p>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                  The platform enables businesses to manage employees, monitor inventory, track financial transactions, and resolve customer issues efficiently.
                </p>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                  With a user-friendly interface and scalable architecture, WorkbookNow ERP supports organizations of all sizes, helping them improve operational efficiency.
                </p>

                <div className="pt-4">
                  <Link href="/contact">
                    <button className="bg-[#f99d1c] text-[#11253e] px-12 py-6 font-bold text-[14px] uppercase tracking-[0.2em] hover:bg-white transition-all">
                      EXPLORE PLATFORM
                    </button>
                  </Link>
                </div>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full relative min-h-[350px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[500px]"
              >
                <ImageWithFallback
                  src="/assets/solution_detail_hero.jpg"
                  alt="WorkbookNow ERP Dashboard"
                  width={800}
                  height={600}
                  className="rounded-sm shadow-2xl w-full h-auto max-h-[550px] object-cover"
                />
              </Motion.div>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight">
                Key Features
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users size={36} className="text-[#f99d1c]" />,
                  title: "HRMS Module",
                  description: "Attendance tracking, automated payroll, leave management, and employee self-service portals."
                },
                {
                  icon: <Package size={36} className="text-[#f99d1c]" />,
                  title: "Inventory Management",
                  description: "Real-time stock tracking, automated reorder alerts, multi-warehouse support, and barcode scanning."
                },
                {
                  icon: <DollarSign size={36} className="text-[#f99d1c]" />,
                  title: "Financial Accounting",
                  description: "Invoice generation, expense tracking, automated financial reporting, and tax compliance."
                },
                {
                  icon: <Headphones size={36} className="text-[#f99d1c]" />,
                  title: "Support Ticket System",
                  description: "Centralized ticket tracking, priority SLA management, and customer satisfaction analytics."
                },
                {
                  icon: <BarChart3 size={36} className="text-[#f99d1c]" />,
                  title: "Business Analytics",
                  description: "Real-time dashboards, custom KPI tracking, predictive insights, and executive reports."
                },
                {
                  icon: <Workflow size={36} className="text-[#f99d1c]" />,
                  title: "Workflow Automation",
                  description: "Multi-level approval workflows, automated task scheduling, and third-party integrations."
                }
              ].map((feature, idx) => (
                <Motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white p-10 border border-gray-200 rounded-sm hover:border-[#f99d1c] transition-all group"
                >
                  <div className="space-y-6">
                    <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                      {feature.icon}
                    </div>
                    <h3 className="text-[#11253e] font-bold text-xl">{feature.title}</h3>
                    <p className="text-[#11253e]/70 font-light leading-relaxed">{feature.description}</p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Advanced AI Architecture Section */}
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
            className="text-center mb-20 space-y-6"
          >
            <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-4 py-2">
              <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">TECHNICAL INNOVATION</span>
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight">
              Advanced AI architecture
            </h2>
            <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
          </Motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Database className="text-[#f99d1c]" size={40} />,
                title: "UNIFIED DATA LAYER",
                description: "Single relational source of truth eliminating data duplication across financial and inventory domains."
              },
              {
                icon: <Workflow className="text-[#f99d1c]" size={40} />,
                title: "INTELLIGENT WORKFLOW ENGINE",
                description: "Event-driven architecture triggering automated approvals, invoice matching, and reorder notifications."
              },
              {
                icon: <PieChart className="text-[#f99d1c]" size={40} />,
                title: "REAL-TIME BI PIPELINE",
                description: "Streaming telemetry providing instantaneous financial and operational dashboard visibility."
              }
            ].map((innovation, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-6"
              >
                <div className="w-20 h-20 bg-white/5 border border-[#f99d1c]/30 flex items-center justify-center mx-auto rounded-sm">
                  {innovation.icon}
                </div>
                <h3 className="text-white text-xl font-bold uppercase tracking-wide">{innovation.title}</h3>
                <p className="text-white/70 text-base font-light leading-relaxed">
                  {innovation.description}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-4 py-2">
                <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">BUSINESS BENEFITS</span>
              </div>
              <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight">
                Transform your business operations
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: <Zap className="text-[#f99d1c]" size={40} />,
                  title: "Improved Productivity",
                  description: "Automate repetitive tasks and streamline workflows to help teams focus on strategic initiatives that drive growth."
                },
                {
                  icon: <Shield className="text-[#f99d1c]" size={40} />,
                  title: "Enhanced Data Security",
                  description: "Centralized data management with role-based access controls ensures sensitive business information remains secure."
                },
                {
                  icon: <BarChart3 className="text-[#f99d1c]" size={40} />,
                  title: "Better Decision Making",
                  description: "Real-time insights and comprehensive reporting enable data-driven decisions across all departments."
                }
              ].map((benefit, idx) => (
                <Motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-6 group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-white border border-gray-200 flex items-center justify-center mx-auto rounded-sm group-hover:border-[#f99d1c] transition-all">
                    {benefit.icon}
                  </div>
                  <h3 className="text-[#11253e] text-xl font-bold tracking-tight">{benefit.title}</h3>
                  <p className="text-[#11253e]/70 text-base font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-[#e5dfd3] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-12 md:p-16 border-l-8 border-[#f99d1c] shadow-xl flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-[#11253e] text-3xl md:text-4xl font-bold tracking-tight">
                Ready to Streamline Your Business Operations?
              </h2>
              <p className="text-[#11253e]/70 text-lg font-light leading-relaxed">
                Discover how WorkbookNow ERP can transform your organization with centralized management and intelligent automation.
              </p>
            </div>

            <Link href="/contact" className="shrink-0">
              <button className="bg-[#f99d1c] text-white px-10 py-5 font-bold text-[13px] uppercase tracking-[0.2em] hover:bg-[#11253e] transition-all flex items-center gap-3">
                START YOUR JOURNEY <ArrowRight size={16} />
              </button>
            </Link>
          </Motion.div>
        </div>
      </section>
      <DownloadModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} documentName="ERP System Brochure" />
    </>
  );
}
