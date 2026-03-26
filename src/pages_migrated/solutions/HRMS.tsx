"use client";
import React, { useEffect, useState } from "react";
import { motion as Motion } from "motion/react";
import Link from "next/link";
import { SalesBrochureModal } from "../../components/SalesBrochureModal";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Users, Banknote, CalendarCheck, Package, DollarSign, Headphones, CheckCircle2, BarChart3, Target, TrendingUp, Shield, Zap } from "lucide-react";

export default function HRMSSolution({ wordpressData }: any) {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  useEffect(() => {
    document.title = "HRMS and Payroll Solutions | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-[#11253e] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f99d1c1a_0%,transparent_70%)]"></div>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(249, 157, 28, 0.3) 1px, transparent 1px)`,
              backgroundSize: '32px 32px'
            }}
          ></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-5 py-2">
                <Users size={14} className="text-[#f99d1c]" />
                <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">WORKFORCE MANAGEMENT</span>
              </div>
              
              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
                HRMS and Payroll<br />
                <span className="text-[#f99d1c]">Solutions</span>
              </h1>
              
              <p className="text-white/90 text-xl font-light leading-relaxed max-w-2xl">
                Comprehensive human resource management system designed to automate employee lifecycle processes and streamline business operations.
              </p>
              
              <div className="flex flex-wrap gap-6 pt-4">
                <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/hrms')}&title=${encodeURIComponent('HRMS & Payroll')}&category=Solutions`}>
                  <button className="bg-[#f99d1c] text-white px-10 py-5 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#11253e] transition-all">
                    REQUEST DEMO
                  </button>
                </Link>
              </div>
            </Motion.div>
            
            {/* Metrics Cards */}
            <Motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 gap-6"
            >
              {[
                { stat: "60%", label: "HR productivity increase" },
                { stat: "100%", label: "Payroll accuracy" },
                { stat: "45%", label: "Faster issue resolution" }
              ].map((item, i) => (
                <div key={i} className="bg-white backdrop-blur-sm border border-white/10 p-8 hover:bg-white transition-all">
                  <p className="text-[#f99d1c] text-5xl font-bold mb-3">{item.stat}</p>
                  <p className="text-[#11253e] text-md font-light tracking-wide">{item.label}</p>
                </div>
              ))}
            </Motion.div>
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
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 pl-[88px]">
              {[
                "Employee profile management",
                "Attendance and leave tracking",
                "Payroll management",
                "Performance tracking",
                "HR reporting and analytics"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#f99d1c] shrink-0 mt-0.5" />
                  <span className="text-[#11253e]/80 text-md font-light">{feature}</span>
                </div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Additional Modules */}
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
                  Ready to transform your workforce management?
                </h2>
                <div className="w-24 h-1 bg-[#f99d1c]"></div>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                  Discover how our comprehensive HRMS and business management solutions can streamline your operations and drive growth.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/hrms')}&title=${encodeURIComponent('HRMS & Payroll')}&category=Solutions`}>
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
        pageTitle="HRMS & Payroll" 
      />
    </>
  );
}