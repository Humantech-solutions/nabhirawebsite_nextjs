"use client";
import Image from "next/image";

import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import patternImage from '../assets/gridsection.png';

interface CardProps {
  category?: string;
  title: string;
  image: string;
  className?: string;
  dark?: boolean;
}

function Card({ category, title, image, className, dark }: CardProps) {
  return (
    <div className={`group relative overflow-hidden h-full min-h-[300px] flex flex-col justify-end p-6 border border-gray-100 ${className}`}>
      <ImageWithFallback
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${dark ? 'from-black/80' : 'from-black/60'} to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500`}></div>
      
      {/* Geometric Overlay Pattern on Hover */}
      <div className="absolute inset-0 z-5 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none mix-blend-overlay">
        <ImageWithFallback 
          src={patternImage} 
          alt="" 
          className="w-full h-full object-cover scale-150 group-hover:scale-110 transition-transform duration-1000 ease-out" 
        />
      </div>
      
      <div className="relative z-10 space-y-3">
        {category && (
          <span className="bg-[#f99d1c] text-white text-[9px] font-medium py-1 px-2 tracking-normal uppercase">
            {category}
          </span>
        )}
        <h3 className="text-white text-lg font-light leading-snug group-hover:text-[#f99d1c] transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
}

export function LatestThinking({ data }: any) {
  const items = [
    {
      category: "Strategy & Lean",
      title: "Building the IT Operations of Tomorrow",
      image: "https://images.unsplash.com/photo-1770316320266-ba445bbd7890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBwZW9wbGUlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcxNzc3NDg0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      category: "Industrial Operations",
      title: "Unveiling results of adaptive Manufacturing",
      image: "https://images.unsplash.com/photo-1716463312118-dda4874116db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd29ya2VyJTIweWVsbG93JTIwaGVsbWV0JTIwZmFjdG9yeXxlbnwxfHx8fDE3NzE3Nzc0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      category: "Cloud",
      title: "Cloudifying the Now Gen",
      image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByb29tJTIwZGF0YSUyMGNlbnRlcnxlbnwxfHx8fDE3NzE3Mjc5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      category: "Energy & Logistics",
      title: "Driving the sustainability in Product Development",
      image: "https://images.unsplash.com/photo-1770745778460-9d9f1a7e8632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJpbGl0eSUyMG5hdHVyZSUyMHRlY2glMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzE3Nzc0ODMA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      category: "Enterprise AI & Cloud",
      title: "Unlocking Cybersecurity in Enterprise AI",
      image: "https://images.unsplash.com/photo-1659414378449-eb7c77eb799a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwYWJzdHJhY3QlMjBkaWdpdGFsJTIwbG9ja3xlbnwxfHx8fDE3NzE3Nzc0ODMA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      category: "General AI",
      title: "Accelerating Innovation with Beyond the Future",
      image: "https://images.unsplash.com/photo-1663084777461-4dfebe53d255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRpZ2l0YWwlMjBsYW5kc2NhcGUlMjBuZXR3b3JrfGVufDF8fHx8MTc3MTc3NzQ4NQA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 border-b border-gray-100 pb-8">
          <div className="flex flex-col space-y-2">
            <span className="text-[#f99d1c] text-[10px] font-medium tracking-normal uppercase">THOUGHT LEADERSHIP</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#11253e] tracking-tight">Latest Thinking</h2>
          </div>
          <p className="max-w-xl text-[#7d8597] text-base md:text-[18px] font-normal text-left leading-relaxed mt-6 md:mt-0">
            Read our latest thinking, research that provides fresh new perspectives that challenge business-as-usual and help you succeed tomorrow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 group/grid">
          {items.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhatsNew({ data }: any) {
  const news = [
    {
      title: "Nabhira & NVIDIA Partner to Advance AI-Native 5G Cloud Network Solutions",
      image: "https://images.unsplash.com/photo-1771065502806-67c8f31dd336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG93aW5nJTIwYmx1ZSUyMHRlY2hub2xvZ3klMjBnbGFzc3xlbnwxfHx8fDE3NzE3Nzc0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "FEB 18 2026"
    },
    {
      title: "Nabhira Announces Q3 Financial Results for Digital Services Boom 2025",
      image: "https://images.unsplash.com/photo-1769008301376-9a349cf2177b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMHNreXNjcmFwZXIlMjBsb3clMjBhbmdsZXxlbnwxfHx8fDE3NzE3Nzc0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "FEB 15 2026"
    },
    {
      title: "Microsoft & Nabhira Accelerate Driven Decarbonization for Banking",
      image: "https://images.unsplash.com/photo-1736175549681-c24c552da1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJsdWUlMjB3YXZ5JTIwcGF0dGVybiUyMHRlY2h8ZW58MXx8fHwxNzcxNzc3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "FEB 12 2026"
    }
  ];

  return (
    <section className="bg-[#fefaf4] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 md:mb-12 space-y-6 sm:space-y-0">
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-3xl md:text-4xl font-medium text-[#11253e]">What's New</h2>
            <p className="text-lg text-[#11253e] font-light">The current and future news from Nabhira and around the world.</p>
          </div>
          <div className="flex space-x-2">
            <button className="p-3 md:p-2 border border-gray-200 bg-white hover:bg-gray-50 transition-colors rounded-sm cursor-pointer">&larr;</button>
            <button className="p-3 md:p-2 border border-gray-200 bg-white hover:bg-gray-50 transition-colors rounded-sm cursor-pointer">&rarr;</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#f99d1c] text-white text-[9px] font-medium py-1 px-2 tracking-normal uppercase">
                  {item.date}
                </div>
              </div>
              <h3 className="text-xl font-light leading-tight group-hover:text-[#f99d1c] transition-colors line-clamp-2">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
