"use client";
import React, { useEffect, useState } from "react";
import { motion as Motion } from "motion/react";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { DownloadModal } from "../../components/DownloadModal";
import { Users, Banknote, CalendarCheck, Briefcase, Heart, UserPlus, ArrowRight, CheckCircle2, BarChart3, ShieldCheck, Globe, Zap, Package, DollarSign, Headphones, Target, TrendingUp, Shield } from "lucide-react";
import { renderHeroTitle, formatQuotesToBold } from "../../lib/utils";

export default function HRMSSolution({ wordpressData }: { wordpressData?: any }) {
  useEffect(() => {
    document.title = "HRMS and Payroll Solutions | Hutech Solutions Technologies";
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
                    { value: "120+", label: "Countries Supported", desc: "Automated tax calculations and multi-country compliance." },
                    { value: "0%", label: "Compliance Error Rate", desc: "Seamless bank integration in over 120 jurisdictions." }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-start gap-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="w-2 h-2 bg-[#f99d1c] rounded-full shrink-0 mt-3"></div>
                      <div className="space-y-1">
                        <p className="text-[#f99d1c] text-3xl md:text-4xl font-extrabold tracking-tight">{stat.value}</p>
                        <p className="text-[#11253e] text-base font-bold">{stat.label}</p>
                        {stat.desc && (
                          <p className="text-[#11253e]/60 text-sm font-light leading-relaxed">{stat.desc}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Motion.div>
            </div>
          </div>
        </div>
      </section>      {/* Overview Section */}
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
                <span className="text-[#f99d1c] font-bold text-xs uppercase tracking-[0.2em]">COMPREHENSIVE HR SYSTEM</span>
              </div>
              <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight leading-tight">
                Manage your workforce efficiently with automation
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
            </div>

            <div className="space-y-8 text-[#11253e] text-lg font-light leading-relaxed max-w-4xl mx-auto">
              <p>
                The HRMS module helps organizations manage their workforce efficiently by automating employee lifecycle processes. From employee onboarding to performance tracking, payroll management to leave administration, our comprehensive solution brings all human resource functions into one unified platform.
              </p>
              <p>
                Integrated with Nabhira’s AI LMS for seamless skills development and compliance training, the system delivers automated tax calculations, multi-country compliance, and real-time workforce analytics.
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
                Workforce Challenges
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c]"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <UserPlus size={32} className="text-[#f99d1c]" />,
                  title: "Manual Recruitment & ATS",
                  description: "Slow applicant tracking processes lead to delayed hiring cycles and missed high-quality talent."
                },
                {
                  icon: <Banknote size={32} className="text-[#f99d1c]" />,
                  title: "Payroll Compliance Errors",
                  description: "Managing multi-currency payroll, regional tax deductions, and bank disbursements manually causes errors."
                },
                {
                  icon: <BarChart3 size={32} className="text-[#f99d1c]" />,
                  title: "Biased Performance Reviews",
                  description: "Lack of continuous feedback loops and objective OKR metrics leads to inconsistent employee calibration."
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
                HRMS & Global Payroll Intelligence Platform
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
                  Go beyond simple payroll. Nabhira’s HRMS leverages AI to identify high-potential talent, optimize performance, and simplify global compliance across 120+ countries.
                </p>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                  Employee self-service portals with integrated AI chatbots ensure your workforce gets answers instantly, freeing HR from administrative overhead.
                </p>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                  Seamless bank integration, automated tax calculations, and zero-error compliance across international jurisdictions.
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
                  alt="HR Management Team"
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
                  icon: <UserPlus size={36} className="text-[#f99d1c]" />,
                  title: "Talent Acquisition & ATS",
                  description: "AI-native applicant tracking with automated resume scoring and intelligent interview scheduling."
                },
                {
                  icon: <Banknote size={36} className="text-[#f99d1c]" />,
                  title: "Global Dynamic Payroll",
                  description: "Automated tax calculations, benefit deductions, and direct deposit integration across 120+ countries."
                },
                {
                  icon: <BarChart3 size={36} className="text-[#f99d1c]" />,
                  title: "Performance & OKR Tracking",
                  description: "Continuous feedback loops, OKR alignment, and AI-driven potential mapping for career pathing."
                },
                {
                  icon: <CalendarCheck size={36} className="text-[#f99d1c]" />,
                  title: "Leave & Geo Attendance",
                  description: "Geo-fenced mobile check-ins, automated leave approvals, and seamless ERP time-tracking."
                },
                {
                  icon: <Users size={36} className="text-[#f99d1c]" />,
                  title: "AI Learning (LMS) Sync",
                  description: "Native integration with Nabhira AI LMS for targeted skills development and mandatory compliance."
                },
                {
                  icon: <Briefcase size={36} className="text-[#f99d1c]" />,
                  title: "Strategic Workforce Planning",
                  description: "Predictive turnover analytics and strategic resource allocation for complex enterprise teams."
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
                icon: <Zap className="text-[#f99d1c]" size={40} />,
                title: "PREDICTIVE RETENTION MODEL",
                description: "Early warning system identifies turnover risks by analyzing engagement telemetry and performance trends."
              },
              {
                icon: <Users className="text-[#f99d1c]" size={40} />,
                title: "SKILL MESH ANALYSIS",
                description: "AI automatically maps organizational skill gaps and generates targeted career learning pathways."
              },
              {
                icon: <BarChart3 className="text-[#f99d1c]" size={40} />,
                title: "BIAS-FREE CALIBRATION",
                description: "Machine learning algorithms normalize evaluation metrics and eliminate unconscious bias in reviews."
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
                  icon: <Users className="text-[#f99d1c]" size={40} />,
                  title: "Streamlined HR Operations",
                  description: "Automate repetitive HR tasks, reduce administrative burden, and empower HR teams to focus on strategy."
                },
                {
                  icon: <BarChart3 className="text-[#f99d1c]" size={40} />,
                  title: "Real-Time Workforce Insights",
                  description: "Access comprehensive dashboards and predictive telemetry providing instant visibility into organizational health."
                },
                {
                  icon: <TrendingUp className="text-[#f99d1c]" size={40} />,
                  title: "Accelerated Business Growth",
                  description: "Eliminate operational bottlenecks and scale international teams efficiently with integrated compliance."
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
                Empower Your People Today.
              </h2>
              <p className="text-[#11253e]/70 text-lg font-light leading-relaxed">
                Discover how Nabhira's HRMS and Payroll platform can transform your HR from an admin center into a strategic powerhouse.
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
      <DownloadModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} documentName="HRMS and Payroll Brochure" />
    </>
  );
}
