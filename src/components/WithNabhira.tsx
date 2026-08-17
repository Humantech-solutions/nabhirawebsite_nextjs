"use client";
import Link from "next/link";
import React from "react";
import { motion as Motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { formatQuotesToBold } from "../lib/utils";

export function WithNabhira({ data }: any) {
  const sectionTitle = data?.wnTitle || "With Nabhira";
  const items = [
    {
      title: data?.wnI1Title || "Future ready with Cloud",
      desc: data?.wnI1Desc || "Stay ahead of the curve with cloud solutions. Outpace change with cloud agility",
      category: data?.wnI1Cat || "CLOUD",
      image: data?.wnI1ImageUrl || data?.wnI1Image?.node?.sourceUrl || "https://images.unsplash.com/photo-1633174074875-f09b1b53ecf6?q=80&w=1080",
      url: data?.wnI1Url || null,
    },
    {
      title: data?.wnI2Title || "Unlock the power of Data",
      desc: data?.wnI2Desc || "Discover insights that move your business forward. Turn complexity into clarity",
      category: data?.wnI2Cat || "DATA",
      image: data?.wnI2ImageUrl || data?.wnI2Image?.node?.sourceUrl || "https://images.unsplash.com/photo-1758876202980-0a28b744fb24?q=80&w=1080",
      url: data?.wnI2Url || null,
    },
    {
      title: data?.wnI3Title || "Elevate with AI",
      desc: data?.wnI3Desc || "Redefine the art of possibilities. Transform ideas into reality",
      category: data?.wnI3Cat || "AI",
      image: data?.wnI3ImageUrl || data?.wnI3Image?.node?.sourceUrl || "https://images.unsplash.com/photo-1695902173528-0b15104c4554?q=80&w=1080",
      url: data?.wnI3Url || null,
    },
  ];

  return (
    <section className="bg-white py-20 md:py-24 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* WITH NABHIRA Header */}
        <div className="mb-10 text-center md:text-left flex flex-col items-center md:items-start">
          <Motion.h2 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#11253e] text-[14px] md:text-[16px] font-black tracking-[0.1em] flex items-center"
          >
            {formatQuotesToBold(sectionTitle)}
            <span className="ml-4 md:ml-6 h-[1px] w-16 md:w-24 bg-[#f99d1c]"></span>
          </Motion.h2>
        </div>

        {/* The Grid - Image Cards with Slide-up Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {items.map((item, idx) => {
            const cardContent = (
              <Motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative h-[200px] md:h-[210px] group overflow-hidden rounded-sm ${item.url ? "cursor-pointer" : "cursor-default"}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] via-[#11253e]/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
                </div>

                {/* Card Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div className="relative overflow-hidden">
                    {/* Category Label */}
                    <div className="text-[#f99d1c] text-[10px] font-black tracking-[0.2em] mb-2 uppercase">
                      {item.category}
                    </div>
                    
                    {/* Title - Always visible, slides up on hover */}
                    <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-1">
                      <h3 className="text-white text-lg font-semibold leading-tight tracking-tight mb-2">
                        {formatQuotesToBold(item.title)}
                      </h3>
                    </div>

                    {/* Description - Slides up and fades in */}
                    <div className="max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <p className="text-[color-mix(in_oklab,var(--color-white)_85%,transparent)] text-xs font-light leading-relaxed mb-4">
                        {formatQuotesToBold(item.desc)}
                      </p>
                    </div>

                    {/* Decorative line */}
                    <div className="w-10 h-[2px] bg-[#f99d1c] transition-all duration-500 group-hover:w-full"></div>
                  </div>
                </div>

                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#f99d1c] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </Motion.div>
            );

            return item.url ? (
              <Link key={idx} href={item.url} className="block">
                {cardContent}
              </Link>
            ) : (
              <div key={idx}>{cardContent}</div>
            );
          })}
        </div>

      </div>
    </section>
  );
}