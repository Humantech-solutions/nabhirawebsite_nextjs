"use client";
import { 
  Building2, 
  ShoppingCart, 
  Factory, 
  HeartPulse, 
  Shield, 
  Film,
  ChevronRight,
  ChevronLeft,
  LayoutGrid
} from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IndustriesProps {
  data?: {
    iTitle?: string;
    iDesc?: string;
    iI1Name?: string;
    iI1Icon?: string;
    iI1IconImg?: { node: { sourceUrl: string } };
    iI2Name?: string;
    iI2Icon?: string;
    iI2IconImg?: { node: { sourceUrl: string } };
    iI3Name?: string;
    iI3Icon?: string;
    iI3IconImg?: { node: { sourceUrl: string } };
    iI4Name?: string;
    iI4Icon?: string;
    iI4IconImg?: { node: { sourceUrl: string } };
    iI5Name?: string;
    iI5Icon?: string;
    iI5IconImg?: { node: { sourceUrl: string } };
    iI6Name?: string;
    iI6Icon?: string;
    iI6IconImg?: { node: { sourceUrl: string } };
  };
}

export function Industries({ data }: IndustriesProps) {
  const sliderRef = useRef<Slider>(null);

  const iconMap: Record<string, any> = {
    Building2, ShoppingCart, Factory, HeartPulse, Shield, Film, LayoutGrid
  };

  const dynamicItems = [];
  
  if (data?.iI1Name) {
    dynamicItems.push({
      title: data.iI1Name,
      icon: (data.iI1IconImg as any)?.node?.sourceUrl || (data.iI1IconImg as any)?.sourceUrl || iconMap[data.iI1Icon || ""] || LayoutGrid
    });
  }
  if (data?.iI2Name) {
    dynamicItems.push({
      title: data.iI2Name,
      icon: (data.iI2IconImg as any)?.node?.sourceUrl || (data.iI2IconImg as any)?.sourceUrl || iconMap[data.iI2Icon || ""] || LayoutGrid
    });
  }
  if (data?.iI3Name) {
    dynamicItems.push({
      title: data.iI3Name,
      icon: (data.iI3IconImg as any)?.node?.sourceUrl || (data.iI3IconImg as any)?.sourceUrl || iconMap[data.iI3Icon || ""] || LayoutGrid
    });
  }
  if (data?.iI4Name) {
    dynamicItems.push({
      title: data.iI4Name,
      icon: (data.iI4IconImg as any)?.node?.sourceUrl || (data.iI4IconImg as any)?.sourceUrl || iconMap[data.iI4Icon || ""] || LayoutGrid
    });
  }
  if (data?.iI5Name) {
    dynamicItems.push({
      title: data.iI5Name,
      icon: (data.iI5IconImg as any)?.node?.sourceUrl || (data.iI5IconImg as any)?.sourceUrl || iconMap[data.iI5Icon || ""] || LayoutGrid
    });
  }
  if (data?.iI6Name) {
    dynamicItems.push({
      title: data.iI6Name,
      icon: (data.iI6IconImg as any)?.node?.sourceUrl || (data.iI6IconImg as any)?.sourceUrl || iconMap[data.iI6Icon || ""] || LayoutGrid
    });
  }

  const industries = dynamicItems.length > 0 ? dynamicItems : [
    { title: "Banking & Financial Services", icon: Building2 },
    { title: "Retail & eCommerce", icon: ShoppingCart },
    { title: "Manufacturing & Automotive", icon: Factory },
    { title: "Healthcare & Pharma", icon: HeartPulse },
    { title: "Government & PSUs", icon: Shield },
    { title: "Media & Entertainment", icon: Film }
  ];

  const sectionTitle = data?.iTitle || "Expertise Across Industries";
  const sectionDesc = data?.iDesc || "Our expertise spans 14 industries, including banking, insurance, telecommunications, media, entertainment, distribution, and retail.";

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

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
              {sectionTitle}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#11253e] text-sm md:text-base font-light max-w-3xl leading-relaxed mx-auto md:mx-0"
            >
              {sectionDesc}
            </motion.p>
          </div>
          
          <div className="flex items-center gap-4 pb-2 mx-auto md:mx-0">
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
        
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {industries.map((industry, i) => (
              <div key={i} className="px-2 outline-none">
                <div className="group bg-white p-8 border border-transparent hover:shadow-xl transition-all duration-500 cursor-pointer relative overflow-hidden h-[240px] flex flex-col">
                  <div className="mb-8">
                    {typeof industry.icon !== 'string' ? (
                      <industry.icon className="w-10 h-10 text-[#11253e]" strokeWidth={1} />
                    ) : (
                      <img src={industry.icon} alt={industry.title} className="w-10 h-10 object-contain text-[#11253e]" />
                    )}
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
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
