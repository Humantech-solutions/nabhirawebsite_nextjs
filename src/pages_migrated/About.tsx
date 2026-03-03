"use client";

import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import Link from "next/link";
import { LimitlessTogether } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Eye, ShieldCheck, Users, Globe } from "lucide-react";
import logo from '../assets/logo.png';
import Image from "next/image";

interface AboutProps {
  wordpressData?: {
    title: string;
    content: string;
    globalSettings?: {
      heroSlides: any;
      limitlessTogether: any;
    };
  };
}

export default function About({ wordpressData }: AboutProps) {
  useEffect(() => {
    document.title = "About Nabhira Technologies | Digital Pioneer";
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <Target className="text-[#f99d1c]" size={32} />,
      title: "Outcome Driven",
      desc: "We focus on delivering measurable value and tangible results for our global clientele."
    },
    {
      icon: <Users className="text-[#f99d1c]" size={32} />,
      title: "Human Centric",
      desc: "Our solutions are designed to empower people and foster collaborative growth."
    },
    {
      icon: <ShieldCheck className="text-[#f99d1c]" size={32} />,
      title: "Ethical Integrity",
      desc: "Governance and ethics are at the core of our AI and data transformation practices."
    },
    {
      icon: <Globe className="text-[#f99d1c]" size={32} />,
      title: "Global Agility",
      desc: "Operating across 50+ countries with the nimbleness of a startup and the depth of a global major."
    }
  ];

  return (
    <>
      {/* About Hero Section */}
      <section className="relative h-[400px] md:h-[520px] overflow-hidden flex items-center">
          <div className="absolute inset-0">
            <ImageWithFallback
              src={wordpressData?.globalSettings?.heroSlides?.heroS1ImageUrl || wordpressData?.globalSettings?.heroSlides?.heroS1Image?.node?.sourceUrl || "https://images.unsplash.com/photo-1765400669597-fd5161a9a5e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"}
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

              <div className="border-l-[1px] border-white/20 pl-6 md:pl-12 py-2">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-4 md:mb-8">
                  {wordpressData?.globalSettings?.heroSlides?.heroS1Title ? (
                    <span dangerouslySetInnerHTML={{ __html: wordpressData.globalSettings.heroSlides.heroS1Title }} />
                  ) : wordpressData?.title ? (
                    <span dangerouslySetInnerHTML={{ __html: wordpressData.title }} />
                  ) : (
                    <>
                      Architecting <br />
                      <span className="text-[#f99d1c]">Tomorrow&apos;s</span> Enterprise
                    </>
                  )}
                </h1>
                <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm">
                  {wordpressData?.globalSettings?.heroSlides?.heroS1Desc || "Nabhira is a global pioneer in digital transformation, orchestrating evolution through Cloud-first intelligence and Data-driven engineering."}
                </p>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-[#11253e] text-3xl md:text-4xl font-light mb-8 tracking-tight">
                  Our Story: From Vision to <span className="font-bold">Global Impact</span>
                </h2>
                <div className="space-y-6 text-[#11253e]/70 font-light leading-relaxed">
                  {wordpressData?.content ? (
                    <div 
                      className="prose prose-lg text-[#11253e]/70 font-light leading-relaxed max-w-none"
                      dangerouslySetInnerHTML={{ __html: wordpressData.content }} 
                    />
                  ) : (
                    <>
                      <p>
                        Founded on the principles of architectural precision and digital excellence, Nabhira has grown from a specialized consultancy into a global powerhouse of innovation. We specialize in navigating the complexities of modern technology, enabling enterprises to outpace change with agility.
                      </p>
                      <p>
                        Our journey is defined by a relentless pursuit of excellence and a commitment to transforming business landscapes through Cloud transformation, AI consulting, and Data engineering. Today, we stand as a trusted partner to Fortune 500 companies, driving measurable impact across diverse industries.
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] bg-gray-100 rounded-sm overflow-hidden border border-gray-100 shadow-2xl relative z-10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1573166364839-1bfe9196c23e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBsZWFkZXJzaGlwJTIwdGVhbSUyMG1eXRpbmclMjBib2FyZCUyMHJvb218ZW58MXx8fHwxNzcxODk3MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Corporate Leadership"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 border-[20px] border-[#f99d1c]/10 -z-0"></div>
                <div className="absolute top-10 -left-10 w-32 h-32 bg-[#11253e] opacity-5 -z-0"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission (Matching Industries style) */}
        <section className="py-24 bg-[#11253e] relative text-white overflow-hidden">
          {/* Subtle background grid */}
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
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-[1px] bg-[#f99d1c]"></div>
                  <span className="text-[#f99d1c] font-medium tracking-normal text-[10px] uppercase">Purpose</span>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-white/5 rounded-full border border-white/10">
                    <Eye className="text-[#f99d1c]" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-light mb-4 tracking-tight">Our Vision</h3>
                    <p className="text-white/60 font-light leading-relaxed">
                      To be the foundational architecture upon which the world&apos;s most resilient and innovative digital enterprises are built, setting new benchmarks in AI and Cloud-first intelligence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-[1px] bg-[#f99d1c]"></div>
                  <span className="text-[#f99d1c] font-medium tracking-normal text-[10px] uppercase">Commitment</span>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-white/5 rounded-full border border-white/10">
                    <Target className="text-[#f99d1c]" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-light mb-4 tracking-tight">Our Mission</h3>
                    <p className="text-white/60 font-light leading-relaxed">
                      To empower organizations through high-performance engineering, data sovereignty, and autonomous cloud platforms, enabling them to navigate their digital evolution with confidence and precision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          {/* Subtle logo watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none scale-150">
            <Image
  src={logo}
  alt="Nabhira Logo"
  className="w-full grayscale"
  priority
/>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-[#11253e] text-3xl md:text-5xl font-light mb-4 tracking-tight">
                Our Core <span className="font-medium">Values</span>
              </h2>
              <div className="w-20 h-1 bg-[#f99d1c] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 border border-gray-100 shadow-sm transition-all duration-300 group hover:shadow-xl rounded-sm"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {v.icon}
                  </div>
                  <h4 className="text-[#11253e] text-xl font-medium mb-4 tracking-normal uppercase text-[14px]">
                    {v.title}
                  </h4>
                  <p className="text-[#11253e] text-sm font-light leading-relaxed">
                    {v.desc}
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
                <div className="text-4xl md:text-5xl font-medium text-[#11253e] mb-2">50+</div>
                <div className="text-[#f99d1c] text-[10px] font-medium tracking-normal uppercase">Countries</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-medium text-[#11253e] mb-2">250+</div>
                <div className="text-[#f99d1c] text-[10px] font-medium tracking-normal uppercase">Enterprises</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-medium text-[#11253e] mb-2">15+</div>
                <div className="text-[#f99d1c] text-[10px] font-medium tracking-normal uppercase">Industries</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-medium text-[#11253e] mb-2">98%</div>
                <div className="text-[#f99d1c] text-[10px] font-medium tracking-normal uppercase">Retention</div>
              </div>
            </div>
          </div>
        </section>

        <LimitlessTogether data={wordpressData?.globalSettings?.limitlessTogether} />
    </>
  );
}