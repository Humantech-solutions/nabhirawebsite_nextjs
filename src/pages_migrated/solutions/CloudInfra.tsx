"use client";
import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Cloud, Server, BarChart3, ShieldCheck, Terminal, Database, ArrowRight, CheckCircle2, DollarSign, Eye, Lock, TrendingDown } from "lucide-react";
import { renderHeroTitle, formatQuotesToBold } from "../../lib/utils";

export default function CloudInfraSolution({ wordpressData }: { wordpressData?: any }) {
  useEffect(() => {
    document.title = "Cloud Infra Deployment & Monitoring | Hutech Solutions Technologies";
    window.scrollTo(0, 0);
  }, []);

  const gs = wordpressData?.globalSettings;
  const heroData = gs?.heroSlides;

  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-[#11253e] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f99d1c1a_0%,transparent_70%)]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 py-20 w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-12">
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-5 py-2 mb-10">
                  <Terminal size={14} className="text-[#f99d1c]" />
                  <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">Infrastructure as Code</span>
                </div>
                <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-8">
                  {renderHeroTitle(heroData?.heroS1Title || (
                    <>
                      Architecting <br /> <span className="text-[#f99d1c]">Resilience.</span>
                    </>
                  ))}
                </h1>
                <p className="text-white/90 text-xl font-light leading-relaxed max-w-2xl mb-12">
                  {formatQuotesToBold(heroData?.heroS1Desc || "Automated deployment, predictive monitoring, and sovereign cloud governance. Hutech Solutions builds the foundations that never fail.")}
                </p>
                <div className="flex flex-wrap gap-8">
                  <Link href="/contact">
                    <button className="bg-[#f99d1c] text-white px-10 py-5 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#11253e] transition-all">
                      REQUEST DEMO
                    </button>
                  </Link>
                  <button className="text-white/40 hover:text-white px-10 py-5 text-[12px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 transition-colors">
                    Explore Stack <ArrowRight size={16} />
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
                    { value: "99.999%", label: "Target Uptime", desc: "Designed with data residency and sovereignty at its core." },
                    { value: "<50ms", label: "Global Latency", desc: "Optimized edge network delivery for global applications." }
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
                The Modern Infrastructure & Deployment Lifecycle
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
            </div>

            <div className="space-y-8 text-[#11253e] text-lg font-light leading-relaxed max-w-4xl mx-auto">
              <p>
                From Terraform orchestration to Prometheus observability, our stack is enterprise-ready. Zero-touch provisioning across multi-cloud and hybrid environments using declarative IaC patterns.
              </p>
              <p>
                Nabhira provides a single pane of glass for your entire hybrid cloud estate. Whether it's AWS, Azure, GCP, or On-premise bare metal, your monitoring and deployment remain consistent.
              </p>
              <p className="text-xl font-medium text-[#11253e]">
                Automated deployment, predictive monitoring, and sovereign cloud governance—Nabhira builds the foundations that never fail.
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
                Infrastructure Challenges
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c]"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Server size={32} className="text-[#f99d1c]" />,
                  title: "Multi-Cloud Complexity",
                  description: "Managing disconnected AWS, Azure, and GCP environments creates operational silos and configuration drift."
                },
                {
                  icon: <TrendingDown size={32} className="text-[#f99d1c]" />,
                  title: "Uncontrolled Cloud Spend",
                  description: "Lack of resource optimization and right-sizing leads to significant cloud cost waste."
                },
                {
                  icon: <Lock size={32} className="text-[#f99d1c]" />,
                  title: "Compliance & Security Gaps",
                  description: "Ensuring SOC 2, HIPAA, and ISO compliance across dynamic containerized environments requires automated governance."
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
                Cloud Infra Deployment & Monitoring Platform
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
                  We architect, deploy, and monitor your cloud environment across AWS, Azure, and GCP so your team ships faster with full confidence.
                </p>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                  Infrastructure as Code with Terraform & Pulumi. Zero-downtime deployments, automated CI/CD pipelines, and full-stack observability with proactive alerts.
                </p>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                  Continuous cloud spend analysis, anomaly detection, and right-sizing recommendations to cut waste while maintaining 99.999% target uptime.
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
                  alt="Cloud Infrastructure Operations"
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
                  icon: <Cloud size={36} className="text-[#f99d1c]" />,
                  title: "Cloud Deployment",
                  description: "Infrastructure as Code with Terraform & Pulumi. Zero-downtime deployments, CI/CD pipelines, and container orchestration."
                },
                {
                  icon: <Eye size={36} className="text-[#f99d1c]" />,
                  title: "Real-time Monitoring",
                  description: "Full-stack observability — metrics, logs, and traces — with proactive alerts before issues reach your users."
                },
                {
                  icon: <DollarSign size={36} className="text-[#f99d1c]" />,
                  title: "Cost Optimization",
                  description: "Continuous cloud spend analysis, anomaly detection, and right-sizing recommendations to cut waste."
                },
                {
                  icon: <Lock size={36} className="text-[#f99d1c]" />,
                  title: "Security & Compliance",
                  description: "SOC 2, HIPAA, and ISO 27001 ready infrastructure with VPC hardening, IAM policies, and audit logging."
                },
                {
                  icon: <Server size={36} className="text-[#f99d1c]" />,
                  title: "Automated IaC Provisioning",
                  description: "Zero-touch provisioning across multi-cloud and hybrid environments using declarative IaC patterns."
                },
                {
                  icon: <BarChart3 size={36} className="text-[#f99d1c]" />,
                  title: "Predictive Observability",
                  description: "AI-native anomaly detection that identifies infrastructure fatigue before it leads to downtime."
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
                icon: <Server className="text-[#f99d1c]" size={40} />,
                title: "AUTOMATED IAC PIPELINES",
                description: "Declarative Terraform and Pulumi blueprints for reproducible infrastructure deployments across regions."
              },
              {
                icon: <BarChart3 className="text-[#f99d1c]" size={40} />,
                title: "PREDICTIVE ANOMALY ENGINE",
                description: "Machine learning models analyze log telemetry to detect metric anomalies before service degradation."
              },
              {
                icon: <ShieldCheck className="text-[#f99d1c]" size={40} />,
                title: "SOVEREIGN SECURITY MESH",
                description: "Continuous compliance validation and zero-trust network policies enforcing data residency controls."
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
                  icon: <BarChart3 className="text-[#f99d1c]" size={40} />,
                  title: "99.999% Target Uptime",
                  description: "High availability architecture designed with redundant multi-region failovers."
                },
                {
                  icon: <DollarSign className="text-[#f99d1c]" size={40} />,
                  title: "Cost Optimization",
                  description: "Eliminate cloud waste through automated resource right-sizing and spot instance orchestration."
                },
                {
                  icon: <ShieldCheck className="text-[#f99d1c]" size={40} />,
                  title: "Enterprise Compliance",
                  description: "SOC 2, HIPAA, and ISO ready infrastructure with automated security auditing."
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
                Build Your Digital Fortress.
              </h2>
              <p className="text-[#11253e]/70 text-lg font-light leading-relaxed">
                Stop fighting with infrastructure. Let Nabhira architect a cloud environment that scales with your ambition.
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
    </>
  );
}
