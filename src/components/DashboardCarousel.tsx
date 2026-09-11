"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import {
  Monitor,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Lock,
  Layers,
} from "lucide-react";

export interface DashboardScreen {
  id: string | number;
  title: string;
  description?: string;
  image: string;
  badge?: string;
  url?: string;
}

interface DashboardCarouselProps {
  sectionTitle?: string;
  sectionDescription?: string;
  screens?: DashboardScreen[];
}

const DEFAULT_DUMMY_SCREENS: DashboardScreen[] = [
  {
    id: 1,
    title: "Command Center & Real-Time Telemetry",
    description:
      "Unified system monitoring with sub-second event ingestion and live throughput charts.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    badge: "Telemetry",
    url: "app.nabhira.io/dashboard/v2/analytics",
  },
  {
    id: 2,
    title: "Geospatial Routing & Anomaly Detection",
    description:
      "Interactive topology mapping and automated incident triage to pinpoint bottlenecks.",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1600&auto=format&fit=crop",
    badge: "Routing",
    url: "app.nabhira.io/network/traffic-map",
  },
  {
    id: 3,
    title: "Financial Ledger & Risk Scoring",
    description:
      "Automated transaction verification pipelines with real-time risk scores and audit trails.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    badge: "Finance",
    url: "app.nabhira.io/finance/audit-ledger",
  },
  {
    id: 4,
    title: "System Metrics & Live Infrastructure",
    description:
      "Distributed cluster performance, real-time node resource allocation, and latency charts.",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1600&auto=format&fit=crop",
    badge: "Cluster",
    url: "app.nabhira.io/cluster/monitoring",
  },
];

