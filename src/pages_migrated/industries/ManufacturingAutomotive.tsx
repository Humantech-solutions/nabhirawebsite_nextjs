"use client";

import React, { useEffect, useRef } from "react";
import { motion as Motion, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import heroBg from "../../assets/a5b4a7e7bbf8a581496fc155ece5264832a5dd71.png";
import {
  ArrowRight, Factory, Cpu, Truck, Zap, Activity, CheckCircle, Leaf, Globe, Settings,
  Wifi, Cloud, Database, Scan, Bot, Shield, Clock, BarChart, Repeat
} from "lucide-react";

export default function ManufacturingAutomotive({ wordpressData }: any) {
  useEffect(() => {
    document.title = "Manufacturing & Automotive | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  const challenges = [
    { title: "Supply Chain Volatility", text: "Addressing global disruptions and material shortages.", icon: <Truck className="text-[#f99d1c]" size={32} /> },
    { title: "Smart Automation", text: "Integrating robotics and intelligent systems.", icon: <Bot className="text-[#f99d1c]" size={32} /> },
    { title: "Predictive Maintenance", text: "Zero downtime for reliability.", icon: <Activity className="text-[#f99d1c]" size={32} /> },
    { title: "Connected Vehicles", text: "Transitioning to electric and connected vehicles.", icon: <Zap className="text-[#f99d1c]" size={32} /> },
    { title: "Quality & Compliance", text: "Ensuring traceability and regulatory adherence.", icon: <CheckCircle className="text-[#f99d1c]" size={32} /> },
    { title: "Sustainability", text: "Reducing carbon footprint and ethical sourcing.", icon: <Leaf className="text-[#f99d1c]" size={32} /> },
  ];

  const impactAreas = [
    { id: "smart-factory", title: "Smart Factory & Industry 4.0 Enablement", description: "We design connected manufacturing ecosystems integrating IoT devices, production systems, and real-time analytics to improve visibility, efficiency and quality control.", details: ["IoT Integration", "Real-time Analytics", "Quality Control"], icon: <Factory size={40} /> },
    { id: "predictive-maintenance", title: "Predictive Maintenance & Asset Intelligence", description: "We implement AI-driven monitoring systems that reduce unplanned downtime, extend asset life and optimize maintenance scheduling.", details: ["AI Monitoring", "Asset Optimization", "Downtime Reduction"], icon: <Activity size={40} /> },
    { id: "supply-chain", title: "Supply Chain Digitization", description: "We enable end-to-end supply chain visibility across procurement, production, warehousing and distribution, improving forecasting accuracy and risk mitigation.", details: ["End-to-End Visibility", "Forecasting Accuracy", "Risk Mitigation"], icon: <Globe size={40} /> },
    { id: "automotive-digital", title: "Automotive Digital Platforms", description: "We support connected vehicle ecosystems, telematics platforms, software integration and data architectures that power modern mobility solutions.", details: ["Connected Vehicles", "Telematics Platforms", "Mobility Solutions"], icon: <Cpu size={40} /> },
    { id: "engineering-plm", title: "Engineering & Product Lifecycle Management", description: "We modernize engineering systems enabling collaboration, digital twins, simulation and lifecycle traceability across global teams.", details: ["Digital Twins", "Lifecycle Traceability", "Global Collaboration"], icon: <Settings size={40} /> },
  ];

  const techEnablement = [
    { title: "Industrial IoT Integration", desc: "Connecting machines and sensors for real-time data.", icon: <Wifi /> },
    { title: "Cloud Manufacturing", desc: "Scalable platforms for industrial workloads.", icon: <Cloud /> },
    { title: "Data Engineering", desc: "Advanced analytics for actionable insights.", icon: <Database /> },
    { title: "AI Quality Inspection", desc: "Automated defect detection and analysis.", icon: <Scan /> },
    { title: "Intelligent Automation", desc: "Streamlining production workflows.", icon: <Bot /> },
    { title: "OT Cybersecurity", desc: "Securing operational technology environments.", icon: <Shield /> },
  ];

  return (
    <div ref={containerRef} className="bg-white text-[#11253e] selection:bg-[#f99d1c] selection:text-white">
      <section className="relative h-[400px] md:h-[520px] flex items-center overflow-hidden bg-[#11253e]">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback src={heroBg} alt="Manufacturing & Automotive" className="w-full h-full object-cover opacity-40 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11253e] via-[#11253e]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] via-transparent to-transparent"></div>
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <Motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="max-w-4xl">
            <nav className="flex items-center space-x-3 text-[11px] md:text-[13px] font-medium tracking-[-0.02em] mb-4">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <span className="text-white/30 font-light">&gt;</span>
              <span className="text-[#f99d1c] uppercase tracking-widest">Manufacturing & Automotive</span>
            </nav>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
              Manufacturing & <br /><span className="text-[#f99d1c]">Automotive</span>
            </h1>
            <p className="text-white/70 text-lg md:text-[22px] font-light max-w-2xl leading-relaxed mb-10 border-l-2 border-[#f99d1c] pl-6">Engineering the Intelligent Connected Factory.</p>
          </Motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#11253e] mb-4">The Industry <span className="font-bold">Transformation</span></h2>
              <div className="h-1 w-20 bg-[#f99d1c]"></div>
            </div>
            <p className="text-[#11253e] text-lg max-w-md text-right md:text-left">Manufacturing and Automotive leaders must address supply chain volatility and the shift toward software-defined vehicles.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((item, idx) => (
              <Motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#f99d1c]/30 transition-all duration-300 group">
                <div className="mb-6 bg-[#11253e]/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-[#11253e] transition-colors duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#11253e] mb-3">{item.title}</h3>
                <p className="text-[#11253e] leading-relaxed">{item.text}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light text-[#11253e] mb-6">Where We Create <span className="italic font-serif text-[#f99d1c]">Impact</span></h2>
            <p className="text-[#11253e] text-xl max-w-3xl mx-auto">Modernize production environments, enable Industry 4.0 transformation and accelerate digital innovation at scale.</p>
          </div>
          <div className="space-y-24">
            {impactAreas.map((area, idx) => (
              <Motion.div key={area.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 mb-2"><span className="text-[#f99d1c] font-mono text-lg">0{idx + 1}</span><div className="h-px bg-[#11253e]/10 flex-grow"></div></div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#11253e]">{area.title}</h3>
                  <p className="text-[#11253e] text-lg leading-relaxed">{area.description}</p>
                  <ul className="space-y-3 pt-4">{area.details.map((detail, i) => (<li key={i} className="flex items-center gap-3 text-[#11253e] font-medium"><div className="w-1.5 h-1.5 bg-[#f99d1c] rounded-full"></div>{detail}</li>))}</ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/3] bg-[#f5f5f5] rounded-3xl overflow-hidden flex items-center justify-center group">
                    <div className="relative z-10 p-12 bg-white rounded-full shadow-2xl text-[#f99d1c] group-hover:scale-110 transition-transform duration-500"><div className="transform scale-150">{area.icon}</div></div>
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#f99d1c]/10 rounded-full blur-3xl"></div>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#11253e] text-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f99d1c]/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-light">Technology <br /><span className="font-bold text-[#f99d1c]">Enablement</span></h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-md">We leverage secure and scalable cloud platforms such as Amazon Web Services, Microsoft Azure and Google Cloud to support industrial-scale workloads.</p>
              <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/industries/manufacturing-automotive')}&title=${encodeURIComponent('Manufacturing & Automotive')}&category=Industries`} className="inline-flex items-center gap-2 text-[#f99d1c] font-medium hover:gap-4 transition-all">
Partner with us <ArrowRight size={20} /></Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {techEnablement.map((service, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-[#f99d1c] mb-4">{service.icon}</div>
                  <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                  <p className="text-white/50 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#e5dfd3] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #11253e 1px, transparent 1px)', backgroundSize: '40px 100%' }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#11253e]">
            <div className="md:col-span-1"><h2 className="text-3xl font-bold mb-4">Outcomes That Matter</h2><p>Tangible results for forward-thinking manufacturers.</p></div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
              <div className="border-l-2 border-[#11253e]/20 pl-6"><Clock size={32} className="mb-4" /><h3 className="text-xl font-bold mb-2">Efficiency</h3><p className="text-sm">Increased production efficiency and reduced downtime.</p></div>
              <div className="border-l-2 border-[#11253e]/20 pl-6"><CheckCircle size={32} className="mb-4" /><h3 className="text-xl font-bold mb-2">Quality</h3><p className="text-sm">Improved quality control and traceability.</p></div>
              <div className="border-l-2 border-[#11253e]/20 pl-6"><BarChart size={32} className="mb-4" /><h3 className="text-xl font-bold mb-2">Resilience</h3><p className="text-sm">Greater supply chain resilience and visibility.</p></div>
              <div className="border-l-2 border-[#11253e]/20 pl-6"><Repeat size={32} className="mb-4" /><h3 className="text-xl font-bold mb-2">Innovation</h3><p className="text-sm">Faster innovation cycles in product development.</p></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
