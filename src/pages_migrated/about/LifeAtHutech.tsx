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
  Flame,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Zap,
  Coffee,
  Globe2,
  Camera,
  Eye,
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
    coverImage:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
    category: "Sustainability",
    description:
      "Hutech team members coming together for environmental preservation and sapling plantation drive.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80",
        caption:
          "Sapling plantation and environmental stewardship drive by the Hutech green squad.",
      },
      {
        url: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&w=1600&q=80",
        caption:
          "Nurturing greenery and promoting eco-conscious corporate culture across our campuses.",
      },
      {
        url: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=1600&q=80",
        caption: "Team members united for a greener, sustainable future.",
      },
    ],
  },
  {
    id: "christmas-celebration-2024",
    title: "Christmas Celebration",
    countText: "5 Photos",
    photoCount: 5,
    coverImage:
      "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1200&q=80",
    category: "Celebrations",
    description:
      "Spreading holiday cheer, festive decorations, and Secret Santa joys in the office.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1600&q=80",
        caption: "Festive office Christmas decorations and holiday lights.",
      },
      {
        url: "https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?auto=format&fit=crop&w=1600&q=80",
        caption:
          "Colleagues exchanging Secret Santa gifts and warm holiday wishes.",
      },
      {
        url: "https://images.unsplash.com/photo-1543258103-a62bd9610bd6?auto=format&fit=crop&w=1600&q=80",
        caption: "Holiday games and sweet celebrations across teams.",
      },
      {
        url: "https://images.unsplash.com/photo-1513297887119-d46091b24bfa?auto=format&fit=crop&w=1600&q=80",
        caption: "Cozy holiday cheer and joyful team moments.",
      },
      {
        url: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1600&q=80",
        caption: "Celebrating togetherness and ringing in the festive season.",
      },
    ],
  },
  {
    id: "onam-celebrations-2024",
    title: "Onam Celebrations",
    countText: "3 Photos",
    photoCount: 3,
    coverImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    category: "Culture",
    description:
      "Vibrant traditional floral pookalams, cultural attire, and festive celebration of harvest.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
        caption: "Traditional ethnic attire and joyful cultural celebrations.",
      },
      {
        url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=80",
        caption: "Creating vibrant floral rangoli pookalam together.",
      },
      {
        url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80",
        caption:
          "Team bonding over rich traditions, laughter, and festivities.",
      },
    ],
  },
  {
    id: "independence-day-2024",
    title: "Independence Day Celebration 2024",
    countText: "9 Photos",
    photoCount: 9,
    coverImage:
      "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1200&q=80",
    category: "National Day",
    description:
      "Commemorating India's 78th Independence Day with tricolor pride, cultural events, and unity.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1600&q=80",
        caption:
          "Tricolor spirit and patriotic celebrations at Hutech headquarters.",
      },
      {
        url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80",
        caption: "Employee cultural showcases and musical tributes.",
      },
      {
        url: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&w=1600&q=80",
        caption: "Commemorating national unity and democratic pride.",
      },
      {
        url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
        caption:
          "Collaborative engagement activities celebrating our shared heritage.",
      },
      {
        url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
        caption:
          "Keynote address by leadership on innovation empowering our nation.",
      },
      {
        url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1600&q=80",
        caption: "Interactive team quizzes and cultural fellowship.",
      },
      {
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
        caption: "All-hands group photo celebrating unity in diversity.",
      },
      {
        url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
        caption:
          "Engineering teams bringing national colors to office workspace.",
      },
      {
        url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80",
        caption: "Sweet distribution and festive camaraderie.",
      },
    ],
  },
  {
    id: "yoga-day",
    title: "Yoga Day Celebrations",
    countText: "6 Photos",
    photoCount: 6,
    coverImage:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
    category: "Wellness",
    description:
      "Promoting physical health, mindfulness, and work-life balance with guided wellness sessions.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1600&q=80",
        caption: "Guided asanas and mindfulness breathing session.",
      },
      {
        url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
        caption: "Morning meditation for mental clarity and stress relief.",
      },
      {
        url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
        caption:
          "Postural alignment and ergonomics workshop for software engineers.",
      },
      {
        url: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=1600&q=80",
        caption: "Deep relaxation and holistic wellbeing techniques.",
      },
      {
        url: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=1600&q=80",
        caption: "Energizing stretching routines for active workplace health.",
      },
      {
        url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
        caption: "Rejuvenated Hutech team embracing healthy lifestyle habits.",
      },
    ],
  },
  {
    id: "iot-expo",
    title: "IoT Expo",
    countText: "8 Photos",
    photoCount: 8,
    coverImage:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    category: "Technology",
    description:
      "Showcasing intelligent IoT solutions, embedded hardware demos, and enterprise edge computing.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80",
        caption: "Interactive IoT hardware and edge compute demonstrations.",
      },
      {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
        caption: "Embedded sensors and cloud telemetry architecture review.",
      },
      {
        url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80",
        caption: "Robotics and automated testing pipelines.",
      },
      {
        url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
        caption: "Real-time edge analytics and dashboard displays.",
      },
      {
        url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
        caption: "AI model inference at the edge demonstration.",
      },
      {
        url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
        caption: "Engineering leads discussing smart industrial automation.",
      },
      {
        url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80",
        caption: "Collaborative tech hackathon and device prototyping.",
      },
      {
        url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
        caption: "Next-gen enterprise hardware exhibits.",
      },
    ],
  },
  {
    id: "team-lunch",
    title: "Team Lunch",
    countText: "3 Photos",
    photoCount: 3,
    coverImage:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    category: "Team Bonding",
    description:
      "Great food, great conversations, and building lifelong friendships beyond the keyboard.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80",
        caption: "Team members bonding over delicious lunch outings.",
      },
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
        caption:
          "Casual moments and spontaneous laughter outside sprint meetings.",
      },
      {
        url: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1600&q=80",
        caption:
          "Celebrating project milestones with celebratory culinary treats.",
      },
    ],
  },
  {
    id: "onam-celebrations-2023",
    title: "Onam Celebrations 2023",
    countText: "5 Photos",
    photoCount: 5,
    coverImage:
      "https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?auto=format&fit=crop&w=1200&q=80",
    category: "Culture",
    description:
      "Memories of the vibrant Onam festivities, traditional games, and feasts from 2023.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?auto=format&fit=crop&w=1600&q=80",
        caption: "Cultural dance and musical showcase during Onam 2023.",
      },
      {
        url: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1600&q=80",
        caption: "Festive campus decoration and traditional welcomes.",
      },
      {
        url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
        caption: "Cross-functional teams coming together in ethnic elegance.",
      },
      {
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
        caption: "Team games and lighthearted cultural competitions.",
      },
      {
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
        caption: "Group celebration of unity, harmony, and togetherness.",
      },
    ],
  },
  {
    id: "christmas-celebration-2023",
    title: "Christmas Celebration 2023",
    countText: "4 Photos",
    photoCount: 4,
    coverImage:
      "https://images.unsplash.com/photo-1543258103-a62bd9610bd6?auto=format&fit=crop&w=1200&q=80",
    category: "Celebrations",
    description:
      "Office holiday spirit, carols, Christmas feast, and year-end celebrations in 2023.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1543258103-a62bd9610bd6?auto=format&fit=crop&w=1600&q=80",
        caption: "Year-end holiday celebrations and holiday decorations.",
      },
      {
        url: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1600&q=80",
        caption: "Spreading warmth, joy, and gratitude as a team.",
      },
      {
        url: "https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?auto=format&fit=crop&w=1600&q=80",
        caption: "Secret Santa gift distributions and holiday laughter.",
      },
      {
        url: "https://images.unsplash.com/photo-1513297887119-d46091b24bfa?auto=format&fit=crop&w=1600&q=80",
        caption: "Wrapping up the year with optimism and festive cheer.",
      },
    ],
  },
  {
    id: "independence-day-2023",
    title: "Independence Day Celebration 2023",
    countText: "3 Photos",
    photoCount: 3,
    coverImage:
      "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&w=1200&q=80",
    category: "National Day",
    description:
      "Patriotic tributes, national anthem ceremony, and tricolor badges in 2023.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&w=1600&q=80",
        caption: "Patriotic celebrations honoring national freedom and unity.",
      },
      {
        url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80",
        caption:
          "Employee performances highlighting unity and cultural harmony.",
      },
      {
        url: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1600&q=80",
        caption: "Proud Hutech team standing united under the tricolor.",
      },
    ],
  },
  {
    id: "annual-day-2022",
    title: "Annual Day Celebrations 2022",
    countText: "4 Photos",
    photoCount: 4,
    coverImage:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    category: "Milestones",
    description:
      "Grand annual gala, leadership awards, employee excellence honors, and evening musical night.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80",
        caption:
          "Grand Annual Day stage setup and celebration of yearly triumphs.",
      },
      {
        url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80",
        caption:
          "Recognizing outstanding engineering contributions with excellence awards.",
      },
      {
        url: "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=1600&q=80",
        caption:
          "Dynamic dance and musical performances by talented team members.",
      },
      {
        url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600&q=80",
        caption:
          "Celebrating five-year and ten-year milestone pillars of Hutech.",
      },
    ],
  },
];

