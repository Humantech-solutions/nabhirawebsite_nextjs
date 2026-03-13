"use client";
import Image from "next/image";

import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function IntroSection() {
  return (
    <section className="bg-[#fefaf4] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col">
            <h2 className="text-[#e31937] text-xl font-medium uppercase tracking-normal mb-4">With Nabhira</h2>
            <p className="text-gray-800 text-3xl font-light leading-snug">
              Our promise to help enterprise-level industries transform at speed with agility, resilience, and efficiency, so next is now.
            </p>
          </div>
          <div className="flex space-x-4 pt-4">
            <button className="bg-[#e31937] text-white px-8 py-3 text-xs font-medium tracking-normal hover:bg-black transition-all uppercase">
              Know More
            </button>
            <button className="bg-white border border-[#e31937] text-[#e31937] px-8 py-3 text-xs font-medium tracking-normal hover:bg-[#e31937] hover:text-white transition-all uppercase">
              Explore More
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 border border-black/10 transition-transform group-hover:scale-105"></div>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1699324218372-51e824d89130?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwZSUyMHJhY2luZyUyMGNhciUyMHJlZHxlbnwxfHx8fDE3NzE3Nzc0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Formula E Racing Car"
            className="w-full h-auto object-cover relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
