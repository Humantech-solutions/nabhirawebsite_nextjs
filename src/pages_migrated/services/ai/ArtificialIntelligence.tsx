"use client";

import { motion as Motion } from "motion/react";
import { ServiceHero } from "../../../components/ServiceHero";
import { Cpu, Brain, Sparkles, Workflow, ArrowRight, Zap, Target, Lightbulb } from "lucide-react";
import Link from "next/link";
import aiServerImg from "../../../assets/ai.png";
import Image from "next/image";
import { renderHeroTitle, formatQuotesToBold } from "../../../lib/utils";

export default function ArtificialIntelligence({ wordpressData }: { wordpressData?: any }) {
  const gs = wordpressData?.globalSettings;
  const heroData = gs?.heroSlides;

  const solutions = [
    {
      title: "AI Consulting",
      path: "/solutions/ai-consulting",
      desc: "Defining a strategic roadmap to integrate AI into your enterprise and deliver measurable ROI.",
      icon: <Brain className="text-[#f99d1c]" size={24} />
    },
    {
      title: "Agentic AI",
      path: "/solutions/agentic-ai",
      desc: "Developing autonomous AI agents that can reason, plan, and execute complex business tasks.",
      icon: <Target className="text-[#f99d1c]" size={24} />
    },
    {
      title: "Intelligent Automation",
      path: "/solutions/intelligent-automation",
      desc: "Streamlining operations through AI-driven process automation and cognitive services.",
      icon: <Zap className="text-[#f99d1c]" size={24} />
    }
  ];

  const features = [
    {
      title: "Generative AI Integration",
      desc: "Harness the power of Large Language Models tailored for enterprise-specific datasets.",
      icon: <Sparkles size={20} />
    },
    {
      title: "Custom ML Models",
      desc: "Building and deploying bespoke Machine Learning algorithms for niche business needs.",
      icon: <Cpu size={20} />
    },
    {
      title: "Ethical AI Governance",
      desc: "Ensuring transparency, fairness, and safety in every AI-driven decision.",
      icon: <Lightbulb size={20} />
    },
    {
      title: "Process Orchestration",
      desc: "Coordinating human and AI workloads for peak operational efficiency.",
      icon: <Workflow size={20} />
    }
  ];

  return (
    <div className="flex flex-col">
      <ServiceHero
        subtitle="Artificial Intelligence"
        title={renderHeroTitle(heroData?.heroS1Title || (
          <>Orchestrating <br /><span className="text-[#f99d1c]">Intelligent Outcomes.</span></>
        ))}
        description={formatQuotesToBold(heroData?.heroS1Desc || "We bridge the gap between AI hype and business reality. Our AI services focus on building practical, scalable, and secure systems that redefine enterprise performance.") as any}
        image={heroData?.heroS1ImageUrl || heroData?.heroS1Image?.node?.sourceUrl || aiServerImg.src}

      />

      {/* Solutions Grid */}
      <section className="py-24 lg:py-32 bg-white text-[#11253e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 lg:mb-24">
            <h2 className="text-3xl lg:text-5xl font-medium tracking-tight mb-8">
              {formatQuotesToBold("The Next Era of ^Enterprise AI^")}
            </h2>
            <p className="text-[#11253e] text-lg lg:text-xl leading-relaxed font-light">
              We help you transition from experimentation to production, embedding intelligence into every facet of your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, idx) => (
              <Motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-[#fdfbf7] p-10 border border-[#11253e]/5 hover:border-[#f99d1c]/30 transition-all duration-500"
              >
                <div className="mb-8 p-4 bg-white shadow-sm inline-block rounded-sm transition-transform duration-500 group-hover:scale-110">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-medium mb-4 group-hover:text-[#f99d1c] transition-colors">{formatQuotesToBold(solution.title)}</h3>
                <p className="text-[#11253e] text-sm leading-relaxed mb-8 font-light">
                  {formatQuotesToBold(solution.desc)}
                </p>
                <Link 
                  href={solution.path}
                  className="inline-flex items-center space-x-2 text-[11px] font-bold uppercase tracking-widest text-[#11253e] hover:text-[#f99d1c] transition-colors"
                >
                  <span>Explore Solution</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 lg:py-32 bg-[#11253e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-5xl font-medium tracking-tight">
                  {formatQuotesToBold("Intelligent ^Core^")}
                </h2>
                <p className="text-white/60 text-lg font-light leading-relaxed">
                  Our methodologies ensure that AI implementations are robust, secure, and deliver consistent value to stakeholders.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="text-[#f99d1c]">{feature.icon}</div>
                    <h4 className="text-xl font-medium">{formatQuotesToBold(feature.title)}</h4>
                    <p className="text-white/40 text-sm font-light leading-relaxed">{formatQuotesToBold(feature.desc)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-white/5 backdrop-blur-3xl border border-white/10 p-1 rounded-sm overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                  alt="AI Neural Network" 
                  className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -top-8 -left-8 bg-[#f99d1c] p-10 text-[#11253e] hidden md:block">
                <p className="text-4xl font-bold tracking-tighter">AI-First</p>
                <p className="text-[10px] font-bold uppercase tracking-widest">Architectural Paradigm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-4xl lg:text-6xl font-medium tracking-tight text-[#11253e]">
            {formatQuotesToBold("Lead the charge into \n 'the era of intelligence.'")}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact">
              <button className="bg-[#11253e] text-white px-12 py-6 rounded-sm font-medium uppercase text-[11px] tracking-[0.2em] hover:bg-[#f99d1c] transition-all duration-300 w-full sm:w-auto shadow-2xl">
                Strategize with AI Leads
              </button>
            </Link>
            <Link href="/solutions/agentic-ai">
              <button className="border border-[#11253e]/20 text-[#11253e] px-12 py-6 rounded-sm font-medium uppercase text-[11px] tracking-[0.2em] hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto">
                Explore Agentic AI
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
