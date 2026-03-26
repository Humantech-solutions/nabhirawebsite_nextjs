"use client";
import React, { useEffect, useState } from "react";
import { motion as Motion } from "motion/react";
import Link from "next/link";
import { SalesBrochureModal } from "../../components/SalesBrochureModal";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Cloud, Server, BarChart3, ShieldCheck, Terminal, Database, ArrowRight, CheckCircle2, DollarSign, Eye, Lock, TrendingDown } from "lucide-react";

export default function CloudInfraSolution({ wordpressData }: any) {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Cloud Infra Deployment & Monitoring | Nabhira Technologies";
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
                <Cloud size={14} className="text-[#f99d1c]" />
                <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">WHAT WE OFFER</span>
              </div>
              
              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
                Cloud Infra Deployment &<br />
                <span className="text-[#f99d1c]">Monitoring</span>
              </h1>
              
              <p className="text-white/90 text-xl font-light leading-relaxed max-w-2xl">
                Scalable, automated cloud infrastructure with real-time visibility — built to handle your growth without surprises.
              </p>
              
              <div className="flex flex-wrap gap-6 pt-4">
                <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/cloud-infra')}&title=${encodeURIComponent('Cloud Infra')}&category=Solutions`}>
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
                { stat: "99.9%", label: "Uptime guaranteed" },
                { stat: "60%", label: "Faster deployments" },
                { stat: "40%", label: "Cloud cost reduction" }
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

      {/* What We Offer - Overview */}
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
                  Ready to take control of your cloud?
                </h2>
                <div className="w-24 h-1 bg-[#f99d1c]"></div>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                  Discover how Nabhira's Cloud Infrastructure services can streamline your deployments and maximize your cloud ROI.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/cloud-infra')}&title=${encodeURIComponent('Cloud Infra')}&category=Solutions`}>
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
        pageTitle="Cloud Infra" 
      />
    </>
  );
}