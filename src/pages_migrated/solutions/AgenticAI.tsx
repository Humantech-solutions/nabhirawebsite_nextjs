"use client";

import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ArrowRight, Cpu, Network, Zap, Settings, Command, Search } from "lucide-react";

export default function AgenticAI() {
  useEffect(() => {
    document.title = "Agentic AI | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const agents = [
    {
      title: "Autonomous Workflows",
      desc: "Creating self-directing AI agents capable of planning, executing, and optimizing multi-step tasks independently.",
      icon: <Settings className="text-[#f99d1c]" size={24} />
    },
    {
      title: "Multi-Agent Systems",
      desc: "Architecting collaborative networks of AI agents that coordinate to solve complex, high-dimensional problems.",
      icon: <Network className="text-[#f99d1c]" size={24} />
    },
    {
      title: "Self-Healing Operations",
      desc: "Implementing autonomous agents that monitor, diagnose, and remediate system issues without human intervention.",
      icon: <Zap className="text-[#f99d1c]" size={24} />
    },
    {
      title: "Agentic Knowledge Retrieval",
      desc: "Developing proactive agents that continuously scout and synthesize information for real-time decision support.",
      icon: <Search className="text-[#f99d1c]" size={24} />
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[650px] bg-[#11253e] overflow-hidden flex items-center pt-[110px]">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1705077330336-aedb4d99202a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwcm9ib3RzJTIwbmV1cmFsJTIwbmV0d29yayUyMGJsdWUlMjBvcmFuZ2UlMjBjaW5lbWF0aWN8ZW58MXx8fHwxNzcxOTM3OTQ0fDA&ixlib=rb-4.1.0&q=80&w=2000"
              alt="Agentic AI Autonomous Robots"
              className="w-full h-full object-cover opacity-50 mix-blend-screen"
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
                <span>Home</span>
                <span className="w-1 h-1 rounded-full bg-[#f99d1c]"></span>
                <span className="text-[#f99d1c]">Artificial Intelligence</span>
              </nav>
              
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                Autonomous <br /> 
                <span className="text-white/40">Agentic Core.</span>
              </h1>
              
              <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
                Building the next generation of <span className="text-white font-medium">Goal-Oriented AI</span> that acts as a proactive partner in your enterprise operations.
              </p>

              <div className="pt-8 flex flex-wrap gap-4">
                <button className="bg-[#f99d1c] hover:bg-white hover:text-[#11253e] text-white px-10 py-5 rounded-sm font-medium transition-all inline-flex items-center space-x-3 uppercase text-[11px] tracking-widest shadow-2xl shadow-[#f99d1c]/20">
                  <span>Explore Agentic Workflows</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-24 bg-[#fdfbf7] relative">
           <div className="absolute right-0 top-0 w-1/4 h-full bg-[#11253e]/5 -z-10"></div>
           <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-24 items-center">
                 <div className="space-y-8">
                    <h2 className="text-[#11253e] text-4xl lg:text-5xl font-medium tracking-tight">Beyond Passive AI</h2>
                    <p className="text-[#11253e]/70 text-lg leading-relaxed font-light">
                      The future of AI is agentic—proactive systems that don't just answer questions, but achieve outcomes. Our agentic frameworks empower organizations to automate complex, non-linear processes that were previously thought impossible.
                    </p>
                    <p className="text-[#11253e]/70 text-lg leading-relaxed font-light">
                      By integrating LLMs with specialized tool-use capabilities, we create agents that can interact with your existing software stack, from ERPs to cloud infrastructure, executing tasks with human-like reasoning and machine-like speed.
                    </p>
                    <div className="flex flex-wrap gap-12 pt-8">
                       <div className="space-y-2">
                          <p className="text-[#f99d1c] text-5xl font-bold tracking-tighter">70%</p>
                          <p className="text-[#11253e]/30 text-[10px] uppercase font-bold tracking-widest">Efficiency Gains</p>
                       </div>
                       <div className="space-y-2">
                          <p className="text-[#11253e] text-5xl font-bold tracking-tighter">24/7</p>
                          <p className="text-[#11253e]/30 text-[10px] uppercase font-bold tracking-widest">Autonomous Support</p>
                       </div>
                    </div>
                 </div>
                 
                 <div className="relative aspect-video lg:aspect-square">
                    <ImageWithFallback 
                       src="https://images.unsplash.com/photo-1620712943543-bcc4638d73d9?auto=format&fit=crop&q=80&w=1000"
                       alt="Neural Network Interaction"
                       className="w-full h-full object-cover rounded-sm shadow-2xl"
                    />
                 </div>
              </div>
           </div>
        </section>

        {/* Grid Section: Agentic Capabilities */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mb-20 space-y-6">
              <h2 className="text-[#11253e] text-4xl font-medium tracking-tight uppercase">Agentic Capabilities</h2>
              <div className="w-12 h-1 bg-[#f99d1c]"></div>
              <p className="text-[#11253e]/60 text-lg font-light leading-relaxed">
                Our proprietary agent architecture allows for the deployment of specialized AI entities tailored to your unique operational requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {agents.map((agent, i) => (
                <Motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#11253e] p-10 hover:bg-[#11253e]/95 transition-all group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-[#f99d1c] text-white mb-8 rounded-sm transform group-hover:scale-110 transition-transform">
                    {agent.icon}
                  </div>
                  <h3 className="text-white text-lg font-bold mb-4 tracking-normal">{agent.title}</h3>
                  <p className="text-white/50 text-sm font-light leading-relaxed">
                    {agent.desc}
                  </p>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Patterns and UI block section */}
        <section className="py-32 bg-[#eeede9] relative overflow-hidden">
           <div className="absolute left-0 top-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #11253e, #11253e 1px, transparent 1px, transparent 10px)' }}></div>
           
           <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="bg-[#11253e] p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
                 <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-[#f99d1c] opacity-[0.05] blur-3xl"></div>
                 <div className="max-w-2xl space-y-8">
                    <h2 className="text-white text-3xl md:text-5xl font-medium tracking-tight">Deploy Your First <br /><span className="text-[#f99d1c]">Digital Agent.</span></h2>
                    <p className="text-white/60 text-lg font-light leading-relaxed">
                       From automated data reconciliation to proactive supply chain monitoring, our agentic AI solutions are designed for rapid deployment and high impact.
                    </p>
                    <button className="bg-[#f99d1c] text-white px-12 py-6 rounded-sm font-medium hover:bg-white hover:text-[#11253e] transition-all uppercase text-xs tracking-widest shadow-xl">
                       Get Started
                    </button>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4">
                    {[
                       { label: "Execution Accuracy", val: "99.2%" },
                       { label: "Deployment Speed", val: "2 Weeks" },
                       { label: "Cost Reduction", val: "45%" },
                       { label: "Tool Integrations", val: "100+" }
                    ].map((stat, i) => (
                       <div key={i} className="bg-white/5 p-8 border border-white/10 text-center space-y-2">
                          <p className="text-[#f99d1c] text-2xl font-bold tracking-tight">{stat.val}</p>
                          <p className="text-white/30 text-[8px] uppercase font-bold tracking-widest">{stat.label}</p>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>
    </>
  );
}
