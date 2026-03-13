"use client";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";

const newsItems = [
  {
    id: 1,
    date: "Feb 10, 2026",
    source: "Bloomberg Technology",
    title: "Nabhira Technologies Announces Expansion into Southeast Asian Markets",
    link: "/resources/news/1"
  },
  {
    id: 2,
    date: "Jan 25, 2026",
    source: "Financial Times",
    title: "The Architecture of Tomorrow: Why Nabhira is Leading the AI-Native Revolution",
    link: "/resources/news/2"
  },
  {
    id: 3,
    date: "Dec 12, 2025",
    source: "Business Insider",
    title: "Top 50 Cloud Companies to Watch in 2026",
    link: "/resources/news/3"
  }
];

export default function News({ wordpressData }: any) {
  useEffect(() => {
    document.title = "In the News | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* News Hero */}
      <section className="relative h-[300px] overflow-hidden flex items-center">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1754671675183-1acad2302f95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBuZXdzJTIwcm9vbSUyMGRpZ2l0YWwlMjBtZWRpYSUyMGRpc3BsYXl8ZW58MXx8fHwxNzcxOTAwNDk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Nabhira in the News"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#11253e]/80"></div>
          </div>
          <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex items-center">
            <div>
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                In the <span className="text-[#f99d1c]">News</span>
              </h1>
              <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
                Global recognition and press mentions for our architectural contributions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="space-y-12">
              {newsItems.map((item, idx) => (
                <Motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-100 pb-12 group"
                >
                  <div className="w-48 pt-1">
                    <p className="text-[10px] font-bold text-[#f99d1c] uppercase tracking-widest">{item.date}</p>
                    <p className="text-[#11253e] font-bold text-sm uppercase mt-1">{item.source}</p>
                  </div>
                  <div className="flex-1 space-y-4">
                    <Link href={item.link}>
                      <h3 className="text-[#11253e] text-2xl font-light tracking-tight group-hover:text-[#f99d1c] transition-colors leading-snug">
                        {item.title}
                      </h3>
                    </Link>
                    <Link href={item.link} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#11253e] hover:text-[#f99d1c] transition-colors group">
                      View Article <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>
    </>
  );
}