export default function LifeAtHutech({
  wordpressData,
}: {
  wordpressData?: any;
}) {
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
        photoIndex: activeLightbox.photoIndex + 1,
      });
    } else {
      // Loop to next gallery or back to first photo
      const nextGalleryIndex =
        (activeLightbox.galleryIndex + 1) % GALLERY_DATA.length;
      setActiveLightbox({
        galleryIndex: nextGalleryIndex,
        photoIndex: 0,
      });
    }
  }, [activeLightbox]);

  const prevPhoto = useCallback(() => {
    if (!activeLightbox) return;
    if (activeLightbox.photoIndex > 0) {
      setActiveLightbox({
        ...activeLightbox,
        photoIndex: activeLightbox.photoIndex - 1,
      });
    } else {
      const prevGalleryIndex =
        (activeLightbox.galleryIndex - 1 + GALLERY_DATA.length) %
        GALLERY_DATA.length;
      const prevGalleryPhotos = GALLERY_DATA[prevGalleryIndex].photos;
      setActiveLightbox({
        galleryIndex: prevGalleryIndex,
        photoIndex: prevGalleryPhotos.length - 1,
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
                <pattern
                  id="pinstripe-life"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="40"
                    stroke="white"
                    strokeWidth="0.5"
                  />
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
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
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
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight">
              The{" "}
              <span className="text-transparent bg-clip-text bg-[#f99d1c]">
                Hutech Family
              </span>
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-white/80 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-2xl pt-2">
              At Hutech Solutions, we don&apos;t just build software; we build
              careers and lifelong relationships. Discover what makes us more
              than just a company.
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
          2. GALLERY SECTION (Interactive Media Showcase with Category Filter)
          ───────────────────────────────────────────────────────────── */}
      <section
        id="gallery-section"
        className="py-20 md:py-28 bg-[#f8fafc] relative overflow-hidden"
      >
        {/* Ambient Decorative Accents */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#006CAD]/5 via-[#f99d1c]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#006CAD]/10 border border-[#006CAD]/20 text-[#006CAD] text-xs font-semibold uppercase tracking-widest mb-4">
              <Camera size={13} className="text-[#f99d1c]" />
              <span>Life in Frames</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11253e] tracking-tight mb-5 leading-tight">
              Moments & Memories at{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006CAD] to-[#0094e0]">
                Hutech
              </span>
            </h2>
            <p className="text-[#475567] text-base sm:text-lg leading-relaxed font-light">
              Explore our vibrant culture, festive celebrations, hackathons, and
              team milestones captured across our global offices.
            </p>
          </div>

          {/* Dynamic Gallery Grid with Immersive Full-Bleed Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7">
            {GALLERY_DATA.map((item, index) => (
              <Motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
                onClick={() => openLightbox(index, 0)}
                className="group relative h-[360px] sm:h-[380px] rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200/80 hover:border-[#006CAD]/40 flex flex-col justify-between"
              >
                {/* Full-bleed Background Image with Parallax-like Hover */}
                <div className="absolute inset-0 z-0 bg-slate-900">
                  <ImageWithFallback
                    src={item.coverImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Multi-layered cinematic gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:via-black/50 transition-colors duration-300"></div>
                </div>

                {/* Top Floating Badges */}
                <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between">
                  {/* Category Tag */}
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#11253e] text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    {item.category}
                  </span>

                  {/* Photo Count Badge */}
                  <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-md">
                    <Images size={12} className="text-[#f99d1c]" />
                    <span>{item.photoCount} Photos</span>
                  </div>
                </div>

                {/* Center Quick View Indicator (Appears on hover) */}
                <div className="relative z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 pointer-events-none">
                  <div className="w-13 h-13 rounded-full bg-[#f99d1c] text-white flex items-center justify-center shadow-xl shadow-[#f99d1c]/40">
                    <Eye size={22} />
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 p-5 sm:p-6 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#f99d1c] transition-colors leading-snug line-clamp-1 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-white/75 text-xs sm:text-sm font-light line-clamp-2 leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {/* View Album Action */}
                  <div className="flex items-center space-x-1 text-xs font-semibold text-[#f99d1c] group-hover:text-white transition-colors pt-2 border-t border-white/10">
                    <span>Explore Gallery</span>
                    <ChevronRight
                      size={14}
                      className="transform group-hover:translate-x-1.5 transition-transform"
                    />
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. BENEFITS SECTION (Modernized Perks Architecture & Culture Pillars)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Soft background glow accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#006CAD]/5 rounded-full blur-[130px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#f99d1c]/5 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f99d1c]/10 border border-[#f99d1c]/25 text-[#f99d1c] text-xs font-semibold uppercase tracking-widest mb-4">
              <Sparkles size={13} className="text-[#f99d1c]" />
              <span>Why Join Hutech</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11253e] tracking-tight mb-5 leading-tight">
              More Than a Workplace —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006CAD] to-[#f99d1c]">
                A Place to Thrive
              </span>
            </h2>
            <p className="text-[#475567] text-base sm:text-lg leading-relaxed font-light">
              We empower our people with trust, autonomous ownership,
              world-class learning, and the resources to do the best work of
              their lives.
            </p>
          </div>

          {/* 3 Modern Feature Pillar Cards (Distinct Glass Architecture with Bullet Highlights) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
            {/* Pillar 1: Culture & Well-being */}
            <Motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative bg-[#f8fafc] rounded-3xl p-8 sm:p-9 border border-slate-200/80 hover:border-[#006CAD]/40 hover:bg-white hover:shadow-2xl hover:shadow-[#006CAD]/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Header: Floating Icon & Pillar Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#006CAD] to-[#0284c7] text-white flex items-center justify-center shadow-lg shadow-[#006CAD]/25 group-hover:scale-105 transition-transform duration-300">
                    <HeartHandshake size={26} />
                  </div>
                  <span className="text-4xl font-black text-slate-200 group-hover:text-[#006CAD]/20 transition-colors font-mono">
                    01
                  </span>
                </div>

                <div className="inline-block px-2.5 py-1 rounded-md bg-[#006CAD]/10 text-[#006CAD] text-[11px] font-bold uppercase tracking-wider mb-3">
                  Culture & Wellbeing
                </div>

                <h3 className="text-2xl font-bold text-[#11253e] mb-3 group-hover:text-[#006CAD] transition-colors leading-snug">
                  Great Place, Great Culture
                </h3>

                <p className="text-[#475567] text-sm sm:text-base font-light leading-relaxed mb-6">
                  A warm, psychologically safe environment rooted in mutual
                  respect, inclusion, and authentic human connections.
                </p>

                {/* Key Highlight Value Points */}
                <div className="space-y-3 pt-4 border-t border-slate-200/70">
                  <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#334155]">
                    <CheckCircle2
                      size={16}
                      className="text-[#006CAD] shrink-0 mt-0.5"
                    />
                    <span>Inclusive, collaborative global workplace</span>
                  </div>
                  <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#334155]">
                    <CheckCircle2
                      size={16}
                      className="text-[#006CAD] shrink-0 mt-0.5"
                    />
                    <span>Mental health support & wellness programs</span>
                  </div>
                  <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#334155]">
                    <CheckCircle2
                      size={16}
                      className="text-[#006CAD] shrink-0 mt-0.5"
                    />
                    <span>Joyful festivals, offsites & team celebrations</span>
                  </div>
                </div>
              </div>

              {/* Bottom Tag Banner */}
              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-[#006CAD]">
                <span>100% People-First Culture</span>
                <Sparkles size={14} className="text-[#f99d1c]" />
              </div>
            </Motion.div>

            {/* Pillar 2: Cutting-Edge Tech Work */}
            <Motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative bg-[#f8fafc] rounded-3xl p-8 sm:p-9 border border-slate-200/80 hover:border-[#f99d1c]/40 hover:bg-white hover:shadow-2xl hover:shadow-[#f99d1c]/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Header: Floating Icon & Pillar Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#f99d1c] to-[#ff7e1d] text-white flex items-center justify-center shadow-lg shadow-[#f99d1c]/25 group-hover:scale-105 transition-transform duration-300">
                    <Cpu size={26} />
                  </div>
                  <span className="text-4xl font-black text-slate-200 group-hover:text-[#f99d1c]/20 transition-colors font-mono">
                    02
                  </span>
                </div>

                <div className="inline-block px-2.5 py-1 rounded-md bg-[#f99d1c]/10 text-[#f99d1c] text-[11px] font-bold uppercase tracking-wider mb-3">
                  Innovation & Deep Tech
                </div>

                <h3 className="text-2xl font-bold text-[#11253e] mb-3 group-hover:text-[#f99d1c] transition-colors leading-snug">
                  Cutting-Edge Tech Work
                </h3>

                <p className="text-[#475567] text-sm sm:text-base font-light leading-relaxed mb-6">
                  Solve mission-critical enterprise engineering challenges with
                  modern Generative AI, cloud infrastructure, and intelligent
                  IoT.
                </p>

                {/* Key Highlight Value Points */}
                <div className="space-y-3 pt-4 border-t border-slate-200/70">
                  <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#334155]">
                    <CheckCircle2
                      size={16}
                      className="text-[#f99d1c] shrink-0 mt-0.5"
                    />
                    <span>Enterprise GenAI, LLM & Machine Learning labs</span>
                  </div>
                  <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#334155]">
                    <CheckCircle2
                      size={16}
                      className="text-[#f99d1c] shrink-0 mt-0.5"
                    />
                    <span>Dedicated R&D hackathons & rapid prototyping</span>
                  </div>
                  <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#334155]">
                    <CheckCircle2
                      size={16}
                      className="text-[#f99d1c] shrink-0 mt-0.5"
                    />
                    <span>
                      Modern cloud native & automated DevOps toolchains
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Tag Banner */}
              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-[#f99d1c]">
                <span>High-Impact Engineering</span>
                <Rocket size={14} className="text-[#f99d1c]" />
              </div>
            </Motion.div>

            {/* Pillar 3: Recognition & Accelerated Growth */}
            <Motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative bg-[#f8fafc] rounded-3xl p-8 sm:p-9 border border-slate-200/80 hover:border-[#006CAD]/40 hover:bg-white hover:shadow-2xl hover:shadow-[#006CAD]/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Header: Floating Icon & Pillar Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#006CAD] to-[#f99d1c] text-white flex items-center justify-center shadow-lg shadow-[#006CAD]/20 group-hover:scale-105 transition-transform duration-300">
                    <Award size={26} />
                  </div>
                  <span className="text-4xl font-black text-slate-200 group-hover:text-[#006CAD]/20 transition-colors font-mono">
                    03
                  </span>
                </div>

                <div className="inline-block px-2.5 py-1 rounded-md bg-[#006CAD]/10 text-[#006CAD] text-[11px] font-bold uppercase tracking-wider mb-3">
                  Meritocracy & Rewards
                </div>

                <h3 className="text-2xl font-bold text-[#11253e] mb-3 group-hover:text-[#006CAD] transition-colors leading-snug">
                  Work Hard, Earn Rewards
                </h3>

                <p className="text-[#475567] text-sm sm:text-base font-light leading-relaxed mb-6">
                  We believe dedication and performance deserve standout
                  recognition with transparent career growth and competitive
                  rewards.
                </p>

                {/* Key Highlight Value Points */}
                <div className="space-y-3 pt-4 border-t border-slate-200/70">
                  <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#334155]">
                    <CheckCircle2
                      size={16}
                      className="text-[#006CAD] shrink-0 mt-0.5"
                    />
                    <span>Transparent promotion tracks & merit appraisals</span>
                  </div>
                  <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#334155]">
                    <CheckCircle2
                      size={16}
                      className="text-[#006CAD] shrink-0 mt-0.5"
                    />
                    <span>Continuous upskilling & certification stipends</span>
                  </div>
                  <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#334155]">
                    <CheckCircle2
                      size={16}
                      className="text-[#006CAD] shrink-0 mt-0.5"
                    />
                    <span>Annual excellence honors & milestone bonuses</span>
                  </div>
                </div>
              </div>

              {/* Bottom Tag Banner */}
              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-[#006CAD]">
                <span>Merit-Driven Growth</span>
                <TrendingUp size={14} className="text-[#006CAD]" />
              </div>
            </Motion.div>
          </div>

          {/* Quick Perks Bar (6 Tangible Employee Benefits) */}
          <div className="bg-gradient-to-r from-[#0b1b3d] to-[#11253e] rounded-3xl p-6 sm:p-8 text-white shadow-xl">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <h4 className="text-lg font-bold text-white flex items-center space-x-2">
                  <Sparkles size={18} className="text-[#f99d1c]" />
                  <span>Comprehensive Perks & Benefits</span>
                </h4>
                <p className="text-white/70 text-xs sm:text-sm font-light mt-0.5">
                  Designed to support your physical, mental, and professional
                  journey.
                </p>
              </div>
              <Link
                href="/careers"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#f99d1c] hover:text-white transition-colors"
              >
                <span>Explore Careers</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-center">
              <div className="flex flex-col items-center p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#006CAD]/30 text-[#0094e0] flex items-center justify-center mb-2">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-xs font-bold text-white">
                  Health Care
                </span>
                <span className="text-[11px] text-white/60 font-light mt-0.5">
                  Comprehensive cover
                </span>
              </div>

              <div className="flex flex-col items-center p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#f99d1c]/30 text-[#f99d1c] flex items-center justify-center mb-2">
                  <GraduationCap size={20} />
                </div>
                <span className="text-xs font-bold text-white">
                  Learning Budget
                </span>
                <span className="text-[11px] text-white/60 font-light mt-0.5">
                  Certifications & books
                </span>
              </div>

              <div className="flex flex-col items-center p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#006CAD]/30 text-[#0094e0] flex items-center justify-center mb-2">
                  <Coffee size={20} />
                </div>
                <span className="text-xs font-bold text-white">
                  Flexible Work
                </span>
                <span className="text-[11px] text-white/60 font-light mt-0.5">
                  Hybrid flexibility
                </span>
              </div>

              <div className="flex flex-col items-center p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#f99d1c]/30 text-[#f99d1c] flex items-center justify-center mb-2">
                  <Award size={20} />
                </div>
                <span className="text-xs font-bold text-white">
                  Annual Bonuses
                </span>
                <span className="text-[11px] text-white/60 font-light mt-0.5">
                  Performance rewards
                </span>
              </div>

              <div className="flex flex-col items-center p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#006CAD]/30 text-[#0094e0] flex items-center justify-center mb-2">
                  <Zap size={20} />
                </div>
                <span className="text-xs font-bold text-white">Tech Labs</span>
                <span className="text-[11px] text-white/60 font-light mt-0.5">
                  AI & IoT sandbox
                </span>
              </div>

              <div className="flex flex-col items-center p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#f99d1c]/30 text-[#f99d1c] flex items-center justify-center mb-2">
                  <Globe2 size={20} />
                </div>
                <span className="text-xs font-bold text-white">
                  Global Exposure
                </span>
                <span className="text-[11px] text-white/60 font-light mt-0.5">
                  Cross-border teams
                </span>
              </div>
            </div>
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
              <pattern
                id="grid-ecosystem"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
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
              From collaborative teams and innovative projects to celebrations,
              learning opportunities, and meaningful connections, there&apos;s
              always something new to discover at Hutech Solutions.
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
                <h3 className="text-xl font-bold text-white mb-1">
                  Cross-Functional Teamwork
                </h3>
                <p className="text-white/70 text-xs sm:text-sm font-light">
                  Engineers, designers, and strategists crafting solutions side
                  by side.
                </p>
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
                <h3 className="text-xl font-bold text-white mb-1">
                  R&D & Hackathons
                </h3>
                <p className="text-white/70 text-xs sm:text-sm font-light">
                  Incubating ideas into production-ready AI & Cloud
                  breakthroughs.
                </p>
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
                <h3 className="text-lg font-bold text-white mb-1">
                  Knowledge Guilds
                </h3>
                <p className="text-white/70 text-xs font-light">
                  Certifications, tech talks, and continuous upskilling.
                </p>
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
                <h3 className="text-lg font-bold text-white mb-1">
                  Festivals & Milestones
                </h3>
                <p className="text-white/70 text-xs font-light">
                  Cherishing every achievement and cultural celebration.
                </p>
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
                <h3 className="text-lg font-bold text-white mb-1">
                  Modern Workspaces
                </h3>
                <p className="text-white/70 text-xs font-light">
                  Ergonomic offices engineered for high productivity.
                </p>
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
              People. Innovation.{" "}
              <span className="text-[#f99d1c]">Growth.</span>
            </h2>

            <p className="text-white/85 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
              Together, we create an environment where ideas become impact and
              people become the driving force behind innovation.
            </p>

            <div className="pt-4 flex justify-center items-center space-x-4">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#f99d1c]"></div>
              <span className="text-xs uppercase tracking-[0.25em] text-white/60 font-medium">
                Global Collective
              </span>
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
              Join a team where innovation meets opportunity, people come first,
              and every career has the potential to make an impact.
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
              {GALLERY_DATA[activeLightbox.galleryIndex].photos.map(
                (thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      setActiveLightbox({
                        ...activeLightbox,
                        photoIndex: idx,
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
                ),
              )}
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
