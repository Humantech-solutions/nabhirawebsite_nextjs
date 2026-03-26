"use client";
import React, { useEffect, useState } from "react";
import { motion as Motion } from "motion/react";
import Link from "next/link";
import { SalesBrochureModal } from "../../components/SalesBrochureModal";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Briefcase, Building2, Users, Package, DollarSign, Headphones, CheckCircle2, BarChart3, Shield, Zap, Database, Workflow } from "lucide-react";

export default function ERPSolution({ wordpressData }: any) {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  useEffect(() => {
    document.title = "WorkbookNow ERP Solutions | Nabhira Technologies";
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
                <Briefcase size={14} className="text-[#f99d1c]" />
                <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">ENTERPRISE SOLUTION</span>
              </div>
              
              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
                WorkbookNow<br />
                <span className="text-[#f99d1c]">ERP Solutions</span>
              </h1>
              
              <p className="text-white/90 text-xl font-light leading-relaxed max-w-2xl">
                An all-in-one business management platform designed to simplify and automate essential business operations.
              </p>
              
              <div className="flex flex-wrap gap-6 pt-4">
                <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/erp')}&title=${encodeURIComponent('WorkbookNow ERP')}&category=Solutions`}>
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
                { stat: "40%", label: "Efficiency improvement" },
                { stat: "99.9%", label: "Data accuracy" },
                { stat: "50%", label: "Administrative time saved" }
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
              <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">UNIFIED BUSINESS PLATFORM</span>
            </div>
            <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight mb-6">
              Everything together in one unified system
            </h2>
            <div className="w-24 h-1 bg-[#f99d1c] mx-auto mb-8"></div>
            <p className="text-[#11253e]/80 text-xl font-light leading-relaxed mb-6">
              WorkbookNow ERP is an all-in-one business management platform designed to simplify and automate essential business operations. From managing employees and tracking inventory to handling financial accounting and customer support, WorkbookNow ERP brings everything together in one unified system.
            </p>
            <p className="text-[#11253e]/80 text-xl font-light leading-relaxed">
              Businesses often struggle with disconnected tools, manual processes, and inefficient workflows. WorkbookNow ERP solves these challenges by providing a centralized platform that improves productivity, transparency, and decision-making. With modules like HRMS, Inventory Management, Accounting, and Support Ticket Management, WorkbookNow ERP empowers organizations to streamline operations and scale efficiently.
            </p>
          </Motion.div>
        </div>
      </section>

      {/* Challenges */}
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
              <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">CHALLENGES</span>
            </div>
            <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight mb-6">
              Operational difficulties we solve
            </h2>
            <div className="w-24 h-1 bg-[#f99d1c] mx-auto mb-8"></div>
            <p className="text-[#11253e]/80 text-lg font-light max-w-3xl mx-auto">
              Many growing organizations encounter operational difficulties due to fragmented systems and manual processes.
            </p>
          </Motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="text-[#f99d1c]" size={32} />,
                title: "Disconnected Systems",
                description: "Teams often rely on multiple tools that do not integrate with each other, causing data silos and inefficiencies."
              },
              {
                icon: <Users className="text-[#f99d1c]" size={32} />,
                title: "Manual HR Processes",
                description: "Managing employee attendance, payroll, and performance manually increases administrative workload and risks errors."
              },
              {
                icon: <Package className="text-[#f99d1c]" size={32} />,
                title: "Inventory Mismanagement",
                description: "Without proper inventory tracking, businesses face stock shortages, overstocking, and inaccurate reporting."
              },
              {
                icon: <DollarSign className="text-[#f99d1c]" size={32} />,
                title: "Financial Complexity",
                description: "Managing invoices, expenses, and financial records across spreadsheets makes accounting difficult and error-prone."
              },
              {
                icon: <Headphones className="text-[#f99d1c]" size={32} />,
                title: "Poor Customer Support Tracking",
                description: "Without a structured support system, customer issues may get delayed or lost, leading to dissatisfaction."
              }
            ].map((challenge, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 border-l-4 border-[#f99d1c] shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 bg-gray-50 border border-gray-200 flex items-center justify-center mb-6 group-hover:border-[#f99d1c] transition-colors">
                  {challenge.icon}
                </div>
                <h3 className="text-[#11253e] text-xl font-bold tracking-tight mb-4">{challenge.title}</h3>
                <p className="text-[#11253e]/70 font-light leading-relaxed">{challenge.description}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
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
              <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">SOLUTION</span>
            </div>
            <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight mb-6">
              Integrated platform for seamless operations
            </h2>
            <div className="w-24 h-1 bg-[#f99d1c] mx-auto mb-8"></div>
            <p className="text-[#11253e]/80 text-lg font-light max-w-3xl mx-auto mb-6">
              WorkbookNow ERP provides an integrated platform that centralizes key business operations into a single system. It eliminates inefficiencies by automating processes and ensuring that every department has access to real-time data.
            </p>
            <p className="text-[#11253e]/80 text-lg font-light max-w-3xl mx-auto mb-6">
              The platform enables businesses to manage employees, monitor inventory, track financial transactions, and resolve customer issues efficiently.
            </p>
            <p className="text-[#11253e]/80 text-lg font-light max-w-3xl mx-auto">
              With a user-friendly interface and scalable architecture, WorkbookNow ERP supports organizations of all sizes, helping them improve operational efficiency and deliver better customer experiences.
            </p>
          </Motion.div>
        </div>
      </section>

      {/* Key Capabilities */}
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
              <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">KEY CAPABILITIES</span>
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight mb-6">
              Comprehensive business modules
            </h2>
            <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
          </Motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="text-[#f99d1c]" size={40} />,
                title: "HRMS Module",
                features: [
                  "Employee attendance tracking",
                  "Automated payroll processing",
                  "Leave management system",
                  "Performance evaluation tools",
                  "Employee self-service portal"
                ]
              },
              {
                icon: <Package className="text-[#f99d1c]" size={40} />,
                title: "Inventory Management",
                features: [
                  "Real-time stock tracking",
                  "Automated reorder alerts",
                  "Multi-warehouse support",
                  "Barcode/QR code integration",
                  "Stock transfer management"
                ]
              },
              {
                icon: <DollarSign className="text-[#f99d1c]" size={40} />,
                title: "Financial Accounting",
                features: [
                  "Invoice generation and tracking",
                  "Expense management",
                  "Financial reporting and analytics",
                  "Tax calculation and compliance",
                  "Multi-currency support"
                ]
              },
              {
                icon: <Headphones className="text-[#f99d1c]" size={40} />,
                title: "Support Ticket Management",
                features: [
                  "Centralized ticket tracking",
                  "Priority-based assignment",
                  "Response time monitoring",
                  "Customer satisfaction tracking",
                  "Knowledge base integration"
                ]
              },
              {
                icon: <BarChart3 className="text-[#f99d1c]" size={40} />,
                title: "Business Analytics",
                features: [
                  "Real-time dashboards",
                  "Custom report generation",
                  "KPI tracking and monitoring",
                  "Predictive analytics",
                  "Data visualization tools"
                ]
              },
              {
                icon: <Workflow className="text-[#f99d1c]" size={40} />,
                title: "Workflow Automation",
                features: [
                  "Process automation",
                  "Approval workflow management",
                  "Task scheduling and reminders",
                  "Integration with third-party tools",
                  "Custom workflow builder"
                ]
              }
            ].map((capability, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all"
              >
                <div className="w-20 h-20 bg-white/5 border border-[#f99d1c]/30 flex items-center justify-center mb-6">
                  {capability.icon}
                </div>
                <h3 className="text-white text-xl font-bold uppercase tracking-wide mb-6">{capability.title}</h3>
                <ul className="space-y-3">
                  {capability.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#f99d1c] shrink-0 mt-1" />
                      <span className="text-white/70 text-md font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">BUSINESS BENEFITS</span>
            </div>
            <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight mb-6">
              Transform your business operations
            </h2>
            <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
          </Motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Zap className="text-[#f99d1c]" size={48} />,
                title: "Improved Productivity",
                description: "Automate repetitive tasks and streamline workflows to help teams focus on strategic initiatives that drive growth."
              },
              {
                icon: <Shield className="text-[#f99d1c]" size={48} />,
                title: "Enhanced Data Security",
                description: "Centralized data management with role-based access controls ensures sensitive business information remains secure."
              },
              {
                icon: <BarChart3 className="text-[#f99d1c]" size={48} />,
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
                className="text-center space-y-6"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-gray-50 to-white border-2 border-[#f99d1c]/30 flex items-center justify-center mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-[#11253e] text-2xl font-bold tracking-tight">{benefit.title}</h3>
                <p className="text-[#11253e]/70 text-md font-light leading-relaxed">
                  {benefit.description}
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
                  Ready to streamline your business operations?
                </h2>
                <div className="w-24 h-1 bg-[#f99d1c]"></div>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                  Discover how WorkbookNow ERP can transform your organization with centralized business management and intelligent automation.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/erp')}&title=${encodeURIComponent('WorkbookNow ERP')}&category=Solutions`}>
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
        pageTitle="WorkbookNow ERP" 
      />
    </>
  );
}