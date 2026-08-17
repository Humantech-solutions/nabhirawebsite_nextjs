"use client";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { LimitlessTogether } from "../../components/Footer";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Target, Eye, ShieldCheck, Lightbulb, HeartHandshake, BookOpen, Award } from "lucide-react";
import logo from '../../assets/logo.png';
import storyImg from '../../assets/81ed9d35393b4048d395b1d256aa4c9d085a37b4.png';
import { renderHeroTitle, renderDynamicIcon, formatQuotesToBold } from "../../lib/utils";

export default function About({ wordpressData }: any) {
  const aboutFields = wordpressData?.aboutUs;

  const fallbackValues = [
    {
      icon: <Lightbulb className="text-[#f99d1c]" size={32} />,
      title: "Innovation with Purpose",
      desc: "We harness emerging technologies like AI, cloud, and data engineering to solve real-world problems and create meaningful business impact."
    },
    {
      icon: <HeartHandshake className="text-[#f99d1c]" size={32} />,
      title: "Customer-Centric Thinking",
      desc: "Our clients' success defines our success. We partner closely to understand their challenges and deliver solutions that create lasting value."
    },
    {
      icon: <Award className="text-[#f99d1c]" size={32} />,
      title: "Engineering Excellence",
      desc: "We uphold the highest standards in architecture, design, and delivery—building solutions that are scalable, resilient, and future-ready."
    },
    {
      icon: <ShieldCheck className="text-[#f99d1c]" size={32} />,
      title: "Integrity and Trust",
      desc: "We operate with transparency, accountability, and ethical responsibility in every engagement."
    },
    {
      icon: <BookOpen className="text-[#f99d1c]" size={32} />,
      title: "Continuous Learning",
      desc: "Technology evolves rapidly, and so do we. We foster a culture of curiosity, learning, and constant improvement."
    },
    {
      icon: <Target className="text-[#f99d1c]" size={32} />,
      title: "Ownership and Accountability",
      desc: "We take full ownership of outcomes, delivering predictable results through disciplined execution and strong commitment."
    },
  ];

  const extractList = (prefix: string, max: number, defaultIcon: React.ReactNode) => {
    let list = [];
    for (let i = 1; i <= max; i++) {
      if (aboutFields?.[`${prefix}${i}Title`]) {
        list.push({
          icon: renderDynamicIcon(
            aboutFields[`${prefix}${i}IconType`],
            aboutFields[`${prefix}${i}Lucide`],
            aboutFields[`${prefix}${i}Image`]?.node
          ) || defaultIcon,
          title: aboutFields[`${prefix}${i}Title`],
          desc: aboutFields[`${prefix}${i}Desc`]
        });
      }
    }
    return list;
  };

  const extractedValues = extractList('v', 12, <Lightbulb className="text-[#f99d1c]" size={32} />);
  const displayValues = extractedValues.length > 0 ? extractedValues : fallbackValues;

  const fallbackVisions = [
    {
      icon: <Eye className="text-[#f99d1c]" size={32} />,
      title: "Our Vision",
      desc: "To be the foundational architecture upon which the world's most resilient and innovative digital enterprises are built, setting new benchmarks in AI and Cloud-first intelligence."
    }
  ];

  const extractedVisions = extractList('vision', 3, <Eye className="text-[#f99d1c]" size={32} />);
  const displayVisions = extractedVisions.length > 0 ? extractedVisions : fallbackVisions;

  const fallbackMissions = [
    {
      icon: <Target className="text-[#f99d1c]" size={32} />,
      title: "Our Mission",
      desc: "To empower organizations through high-performance engineering, data sovereignty, and autonomous cloud platforms, enabling them to navigate their digital evolution with confidence and precision."
    }
  ];

  const extractedMissions = extractList('mission', 3, <Target className="text-[#f99d1c]" size={32} />);
  const displayMissions = extractedMissions.length > 0 ? extractedMissions : fallbackMissions;

  const storyContent1 = aboutFields?.storyContentP1 || "Rooted in its name - Nabhira, inspired by “Nabha,” the limitless sky and “Vira,” the spirit of leadership, our journey began with a simple belief: technology should expand possibilities, not limit them. Founded on this vision, Nabhira set out to help enterprises navigate the rapidly evolving digital landscape with clarity, intelligence, and purpose.";
  const storyContent2 = aboutFields?.storyContentP2 || "Nabhira partners with organizations across industries to reimagine what is possible, accelerating transformation through advanced AI, cloud-first intelligence and data-driven engineering. What started as a bold vision has grown into a commitment to deliver innovation at scale and impact across borders, empowering businesses to evolve, adapt and lead in a world of limitless potential";

  return (
    <>
      {/* About Hero Section */}
      <section className="relative h-[400px] md:h-[520px] overflow-hidden flex items-center">
          <div className="absolute inset-0">
            <ImageWithFallback
              src={wordpressData?.globalSettings?.heroSlides?.heroS1ImageUrl || wordpressData?.globalSettings?.heroSlides?.heroS1Image?.node?.sourceUrl || "https://images.unsplash.com/photo-1765400669597-fd5161a9a5e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBhcmNoaXRlY3R1cmUlMjBnbGFzcyUyMGJ1aWxkaW5nJTIwc3Vuc2V0fGVufDF8fHx8MTc3MTg5NzM2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"}
              alt="About Nabhira"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#11253e] via-[#11253e]/70 to-transparent"></div>
            
            {/* Pinstripe pattern overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="pinstripe-about" width="40" height="40" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#pinstripe-about)" />
              </svg>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
            <Motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl space-y-8"
            >
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4 font-bold">
                <Link href="/" className="hover:text-white cursor-pointer transition-colors">Home</Link>
                <span className="w-1 h-1 rounded-full bg-[#f99d1c]"></span>
                <span className="text-[#f99d1c]">About Us</span>
              </nav>
              
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                  {renderHeroTitle(wordpressData?.globalSettings?.heroSlides?.heroS1Title || (
                    <>
                      Architecting <br />
                      <span className="text-[#f99d1c]">Tomorrow&apos;s</span> Enterprise
                    </>
                  ))}
                </h1>
                <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm border-l-2 border-[#f99d1c] pl-6 overflow-hidden">
                  {formatQuotesToBold(wordpressData?.globalSettings?.heroSlides?.heroS1Desc || "Nabhira accelerates digital transformation through advanced AI, cloud-first intelligence and data-driven engineering.")}
                </p>
              </Motion.div>
            </div>
        </section>

        {/* Narrative Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-[#11253e] text-3xl md:text-4xl font-light mb-8 tracking-tight">
                  {formatQuotesToBold(aboutFields?.storyTitle || "Our Story: From Vision to Global Impact")}
                </h2>
                <div className="space-y-6 text-[#11253e] font-light leading-relaxed">
                  <p>{formatQuotesToBold(storyContent1)}</p>
                  <p>{formatQuotesToBold(storyContent2)}</p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] bg-gray-100 rounded-sm overflow-hidden border border-gray-100 shadow-2xl relative z-10">
                  <ImageWithFallback
                    src={aboutFields?.storyImage?.node?.sourceUrl || aboutFields?.storyImage?.sourceUrl || storyImg}
                    alt="Corporate Leadership"
                    className="w-full h-full object-cover"
                    fill
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 border-[20px] border-[#f99d1c]/10 -z-0"></div>
                <div className="absolute top-10 -left-10 w-32 h-32 bg-[#11253e] opacity-5 -z-0"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-24 bg-[#11253e] relative text-white overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-white/10 pt-16">
              <div className="space-y-12">
                {displayVisions.map((v: any, i: number) => (
                  <div key={i} className="space-y-6">
                    {i === 0 && (
                      <div className="flex items-center space-x-4 mb-8">
                        <div className="w-12 h-[1px] bg-[#f99d1c]"></div>
                        <span className="text-[#f99d1c] font-medium tracking-normal text-[10px] uppercase">{aboutFields?.visionLabel || "Purpose"}</span>
                      </div>
                    )}
                    <div className="flex items-start space-x-6">
                      <div className="p-4 bg-white/5 rounded-full border border-white/10 shrink-0">
                        <span className="text-[#f99d1c]">
                          {v.icon}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-3xl font-light mb-4 tracking-tight">{formatQuotesToBold(v.title)}</h3>
                        <p className="text-white/80 font-light leading-relaxed">
                          {formatQuotesToBold(v.desc)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-12">
                {displayMissions.map((m: any, i: number) => (
                  <div key={i} className="space-y-6">
                    {i === 0 && (
                      <div className="flex items-center space-x-4 mb-8">
                        <div className="w-12 h-[1px] bg-[#f99d1c]"></div>
                        <span className="text-[#f99d1c] font-medium tracking-normal text-[10px] uppercase">{aboutFields?.missionLabel || "Commitment"}</span>
                      </div>
                    )}
                    <div className="flex items-start space-x-6">
                      <div className="p-4 bg-white/5 rounded-full border border-white/10 shrink-0">
                        <span className="text-[#f99d1c]">
                          {m.icon}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-3xl font-light mb-4 tracking-tight">{formatQuotesToBold(m.title)}</h3>
                        <p className="text-white/80 font-light leading-relaxed">
                          {formatQuotesToBold(m.desc)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none scale-150">
            <Image
              src={logo}
              alt="Nabhira Logo"
              width={150}
              height={50}
              className="h-10 w-auto grayscale"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-[#11253e] text-3xl md:text-5xl font-light mb-4 tracking-tight">
                {formatQuotesToBold(aboutFields?.valuesSectionTitle || "Our Core Values")}
              </h2>
              <div className="w-20 h-1 bg-[#f99d1c] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayValues.map((v, i) => (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 border border-gray-100 shadow-sm transition-all duration-300 group hover:shadow-xl rounded-sm"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300 text-[#f99d1c]">
                    {v.icon}
                  </div>
                  <h4 className="text-[#11253e] text-xl font-bold mb-4 tracking-normal uppercase text-[14px]">
                    {formatQuotesToBold(v.title)}
                  </h4>
                  <p className="text-[#11253e] text-[15px] font-light leading-relaxed">
                    {formatQuotesToBold(v.desc)}
                  </p>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Impact Stats */}
        <section className="py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#11253e] mb-2">{aboutFields?.stat1Value || "5+"}</div>
                <div className="text-[#f99d1c] text-[13px] font-medium tracking-normal uppercase">{aboutFields?.stat1Label || "Countries"}</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#11253e] mb-2">{aboutFields?.stat2Value || "25+"}</div>
                <div className="text-[#f99d1c] text-[13px] font-medium tracking-normal uppercase">{aboutFields?.stat2Label || "Customers"}</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#11253e] mb-2">{aboutFields?.stat3Value || "10+"}</div>
                <div className="text-[#f99d1c] text-[13px] font-medium tracking-normal uppercase">{aboutFields?.stat3Label || "Industries"}</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#11253e] mb-2">{aboutFields?.stat4Value || "98%"}</div>
                <div className="text-[#f99d1c] text-[13px] font-medium tracking-normal uppercase">{aboutFields?.stat4Label || "Retention"}</div>
              </div>
            </div>
          </div>
        </section>

        <LimitlessTogether data={wordpressData?.globalSettings?.limitlessTogether} />
    </>
  );
}
