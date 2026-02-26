"use client";

import { useState, useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const banner1Img = "/assets/log03.png";
const banner2Img = "/assets/bigthinkers.png";
const aiServerImg = "/assets/ai.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Hero() {
  const sliderRef = useRef<Slider | null>(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
  };

  const banners = [
    {
      type: "video",
      videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-digital-connection-concept-24622-large.mp4",
      title: (
        <>
          Future ready with <br />
          <span className="text-[#f99d1c]">Cloud</span>
        </>
      ),
      description: "Stay ahead of the curve with Cloud Solutions. Outpace change with cloud agility.",
      image: banner1Img, // Fallback image
      overlay: "bg-gradient-to-r from-[#11253e]/90 via-[#11253e]/50 to-transparent",
    },
    {
      type: "image",
      title: (
        <>
          Unlock the Power <br />
          of <span className="text-[#f99d1c]">Data</span>
        </>
      ),
      description: "Discover insights that move your business forward. Turn complexity into clarity.",
      image: banner2Img,
      overlay: "bg-gradient-to-r from-[#11253e]/90 via-[#11253e]/50 to-transparent",
    },
    {
      type: "image",
      title: (
        <>
          Elevate with <br />
          <span className="text-[#f99d1c]">AI</span>
        </>
      ),
      description: "Redefine the art of possibilities. Transform ideas into reality.",
      image: aiServerImg,
      overlay: "bg-gradient-to-r from-[#11253e]/90 via-[#11253e]/50 to-transparent",
    },
  ];

  return (
    <section className="relative h-[500px] md:h-[620px] overflow-hidden group">
      <Slider ref={sliderRef} {...settings} className="h-full">
        {banners.map((banner, index) => (
          <div key={index} className="relative h-[500px] md:h-[620px] outline-none">
            {/* Background Image / Video */}
            <div className="absolute inset-0">
              {banner.type === "video" ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  poster={typeof banner.image === 'string' ? banner.image : undefined}
                >
                  <source src={banner.videoSrc} type="video/mp4" />
                </video>
              ) : (
                <ImageWithFallback 
                  src={banner.image as string} 
                  alt="Banner" 
                  className="w-full h-full object-cover"
                />
              )}
              <div className={`absolute inset-0 ${banner.overlay}`}></div>
              
              {/* Pattern Overlay to match Industries section style */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="pinstripe" width="40" height="40" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#pinstripe)" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex items-center">
              <div className="max-w-4xl border-l-[1px] border-white/20 pl-6 md:pl-12 py-2 md:py-4">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-[1.1] md:leading-[1.05] mb-6 md:mb-8 tracking-[-0.02em] drop-shadow-sm">
                  {banner.title}
                </h1>
                <p className="text-white/90 text-base sm:text-lg md:text-[22px] mb-8 md:mb-12 max-w-2xl font-light leading-relaxed drop-shadow-sm">
                  {banner.description}
                </p>
                <button className="group/btn flex items-center space-x-4 text-white text-[12px] md:text-[13px] font-medium tracking-normal transition-all duration-300 uppercase cursor-pointer">
                  <span>SEE HOW</span>
                  <div className="w-10 md:w-12 h-[1px] bg-[#f99d1c] group-hover/btn:w-16 md:group-hover/btn:w-20 transition-all duration-500"></div>
                  <ChevronRight size={18} className="text-[#f99d1c] group-hover/btn:translate-x-2 transition-all duration-500" strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Bottom Navigation Section (As per updated request) */}
      <div className="absolute bottom-6 md:bottom-10 left-0 right-0 z-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-end justify-between">
          {/* Horizontal Indicators (One per slide) */}
          <div className="flex items-center space-x-2 md:space-x-3 mb-2">
            {banners.map((_, i) => (
              <div 
                key={i} 
                className={`h-[2px] transition-all duration-500 ease-in-out ${
                  currentSlide === i 
                  ? 'w-8 md:w-16 bg-[#f99d1c]' 
                  : 'w-4 md:w-8 bg-white/30'
                }`}
              ></div>
            ))}
          </div>

          {/* Next/Previous Controls (< | >) */}
          <div className="flex items-center space-x-4 md:space-x-6 bg-black/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 border-l border-white/20">
            <button 
              onClick={() => sliderRef.current?.slickPrev()}
              className="text-white/60 hover:text-white transition-colors p-1"
            >
              <ChevronLeft size={20} className="md:w-6 md:h-6" strokeWidth={1} />
            </button>
            
            <div className="w-[1px] h-6 md:h-10 bg-white/30"></div>
            
            <button 
              onClick={() => sliderRef.current?.slickNext()}
              className="text-white/60 hover:text-white transition-colors p-1"
            >
              <ChevronRight size={20} className="md:w-6 md:h-6" strokeWidth={1} />
            </button>
          </div>
        </div>
      </div>

      {/* Custom Styles for Slick Dots */}
      <style>{`
        .custom-dots {
          position: absolute;
          bottom: 25px;
          right: 20px;
          width: auto;
          display: flex !important;
          flex-direction: row;
          gap: 10px;
        }
        @media (min-width: 768px) {
          .custom-dots {
            bottom: 40px;
            right: 50px;
            flex-direction: column;
            gap: 15px;
          }
        }
        .custom-dots li {
          margin: 0;
          width: 20px;
          height: 1px;
        }
        @media (min-width: 768px) {
          .custom-dots li {
            width: 30px;
          }
        }
        .custom-dots li button {
          width: 20px;
          height: 1px;
          padding: 0;
        }
        @media (min-width: 768px) {
          .custom-dots li button {
            width: 30px;
          }
        }
        .custom-dots li button:before {
          content: '';
          width: 15px;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
        }
        @media (min-width: 768px) {
          .custom-dots li button:before {
            width: 20px;
          }
        }
        .custom-dots li.slick-active {
          width: 30px;
        }
        @media (min-width: 768px) {
          .custom-dots li.slick-active {
            width: 40px;
          }
        }
        .custom-dots li.slick-active button:before {
          width: 30px;
          background-color: white;
        }
        @media (min-width: 768px) {
          .custom-dots li.slick-active button:before {
            width: 40px;
          }
        }
      `}</style>
    </section>
  );
}