export default function DashboardCarousel({
  sectionTitle,
  sectionDescription,
  screens,
}: DashboardCarouselProps) {
  const items = screens && screens.length > 0 ? screens : DEFAULT_DUMMY_SCREENS;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeScreen = items[currentIndex] || items[0];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleSelect = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Autoplay functionality with pause on hover
  useEffect(() => {
    if (isPaused || lightboxOpen || items.length <= 1) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused, lightboxOpen, items.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === "Escape") setLightboxOpen(false);
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "ArrowLeft") handlePrev();
        return;
      }
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, currentIndex]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <section
      className="py-8 sm:py-10 lg:py-12 relative overflow-hidden select-none"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, #0d1b33 0%, #080f1d 45%, #050a14 100%)",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient background glow & grid */}
      <div
        className="absolute inset-0 opacity-[0.10] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(249,157,28,0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249,157,28,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[220px] bg-gradient-to-b from-[#f99d1c]/15 via-[#1a6bff]/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -bottom-20 right-10 w-72 h-72 bg-[#1a6bff]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5 border-b border-white/10 pb-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full border border-[#f99d1c]/30 bg-[#f99d1c]/10 backdrop-blur-md">
              <Monitor size={12} className="text-[#f99d1c]" />
              <span className="text-[#f99d1c] font-semibold text-[10px] uppercase tracking-[0.2em]">
                Application Dashboards
              </span>
            </div>

            <h2 className="text-white text-2xl sm:text-3xl font-light tracking-tight">
              {sectionTitle || "See It In Action"}
            </h2>

            <p className="text-white/60 text-xs sm:text-sm font-light max-w-xl leading-relaxed">
              {sectionDescription ||
                "Explore the key project dashboards and interactive interfaces engineered for real-time monitoring and operational clarity."}
            </p>
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-1.5 shrink-0">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-6 bg-[#f99d1c] shadow-[0_0_8px_rgba(249,157,28,0.5)]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 2-COLUMN 1-FOLD SHOWCASE: BIG IMAGE ON LEFT, THUMBNAILS ON RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* LEFT COLUMN: Big Featured Image in Browser Chrome (lg:col-span-8) */}
          <div className="lg:col-span-8 flex flex-col">
            <div
              className="relative rounded-2xl overflow-hidden border border-white/15 backdrop-blur-md flex-1 flex flex-col"
              style={{
                boxShadow:
                  "0 25px 60px -15px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08), 0 0 40px -10px rgba(249,157,28,0.12)",
              }}
            >
              {/* Browser Window Top Navigation Bar */}
              <div className="bg-[#0e1726]/95 px-4 sm:px-5 py-2.5 flex items-center justify-between gap-4 border-b border-white/10 backdrop-blur-lg select-none">
                {/* macOS Traffic Lights */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] border border-black/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e] border border-black/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840] border border-black/20" />
                </div>

                {/* Address Bar */}
                <div className="flex-1 max-w-sm mx-auto bg-[#070c14]/90 border border-white/10 rounded-full px-3.5 py-1 flex items-center gap-2 shadow-inner">
                  <Lock size={11} className="text-[#f99d1c] shrink-0" />
                  <span className="text-white/60 text-[11px] font-mono tracking-wide truncate">
                    {activeScreen.url || "https://app.nabhira.io/console/dashboard"}
                  </span>
                  <span className="ml-auto flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#28c840]/15 text-[#28c840] text-[9px] font-medium tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#28c840] animate-pulse" />
                    Live
                  </span>
                </div>

                {/* Controls & Counter */}
                <div className="flex items-center gap-2.5">
                  <span className="hidden sm:inline-block text-white/50 text-[11px] font-mono tracking-wider">
                    {String(currentIndex + 1).padStart(2, "0")} /{" "}
                    {String(items.length).padStart(2, "0")}
                  </span>
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="p-1 text-white/70 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                    title="Expand to Fullscreen"
                    aria-label="Fullscreen view"
                  >
                    <Maximize2 size={14} />
                  </button>
                </div>
              </div>

              {/* Big Screenshot Viewport */}
              <div
                className="relative w-full aspect-[16/10] min-h-[300px] sm:min-h-[380px] lg:min-h-[420px] bg-[#070c14] overflow-hidden group cursor-pointer flex-1"
                onClick={() => setLightboxOpen(true)}
              >
                <AnimatePresence custom={direction} mode="wait">
                  <Motion.div
                    key={activeScreen.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={activeScreen.image}
                      alt={activeScreen.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    {/* Subtle vignette */}
                    <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.35)]" />
                  </Motion.div>
                </AnimatePresence>

                {/* Hover zoom hint */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-medium flex items-center gap-2 shadow-2xl">
                    <Maximize2 size={13} className="text-[#f99d1c]" />
                    <span>Click to Expand Fullscreen</span>
                  </div>
                </div>

                {/* Glass Navigation Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0e1726]/80 hover:bg-[#f99d1c] border border-white/15 text-white hover:text-[#0b1528] flex items-center justify-center backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 z-20"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0e1726]/80 hover:bg-[#f99d1c] border border-white/15 text-white hover:text-[#0b1528] flex items-center justify-center backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 z-20"
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={18} />
                </button>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-4 pointer-events-none">
                  <div className="bg-[#0b1528]/85 backdrop-blur-md border border-white/15 rounded-xl px-3.5 py-2.5 flex items-center justify-between gap-3 shadow-xl">
                    <div className="min-w-0 space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[#f99d1c] font-mono text-[10px] font-bold uppercase tracking-wider">
                          SCREEN {String(currentIndex + 1).padStart(2, "0")}
                        </span>
                        {activeScreen.badge && (
                          <span className="px-1.5 py-0.2 rounded bg-[#f99d1c]/15 text-[#f99d1c] text-[9px] font-semibold uppercase border border-[#f99d1c]/30">
                            {activeScreen.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-white text-xs sm:text-sm font-medium tracking-tight truncate">
                        {activeScreen.title}
                      </h3>
                    </div>

                    <button
                      onClick={() => setLightboxOpen(true)}
                      className="px-2.5 py-1 rounded-md border border-white/20 bg-white/5 hover:bg-white/15 text-white text-[11px] font-medium flex items-center gap-1.5 transition-colors shrink-0 pointer-events-auto"
                    >
                      <Maximize2 size={11} />
                      <span>Full View</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Thumbnail items (img1, img2, img3...) (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-2.5">
            <div className="flex items-center justify-between px-1 mb-0.5">
              <div className="flex items-center gap-2 text-white/50 text-[11px] uppercase tracking-widest font-mono">
                <Layers size={12} className="text-[#f99d1c]" />
                <span>Select Dashboard</span>
              </div>
              <span className="text-white/40 text-[10px] font-mono">
                {items.length} Screens Available
              </span>
            </div>

            {/* Vertical list of cards */}
            <div className="flex flex-col gap-2.5 flex-1 justify-between">
              {items.map((screen, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={screen.id}
                    onClick={() => handleSelect(idx)}
                    className={`group relative flex-1 w-full p-2.5 rounded-xl text-left transition-all duration-300 border flex items-center gap-3 ${
                      isActive
                        ? "bg-[#112038]/95 border-[#f99d1c] shadow-[0_0_20px_rgba(249,157,28,0.2)]"
                        : "bg-[#091220]/75 border-white/10 hover:border-white/25 hover:bg-[#0e1b2f]/85"
                    }`}
                  >
                    {/* Active highlight bar on left of card */}
                    {isActive && (
                      <Motion.div
                        layoutId="activeSideBar"
                        className="absolute left-0 top-2 bottom-2 w-1 bg-[#f99d1c] rounded-r-full shadow-[0_0_8px_#f99d1c]"
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      />
                    )}

                    {/* Miniature Thumbnail */}
                    <div className="relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-[#070c14]">
                      <img
                        src={screen.image}
                        alt={screen.title}
                        className={`w-full h-full object-cover object-top transition-transform duration-500 ${
                          isActive ? "scale-105" : "group-hover:scale-105 opacity-80"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute bottom-1 right-1 px-1 rounded bg-black/70 text-[8px] font-mono text-white/90">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="flex-1 min-w-0 space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`text-[9px] font-mono font-bold ${
                            isActive ? "text-[#f99d1c]" : "text-white/40"
                          }`}
                        >
                          #{String(idx + 1).padStart(2, "0")}
                        </span>
                        {screen.badge && (
                          <span className="px-1.5 py-0.2 rounded bg-white/5 text-[8px] uppercase tracking-wider text-white/60 truncate">
                            {screen.badge}
                          </span>
                        )}
                      </div>
                      <h4
                        className={`text-xs font-medium truncate leading-snug ${
                          isActive ? "text-white" : "text-white/70 group-hover:text-white"
                        }`}
                      >
                        {screen.title}
                      </h4>
                      {screen.description && (
                        <p className="text-[10px] text-white/40 truncate font-light">
                          {screen.description}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxOpen && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Next / Prev buttons in lightbox */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#f99d1c] hover:text-[#0b1528] text-white transition-all z-50 backdrop-blur-md"
              aria-label="Previous slide"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#f99d1c] hover:text-[#0b1528] text-white transition-all z-50 backdrop-blur-md"
              aria-label="Next slide"
            >
              <ChevronRight size={28} />
            </button>

            {/* Modal Content */}
            <Motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col rounded-2xl overflow-hidden border border-white/20 bg-[#091220] shadow-2xl"
            >
              {/* Modal Header */}
              <div className="bg-[#0e1726] px-6 py-4 flex items-center justify-between border-b border-white/10">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[#f99d1c] text-xs font-mono font-bold">
                      SCREEN {String(currentIndex + 1).padStart(2, "0")} OF{" "}
                      {String(items.length).padStart(2, "0")}
                    </span>
                    {activeScreen.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-[#f99d1c]/15 text-[#f99d1c] text-[10px] font-semibold uppercase">
                        {activeScreen.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-white text-lg font-medium">{activeScreen.title}</h3>
                </div>
              </div>

              {/* Modal Image */}
              <div className="relative overflow-auto max-h-[75vh] flex items-center justify-center bg-[#070c14] p-2">
                <img
                  src={activeScreen.image}
                  alt={activeScreen.title}
                  className="max-w-full max-h-[72vh] object-contain rounded-lg shadow-2xl"
                />
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
