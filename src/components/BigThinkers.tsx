"use client";
import Image from "next/image";

import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { formatQuotesToBold } from "../lib/utils";
import sundarImg from "../assets/logo2.png";

interface BigThinkersProps {
  data?: {
    bSecTitle?: string;
    bTitle?: string;
    bAuthor?: string;
    bBtnText?: string;
    bBtnUrl?: string;
    bImage?: { node: { sourceUrl: string } };
    bImageUrl?: string;
  };
}

export function BigThinkers({ data }: BigThinkersProps) {
  const secTitle = data?.bSecTitle || "THE VISIONARY MINDS";
  const content = data?.bTitle || "AI is the most profound shift of our lifetimes, bigger than the move to personal computing or mobile";
  const author = data?.bAuthor || "Sundar Pichai (CEO, Google)";
  const buttonText = data?.bBtnText || "READ MORE";
  const buttonUrl = data?.bBtnUrl || "#";

  // Determine if we have an external URL or should use the local static asset
  const externalImageSrc: string | null =
    data?.bImageUrl ||
    (data?.bImage as any)?.node?.sourceUrl ||
    (data?.bImage as any)?.sourceUrl ||
    null;

  return (
    <section className="bg-[#0b1b3d] text-white py-24 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="space-y-8 md:space-y-10 z-10 text-center md:text-left">
          <div className="flex flex-col space-y-1 items-center md:items-start">
            <h3 className="text-[#f99d1c] text-[10px] md:text-xs font-black tracking-[0.4em] uppercase">
              {secTitle}
            </h3>
            <div className="h-[2px] w-12 bg-[#f99d1c]"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight leading-tight mb-4 max-w-xl mx-auto md:mx-0">
            {formatQuotesToBold(content)}
          </h2>
          <div className="text-[#f99d1c] text-lg md:text-xl font-light italic mb-8 md:mb-10">
            — {author}
          </div>
        </div>
        
        <div className="relative mt-8 md:mt-0">
          <div className="absolute -inset-10 bg-[#f99d1c]/10 blur-3xl rounded-full"></div>
          {externalImageSrc ? (
            /* External URL from WordPress ACF */
            <ImageWithFallback
              src={externalImageSrc}
              alt={author}
              width={800}
              height={800}
              className="w-full h-auto max-w-2xl mx-auto relative z-10 grayscale hover:grayscale-0 transition-all duration-700 rounded-sm shadow-2xl object-cover"
            />
          ) : (
            /* Local static asset — use Next.js Image with proper dimensions */
            <Image
              src={sundarImg}
              alt={author}
              className="w-full max-w-2xl mx-auto relative z-10 grayscale hover:grayscale-0 transition-all duration-700 rounded-sm shadow-2xl"
              placeholder="blur"
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}
