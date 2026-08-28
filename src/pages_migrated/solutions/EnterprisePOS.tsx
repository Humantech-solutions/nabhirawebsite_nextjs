"use client";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { motion as Motion } from "motion/react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { DownloadModal } from "../../components/DownloadModal";
import { Store, TrendingUp, Eye, AlertCircle, Layers, CheckCircle2, Shield, Zap, Cloud, Box, Lock, Users, BarChart3, Settings, Gauge, ArrowRight } from "lucide-react";

export default function EnterprisePOSSolution({ wordpressData }: any) {
  useEffect(() => {
    document.title = "Enterprise POS Solutions | Hutech Solutions Technologies";
    window.scrollTo(0, 0);
  }, []);

  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-[#11253e] overflow-hidden">
        <div className="absolute inset-0">
          {/* Dot Grid Pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(249, 157, 28, 0.4) 1px, transparent 1px)`,
              backgroundSize: '32px 32px'
            }}
          ></div>
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#11253e] via-[#11253e]/95 to-[#1a3a5f]/90"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f99d1c]/5 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-12">
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-6 py-3 bg-[#f99d1c]/10">
                  <Store size={16} className="text-[#f99d1c]" />
                  <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">AI-Powered Retail Solution</span>
                </div>

                <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight">
                  Enterprise POS & <br />
                  <span className="text-[#f99d1c] font-medium">Franchise Management</span>
                </h1>

                <p className="text-white text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
                  Centralized Control for Multi-Outlet Operations
                </p>

                <div className="flex flex-wrap gap-6 pt-4">
                  <button className="bg-[#f99d1c] text-[#11253e] px-12 py-6 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all">
                    Request Demo
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
                    { value: "5-15%", label: "Revenue Protection" },
                    { value: "20-40%", label: "Faster Checkout Time" },
                    { value: "30-50%", label: "Faster Outlet Setup" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-start gap-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="w-2 h-2 bg-[#f99d1c] rounded-full shrink-0 mt-3"></div>
                      <div className="space-y-1">
                        <p className="text-[#f99d1c] text-3xl md:text-4xl font-extrabold tracking-tight">{stat.value}</p>
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
                <span className="text-[#f99d1c] font-bold text-xs uppercase tracking-[0.2em]">Overview</span>
              </div>
              <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight leading-tight">
                Centralized Operations for Growing Franchise Networks
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
            </div>

            <div className="space-y-8 text-[#11253e] text-lg font-light leading-relaxed max-w-4xl mx-auto">
              <p>
                Franchise and multi-outlet businesses often struggle to maintain operational consistency as they expand. Sales data becomes scattered across locations, inventory tracking becomes unreliable, and profit visibility is delayed or inaccurate.
              </p>
              <p>
                Head office teams frequently lack real-time control over pricing, promotions, and store-level performance. Without centralized systems, businesses face operational inefficiencies, reporting errors, and limited transparency across their network.
              </p>
              <p className="text-xl font-medium text-[#11253e]">
                Hutech Solutions' Enterprise POS & Franchise Management Platform provides a centralized system to manage billing, inventory, sales tracking, and outlet performance—helping businesses scale efficiently while maintaining full operational control.
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
                The Challenge
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c]"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <BarChart3 size={32} className="text-[#f99d1c]" />,
                  title: "Fragmented Sales Data",
                  description: "Sales information from different outlets is often stored separately, making it difficult to monitor overall performance."
                },
                {
                  icon: <Box size={32} className="text-[#f99d1c]" />,
                  title: "Inventory Inconsistencies",
                  description: "Without centralized tracking, stock levels become inaccurate, leading to overstocking or stockouts."
                },
                {
                  icon: <Eye size={32} className="text-[#f99d1c]" />,
                  title: "Limited Head Office Visibility",
                  description: "Head office teams lack real-time insights into outlet performance and pricing control."
                },
                {
                  icon: <AlertCircle size={32} className="text-[#f99d1c]" />,
                  title: "Operational Inefficiencies",
                  description: "Manual reporting and disconnected systems slow down decision-making and create errors."
                },
                {
                  icon: <TrendingUp size={32} className="text-[#f99d1c]" />,
                  title: "Scaling Challenges",
                  description: "As franchise networks grow, maintaining operational consistency becomes increasingly complex."
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
                Enterprise POS & Franchise Management Platform
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
                  Hutech Solutions' Retail POS System is a packaged web-based platform designed for retail chains and food businesses operating across multiple outlets.
                </p>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                  The solution centralizes operations while allowing each outlet to function independently within a controlled framework. Head office teams gain full visibility into sales performance, inventory, and profitability through real-time dashboards.
                </p>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                  Built with scalability and security in mind, the platform enables structured expansion without operational disruption.
                </p>

                <div className="pt-4">
                  <button className="bg-[#f99d1c] text-[#11253e] px-12 py-6 font-bold text-[14px] uppercase tracking-[0.2em] hover:bg-white transition-all">
                    Explore Platform
                  </button>
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
                  alt="Enterprise POS System"
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
                  icon: <Settings size={36} className="text-[#f99d1c]" />,
                  title: "Centralized Franchise Control",
                  description: "Manage pricing, products, and policies across all outlets from a single head office system."
                },
                {
                  icon: <Eye size={36} className="text-[#f99d1c]" />,
                  title: "Real-Time Sales Monitoring",
                  description: "Track sales activity and store performance through live dashboards."
                },
                {
                  icon: <BarChart3 size={36} className="text-[#f99d1c]" />,
                  title: "Advanced Sales & Profit Reporting",
                  description: "Detailed reports provide insights into revenue, margins, and outlet performance."
                },
                {
                  icon: <Shield size={36} className="text-[#f99d1c]" />,
                  title: "Secure Outlet-Level Data Isolation",
                  description: "Each outlet operates independently while maintaining centralized governance."
                },
                {
                  icon: <Box size={36} className="text-[#f99d1c]" />,
                  title: "Inventory Management",
                  description: "Real-time stock tracking with centralized inventory visibility."
                },
                {
                  icon: <Users size={36} className="text-[#f99d1c]" />,
                  title: "Role-Based Access Control",
                  description: "Structured permissions ensure secure system access for different users."
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
                icon: <Settings className="text-[#f99d1c]" size={40} />,
                title: "AI MODEL INTEGRATION",
                description: "Integrates specialized AI prediction models for demand forecasting, inventory reordering, and automated transaction analytics."
              },
              {
                icon: <Eye className="text-[#f99d1c]" size={40} />,
                title: "AI ORCHESTRATION LAYER",
                description: "Coordinates POS data pipelines and intelligently routes offline/online transactions for zero latency processing."
              },
              {
                icon: <Zap className="text-[#f99d1c]" size={40} />,
                title: "RESOURCE GENERATION PIPELINE",
                description: "Automatically converts store telemetry into actionable inventory alerts, sales forecasting, and margin optimization reports."
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
                Ready to Scale Your Franchise Operations?
              </h2>
              <p className="text-[#11253e]/70 text-lg font-light leading-relaxed">
                Discover how Nabhira's Enterprise POS Platform can centralize your operations and accelerate franchise growth.
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
      <DownloadModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} documentName="Enterprise POS Brochure" />
    </div>
  );
}