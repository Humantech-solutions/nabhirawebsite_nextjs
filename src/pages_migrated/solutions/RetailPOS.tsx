"use client";

import React, { useEffect, useState } from "react";
import { motion as Motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { SalesBrochureModal } from "../../components/SalesBrochureModal";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { LimitlessTogether } from "../../components/Footer";
import {
  ArrowRight,
  AlertTriangle,
  BarChart3,
  ShieldCheck,
  Zap,
  Globe,
  Lock,
  Package,
  Users,
  Server,
  Layers,
  TrendingUp,
  Clock,
  Building2,
  Check,
  ChevronRight,
} from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1746723391801-1a24f7a57730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBwb2ludCUyMG9mJTIwc2FsZSUyMHBvcyUyMHN5c3RlbSUyMG1vZGVybiUyMHN0b3JlfGVufDF8fHx8MTc3MzEyMDk0NHww&ixlib=rb-4.1.0&q=80&w=1080";
const FRANCHISE_IMG =
  "https://images.unsplash.com/photo-1742589977991-0417bf1ca3b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmFuY2hpc2UlMjBtdWx0aSUyMG91dGxldCUyMHJldGFpbCUyMHN0b3JlJTIwb3BlcmF0aW9ucyUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzczMTIwOTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080";
const DASHBOARD_IMG =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjByZWFsJTIwdGltZSUyMHNhbGVzJTIwbW9uaXRvcmluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NzMxMjA5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080";
const CLOUD_IMG =
  "https://images.unsplash.com/photo-1647214648081-471aefb5ed86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNjYWxhYmxlJTIwZW50ZXJwcmlzZSUyMHNvZnR3YXJlJTIwcGxhdGZvcm18ZW58MXx8fHwxNzczMTIwOTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080";

const keyFeatures = [
  {
    icon: <Globe className="text-[#f99d1c]" size={28} />,
    title: "Centralized Head Office Control",
    desc: "Complete visibility and governance across all outlets from a single command center.",
  },
  {
    icon: <BarChart3 className="text-[#f99d1c]" size={28} />,
    title: "Real-Time Sales Monitoring",
    desc: "Live performance dashboards with detailed reporting insights across every location.",
  },
  {
    icon: <TrendingUp className="text-[#f99d1c]" size={28} />,
    title: "Sales & Profit Management",
    desc: "Comprehensive margin tracking and financial clarity at outlet and network level.",
  },
  {
    icon: <Lock className="text-[#f99d1c]" size={28} />,
    title: "Outlet-Level Data Isolation",
    desc: "Secure partitioned data architecture to protect each outlet's operational integrity.",
  },
  {
    icon: <Package className="text-[#f99d1c]" size={28} />,
    title: "Inventory Tracking",
    desc: "Live stock visibility with real-time updates synced across all outlets automatically.",
  },
  {
    icon: <Users className="text-[#f99d1c]" size={28} />,
    title: "Role-Based Access Control",
    desc: "Structured user permissions ensuring the right people access the right data.",
  },
  {
    icon: <ShieldCheck className="text-[#f99d1c]" size={28} />,
    title: "Secure Authentication",
    desc: "Enterprise-grade encrypted data handling and secure authentication protocols.",
  },
  {
    icon: <Zap className="text-[#f99d1c]" size={28} />,
    title: "High-Speed Billing Interface",
    desc: "Optimized POS interface engineered for peak-hour transactions and maximum throughput.",
  },
  {
    icon: <Server className="text-[#f99d1c]" size={28} />,
    title: "Scalable Cloud Deployment",
    desc: "Cloud-based infrastructure supporting growing franchise networks without disruption.",
  },
  {
    icon: <Layers className="text-[#f99d1c]" size={28} />,
    title: "Modular Architecture",
    desc: "Future-ready design allowing seamless expansion, integrations and capability additions.",
  },
];

const benefits = [
  {
    icon: <TrendingUp size={32} className="text-[#f99d1c]" />,
    tag: "Revenue Protection",
    metric: "5–15%",
    metricLabel: "Revenue Leakage Reduction",
    title: "Revenue Visibility & Leakage Reduction",
    features: [
      "Real-time sales tracking",
      "Centralized head office monitoring",
      "Outlet-level data isolation",
    ],
    outcomes: [
      "5–15% reduction in revenue leakage",
      "Faster detection of billing anomalies",
      "Improved gross margin transparency",
    ],
    color: "#f99d1c",
  },
  {
    icon: <Zap size={32} className="text-[#f99d1c]" />,
    tag: "Customer Throughput",
    metric: "20–40%",
    metricLabel: "Faster Checkout",
    title: "Faster Billing & Improved Customer Throughput",
    features: [
      "High-speed POS interface",
      "Optimized for peak-hour transactions",
    ],
    outcomes: [
      "20–40% faster billing time",
      "Reduced customer queue length",
      "Increased transactions per hour",
    ],
    color: "#0ea5e9",
  },
  {
    icon: <Building2 size={32} className="text-[#f99d1c]" />,
    tag: "Franchise Expansion",
    metric: "30–50%",
    metricLabel: "Faster Outlet Onboarding",
    title: "Faster Franchise Expansion",
    features: [
      "Cloud-based scalable deployment",
      "Modular architecture",
      "Centralized governance",
    ],
    outcomes: [
      "30–50% reduction in setup time",
      "Standardized operations across locations",
      "Controlled, scalable growth",
    ],
    color: "#10b981",
  },
  {
    icon: <ShieldCheck size={32} className="text-[#f99d1c]" />,
    tag: "Risk Control",
    metric: "Significant",
    metricLabel: "Compliance Improvement",
    title: "Stronger Governance & Risk Control",
    features: [
      "Role-based access control",
      "Encrypted data handling",
      "Secure authentication",
    ],
    outcomes: [
      "Reduced fraud risk",
      "Improved audit readiness",
      "Controlled access to sensitive financial data",
    ],
    color: "#8b5cf6",
  },
  {
    icon: <Clock size={32} className="text-[#f99d1c]" />,
    tag: "Operational Efficiency",
    metric: "25–40%",
    metricLabel: "Reduction in Manual Effort",
    title: "Operational Efficiency Improvement",
    features: [
      "Automated reporting",
      "Central dashboards",
      "Role-based access control",
    ],
    outcomes: [
      "25–40% reduction in manual consolidation",
      "Faster month-end closing",
      "Reduced reporting errors",
    ],
    color: "#f97316",
  },
  {
    icon: <Package size={32} className="text-[#f99d1c]" />,
    tag: "Inventory Optimization",
    metric: "15–25%",
    metricLabel: "Reduction in Stock Variance",
    title: "Inventory Optimization",
    features: [
      "Live stock visibility",
      "Centralized inventory control",
      "Real-time updates across outlets",
    ],
    outcomes: [
      "15–25% reduction in overstock / stockouts",
      "Improved inventory turnover ratio",
      "Lower dead stock",
    ],
    color: "#06b6d4",
  },
];

const problemPoints = [
  {
    icon: <AlertTriangle size={22} className="text-[#f99d1c]" />,
    text: "Order and sale data scattered across locations with no single source of truth.",
  },
  {
    icon: <AlertTriangle size={22} className="text-[#f99d1c]" />,
    text: "Inventory tracking becomes inconsistent as outlet count grows.",
  },
  {
    icon: <AlertTriangle size={22} className="text-[#f99d1c]" />,
    text: "Profit visibility is delayed or inaccurate — impeding fast decisions.",
  },
  {
    icon: <AlertTriangle size={22} className="text-[#f99d1c]" />,
    text: "Head Office lacks real-time control over pricing, promotions and store performance.",
  },
  {
    icon: <AlertTriangle size={22} className="text-[#f99d1c]" />,
    text: "Without a centralized system, businesses face inefficiencies and reporting errors.",
  },
];

export default function RetailPOS({ wordpressData }: any) {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Retail POS System | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ─── Hero Banner ─── */}
      <section className="relative h-[400px] md:h-[540px] bg-[#11253e] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={HERO_IMG}
            alt="Retail POS System"
            className="w-full h-full object-cover opacity-35 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11253e] via-[#11253e]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] via-transparent to-transparent" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl space-y-8"
          >
            <nav className="flex items-center space-x-3 text-[11px] md:text-[13px] font-medium tracking-[-0.02em] mb-4">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <span className="text-white/30 font-light">&gt;</span>
              <Link href="/solutions" className="text-white/60 hover:text-white transition-colors">Solutions</Link>
              <span className="text-white/30 font-light">&gt;</span>
              <span className="text-[#f99d1c] uppercase tracking-widest">Retail POS System</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-[#f99d1c]/10 border border-[#f99d1c]/30 rounded-sm px-4 py-2">
              <Zap size={14} className="text-[#f99d1c]" />
              <span className="text-[#f99d1c] text-[11px] font-bold tracking-[0.2em] uppercase">Enterprise POS & Franchise Management</span>
            </div>

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[66px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm">
              Retail POS &amp; <br />
              <span className="text-[#f99d1c]">Franchise Management</span>
            </h1>

            <p className="text-white/90 text-base sm:text-lg md:text-[20px] font-light leading-relaxed max-w-2xl drop-shadow-sm">
              A centralized platform delivering <span className="text-white font-medium">real-time control</span> across all your outlets — billing, inventory, performance and governance in one system.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/retail-pos')}&title=${encodeURIComponent('Retail POS & Franchise')}&category=Solutions`}>
                <button
                  className="bg-[#f99d1c] hover:bg-white hover:text-[#11253e] text-white px-10 py-5 rounded-sm transition-all inline-flex items-center space-x-3 uppercase tracking-widest shadow-2xl shadow-[#f99d1c]/20"
                  style={{ fontSize: "13px", fontWeight: 600 }}
                >
                  <span>Request a Demo</span>
                  <ArrowRight size={14} />
                </button>
              </Link>
              <button
                onClick={() => setIsBrochureModalOpen(true)}
                className="border border-white/25 text-white hover:border-[#f99d1c] hover:text-[#f99d1c] px-10 py-5 rounded-sm transition-all inline-flex items-center space-x-3 uppercase tracking-widest font-semibold"
                style={{ fontSize: "13px" }}
              >
                <span>Download Brochure</span>
              </button>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ─── Stats Strip ─── */}
      <section className="bg-[#f99d1c] py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "5–15%", label: "Revenue Leakage Reduction" },
              { value: "20–40%", label: "Faster Checkout Speed" },
              { value: "30–50%", label: "Faster Outlet Onboarding" },
              { value: "25–40%", label: "Less Manual Effort" },
            ].map((stat, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <div className="text-[#11253e] text-2xl md:text-3xl font-black">{stat.value}</div>
                <div className="text-[#11253e]/70 text-[11px] font-bold uppercase tracking-widest mt-1">{stat.label}</div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Problem Statement ─── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f99d1c]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: Content */}
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <span className="text-[#f99d1c] font-bold tracking-[0.25em] uppercase text-[11px] block mb-3">01 Problem Statement</span>
              <h2 className="text-[#11253e] text-3xl md:text-4xl font-medium tracking-tight mb-6">
                The Challenge of <br />
                <span className="text-[#f99d1c] font-bold">Multi-Outlet Growth</span>
              </h2>
              <div className="w-16 h-1 bg-[#f99d1c] mb-8" />
              <p className="text-[#11253e] text-lg font-light leading-relaxed mb-6" style={{ opacity: 0.8 }}>
                Franchise and multi-outlet businesses often struggle to maintain operational consistency as they grow. As outlets increase, managing sales performance and profit margins becomes increasingly complex.
              </p>
              <p className="text-[#11253e] text-base font-light leading-relaxed" style={{ opacity: 0.7 }}>
                Without a centralized digital system, businesses face inefficiencies, reporting errors, and limited transparency across their network — preventing them from making quick, data-driven decisions.
              </p>
            </div>

            <div className="space-y-4">
              {problemPoints.map((pt, i) => (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 p-4 border border-gray-100 rounded-sm hover:border-[#f99d1c]/30 hover:bg-[#f99d1c]/[0.02] transition-all"
                >
                  <div className="mt-0.5 shrink-0">{pt.icon}</div>
                  <p className="text-[#11253e] text-sm font-light leading-relaxed" style={{ opacity: 0.8 }}>{pt.text}</p>
                </Motion.div>
              ))}
            </div>
          </Motion.div>

          {/* Right: Image */}
          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-sm overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={FRANCHISE_IMG}
                alt="Multi-outlet franchise management"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11253e]/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-sm p-5 shadow-lg">
                  <p className="text-[#11253e] text-sm font-bold mb-1">Head Office Visibility Gap</p>
                  <p className="text-[#11253e]/60 text-xs font-light">Real-time control over pricing, promotions and store-level performance is missing in most franchise networks.</p>
                </div>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#f99d1c]/30 rounded-sm -z-10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#f99d1c]/10 rounded-sm -z-10" />
          </Motion.div>
        </div>
      </section>

      {/* ─── Hutech Solution Highlights ─── */}
      <section className="py-24 bg-[#11253e] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#f99d1c 1px, transparent 1px), linear-gradient(to right, #f99d1c 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(249,157,28,0.12) 0%, transparent 65%)" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <Motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-sm overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={DASHBOARD_IMG}
                  alt="Real-time sales analytics dashboard"
                  className="w-full h-[420px] object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#11253e]/40 to-transparent" />
              </div>
              {/* Floating stat card */}
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-[#f99d1c] text-[#11253e] p-5 rounded-sm shadow-xl"
              >
                <div className="text-3xl font-black">360°</div>
                <div className="text-[11px] font-bold uppercase tracking-wider mt-0.5">Outlet Visibility</div>
              </Motion.div>
            </Motion.div>

            {/* Right: Content */}
            <Motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-8"
            >
              <div>
                <span className="text-[#f99d1c] font-bold tracking-[0.25em] uppercase text-[11px] block mb-3">02 Solution Highlights</span>
                <h2 className="text-white text-3xl md:text-4xl font-medium tracking-tight mb-6">
                  Enterprise POS &amp; <br />
                  <span className="text-[#f99d1c] font-bold">Franchise Management Platform</span>
                </h2>
                <div className="w-16 h-1 bg-[#f99d1c] mb-8" />
              </div>

              <p className="text-white/75 font-light text-lg leading-relaxed">
                Hutech's Enterprise POS &amp; Franchise Management Platform is a packaged web application designed for retail and food businesses operating across multiple outlets. It centralizes billing, inventory, sales tracking, and performance monitoring into one secure and scalable system.
              </p>

              <div className="space-y-4">
                {[
                  "Complete Head Office visibility into store performance",
                  "Each outlet operates independently within a controlled framework",
                  "Real-time reporting with strong access controls",
                  "Built for scalability, security, and structured expansion",
                  "Streamlined operations with maintained financial clarity",
                ].map((point, i) => (
                  <Motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#f99d1c]/20 border border-[#f99d1c]/40 flex items-center justify-center shrink-0">
                      <Check size={11} className="text-[#f99d1c]" />
                    </div>
                    <p className="text-white/70 text-sm font-light leading-relaxed">{point}</p>
                  </Motion.div>
                ))}
              </div>

              <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/retail-pos')}&title=${encodeURIComponent('Retail POS & Franchise')}&category=Solutions`}>
                <button
                  className="mt-4 bg-[#f99d1c] hover:bg-white hover:text-[#11253e] text-white px-8 py-4 rounded-sm transition-all inline-flex items-center gap-3 uppercase tracking-widest"
                  style={{ fontSize: "12px", fontWeight: 600 }}
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRight size={14} />
                </button>
              </Link>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* ─── Key Features ─── */}
      <section className="py-24 bg-[#fdfbf7] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f99d1c]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-[#f99d1c] font-bold tracking-[0.25em] uppercase text-[11px] block mb-3">03 Key Features</span>
            <h2 className="text-[#11253e] text-3xl md:text-4xl font-medium tracking-tight mb-6">
              Built for <span className="text-[#f99d1c] font-bold">Franchise Scale</span>
            </h2>
            <div className="w-16 h-1 bg-[#f99d1c] mx-auto mb-6" />
            <p className="text-[#11253e] text-lg font-light leading-relaxed" style={{ opacity: 0.7 }}>
              Every feature is designed to handle the complexity of multi-outlet operations while keeping your team in control.
            </p>
          </Motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {keyFeatures.map((feat, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(249,157,28,0.13)" }}
                className="bg-white border border-gray-100 rounded-sm p-6 flex flex-col gap-4 group cursor-default transition-all duration-300 hover:border-[#f99d1c]/30"
              >
                <div className="w-12 h-12 rounded-sm bg-[#f99d1c]/10 flex items-center justify-center group-hover:bg-[#f99d1c]/20 transition-colors">
                  {feat.icon}
                </div>
                <h3 className="text-[#11253e] font-bold text-sm leading-snug">{feat.title}</h3>
                <p className="text-[#11253e]/60 text-[13px] font-light leading-relaxed">{feat.desc}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Measurable Benefits ─── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(249,157,28,0.05) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-[#f99d1c] font-bold tracking-[0.25em] uppercase text-[11px] block mb-3">04 Measurable Benefits</span>
            <h2 className="text-[#11253e] text-3xl md:text-4xl font-medium tracking-tight mb-6">
              Outcomes That <span className="text-[#f99d1c] font-bold">Move the Needle</span>
            </h2>
            <div className="w-16 h-1 bg-[#f99d1c] mx-auto mb-6" />
            <p className="text-[#11253e] text-lg font-light leading-relaxed" style={{ opacity: 0.7 }}>
              Every capability is tied to a measurable business outcome — from revenue protection to operational efficiency.
            </p>
          </Motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-xl hover:border-[#f99d1c]/20 transition-all duration-300"
              >
                {/* Card header */}
                <div className="bg-[#11253e] p-6 relative overflow-hidden">
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2"
                    style={{ background: `radial-gradient(circle, ${benefit.color}25 0%, transparent 70%)` }}
                  />
                  <div className="flex items-start justify-between relative z-10">
                    <div>
                      <span className="text-[#f99d1c] text-[10px] font-bold tracking-[0.2em] uppercase block mb-2">{benefit.tag}</span>
                      <div className="text-white text-3xl font-black">{benefit.metric}</div>
                      <div className="text-white/50 text-[11px] font-medium mt-0.5">{benefit.metricLabel}</div>
                    </div>
                    <div className="w-12 h-12 rounded-sm bg-white/[0.08] flex items-center justify-center">
                      {benefit.icon}
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 space-y-5">
                  <h3 className="text-[#11253e] font-bold text-sm leading-snug">{benefit.title}</h3>

                  <div>
                    <p className="text-[#11253e]/50 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Capabilities Used</p>
                    <div className="space-y-1.5">
                      {benefit.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <ChevronRight size={12} className="text-[#f99d1c] shrink-0" />
                          <span className="text-[#11253e]/70 text-[13px] font-light">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-[#11253e]/50 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Measurable Benefit</p>
                    <div className="space-y-1.5">
                      {benefit.outcomes.map((o, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#f99d1c] mt-1.5 shrink-0" />
                          <span className="text-[#11253e]/80 text-[13px] font-light leading-relaxed">{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Architecture Visual Section ─── */}
      <section className="py-24 bg-[#11253e] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(rgba(249,157,28,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f99d1c]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f99d1c]/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div>
                <span className="text-[#f99d1c] font-bold tracking-[0.25em] uppercase text-[11px] block mb-3">05 Platform Architecture</span>
                <h2 className="text-white text-3xl md:text-4xl font-medium tracking-tight mb-6">
                  Designed for <br />
                  <span className="text-[#f99d1c] font-bold">Controlled Scalability</span>
                </h2>
                <div className="w-16 h-1 bg-[#f99d1c] mb-8" />
                <p className="text-white/70 font-light text-lg leading-relaxed">
                  Built with scalability and security in mind, this solution supports businesses that want structured expansion without operational chaos.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Globe size={20} />, label: "Multi-Outlet Network" },
                  { icon: <Server size={20} />, label: "Cloud-Based Backend" },
                  { icon: <ShieldCheck size={20} />, label: "Encrypted Data Layer" },
                  { icon: <BarChart3 size={20} />, label: "Live Analytics Engine" },
                  { icon: <Layers size={20} />, label: "Modular Architecture" },
                  { icon: <Lock size={20} />, label: "RBAC Security" },
                ].map((item, i) => (
                  <Motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="bg-white/[0.05] border border-white/10 rounded-sm p-4 flex items-center gap-3 hover:bg-white/[0.08] hover:border-[#f99d1c]/40 transition-all group"
                  >
                    <div className="text-[#f99d1c] group-hover:scale-110 transition-transform">{item.icon}</div>
                    <span className="text-white/80 text-sm font-light">{item.label}</span>
                  </Motion.div>
                ))}
              </div>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="relative rounded-sm overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={CLOUD_IMG}
                  alt="Cloud scalable deployment"
                  className="w-full h-[420px] object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11253e]/50 to-transparent" />
              </div>
              {/* Architecture layers diagram overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="space-y-1.5">
                  {["Presentation Layer — POS Interface & Dashboards", "Business Logic — Billing, Inventory, Reporting", "Data Layer — Isolated Outlet Databases + Central Warehouse", "Infrastructure — Scalable Cloud Deployment"].map((layer, i) => (
                    <Motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="bg-[#11253e]/90 backdrop-blur-sm border border-white/10 px-4 py-2 flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: i === 0 ? "#f99d1c" : i === 1 ? "#60a5fa" : i === 2 ? "#34d399" : "#a78bfa" }} />
                      <span className="text-white/80 text-[11px] font-light">{layer}</span>
                    </Motion.div>
                  ))}
                </div>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f99d1c]/40 to-transparent" />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(249,157,28,0.06) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <span className="text-[#f99d1c] font-bold tracking-[0.25em] uppercase text-[11px] block">Get Started</span>
            <h2 className="text-[#11253e] text-4xl md:text-5xl font-medium tracking-tight">
              Ready to Unify Your <br />
              <span className="text-[#f99d1c] font-bold">Retail Network?</span>
            </h2>
            <p className="text-[#11253e]/65 font-light text-lg leading-relaxed max-w-2xl mx-auto">
              Let's discuss how our Enterprise POS &amp; Franchise Management Platform can bring order, visibility, and control to your growing operations.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/retail-pos')}&title=${encodeURIComponent('Retail POS & Franchise')}&category=Solutions`}>
                <Motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-[#f99d1c] text-white px-10 py-5 rounded-sm inline-flex items-center gap-3 uppercase tracking-widest shadow-xl"
                  style={{ fontSize: "13px", fontWeight: 600, boxShadow: "0 8px 32px rgba(249,157,28,0.35)" }}
                >
                  <span>Request a Demo</span>
                  <ArrowRight size={14} />
                </Motion.button>
              </Link>
              <Link href="/solutions">
                <Motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="border border-[#11253e]/20 text-[#11253e] hover:border-[#f99d1c] hover:text-[#f99d1c] px-10 py-5 rounded-sm transition-all inline-flex items-center gap-3 uppercase tracking-widest font-semibold"
                  style={{ fontSize: "13px" }}
                >
                  <span>Explore All Solutions</span>
                </Motion.button>
              </Link>
              <Motion.button
                onClick={() => setIsBrochureModalOpen(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#11253e] text-white px-10 py-5 rounded-sm inline-flex items-center gap-3 uppercase tracking-widest shadow-xl font-semibold"
                style={{ fontSize: "13px" }}
              >
                <span>Download Brochure</span>
              </Motion.button>
            </div>
          </Motion.div>
        </div>
      </section>

      <SalesBrochureModal 
        isOpen={isBrochureModalOpen} 
        onClose={() => setIsBrochureModalOpen(false)} 
        pageTitle="Retail POS & Franchise" 
      />

      <LimitlessTogether />
    </>
  );
}
