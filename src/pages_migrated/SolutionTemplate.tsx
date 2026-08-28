"use client";
import React, { useEffect, useState } from "react";
import { motion as Motion } from "motion/react";
import Link from "next/link";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { DownloadModal } from "../components/DownloadModal";
import {
  Store,
  TrendingUp,
  Eye,
  AlertCircle,
  BarChart3,
  Box,
  Settings,
  Zap,
  Shield,
  Users,
  ArrowRight
} from "lucide-react";
import { renderHeroTitle, formatQuotesToBold } from "../lib/utils";

export default function SolutionTemplate({ wordpressData }: { wordpressData?: any }) {
  useEffect(() => {
    document.title = wordpressData?.title || "Enterprise POS Solutions | Hutech Solutions Technologies";
    window.scrollTo(0, 0);
  }, [wordpressData?.title]);

  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const solf = wordpressData?.solutionPageSettings;

  // Stats list from ACF or fallback
  const dynamicStats = [
    { value: solf?.solStat1Value, label: solf?.solStat1Label },
    { value: solf?.solStat2Value, label: solf?.solStat2Label },
    { value: solf?.solStat3Value, label: solf?.solStat3Label },
    { value: solf?.solStat4Value, label: solf?.solStat4Label },
    { value: solf?.solStat5Value, label: solf?.solStat5Label },
    { value: solf?.solStat6Value, label: solf?.solStat6Label },
  ].filter(s => s.value || s.label);

  const fallbackStats = [
    { value: "5-15%", label: "Revenue Protection" },
    { value: "20-40%", label: "Faster Checkout Time" },
    { value: "30-50%", label: "Faster Outlet Setup" }
  ];

  const stats = dynamicStats.length > 0 ? dynamicStats : fallbackStats;

  // Challenges list
  const challengeDefaults = [
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
  ];

  const dynamicChallenges = [
    { iconUrl: solf?.solChallenge1Icon?.node?.sourceUrl, title: solf?.solChallenge1Title, description: solf?.solChallenge1Desc },
    { iconUrl: solf?.solChallenge2Icon?.node?.sourceUrl, title: solf?.solChallenge2Title, description: solf?.solChallenge2Desc },
    { iconUrl: solf?.solChallenge3Icon?.node?.sourceUrl, title: solf?.solChallenge3Title, description: solf?.solChallenge3Desc },
    { iconUrl: solf?.solChallenge4Icon?.node?.sourceUrl, title: solf?.solChallenge4Title, description: solf?.solChallenge4Desc },
    { iconUrl: solf?.solChallenge5Icon?.node?.sourceUrl, title: solf?.solChallenge5Title, description: solf?.solChallenge5Desc },
    { iconUrl: solf?.solChallenge6Icon?.node?.sourceUrl, title: solf?.solChallenge6Title, description: solf?.solChallenge6Desc },
  ].filter(c => c.title);

  // Features list
  const featureDefaults = [
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
  ];

  const dynamicFeatures = [
    { iconUrl: solf?.solFeature1Icon?.node?.sourceUrl, title: solf?.solFeature1Title, description: solf?.solFeature1Desc },
    { iconUrl: solf?.solFeature2Icon?.node?.sourceUrl, title: solf?.solFeature2Title, description: solf?.solFeature2Desc },
    { iconUrl: solf?.solFeature3Icon?.node?.sourceUrl, title: solf?.solFeature3Title, description: solf?.solFeature3Desc },
    { iconUrl: solf?.solFeature4Icon?.node?.sourceUrl, title: solf?.solFeature4Title, description: solf?.solFeature4Desc },
    { iconUrl: solf?.solFeature5Icon?.node?.sourceUrl, title: solf?.solFeature5Title, description: solf?.solFeature5Desc },
    { iconUrl: solf?.solFeature6Icon?.node?.sourceUrl, title: solf?.solFeature6Title, description: solf?.solFeature6Desc },
    { iconUrl: solf?.solFeature7Icon?.node?.sourceUrl, title: solf?.solFeature7Title, description: solf?.solFeature7Desc },
    { iconUrl: solf?.solFeature8Icon?.node?.sourceUrl, title: solf?.solFeature8Title, description: solf?.solFeature8Desc },
    { iconUrl: solf?.solFeature9Icon?.node?.sourceUrl, title: solf?.solFeature9Title, description: solf?.solFeature9Desc },
  ].filter(f => f.title);

  // Innovations list
  const innovationDefaults = [
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
  ];

  const dynamicInnovations = [
    { iconUrl: solf?.solInnovation1Icon?.node?.sourceUrl, title: solf?.solInnovation1Title, description: solf?.solInnovation1Desc },
    { iconUrl: solf?.solInnovation2Icon?.node?.sourceUrl, title: solf?.solInnovation2Title, description: solf?.solInnovation2Desc },
    { iconUrl: solf?.solInnovation3Icon?.node?.sourceUrl, title: solf?.solInnovation3Title, description: solf?.solInnovation3Desc },
    { iconUrl: solf?.solInnovation4Icon?.node?.sourceUrl, title: solf?.solInnovation4Title, description: solf?.solInnovation4Desc },
    { iconUrl: solf?.solInnovation5Icon?.node?.sourceUrl, title: solf?.solInnovation5Title, description: solf?.solInnovation5Desc },
    { iconUrl: solf?.solInnovation6Icon?.node?.sourceUrl, title: solf?.solInnovation6Title, description: solf?.solInnovation6Desc },
  ].filter(i => i.title);

  // Benefits list
  const benefitDefaults = [
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
  ];

  const dynamicBenefits = [
    { iconUrl: solf?.solBenefit1Icon?.node?.sourceUrl, title: solf?.solBenefit1Title, description: solf?.solBenefit1Desc },
    { iconUrl: solf?.solBenefit2Icon?.node?.sourceUrl, title: solf?.solBenefit2Title, description: solf?.solBenefit2Desc },
    { iconUrl: solf?.solBenefit3Icon?.node?.sourceUrl, title: solf?.solBenefit3Title, description: solf?.solBenefit3Desc },
    { iconUrl: solf?.solBenefit4Icon?.node?.sourceUrl, title: solf?.solBenefit4Title, description: solf?.solBenefit4Desc },
    { iconUrl: solf?.solBenefit5Icon?.node?.sourceUrl, title: solf?.solBenefit5Title, description: solf?.solBenefit5Desc },
    { iconUrl: solf?.solBenefit6Icon?.node?.sourceUrl, title: solf?.solBenefit6Title, description: solf?.solBenefit6Desc },
  ].filter(b => b.title);

  const cta1Href = (typeof solf?.solHeroCta1Link === "string" ? solf.solHeroCta1Link : solf?.solHeroCta1Link?.nodes?.[0]?.uri) || "/contact";
  const ctaDetailHref = (typeof solf?.solDetailCtaLink === "string" ? solf.solDetailCtaLink : solf?.solDetailCtaLink?.nodes?.[0]?.uri) || "/contact";
  const ctaFinalHref = (typeof solf?.solCtaBtnLink === "string" ? solf.solCtaBtnLink : solf?.solCtaBtnLink?.nodes?.[0]?.uri) || "/contact";

  return (
    <div>
      {/* ── 1. Hero Section ── */}
      <section className="relative min-h-[85vh] flex items-center bg-[#11253e] overflow-hidden">
        <div className="absolute inset-0">
          {/* Dot Grid Pattern */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(249, 157, 28, 0.4) 1px, transparent 1px)`,
              backgroundSize: '32px 32px'
            }}
          ></div>
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#11253e] via-[#11253e]/95 to-[#1a3a5f]/90"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f99d1c]/5 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 py-20 w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-12">
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-6 py-3 bg-[#f99d1c]/10">
                  {solf?.solHeroTagIcon?.node?.sourceUrl ? (
                    <ImageWithFallback
                      src={solf.solHeroTagIcon.node.sourceUrl}
                      alt=""
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  ) : (
                    <Store size={16} className="text-[#f99d1c]" />
                  )}
                  <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">
                    {solf?.solHeroTag || "AI-Powered Retail Solution"}
                  </span>
                </div>

                <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight">
                  {solf?.solHeroTitle ? renderHeroTitle(solf.solHeroTitle) : (
                    <>
                      Enterprise POS & <br />
                      <span className="text-[#f99d1c] font-medium">Franchise Management</span>
                    </>
                  )}
                </h1>

                <p className="text-white text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
                  {solf?.solHeroDesc ? formatQuotesToBold(solf.solHeroDesc) : "Centralized Control for Multi-Outlet Operations"}
                </p>

                <div className="flex flex-wrap gap-6 pt-4">
                  <Link href={cta1Href}>
                    <button className="bg-[#f99d1c] text-[#11253e] px-12 py-6 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all">
                      {solf?.solHeroCta1Text || "Request Demo"}
                    </button>
                  </Link>
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
                  <h3 className="text-[#11253e] text-2xl font-bold tracking-tight">
                    {solf?.solStatsTitle || "Proven Impact"}
                  </h3>
                </div>

                <div className="space-y-6">
                  {stats.map((stat, i) => (
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

      {/* ── 2. Overview Section ── */}
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
                <span className="text-[#f99d1c] font-bold text-xs uppercase tracking-[0.2em]">
                  {solf?.solOverviewTag || "Overview"}
                </span>
              </div>
              <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight leading-tight">
                {solf?.solOverviewHeading || "Centralized Operations for Growing Franchise Networks"}
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
            </div>

            <div className="space-y-8 text-[#11253e] text-lg font-light leading-relaxed max-w-4xl mx-auto">
              {solf?.solOverviewPara1 ? (
                <>
                  <p>{formatQuotesToBold(solf.solOverviewPara1)}</p>
                  {solf?.solOverviewPara2 && <p>{formatQuotesToBold(solf.solOverviewPara2)}</p>}
                  {solf?.solOverviewPara3 && (
                    <p className="text-xl font-medium text-[#11253e]">{formatQuotesToBold(solf.solOverviewPara3)}</p>
                  )}
                </>
              ) : (
                <>
                  <p>
                    Franchise and multi-outlet businesses often struggle to maintain operational consistency as they expand. Sales data becomes scattered across locations, inventory tracking becomes unreliable, and profit visibility is delayed or inaccurate.
                  </p>
                  <p>
                    Head office teams frequently lack real-time control over pricing, promotions, and store-level performance. Without centralized systems, businesses face operational inefficiencies, reporting errors, and limited transparency across their network.
                  </p>
                  <p className="text-xl font-medium text-[#11253e]">
                    Hutech Solutions' Enterprise POS & Franchise Management Platform provides a centralized system to manage billing, inventory, sales tracking, and outlet performance—helping businesses scale efficiently while maintaining full operational control.
                  </p>
                </>
              )}
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ── 3. The Challenge Section ── */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none"
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
                {solf?.solChallengeHeading || "The Challenge"}
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c]"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(dynamicChallenges.length > 0 ? dynamicChallenges : challengeDefaults).map((challenge: any, idx: number) => (
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
                      {challenge.iconUrl ? (
                        <ImageWithFallback src={challenge.iconUrl} alt={challenge.title || ""} width={32} height={32} className="object-contain" />
                      ) : (
                        challenge.icon
                      )}
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

      {/* ── 4. Our Solution Section ── */}
      <section className="py-24 bg-[#11253e] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
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
                {solf?.solDetailHeading || "Our Solution"}
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
              <p className="text-white/90 text-xl font-light leading-relaxed">
                {solf?.solDetailSubheading || "Enterprise POS & Franchise Management Platform"}
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
                {solf?.solDetailPara1 ? (
                  <>
                    <p className="text-white text-lg font-light leading-relaxed">{formatQuotesToBold(solf.solDetailPara1)}</p>
                    {solf?.solDetailPara2 && (
                      <p className="text-white/80 text-lg font-light leading-relaxed">{formatQuotesToBold(solf.solDetailPara2)}</p>
                    )}
                    {solf?.solDetailPara3 && (
                      <p className="text-white/80 text-lg font-light leading-relaxed">{formatQuotesToBold(solf.solDetailPara3)}</p>
                    )}
                  </>
                ) : (
                  <>
                    <p className="text-white text-lg font-light leading-relaxed">
                      Hutech Solutions' Retail POS System is a packaged web-based platform designed for retail chains and food businesses operating across multiple outlets.
                    </p>
                    <p className="text-white/80 text-lg font-light leading-relaxed">
                      The solution centralizes operations while allowing each outlet to function independently within a controlled framework. Head office teams gain full visibility into sales performance, inventory, and profitability through real-time dashboards.
                    </p>
                    <p className="text-white/80 text-lg font-light leading-relaxed">
                      Built with scalability and security in mind, the platform enables structured expansion without operational disruption.
                    </p>
                  </>
                )}

                <div className="pt-4">
                  <Link href={ctaDetailHref}>
                    <button className="bg-[#f99d1c] text-[#11253e] px-12 py-6 font-bold text-[14px] uppercase tracking-[0.2em] hover:bg-white transition-all">
                      {solf?.solDetailCtaText || "Explore Platform"}
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
                  src={solf?.solDetailImage?.node?.sourceUrl || "/assets/solution_detail_hero.jpg"}
                  alt={solf?.solDetailHeading || "Enterprise POS System"}
                  width={800}
                  height={600}
                  className="rounded-sm shadow-2xl w-full h-auto max-h-[550px] object-cover"
                />
              </Motion.div>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ── 5. Key Features Section ── */}
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
                {solf?.solFeaturesHeading || "Key Features"}
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(dynamicFeatures.length > 0 ? dynamicFeatures : featureDefaults).map((feature: any, idx: number) => (
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
                      {feature.iconUrl ? (
                        <ImageWithFallback src={feature.iconUrl} alt={feature.title || ""} width={36} height={36} className="object-contain" />
                      ) : (
                        feature.icon
                      )}
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

      {/* ── 6. Advanced AI Architecture Section ── */}
      <section className="py-24 bg-[#11253e] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
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
              <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">
                {solf?.solInnovationTag || "TECHNICAL INNOVATION"}
              </span>
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight">
              {solf?.solInnovationHeading || "Advanced AI architecture"}
            </h2>
            <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
          </Motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {(dynamicInnovations.length > 0 ? dynamicInnovations : innovationDefaults).map((innovation: any, idx: number) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-6"
              >
                <div className="w-20 h-20 bg-white/5 border border-[#f99d1c]/30 flex items-center justify-center mx-auto rounded-sm">
                  {innovation.iconUrl ? (
                    <ImageWithFallback src={innovation.iconUrl} alt={innovation.title || ""} width={40} height={40} className="object-contain" />
                  ) : (
                    innovation.icon
                  )}
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

      {/* ── 7. Business Benefits Section ── */}
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
                <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">
                  {solf?.solBenefitsTag || "BUSINESS BENEFITS"}
                </span>
              </div>
              <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight">
                {solf?.solBenefitsHeading || "Transform your business operations"}
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {(dynamicBenefits.length > 0 ? dynamicBenefits : benefitDefaults).map((benefit: any, idx: number) => (
                <Motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-6 group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-white border border-gray-200 flex items-center justify-center mx-auto rounded-sm group-hover:border-[#f99d1c] transition-all">
                    {benefit.iconUrl ? (
                      <ImageWithFallback src={benefit.iconUrl} alt={benefit.title || ""} width={40} height={40} className="object-contain" />
                    ) : (
                      benefit.icon
                    )}
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

      {/* ── 8. Final CTA Section ── */}
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
                {solf?.solCtaHeading || "Ready to Scale Your Franchise Operations?"}
              </h2>
              <p className="text-[#11253e]/70 text-lg font-light leading-relaxed">
                {solf?.solCtaDesc || "Discover how Hutech Solutions' Enterprise POS Platform can centralize your operations and accelerate franchise growth."}
              </p>
            </div>

            <Link href={ctaFinalHref} className="shrink-0">
              <button className="bg-[#f99d1c] text-white px-10 py-5 font-bold text-[13px] uppercase tracking-[0.2em] hover:bg-[#11253e] transition-all flex items-center gap-3">
                {solf?.solCtaBtnText || "START YOUR JOURNEY"} <ArrowRight size={16} />
              </button>
            </Link>
          </Motion.div>
        </div>
      </section>

      <DownloadModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} documentName="Enterprise POS Brochure" />
    </div>
  );
}
