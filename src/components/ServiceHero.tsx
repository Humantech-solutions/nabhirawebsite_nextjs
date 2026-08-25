"use client";

import React, { ReactNode } from "react";
import { motion as Motion } from "motion/react";
import Link from "next/link";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

interface ServiceHeroProps {
  title: ReactNode;
  subtitle?: string;
  category?: string;
  image?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

export function ServiceHero({
  title,
  subtitle,
  category = "Services",
  image,
  description,
  ctaText = "Consult Us",
  ctaLink = "/contact"
}: ServiceHeroProps) {
  return (
    <section className="relative h-[400px] md:h-[520px] w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src={image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"} 
          alt="Banner Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#11253e]/75 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#11253e] via-[#11253e]/60 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-6 md:space-y-8"
        >
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-3 text-[11px] md:text-[13px] font-medium tracking-[-0.02em]">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
            <span className="text-white/30 font-light">&gt;</span>
            <span className="text-[#f99d1c] uppercase tracking-widest">{category || subtitle}</span>
          </nav>

          <div className="space-y-6 md:space-y-8">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm">
              {title}
            </h1>
            {description && (
              <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm">
                {description}
              </p>
            )}
            <div className="pt-2 md:pt-4">
              <Link 
                href={ctaLink}
                className="bg-[#f99d1c] hover:bg-white hover:text-[#11253e] text-white px-10 py-5 rounded-sm transition-all inline-flex items-center space-x-3 uppercase tracking-widest shadow-2xl shadow-[#f99d1c]/20 group text-[14px] font-medium"
              >
                <span>{ctaText}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Motion.div>
      </div>
      
      {/* Decorative Pinstripe */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#f99d1c] via-transparent to-transparent opacity-50"></div>
    </section>
  );
}


