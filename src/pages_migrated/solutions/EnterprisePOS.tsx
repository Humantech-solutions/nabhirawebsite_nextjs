"use client";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion as Motion } from "motion/react";
import { SalesBrochureModal } from "../../components/SalesBrochureModal";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Store, TrendingUp, Eye, AlertCircle, Layers, CheckCircle2, Shield, Zap, Cloud, Box, Lock, Users, BarChart3, Settings, Gauge } from "lucide-react";

export default function EnterprisePOSSolution({ wordpressData }: any) {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Enterprise POS & Franchise Management Platform | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

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
                  <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/enterprise-pos')}&title=${encodeURIComponent('Enterprise POS')}&category=Solutions`}>
                    <button className="bg-[#f99d1c] text-[#11253e] px-12 py-6 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all">
                      Request Demo
                    </button>
                  </Link>
                </div>
              </Motion.div>
            </div>
            
            {/* Stats Panel */}
            <div className="lg:col-span-5">
              <Motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white p-10 rounded-sm space-y-8"
              >
                <div className="space-y-4">
                  <div className="w-16 h-1 bg-[#f99d1c]"></div>
                  <h3 className="text-[#11253e] text-2xl font-bold">Proven Impact</h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    { value: "5-15%", label: "Revenue Protection" },
                    { value: "20-40%", label: "Faster Checkout Time" },
                    { value: "30-50%", label: "Faster Outlet Setup" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-6 pb-6 border-b border-gray-200 last:border-0">
                      <div className="w-2 h-2 bg-[#f99d1c] rounded-full shrink-0"></div>
                      <div className="space-y-1">
                        <p className="text-[#f99d1c] text-3xl font-bold">{stat.value}</p>
                        <p className="text-[#11253e]/60 text-md font-medium">{stat.label}</p>
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
                Nabhira's Enterprise POS & Franchise Management Platform provides a centralized system to manage billing, inventory, sales tracking, and outlet performance—helping businesses scale efficiently while maintaining full operational control.
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
                  Nabhira's Retail POS System is a packaged web-based platform designed for retail chains and food businesses operating across multiple outlets.
                </p>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                  The solution centralizes operations while allowing each outlet to function independently within a controlled framework. Head office teams gain full visibility into sales performance, inventory, and profitability through real-time dashboards.
                </p>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                  Built with scalability and security in mind, the platform enables structured expansion without operational disruption.
                </p>
                
                <div className="pt-4">
                  <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/enterprise-pos')}&title=${encodeURIComponent('Enterprise POS')}&category=Solutions`}>
                    <button className="bg-[#f99d1c] text-[#11253e] px-12 py-6 font-bold text-[14px] uppercase tracking-[0.2em] hover:bg-white transition-all">
                      Explore Platform
                    </button>
                  </Link>
                </div>
              </Motion.div>
              
              <Motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBwb3MlMjBzeXN0ZW0lMjBmcmFuY2hpc2V8ZW58MXx8fHwxNzQxODc2NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Enterprise POS System"
                  className="rounded-sm shadow-2xl"
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
                  icon: <Settings size={40} className="text-[#f99d1c]" />,
                  title: "Centralized Franchise Control",
                  description: "Manage pricing, products, and policies across all outlets from a single head office system."
                },
                {
                  icon: <Eye size={40} className="text-[#f99d1c]" />,
                  title: "Real-Time Sales Monitoring",
                  description: "Track sales activity and store performance through live dashboards."
                },
                {
                  icon: <BarChart3 size={40} className="text-[#f99d1c]" />,
                  title: "Advanced Sales & Profit Reporting",
                  description: "Detailed reports provide insights into revenue, margins, and outlet performance."
                },
                {
                  icon: <Shield size={40} className="text-[#f99d1c]" />,
                  title: "Secure Outlet-Level Data Isolation",
                  description: "Each outlet operates independently while maintaining centralized governance."
                },
                {
                  icon: <Box size={40} className="text-[#f99d1c]" />,
                  title: "Inventory Management",
                  description: "Real-time stock tracking with centralized inventory visibility."
                },
                {
                  icon: <Users size={40} className="text-[#f99d1c]" />,
                  title: "Role-Based Access Control",
                  description: "Structured permissions ensure secure system access for different users."
                },
                {
                  icon: <Lock size={40} className="text-[#f99d1c]" />,
                  title: "Secure Data Handling",
                  description: "Strong authentication and encrypted data management ensure system security."
                },
                {
                  icon: <Zap size={40} className="text-[#f99d1c]" />,
                  title: "High-Speed POS Billing",
                  description: "Fast billing interface optimized for high-volume transactions during peak hours."
                },
                {
                  icon: <Cloud size={40} className="text-[#f99d1c]" />,
                  title: "Cloud-Based Scalability",
                  description: "Deploy easily across growing franchise networks with cloud infrastructure."
                },
                {
                  icon: <Layers size={40} className="text-[#f99d1c]" />,
                  title: "Modular Architecture",
                  description: "Flexible system design allows integration with future business applications."
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
                    <div className="space-y-3">
                      <h3 className="text-[#11253e] font-bold text-xl">{feature.title}</h3>
                      <p className="text-[#11253e]/80 font-light leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Measurable Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-[#11253e] to-[#1a3a5f] relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(249, 157, 28, 0.3) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
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
                Measurable Business Benefits
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
              <p className="text-white/80 text-lg font-light leading-relaxed">
                Transform your franchise operations with quantifiable results
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Revenue Visibility & Leakage Reduction",
                  metric: "5–15% Revenue Protection",
                  features: [
                    "Real-time sales tracking",
                    "Centralized head office monitoring",
                    "Outlet-level data isolation"
                  ],
                  impact: [
                    "5–15% reduction in revenue leakage",
                    "Faster detection of billing anomalies",
                    "Improved margin transparency"
                  ]
                },
                {
                  title: "Faster Billing & Customer Throughput",
                  metric: "20–40% Faster Checkout",
                  features: [
                    "High-speed POS interface",
                    "Peak-hour optimized billing"
                  ],
                  impact: [
                    "20–40% faster billing time",
                    "Reduced customer queue length",
                    "Increased transactions per hour"
                  ]
                },
                {
                  title: "Faster Franchise Expansion",
                  metric: "30–50% Faster New Outlet Setup",
                  features: [
                    "Cloud-based deployment",
                    "Modular architecture",
                    "Centralized governance"
                  ],
                  impact: [
                    "30–50% reduction in new outlet setup time",
                    "Standardized operations across locations",
                    "Controlled and scalable growth"
                  ]
                },
                {
                  title: "Strong Governance & Risk Control",
                  metric: "Enhanced Security",
                  features: [
                    "Role-based access control",
                    "Secure authentication",
                    "Encrypted data handling"
                  ],
                  impact: [
                    "Reduced fraud risk",
                    "Improved audit readiness",
                    "Controlled access to sensitive financial data"
                  ]
                },
                {
                  title: "Operational Efficiency Improvement",
                  metric: "25–40% Reduction in Manual Effort",
                  features: [
                    "Automated reporting",
                    "Centralized dashboards",
                    "Structured access control"
                  ],
                  impact: [
                    "25–40% reduction in manual consolidation time",
                    "Faster month-end closing",
                    "Reduced reporting errors"
                  ]
                },
                {
                  title: "Inventory Optimization",
                  metric: "15–25% Reduction in Stock Variance",
                  features: [
                    "Live stock visibility",
                    "Centralized inventory management",
                    "Real-time updates across outlets"
                  ],
                  impact: [
                    "15–25% reduction in overstock and stockouts",
                    "Improved inventory turnover ratio",
                    "Lower dead stock levels"
                  ]
                }
              ].map((benefit, idx) => (
                <Motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-sm space-y-6 hover:transform hover:scale-105 transition-transform"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-1 bg-[#f99d1c]"></div>
                    <h3 className="text-[#11253e] font-bold text-xl">{benefit.title}</h3>
                    <p className="text-[#f99d1c] text-2xl font-bold">{benefit.metric}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-[#11253e] font-bold text-sm uppercase tracking-wider">Features:</p>
                    <div className="space-y-2">
                      {benefit.features.map((feature, i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <div className="w-1.5 h-1.5 bg-[#f99d1c] rounded-full shrink-0 mt-2"></div>
                          <span className="text-[#11253e]/80 font-light text-md leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <p className="text-[#11253e] font-bold text-sm uppercase tracking-wider">Business Impact:</p>
                    <div className="space-y-3">
                      {benefit.impact.map((item, i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <CheckCircle2 size={18} className="text-[#f99d1c] shrink-0 mt-0.5" />
                          <span className="text-[#11253e]/80 font-light text-md leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
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
            className="bg-gradient-to-br from-[#11253e] to-[#1a3a5f] p-16 rounded-sm relative overflow-hidden"
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
                  Ready to Scale Your Franchise Operations?
                </h2>
                <div className="w-24 h-1 bg-[#f99d1c]"></div>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                  Discover how Nabhira's Enterprise POS Platform can centralize your operations and accelerate franchise growth.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/enterprise-pos')}&title=${encodeURIComponent('Enterprise POS')}&category=Solutions`}>
                  <button className="bg-[#f99d1c] text-[#11253e] px-12 py-6 font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all">
                    Schedule Consultation
                  </button>
                </Link>
                <button 
                  onClick={() => setIsBrochureModalOpen(true)}
                  className="border-2 border-white text-white px-12 py-6 font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-[#11253e] transition-all"
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

      <SalesBrochureModal 
        isOpen={isBrochureModalOpen} 
        onClose={() => setIsBrochureModalOpen(false)} 
        pageTitle="Enterprise POS" 
      />
    </div>
  );
}