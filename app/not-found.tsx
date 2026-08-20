"use client";

import React from 'react';
import Link from 'next/link';
import { motion as Motion } from "motion/react";
import { ArrowRight, Home, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="h-[80vh] min-h-[650px] w-full bg-[#0a1526] flex items-center justify-center relative overflow-hidden">
      {/* Premium Dark Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        {/* Deep background ambient glows */}
        <Motion.div 
          animate={{ x: [0, 30, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[10%] top-[20%] -z-10 h-[400px] w-[400px] rounded-full bg-[#f99d1c] opacity-[0.07] blur-[120px]" 
        />
        <Motion.div 
          animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute right-[5%] bottom-[10%] -z-10 h-[500px] w-[500px] rounded-full bg-[#3b82f6] opacity-[0.06] blur-[150px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl w-full px-6 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        
        {/* Left Content Area */}
        <div className="flex-1 text-center md:text-left z-20">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[#f99d1c] text-xs font-medium mb-6 shadow-[0_0_20px_rgba(249,157,28,0.1)]">
              <Compass size={14} className="animate-[spin_4s_linear_infinite]" />
              <span className="tracking-widest uppercase">Error 404</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              Looks like you've{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">wandered </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f99d1c] to-[#ffb854] relative">
                off-grid.
                {/* Decorative underline */}
                <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-gradient-to-r from-[#f99d1c] to-transparent rounded-full opacity-70"></span>
              </span>
            </h1>
            
            <p className="text-slate-400 text-base md:text-lg max-w-lg mx-auto md:mx-0 font-light leading-relaxed mb-8">
              The page you are looking for has been moved or doesn't exist. Let's guide you back to our innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link href="/" passHref>
                <button className="w-full sm:w-auto group relative flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#f99d1c] to-[#e68a10] text-white px-7 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,157,28,0.3)] hover:scale-[1.02] overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <Home size={16} className="relative z-10" />
                  <span className="relative z-10">Back to Homepage</span>
                </button>
              </Link>
              
              <Link href="/contact" passHref>
                <button className="w-full sm:w-auto group flex items-center justify-center gap-2.5 bg-white/5 border border-white/10 backdrop-blur-sm text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
                  <span>Contact Support</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 group-hover:text-[#f99d1c] transition-all duration-300" />
                </button>
              </Link>
            </div>
          </Motion.div>
        </div>

        {/* Right Abstract Art Area */}
        <Motion.div 
          className="flex-1 hidden md:flex justify-end items-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 40 }}
        >
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
            
            {/* High-tech rings */}
            <div className="absolute inset-0 rounded-full border-[2px] border-dashed border-white/10 animate-[spin_40s_linear_infinite]"></div>
            <div className="absolute inset-[15%] rounded-full border border-solid border-[#f99d1c]/20 shadow-[0_0_30px_rgba(249,157,28,0.1)_inset] animate-[spin_30s_linear_infinite_reverse]"></div>
            <div className="absolute inset-[30%] rounded-full border border-dashed border-[#3b82f6]/30 animate-[spin_20s_linear_infinite]"></div>
            
            {/* The 404 Glassmorphism Text */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h2 className="text-[12rem] lg:text-[15rem] font-black tracking-tighter select-none text-transparent bg-clip-text bg-gradient-to-b from-white/30 to-white/5 drop-shadow-2xl">
                404
              </h2>
            </div>
            
            {/* Orbiting Elements */}
            <Motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 z-20"
            >
              <div className="absolute top-[-5px] left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#f99d1c] to-[#ffb854] shadow-[0_0_20px_#f99d1c] -translate-x-1/2"></div>
            </Motion.div>
            
            <Motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[15%] z-20"
            >
              <div className="absolute bottom-[-4px] left-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_15px_white] -translate-x-1/2"></div>
            </Motion.div>

            {/* Floating Glass Panels */}
            <Motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] right-[-10%] w-24 h-24 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl z-0"
            />
            <Motion.div 
              animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[20%] left-[-5%] w-32 h-32 rounded-full bg-gradient-to-br from-[#f99d1c]/10 to-transparent border border-[#f99d1c]/20 backdrop-blur-sm shadow-2xl z-30"
            />
          </div>
        </Motion.div>
      </div>
    </div>
  );
}
