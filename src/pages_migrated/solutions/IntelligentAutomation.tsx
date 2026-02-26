"use client";

import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ArrowRight, Zap, Layers, Cpu, TrendingUp, Shield, BarChart3, Database } from "lucide-react";

export default function IntelligentAutomation() {
  useEffect(() => {
    document.title = "Intelligent Automation | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const automations = [
    {
      title: "Cognitive RPA",
      desc: "Upgrading standard robotic process automation with machine learning to handle unstructured data and complex decisions.",
      icon: <Cpu className="text-[#f99d1c]" size={24} />
    },
    {
      title: "Hyperautomation Frameworks",
      desc: "End-to-end automation across the organization by orchestrating multiple tools, platforms, and AI technologies.",
      icon: <Layers className="text-[#f99d1c]" size={24} />
    },
    {
      title: "Process Mining & Discovery",
      desc: "Using AI to analyze operational logs and discover bottlenecks, inefficiencies, and prime candidates for automation.",
      icon: <BarChart3 className="text-[#f99d1c]" size={24} />
    },
    {
      title: "Automated Data Governance",
      desc: "Implementing self-governing data quality and compliance checks across all automated workflows.",
      icon: <Database className="text-[#f99d1c]" size={24} />
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[650px] bg-[#11253e] overflow-hidden flex items-center pt-8 md:pt-12">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1716972899074-2d8ace6f700a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0ZWQlMjBmYWN0b3J5JTIwZGlnaXRhbCUyMHR3aW4lMjBibHVlJTIwb3JhbmdlJTIwY2luZW1hdGljfGVufDF8fHx8MTc3MTkzNzk0OXww&ixlib=rb-4.1.0&q=80&w=2000"
              alt="Automated Factory Digital Twin"
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
                <span>Home</span>
                <span className="w-1 h-1 rounded-full bg-[#f99d1c]"></span>
                <span className="text-[#f99d1c]">Artificial Intelligence</span>
              </nav>
              
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                Intelligent <br /> 
                <span className="text-white/40">Automation Edge.</span>
              </h1>
              
              <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
                Elevating operational efficiency through <span className="text-white font-medium">Cognitive Workflows</span> and hyper-scale automation frameworks.
              </p>

              <div className="pt-8 flex flex-wrap gap-4">
                <button className="bg-[#f99d1c] hover:bg-white hover:text-[#11253e] text-white px-10 py-5 rounded-sm font-medium transition-all inline-flex items-center space-x-3 uppercase text-[11px] tracking-widest shadow-2xl shadow-[#f99d1c]/20">
                  <span>Explore Hyperautomation</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* Operational Excellence Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1 relative">
                 <div className="absolute inset-0 bg-[#f99d1c] opacity-[0.03] scale-110 blur-2xl"></div>
                 <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000"
                    alt="Intelligent Chipset Architecture"
                    className="w-full aspect-[4/5] object-cover shadow-3xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                 />
              </div>
              
              <div className="order-1 lg:order-2 space-y-12">
                 <div className="space-y-6">
                    <h2 className="text-[#11253e] text-4xl lg:text-5xl font-medium tracking-tight">The Hyperautomation <br /><span className="text-[#f99d1c]">Mandate.</span></h2>
                    <p className="text-[#11253e]/70 text-lg font-light leading-relaxed">
                       True intelligent automation goes beyond simple task repetition. We integrate AI, Machine Learning, and RPA to create dynamic systems that learn from their own operational data, optimizing performance in real-time.
                    </p>
                 </div>
                 
                 <div className="grid sm:grid-cols-2 gap-8">
                    {[
                       { title: "Scalable Efficiency", desc: "Reduce operational overhead by 60% through enterprise-wide cognitive bot deployment." },
                       { title: "Error-Free Delivery", desc: "Eliminate human fatigue errors in critical high-volume processing tasks." },
                       { title: "Real-time Adaptability", desc: "Workflows that adjust to changing input parameters using AI decisioning." },
                       { title: "24/7 Productivity", desc: "Round-the-clock operation with zero-latency handoffs between automated stages." }
                    ].map((item, i) => (
                       <div key={i} className="space-y-4 border-l-[1px] border-[#f99d1c]/20 pl-6">
                          <h4 className="text-[#11253e] text-sm font-bold uppercase tracking-tight">{item.title}</h4>
                          <p className="text-[#11253e]/50 text-xs font-light leading-relaxed">{item.desc}</p>
                       </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Pillars Grid */}
        <section className="py-32 bg-[#eeede9] relative">
          <div className="absolute right-0 top-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #11253e, #11253e 1px, transparent 1px, transparent 40px)' }}></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl mb-20 space-y-6">
              <h2 className="text-[#11253e] text-4xl font-medium tracking-tight uppercase">Strategic Automation Framework</h2>
              <div className="w-12 h-1 bg-[#f99d1c]"></div>
              <p className="text-[#11253e]/60 text-lg font-light leading-relaxed">
                Deploying enterprise-grade automation solutions that bridge the gap between legacy systems and modern cloud-native infrastructures.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {automations.map((item, i) => (
                <Motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-12 hover:shadow-xl transition-all border-b-2 border-transparent hover:border-[#f99d1c]"
                >
                  <div className="mb-8">{item.icon}</div>
                  <h3 className="text-[#11253e] text-lg font-bold mb-4 tracking-normal">{item.title}</h3>
                  <p className="text-[#11253e]/60 text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Diagonal Hatch Pattern Section */}
        <section className="py-32 bg-[#11253e] relative overflow-hidden">
           <div 
              className="absolute inset-0 opacity-[0.07]" 
              style={{ 
                backgroundImage: `repeating-linear-gradient(110deg, transparent, transparent 20px, #ffffff 20px, #ffffff 21px)`,
                backgroundSize: '100% 100%'
              }}
            />
           
           <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
              <Motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-white p-12 lg:p-24 shadow-3xl relative"
              >
                 <div className="absolute top-0 left-0 w-1.5 h-full bg-[#f99d1c]"></div>
                 <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-[#11253e] text-4xl md:text-6xl font-medium tracking-tight leading-tight">
                       Build Your <span className="text-[#f99d1c]">Digital Workforce.</span>
                    </h2>
                    <p className="text-[#11253e]/70 text-xl font-light">
                       Unlock human potential by automating the mundane. Let our experts design an automation strategy that scales with your ambition.
                    </p>
                    <div className="pt-8">
                       <button className="bg-[#f99d1c] text-white px-12 py-6 rounded-sm font-medium hover:bg-[#11253e] transition-all uppercase text-xs tracking-widest shadow-2xl shadow-[#f99d1c]/20">
                          Connect with an Architect
                       </button>
                    </div>
                 </div>
              </Motion.div>
           </div>
        </section>
    </>
  );
}
