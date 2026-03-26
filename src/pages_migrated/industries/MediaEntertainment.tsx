"use client";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import {
  ArrowRight,
  MonitorPlay,
  Cloud,
  ShieldCheck,
  Zap,
  Smartphone,
  BarChart,
  Settings,
  Code,
  Users,
  Film,
  Globe,
  Award,
  Activity,
  CheckCircle2,
  Lock,
  Cpu
} from "lucide-react";

export default function MediaEntertainment({ wordpressData }: any) {
  useEffect(() => {
    document.title = "Media & Entertainment | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const approach = [
    {
      title: "Audience-Centric Digital Strategy",
      text: "Every platform, application, and data model is designed around viewer experience, engagement, and monetization goals.",
      icon: <Users className="text-[#f99d1c]" size={32} />,
    },
    {
      title: "Scalable Cloud Infrastructure",
      text: "We enable flexible, cloud-powered ecosystems that handle high traffic spikes, live streaming demands, and global distribution without performance issues.",
      icon: <Cloud className="text-[#f99d1c]" size={32} />,
    },
    {
      title: "Security & Content Protection",
      text: "We embed strong data security, DRM strategies, and compliance frameworks to safeguard intellectual property and subscriber data.",
      icon: <ShieldCheck className="text-[#f99d1c]" size={32} />,
    },
    {
      title: "Continuous Innovation Model",
      text: "We adopt agile delivery models that allow faster feature releases, experimentation, and rapid adaptation to changing audience trends.",
      icon: <Zap className="text-[#f99d1c]" size={32} />,
    },
  ];

  const keyServices = [
    {
      id: "cloud-modernization",
      title: "Cloud & Platform Modernization",
      description: "Hybrid and multi-cloud architecture design, OTT platform infrastructure setup, and high-availability streaming environments.",
      details: ["Multi-cloud Architecture", "OTT Infrastructure", "Disaster Recovery"],
      icon: <Cloud size={40} />
    },
    {
      id: "app-dev",
      title: "Application Development & Modernization",
      description: "Video-on-demand (VOD) platforms, mobile and smart TV applications, content management systems (CMS), and personalization engines.",
      details: ["VOD Platforms", "Smart TV Apps", "Personalization Engines"],
      icon: <Code size={40} />
    },
    {
      id: "analytics",
      title: "Data & Audience Analytics",
      description: "Real-time user engagement dashboards, recommendation engine enablement, viewer behavior analytics, and ad performance tracking.",
      details: ["Engagement Dashboards", "Recommendation Engines", "Ad Performance Tracking"],
      icon: <BarChart size={40} />
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity & Compliance",
      description: "Digital rights management (DRM) support, secure payment integrations, data privacy compliance, and threat monitoring.",
      details: ["DRM Support", "Secure Payments", "Data Privacy Compliance"],
      icon: <Lock size={40} />
    },
    {
      id: "managed-services",
      title: "Managed Services & Performance Optimization",
      description: "24/7 monitoring and support, performance tuning for peak traffic, and cost optimization across cloud environments.",
      details: ["24/7 Monitoring", "Performance Tuning", "Cost Optimization"],
      icon: <Settings size={40} />
    }
  ];

  const partnerReasons = [
    {
      title: "Deep Expertise",
      desc: "Building scalable digital platforms.",
      icon: <Award />
    },
    {
      title: "High Availability",
      desc: "Streaming environments that stay up.",
      icon: <Activity />
    },
    {
      title: "Security-First",
      desc: "Architecture to protect content and data.",
      icon: <ShieldCheck />
    },
    {
      title: "Agile Delivery",
      desc: "Suited for fast-moving digital media.",
      icon: <Zap />
    }
  ];

  const outcomes = [
    "Seamless streaming experiences across devices",
    "Faster time-to-market for new features",
    "Higher audience engagement and retention",
    "Improved monetization strategies",
    "Optimized infrastructure costs"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[520px] bg-[#11253e] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop"
            alt="Media & Entertainment"
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
              <Link href="/" className="hover:text-white cursor-pointer transition-colors">Home</Link>
              <span className="w-1 h-1 rounded-full bg-[#f99d1c]"></span>
              <span className="hover:text-white cursor-pointer transition-colors">Industries</span>
              <span className="w-1 h-1 rounded-full bg-[#f99d1c]"></span>
              <span className="text-[#f99d1c]">Media & Entertainment</span>
            </nav>

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
              Media & <br />
              <span className="text-[#f99d1c]">Entertainment</span>
            </h1>

            <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-12 mb-8 md:mb-12">
              <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm">
                Powering Digital Experiences That Captivate Audiences. We help media companies modernize their technology backbone to deliver unforgettable experiences.
              </p>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/industries/media-and-entertainment')}&title=${encodeURIComponent('Media & Entertainment')}&category=Industries`}>
                <button className="bg-[#f99d1c] hover:bg-white hover:text-[#11253e] text-white px-10 py-5 rounded-sm font-medium transition-all inline-flex items-center space-x-3 uppercase text-[14px] tracking-widest shadow-2xl shadow-[#f99d1c]/20 group">
                  <span>GET STARTED</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#11253e] mb-4">
                Our <span className="font-bold">Approach</span>
              </h2>
              <div className="h-1 w-20 bg-[#f99d1c]"></div>
            </div>
            <p className="text-[#11253e] text-lg max-w-md text-right md:text-left">
              The Media & Entertainment industry is evolving faster than ever. We focus on audience-centric digital strategy and scalable infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {approach.map((item, idx) => (
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

      {/* Key Services */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light text-[#11253e] mb-6">
              Key Services for <span className="italic font-serif text-[#f99d1c]">Media & Entertainment</span>
            </h2>
            <p className="text-[#11253e] text-xl max-w-3xl mx-auto">
              Modernize, innovate, and captivate with our comprehensive suite of digital services.
            </p>
          </div>

          <div className="space-y-24">
            {keyServices.map((service, idx) => (
              <Motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-[#f99d1c] font-mono text-lg">0{idx + 1}</span>
                    <div className="h-px bg-[#11253e]/10 flex-grow"></div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#11253e]">{service.title}</h3>
                  <p className="text-[#11253e] text-lg leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 pt-4">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-[#11253e] font-medium">
                        <div className="w-1.5 h-1.5 bg-[#f99d1c] rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/3] bg-[#f5f5f5] rounded-3xl overflow-hidden flex items-center justify-center group">
                    <div className="absolute inset-0 bg-[#11253e]/5 opacity-20" style={{ backgroundImage: 'radial-gradient(#11253e 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    <div className="relative z-10 p-12 bg-white rounded-full shadow-2xl text-[#f99d1c] group-hover:scale-110 transition-transform duration-500">
                      <div className="transform scale-150">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-24 bg-[#11253e] text-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f99d1c]/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-light">
                Why Partner <br />
                <span className="font-bold text-[#f99d1c]">With Us</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-md">
                We bring deep expertise in building scalable digital platforms, strong understanding of high-availability streaming environments, and a security-first architecture.
              </p>
              
              <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/industries/media-entertainment')}&title=${encodeURIComponent('Media & Entertainment')}&category=Industries`} className="inline-flex items-center gap-2 text-[#f99d1c] font-medium hover:gap-4 transition-all">
                Partner with us <ArrowRight size={20} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {partnerReasons.map((reason, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-[#f99d1c] mb-4">{reason.icon}</div>
                  <h4 className="font-bold text-lg mb-2">{reason.title}</h4>
                  <p className="text-white/50 text-sm">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes We Enable */}
      <section className="py-24 bg-[#e5dfd3] relative overflow-hidden">
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
              <h2 className="text-3xl font-bold mb-4">Outcomes We Enable</h2>
              <p className="opacity-80 leading-relaxed">
                 We help you achieve seamless streaming experiences, faster time-to-market, and improved monetization.
              </p>
            </div>
            
            <div className="md:col-span-2">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#11253e]/10 flex items-center justify-center">
                        <CheckCircle2 size={14} className="text-[#11253e]" />
                    </div>
                    <span className="text-[#11253e] text-lg font-medium leading-tight">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}