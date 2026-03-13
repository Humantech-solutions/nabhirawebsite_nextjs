"use client";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { caseStudies } from "@/src/data/migrated_data";

export default function CaseStudies({ wordpressData }: any) {
  useEffect(() => {
    document.title = "Case Studies | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Case Studies Hero */}
      <section className="relative h-[300px] overflow-hidden flex items-center">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1721244654392-9c912a6eb236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50JTIwZGlnaXRhbCUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzE5MDA0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Nabhira Case Studies"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#11253e]/80"></div>
          </div>
          <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex items-center">
            <div>
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                Architectural <span className="text-[#f99d1c]">Success</span>
              </h1>
              <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
                Proven results delivered through rigorous digital engineering.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-20">
            {caseStudies.map((c, idx) => (
              <Motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2 aspect-video overflow-hidden rounded-sm relative">
                  <Image 
                    src={c.image} 
                    alt={c.title} 
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="flex gap-2">
                    {c.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-[#11253e]/5 text-[#11253e] text-[10px] font-bold uppercase tracking-widest rounded-full">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-[#11253e] text-3xl font-light tracking-tight leading-tight">
                    {c.title}
                  </h3>
                  <p className="text-[#11253e] font-light text-lg">
                    Client: <span className="text-[#11253e] font-medium">{c.client}</span>
                  </p>
                  <div className="p-6 bg-[#f8f9fa] border-l-4 border-[#f99d1c]">
                    <div className="flex items-center gap-3 text-[#11253e] font-bold">
                      <CheckCircle2 className="text-[#f99d1c]" size={24} />
                      {c.impact}
                    </div>
                  </div>
                  <Link href={`/resources/case-studies/${c.slug}`} className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#11253e] group">
                    Read Full Case Study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Motion.div>
            ))}
          </div>
        </section>
    </>
  );
}