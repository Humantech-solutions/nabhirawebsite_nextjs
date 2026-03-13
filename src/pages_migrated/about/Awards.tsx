"use client";

import { motion as Motion } from "motion/react";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { LimitlessTogether } from "../../components/Footer";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Award, Trophy, Star, Medal } from "lucide-react";

export default function Awards({ wordpressData }: any) {
  useEffect(() => {
    document.title = "Awards & Recognition | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const awards = [
    {
      year: "2025",
      title: "Global AI Innovator of the Year",
      org: "Tech Leadership Summit",
      desc: "Recognizing Nabhira's pioneering work in building high-performance, autonomous data ecosystems for Fortune 500 enterprises."
    },
    {
      year: "2024",
      title: "Cloud Transformation Partner",
      org: "Enterprise Global Cloud Council",
      desc: "Awarded for excellence in orchestrating large-scale digital evolution through precision Cloud-first intelligence architectures."
    },
    {
      year: "2024",
      title: "Top 50 Most Innovative Firms",
      org: "Digital Innovation Review",
      desc: "Selected for our relentless pursuit of excellence and commitment to architectural precision in digital consulting."
    },
    {
      year: "2023",
      title: "Sustainability Architecture Award",
      org: "Green Tech Collective",
      desc: "For implementing resource-efficient, high-performance data engineering solutions across global major accounts."
    }
  ];

  return (
    <>
      {/* Awards Hero */}
      <section className="relative h-[400px] md:h-[520px] bg-[#11253e] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1681022407484-1ff39a10ba62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhd2FyZCUyMHRyb3BoeSUyMGdsYXNzJTIwb2ZmaWNlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTg5OTAyNnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Awards & Recognition"
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
                <Link href="/about" className="hover:text-white cursor-pointer transition-colors">About Us</Link>
                <span className="w-1 h-1 rounded-full bg-[#f99d1c]"></span>
                <span className="text-[#f99d1c]">Awards & Recognition</span>
              </nav>
              
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                Excellence <br />
                <span className="text-[#f99d1c]">Recognized</span>
              </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-12 mb-8 md:mb-12">
                <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm">
                  Our commitment to precision engineering and digital excellence has earned us recognition from the world's most prestigious industry organizations.
                </p>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* Awards Timeline Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="text-center mb-20">
              <h2 className="text-[#11253e] text-3xl md:text-4xl font-light mb-4 tracking-tight">
                A Journey of <span className="font-bold">Distinction</span>
              </h2>
              <div className="w-20 h-1 bg-[#f99d1c] mx-auto mb-8"></div>
            </div>

            <div className="space-y-12">
              {awards.map((award, i) => (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-gray-100 pb-12"
                >
                  <div className="md:col-span-2">
                    <span className="text-5xl font-extralight text-[#11253e] tracking-tighter">{award.year}</span>
                  </div>
                  <div className="md:col-span-7">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-[1px] bg-[#f99d1c]"></div>
                      <span className="text-[#f99d1c] font-bold tracking-[0.2em] text-[10px] uppercase">{award.org}</span>
                    </div>
                    <h3 className="text-[#11253e] text-2xl font-bold mb-4 tracking-tight">{award.title}</h3>
                    <p className="text-[#11253e] font-light text-sm leading-relaxed max-w-2xl">
                      {award.desc}
                    </p>
                  </div>
                  <div className="md:col-span-3 flex justify-end">
                    <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-[#f99d1c] border border-gray-100">
                      {i % 4 === 0 ? <Trophy size={24} /> : i % 4 === 1 ? <Award size={24} /> : i % 4 === 2 ? <Star size={24} /> : <Medal size={24} />}
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Impact Grid */}
        <section className="py-24 bg-[#11253e] text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 text-center relative z-10">
            <h2 className="text-3xl font-light mb-12 tracking-tight">
              Impact Beyond <span className="text-[#f99d1c] font-bold">Awards</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-white/80 font-light leading-relaxed mb-12">
                While recognition is valued, our greatest achievement remains the measurable success of our global clientele. From optimizing critical infrastructure to architecting AI ecosystems, our impact is defined by the resilience and growth of the enterprises we serve.
              </p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] scale-150 pointer-events-none grayscale">
             <div className="w-96 h-96 border-[10px] border-white/20 rotate-45"></div>
          </div>
        </section>

        <LimitlessTogether />
    </>
  );
}
