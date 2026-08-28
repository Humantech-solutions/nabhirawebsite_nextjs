"use client";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import { ServiceHero } from "../../../components/ServiceHero";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { renderHeroTitle, formatQuotesToBold } from "../../../lib/utils";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  Map,
  Zap,
  BarChart3,
  Layers,
  Settings,
  Cpu,
  Shield,
  Server,
  Users,
  Layout
} from "lucide-react";

export default function CloudTransformation({ wordpressData }: { wordpressData?: any }) {
  useEffect(() => {
    document.title = "Cloud Transformation Services | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const gs = wordpressData?.globalSettings;
  const heroData = gs?.heroSlides;

  const methodology = [
    {
      id: "readiness",
      title: "Assess & Readiness",
      icon: <Search className="text-[#f99d1c]" size={24} />,
      points: [
        "Legacy infrastructure discovery",
        "Cloud readiness evaluation",
        "Business case and ROI modeling",
        "Tailored transformation roadmap"
      ]
    },
    {
      id: "design",
      title: "Architecture Design",
      icon: <Map className="text-[#f99d1c]" size={24} />,
      points: [
        "Resilient multi-cloud architecture",
        "Hybrid environment integration",
        "Landing zone & security guardrails",
        "High availability & disaster recovery design"
      ]
    },
    {
      id: "migrate",
      title: "Seamless Migration",
      icon: <Zap className="text-[#f99d1c]" size={24} />,
      points: [
        "Phased workload migration",
        "Data transfer with zero downtime",
        "Continuous automated testing",
        "Performance validation & tuning"
      ]
    },
    {
      id: "optimize",
      title: "Continuous Optimization",
      icon: <BarChart3 className="text-[#f99d1c]" size={24} />,
      points: [
        "Ongoing workload monitoring",
        "Cost optimization & FinOps controls",
        "Governance & security hardening",
        "DevOps enablement for ongoing innovation"
      ]
    }
  ];

  return (
    <>
      <ServiceHero
        subtitle="Cloud Transformation"
        category="Cloud Transformation"
        title={renderHeroTitle(heroData?.heroS1Title || (
          <>Scalable <br /><span className="text-[#f99d1c]">Infrastructure.</span></>
        ))}
        description={formatQuotesToBold(heroData?.heroS1Desc || "Migrate, modernize, and manage your enterprise workloads with our world-class cloud architectural expertise. We specialize in 'AWS', 'Azure', and 'Google Cloud'.") as any}
        image={heroData?.heroS1ImageUrl || heroData?.heroS1Image?.node?.sourceUrl || "https://images.unsplash.com/photo-1721444127971-b7d0023bbef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBjbG91ZCUyMHNlcnZlciUyMGJsdWV8ZW58MXx8fHwxNzcxOTU1MTE4fDA&ixlib=rb-4.1.0&q=80&w=1080"}
      />

      {/* Intro Section */}
      <section className="py-20 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-[#11253e] text-3xl md:text-5xl font-medium tracking-tight leading-tight">
                {formatQuotesToBold("Why Move to the Cloud \n^with Hutech Solutions?^")}
              </h2>
              <p className="text-[#11253e] text-lg md:text-xl font-light leading-relaxed">
                Cloud is more than just someone else's server. It's an opportunity to rebuild your business for agility, resilience, and speed.
              </p>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-[#11253e] text-lg leading-relaxed font-light">
                {formatQuotesToBold("We help enterprises transform their IT foundation, modernizing workloads to achieve high performance, elastic scalability, and long-term operating efficiency across multi-cloud environments.")}
              </p>
              <div className="w-20 h-px bg-[#f99d1c]"></div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* 1. Our Approach Section */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200"
                alt="Cloud Transformation Strategy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-[#11253e]/10"></div>
            </div>

            <div className="order-1 lg:order-2 space-y-12 p-5">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-[#f99d1c] font-black text-6xl">01</span>
                  <div className="h-px w-12 bg-[#f99d1c]"></div>
                </div>
                <h2 className="text-[#11253e] text-4xl lg:text-5xl font-medium tracking-tight">{formatQuotesToBold("Our 'Approach'")}</h2>
                <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest">{formatQuotesToBold("Architectural Excellence. Business-Driven.")}</h3>
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed">
                We design cloud transformation journeys tailored to your operational realities, balancing speed with governance and security.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  "Minimizing risk and operational disruption",
                  "Building resilient multi-cloud foundations",
                  "Automating deployment and governance",
                  "Optimizing infrastructure operating costs",
                  "Empower internal teams through DevOps alignment"
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-[#f99d1c] shrink-0 mt-1" size={18} />
                    <span className="text-[#11253e] text-sm font-medium">{formatQuotesToBold(item)}</span>
                  </div>
                ))}
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed">
                Whether migrating from on-premise data centers or optimizing within Amazon Web Services, Microsoft Azure, or Google Cloud, our goal is predictable, measurable business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Methodology Section */}
      <section className="py-20 bg-[#eeede9] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-24 space-y-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-[#f99d1c] font-black text-6xl">02</span>
              <div className="h-px w-12 bg-[#f99d1c]"></div>
            </div>
            <h2 className="text-[#11253e] text-4xl lg:text-5xl font-medium tracking-tight">{formatQuotesToBold("Our 'Methodology'")}</h2>
            <h3 className="text-[#11253e] text-xl font-light uppercase tracking-[0.2em]">{formatQuotesToBold("Disciplined Transformation Framework")}</h3>
            <p className="text-[#11253e] text-lg font-light max-w-2xl mx-auto">
              {formatQuotesToBold("Our step-by-step methodology ensures seamless transition, controlled risk, and high availability from day one.")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((step, idx) => (
              <Motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-5 pb-10 border-b-4 border-[#11253e]/10 hover:border-[#f99d1c] transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 bg-[#11253e]/5 rounded-sm flex items-center justify-center mb-8 mx-auto group-hover:bg-[#f99d1c]/10 transition-colors">
                  {step.icon}
                </div>
                <h4 className="text-[#11253e] text-2xl font-medium mb-6 w-full">{formatQuotesToBold(step.title)}</h4>
                <div className="space-y-4 flex-grow text-left w-full">
                  {step.points.map((point, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-1 h-1 rounded-full bg-[#f99d1c] mt-2 shrink-0"></div>
                      <span className="text-[#11253e] text-[15px] leading-relaxed font-normal">{formatQuotesToBold(point)}</span>
                    </div>
                  ))}
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Tools & Accelerators Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12 p-5">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-[#f99d1c] font-black text-6xl">03</span>
                  <div className="h-px w-12 bg-[#f99d1c]"></div>
                </div>
                <h2 className="text-[#11253e] text-4xl lg:text-5xl font-medium tracking-tight leading-tight">{formatQuotesToBold("Tools & 'Accelerators'")}</h2>
                <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest leading-snug">{formatQuotesToBold("Automation-Driven. Cloud-Native.")}</h3>
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed">
                We leverage enterprise-grade cloud platforms and automation accelerators to streamline migrations and ensure maximum uptime.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { icon: <Search size={18} />, text: "Automated workload discovery & dependency mapping" },
                  { icon: <Layers size={18} />, text: "Multi-cloud migration & replication frameworks" },
                  { icon: <Settings size={18} />, text: "Infrastructure-as-Code for automated provisioning" },
                  { icon: <Cpu size={18} />, text: "Continuous observability & monitoring systems" },
                  { icon: <BarChart3 size={18} />, text: "FinOps cost management & optimization tools" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-[#f99d1c] shrink-0 mt-1" size={18} />
                    <span className="text-[#11253e] text-sm font-medium">{formatQuotesToBold(item.text)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-[#11253e] p-1 rounded-sm overflow-hidden shadow-2xl group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
                  alt="Cloud Infrastructure Automation"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#f99d1c] p-8 text-[#11253e] max-w-xs shadow-xl hidden md:block">
                <p className="text-sm font-medium italic">
                  {formatQuotesToBold("'Our accelerators shorten transformation timelines and eliminate human error across every deployment.'")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Value Proposition Section */}
      <section className="py-20 bg-[#11253e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-[#f99d1c] font-black text-6xl">04</span>
              <div className="h-px w-12 bg-[#f99d1c]"></div>
            </div>
            <h2 className="text-white text-4xl lg:text-5xl font-medium tracking-tight">{formatQuotesToBold("Value 'Proposition'")}</h2>
            <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest">{formatQuotesToBold("Agility. Resilience. High Performance.")}</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Serverless Speed", desc: "Deploy functions that scale instantly and only pay for what you use." },
              { title: "Microservices Architecture", desc: "Decouple your monolith and build independent, maintainable services." },
              { title: "Hybrid Cloud Integration", desc: "Maintain on-premise security while leveraging cloud scalability." },
              { title: "DevOps Excellence", desc: "Automate your CI/CD pipelines for faster and safer releases." },
              { title: "Zero Trust Security", desc: "Enterprise-grade security built into the very fabric of your network." },
              { title: "99.99% Availability", desc: "Architected for high availability and robust disaster recovery." }
            ].map((item, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 hover:border-[#f99d1c]/50 transition-all group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#f99d1c] flex items-center justify-center text-[#11253e]">
                    <CheckCircle2 size={16} />
                  </div>
                  <h4 className="text-white text-lg font-medium tracking-tight">{formatQuotesToBold(item.title)}</h4>
                </div>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  {formatQuotesToBold(item.desc)}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 relative bg-[#e5dfd3] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `repeating-linear-gradient(110deg, transparent, transparent 20px, #11253e 20px, #11253e 21px)` }} />
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#11253e]/20 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#fdfbf7] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 relative"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#f99d1c]"></div>
            <div className="max-w-xl space-y-4">
              <h2 className="text-[#11253e] text-3xl md:text-4xl font-bold tracking-tight leading-[1.2]">
                {formatQuotesToBold("Ready to architect \n^the future?^")}
              </h2>
              <p className="text-[#11253e] text-base font-light leading-relaxed">
                Let our experts design a cloud transformation strategy that scales with your ambition and delivers measurable business value.
              </p>
            </div>
            <button
              className="whitespace-nowrap bg-[#f99d1c] hover:bg-[#10243c] text-white px-10 py-5 rounded-md transition-all inline-flex items-center space-x-3 uppercase tracking-[0.18em] group shrink-0"
              style={{ fontSize: "13px", fontWeight: 600 }}
            >
              <span>START YOUR JOURNEY</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Motion.div>
        </div>
      </section>
    </>
  );
}
