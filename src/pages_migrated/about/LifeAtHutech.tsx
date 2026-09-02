"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import {
  HeartHandshake,
  Cpu,
  Award,
  ChevronRight,
  ChevronLeft,
  X,
  Sparkles,
  Images,
  Users,
  Lightbulb,
  GraduationCap,
  PartyPopper,
  TrendingUp,
  Briefcase,
  ExternalLink,
  Flame
} from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  countText: string;
  photoCount: number;
  coverImage: string;
  category: string;
  description: string;
  photos: {
    url: string;
    caption: string;
  }[];
}

const GALLERY_DATA: GalleryItem[] = [
  {
    id: "green-movement",
    title: "Hutech Green Movement",
    countText: "3 Photos",
    photoCount: 3,
    coverImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
    category: "Sustainability",
    description: "Hutech team members coming together for environmental preservation and sapling plantation drive.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80",
        caption: "Sapling plantation and environmental stewardship drive by the Hutech green squad."
      },
      {
        url: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&w=1600&q=80",
        caption: "Nurturing greenery and promoting eco-conscious corporate culture across our campuses."
      },
      {
        url: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=1600&q=80",
        caption: "Team members united for a greener, sustainable future."
      }
    ]
  },
  {
    id: "christmas-celebration-2024",
    title: "Christmas Celebration",
    countText: "5 Photos",
    photoCount: 5,
    coverImage: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1200&q=80",
    category: "Celebrations",
    description: "Spreading holiday cheer, festive decorations, and Secret Santa joys in the office.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1600&q=80",
        caption: "Festive office Christmas decorations and holiday lights."
      },
      {
        url: "https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?auto=format&fit=crop&w=1600&q=80",
        caption: "Colleagues exchanging Secret Santa gifts and warm holiday wishes."
      },
      {
        url: "https://images.unsplash.com/photo-1543258103-a62bd9610bd6?auto=format&fit=crop&w=1600&q=80",
        caption: "Holiday games and sweet celebrations across teams."
      },
      {
        url: "https://images.unsplash.com/photo-1513297887119-d46091b24bfa?auto=format&fit=crop&w=1600&q=80",
        caption: "Cozy holiday cheer and joyful team moments."
      },
      {
        url: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1600&q=80",
        caption: "Celebrating togetherness and ringing in the festive season."
      }
    ]
  },
  {
    id: "onam-celebrations-2024",
    title: "Onam Celebrations",
    countText: "3 Photos",
    photoCount: 3,
    coverImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    category: "Culture",
    description: "Vibrant traditional floral pookalams, cultural attire, and festive celebration of harvest.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
        caption: "Traditional ethnic attire and joyful cultural celebrations."
      },
      {
        url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=80",
        caption: "Creating vibrant floral rangoli pookalam together."
      },
      {
        url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80",
        caption: "Team bonding over rich traditions, laughter, and festivities."
      }
    ]
  },
  {
    id: "independence-day-2024",
    title: "Independence Day Celebration 2024",
    countText: "9 Photos",
    photoCount: 9,
    coverImage: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1200&q=80",
    category: "National Day",
    description: "Commemorating India's 78th Independence Day with tricolor pride, cultural events, and unity.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1600&q=80",
        caption: "Tricolor spirit and patriotic celebrations at Hutech headquarters."
      },
      {
        url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80",
        caption: "Employee cultural showcases and musical tributes."
      },
      {
        url: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&w=1600&q=80",
        caption: "Commemorating national unity and democratic pride."
      },
      {
        url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
        caption: "Collaborative engagement activities celebrating our shared heritage."
      },
      {
        url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
        caption: "Keynote address by leadership on innovation empowering our nation."
      },
      {
        url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1600&q=80",
        caption: "Interactive team quizzes and cultural fellowship."
      },
      {
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
        caption: "All-hands group photo celebrating unity in diversity."
      },
      {
        url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
        caption: "Engineering teams bringing national colors to office workspace."
      },
      {
        url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80",
        caption: "Sweet distribution and festive camaraderie."
      }
    ]
  },
  {
    id: "yoga-day",
    title: "Yoga Day Celebrations",
    countText: "6 Photos",
    photoCount: 6,
    coverImage: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
    category: "Wellness",
    description: "Promoting physical health, mindfulness, and work-life balance with guided wellness sessions.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1600&q=80",
        caption: "Guided asanas and mindfulness breathing session."
      },
      {
        url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
        caption: "Morning meditation for mental clarity and stress relief."
      },
      {
        url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
        caption: "Postural alignment and ergonomics workshop for software engineers."
      },
      {
        url: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=1600&q=80",
        caption: "Deep relaxation and holistic wellbeing techniques."
      },
      {
        url: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=1600&q=80",
        caption: "Energizing stretching routines for active workplace health."
      },
      {
        url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
        caption: "Rejuvenated Hutech team embracing healthy lifestyle habits."
      }
    ]
  },
  {
    id: "iot-expo",
    title: "IoT Expo",
    countText: "8 Photos",
    photoCount: 8,
    coverImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    category: "Technology",
    description: "Showcasing intelligent IoT solutions, embedded hardware demos, and enterprise edge computing.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80",
        caption: "Interactive IoT hardware and edge compute demonstrations."
      },
      {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
        caption: "Embedded sensors and cloud telemetry architecture review."
      },
      {
        url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80",
        caption: "Robotics and automated testing pipelines."
      },
      {
        url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
        caption: "Real-time edge analytics and dashboard displays."
      },
      {
        url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
        caption: "AI model inference at the edge demonstration."
      },
      {
        url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
        caption: "Engineering leads discussing smart industrial automation."
      },
      {
        url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80",
        caption: "Collaborative tech hackathon and device prototyping."
      },
      {
        url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
        caption: "Next-gen enterprise hardware exhibits."
      }
    ]
  },
  {
    id: "team-lunch",
    title: "Team Lunch",
    countText: "3 Photos",
    photoCount: 3,
    coverImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    category: "Team Bonding",
    description: "Great food, great conversations, and building lifelong friendships beyond the keyboard.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80",
        caption: "Team members bonding over delicious lunch outings."
      },
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
        caption: "Casual moments and spontaneous laughter outside sprint meetings."
      },
      {
        url: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1600&q=80",
        caption: "Celebrating project milestones with celebratory culinary treats."
      }
    ]
  },
  {
    id: "onam-celebrations-2023",
    title: "Onam Celebrations 2023",
    countText: "5 Photos",
    photoCount: 5,
    coverImage: "https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?auto=format&fit=crop&w=1200&q=80",
    category: "Culture",
    description: "Memories of the vibrant Onam festivities, traditional games, and feasts from 2023.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?auto=format&fit=crop&w=1600&q=80",
        caption: "Cultural dance and musical showcase during Onam 2023."
      },
      {
        url: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1600&q=80",
        caption: "Festive campus decoration and traditional welcomes."
      },
      {
        url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
        caption: "Cross-functional teams coming together in ethnic elegance."
      },
      {
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
        caption: "Team games and lighthearted cultural competitions."
      },
      {
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
        caption: "Group celebration of unity, harmony, and togetherness."
      }
    ]
  },
  {
    id: "christmas-celebration-2023",
    title: "Christmas Celebration 2023",
    countText: "4 Photos",
    photoCount: 4,
    coverImage: "https://images.unsplash.com/photo-1543258103-a62bd9610bd6?auto=format&fit=crop&w=1200&q=80",
    category: "Celebrations",
    description: "Office holiday spirit, carols, Christmas feast, and year-end celebrations in 2023.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1543258103-a62bd9610bd6?auto=format&fit=crop&w=1600&q=80",
        caption: "Year-end holiday celebrations and holiday decorations."
      },
      {
        url: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1600&q=80",
        caption: "Spreading warmth, joy, and gratitude as a team."
      },
      {
        url: "https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?auto=format&fit=crop&w=1600&q=80",
        caption: "Secret Santa gift distributions and holiday laughter."
      },
      {
        url: "https://images.unsplash.com/photo-1513297887119-d46091b24bfa?auto=format&fit=crop&w=1600&q=80",
        caption: "Wrapping up the year with optimism and festive cheer."
      }
    ]
  },
  {
    id: "independence-day-2023",
    title: "Independence Day Celebration 2023",
    countText: "3 Photos",
    photoCount: 3,
    coverImage: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&w=1200&q=80",
    category: "National Day",
    description: "Patriotic tributes, national anthem ceremony, and tricolor badges in 2023.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&w=1600&q=80",
        caption: "Patriotic celebrations honoring national freedom and unity."
      },
      {
        url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80",
        caption: "Employee performances highlighting unity and cultural harmony."
      },
      {
        url: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1600&q=80",
        caption: "Proud Hutech team standing united under the tricolor."
      }
    ]
  },
  {
    id: "annual-day-2022",
    title: "Annual Day Celebrations 2022",
    countText: "4 Photos",
    photoCount: 4,
    coverImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    category: "Milestones",
    description: "Grand annual gala, leadership awards, employee excellence honors, and evening musical night.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80",
        caption: "Grand Annual Day stage setup and celebration of yearly triumphs."
      },
      {
        url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80",
        caption: "Recognizing outstanding engineering contributions with excellence awards."
      },
      {
        url: "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=1600&q=80",
        caption: "Dynamic dance and musical performances by talented team members."
      },
      {
        url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600&q=80",
        caption: "Celebrating five-year and ten-year milestone pillars of Hutech."
      }
    ]
  }
];

