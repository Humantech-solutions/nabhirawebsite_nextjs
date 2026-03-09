"use client";

import { motion as Motion, useScroll } from "motion/react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  ArrowRight,
  Stethoscope,
  Pill,
  Activity,
  Heart,
  Dna,
  Microscope,
  ShieldCheck,
  Globe,
  Database,
  Cloud,
  Smartphone,
  Video,
  Link2,
  FileCheck,
  UserCheck,
  Truck,
  Wifi,
  Brain,
  Clock,
  TrendingDown,
  CheckCircle,
  HeartPulse
} from "lucide-react";

export default function HealthcarePharma({ wordpressData }: any) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const challenges = [
    {
      title: "Data Interoperability",
      text: "Breaking silos to enable seamless data exchange across systems.",
      icon: <Link2 className="text-[#f99d1c]" size={32} />,
    },
    {
      title: "Regulatory Compliance",
      text: "Navigating complex HIPAA, GDPR and GxP requirements.",
      icon: <FileCheck className="text-[#f99d1c]" size={32} />,
    },
    {
      title: "Patient Experience",
      text: "Meeting demands for personalized, digital-first care journeys.",
      icon: <UserCheck className="text-[#f99d1c]" size={32} />,
    },
    {
      title: "R&D Efficiency",
      text: "Accelerating drug discovery and reducing clinical trial costs.",
      icon: <Microscope className="text-[#f99d1c]" size={32} />,
    },
    {
      title: "Supply Chain Integrity",
      text: "Ensuring traceability and preventing counterfeit drugs.",
      icon: <Truck className="text-[#f99d1c]" size={32} />,
    },
    {
      title: "Cybersecurity",
      text: "Protecting sensitive patient data from evolving cyber threats.",
      icon: <ShieldCheck className="text-[#f99d1c]" size={32} />,
    },
  ];

  const impactAreas = [
    {
      id: "digital-health",
      title: "Digital Health Platforms",
      description: "We architect secure, scalable platforms for telehealth, remote patient monitoring and virtual care delivery, extending reach beyond hospital walls.",
      details: ["Telehealth Solutions", "Remote Monitoring", "Virtual Care"],
      icon: <Stethoscope size={40} />
    },
    {
      id: "clinical-data",
      title: "Clinical Data Intelligence",
      description: "We leverage AI and advanced analytics to unlock insights from EHRs, genomic data and real-world evidence, accelerating research and personalized medicine.",
      details: ["Real-World Evidence", "Genomic Analytics", "Personalized Medicine"],
      icon: <Dna size={40} />
    },
    {
      id: "smart-hospitals",
      title: "Smart Hospitals & IoT",
      description: "We integrate IoMT devices and hospital information systems to optimize workflows, asset tracking and patient safety in real-time.",
      details: ["Asset Tracking", "Workflow Optimization", "Patient Safety"],
      icon: <Wifi size={40} />
    },
    {
      id: "pharma-supply",
      title: "Pharma Supply Chain Visibility",
      description: "We build end-to-end traceability solutions using blockchain and IoT to ensure drug safety, compliance and efficient distribution.",
      details: ["End-to-End Traceability", "Cold Chain Monitoring", "Anti-Counterfeiting"],
      icon: <Pill size={40} />
    },
    {
      id: "patient-engagement",
      title: "Patient Engagement & Support",
      description: "We design intuitive mobile apps and portals that empower patients to manage their health, access records and communicate with providers.",
      details: ["Patient Portals", "Health Management Apps", "Provider Communication"],
      icon: <Heart size={40} />
    },
  ];

  const techEnablement = [
    {
      title: "Cloud for Healthcare",
      desc: "HIPAA-compliant cloud architectures.",
      icon: <Cloud />
    },
    {
      title: "AI Diagnostics",
      desc: "Machine learning for faster diagnosis.",
      icon: <Brain />
    },
    {
      title: "Internet of Medical Things",
      desc: "Connecting devices for better care.",
      icon: <Activity />
    },
    {
      title: "Telehealth Infrastructure",
      desc: "Secure video and data transmission.",
      icon: <Video />
    },
    {
      title: "Genomic Data Storage",
      desc: "Scalable solutions for big data.",
      icon: <Database />
    },
    {
      title: "Mobile Health",
      desc: "Apps for patients and providers.",
      icon: <Smartphone />
    },
  ];

  return (
    <div ref={containerRef} className="bg-white text-[#11253e] selection:bg-[#f99d1c] selection:text-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[520px] flex items-center overflow-hidden bg-[#11253e]">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGxhYm9yYXRvcnklMjByZXNlYXJjaCUyMGZhY2lsaXR5fGVufDF8fHx8MTc3MTg5NzY5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Healthcare & Pharma"
            className="w-full h-full object-cover opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11253e] via-[#11253e]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] via-transparent to-transparent"></div>
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <nav className="flex items-center space-x-3 text-[11px] md:text-[13px] font-medium tracking-[-0.02em] mb-4">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <span className="text-white/30 font-light">&gt;</span>
              <span className="text-[#f99d1c] uppercase tracking-widest">Healthcare & Life Sciences</span>
            </nav>
            
            <h1 className="text-white/80 text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
              Healthcare & <br />
              <span className="text-white/80">Life Sciences</span>
            </h1>
            
            <p className="text-white/70 text-lg md:text-[22px] font-light max-w-2xl leading-relaxed mb-10 border-l-2 border-[#f99d1c] pl-6">
              Empowering the Future of Connected Care.
            </p>
          </Motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#11253e] mb-4">
                The Industry <span className="font-bold">Challenge</span>
              </h2>
              <div className="h-1 w-20 bg-[#f99d1c]"></div>
            </div>
            <p className="text-[#11253e] text-lg max-w-md text-right md:text-left">
              Healthcare and Pharma leaders must balance innovation with compliance, cost pressures and patient outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((item, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#f99d1c]/30 transition-all duration-300 group"
              >
                <div className="mb-6 bg-[#11253e]/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-[#11253e] group-hover:text-white transition-colors duration-300">
                  <div className="group-hover:text-white text-[#11253e] transition-colors duration-300">
                    {item.icon} 
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#11253e] mb-3">{item.title}</h3>
                <p className="text-[#11253e] leading-relaxed">{item.text}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light text-[#11253e] mb-6">
              Where We Create <span className="italic font-serif text-[#f99d1c]">Impact</span>
            </h2>
            <p className="text-[#11253e] text-xl max-w-3xl mx-auto">
              Transforming patient journeys, accelerating research and optimizing care delivery through digital innovation.
            </p>
          </div>

          <div className="space-y-24">
            {impactAreas.map((area, idx) => (
              <Motion.div
                key={area.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-[#f99d1c] font-mono text-lg">0{idx + 1}</span>
                    <div className="h-px bg-[#11253e]/10 flex-grow"></div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#11253e]">{area.title}</h3>
                  <p className="text-[#11253e] text-lg leading-relaxed">{area.description}</p>
                  
                  <ul className="space-y-3 pt-4">
                    {area.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-[#11253e] font-medium">
                        <div className="w-1.5 h-1.5 bg-[#f99d1c] rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual/Icon Content */}
                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/3] bg-[#f5f5f5] rounded-3xl overflow-hidden flex items-center justify-center group">
                    <div className="absolute inset-0 bg-[#11253e]/5 pattern-grid-lg opacity-20"></div>
                    <div className="relative z-10 p-12 bg-white rounded-full shadow-2xl text-[#f99d1c] group-hover:scale-110 transition-transform duration-500">
                      {/* Render icon with large size */}
                      <div className="transform scale-150">
                        {area.icon}
                      </div>
                    </div>
                    {/* Decorative Blob */}
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#f99d1c]/10 rounded-full blur-3xl"></div>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Enablement Section */}
      <section className="py-24 bg-[#11253e] text-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f99d1c]/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-light">
                Technology <br />
                <span className="font-bold text-[#f99d1c]">Enablement</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-md">
                We leverage secure, compliant cloud platforms and advanced AI to power modern healthcare and life sciences ecosystems.
              </p>
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

      {/* Outcomes Section */}
      <section className="py-24 bg-[#f99d1c] relative overflow-hidden">
        {/* Vertical Lines Background */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #11253e 1px, transparent 1px)', 
            backgroundSize: '40px 100%' 
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#11253e]">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold mb-4">Outcomes That Matter</h2>
              <p className="">Tangible results for providers, payers and pharma.</p>
            </div>
            
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
              <div className="border-l-2 border-[#11253e]/20 pl-6">
                <HeartPulse size={32} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Better Care</h3>
                <p className="text-sm">Improved patient outcomes and satisfaction.</p>
              </div>
              <div className="border-l-2 border-[#11253e]/20 pl-6">
                <Clock size={32} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Faster Trials</h3>
                <p className="text-sm">Accelerated time-to-market for new therapies.</p>
              </div>
              <div className="border-l-2 border-[#11253e]/20 pl-6">
                <TrendingDown size={32} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Reduced Costs</h3>
                <p className="text-sm">Operational efficiency across the value chain.</p>
              </div>
              <div className="border-l-2 border-[#11253e]/20 pl-6">
                <CheckCircle size={32} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Compliance</h3>
                <p className="text-sm">Robust adherence to regulatory standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}