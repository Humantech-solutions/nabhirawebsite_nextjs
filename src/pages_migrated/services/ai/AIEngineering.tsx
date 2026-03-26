"use client";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ServiceHero } from "../../../components/ServiceHero";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import heroImg from "../../../assets/heroImg.png";
import {
  ArrowRight,
  CheckCircle2,
  Brain,
  Crosshair,
  Layers,
  Cog,
  Rocket,
  Sparkles,
  Server,
  Shield,
  Lightbulb,
  Database,
  BarChart3,
  Cpu,
  Workflow,
  Check,
  Code2,
  GitBranch,
} from "lucide-react";

export default function AIEngineering({ wordpressData }: any) {
  useEffect(() => {
    document.title = "AI Engineering | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const approachPoints = [
    {
      title: "Business Alignment",
      text: "Aligning AI initiatives with measurable business objectives.",
      icon: <Crosshair className="text-white" size={24} />,
    },
    {
      title: "Scalable Architecture",
      text: "Designing scalable AI and ML architecture.",
      icon: <Layers className="text-white" size={24} />,
    },
    {
      title: "Responsible AI",
      text: "Embedding responsible AI principles into development lifecycle.",
      icon: <Shield className="text-white" size={24} />,
    },
    {
      title: "Data Governance",
      text: "Ensuring data quality governance and model transparency.",
      icon: <Database className="text-white" size={24} />,
    },
    {
      title: "System Integration",
      text: "Integrating AI into core enterprise systems and workflows.",
      icon: <Workflow className="text-white" size={24} />,
    },
  ];

  const methodology = [
    {
      id: "define",
      phase: "01",
      title: "Define",
      description: "Use case prioritization and feasibility analysis.",
      points: [
        "Business value quantification",
        "Data readiness assessment",
        "Risk and compliance evaluation",
      ],
    },
    {
      id: "design",
      phase: "02",
      title: "Design",
      description: "Model architecture and system design.",
      points: [
        "MLOps and deployment strategy",
        "Infrastructure sizing and scalability planning",
        "Responsible AI framework integration",
      ],
    },
    {
      id: "build",
      phase: "03",
      title: "Build & Train",
      description: "Feature engineering and model development.",
      points: [
        "Training validation and performance optimization",
        "Bias testing and explainability assessment",
        "Security and privacy integration",
      ],
    },
    {
      id: "deploy",
      phase: "04",
      title: "Deploy & Operate",
      description: "CI/CD for ML pipelines.",
      points: [
        "Real time and batch deployment models",
        "Monitoring model drift performance and compliance",
        "Continuous retraining and optimization",
      ],
    },
  ];

  const tools = [
    {
      category: "Platforms",
      items: "Amazon SageMaker, Azure Machine Learning, Vertex AI",
      icon: <Cpu size={20} />,
    },
    {
      category: "Frameworks",
      items: "TensorFlow, PyTorch",
      icon: <Code2 size={20} />,
    },
    {
      category: "Infrastructure",
      items: "Docker, Kubernetes",
      icon: <Server size={20} />,
    },
    {
      category: "Operations",
      items: "CI/CD, MLOps Automation",
      icon: <GitBranch size={20} />,
    },
    {
      category: "Governance",
      items: "Model Monitoring, Explainability Tools",
      icon: <Shield size={20} />,
    },
  ];

  const valueProps = [
    "Accelerate AI adoption from pilot to production",
    "Reduce risk through responsible and governed AI",
    "Improve operational efficiency through automation",
    "Enable data driven decision making at scale",
    "Build reusable AI platforms for long term innovation",
    "Strengthen competitive differentiation through intelligent systems",
  ];

  return (
    <>
      {/* ─── Hero Banner with Sub-navigation ─── */}
      <section className="relative h-[400px] md:h-[520px] bg-[#11253e] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={heroImg.src}
            alt="AI Machine Learning Technology"
            className="w-full h-full object-cover opacity-30 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11253e] via-[#11253e]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] via-transparent to-transparent"></div>
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-16">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl space-y-8"
          >
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-3 text-[11px] md:text-[13px] font-medium tracking-[-0.02em] mb-4">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <span className="text-white/30 font-light">&gt;</span>
              <span className="text-[#f99d1c] uppercase tracking-widest">AI Engineering</span>
            </nav>

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
              AI <span className="text-[#f99d1c]">Engineering</span>
            </h1>

            <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
              Engineering <span className="text-white font-medium">Intelligence</span> into the{" "}
              <span className="text-[#f99d1c] font-medium">Core of Your Enterprise</span>
            </p>

            <div className="pt-6 flex flex-wrap gap-4">
              <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/services/ai/ai-engineering')}&title=${encodeURIComponent('AI Engineering')}&category=Service`}>
                <button
                  className="bg-[#f99d1c] hover:bg-white hover:text-[#11253e] text-white px-10 py-5 rounded-sm transition-all inline-flex items-center space-x-3 uppercase tracking-widest shadow-2xl shadow-[#f99d1c]/20 group"
                  style={{ fontSize: "14px", fontWeight: 500 }}
                >
                  <span>START YOUR JOURNEY</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ─── Intro Section ─── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f99d1c]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-[#11253e] text-3xl md:text-4xl font-light leading-snug">
              Artificial Intelligence is no longer experimental. <br />
              It is becoming the <span className="font-semibold text-[#f99d1c]">operating layer of modern enterprises</span>.
            </h2>
            <div className="w-20 h-1 bg-[#11253e] mx-auto"></div>
            <p className="text-[#11253e] text-lg leading-relaxed max-w-3xl mx-auto">
              However, scaling AI beyond pilots requires disciplined engineering, responsible governance, and production-grade infrastructure. Many organizations struggle to move from proof of concept to measurable enterprise value.
            </p>
            <p className="text-[#11253e] text-xl font-medium max-w-3xl mx-auto">
              AI Engineering bridges strategy and execution. It transforms algorithms into resilient, scalable intelligent systems that drive real business outcomes.
            </p>
          </Motion.div>
        </div>
      </section>

      {/* ─── Approach Section (Dark) ─── */}
      <section className="py-24 bg-[#11253e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#f99d1c 1px, transparent 1px), linear-gradient(to right, #f99d1c 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="text-[#f99d1c] font-bold tracking-widest uppercase text-sm mb-2 block">01 Approach</span>
              <h2 className="text-white text-4xl md:text-5xl font-medium tracking-tight mb-6">From AI Ambition to <br/><span className="text-white/50">Enterprise Grade Execution</span></h2>
              <p className="text-white/80 text-lg font-light max-w-xl">
                AI success is not about models alone. It is about architecture integration, governance, and business alignment.
              </p>
            </div>
            <div className="hidden md:block">
               <ArrowRight className="text-[#f99d1c] w-12 h-12 -rotate-45" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approachPoints.map((point, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.03] border border-white/10 p-8 hover:bg-white/[0.06] hover:border-[#f99d1c]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#f99d1c] rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {point.icon}
                </div>
                <h3 className="text-white text-xl font-medium mb-3">{point.title}</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  {point.text}
                </p>
              </Motion.div>
            ))}
            <div className="bg-[#f99d1c] p-8 flex flex-col justify-center items-center text-center">
              <h3 className="text-[#11253e] text-2xl font-bold mb-2">Long Term Capability</h3>
              <p className="text-[#11253e] text-sm font-medium">We treat AI as a long term capability not a one time experiment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Methodology Section (Step Process) ─── */}
      <section className="py-24 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <span className="text-[#f99d1c] font-bold tracking-widest uppercase text-sm mb-2 block">02 Methodology</span>
             <h2 className="text-[#11253e] text-4xl md:text-5xl font-medium tracking-tight mb-6">Structured AI Engineering Lifecycle</h2>
             <p className="text-[#11253e] text-lg font-light">
               We apply a disciplined engineering framework to move AI from experimentation to enterprise scale.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((step, idx) => (
              <Motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 shadow-md border-t-4 border-[#11253e] hover:border-[#f99d1c] hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
              >
                 <div className="flex items-baseline justify-between mb-6">
                    <span className="text-5xl font-black text-[#f99d1c]/20 group-hover:text-[#f99d1c]/40 transition-colors">{step.phase}</span>
                    <div className="w-8 h-1 bg-[#11253e]/10 group-hover:bg-[#f99d1c] transition-colors"></div>
                 </div>

                 <h3 className="text-[#11253e] text-2xl font-bold mb-3">{step.title}</h3>
                 <p className="text-[#f99d1c] font-medium text-xs uppercase tracking-widest mb-6 min-h-[3rem]">{step.description}</p>
                 
                 <div className="flex-grow">
                   <ul className="space-y-3">
                     {step.points.map((pt, i) => (
                       <li key={i} className="flex items-start gap-3 text-[#11253e] text-sm leading-relaxed">
                         <div className="w-1.5 h-1.5 bg-[#f99d1c] rounded-full mt-1.5 shrink-0"></div>
                         <span>{pt}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Tools Section (Tech Stack) ─── */}
      <section className="py-24 bg-[#11253e] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <Motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <span className="text-[#f99d1c] font-bold tracking-widest uppercase text-sm mb-2 block">03 Tools</span>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">Enterprise AI and <br/>ML Ecosystem</h2>
                <p className="text-white/80 text-lg font-light mb-8">
                  We design AI engineering solutions leveraging secure and scalable cloud environments such as Amazon Web Services, Microsoft Azure and Google Cloud.
                </p>
                <div className="p-6 bg-white/[0.05] border border-white/10 rounded-sm">
                  <p className="italic text-white/80 font-light">
                    "Technology selection is aligned to enterprise scalability compliance and long term sustainability."
                  </p>
                </div>
             </Motion.div>

             <div className="space-y-4">
                {tools.map((tool, i) => (
                  <Motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white text-[#11253e] p-5 flex items-center gap-5 rounded-sm hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="w-10 h-10 bg-[#11253e]/5 rounded-full flex items-center justify-center text-[#f99d1c] shrink-0">
                      {tool.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider text-[#11253e]">{tool.category}</h4>
                      <p className="text-[#11253e] text-sm font-medium">{tool.items}</p>
                    </div>
                  </Motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* ─── Value Proposition (Checklist) ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
              <span className="text-[#f99d1c] font-bold tracking-widest uppercase text-sm mb-2 block">04 Value Proposition</span>
              <h2 className="text-[#11253e] text-4xl md:text-5xl font-medium tracking-tight">Scalable Intelligence <br/> Measurable Outcomes</h2>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {valueProps.map((prop, i) => (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-4 p-6 rounded-lg bg-[#fdfbf7] border border-[#11253e]/5 hover:border-[#f99d1c] hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-6 h-6 mt-1 bg-[#f99d1c] rounded-full flex items-center justify-center shrink-0">
                    <Check size={14} className="text-white" strokeWidth={3} />
                  </div>
                  <p className="text-[#11253e] font-medium leading-relaxed">{prop}</p>
                </Motion.div>
              ))}
           </div>

           <div className="mt-20 bg-[#11253e] rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
             <p className="text-white text-xl md:text-2xl font-light leading-relaxed relative z-10 max-w-4xl mx-auto">
               We help organizations institutionalize AI as a strategic capability ensuring it delivers measurable impact rather than isolated experimentation.
             </p>
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
                 Ready to engineer  <br />
                  <span className="text-[#f99d1c]">intelligence?</span>
                </h2>
                <p className="text-[#11253e] text-base font-light leading-relaxed">
                  Transform from experimentation to production-grade intelligence.
                </p>
              </div>
              <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/services/ai/ai-engineering')}&title=${encodeURIComponent('AI Engineering')}&category=Service`}>
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
      
      {/* ─── CTA ─── */}
      
    </>
  );
}