"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  Building2,
  ShoppingCart,
  Factory,
  HeartPulse,
  Shield,
  Film,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { motion as Motion } from "motion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { formatQuotesToBold } from "../lib/utils";

export function Industries({ data, industries: wpIndustries }: any) {
  const sliderRef = useRef<Slider>(null);

  const sectionTitle = data?.iTitle || "Expertise Across Industries";
  const sectionDesc =
    data?.iDesc || "Transforming Industries with Cloud, Data and AI.";

  const fallbackIndustries = [
    { title: "Banking & Financial Services", icon: Building2 },
    { title: "Retail & eCommerce", icon: ShoppingCart },
    { title: "Manufacturing & Automotive", icon: Factory },
    { title: "Healthcare & Pharma", icon: HeartPulse },
    { title: "Media & Entertainment", icon: Film },
    { title: "Government & PSUs", icon: Shield },
  ];

  // Map WP Industries to match UI requirements if available
  const mappedIndustries =
    wpIndustries && wpIndustries.length > 0
      ? wpIndustries.map((ind: any) => ({
        title: ind.title,
        slug: ind.slug,
        href: ind.slug ? `/industries/${ind.slug}` : null,
        icon: Building2, // Default icon, would ideally be mapped from taxonomy/ACF
        image: ind.featuredImage?.node?.sourceUrl,
      }))
      : fallbackIndustries;

  const renderIndustries = mappedIndustries;

  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-[#e6e2d8]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="pinstripe-industries"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="40"
                stroke="#11253e"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pinstripe-industries)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
          <div className="flex-1 text-center md:text-left">
            <Motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#11253e] text-3xl sm:text-4xl md:text-[40px] font-medium tracking-normal leading-tight mb-4"
            >
              {formatQuotesToBold(sectionTitle)}
            </Motion.h2>
            <Motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#11253e] text-sm md:text-base font-light max-w-3xl leading-relaxed mx-auto md:mx-0"
            >
              {formatQuotesToBold(sectionDesc)}
            </Motion.p>
          </div>

          <div className="hidden md:flex items-center gap-4 pb-2">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-12 h-10 flex items-center justify-center bg-[#1d1d1b] text-white rounded-[20px] hover:bg-[#f99d1c] transition-colors cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="w-12 h-10 flex items-center justify-center bg-[#1d1d1b] text-white rounded-[20px] hover:bg-[#f99d1c] transition-colors cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {renderIndustries.map((industry: any, i: number) => {
            const Icon = industry.icon;
          const card = (
          <div className="group bg-white p-4 md:p-5 border border-transparent hover:shadow-xl transition-all duration-500 cursor-pointer relative overflow-hidden h-[160px] md:h-[180px] flex flex-col">
            <div className="mb-4">
              <Icon
                className="w-7 h-7 md:w-8 md:h-8 text-[#11253e]"
                strokeWidth={1}
              />
            </div>

            <div className="mt-auto flex flex-col gap-[1rem]">
              <h3 className="text-[#11253e] text-[12px] md:text-[13px] font-medium uppercase tracking-normal leading-tight group-hover:text-[#f99d1c] transition-colors duration-300 max-w-[140px]">
                {formatQuotesToBold(industry.title)}
              </h3>
              <div className="w-7 h-7 rounded-full bg-[#f99d1c] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 self-start">
                <ChevronRight size={14} />
              </div>
            </div>

            {/* Decorative orange diagonal lines */}
            <div className="absolute bottom-0 right-0 w-full h-1/3 opacity-20 pointer-events-none overflow-hidden">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 200 100"
                preserveAspectRatio="none"
              >
                <pattern
                  id={`diagonal-lines-ind-${i}`}
                  patternUnits="userSpaceOnUse"
                  width="10"
                  height="10"
                  patternTransform="rotate(45)"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="10"
                    stroke="#f99d1c"
                    strokeWidth="1"
                  />
                </pattern>
                <rect
                  width="100%"
                  height="100%"
                  fill={`url(#diagonal-lines-ind-${i})`}
                />
              </svg>
            </div>
          </div>
          );

          return (
          <Motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            {(industry as any).href ? (
              <Link href={(industry as any).href}>{card}</Link>
            ) : (
              card
            )}
          </Motion.div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