export default function LifeAtHutech({ wordpressData }: { wordpressData?: any }) {
  const [activeLightbox, setActiveLightbox] = useState<{
    galleryIndex: number;
    photoIndex: number;
  } | null>(null);

  const openLightbox = (galleryIndex: number, photoIndex = 0) => {
    setActiveLightbox({ galleryIndex, photoIndex });
  };

  const closeLightbox = () => {
    setActiveLightbox(null);
  };

  const nextPhoto = useCallback(() => {
    if (!activeLightbox) return;
    const currentGallery = GALLERY_DATA[activeLightbox.galleryIndex];
    if (activeLightbox.photoIndex < currentGallery.photos.length - 1) {
      setActiveLightbox({
        ...activeLightbox,
        photoIndex: activeLightbox.photoIndex + 1
      });
    } else {
      // Loop to next gallery or back to first photo
      const nextGalleryIndex = (activeLightbox.galleryIndex + 1) % GALLERY_DATA.length;
      setActiveLightbox({
        galleryIndex: nextGalleryIndex,
        photoIndex: 0
      });
    }
  }, [activeLightbox]);

  const prevPhoto = useCallback(() => {
    if (!activeLightbox) return;
    if (activeLightbox.photoIndex > 0) {
      setActiveLightbox({
        ...activeLightbox,
        photoIndex: activeLightbox.photoIndex - 1
      });
    } else {
      const prevGalleryIndex =
        (activeLightbox.galleryIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length;
      const prevGalleryPhotos = GALLERY_DATA[prevGalleryIndex].photos;
      setActiveLightbox({
        galleryIndex: prevGalleryIndex,
        photoIndex: prevGalleryPhotos.length - 1
      });
    }
  }, [activeLightbox]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeLightbox) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };

    if (activeLightbox) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeLightbox, nextPhoto, prevPhoto]);

  return (
    <div className="bg-white min-h-screen text-[#11253e] selection:bg-[#f99d1c]/20 selection:text-[#11253e]">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION
          ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[560px] md:min-h-[640px] lg:min-h-[700px] flex items-center overflow-hidden bg-[#0b1b3d]">
        {/* Background Image with optimized contrast */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
            alt="Life at Hutech Solutions Team Collaborating in Modern Office"
            className="w-full h-full object-cover scale-105"
          />
          {/* Multi-layered corporate gradient overlays for readability and luxury feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d] via-[#0b1b3d]/85 to-[#0b1b3d]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d] via-transparent to-[#0b1b3d]/60"></div>
          
          {/* Subtle Pinstripe Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="pinstripe-life" width="40" height="40" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pinstripe-life)" />
            </svg>
          </div>

          {/* Ambient Glow Orbs */}
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#006CAD] opacity-20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#f99d1c] opacity-15 rounded-full blur-[100px] pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-20 md:py-28">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl space-y-6"
          >
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] text-white/60 font-semibold">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/30">/</span>
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-[#f99d1c]">Life at Hutech</span>
            </nav>

            {/* Small Label Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#f99d1c] text-xs font-semibold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#f99d1c] animate-pulse"></span>
              <span>Life at Hutech</span>
            </div>

            {/* Main H1 */}
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#f99d1c]">Hutech Family</span>
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-white/80 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-2xl pt-2">
              At Hutech Solutions, we don&apos;t just build software; we build careers and lifelong relationships. Discover what makes us more than just a company.
            </p>

            {/* Action Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#gallery-section"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-md bg-[#f99d1c] hover:bg-[#e18c31] text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-[#f99d1c]/25 hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Explore Life at Hutech</span>
                <ChevronRight size={16} />
              </a>
              <Link
                href="/careers"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <Briefcase size={16} className="text-[#f99d1c]" />
                <span>Join Our Team</span>
              </Link>
            </div>
          </Motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none">
          <Motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-white/50 text-[10px] uppercase tracking-widest font-medium space-y-1.5"
          >
            <span>Scroll to Explore</span>
            <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1">
              <div className="w-1 h-2 rounded-full bg-[#f99d1c]"></div>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. GALLERY SECTION
          ───────────────────────────────────────────────────────────── */}
      <section id="gallery-section" className="py-20 md:py-28 bg-[#f8fafc] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#006CAD]/10 text-[#006CAD] text-xs font-semibold uppercase tracking-widest mb-4">
              <Sparkles size={13} className="text-[#f99d1c]" />
              <span>Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11253e] tracking-tight mb-6">
              Take a Sneak Peek at <span className="text-[#006CAD]">Life at Hutech</span>
            </h2>
            <p className="text-[#475567] text-base sm:text-lg leading-relaxed font-light">
              A visual journey through our celebrations, team-building activities, and everyday excellence across our global offices.
            </p>
          </div>

          {/* Responsive Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7">
            {GALLERY_DATA.map((item, index) => (
              <Motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                onClick={() => openLightbox(index, 0)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 cursor-pointer flex flex-col h-full hover:-translate-y-1.5"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <ImageWithFallback
                    src={item.coverImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                  {/* Photo Count Badge (Top Right) */}
                  <div className="absolute top-3.5 right-3.5 z-10 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium flex items-center space-x-1.5 shadow-md">
                    <Images size={12} className="text-[#f99d1c]" />
                    <span>{item.countText}</span>
                  </div>

                  {/* Category Pill (Top Left) */}
                  <div className="absolute top-3.5 left-3.5 z-10 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#11253e] text-[10px] font-semibold tracking-wider uppercase shadow-sm">
                    {item.category}
                  </div>

                  {/* Quick View Hover Icon Button (Center) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-[#f99d1c] text-white flex items-center justify-center shadow-lg">
                      <Images size={20} />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#11253e] group-hover:text-[#006CAD] transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#475567] font-light line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#006CAD] group-hover:text-[#f99d1c] transition-colors">
                    <span>View Photo Gallery</span>
                    <ChevronRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. BENEFITS SECTION ("More Than a Workplace — A Place to Thrive")
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Subtle Background Geometry */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#006CAD]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f99d1c]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#f99d1c]/10 text-[#f99d1c] text-xs font-semibold uppercase tracking-widest mb-4">
              <HeartHandshake size={13} />
              <span>Benefits</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11253e] tracking-tight mb-6 leading-tight">
              More Than a Workplace — <span className="text-[#006CAD]">A Place to Thrive</span>
            </h2>
            <p className="text-[#475567] text-base sm:text-lg leading-relaxed font-light">
              We empower our people with the trust, freedom, and cutting-edge resources to do the best work of their careers.
            </p>
          </div>

          {/* 3 Premium Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Card 1: Great Place, Great Culture */}
            <Motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative bg-[#f8fafc] rounded-3xl p-8 lg:p-9 border border-slate-200/80 hover:border-[#006CAD]/40 hover:shadow-2xl hover:shadow-[#006CAD]/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-7 bg-slate-200">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                    alt="Great Place Great Culture at Hutech Solutions"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11253e]/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-[#006CAD]">
                    <HeartHandshake size={24} />
                  </div>
                </div>

                <div className="inline-block px-2.5 py-1 rounded-md bg-[#006CAD]/10 text-[#006CAD] text-[11px] font-bold uppercase tracking-wider mb-3">
                  01. Culture & Well-being
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#11253e] mb-4 group-hover:text-[#006CAD] transition-colors">
                  Great Place, Great Culture
                </h3>
                <p className="text-[#475567] text-sm sm:text-base leading-relaxed font-light">
                  At Hutech Solutions, we build a culture rooted in collaboration, innovation, and growth, where every team member feels valued and supported. It&apos;s a place where you can truly thrive, both personally and professionally.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center text-xs font-semibold text-[#006CAD] group-hover:text-[#f99d1c] transition-colors">
                <span>Inclusive & Supportive Team</span>
              </div>
            </Motion.div>

            {/* Card 2: Cutting-Edge Tech Work */}
            <Motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative bg-[#f8fafc] rounded-3xl p-8 lg:p-9 border border-slate-200/80 hover:border-[#f99d1c]/40 hover:shadow-2xl hover:shadow-[#f99d1c]/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-7 bg-slate-200">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                    alt="Cutting-Edge Tech Work at Hutech Solutions"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11253e]/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-[#f99d1c]">
                    <Cpu size={24} />
                  </div>
                </div>

                <div className="inline-block px-2.5 py-1 rounded-md bg-[#f99d1c]/10 text-[#f99d1c] text-[11px] font-bold uppercase tracking-wider mb-3">
                  02. Innovation & Impact
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#11253e] mb-4 group-hover:text-[#f99d1c] transition-colors">
                  Cutting-Edge Tech Work
                </h3>
                <p className="text-[#475567] text-sm sm:text-base leading-relaxed font-light">
                  We stay at the forefront of emerging technologies like AI, ML, IoT, and more, tackling complex challenges along the way. Our team thrives on innovation, constantly pushing boundaries to deliver solutions that create real-world impact.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center text-xs font-semibold text-[#f99d1c] transition-colors">
                <span>Next-Gen AI & Cloud Stacks</span>
              </div>
            </Motion.div>

            {/* Card 3: Work Hard, Earn Rewards */}
            <Motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative bg-[#f8fafc] rounded-3xl p-8 lg:p-9 border border-slate-200/80 hover:border-[#006CAD]/40 hover:shadow-2xl hover:shadow-[#006CAD]/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-7 bg-slate-200">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
                    alt="Work Hard Earn Rewards at Hutech Solutions"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11253e]/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-[#006CAD]">
                    <Award size={24} />
                  </div>
                </div>

                <div className="inline-block px-2.5 py-1 rounded-md bg-[#006CAD]/10 text-[#006CAD] text-[11px] font-bold uppercase tracking-wider mb-3">
                  03. Recognition & Growth
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#11253e] mb-4 group-hover:text-[#006CAD] transition-colors">
                  Work Hard, Earn Rewards
                </h3>
                <p className="text-[#475567] text-sm sm:text-base leading-relaxed font-light">
                  Hard work deserves recognition, and at Hutech Solutions, it gets rewarded. We believe in a culture where dedication leads to real results, and real results are always acknowledged.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center text-xs font-semibold text-[#006CAD] group-hover:text-[#f99d1c] transition-colors">
                <span>Merit-Driven Career Trajectory</span>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. OUR ECOSYSTEM SECTION (Interactive Bento / Collage)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#0b1b3d] text-white relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-ecosystem" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-ecosystem)" />
          </svg>
        </div>

        {/* Ambient glow */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#006CAD] opacity-20 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#f99d1c] opacity-15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#f99d1c] text-xs font-semibold uppercase tracking-widest mb-4">
              <Users size={13} />
              <span>Our Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              While There&apos;s Still a Lot to Explore in Our Workplace
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed font-light">
              From collaborative teams and innovative projects to celebrations, learning opportunities, and meaningful connections, there&apos;s always something new to discover at Hutech Solutions.
            </p>
          </div>

          {/* Bento Grid Collage with Floating Labels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6">
            {/* Box 1: Collaboration (Span 7, Tall) */}
            <Motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 relative h-72 sm:h-80 lg:h-96 rounded-3xl overflow-hidden group shadow-xl border border-white/10"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Collaborative Ecosystem at Hutech Solutions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              {/* Floating Pill Tag */}
              <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#11253e] text-xs font-bold flex items-center space-x-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#006CAD]"></span>
                <span>Collaborate</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-white mb-1">Cross-Functional Teamwork</h3>
                <p className="text-white/70 text-xs sm:text-sm font-light">Engineers, designers, and strategists crafting solutions side by side.</p>
              </div>
            </Motion.div>

            {/* Box 2: Innovation (Span 5) */}
            <Motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 relative h-72 sm:h-80 lg:h-96 rounded-3xl overflow-hidden group shadow-xl border border-white/10"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
                alt="Innovation Labs at Hutech Solutions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Floating Pill Tag */}
              <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-[#f99d1c] text-white text-xs font-bold flex items-center space-x-2 shadow-lg">
                <Lightbulb size={13} />
                <span>Innovate</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-white mb-1">R&D & Hackathons</h3>
                <p className="text-white/70 text-xs sm:text-sm font-light">Incubating ideas into production-ready AI & Cloud breakthroughs.</p>
              </div>
            </Motion.div>

            {/* Box 3: Learning & Growth (Span 4) */}
            <Motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden group shadow-xl border border-white/10"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
                alt="Continuous Learning at Hutech Solutions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Floating Pill Tag */}
              <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#11253e] text-xs font-bold flex items-center space-x-2 shadow-lg">
                <GraduationCap size={13} className="text-[#006CAD]" />
                <span>Learn</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-lg font-bold text-white mb-1">Knowledge Guilds</h3>
                <p className="text-white/70 text-xs font-light">Certifications, tech talks, and continuous upskilling.</p>
              </div>
            </Motion.div>

            {/* Box 4: Celebrations & Culture (Span 4) */}
            <Motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-4 relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden group shadow-xl border border-white/10"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
                alt="Celebrations and Bonding at Hutech Solutions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Floating Pill Tag */}
              <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#11253e] text-xs font-bold flex items-center space-x-2 shadow-lg">
                <PartyPopper size={13} className="text-[#f99d1c]" />
                <span>Celebrate</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-lg font-bold text-white mb-1">Festivals & Milestones</h3>
                <p className="text-white/70 text-xs font-light">Cherishing every achievement and cultural celebration.</p>
              </div>
            </Motion.div>

            {/* Box 5: Growth & Workplace (Span 4) */}
            <Motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-4 relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden group shadow-xl border border-white/10"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="Workplace Growth at Hutech Solutions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Floating Pill Tag */}
              <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-[#006CAD] text-white text-xs font-bold flex items-center space-x-2 shadow-lg">
                <TrendingUp size={13} />
                <span>Grow</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-lg font-bold text-white mb-1">Modern Workspaces</h3>
                <p className="text-white/70 text-xs font-light">Ergonomic offices engineered for high productivity.</p>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. CULTURE HIGHLIGHT SECTION (Full-Width with Subtle Parallax)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[480px] md:min-h-[560px] flex items-center justify-center overflow-hidden bg-black text-white">
        {/* Full-width High Resolution Team Photo */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=80"
            alt="People Innovation Growth at Hutech Solutions"
            className="w-full h-full object-cover opacity-60 scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#f99d1c]/20 border border-[#f99d1c]/40 text-[#f99d1c] text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
              <Sparkles size={14} />
              <span>Culture Highlight</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              People. Innovation. <span className="text-[#f99d1c]">Growth.</span>
            </h2>

            <p className="text-white/85 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
              Together, we create an environment where ideas become impact and people become the driving force behind innovation.
            </p>

            <div className="pt-4 flex justify-center items-center space-x-4">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#f99d1c]"></div>
              <span className="text-xs uppercase tracking-[0.25em] text-white/60 font-medium">Global Collective</span>
              <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#f99d1c]"></div>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. CAREERS CTA SECTION
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#0b1b3d] text-white relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#006CAD] opacity-25 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#f99d1c] opacity-20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-b from-white/10 to-white/5 border border-white/15 rounded-3xl p-10 sm:p-14 md:p-16 backdrop-blur-xl shadow-2xl space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f99d1c]/20 border border-[#f99d1c]/40 text-[#f99d1c] text-xs font-semibold uppercase tracking-widest">
              <Flame size={14} />
              <span>Join The Movement</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to Become a Part of Our Family?
            </h2>

            <p className="text-white/80 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Join a team where innovation meets opportunity, people come first, and every career has the potential to make an impact.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a
                href="https://hutechsolutions.ai/careers/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-xl bg-[#f99d1c] hover:bg-[#e18c31] text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#f99d1c]/30 hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>See Open Positions</span>
                <ExternalLink size={16} />
              </a>

              <a
                href="https://hutechsolutions.ai/contact/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Contact HR Team</span>
                <ChevronRight size={16} />
              </a>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          INTERACTIVE LIGHTBOX MODAL
          ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeLightbox !== null && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-xl flex flex-col justify-between"
            onClick={closeLightbox}
          >
            {/* Lightbox Header Bar */}
            <div
              className="p-4 sm:p-6 flex items-center justify-between text-white border-b border-white/10 bg-black/40 backdrop-blur-md z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#f99d1c] font-bold">
                  {GALLERY_DATA[activeLightbox.galleryIndex].category}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  {GALLERY_DATA[activeLightbox.galleryIndex].title}
                </h4>
              </div>

              <div className="flex items-center space-x-4">
                {/* Photo Counter */}
                <div className="px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs font-semibold">
                  Photo {activeLightbox.photoIndex + 1} of{" "}
                  {GALLERY_DATA[activeLightbox.galleryIndex].photos.length}
                </div>

                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Main Stage Image & Navigation */}
            <div
              className="relative flex-grow flex items-center justify-center p-4 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={prevPhoto}
                className="absolute left-4 sm:left-8 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-xl"
                aria-label="Previous Photo"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Next Button */}
              <button
                onClick={nextPhoto}
                className="absolute right-4 sm:right-8 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-xl"
                aria-label="Next Photo"
              >
                <ChevronRight size={28} />
              </button>

              {/* Active Image with Animation */}
              <div className="max-w-5xl max-h-[68vh] w-full h-full relative flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                  <Motion.div
                    key={`${activeLightbox.galleryIndex}-${activeLightbox.photoIndex}`}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    <img
                      src={
                        GALLERY_DATA[activeLightbox.galleryIndex].photos[
                          activeLightbox.photoIndex
                        ]?.url
                      }
                      alt={
                        GALLERY_DATA[activeLightbox.galleryIndex].photos[
                          activeLightbox.photoIndex
                        ]?.caption || "Gallery Photo"
                      }
                      className="max-h-[65vh] max-w-full object-contain rounded-xl shadow-2xl"
                    />
                  </Motion.div>
                </AnimatePresence>

                {/* Caption Bar */}
                <div className="mt-4 text-center max-w-2xl px-4">
                  <p className="text-white/90 text-sm font-light">
                    {
                      GALLERY_DATA[activeLightbox.galleryIndex].photos[
                        activeLightbox.photoIndex
                      ]?.caption
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Thumbnails Strip */}
            <div
              className="p-4 sm:p-5 border-t border-white/10 bg-black/50 backdrop-blur-md flex justify-center items-center overflow-x-auto space-x-3 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              {GALLERY_DATA[activeLightbox.galleryIndex].photos.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    setActiveLightbox({
                      ...activeLightbox,
                      photoIndex: idx
                    })
                  }
                  className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 shrink-0 ${
                    activeLightbox.photoIndex === idx
                      ? "border-[#f99d1c] scale-110 shadow-lg"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <img
                    src={thumb.url}
                    alt={thumb.caption}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
