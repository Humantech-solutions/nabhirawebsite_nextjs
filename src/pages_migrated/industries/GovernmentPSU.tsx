"use client";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { renderHeroTitle, formatQuotesToBold } from "../../lib/utils";
import {
  ArrowRight,
  ShieldCheck,
  Users,
  FileText,
  Database,
  Cloud,
  Zap,
  Globe,
  Landmark,
  Lock,
  Server,
  Activity,
  CheckCircle2,
} from "lucide-react";

export default function GovernmentPSU({ wordpressData }: { wordpressData?: any }) {

  useEffect(() => {
    document.title = "Government & PSUs | Hutech Solutions Technologies";
    window.scrollTo(0, 0);
  }, []);

  const gs = wordpressData?.globalSettings;
  const heroData = gs?.heroSlides;

  const challenges = [
    {
      title: "Digital Citizen Services",
      text: "Increasing demand for seamless, accessible and transparent digital citizen services.",
      icon: <Users className="text-[#f99d1c]" size={32} />,
    },
    {
      title: "Legacy Modernization",
      text: "Legacy systems limiting scalability, agility and interoperability across departments.",
      icon: <Server className="text-[#f99d1c]" size={32} />,
    },

    {
      title: "Cybersecurity & Privacy",
      text: "Heightened requirements for national data protection and cyber resilience.",
      icon: <Lock className="text-[#f99d1c]" size={32} />,
    },
    {
      title: "Budget & Efficiency",
      text: "Need to deliver more value and service quality with constrained public budgets.",
      icon: <Activity className="text-[#f99d1c]" size={32} />,
    },
    {
      title: "Governance & Audit",
      text: "Mandate for absolute transparency, auditability and policy-driven governance.",
      icon: <FileText className="text-[#f99d1c]" size={32} />,
    },
    {
      title: "Infrastructure Execution",
      text: "Large-scale infrastructure and public program execution challenges.",
      icon: <Globe className="text-[#f99d1c]" size={32} />,
    },
  ];

  const impactAreas = [
    {
      id: "governance",
      title: "Digital Governance & Citizen Services",
      description:
        "We design secure digital platforms including e-governance portals, unified service delivery platforms, digital identity integrations and mobile-first citizen engagement systems that simplify access to public services.",
      details: [
        "E-Governance Portals",
        "Unified Service Delivery",
        "Digital Identity Integration",
      ],
      icon: <Landmark size={32} />,
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "data",
      title: "Data Integration & Smart Policy Intelligence",
      description:
        "We build enterprise data platforms that unify departmental data, enabling real-time insights for policy planning, program monitoring and outcome-based governance.",
      details: [
        "Unified Data Platforms",
        "Real-time Policy Insights",
        "Outcome-based Governance",
      ],
      icon: <Database size={32} />,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "automation",
      title: "Intelligent Automation & Process Modernization",
      description:
        "We streamline workflows such as approvals, licensing, procurement, taxation, compliance tracking and grievance management through automation and AI-driven systems to reduce delays and increase transparency.",
      details: [
        "Workflow Automation",
        "AI-driven Compliance",
        "Grievance Management",
      ],
      icon: <Zap size={32} />,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "infrastructure",
      title:
        "Smart Infrastructure & Public Sector Modernization",
      description:
        "We support digital transformation across utilities, transport, energy and public enterprises by enabling IoT integration, predictive maintenance and operational visibility.",
      details: [
        "IoT Integration",
        "Smart Utilities",
        "Predictive Maintenance",
      ],
      icon: <Globe size={32} />,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "security",
      title: "Cybersecurity & Digital Resilience",
      description:
        "We strengthen cyber defenses, implement identity and access management frameworks and design resilient infrastructure to protect sensitive citizen and national data.",
      details: [
        "Zero-Trust Security",
        "Sovereign Data Protection",
        "Resilient Infrastructure",
      ],
      icon: <ShieldCheck size={32} />,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const techCapabilities = [
    {
      title: "Secure Cloud Architectures",
      desc: "Secure cloud-native public sector architectures.",
      icon: <Cloud />,
    },
    {
      title: "Policy Intelligence",
      desc: "Enterprise data platforms and analytics for policy intelligence.",
      icon: <FileText />,
    },
    {
      title: "AI & Automation",
      desc: "AI and automation engineering for governance systems.",
      icon: <Zap />,
    },
    {
      title: "Risk Frameworks",
      desc: "Regulatory-aligned governance and risk frameworks.",
      icon: <ShieldCheck />,
    },
    {
      title: "Cybersecurity",
      desc: "Cybersecurity, identity management and zero-trust architectures.",
      icon: <Lock />,
    },
    {
      title: "Mission Continuity",
      desc: "High availability, disaster recovery and mission-critical continuity solutions.",
      icon: <Activity />,
    },
  ];

  const outcomes = [
    "Improved citizen access and service experience",
    "Greater transparency and audit readiness",
    "Faster program execution and policy implementation",
    "Reduced operational cost through automation",
    "Stronger cybersecurity and data protection posture",
    "Scalable digital platforms for future-ready governance",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[520px] bg-[#11253e] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={heroData?.heroS1ImageUrl || heroData?.heroS1Image?.node?.sourceUrl || "https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=2070&auto=format&fit=crop"}
            alt="Government & Public Sector"
            className="w-full h-full object-cover opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11253e] via-[#11253e]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] via-transparent to-transparent"></div>
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl space-y-8"
          >
            <nav className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4 font-bold">
              <Link href="/"
                className="hover:text-white cursor-pointer transition-colors"
              >
                Home
              </Link>
              <span className="w-1 h-1 rounded-full bg-[#f99d1c]"></span>
              <span className="hover:text-white cursor-pointer transition-colors">
                Industries
              </span>
              <span className="w-1 h-1 rounded-full bg-[#f99d1c]"></span>
              <span className="text-[#f99d1c]">
                Government & PSUs
              </span>
            </nav>

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
              {renderHeroTitle(heroData?.heroS1Title || (
                <>
                  Government <br /> <span className="text-[#f99d1c]">& PSUs</span>
                </>
              ))}
            </h1>


            <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-12 mb-6">
              <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm">
                {formatQuotesToBold(heroData?.heroS1Desc || "Enabling Citizen-Centric, Transparent and Resilient Public Services. We partner with agencies to modernize infrastructure and strengthen public trust.")}
              </p>
            </div>

            <div className="pt-2">
              <Link 
                href="/contact"
                className="bg-[#f99d1c] hover:bg-white hover:text-[#11253e] text-white px-8 py-4 md:px-10 md:py-5 rounded-sm transition-all inline-flex items-center space-x-3 uppercase tracking-widest shadow-2xl shadow-[#f99d1c]/20 group text-[13px] md:text-[14px] font-medium"
              >
                <span>Consult Us</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Industry Imperative */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#11253e] mb-4">
                {formatQuotesToBold("The Industry \"Imperative\"")}
              </h2>
              <div className="h-1 w-20 bg-[#f99d1c]"></div>
            </div>
            <p className="text-[#11253e] text-lg max-w-md text-right md:text-left">
              Digital maturity is now directly linked to public
              trust, economic development and national
              competitiveness.
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
                <h3 className="text-xl font-bold text-[#11253e] mb-3">
                  {formatQuotesToBold(item.title)}
                </h3>
                <p className="text-[#11253e] leading-relaxed">
                  {formatQuotesToBold(item.text)}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light text-[#11253e] mb-6">
              {formatQuotesToBold("Where We Create 'Impact'")}
            </h2>
            <p className="text-[#11253e] text-xl max-w-3xl mx-auto">
              {formatQuotesToBold("We help Governments and PSUs evolve into intelligent, connected and resilient institutions.")}
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
                className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-[#f99d1c] font-mono text-lg">
                      0{idx + 1}
                    </span>
                    <div className="h-px bg-[#11253e]/10 flex-grow"></div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#11253e]">
                    {formatQuotesToBold(area.title)}
                  </h3>
                  <p className="text-[#11253e] text-lg leading-relaxed">
                    {formatQuotesToBold(area.description)}
                  </p>

                  <ul className="space-y-3 pt-4">
                    {area.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-[#11253e] font-medium"
                      >
                        <div className="w-1.5 h-1.5 bg-[#f99d1c] rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/3] bg-[#f5f5f5] rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                    <ImageWithFallback 
                      src={area.image}
                      alt={area.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover rounded-3xl group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Enablement */}
      <section className="py-24 bg-[#11253e] text-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f99d1c]/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-light">
                {formatQuotesToBold("Technology \n'Enablement'")}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-md">
                {formatQuotesToBold("We leverage secure and compliant cloud environments such as Amazon Web Services, Microsoft Azure and Google Cloud to support government-grade scalability, security and compliance.")}
              </p>

              <div className="pt-2">
                <Link href="/contact">
                  <button className="bg-[#f99d1c] text-[#11253e] px-10 py-5 text-[13px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all inline-flex items-center gap-3">
                    PARTNER WITH US <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {techCapabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="text-[#f99d1c] mb-4">
                    {cap.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2">
                    {formatQuotesToBold(cap.title)}
                  </h4>
                  <p className="text-white/50 text-sm">
                    {formatQuotesToBold(cap.desc)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes That Matter */}
      <section className="py-24 bg-[#F8F3E8] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #11253e 1px, transparent 1px)",
            backgroundSize: "40px 100%",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#11253e]">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold mb-4">
                Outcomes That Matter
              </h2>
              <p className="opacity-80 leading-relaxed">
                We help Governments and PSUs evolve into
                intelligent, connected and resilient
                institutions where technology enhances citizen
                services, strengthens governance and drives
                sustainable national progress.
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {outcomes.map((outcome, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-3"
                  >
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#11253e]/10 flex items-center justify-center">
                      <CheckCircle2
                        size={14}
                        className="text-[#11253e]"
                      />
                    </div>
                    <span className="text-[#11253e] text-lg font-medium leading-tight">
                      {outcome}
                    </span>
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
