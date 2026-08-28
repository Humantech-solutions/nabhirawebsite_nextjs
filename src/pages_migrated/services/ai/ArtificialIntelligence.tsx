"use client";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import { ServiceHero } from "../../../components/ServiceHero";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { renderHeroTitle, formatQuotesToBold } from "../../../lib/utils";
import aiServerImg from "../../../assets/ai.png";
import { 
  ArrowRight, 
  Cpu, 
  Brain, 
  Sparkles, 
  Workflow, 
  Zap, 
  Target, 
  Lightbulb, 
  CheckCircle2, 
  Search, 
  Map, 
  BarChart3, 
  Shield 
} from "lucide-react";

export default function ArtificialIntelligence({ wordpressData }: { wordpressData?: any }) {
  useEffect(() => {
    document.title = "Artificial Intelligence Services | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const gs = wordpressData?.globalSettings;
  const heroData = gs?.heroSlides;

  const methodology = [
    {
      id: "assess",
      title: "Strategy & Assessment",
      icon: <Search className="text-[#f99d1c]" size={24} />,
      points: [
        "AI opportunity identification and readiness assessment",
        "Business value quantification and use-case prioritization",
        "Data quality and infrastructure evaluation",
        "Ethical AI risk and compliance mapping"
      ]
    },
    {
      id: "design",
      title: "Architecture Design",
      icon: <Map className="text-[#f99d1c]" size={24} />,
      points: [
        "Custom ML model and LLM architecture blueprinting",
        "Generative AI & RAG pipeline design",
        "MLOps infrastructure sizing and guardrails",
        "Data privacy & governance model definition"
      ]
    },
    {
      id: "build",
      title: "Build & Integration",
      icon: <Zap className="text-[#f99d1c]" size={24} />,
      points: [
        "Model fine-tuning, training, and optimization",
        "Integration into core enterprise workflows & APIs",
        "Explainability and bias validation testing",
        "Automated deployment & CI/CD configuration"
      ]
    },
    {
      id: "optimize",
      title: "Govern & Scale",
      icon: <BarChart3 className="text-[#f99d1c]" size={24} />,
      points: [
        "Continuous model performance & drift monitoring",
        "Ethical governance & access audit logging",
        "User adoption & change management training",
        "Scalable AI platform evolution for enterprise growth"
      ]
    }
  ];

  return (
    <>
      <ServiceHero
        subtitle="Artificial Intelligence"
        category="Artificial Intelligence"
        title={renderHeroTitle(heroData?.heroS1Title || (
          <>Orchestrating <br /><span className="text-[#f99d1c]">Intelligent Outcomes.</span></>
        ))}
        description={formatQuotesToBold(heroData?.heroS1Desc || "We bridge the gap between AI hype and business reality. Our AI services focus on building practical, scalable, and secure systems that redefine enterprise performance.") as any}
        image={heroData?.heroS1ImageUrl || heroData?.heroS1Image?.node?.sourceUrl || aiServerImg.src}
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
                {formatQuotesToBold("The Next Era of \n^Enterprise AI^")}
              </h2>
              <p className="text-[#11253e] text-lg md:text-xl font-light leading-relaxed">
                We help you transition from experimentation to production, embedding intelligence into every facet of your organization.
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
                {formatQuotesToBold("From strategic AI consulting to Agentic AI and process automation, our team builds secure, scalable intelligent systems that deliver measurable enterprise outcomes.")}
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
                alt="Artificial Intelligence Core"
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
                <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest">{formatQuotesToBold("Pragmatic. Scalable. Responsible.")}</h3>
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed">
                Our methodologies ensure that AI implementations are robust, secure, governed, and aligned with measurable business objectives.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  "Generative AI integration tailored for enterprise datasets",
                  "Bespoke Machine Learning algorithms for niche business needs",
                  "Ethical AI governance ensuring fairness and safety",
                  "Process orchestration coordinating human and AI workloads",
                  "Enterprise system integration with robust MLOps"
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-[#f99d1c] shrink-0 mt-1" size={18} />
                    <span className="text-[#11253e] text-sm font-medium">{formatQuotesToBold(item)}</span>
                  </div>
                ))}
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed italic">
                {formatQuotesToBold("'Building an intelligent core empowers your organization to innovate continuously with complete confidence.'")}
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
            <h3 className="text-[#11253e] text-xl font-light uppercase tracking-[0.2em]">{formatQuotesToBold("Structured AI Implementation Lifecycle")}</h3>
            <p className="text-[#11253e] text-lg font-light max-w-2xl mx-auto">
              {formatQuotesToBold("We follow a step-by-step framework to ensure seamless AI strategy, deployment, and ongoing governance.")}
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
                <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest leading-snug">{formatQuotesToBold("Enterprise AI & ML Ecosystems.")}</h3>
              </div>

              <p className="text-[#11253e] text-lg font-light leading-relaxed">
                We utilize cutting-edge Generative AI models, deep learning frameworks, and automated process orchestration platforms.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { icon: <Sparkles size={18} />, text: "Enterprise Generative AI & Large Language Models" },
                  { icon: <Cpu size={18} />, text: "Custom Machine Learning & Deep Neural Networks" },
                  { icon: <Lightbulb size={18} />, text: "Ethical governance & model explainability tools" },
                  { icon: <Workflow size={18} />, text: "Process orchestration & cognitive automation" },
                  { icon: <Shield size={18} />, text: "Data security, privacy & access control frameworks" }
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
                  alt="Artificial Intelligence Network"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#f99d1c] p-8 text-[#11253e] max-w-xs shadow-xl hidden md:block">
                <p className="text-sm font-medium italic">
                  {formatQuotesToBold("'Our AI frameworks turn experimentation into reliable, scalable operational performance.'")}
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
            <h3 className="text-[#f99d1c] text-xl font-bold uppercase tracking-widest">{formatQuotesToBold("Innovation. Scale. Competitive Edge.")}</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Generative Innovation", desc: "Harness Large Language Models tailored to your enterprise datasets." },
              { title: "Bespoke Accuracy", desc: "Deploy custom Machine Learning algorithms designed for niche business problems." },
              { title: "Ethical Safeguards", desc: "Ensure complete transparency, fairness, and safety in AI decision-making." },
              { title: "Cognitive Efficiency", desc: "Orchestrate human and AI workloads for peak operational performance." },
              { title: "Enterprise Scalability", desc: "Build resilient AI platforms ready for continuous enterprise evolution." },
              { title: "Strategic Advantage", desc: "Turn raw data into intelligent foresight that outpaces competition." }
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
                {formatQuotesToBold("Ready to orchestrate intelligent \n^outcomes for your business?^")}
              </h2>
              <p className="text-[#11253e] text-base font-light leading-relaxed">
                Let our experts design an AI strategy that scales with your ambition and delivers measurable enterprise value.
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
