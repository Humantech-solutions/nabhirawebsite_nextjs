"use client";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import { ServiceHero } from "../../../components/ServiceHero";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { renderHeroTitle, formatQuotesToBold } from "../../../lib/utils";
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
  Code2,
  GitBranch,
  Search
} from "lucide-react";

export default function AIEngineering({ wordpressData }: { wordpressData?: any }) {
  useEffect(() => {
    document.title = "AI Engineering | Hutech Solutions Technologies";
    window.scrollTo(0, 0);
  }, []);

  const gs = wordpressData?.globalSettings;
  const heroData = gs?.heroSlides;

  const methodology = [
    {
      id: "define",
      title: "Define & Prioritize",
      icon: <Search className="text-[#f99d1c]" size={24} />,
      points: [
        "Use case prioritization and feasibility analysis",
        "Business value quantification and ROI modeling",
        "Data readiness and infrastructure assessment",
        "Risk, ethics, and compliance evaluation"
      ],
    },
    {
      id: "design",
      title: "Architecture Design",
      icon: <Layers className="text-[#f99d1c]" size={24} />,
      points: [
        "Model architecture and system design",
        "MLOps and deployment strategy",
        "Infrastructure sizing and scalability planning",
        "Responsible AI framework integration"
      ],
    },
    {
      id: "build",
      title: "Build & Train",
      icon: <Cog className="text-[#f99d1c]" size={24} />,
      points: [
        "Feature engineering and custom model training",
        "Validation, hyperparameter tuning & optimization",
        "Bias testing and explainability assessment",
        "Security and data privacy integration"
      ],
    },
    {
      id: "deploy",
      title: "Deploy & Operate",
      icon: <Rocket className="text-[#f99d1c]" size={24} />,
      points: [
        "CI/CD for ML pipelines & real-time endpoint deployment",
        "Continuous monitoring for model drift & performance",
        "Automated retraining and feedback loops",
        "Enterprise integration into operational workflows"
      ],
    },
  ];

  return (
    <>
      <ServiceHero
        title={renderHeroTitle(heroData?.heroS1Title || (
          <>Engineering <br /><span className="text-[#f99d1c]">Intelligence</span></>
        ))}
        description={formatQuotesToBold(heroData?.heroS1Desc || "Engineering 'Intelligence' into the ^Core of Your Enterprise^") as any}
        subtitle="AI Engineering"
        category="AI Engineering"
        image={heroData?.heroS1ImageUrl || heroData?.heroS1Image?.node?.sourceUrl || heroImg}
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
                {formatQuotesToBold("AI is the Operating Layer of \n^Modern Enterprises^")}
              </h2>
              <p className="text-[#11253e] text-lg md:text-xl font-light leading-relaxed">
                Artificial Intelligence is no longer experimental. It is becoming the fundamental foundation of competitive enterprise operations.
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
                {formatQuotesToBold("AI Engineering bridges strategy and execution. It transforms algorithms into resilient, scalable intelligent systems that drive real business outcomes.")}
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
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
                alt="AI Engineering Execution"
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
                <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest">{formatQuotesToBold("Enterprise-Grade AI Execution")}</h3>
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed">
                AI success is not about models alone. It is about architecture integration, governance, MLOps, and measurable business alignment.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  "Aligning AI initiatives with measurable business objectives",
                  "Designing scalable AI and ML architecture",
                  "Embedding responsible AI principles into development lifecycle",
                  "Ensuring data quality, governance, and model transparency",
                  "Integrating AI into core enterprise systems and workflows"
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-[#f99d1c] shrink-0 mt-1" size={18} />
                    <span className="text-[#11253e] text-sm font-medium">{formatQuotesToBold(item)}</span>
                  </div>
                ))}
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed italic">
                {formatQuotesToBold("'We treat AI as a long-term strategic capability, not a one-off experiment.'")}
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
            <h3 className="text-[#11253e] text-xl font-light uppercase tracking-[0.2em]">{formatQuotesToBold("Disciplined AI Engineering Lifecycle")}</h3>
            <p className="text-[#11253e] text-lg font-light max-w-2xl mx-auto">
              {formatQuotesToBold("We apply a disciplined engineering framework to move AI from proof-of-concept to production scale.")}
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
                <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest leading-snug">{formatQuotesToBold("Cloud AI Platforms & MLOps Infrastructure.")}</h3>
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed">
                We leverage top-tier cloud AI platforms, deep learning frameworks, and automated MLOps pipelines for production-ready deployment.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { icon: <Cpu size={18} />, text: "Amazon SageMaker, Azure ML & Google Vertex AI" },
                  { icon: <Code2 size={18} />, text: "Deep learning frameworks (TensorFlow, PyTorch, JAX)" },
                  { icon: <Server size={18} />, text: "Containerization & orchestration (Docker, Kubernetes)" },
                  { icon: <GitBranch size={18} />, text: "MLOps CI/CD & pipeline automation" },
                  { icon: <Shield size={18} />, text: "Model monitoring & explainability tools" }
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
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                  alt="AI Infrastructure Platform"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#f99d1c] p-8 text-[#11253e] max-w-xs shadow-xl hidden md:block">
                <p className="text-sm font-medium italic">
                  {formatQuotesToBold("'Our MLOps accelerators ensure models stay accurate, secure, and performant over time.'")}
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
            <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest">{formatQuotesToBold("Accelerated Adoption. Governed Intelligence.")}</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Accelerated Adoption", desc: "Move seamlessly from AI proof-of-concepts to high-impact production." },
              { title: "Responsible Governance", desc: "Reduce risk through ethical, transparent, and explainable AI models." },
              { title: "Operational Automation", desc: "Automate complex business processes and decision-making at scale." },
              { title: "Decision-Making Speed", desc: "Empower business units with real-time cognitive insights and predictions." },
              { title: "Reusable AI Platforms", desc: "Build modular AI architectures for ongoing enterprise innovation." },
              { title: "Competitive Edge", desc: "Establish long-term market differentiation through intelligent systems." }
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
                {formatQuotesToBold("Ready to engineer your \n^AI future?^")}
              </h2>
              <p className="text-[#11253e] text-base font-light leading-relaxed">
                Partner with Nabhira to build production-grade, governed AI systems that deliver measurable business value.
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
