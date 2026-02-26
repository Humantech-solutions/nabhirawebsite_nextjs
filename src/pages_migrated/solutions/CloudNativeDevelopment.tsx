"use client";

import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ServiceHero } from "../../components/ServiceHero";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Code2, Terminal, Boxes, Zap, Globe, Shield, Laptop, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CloudNativeDevelopment() {
  useEffect(() => {
    document.title = "Cloud-native Development | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ServiceHero 
        title={<>Build at the <span className="text-[#f99d1c]">Speed of Cloud.</span></>}
        description="We design and build ultra-scalable, resilient applications using serverless, containerization, and microservices. Empower your digital products to scale with your ambition."
        subtitle="Cloud-native Development"
        category="Cloud-native Development"
        image="https://images.unsplash.com/photo-1628313348684-5d75dd67e7c8?auto=format&fit=crop&q=80&w=2000"
      />

        {/* Core Competencies */}
        <section className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-1px bg-gray-100 border border-gray-100">
              {[
                {
                  title: "Microservices",
                  desc: "Decoupled architectures that allow independent scaling and deployment of business capabilities.",
                  icon: <Boxes className="text-[#f99d1c]" />
                },
                {
                  title: "Serverless Computing",
                  desc: "Event-driven execution models that eliminate server management and optimize resource costs.",
                  icon: <Zap className="text-[#f99d1c]" />
                },
                {
                  title: "Kubernetes & Containers",
                  desc: "Industry-standard orchestration for consistent deployment across any cloud provider.",
                  icon: <Terminal className="text-[#f99d1c]" />
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-16 space-y-8 hover:bg-gray-50 transition-all">
                  <div className="w-14 h-14 bg-gray-50 flex items-center justify-center border border-gray-100">
                    {item.icon}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-[#11253e] text-lg font-medium tracking-normal uppercase">{item.title}</h3>
                    <p className="text-[#11253e]/60 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Focus Pattern */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-[#11253e] text-4xl font-medium tracking-normal uppercase leading-tight">
                    Developer-First <br />
                    <span className="text-[#f99d1c]">Platform Engineering</span>
                  </h2>
                  <p className="text-[#11253e]/60 text-lg font-light leading-relaxed">
                    We don't just build apps; we build environments. Our platform engineering approach provides your developers with self-service capabilities to provision infrastructure, deploy code, and monitor performance.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    "Standardized CI/CD Templates",
                    "Automated Testing Suites",
                    "Centralized Logging & Tracing",
                    "Service Mesh Integration"
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4 items-center border-b border-gray-200 pb-4">
                      <CheckCircle2 size={16} className="text-[#f99d1c]" />
                      <span className="text-[10px] font-medium text-[#11253e] uppercase tracking-normal">{text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6">
                  <button className="bg-[#11253e] text-white px-10 py-5 text-[12px] font-medium uppercase tracking-normal hover:bg-[#f99d1c] transition-all">
                    Explore Platform Architecture
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
                  alt="Developer Workspace"
                  className="rounded-sm grayscale grayscale-100 hover:grayscale-0 transition-all duration-1000 shadow-3xl"
                />
                <div className="absolute -top-10 -right-10 bg-[#f99d1c] p-12 hidden lg:block border border-[#11253e]/10">
                   <Rocket className="text-white mb-6" size={32} />
                   <p className="text-white text-3xl font-medium">10x</p>
                   <p className="text-white/60 text-[10px] font-medium uppercase tracking-normal leading-relaxed">
                     Improvement in <br />Developer Productivity.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Scalability Section */}
        <section className="py-32 bg-[#11253e] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center max-w-4xl mx-auto space-y-12">
              <h2 className="text-white text-5xl lg:text-7xl font-medium tracking-normal uppercase leading-tight">
                Designed for <br />
                <span className="text-[#f99d1c]">Planetary Scale.</span>
              </h2>
              <p className="text-white/40 text-xl font-light leading-relaxed">
                Whether you're serving 1,000 users or 1 billion, our cloud-native solutions are architected to handle bursty traffic with zero performance degradation.
              </p>
              
              <div className="grid md:grid-cols-4 gap-12 pt-12">
                {[
                  { label: "High Availability", val: "99.99%" },
                  { label: "Edge Latency", val: "< 20ms" },
                  { label: "Auto-Scale Speed", val: "Seconds" },
                  { label: "Global Coverage", val: "200+ PoPs" }
                ].map((item, i) => (
                  <div key={i} className="space-y-4">
                    <p className="text-[#f99d1c] text-4xl font-medium">{item.val}</p>
                    <p className="text-white/20 text-[10px] font-medium uppercase tracking-normal">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
