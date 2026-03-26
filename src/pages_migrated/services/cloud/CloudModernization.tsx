"use client";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import { ServiceHero } from "../../../components/ServiceHero";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  Layout, 
  Cpu, 
  BarChart3, 
  Settings, 
  Database, 
  Layers, 
  Zap,
  ShieldCheck,
  Target,
  Workflow
} from "lucide-react";

export default function CloudModernization({ wordpressData }: any) {
  useEffect(() => {
    document.title = "Cloud Modernization Services | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const methodology = [
    {
      id: "assess",
      title: "Assess",
      icon: <Search className="text-[#f99d1c]" size={24} />,
      points: [
        "Application architecture review",
        "Technical debt analysis",
        "Performance and scalability assessment",
        "Cloud cost and utilization review"
      ]
    },
    {
      id: "strategize",
      title: "Design",
      icon: <Layout className="text-[#f99d1c]" size={24} />,
      points: [
        "Define modernization approach",
        "Identify quick wins and high-impact workloads",
        "Define target cloud-native architecture",
        "Create phased transformation roadmap"
      ]
    },
    {
      id: "modernize",
      title: "Implement",
      icon: <Cpu className="text-[#f99d1c]" size={24} />,
      points: [
        "Break monoliths into microservices (where appropriate)",
        "Containerize applications",
        "Implement CI/CD and DevOps practices",
        "Optimize databases and integrations"
      ]
    },
    {
      id: "optimize",
      title: "Optimize & Govern",
      icon: <BarChart3 className="text-[#f99d1c]" size={24} />,
      points: [
        "Continuous performance tuning",
        "Cost optimization and FinOps alignment",
        "Governance and security enhancement",
        "Enable teams for ongoing innovation"
      ]
    }
  ];

  return (
    <>
      <ServiceHero 
        title={<>Evolve Your <span className="text-[#f99d1c]">Core Architecture.</span></>}
        description="Dismantle legacy monoliths and build the agile, cloud-native foundation your future demands. Modernization is not just an update, it is a strategic business evolution."
        subtitle="Cloud Modernization"
        category="Cloud Modernization"
        image="https://images.unsplash.com/photo-1763128516808-785e80c1dd68?auto=format&fit=crop&q=80&w=2000"
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
                Transform What You Have into <br />
                <span className="text-[#f99d1c]">What You Need Next</span>
              </h2>
              <p className="text-[#11253e] text-lg md:text-xl font-light leading-relaxed">
                Modernization is not a singular event; it is a fundamental strategic shift. Sustainable agility and continuous innovation are the direct outcomes of intentional, disciplined redesign.
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
                Cloud modernization is about unlocking the real value of cloud. It is about transforming legacy applications, improving performance, reducing technical debt and building a foundation that supports continuous innovation.
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
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
                alt="Cloud Modernization Architecture"
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
                <h2 className="text-[#11253e] text-4xl lg:text-5xl font-medium tracking-tight">Our Approach</h2>
                <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest"> Modernize with Purpose, Accelerated by Intelligent Solutions</h3>
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed">
                We help you move from legacy complexity to modern, scalable, cloud-native capability without disrupting your business.
              </p>

              <div className="grid gap-y-4">
                {[
                  "Incremental modernization to reduce risk",
                  "Security and compliance by design",
                  "Cost-aware architectural decisions",
                  "Aligning modernization priorities with measurable business impact"
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-[#f99d1c] shrink-0 mt-1" size={18} />
                    <span className="text-[#11253e] text-base font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-[#11253e] text-white rounded-sm relative overflow-hidden">
                <div className="relative z-10">
                  <p className="font-light italic leading-relaxed opacity-80">
                    "Modernization is not about rewriting everything. It's about making smart, high-impact changes."
                  </p>
                </div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
              </div>
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
            <h2 className="text-[#11253e] text-4xl lg:text-5xl font-medium tracking-tight">Our Methodology</h2>
            <h3 className="text-[#11253e] text-xl font-light uppercase tracking-[0.2em]">Structured, Phased and Business-Aligned</h3>
            <p className="text-[#11253e] text-lg font-light max-w-2xl mx-auto">
              We follow a clear modernization roadmap to ensure transformation is controlled and measurable.
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
                className="bg-white p-5 border-b-4 pb-10 border-[#11253e]/10 hover:border-[#f99d1c] transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 bg-[#11253e]/5 rounded-sm flex items-center justify-center mb-8 mx-auto group-hover:bg-[#f99d1c]/10 transition-colors">
                  {step.icon}
                </div>
                <h4 className="text-[#11253e] text-2xl font-medium mb-6 w-full">{step.title}</h4>
                <div className="space-y-4 flex-grow text-left w-full">
                  {step.points.map((point, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-1 h-1 rounded-full bg-[#f99d1c] mt-2 shrink-0"></div>
                      <span className="text-[#11253e] text-[15px] leading-relaxed font-normal">{point}</span>
                    </div>
                  ))}
                </div>
              </Motion.div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <p className="text-[#11253e] text-lg font-medium italic">
              "The outcome is a modern architecture that evolves with your business."
            </p>
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
                <h2 className="text-[#11253e] text-4xl lg:text-5xl font-medium tracking-tight leading-tight">Tools & Accelerators</h2>
                <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest leading-snug">Cloud-Native Platforms. Automation. Proven Frameworks.</h3>
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed">
                We leverage leading cloud ecosystems such as Amazon Web Services, Microsoft Azure and Google Cloud to modernize workloads efficiently and securely.
              </p>

              <div className="grid gap-4">
                {[
                  { icon: <Layers size={18} />, text: "Container orchestration platforms" },
                  { icon: <Settings size={18} />, text: "Infrastructure-as-Code for repeatable deployments" },
                  { icon: <Zap size={18} />, text: "CI/CD automation frameworks" },
                  { icon: <BarChart3 size={18} />, text: "Application performance monitoring tools" },
                  { icon: <ShieldCheck size={18} />, text: "Cost optimization and cloud governance accelerators" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 border border-[#11253e]/5 rounded-sm hover:border-[#f99d1c]/30 transition-colors bg-gray-50/50">
                    <div className="text-[#f99d1c]">{item.icon}</div>
                    <span className="text-[#11253e] text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-[#11253e] p-1 rounded-sm overflow-hidden shadow-2xl group">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000"
                  alt="Modern Infrastructure"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#f99d1c] p-8 text-[#11253e] max-w-xs shadow-xl hidden md:block">
                <p className="text-sm font-medium italic">
                  "Our modernization toolkit gives teams the confidence to move forward faster and smarter."
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
            <h2 className="text-white text-4xl lg:text-5xl font-medium tracking-tight">Value Proposition</h2>
            <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest">Agility Today. Innovation Tomorrow.</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Reduced Technical Debt", desc: "Lower operational complexity and maintenance overhead." },
              { title: "Improved Scalability", desc: "Applications that grow seamlessly with your business demands." },
              { title: "Faster Delivery", desc: "Accelerate product and feature releases with modern CI/CD." },
              { title: "Enhanced Security", desc: "Strengthened security and compliance posture by design." },
              { title: "Cost Efficiency", desc: "Optimized cloud spend through modern, elastic architectures." },
              { title: "Future-Ready foundation", desc: "Resilient infrastructure built for continuous innovation." }
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
                  <h4 className="text-white text-lg font-medium tracking-tight">{item.title}</h4>
                </div>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

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
                 Ready to architect  <br />
                  <span className="text-[#f99d1c]">the future?</span>
                </h2>
                <p className="text-[#11253e] text-base font-light leading-relaxed">
                  Let our experts design a modernization strategy that scales with your ambition and delivers measurable business value.
                </p>
              </div>
              <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/services/cloud/cloud-modernization')}&title=${encodeURIComponent('Cloud Modernization')}&category=Service`}>
                <button
                  className="whitespace-nowrap bg-[#f99d1c] hover:bg-[#10243c] text-white px-10 py-5 rounded-md transition-all inline-flex items-center space-x-3 uppercase tracking-[0.18em] group shrink-0"
                  style={{ fontSize: "13px", fontWeight: 600 }}
                >
                  <span>START YOUR JOURNEY</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </Motion.div>
          </div>
        </section>
    </>
  );
}
