"use client";

import React from "react";
import { Plus, Quote } from "lucide-react";

export function SuccessStories({ data }: any) {
  const stories = [
    {
      title: "How Nabhira is helping a leading US beverage retailer in its digital supply chain transformation.",
      author: "James Jay",
      role: "Digital Supply Chain Transformation",
    },
    {
      title: "Nabhira helps a leading Japanese telecommunications operator build a state-of-the-art enterprise cloud platform.",
      author: "Yoshiyasu Sano",
      role: "Global Enterprise Strategy",
    },
    {
      title: "Nabhira helps a global automotive manufacturer drive connected mobility solutions for the future of travel.",
      author: "Sarah Brown",
      role: "Mobility and Innovation",
    },
    {
      title: "Fostering sustainability through next-gen green manufacturing tech and AI-driven efficiency.",
      author: "Green Manufacturing",
      role: "Sustainability Initiative",
    }
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="mb-12 md:mb-16 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-[#11253e] text-[14px] md:text-[16px] font-black tracking-[0.1em] flex items-center mb-4 md:mb-6">
            Success stories
            <span className="ml-4 md:ml-6 h-[1px] w-16 md:w-24 bg-[#f99d1c]"></span>
          </h2>
          <p className="text-[#11253e] text-base md:text-lg font-light max-w-2xl leading-relaxed">
            We partner with global enterprises to tackle challenges, accelerate transformation and deliver measured business value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stories.map((story, i) => (
            <div 
              key={i} 
              className="group cursor-pointer relative flex flex-col p-10 min-h-[320px] transition-all duration-500 border border-gray-100 bg-[#f8f9fa] hover:bg-[#11253e] hover:border-[#f99d1c]/30 hover:shadow-2xl hover:shadow-[#f99d1c]/5"
            >
              <div className="mb-8">
                <Quote className="w-10 h-10 text-gray-200 group-hover:text-[#f99d1c]/40 transition-colors duration-500" />
              </div>

              <div className="flex-grow flex flex-col justify-between">
                <p className="text-lg font-light leading-relaxed mb-8 text-[#11253e] group-hover:text-white transition-colors duration-500">
                  "{story.title}"
                </p>
                
                <div className="space-y-2 border-t pt-6 border-[#11253e]/10 group-hover:border-white/10 transition-colors duration-500">
                  <p className="font-black text-xs uppercase tracking-widest text-[#11253e] group-hover:text-[#f99d1c] transition-colors duration-500">
                    {story.author}
                  </p>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-[#11253e] group-hover:text-white/60 transition-colors duration-500">
                    {story.role}
                  </p>
                </div>
              </div>

              <div className="absolute top-10 right-10">
                <Plus className="w-5 h-5 text-[#f99d1c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#f99d1c] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}