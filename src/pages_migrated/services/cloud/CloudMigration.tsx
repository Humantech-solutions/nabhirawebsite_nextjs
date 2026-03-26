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
  Map, 
  Zap, 
  BarChart3, 
  ShieldCheck, 
  Settings, 
  Database, 
  Cpu, 
  Layers, 
  Target 
} from "lucide-react";

export default function CloudMigration({ wordpressData }: any) {
  useEffect(() => {
    document.title = "Cloud Migration Services | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const methodology = [
    {
      id: "assess",
      title: "Assess",
      icon: <Search className="text-[#f99d1c]" size={24} />,
      points: [
        "Application and infrastructure discovery",
        "Dependency mapping",
        "Cloud readiness evaluation",
        "Cost and performance baseline"
      ]
    },
    {
      id: "plan",
      title: "Design",
      icon: <Map className="text-[#f99d1c]" size={24} />,
      points: [
        "Define migration strategy",
        "Prioritize workloads into migration waves",
        "Define rollback and risk mitigation plans",
        "Align stakeholders and timelines"
      ]
    },
    {
      id: "migrate",
      title: "Implement",
      icon: <Zap className="text-[#f99d1c]" size={24} />,
      points: [
        "Set up secure landing zone",
        "Execute phased migration",
        "Continuous validation and testing",
        "Performance tuning and optimization"
      ]
    },
    {
      id: "stabilize",
      title: "Optimize & Govern",
      icon: <BarChart3 className="text-[#f99d1c]" size={24} />,
      points: [
        "Monitor workloads",
        "Optimize cost and performance",
        "Strengthen governance and security",
        "Enable Teams for ongoing innovation"
      ]
    }
  ];

  return (
    <>
      <ServiceHero 
        title={<>Seamless <span className="text-[#f99d1c]">Transition.</span></>}
        description="Move your mission-critical workloads to the cloud with surgical precision. Our automated migration pipelines minimize risk and maximize ROI from day one."
        subtitle="Cloud Migration"
        category="Cloud Migration"
        image="https://images.unsplash.com/photo-1628313348684-5d75dd67e7c8?auto=format&fit=crop&q=80&w=2000"
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
                Move to the Cloud — <br />
                <span className="text-[#f99d1c]">Smoothly, Securely and with Confidence</span>
              </h2>
              <p className="text-[#11253e] text-lg md:text-xl font-light leading-relaxed">
                Cloud migration isn't just about moving servers. It's about moving your business forward without disruption, without surprises and without losing control.
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
                We help you migrate to the cloud in a structured, secure and cost-conscious way ensuring your systems perform better, scale faster and support long-term growth.
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
                alt="Cloud Migration Strategy"
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
                <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest">Practical. Phased. Business-Aligned.</h3>
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed">
                Every migration journey is different. That's why we begin with understanding your business priorities, not just your infrastructure.
              </p>

              <div className="grid gap-y-4">
                {[
                  "Minimizing downtime and business disruption",
                  "Reducing risk during transition",
                  "Migrating at a pace your teams can absorb",
                  "Ensuring security and compliance from day one",
                  "Optimizing cost, not just shifting it"
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-[#f99d1c] shrink-0 mt-1" size={18} />
                    <span className="text-[#11253e] text-base font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed">
                Whether you are moving from on-premise to cloud or modernizing within platforms like Amazon Web Services, Microsoft Azure, or Google Cloud, our goal is simple — make your migration predictable and successful.
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
            <h2 className="text-[#11253e] text-4xl lg:text-5xl font-medium tracking-tight">Our Methodology</h2>
            <h3 className="text-[#11253e] text-xl font-light uppercase tracking-[0.2em]">Disciplined Execution Driven by Defined Processes and Clear Outcomes</h3>
            <p className="text-[#11253e] text-lg font-light max-w-2xl mx-auto">
              Our framework-driven, step-by-step migration approach ensures seamless transition with minimal disruption, controlled risk and predictable performance
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
                <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest leading-snug">Automation-Driven. Insight-Led.</h3>
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed">
                To reduce manual effort and risk, we leverage a suite of intelligent platforms that shorten timelines and reduce human error while maintaining complete visibility.
              </p>

              <div className="grid gap-4">
                {[
                  { icon: <Search size={18} />, text: "Automated discovery and dependency mapping tools" },
                  { icon: <Layers size={18} />, text: "Cloud-native migration services and replication tools" },
                  { icon: <Settings size={18} />, text: "Infrastructure-as-Code for repeatable deployments" },
                  { icon: <Cpu size={18} />, text: "Monitoring and performance optimization platforms" },
                  { icon: <BarChart3 size={18} />, text: "FinOps frameworks to track and control spend" }
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
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
                  alt="Cloud Automation"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#f99d1c] p-8 text-[#11253e] max-w-xs shadow-xl hidden md:block">
                <p className="text-sm font-medium italic">
                  "Our accelerators are designed to shorten migration timelines and reduce human error while maintaining complete visibility."
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
            <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest">Less Risk. Better Performance. Real Business Impact.</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Reduced Downtime", desc: "Minimal disruption to your business operations during the transition." },
              { title: "Optimized Performance", desc: "Improved scalability and system performance through cloud-native tuning." },
              { title: "Hardened Security", desc: "Stronger security and compliance posture from the moment you land." },
              { title: "Cost Transparency", desc: "Transparent and optimized cloud costs using FinOps best practices." },
              { title: "Innovation Ready", desc: "A future-ready foundation that accelerates your digital evolution." },
              { title: "Strategic Control", desc: "Confidence that your journey is controlled, strategic and goal-aligned." }
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
          {/* Diagonal stripe texture */}
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `repeating-linear-gradient(110deg, transparent, transparent 20px, #11253e 20px, #11253e 21px)` }} />
          {/* Corner glow blobs */}
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
                  Let our experts design a migration strategy that scales with your ambition and delivers measurable business value.
                </p>
              </div>
              <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/services/cloud/cloud-migration')}&title=${encodeURIComponent('Cloud Migration')}&category=Service`}>
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
