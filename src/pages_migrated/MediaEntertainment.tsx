"use client";

import { motion as Motion, useScroll } from "motion/react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { renderHeroTitle } from "../lib/utils";
import {
  ArrowRight,
  Tv,
  Smartphone,
  Globe,
  ShieldCheck,
  BarChart3,
  Cloud,
  Zap,
  Play,
  Layers,
  Users,
  Lock,
  Cpu,
  TrendingUp,
  DollarSign,
  Activity,
  CheckCircle2,
  Film
} from "lucide-react";

export default function MediaEntertainment({ wordpressData }: { wordpressData?: any }) {
  useEffect(() => {
    document.title = "Media & Entertainment | Hutech Solutions Technologies";
    window.scrollTo(0, 0);
  }, []);

  const gs = wordpressData?.globalSettings;
  const heroData = gs?.heroSlides;

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const approachItems = [
    {
      title: "Audience-Centric Strategy",
      text: "Every platform and data model is designed around viewer experience, engagement, and monetization goals.",
      icon: <Users className="text-[#f99d1c]" size={32} />,
    },
    {
      title: "Scalable Cloud Infrastructure",
      text: "Flexible ecosystems that handle traffic spikes, live streaming demands, and global distribution.",
      icon: <Cloud className="text-[#f99d1c]" size={32} />,
    },
    {
      title: "Security & Content Protection",
      text: "Strong data security, DRM strategies, and compliance frameworks to safeguard IP and subscriber data.",
      icon: <Lock className="text-[#f99d1c]" size={32} />,
    },
    {
      title: "Continuous Innovation",
      text: "Agile delivery models for faster feature releases, experimentation, and rapid adaptation to trends.",
      icon: <Zap className="text-[#f99d1c]" size={32} />,
    },
  ];

  const keyServices = [
    {
      id: "cloud-mod",
      title: "Cloud & Platform Modernization",
      description: "We enable high-availability streaming environments through hybrid and multi-cloud architecture design and disaster recovery solutions.",
      details: ["Hybrid & Multi-cloud Design", "OTT Infrastructure Setup", "High-availability Streaming"],
      icon: <Globe size={40} />
    },
    {
      id: "app-dev",
      title: "Application Development",
      description: "We build modern Video-on-demand (VOD) platforms, mobile and smart TV applications, and robust content management systems.",
      details: ["VOD Platforms", "Smart TV Apps", "Personalization Engines"],
      icon: <Tv size={40} />
    },
    {
      id: "analytics",
      title: "Data & Audience Analytics",
      description: "We implement real-time engagement dashboards and recommendation engines to track viewer behavior and ad performance.",
      details: ["Real-time Dashboards", "Recommendation Engines", "Viewer Analytics"],
      icon: <BarChart3 size={40} />
    },
    {
      id: "security",
      title: "Cybersecurity & Compliance",
      description: "We ensure platform integrity with Digital Rights Management (DRM) support, secure payment integrations, and data privacy compliance.",
      details: ["DRM Support", "Secure Payments", "Threat Monitoring"],
      icon: <ShieldCheck size={40} />
    },
    {
      id: "managed-services",
      title: "Managed Services",
      description: "We provide 24/7 monitoring, performance tuning for peak traffic, and cost optimization across cloud environments.",
      details: ["24/7 Monitoring", "Performance Tuning", "Cost Optimization"],
      icon: <Activity size={40} />
    },
  ];

  const techEnablement = [
    {
      title: "OTT Infrastructure",
      desc: "Scalable streaming architectures.",
      icon: <Tv />
    },
    {
      title: "Multi-cloud Design",
      desc: "Hybrid and public cloud solutions.",
      icon: <Cloud />
    },
    {
      title: "DRM & Security",
      desc: "Protecting intellectual property.",
      icon: <Lock />
    },
    {
      title: "Personalization AI",
      desc: "Tailored content recommendations.",
      icon: <BrainIcon />
    },
    {
      title: "Real-time Analytics",
      desc: "Viewer behavior and insights.",
      icon: <BarChart3 />
    },
    {
      title: "Agile Delivery",
      desc: "Rapid feature deployment.",
      icon: <Zap />
    },
  ];

  const outcomes = [
    "Seamless streaming experiences across devices",
    "Faster time-to-market for new features",
    "Higher audience engagement and retention",
    "Improved monetization strategies",
    "Optimized infrastructure costs"
  ];

  return (
    <div ref={containerRef} className="bg-white text-[#11253e] selection:bg-[#f99d1c] selection:text-white">
      {/* ─── Hero Section ─── */}
      <section className="relative h-[400px] md:h-[520px] flex items-center overflow-hidden bg-[#11253e]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={heroData?.heroS1ImageUrl || heroData?.heroS1Image?.node?.sourceUrl || "https://images.unsplash.com/photo-1731567387449-ca62ad06831f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpYSUyMHN0dWRpbyUyMG1vZGVybiUyMGFyY2hpdGVjdHVyZSUyMGxpZ2h0aW5nfGVufDF8fHx8MTc3MTkwMDE2N3ww&ixlib=rb-4.1.0&q=80&w=1080"}
            alt="Media & Entertainment"
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
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-3 text-[11px] md:text-[13px] font-medium tracking-[-0.02em] mb-4">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <span className="text-white/30 font-light">&gt;</span>
              <span className="text-[#f99d1c] uppercase tracking-widest">Industries</span>
              <span className="text-white/30 font-light">&gt;</span>
              <span className="text-[#f99d1c] uppercase tracking-widest">Media & Entertainment</span>
            </nav>
            
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
              {renderHeroTitle(heroData?.heroS1Title || (
                <>Media & <br /> <span className="text-white/40">Entertainment</span></>
              ))}
            </h1>
            
            <p className="text-white/70 text-lg md:text-[22px] font-light max-w-2xl leading-relaxed mb-10 border-l-2 border-[#f99d1c] pl-6">
              {heroData?.heroS1Desc || (
                <>Powering <span className="text-white font-medium">Digital Experiences</span> That Captivate Audiences.</>
              )}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="group bg-white text-[#11253e] px-8 py-4 rounded-full font-medium flex items-center gap-3 hover:bg-[#f99d1c] hover:text-white transition-all duration-300">
                <span>Start Transformation</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ─── Our Approach (Bento Grid Style) ─── */}
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
              We help media companies modernize their technology backbone to create compelling content and unforgettable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {approachItems.map((item, idx) => (
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

      {/* ─── Key Services (Alternating Layout) ─── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light text-[#11253e] mb-6">
              Key <span className="italic font-serif text-[#f99d1c]">Services</span>
            </h2>
            <p className="text-[#11253e] text-xl max-w-3xl mx-auto">
              From OTT platforms to AI-driven analytics, we deliver the technology that powers modern media.
            </p>
          </div>

          <div className="space-y-24">
            {keyServices.map((area, idx) => (
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
                    <div className="absolute inset-0 bg-[#11253e]/5 opacity-20" style={{ backgroundImage: 'radial-gradient(#11253e 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    <div className="relative z-10 p-12 bg-white rounded-full shadow-2xl text-[#f99d1c] group-hover:scale-110 transition-transform duration-500">
                      {/* Render icon with large size */}
                      <div className="transform scale-150">
                        {area.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technology Enablement (Dark Mode) ─── */}
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
                We leverage secure, compliant cloud environments and advanced digital platforms to support global distribution and engagement.
              </p>
              
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#f99d1c] font-medium hover:gap-4 transition-all">
                Partner with us <ArrowRight size={20} />
              </Link>
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

      {/* ─── Outcomes (Metrics Style) ─── */}
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
              <h2 className="text-3xl font-bold mb-4">Outcomes We Enable</h2>
              <p className="">Tangible results for media companies and broadcasters.</p>
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
    </div>
  );
}

function BrainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.97-1.323" />
      <path d="M18 18a4 4 0 0 0 1.97-1.323" />
    </svg>
  );
}
