"use client";

import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ArrowRight, Database, Cpu, Zap, BarChart3, Layers, Settings } from "lucide-react";

export default function DataEngineering() {
  useEffect(() => {
    document.title = "Data Engineering Services | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Pipeline Automation",
      desc: "Robust ETL/ELT workflows that automate data movement and transformation with surgical precision.",
      icon: <Zap className="text-[#f99d1c]" size={24} />
    },
    {
      title: "Real-time Streaming",
      desc: "Architecting low-latency data streams using Kafka and Spark for immediate business insights.",
      icon: <Cpu className="text-[#f99d1c]" size={24} />
    },
    {
      title: "Data Lakehouse",
      desc: "Merging the flexibility of data lakes with the performance of warehouses for unified data access.",
      icon: <Layers className="text-[#f99d1c]" size={24} />
    },
    {
      title: "Cloud Migration",
      desc: "Seamlessly transitioning legacy data estates to modern, scalable cloud platforms.",
      icon: <Database className="text-[#f99d1c]" size={24} />
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[650px] bg-[#11253e] overflow-hidden flex items-center pt-8 md:pt-12">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=2000"
              alt="Data Engineering Infrastructure"
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
              <nav className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4 font-bold">
                <span>Home</span>
                <span className="w-1 h-1 rounded-full bg-[#f99d1c]"></span>
                <span className="text-[#f99d1c]">Data & Analytics</span>
              </nav>
              
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                Engineered for <br /> 
                <span className="text-white/40">Performance.</span>
              </h1>
              
              <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
                Transforming raw data into strategic assets through high-performance <span className="text-white font-medium">pipeline architectures</span> and automated processing.
              </p>

              <div className="pt-8 flex flex-wrap gap-4">
                <button className="bg-[#f99d1c] hover:bg-white hover:text-[#11253e] text-white px-10 py-5 rounded-sm font-medium transition-all inline-flex items-center space-x-3 uppercase text-[11px] tracking-widest shadow-2xl shadow-[#f99d1c]/20">
                  <span>Architecture Consult</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-32 bg-[#fdfbf7]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-start">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-[#11253e] text-4xl font-medium tracking-tight">Core Engineering <br/><span className="text-[#f99d1c]">Capabilities</span></h2>
                  <p className="text-[#11253e]/70 text-lg font-light leading-relaxed">
                    We build the plumbing of the modern enterprise. Our data engineering services ensure that your data is clean, reliable, and available at the speed of business.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-8">
                  {features.map((feature, i) => (
                    <Motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="mb-6">{feature.icon}</div>
                      <h3 className="text-[#11253e] text-lg font-bold mb-3 tracking-normal">{feature.title}</h3>
                      <p className="text-[#11253e]/60 text-sm font-light leading-relaxed">{feature.desc}</p>
                    </Motion.div>
                  ))}
                </div>
              </div>
              
              <div className="relative aspect-square lg:aspect-auto lg:h-[700px]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000"
                  alt="Microchip architecture"
                  className="w-full h-full object-cover rounded-sm shadow-2xl"
                />
                {/* Floating Stats Block */}
                <div className="absolute -bottom-10 -left-10 bg-[#11253e] p-12 text-white shadow-2xl hidden md:block">
                  <div className="space-y-8">
                    <div>
                      <div className="text-4xl font-bold tracking-tight">99.9%</div>
                      <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Uptime Guaranteed</div>
                    </div>
                    <div className="h-px bg-white/10 w-full"></div>
                    <div>
                      <div className="text-4xl font-bold tracking-tight">500TB+</div>
                      <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Data Processed Daily</div>
                    </div>
                  </div>
                </div>
              </div>
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
              <button className="whitespace-nowrap bg-[#f99d1c] hover:bg-[#11253e] text-white px-12 py-6 rounded-sm font-medium transition-all inline-flex items-center space-x-4 uppercase text-xs tracking-[0.2em] group">
                <span>Start Building</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Motion.div>
          </div>
        </section>
    </>
  );
}
