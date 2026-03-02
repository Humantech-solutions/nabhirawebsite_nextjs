"use client";
import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import Link from "next/link"; // ✅ FIXED
import Image from "next/image";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import {
  ArrowRight,
  Database,
  Layers,
  CheckCircle2,
  Brain,
  Crosshair,
  Cog,
  Rocket,
  Sparkles,
  Server,
  Shield,
  Lightbulb,
  BarChart3,
  Target,
  GitBranch,
  ShieldCheck,
  Eye,
  Workflow,
} from "lucide-react";

export default function DataEngineering() {
  useEffect(() => {
    document.title = "Data Engineering Services | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const approachPoints = [
    {
      icon: <Target className="text-[#f99d1c]" size={22} />,
      text: "Aligning AI initiatives with measurable business objectives",
    },
    {
      icon: <GitBranch className="text-[#f99d1c]" size={22} />,
      text: "Designing scalable AI and ML architecture",
    },
    {
      icon: <ShieldCheck className="text-[#f99d1c]" size={22} />,
      text: "Embedding responsible AI principles into development lifecycle",
    },
    {
      icon: <Eye className="text-[#f99d1c]" size={22} />,
      text: "Ensuring data quality governance and model transparency",
    },
    {
      icon: <Workflow className="text-[#f99d1c]" size={22} />,
      text: "Integrating AI into core enterprise systems and workflows",
    },
  ];

  const methodology = [
    {
      id: "define",
      phase: "01",
      title: "Define",
      icon: <Crosshair className="text-[#f99d1c]" size={26} />,
      points: [
        "Use case prioritization and feasibility analysis",
        "Business value quantification",
        "Data readiness assessment",
        "Risk and compliance evaluation",
      ],
    },
    {
      id: "design",
      phase: "02",
      title: "Design",
      icon: <Layers className="text-[#f99d1c]" size={26} />,
      points: [
        "Model architecture and system design",
        "MLOps and deployment strategy",
        "Infrastructure sizing and scalability planning",
        "Responsible AI framework integration",
      ],
    },
    {
      id: "build",
      phase: "03",
      title: "Build & Train",
      icon: <Cog className="text-[#f99d1c]" size={26} />,
      points: [
        "Feature engineering and model development",
        "Training validation and performance optimization",
        "Bias testing and explainability assessment",
        "Security and privacy integration",
      ],
    },
    {
      id: "deploy",
      phase: "04",
      title: "Deploy & Operate",
      icon: <Rocket className="text-[#f99d1c]" size={26} />,
      points: [
        "CI/CD for ML pipelines",
        "Real time and batch deployment models",
        "Monitoring model drift performance and compliance",
        "Continuous retraining and optimization",
      ],
    },
  ];

  const tools = [
    { icon: <Brain size={18} />, text: "ML and AI platforms such as Amazon SageMaker, Azure Machine Learning and Vertex AI" },
    { icon: <Sparkles size={18} />, text: "Open source frameworks including TensorFlow and PyTorch" },
    { icon: <Server size={18} />, text: "Containerization and orchestration with Docker and Kubernetes" },
    { icon: <Cog size={18} />, text: "CI/CD and MLOps automation pipelines" },
    { icon: <Shield size={18} />, text: "Model monitoring, explainability and governance tools" },
  ];

  const valueProps = [
    { text: "Accelerate AI adoption from pilot to production", icon: <Rocket size={16} /> },
    { text: "Reduce risk through responsible and governed AI", icon: <Shield size={16} /> },
    { text: "Improve operational efficiency through automation", icon: <Cog size={16} /> },
    { text: "Enable data driven decision making at scale", icon: <BarChart3 size={16} /> },
    { text: "Build reusable AI platforms for long term innovation", icon: <Database size={16} /> },
    { text: "Strengthen competitive differentiation through intelligent systems", icon: <Lightbulb size={16} /> },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[520px] bg-[#11253e] overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXRhJTIwZW5naW5lZXJpbmclMjBpbmZyYXN0cnVjdHVyZSUyMHNlcnZlciUyMHJvb218ZW58MXx8fHwxNzcyMDcyMjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Data Engineering Infrastructure"
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
              <nav className="flex items-center space-x-3 text-[11px] md:text-[13px] font-medium tracking-[-0.02em] mb-4">
                <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
                <span className="text-white/30 font-light">&gt;</span>
                <span className="text-[#f99d1c] uppercase tracking-widest">Data Engineering</span>
              </nav>
              
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                Engineered for <br /> 
                <span className="text-white/40">Performance.</span>
              </h1>
              
              <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
                Transforming raw data into strategic assets through high-performance <span className="text-white font-medium">pipeline architectures</span> and automated processing.
              </p>

              <div className="pt-6 flex flex-wrap gap-4">
                <button className="bg-[#f99d1c] hover:bg-white hover:text-[#11253e] text-white px-10 py-5 rounded-sm transition-all inline-flex items-center space-x-3 uppercase tracking-widest shadow-2xl shadow-[#f99d1c]/20" style={{ fontSize: "14px", fontWeight: 500 }}>
                  <span>START YOUR JOURNEY</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* ─── AI Engineering Intro Statement ─── */}
        <section className="py-20 bg-[#fdfbf7] relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-[#11253e] text-4xl font-medium tracking-tight">AI Engineering</h2>
                <p className="text-[#11253e] text-xl md:text-2xl font-light leading-relaxed">
                  Engineering <span className="font-medium">Intelligence</span> into the{" "}
                  <span className="text-[#f99d1c] font-medium">Core of Your Enterprise</span>
                </p>
                <p className="text-[#11253e]/70 text-lg font-light leading-relaxed">
                  Artificial Intelligence is no longer experimental. It is becoming the operating layer of modern enterprises. However, scaling AI beyond pilots requires disciplined engineering, responsible governance and production grade infrastructure.
                </p>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="space-y-6"
              >
                <div className="border-l-3 border-[#f99d1c] pl-6">
                  <p className="text-[#11253e] text-lg font-medium leading-relaxed italic">
                    AI Engineering bridges strategy and execution. It transforms algorithms into resilient, scalable intelligent systems that drive real business outcomes.
                  </p>
                </div>
                <p className="text-[#11253e]/70 text-base font-light leading-relaxed">
                  We help enterprises design, build, deploy and govern AI systems that are secure, explainable and production ready.
                </p>
                <div className="w-16 h-px bg-[#f99d1c]"></div>
              </Motion.div>
            </div>
          </div>
        </section>

        {/* ─── Section 01: Approach ─── */}
        <section className="py-16 bg-[#11253e] relative overflow-hidden">
          {/* Background textures */}
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f99d1c]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.05] rounded-full blur-[100px]"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="max-w-3xl mb-10">
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-[#f99d1c] font-black text-5xl leading-none">01</span>
                  <div className="h-px w-16 bg-[#f99d1c]/40"></div>
                </div>
                <h2 className="text-white text-3xl lg:text-4xl font-medium tracking-tight">Approach</h2>
                <h3 className="text-[#f99d1c] text-base font-bold uppercase tracking-widest">From AI Ambition to Enterprise Grade Execution</h3>
                <p className="text-white/60 text-base font-light leading-relaxed max-w-2xl">
                  AI success is not about models alone. It is about architecture integration, governance and business alignment. Our approach focuses on:
                </p>
              </Motion.div>
            </div>

            {/* Image Left + Points Right */}
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              {/* Left — Image */}
              <Motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="overflow-hidden relative group h-[300px]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1764716580465-0e66349a51a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwQUklMjBzdHJhdGVneSUyMGRpZ2l0YWwlMjB0cmFuc2Zvcm1hdGlvbiUyMGRhcmt8ZW58MXx8fHwxNzcyMzAwNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="AI Enterprise Strategy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11253e]/60 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-[#11253e]/20 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
                {/* Accent corner */}
                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#f99d1c]/40 hidden lg:block"></div>
                <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#f99d1c]/40 hidden lg:block"></div>
              </Motion.div>

              {/* Right — Approach Points */}
              <div className="flex flex-col gap-4 justify-center">
                {approachPoints.map((point, i) => (
                  <Motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.09, duration: 0.5 }}
                    className="group flex items-center space-x-4"
                  >
                    <div className="w-2 h-2 bg-[#f99d1c] rounded-full shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-white text-lg font-light leading-relaxed group-hover:text-white/90 transition-colors">{point.text}</span>
                  </Motion.div>
                ))}
              </div>
            </div>

            {/* Closing quote */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 flex items-center space-x-6"
            >
              <div className="w-1 h-10 bg-[#f99d1c] shrink-0"></div>
              <p className="text-white/50 text-lg font-light italic leading-relaxed">
                We treat AI as a long term capability not a one time experiment.
              </p>
            </Motion.div>
          </div>
        </section>

        {/* ─── Section 02: Methodology ─── */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Subtle background texture */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #11253e, #11253e 1px, transparent 1px, transparent 60px)' }}></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header — left aligned */}
            <div className="max-w-3xl mb-16">
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-[#f99d1c] font-black text-5xl leading-none">02</span>
                  <div className="h-px w-16 bg-[#f99d1c]/40"></div>
                </div>
                <h2 className="text-[#11253e] text-3xl lg:text-4xl font-medium tracking-tight">Methodology</h2>
                <h3 className="text-[#f99d1c] text-base font-bold uppercase tracking-widest">Structured AI Engineering Lifecycle</h3>
                <p className="text-[#11253e]/60 text-base font-light leading-relaxed max-w-2xl">
                  We apply a disciplined engineering framework to move AI from experimentation to enterprise scale.
                </p>
              </Motion.div>
            </div>

            {/* Phase cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
              {methodology.map((step, idx) => (
                <Motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group relative"
                >
                  <div className="h-full px-[10px] py-[5px] border border-[#11253e]/[0.06] cursor-default">
                    {/* Top accent line */}
                    <div className="w-full h-0.5 bg-[#f99d1c] mb-8"></div>

                    {/* Icon */}
                    <div className="w-12 h-12 border border-[#11253e]/10 rounded-sm flex items-center justify-center mb-6 mx-auto">
                      <div>{step.icon}</div>
                    </div>

                    {/* Title */}
                    <h4 className="text-[#11253e] text-xl font-medium mb-1 text-center">{step.title}</h4>
                    <p className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.25em] mb-6 text-center">Phase {step.phase}</p>

                    {/* Points */}
                    <div className="space-y-3">
                      {step.points.map((point, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#f99d1c]/40 mt-1.5 shrink-0"></div>
                          <span className="text-[#11253e]/70 text-[13px] leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>

            {/* Closing quote bar */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 flex items-center space-x-6"
            >
              <div className="w-1 h-10 bg-[#f99d1c] shrink-0"></div>
              <p className="text-[#11253e]/50 text-base font-light italic leading-relaxed">
                This methodology ensures AI systems are reliable, scalable and governed across their lifecycle.
              </p>
            </Motion.div>
          </div>
        </section>

        {/* ─── Section 03: Tools & Ecosystem ─── */}
        <section className="relative overflow-hidden">
          {/* Full-width background image with dark overlay */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1680992044138-ce4864c2b962?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwc2VydmVyJTIwcm9vbSUyMGNsb3VkJTIwY29tcHV0aW5nJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzcyMzAxMTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Cloud Infrastructure"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#11253e]/92"></div>
          </div>

          {/* Background patterns */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <svg className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.06]" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="195" stroke="white" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="150" stroke="#f99d1c" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="105" stroke="white" strokeWidth="0.5" />
          </svg>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#f99d1c]/5 rounded-full blur-[100px]"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
            {/* Header */}
            <div className="max-w-3xl mb-14">
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-[#f99d1c] font-black text-5xl leading-none">03</span>
                  <div className="h-px w-16 bg-[#f99d1c]/40"></div>
                </div>
                <h2 className="text-white text-3xl lg:text-4xl font-medium tracking-tight">Tools & Ecosystem</h2>
                <h3 className="text-[#f99d1c] text-base font-bold uppercase tracking-widest">Enterprise AI and ML Ecosystem</h3>
                <p className="text-white/50 text-base font-light leading-relaxed max-w-2xl">
                  We design AI engineering solutions leveraging secure and scalable cloud environments such as Amazon Web Services, Microsoft Azure and Google Cloud.
                </p>
              </Motion.div>
            </div>

            {/* Tools grid — two-row layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
              {tools.map((tool, i) => (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group bg-[#11253e] hover:bg-white/[0.06] p-8 transition-all duration-600 relative"
                >
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f99d1c] group-hover:w-full transition-all duration-700"></div>
                  <div className="flex items-start space-x-5">
                    <div className="w-11 h-11 border border-white/10 group-hover:border-[#f99d1c]/40 rounded-sm flex items-center justify-center shrink-0 transition-colors duration-500">
                      <div className="text-[#f99d1c]">{tool.icon}</div>
                    </div>
                    <div>
                      <span className="text-white/80 group-hover:text-white text-[14px] font-light leading-relaxed transition-colors duration-500">{tool.text}</span>
                    </div>
                  </div>
                </Motion.div>
              ))}

              {/* Closing cell — tech note */}
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-[#f99d1c]/10 p-8 flex items-center"
              >
                <p className="text-white/40 text-[13px] font-light italic leading-relaxed">
                  Technology selection is aligned to enterprise scalability, compliance and long term sustainability.
                </p>
              </Motion.div>
            </div>

            {/* Closing quote bar */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 flex items-center space-x-6"
            >
              <div className="w-1 h-10 bg-[#f99d1c] shrink-0"></div>
              <p className="text-white/40 text-base font-light italic leading-relaxed">
                Scalable cloud-native AI platforms built on AWS, Azure and GCP with enterprise-grade security.
              </p>
            </Motion.div>
          </div>
        </section>

        {/* ─── Section 04: Value Proposition ─── */}
        <section className="py-20 bg-[#fdfbf7] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'repeating-linear-gradient(135deg, #11253e, #11253e 1px, transparent 1px, transparent 40px)' }}></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16 space-y-4"
              >
                <div className="flex items-center justify-center space-x-4 mb-2">
                  <span className="text-[#f99d1c] font-black text-6xl">04</span>
                  <div className="h-px w-12 bg-[#f99d1c]"></div>
                </div>
                <h2 className="text-[#11253e] text-4xl lg:text-5xl font-medium tracking-tight">Value Proposition</h2>
                <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest">Scalable Intelligence. Measurable Outcomes.</h3>
                <p className="text-[#11253e]/70 text-lg font-light max-w-2xl mx-auto mt-4">
                  Our AI Engineering services enable you to:
                </p>
              </Motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {valueProps.map((item, i) => (
                  <Motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start space-x-4 p-6 bg-white border border-[#11253e]/5 hover:border-[#f99d1c]/40 hover:shadow-lg transition-all duration-500 group"
                  >
                    <div className="w-9 h-9 bg-[#f99d1c]/10 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-[#f99d1c]/20 transition-colors">
                      <div className="text-[#f99d1c]">{item.icon}</div>
                    </div>
                    <span className="text-[#11253e] text-[15px] font-light leading-relaxed">{item.text}</span>
                  </Motion.div>
                ))}
              </div>

              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 p-8 md:p-12 bg-[#11253e] text-white relative overflow-hidden"
              >
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#f99d1c]/10 rounded-full blur-3xl"></div>
                <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                <div className="relative z-10 flex items-start space-x-4">
                  <Lightbulb className="text-[#f99d1c] shrink-0 mt-1" size={24} />
                  <p className="text-white/80 text-lg font-light leading-relaxed italic">
                    Most importantly, we help organizations institutionalize AI as a strategic capability — ensuring it delivers measurable impact rather than isolated experimentation.
                  </p>
                </div>
              </Motion.div>
            </div>
          </div>
        </section>

        {/* Technology Stack Pattern */}
        <section className="py-32 bg-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #11253e, #11253e 1px, transparent 1px, transparent 10px)' }}></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20 space-y-6">
              <h2 className="text-[#11253e] text-4xl font-medium tracking-tight uppercase">Modern Data Stack</h2>
              <div className="w-12 h-1 bg-[#f99d1c] mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {['Databricks', 'Snowflake', 'Airflow', 'dbt', 'Kafka', 'Spark', 'AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Python'].map((tech, i) => (
                <div key={i} className="bg-gray-50 p-6 flex items-center justify-center border border-gray-100 grayscale hover:grayscale-0 transition-all cursor-default">
                  <span className="text-[#11253e] font-bold text-xs uppercase tracking-widest">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative bg-[#11253e] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `repeating-linear-gradient(110deg, transparent, transparent 20px, #ffffff 20px, #ffffff 21px)` }} />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#fdfbf7] p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#f99d1c]"></div>
              <div className="max-w-2xl space-y-6">
                <h2 className="text-[#11253e] text-3xl md:text-5xl font-medium tracking-tight leading-[1.1]">
                  Ready to Build Your <br />
                  <span className="text-[#f99d1c]">Data Backbone?</span>
                </h2>
                <p className="text-[#11253e]/70 text-lg font-light leading-relaxed">
                  Engage our lead engineers to evaluate your current architecture and design a roadmap for scalable, future-proof data operations.
                </p>
              </div>
              <button
                className="whitespace-nowrap bg-[#f99d1c] hover:bg-[#11253e] text-white px-12 py-6 rounded-sm transition-all inline-flex items-center space-x-4 uppercase tracking-[0.2em] group"
                style={{ fontSize: "14px", fontWeight: 500 }}
              >
                <span>START YOUR JOURNEY</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Motion.div>
          </div>
        </section>
    </>
  );
}