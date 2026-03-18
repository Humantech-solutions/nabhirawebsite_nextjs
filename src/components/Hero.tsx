"use client";
import Image from "next/image";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion as Motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import banner1Img from "../assets/log03.png";
import banner2Img from "../assets/bigthinkers.png";
import aiServerImg from "../assets/ai.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { renderHeroTitle as renderTitle, formatQuotesToBold } from "../lib/utils";

interface HeroProps {
  data?: any;
}

export function Hero({ data }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const defaultBanners = [
    {
      type: "video" as const,
      videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-digital-connection-concept-24622-large.mp4",
      title: (
        <>
          Future ready with <br />
          <span className="text-[#f99d1c]">Cloud</span>
        </>
      ),
      description: "Stay ahead of the curve with Cloud Solutions. Outpace change with cloud agility.",
      image: banner1Img,
      overlay: "bg-gradient-to-r from-[#11253e]/90 via-[#11253e]/50 to-transparent",
      buttonText: "SEE HOW",
      buttonUrl: "#"
    },
    {
      type: "image" as const,
      title: (
        <>
          Unlock the Power <br />
          of <span className="text-[#f99d1c]">Data</span>
        </>
      ),
      description: "Discover insights that move your business forward. Turn complexity into clarity.",
      image: banner2Img,
      overlay: "bg-gradient-to-r from-[#11253e]/90 via-[#11253e]/50 to-transparent",
      buttonText: "SEE HOW",
      buttonUrl: "#"
    },
    {
      type: "image" as const,
      title: (
        <>
          Elevate with <br />
          <span className="text-[#f99d1c]">AI</span>
        </>
      ),
      description: "Redefine the art of possibilities. Transform ideas into reality.",
      image: aiServerImg,
      overlay: "bg-gradient-to-r from-[#11253e]/90 via-[#11253e]/50 to-transparent",
      buttonText: "SEE HOW",
      buttonUrl: "#"
    },
  ];

  const heroData = data?.heroSlides || data;

  // Map dynamic data if available
  const banners = heroData ? [
    {
      type: (heroData.heroS1VideoUrl ? "video" : "image") as "video" | "image",
      videoSrc: heroData.heroS1VideoUrl || "",
      title: renderTitle(heroData.heroS1Title || ""),
      description: heroData.heroS1Desc || "",
      image: heroData.heroS1ImageUrl || heroData.heroS1Image?.node?.sourceUrl || banner1Img,
      overlay: "bg-gradient-to-r from-[#11253e]/90 via-[#11253e]/50 to-transparent",
      buttonText: heroData.heroS1Button?.title || "SEE HOW",
      buttonUrl: heroData.heroS1Button?.url || ""
    },
    {
      type: (heroData.heroS2VideoUrl ? "video" : "image") as "video" | "image",
      videoSrc: heroData.heroS2VideoUrl || "",
      title: renderTitle(heroData.heroS2Title || ""),
      description: heroData.heroS2Desc || "",
      image: heroData.heroS2ImageUrl || heroData.heroS2Image?.node?.sourceUrl || banner2Img,
      overlay: "bg-gradient-to-r from-[#11253e]/90 via-[#11253e]/50 to-transparent",
      buttonText: heroData.heroS2Button?.title || "SEE HOW",
      buttonUrl: heroData.heroS2Button?.url || ""
    },
    {
      type: (heroData.heroS3VideoUrl ? "video" : "image") as "video" | "image",
      videoSrc: heroData.heroS3VideoUrl || "",
      title: renderTitle(heroData.heroS3Title || ""),
      description: heroData.heroS3Desc || "",
      image: heroData.heroS3ImageUrl || heroData.heroS3Image?.node?.sourceUrl || aiServerImg,
      overlay: "bg-gradient-to-r from-[#11253e]/90 via-[#11253e]/50 to-transparent",
      buttonText: heroData.heroS3Button?.title || "SEE HOW",
      buttonUrl: heroData.heroS3Button?.url || ""
    }
  ].filter((_, i) => {
    const s = i === 0 ? heroData.heroS1Title : i === 1 ? heroData.heroS2Title : heroData.heroS3Title;
    const d = i === 0 ? heroData.heroS1Desc : i === 1 ? heroData.heroS2Desc : heroData.heroS3Desc;
    const v = i === 0 ? heroData.heroS1VideoUrl : i === 1 ? heroData.heroS2VideoUrl : heroData.heroS3VideoUrl;
    return s || d || v;
  }) : defaultBanners;

  // Final fallback if filter removed everything
  const finalBanners = banners.length > 0 ? banners : defaultBanners;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % finalBanners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + finalBanners.length) % finalBanners.length);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, 6000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, finalBanners.length]);

  const banner = finalBanners[currentSlide];

  return (
    <section className="relative h-[500px] md:h-[620px] overflow-hidden group bg-[#11253e]">
      <AnimatePresence mode="wait">
        <Motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image / Video */}
          <div className="absolute inset-0">
            {banner.type === "video" ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                poster={typeof banner.image === 'string' ? banner.image : banner.image.src}
              >
                <source src={banner.videoSrc} type="video/mp4" />
              </video>
            ) : (
              <ImageWithFallback 
                src={banner.image} 
                alt="Banner" 
                className="w-full h-full object-cover"
              />
            )}
            <div className={`absolute inset-0 ${banner.overlay}`}></div>
            
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="pinstripe-hero" width="40" height="40" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#pinstripe-hero)" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex items-center">
            <Motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-4xl border-l-[1px] border-white/20 pl-6 md:pl-12 py-2 md:py-4"
            >
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-[1.1] md:leading-[1.05] mb-6 md:mb-8 tracking-[-0.02em] drop-shadow-sm">
                {banner.title}
              </h1>
              <p className="text-white/90 text-base sm:text-lg md:text-[22px] mb-8 md:mb-12 max-w-2xl font-light leading-relaxed drop-shadow-sm">
                {formatQuotesToBold(banner.description)}
              </p>
              <button className="group/btn flex items-center space-x-4 text-white text-[12px] md:text-[13px] font-medium tracking-normal transition-all duration-300 uppercase cursor-pointer bg-transparent border-none">
                <span>{banner.buttonText || "SEE HOW"}</span>
                <div className="w-10 md:w-12 h-[1px] bg-[#f99d1c] group-hover/btn:w-16 md:group-hover/btn:w-20 transition-all duration-500"></div>
                <ChevronRight size={18} className="text-[#f99d1c] group-hover/btn:translate-x-2 transition-all duration-500" strokeWidth={3} />
              </button>
            </Motion.div>
          </div>
        </Motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 md:bottom-10 left-0 right-0 z-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-end justify-between">
          {/* Indicators */}
          <div className="flex items-center space-x-2 md:space-x-3 mb-2">
            {finalBanners.map((_, i) => (
              <button 
                key={i} 
                onClick={() => {
                  setCurrentSlide(i);
                  setIsAutoPlaying(false);
                }}
                className={`h-[2px] transition-all duration-500 ease-in-out cursor-pointer ${
                  currentSlide === i 
                  ? 'w-8 md:w-16 bg-[#f99d1c]' 
                  : 'w-4 md:w-8 bg-white/30 hover:bg-white/50'
                }`}
              ></button>
            ))}
          </div>

          {/* Next/Previous Controls */}
          <div className="flex items-center space-x-4 md:space-x-6 bg-black/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 border-l border-white/20">
            <button 
              onClick={() => {
                prevSlide();
                setIsAutoPlaying(false);
              }}
              className="text-white/60 hover:text-white transition-colors p-1 cursor-pointer"
            >
              <ChevronLeft size={20} className="md:w-6 md:h-6" strokeWidth={1} />
            </button>
            
            <div className="w-[1px] h-6 md:h-10 bg-white/30"></div>
            
            <button 
              onClick={() => {
                nextSlide();
                setIsAutoPlaying(false);
              }}
              className="text-white/60 hover:text-white transition-colors p-1 cursor-pointer"
            >
              <ChevronRight size={20} className="md:w-6 md:h-6" strokeWidth={1} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}