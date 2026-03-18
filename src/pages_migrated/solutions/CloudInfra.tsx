"use client";
import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Cloud, Server, BarChart3, ShieldCheck, Terminal, Database, ArrowRight, CheckCircle2, DollarSign, Eye, Lock, TrendingDown } from "lucide-react";
import { renderHeroTitle, formatQuotesToBold } from "../../lib/utils";

export default function CloudInfraSolution({ wordpressData }: { wordpressData?: any }) {
  useEffect(() => {
    document.title = "Cloud Infra Deployment & Monitoring | Nabhira Technologies";
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
                    {formatQuotesToBold(heroData?.heroS1Desc || "Automated deployment, predictive monitoring, and sovereign cloud governance. Nabhira builds the foundations that never fail.")}
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
              
              <div className="lg:col-span-5 hidden lg:block">
                <div className="relative">
                  <div className="absolute -inset-1 bg-linear-to-r from-[#f99d1c] to-blue-600 rounded-sm blur opacity-20 animate-pulse"></div>
                  <div className="relative bg-[#11253e] border border-white/10 p-1 rounded-sm">
                    <div className="aspect-[4/5] bg-linear-to-br from-[#11253e] to-black p-12 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[#f99d1c]/10 blur-[120px]"></div>
                      <div className="space-y-8 relative z-10">
                        <div className="w-12 h-1 bg-[#f99d1c]"></div>
                        <div className="space-y-4">
                          <h3 className="text-white text-3xl font-bold tracking-tight">{formatQuotesToBold("Cloud Sovereignty \nFirst Principles")}</h3>
                          <p className="text-white/30 text-sm font-light leading-relaxed">
                            {formatQuotesToBold("Every deployment is designed with data residency and sovereignty at its core. We don't just deploy to the cloud; we own the architectural integrity of your digital estate.")}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 pt-12">
                          <div className="space-y-2">
                            <p className="text-[#f99d1c] text-4xl font-bold">99.999%</p>
                            <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Target Uptime</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-[#f99d1c] text-4xl font-bold">&lt;50ms</p>
                            <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Global Latency</p>
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

        {/* Deployment Lifecycle */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
              <div className="max-w-2xl space-y-6">
                <h2 className="text-[#11253e] text-4xl font-bold tracking-tight">{formatQuotesToBold("The Modern Deployment \nLifecycle")}</h2>
                <div className="w-12 h-1 bg-[#f99d1c]"></div>
              </div>
              <p className="text-[#11253e] text-sm uppercase tracking-widest font-bold max-w-sm">
                From Terraform orchestration to Prometheus observability, our stack is enterprise-ready.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-1px bg-gray-100 border border-gray-100">
              {[
                {
                  title: "Automated Orchestration",
                  desc: "Zero-touch provisioning across multi-cloud and hybrid environments using declarative IaC patterns.",
                  icon: <Server className="text-[#f99d1c]" />
                },
                {
                  title: "Predictive Monitoring",
                  desc: "AI-native anomaly detection that identifies infrastructure fatigue before it leads to downtime.",
                  icon: <BarChart3 className="text-[#f99d1c]" />
                },
                {
                  title: "Sovereign Security",
                  desc: "Hardened deployments with automated compliance checks and real-time threat intelligence integration.",
                  icon: <ShieldCheck className="text-[#f99d1c]" />
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-16 space-y-10 hover:bg-gray-50 transition-colors">
                  <div className="w-14 h-14 bg-gray-50 flex items-center justify-center border border-gray-100">
                    {item.icon}
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-[#11253e] text-xl font-bold tracking-tight uppercase">{formatQuotesToBold(item.title)}</h3>
                    <p className="text-[#11253e] text-sm font-light leading-relaxed">{formatQuotesToBold(item.desc)}</p>
                  </div>
                  <button className="text-[10px] font-bold text-[#11253e] uppercase tracking-[0.3em] flex items-center gap-3 group">
                    View Spec <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hybrid Cloud Focus */}
        <section className="py-32 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-[#11253e] text-4xl font-bold tracking-tight">{formatQuotesToBold("The Unified Data Plane")}</h2>
                  <p className="text-[#11253e] text-lg font-light leading-relaxed">
                    {formatQuotesToBold("Nabhira provides a single pane of glass for your entire hybrid cloud estate. Whether it's AWS, Azure, GCP, or On-premise bare metal, your monitoring and deployment remain consistent.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Service Cards Grid (What We Offer) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mb-20"
          >
            <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-4 py-2 mb-8">
              <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">End-to-End Cloud Infrastructure</span>
            </div>
            <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight mb-6">
              We architect, deploy, and monitor your cloud environment
            </h2>
            <div className="w-24 h-1 bg-[#f99d1c] mb-8"></div>
            <p className="text-[#11253e]/80 text-xl font-light leading-relaxed">
              Across AWS, Azure, and GCP — so your team ships faster with full confidence.
            </p>
          </Motion.div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: <Cloud className="text-[#f99d1c]" size={32} />,
                title: "Cloud Deployment",
                description: "Infrastructure as Code with Terraform & Pulumi. Zero-downtime deployments, CI/CD pipelines, and container orchestration.",
                features: [
                  "IaC with Terraform / Terragrunt",
                  "CI/CD pipeline automation",
                  "Kubernetes & Docker orchestration",
                  "Multi-cloud, Multi Tenant architecture & hybrid support"
                ]
              },
              {
                icon: <Eye className="text-[#f99d1c]" size={32} />,
                title: "Real-time Monitoring",
                description: "Full-stack observability — metrics, logs, and traces — with proactive alerts before issues reach your users.",
                features: [
                  "Dashboards & intelligent alerting",
                  "Distributed tracing & log analysis",
                  "SLA / SLO monitoring",
                  "Incident response runbooks"
                ]
              },
              {
                icon: <DollarSign className="text-[#f99d1c]" size={32} />,
                title: "Cost Optimization",
                description: "Continuous cloud spend analysis, anomaly detection, and right-sizing recommendations to cut waste.",
                features: [
                  "Cloud cost anomaly detection",
                  "Resource right-sizing",
                  "Reserved instance planning",
                  "Monthly cost reports"
                ]
              },
              {
                icon: <Lock className="text-[#f99d1c]" size={32} />,
                title: "Security & Compliance",
                description: "SOC 2, HIPAA, and ISO 27001 ready infrastructure with VPC hardening, IAM policies, and audit logging.",
                features: [
                  "VPC hardening & IAM policies",
                  "Audit logging & SIEM integration",
                  "SOC 2 / HIPAA ready setup",
                  "Vulnerability scanning"
                ]
              }
            ].map((service, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-linear-to-br from-gray-50 to-white p-10 border-l-4 border-[#f99d1c] shadow-sm hover:shadow-lg transition-all group"
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

      {/* Our Process */}
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
              <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">OUR PROCESS</span>
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight mb-6">
              How we work
            </h2>
            <div className="w-24 h-1 bg-[#f99d1c] mx-auto mb-6"></div>
            <p className="text-white/80 text-lg font-light max-w-2xl mx-auto">
              A structured, 5-step engagement from audit to continuous optimization.
            </p>
          </Motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Assess",
                description: "Audit your current infrastructure, identify gaps, risks, and cost inefficiencies."
              },
              {
                step: "02",
                title: "Design",
                description: "Architect a cloud environment aligned with your workload, team size, and growth plan."
              },
              {
                step: "03",
                title: "Deploy",
                description: "Provision and automate using IaC best practices with zero-downtime rollouts."
              },
              {
                step: "04",
                title: "Monitor",
                description: "Instrument with observability tools, configure intelligent alerts, and set up dashboards."
              },
              {
                step: "05",
                title: "Optimize",
                description: "Continuous performance tuning, cost management, and security hardening over time."
              }
            ].map((phase, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <div className="text-[#f99d1c] text-5xl font-bold opacity-50">{phase.step}</div>
                  <h3 className="text-white text-xl font-bold uppercase tracking-wide">{phase.title}</h3>
                  <div className="w-12 h-1 bg-[#f99d1c]"></div>
                </div>
                <p className="text-white/70 text-md font-light leading-relaxed">
                  {phase.description}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-linear-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-4 py-2 mb-8">
              <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">TECH STACK</span>
            </div>
            <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight mb-6">
              Tools we work with
            </h2>
            <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {[
              "AWS",
              "Azure",
              "GCP",
              "Terraform",
              "Kubernetes",
              "Docker",
              "Datadog",
              "Grafana",
              "Prometheus",
              "GitHub Actions",
              "ArgoCD",
              "Cloudflare",
              "New Relic",
              "Pulumi",
              "Helm"
            ].map((tech, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 p-6 flex items-center justify-center hover:border-[#f99d1c] hover:shadow-md transition-all group"
              >
                <span className="text-[#11253e] font-bold text-sm uppercase tracking-wider group-hover:text-[#f99d1c] transition-colors">
                  {tech}
                </span>
              </Motion.div>
            ))}
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
                  Ready to take control of your cloud?
                </h2>
                <div className="w-24 h-1 bg-[#f99d1c]"></div>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                  Discover how Nabhira's Cloud Infrastructure services can streamline your deployments and maximize your cloud ROI.
                </p>
              </div>
              
              <div className="relative">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
                  alt="DevOps Center"
                  className="rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-3xl"
                />
                <div className="absolute -bottom-10 -right-10 bg-[#f99d1c] p-10 hidden md:block">
                  <p className="text-white text-sm font-bold uppercase tracking-[0.2em] mb-4">{formatQuotesToBold("Live Status")}</p>
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-xs font-mono">{formatQuotesToBold("ALL SYSTEMS OPERATIONAL")}</span>
                  </div>
                </div>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

        {/* Infrastructure CTA */}
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
            <h2 className="text-[#11253e] text-5xl font-bold tracking-tighter">{formatQuotesToBold("Build Your Digital Fortress.")}</h2>
            <p className="text-[#11253e] text-xl font-light">
              {formatQuotesToBold("Stop fighting with infrastructure. Let Nabhira architect a cloud environment that scales with your ambition.")}
            </p>
            <div className="pt-6">
              <Link href="/contact">
                <button className="bg-[#11253e] text-white px-12 py-5 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-[#f99d1c] transition-all">
                  Speak to an Architect
                </button>
              </Link>
            </div>
          </div>
        </section>
    </>
  );
}
