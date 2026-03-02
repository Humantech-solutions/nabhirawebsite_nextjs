"use client";
import { 
  Building2, 
  ShoppingCart, 
  Factory, 
  HeartPulse, 
  Shield, 
  Film,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";

export function Industries() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(5);

  const industries = [
    { title: "Banking & Financial Services", icon: Building2 },
    { title: "Retail & eCommerce", icon: ShoppingCart },
    { title: "Manufacturing & Automotive", icon: Factory },
    { title: "Healthcare & Pharma", icon: HeartPulse },
    { title: "Government & PSUs", icon: Shield },
    { title: "Media & Entertainment", icon: Film }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleItems(1);
      else if (window.innerWidth < 1024) setVisibleItems(3);
      else setVisibleItems(5);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % industries.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + industries.length) % industries.length);
  };

  // Create a looped array for the slider effect
  const displayIndustries = [];
  for (let i = 0; i < visibleItems; i++) {
    displayIndustries.push(industries[(startIndex + i) % industries.length]);
  }

  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-[#e6e2d8]">
      {/* Background Pattern */}
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
              onClick={prevSlide}
              className="w-12 h-10 flex items-center justify-center bg-[#1d1d1b] text-white rounded-[20px] hover:bg-[#f99d1c] transition-colors cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-10 flex items-center justify-center bg-[#1d1d1b] text-white rounded-[20px] hover:bg-[#f99d1c] transition-colors cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="flex -mx-2 overflow-hidden">
            {displayIndustries.map((industry, i) => (
              <motion.div 
                key={`${startIndex}-${i}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="px-2 w-full sm:w-1/3 lg:w-1/5 shrink-0"
              >
                <div className="group bg-white p-8 border border-transparent hover:shadow-xl transition-all duration-500 cursor-pointer relative overflow-hidden h-[240px] flex flex-col">
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
                  
                  {/* Decorative orange diagonal lines */}
                  <div className="absolute bottom-0 right-0 w-full h-1/3 opacity-20 pointer-events-none overflow-hidden">
                    <svg width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="none">
                      <pattern id="diagonal-lines-ind" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
                        <line x1="0" y1="0" x2="0" y2="10" stroke="#f99d1c" strokeWidth="1" />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#diagonal-lines-ind)" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
