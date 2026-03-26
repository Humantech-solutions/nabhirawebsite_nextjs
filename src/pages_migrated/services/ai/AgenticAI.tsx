"use client";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ServiceHero } from "../../../components/ServiceHero";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import aiServerImg from "../../../assets/3a56e25cff12103ad9abb93b6283a6e3ef903f82.png";
import {
  ArrowRight,
  Settings,
  Network,
  Zap,
  Search,
  Check,
  Layers,
  Cog,
  Rocket,
  Shield,
  Brain,
  Cpu,
  Workflow,
  Target,
  GitBranch,
  Database,
  Lock,
  Eye,
  FileCheck
} from "lucide-react";

export default function AgenticAI({ wordpressData }: any) {
  useEffect(() => {
    document.title = "Agentic AI | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const approachPoints = [
    {
      title: "Strategic Selection",
      text: "Identifying high value multi step workflows suitable for autonomous agents.",
      icon: <Target className="text-white" size={24} />,
    },
    {
      title: "Bounded Autonomy",
      text: "Designing bounded autonomy with defined escalation paths.",
      icon: <Lock className="text-white" size={24} />,
    },
    {
      title: "Secure Integration",
      text: "Integrating agents securely with enterprise systems APIs and data sources.",
      icon: <Network className="text-white" size={24} />,
    },
    {
      title: "Human Oversight",
      text: "Embedding human oversight risk management and compliance controls.",
      icon: <Eye className="text-white" size={24} />,
    },
    {
      title: "Explainability",
      text: "Ensuring explainability traceability and accountability of agent decisions.",
      icon: <FileCheck className="text-white" size={24} />,
    },
  ];

  const methodology = [
    {
      id: "discover",
      phase: "01",
      title: "Discover",
      description: "Process analysis and suitability assessment.",
      points: [
        "Risk and impact evaluation",
        "Data and tool readiness assessment",
        "Governance and compliance alignment",
      ],
    },
    {
      id: "architect",
      phase: "02",
      title: "Architect",
      description: "Agent architecture design including planning and memory.",
      points: [
        "Integration blueprint with enterprise applications",
        "Guardrail design including approval workflows",
        "Observability and audit framework definition",
      ],
    },
    {
      id: "build",
      phase: "03",
      title: "Build & Orchestrate",
      description: "Agent development using modular architecture.",
      points: [
        "Tool integration and API connectivity",
        "Context management and memory optimization",
        "Testing for safety reliability and bias mitigation",
      ],
    },
    {
      id: "deploy",
      phase: "04",
      title: "Deploy & Govern",
      description: "Secure deployment within cloud environments.",
      points: [
        "Monitoring behavior performance and compliance",
        "Continuous learning and performance optimization",
        "Ongoing risk review and governance reinforcement",
      ],
    },
  ];

  // Helper component for server icon
  function ServerIcon({ size, className }: { size?: number, className?: string }) {
      return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
      )
  }

  const tools = [
    {
      category: "Foundation Models",
      items: "OpenAI, Anthropic, Google DeepMind",
      icon: <Brain size={20} />,
    },
    {
      category: "Orchestration",
      items: "Agent Orchestration Frameworks",
      icon: <Network size={20} />,
    },
    {
      category: "Architecture",
      items: "Retrieval Augmented Generation (RAG)",
      icon: <Layers size={20} />,
    },
    {
      category: "Integration",
      items: "Secure API Integration Layers",
      icon: <Workflow size={20} />,
    },
    {
      category: "Infrastructure",
      items: "Kubernetes, Containerization",
      icon: <ServerIcon size={20} />,
    },
  ];

  const valueProps = [
    "Automate complex multi step workflows",
    "Reduce operational dependency on manual intervention",
    "Accelerate decision cycles across business functions",
    "Enhance productivity through intelligent task orchestration",
    "Maintain transparency auditability and compliance",
    "Build a scalable foundation for enterprise wide AI agents",
  ];

  return (
    <>
      {/* ─── Hero Banner with Sub-navigation ─── */}
      <section className="relative h-[400px] md:h-[520px] bg-[#11253e] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
            <ImageWithFallback
              src={aiServerImg.src}
              alt="AI Machine Learning Technology"
              className="w-full h-full object-cover opacity-30 mix-blend-screen"
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
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-3 text-[11px] md:text-[13px] font-medium tracking-[-0.02em] mb-4">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <span className="text-white/30 font-light">&gt;</span>
              <span className="text-[#f99d1c] uppercase tracking-widest">Agentic AI</span>
            </nav>

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
              Autonomous <br /> 
              <span className="text-[#f99d1c]">Agentic Core.</span>
            </h1>

            <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
              Building the next generation of <span className="text-white font-medium">Goal-Oriented AI</span> that acts as a proactive partner in your enterprise operations.
            </p>

            <div className="pt-8 flex flex-wrap gap-4">
              <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/services/ai/agentic-ai')}&title=${encodeURIComponent('Agentic AI')}&category=Service`}>
                <button className="bg-[#f99d1c] hover:bg-white hover:text-[#11253e] text-white px-10 py-5 rounded-sm transition-all inline-flex items-center space-x-3 uppercase tracking-widest shadow-2xl shadow-[#f99d1c]/20" style={{ fontSize: "14px", fontWeight: 500 }}>
                  <span>Explore Agentic Workflows</span>
                  <ArrowRight size={14} />
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
              Agentic AI <br />
              <span className="font-semibold text-[#f99d1c]">From Intelligent Models to Autonomous Digital Agents</span>
            </h2>
            <div className="w-20 h-1 bg-[#11253e] mx-auto"></div>
            <p className="text-[#11253e] text-lg leading-relaxed max-w-3xl mx-auto">
              The next evolution of AI is not just prediction or automation. It is autonomy. Agentic AI systems go beyond static models. They perceive context, reason across multiple steps, make decisions, and take action within defined boundaries.
            </p>
            <p className="text-[#11253e] text-xl font-medium max-w-3xl mx-auto">
              We help enterprises design, build, deploy and govern Agentic AI systems that operate responsibly while delivering measurable business value.
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
              <h2 className="text-white text-4xl md:text-5xl font-medium tracking-tight mb-6">Engineering <br/><span className="text-white/50">Controlled Autonomy</span></h2>
              <p className="text-white/70 text-lg font-light max-w-xl">
                Agentic AI is not about replacing human judgment. It is about augmenting it with intelligent systems that operate within structured guardrails.
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
              <h3 className="text-[#11253e] text-2xl font-bold mb-2">Mission Critical</h3>
              <p className="text-[#11253e] text-sm font-medium">We treat agentic systems as mission critical digital workforce components.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Methodology Section (Step Process) ─── */}
      <section className="py-24 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <span className="text-[#f99d1c] font-bold tracking-widest uppercase text-sm mb-2 block">02 Methodology</span>
             <h2 className="text-[#11253e] text-4xl md:text-5xl font-medium tracking-tight mb-6">Structured Lifecycle for Agentic AI</h2>
             <p className="text-[#11253e] text-lg font-light">
               We apply a disciplined framework to move from concept to production ready autonomous systems.
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
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">Enterprise Grade <br/>Agentic Ecosystem</h2>
                <p className="text-white/60 text-lg font-light mb-8">
                  We design agentic solutions leveraging secure and scalable environments such as Amazon Web Services, Microsoft Azure and Google Cloud.
                </p>
                <div className="p-6 bg-white/[0.05] border border-white/10 rounded-sm">
                  <p className="italic text-white/80 font-light">
                    "Technology choices are guided by enterprise scalability, regulatory alignment and long term sustainability."
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
              <h2 className="text-[#11253e] text-4xl md:text-5xl font-medium tracking-tight">Autonomous Execution <br/> Responsible Outcomes</h2>
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
               Agentic AI when engineered responsibly becomes a strategic capability that drives efficiency, resilience and competitive differentiation.
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
                 Ready to engineer <br />
                  <span className="text-[#f99d1c]">intelligence? </span>
                </h2>
                <p className="text-[#11253e] text-base font-light leading-relaxed">
                  Introduce autonomy with control.
                </p>
              </div>
              <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/services/ai/agentic-ai')}&title=${encodeURIComponent('Agentic AI')}&category=Service`}>
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
