"use client";

import { 
  Building2, 
  ShoppingCart, 
  Factory, 
  HeartPulse, 
  Shield, 
  Film,
  ChevronRight 
} from "lucide-react";
import { motion } from "motion/react";
import Slider from "react-slick";
import { useRef } from "react";

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Industries() {
  const sliderRef = useRef<Slider>(null);

  const industries = [
    { title: "Banking & Financial Services", icon: Building2 },
    { title: "Retail & eCommerce", icon: ShoppingCart },
    { title: "Manufacturing & Automotive", icon: Factory },
    { title: "Healthcare & Pharma", icon: HeartPulse },
    { title: "Government & PSUs", icon: Shield },
    { title: "Media & Entertainment", icon: Film }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 5,
        }
      }
    ]
  };

  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-[#e6e2d8]">
      {/* Background Image Removed - Maintaining structural patterns */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pinstripe-industries" width="40" height="40" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="40" stroke="#11253e" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pinstripe-industries)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
          <div className="flex-1 text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#11253e] text-3xl sm:text-4xl md:text-[40px] font-medium tracking-normal leading-tight mb-4"
            >
              Expertise Across Industries
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#11253e] text-sm md:text-base font-light max-w-3xl leading-relaxed mx-auto md:mx-0"
            >
              Our expertise spans 14 industries, including banking, insurance, telecommunications, media, entertainment, distribution, and retail.
            </motion.p>
          </div>
          
          <div className="flex items-center gap-4 pb-2 mx-auto md:mx-0">
            <button 
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-12 h-10 flex items-center justify-center bg-[#1d1d1b] text-white rounded-[20px] hover:bg-[#f99d1c] transition-colors cursor-pointer"
            >
              <ChevronRight className="rotate-180" size={18} />
            </button>
            <button 
              onClick={() => sliderRef.current?.slickNext()}
              className="w-12 h-10 flex items-center justify-center bg-[#1d1d1b] text-white rounded-[20px] hover:bg-[#f99d1c] transition-colors cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        
        <div className="industry-slider-container -mx-px">
          <Slider ref={sliderRef} {...settings}>
            {industries.map((industry, i) => (
              <div key={i} className="px-0 sm:px-2">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white p-8 border border-transparent hover:shadow-xl transition-all duration-500 cursor-pointer relative overflow-hidden h-[240px] flex flex-col"
                >
                  <div className="mb-8">
                    <industry.icon className="w-10 h-10 text-[#11253e]" strokeWidth={1} />
                  </div>

                  <div className="mt-auto flex justify-between items-end">
                    <h3 className="text-[#11253e] text-[12px] md:text-[13px] font-medium uppercase tracking-normal leading-tight group-hover:text-[#f99d1c] transition-colors duration-300 max-w-[140px]">
                      {industry.title}
                    </h3>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#f99d1c] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 shrink-0">
                      <ChevronRight size={18} className="md:w-5 md:h-5" />
                    </div>
                  </div>
                  
                  {/* Decorative orange diagonal lines like in reference image */}
                  <div className="absolute bottom-0 right-0 w-full h-1/3 opacity-20 pointer-events-none overflow-hidden">
                    <svg width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="none">
                      <pattern id="diagonal-lines" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
                        <line x1="0" y1="0" x2="0" y2="10" stroke="#f99d1c" strokeWidth="1" />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        /* 
           FIX: DO NOT add 'display: flex !important' to .slick-track.
           Adding flex forces all slides to squeeze into a single row, 
           breaking the 'slidesToShow: 1' setting on mobile.
        */
        .industry-slider-container .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </section>
  );
}
