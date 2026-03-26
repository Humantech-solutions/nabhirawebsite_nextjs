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
  ClipboardList, 
  Rocket, 
  Database, 
  ShieldCheck, 
  BarChart3, 
  Target 
} from "lucide-react";

export default function CloudAdvisory({ wordpressData }: any) {
  useEffect(() => {
    document.title = "Cloud Advisory Services | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const methodology = [
    {
      id: "assess",
      title: "Assess",
      subtitle: "We begin by listening.",
      icon: <Search className="text-[#f99d1c]" size={24} />,
      points: [
        "Stakeholder workshops across business, IT, finance, and risk teams",
        "Application and infrastructure assessments",
        "Cloud readiness evaluation",
        "Current cost and performance baseline"
      ]
    },
    {
      id: "design",
      title: "Design",
      subtitle: "We define what your future state should look like.",
      icon: <Layout className="text-[#f99d1c]" size={24} />,
      points: [
        "Target architecture (public, private, or hybrid cloud)",
        "Governance and landing zone design",
        "Security and compliance framework",
        "High-level migration and modernization roadmap"
      ]
    },
    {
      id: "implement",
      title: "Implement",
      subtitle: "We turn strategy into a business-backed plan.",
      icon: <ClipboardList className="text-[#f99d1c]" size={24} />,
      points: [
        "Prioritized roadmap with quick wins and long-term initiatives",
        "ROI and TCO model",
        "Risk mitigation approach",
        "Operating model and capability alignment"
      ]
    },
    {
      id: "optimize",
      title: "Optimize & Govern",
      subtitle: "We prepare you to move forward confidently.",
      icon: <Rocket className="text-[#f99d1c]" size={24} />,
      points: [
        "Executive dashboards and KPIs",
        "Governance charter",
        "FinOps structure for financial control",
        "Change management and knowledge transfer"
      ]
    }
  ];

  return (
    <>
      {/* Full Hero Banner */}
      <section className="relative h-[400px] md:h-[520px] bg-[#11253e] overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1660058550844-02d4eaa79667?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGFic3RyYWN0JTIwZGlnaXRhbCUyMGRhdGElMjBmbG93JTIwYmx1ZSUyMG9yYW5nZSUyMGNpbmVtYXRpY3xlbnwxfHx8fDE3NzE5MzIyNzl8MA&ixlib=rb-4.1.0&q=80&w=1920"
              alt="Cloud Data Flow Background"
              className="w-full h-full object-cover opacity-40 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#11253e] via-[#11253e]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] via-transparent to-transparent"></div>
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
            <Motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl space-y-8"
            >
              <nav className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4 font-bold">
                <span className="hover:text-white cursor-pointer transition-colors">Home</span>
                <span className="w-1 h-1 rounded-full bg-[#f99d1c]"></span>
                <span className="text-[#f99d1c]">Capabilities</span>
              </nav>
              
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                Cloud Advisory
              </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-12 mb-8 md:mb-12">
                <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm">
                  From <span className="text-white font-medium">Cloud Ambition</span> to <span className="text-[#f99d1c] font-medium">Real Business Outcomes</span> through strategic foresight.
                </p>
              </div>

              <div className="pt-8 flex flex-wrap gap-4">
                <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/services/cloud/cloud-advisory')}&title=${encodeURIComponent('Cloud Advisory')}&category=Service`}>
                  <button className="bg-[#f99d1c] hover:bg-white hover:text-[#11253e] text-white px-10 py-5 rounded-sm font-medium transition-all inline-flex items-center space-x-3 uppercase text-[14px] tracking-widest shadow-2xl shadow-[#f99d1c]/20 group">
                    <span>START YOUR JOURNEY</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </Motion.div>
          </div>
      </section>

      {/* Intro Section: Moving to the cloud */}
      <section className="py-20 bg-[#fdfbf7] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <Motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-[#11253e] text-3xl md:text-5xl font-medium tracking-tight leading-tight">
                Moving to the cloud is not just a technology shift, <span className="text-[#f99d1c]">it is a strategic business decision.</span>
              </h2>
              <p className="text-[#11253e] text-lg md:text-xl font-medium leading-relaxed italic">
                The real question is not "Should we move to the cloud?" It is "How do we move in a way that creates measurable value?"
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
                Our Cloud Advisory Services enable you to architect a future-ready transformation roadmap that accelerates growth and resilience. We work alongside your team to create a secure, financially responsible and future-ready cloud strategy that supports growth, resilience and innovation.
              </p>
              <div className="w-20 h-px bg-[#f99d1c]"></div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* 1. Our Approach Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/5] rounded-sm overflow-hidden shadow-3xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
                alt="Business Strategy Planning"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-[#11253e]/10 group-hover:bg-transparent transition-colors"></div>
            </div>

            <div className="order-1 lg:order-2 space-y-12 p-5">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-[#f99d1c] font-black text-6xl">01</span>
                  <div className="h-px w-12 bg-[#f99d1c]"></div>
                </div>
                <h2 className="text-[#11253e] text-4xl lg:text-5xl font-medium tracking-tight">Our Approach</h2>
                <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest">Lead with business strategy, then align the cloud to enable it.</h3>
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed">
                We do not begin with platforms or tools. We begin with your priorities — revenue growth, cost control, customer experience, compliance and speed to market. Our role is to translate these priorities into a practical cloud strategy.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  "Align cloud decisions with business goals",
                  "Build a phased transformation roadmap",
                  "Balance innovation with risk control",
                  "Embed security and compliance",
                  "Create cost transparency via FinOps",
                  "Align cloud to long-term value"
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-[#f99d1c] shrink-0 mt-1" size={18} />
                    <span className="text-[#11253e] text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-[#11253e] text-white rounded-sm relative overflow-hidden">
                <div className="relative z-10">
                  <p className="font-light italic leading-relaxed opacity-80">
                    "We serve as a strategic advisor to ensure your cloud investments deliver sustained value and operational maturity."
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
            <h3 className="text-[#11253e] text-xl font-light uppercase tracking-[0.2em]">Structured, and Built for Execution</h3>
            <p className="text-[#11253e] text-lg font-light max-w-2xl mx-auto">
              Cloud transformation can feel complex. We simplify it through a clear, structured framework.
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
                className="bg-white p-5 border-b-4 pb-10 border-[#11253e]/10 hover:border-[#f99d1c] transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-[#11253e]/5 rounded-sm flex items-center justify-center mb-8 mx-auto">
                  {step.icon}
                </div>
                <h4 className="text-[#11253e] text-2xl font-medium mb-2 w-full">{step.title}</h4>
                <p className="text-[#f99d1c] text-xs font-bold uppercase tracking-widest mb-6 w-full">{step.subtitle}</p>
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
              "The result isn't a slide deck. It's a clear, execution-ready blueprint for transformation."
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
                <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest leading-snug">The Right Insights. The Right Platforms. The Right Decisions.</h3>
              </div>

              <div className="space-y-6 text-[#11253e] text-lg font-light leading-relaxed">
                <p>
                  To give you clear and unbiased recommendations, we combine our advisory expertise with the power of leading cloud ecosystems such as Amazon Web Services, Microsoft Azure, and Google Cloud.
                </p>
                <p className="font-medium text-[#11253e]">
                  But tools alone don't create value — <span className="text-[#f99d1c]">insight does.</span>
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  { icon: <Search size={20} />, text: "Understand your current infrastructure landscape clearly" },
                  { icon: <BarChart3 size={20} />, text: "Identify cost-saving opportunities through FinOps modeling" },
                  { icon: <ShieldCheck size={20} />, text: "Benchmark security against global compliance standards" },
                  { icon: <Database size={20} />, text: "Map application dependencies to avoid migration surprises" },
                  { icon: <Target size={20} />, text: "Measure cloud maturity and define realistic next steps" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 border border-[#11253e]/5 rounded-sm hover:border-[#f99d1c]/30 transition-colors bg-gray-50/50">
                    <div className="text-[#f99d1c]">{item.icon}</div>
                    <span className="text-[#11253e] text-sm font-medium tracking-tight leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-[#11253e] p-1 rounded-sm overflow-hidden shadow-3xl group">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
                  alt="Global Cloud Network"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] via-transparent to-transparent opacity-60"></div>
              </div>
              
              <div className="absolute -bottom-10 -left-10 bg-[#f99d1c] p-10 text-[#11253e] hidden md:block max-w-xs shadow-2xl">
                <p className="text-base font-light leading-relaxed">
                  "Our accelerators are designed to remove guesswork, shorten decision cycles, and give leadership teams the confidence to move forward faster and smarter."
                </p>
              </div>
            </div>
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
                 Ready to architect <br />
                  <span className="text-[#f99d1c]">the future?</span>
                </h2>
                <p className="text-[#11253e] text-base font-light leading-relaxed">
                  Let our experts design a cloud strategy that scales with your ambition and delivers measurable business value.
                </p>
              </div>
              <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/services/cloud/cloud-advisory')}&title=${encodeURIComponent('Cloud Advisory')}&category=Service`}>
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
