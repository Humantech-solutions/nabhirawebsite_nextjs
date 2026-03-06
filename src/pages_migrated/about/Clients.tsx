"use client";

import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import Link from "next/link";
import { LimitlessTogether } from "../../components/Footer";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Award, Globe, Users, TrendingUp, Quote } from "lucide-react";

/* ─── Client data ─────────────────────────────────────────── */
const clients = [
  {
    id: 1,
    name: "Hutech Solutions",
    tagline: "Enterprise Technology",
    industry: "Technology",
    hoverColor: "#0057A8",
    logo: (
      <div className="flex items-center gap-2.5">
        {/* HU monogram mark */}
        <div style={{
          width: 46, height: 46, borderRadius: 10,
          background: "linear-gradient(135deg, #0057A8 0%, #003f7e 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,87,168,0.25)"
        }}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M4 4v18M22 4v18M4 13h18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="flex flex-col leading-tight">
          <span style={{ color: "#0057A8", fontWeight: 800, fontSize: 18, fontFamily: "Arial Black, Arial, sans-serif", letterSpacing: "-0.3px" }}>HUTECH</span>
          <span style={{ color: "#555", fontWeight: 400, fontSize: 11, fontFamily: "Arial, sans-serif", letterSpacing: "0.05em" }}>SOLUTIONS</span>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    name: "H2H Agrotech",
    tagline: "Agri Technology",
    industry: "Agriculture",
    hoverColor: "#2E8B3B",
    logo: (
      <div className="flex items-center gap-2.5">
        {/* Leaf mark */}
        <div style={{
          width: 46, height: 46, borderRadius: 10,
          background: "linear-gradient(135deg, #2E8B3B 0%, #1a5c25 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 8px rgba(46,139,59,0.25)"
        }}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M13 22 C13 22 5 16 5 9 C5 5.7 8 3 11 3 C12.2 3 13.4 3.5 14.2 4.3 C15 3.5 16.2 3 17.5 3 C20.5 3 23 5.7 23 9 C23 16 13 22 13 22Z" fill="white" fillOpacity="0.9"/>
            <path d="M13 22 L13 10" stroke="#1a5c25" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="flex flex-col leading-tight">
          <div style={{ display: "flex", alignItems: "baseline", gap: 1 }}>
            <span style={{ color: "#2E8B3B", fontWeight: 900, fontSize: 20, fontFamily: "Arial Black, Arial, sans-serif" }}>H</span>
            <span style={{ color: "#f99d1c", fontWeight: 900, fontSize: 14, fontFamily: "Arial Black, Arial, sans-serif" }}>2</span>
            <span style={{ color: "#2E8B3B", fontWeight: 900, fontSize: 20, fontFamily: "Arial Black, Arial, sans-serif" }}>H</span>
          </div>
          <span style={{ color: "#555", fontWeight: 400, fontSize: 10.5, fontFamily: "Arial, sans-serif", letterSpacing: "0.06em" }}>AGROTECH</span>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    name: "Two2Foot Global",
    tagline: "Global Retail & Commerce",
    industry: "Retail",
    hoverColor: "#E05C1A",
    logo: (
      <div className="flex items-center gap-2.5">
        {/* Globe step mark */}
        <div style={{
          width: 46, height: 46, borderRadius: 10,
          background: "linear-gradient(135deg, #E05C1A 0%, #a83e0c 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 8px rgba(224,92,26,0.25)"
        }}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <circle cx="13" cy="13" r="9" stroke="white" strokeWidth="2" fill="none"/>
            <path d="M4 13h18M13 4 C10 8 10 18 13 22M13 4 C16 8 16 18 13 22" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="flex flex-col leading-tight">
          <span style={{ color: "#E05C1A", fontWeight: 800, fontSize: 17, fontFamily: "Arial Black, Arial, sans-serif", letterSpacing: "-0.3px" }}>Two2Foot</span>
          <span style={{ color: "#555", fontWeight: 400, fontSize: 10.5, fontFamily: "Arial, sans-serif", letterSpacing: "0.06em" }}>GLOBAL</span>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    name: "NexCore Industries",
    tagline: "Industrial Manufacturing",
    industry: "Manufacturing",
    hoverColor: "#344054",
    logo: (
      <div className="flex items-center gap-2.5">
        <div style={{
          width: 46, height: 46, borderRadius: 10,
          background: "linear-gradient(135deg, #344054 0%, #1d2939 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 8px rgba(52,64,84,0.25)"
        }}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <rect x="4" y="14" width="5" height="8" rx="1" fill="white" fillOpacity="0.9"/>
            <rect x="11" y="10" width="5" height="12" rx="1" fill="white"/>
            <rect x="18" y="6" width="5" height="16" rx="1" fill="white" fillOpacity="0.7"/>
            <path d="M3 22h21" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="flex flex-col leading-tight">
          <span style={{ color: "#344054", fontWeight: 800, fontSize: 17, fontFamily: "Arial Black, Arial, sans-serif", letterSpacing: "-0.2px" }}>NexCore</span>
          <span style={{ color: "#888", fontWeight: 400, fontSize: 10.5, fontFamily: "Arial, sans-serif", letterSpacing: "0.06em" }}>INDUSTRIES</span>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    name: "Meridian Fintech",
    tagline: "Financial Technology",
    industry: "Fintech",
    hoverColor: "#5B21B6",
    logo: (
      <div className="flex items-center gap-2.5">
        <div style={{
          width: 46, height: 46, borderRadius: 10,
          background: "linear-gradient(135deg, #5B21B6 0%, #3b0e8c 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 8px rgba(91,33,182,0.25)"
        }}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M5 18 L10 11 L15 15 L21 7" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18 7h3v3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="flex flex-col leading-tight">
          <span style={{ color: "#5B21B6", fontWeight: 800, fontSize: 17, fontFamily: "Arial Black, Arial, sans-serif", letterSpacing: "-0.2px" }}>Meridian</span>
          <span style={{ color: "#888", fontWeight: 400, fontSize: 10.5, fontFamily: "Arial, sans-serif", letterSpacing: "0.06em" }}>FINTECH</span>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    name: "Skyline Logistics",
    tagline: "Supply Chain Solutions",
    industry: "Logistics",
    hoverColor: "#0891B2",
    logo: (
      <div className="flex items-center gap-2.5">
        <div style={{
          width: 46, height: 46, borderRadius: 10,
          background: "linear-gradient(135deg, #0891B2 0%, #065674 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 8px rgba(8,145,178,0.25)"
        }}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M3 16 L9 8 L14 13 L18 8 L23 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="3" y="18" width="20" height="2" rx="1" fill="white" fillOpacity="0.7"/>
            <circle cx="7" cy="21" r="1.5" fill="white"/>
            <circle cx="19" cy="21" r="1.5" fill="white"/>
          </svg>
        </div>
        <div className="flex flex-col leading-tight">
          <span style={{ color: "#0891B2", fontWeight: 800, fontSize: 17, fontFamily: "Arial Black, Arial, sans-serif", letterSpacing: "-0.2px" }}>Skyline</span>
          <span style={{ color: "#888", fontWeight: 400, fontSize: 10.5, fontFamily: "Arial, sans-serif", letterSpacing: "0.06em" }}>LOGISTICS</span>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    name: "PrimeEdge Analytics",
    tagline: "Data & Insights",
    industry: "Analytics",
    hoverColor: "#0D9488",
    logo: (
      <div className="flex items-center gap-2.5">
        <div style={{
          width: 46, height: 46, borderRadius: 10,
          background: "linear-gradient(135deg, #0D9488 0%, #076b62 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 8px rgba(13,148,136,0.25)"
        }}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <circle cx="13" cy="13" r="8" stroke="white" strokeWidth="1.8" fill="none"/>
            <circle cx="13" cy="13" r="4" stroke="white" strokeWidth="1.5" fill="none"/>
            <circle cx="13" cy="13" r="1.5" fill="white"/>
            <path d="M13 5 L13 9M13 17 L13 21M5 13 L9 13M17 13 L21 13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="flex flex-col leading-tight">
          <span style={{ color: "#0D9488", fontWeight: 800, fontSize: 15.5, fontFamily: "Arial Black, Arial, sans-serif", letterSpacing: "-0.2px" }}>PrimeEdge</span>
          <span style={{ color: "#888", fontWeight: 400, fontSize: 10.5, fontFamily: "Arial, sans-serif", letterSpacing: "0.06em" }}>ANALYTICS</span>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    name: "BluePeak Retail",
    tagline: "Modern Commerce",
    industry: "Retail",
    hoverColor: "#1D4ED8",
    logo: (
      <div className="flex items-center gap-2.5">
        <div style={{
          width: 46, height: 46, borderRadius: 10,
          background: "linear-gradient(135deg, #1D4ED8 0%, #1038a8 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 8px rgba(29,78,216,0.25)"
        }}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M4 20 L13 6 L22 20 Z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round"/>
            <path d="M8.5 20 L13 12 L17.5 20" stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="flex flex-col leading-tight">
          <span style={{ color: "#1D4ED8", fontWeight: 800, fontSize: 16, fontFamily: "Arial Black, Arial, sans-serif", letterSpacing: "-0.2px" }}>BluePeak</span>
          <span style={{ color: "#888", fontWeight: 400, fontSize: 10.5, fontFamily: "Arial, sans-serif", letterSpacing: "0.06em" }}>RETAIL</span>
        </div>
      </div>
    ),
  },
];

/* ─── Testimonials ─────────────────────────────────────────── */
const testimonials = [
  {
    quote: "Nabhira Technologies transformed our entire cloud infrastructure within record time. Their team's depth of expertise and commitment to excellence is unparalleled.",
    author: "Director of Technology",
    company: "Hutech Solutions",
    color: "#0057A8",
  },
  {
    quote: "The data engineering platform they built for us has given us real-time visibility across our agri-supply chain. A true technology partner, not just a vendor.",
    author: "Chief Operations Officer",
    company: "H2H Agrotech",
    color: "#2E8B3B",
  },
  {
    quote: "From ERP integration to AI-driven insights, Nabhira delivered end-to-end excellence. Our global retail operations have never been more agile.",
    author: "VP of Digital Transformation",
    company: "Two2Foot Global",
    color: "#E05C1A",
  },
];

/* ─── Industry stats ───────────────────────────────────────── */
const industryStats = [
  { label: "Technology", count: 12, color: "#0057A8" },
  { label: "Agriculture", count: 6, color: "#2E8B3B" },
  { label: "Retail & Commerce", count: 9, color: "#E05C1A" },
  { label: "Manufacturing", count: 7, color: "#344054" },
  { label: "Fintech", count: 5, color: "#5B21B6" },
  { label: "Logistics", count: 4, color: "#0891B2" },
];

/* ─── Component ────────────────────────────────────────────── */
export default function Clients() {
  useEffect(() => {
    document.title = "Our Clients | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative h-[400px] md:h-[520px] bg-[#11253e] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1667646639408-b320d58836e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBjbGllbnRzJTIwYnVzaW5lc3MlMjBzdWNjZXNzJTIwbWVldGluZ3xlbnwxfHx8fDE3NzI3MTA3NjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Our Clients"
            className="w-full h-full object-cover opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11253e] via-[#11253e]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] via-transparent to-transparent" />
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl space-y-8"
          >
            <nav className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4 font-bold">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="w-1 h-1 rounded-full bg-[#f99d1c]" />
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <span className="w-1 h-1 rounded-full bg-[#f99d1c]" />
              <span className="text-[#f99d1c]">Our Clients</span>
            </nav>

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm">
              Trusted By<br />
              <span className="text-[#f99d1c]">Industry</span> Leaders
            </h1>

            {/* Orange left-border tagline */}
            <div className="flex items-start gap-4 pt-2">
              <div className="w-1 h-12 bg-[#f99d1c] rounded-full flex-shrink-0 mt-1" />
              <p className="text-white/80 text-base sm:text-lg md:text-[20px] font-light leading-relaxed max-w-xl">
                From agri-tech startups to global retail enterprises — we engineer transformation for organisations that demand precision, speed, and lasting impact.
              </p>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ── Trust Stats Bar ──────────────────────────────────── */}
      <section className="bg-[#f99d1c]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: <Users size={20} />, value: "45+", label: "Enterprise Clients" },
              { icon: <Globe size={20} />, value: "14", label: "Countries Served" },
              { icon: <TrendingUp size={20} />, value: "98%", label: "Client Retention" },
              { icon: <Award size={20} />, value: "200+", label: "Projects Delivered" },
            ].map((s, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center gap-1 text-white"
              >
                <div className="flex items-center gap-2 mb-0.5 text-white/80">{s.icon}</div>
                <span className="text-3xl font-black tracking-tight">{s.value}</span>
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/80">{s.label}</span>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client Logos Grid ────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-12">
          <div className="text-center mb-14">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#f99d1c] mb-3">Our Clientele</p>
            <h2 className="text-[#11253e] text-3xl md:text-4xl font-light mb-4 tracking-tight">
              Companies That <span className="font-bold">Trust Nabhira</span>
            </h2>
            <div className="w-16 h-1 bg-[#f99d1c] mx-auto mb-6" />
            <p className="max-w-xl mx-auto text-[#11253e] font-light text-sm leading-relaxed" style={{ opacity: 0.65 }}>
              We are privileged to serve a diverse portfolio of clients across industries — each partnership a testament to our commitment to engineering excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {clients.map((client, i) => (
              <Motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: `0 16px 40px ${client.hoverColor}1a` }}
                className="bg-white border border-gray-100 rounded-lg flex flex-col items-center justify-center py-5 px-5 gap-3 transition-all duration-300 group cursor-pointer"
                style={{ minHeight: 110 }}
              >
                <div className="group-hover:scale-105 transition-transform duration-300">
                  {client.logo}
                </div>
                <span
                  className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 transition-colors text-center"
                  style={{ "--hover-color": client.hoverColor } as React.CSSProperties}
                >
                  {client.industry}
                </span>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries We Serve ──────────────────────────────── */}
      <section className="py-20 bg-[#f8f9fb] relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(rgba(17,37,62,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12">
          <div className="text-center mb-14">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#f99d1c] mb-3">Sector Reach</p>
            <h2 className="text-[#11253e] text-3xl md:text-4xl font-light mb-4 tracking-tight">
              Industries We <span className="font-bold">Transform</span>
            </h2>
            <div className="w-16 h-1 bg-[#f99d1c] mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {industryStats.map((ind, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-sm border border-gray-100 p-6 flex items-center gap-5 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Color bar */}
                <div className="w-1 self-stretch rounded-full flex-shrink-0" style={{ background: ind.color }} />
                <div className="flex-1">
                  <p className="text-[#11253e] font-bold text-sm tracking-tight">{ind.label}</p>
                  <p className="text-gray-400 text-[10px] font-bold tracking-[0.15em] uppercase mt-0.5">{ind.count} Clients</p>
                </div>
                {/* Bar */}
                <div className="flex-1 hidden sm:block">
                  <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                    <Motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(ind.count / 12) * 100}%` }}
                      transition={{ delay: i * 0.08 + 0.2, duration: 0.7, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-full rounded-full"
                      style={{ background: ind.color }}
                    />
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-12">
          <div className="text-center mb-14">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#f99d1c] mb-3">Client Voices</p>
            <h2 className="text-[#11253e] text-3xl md:text-4xl font-light mb-4 tracking-tight">
              What Our <span className="font-bold">Clients Say</span>
            </h2>
            <div className="w-16 h-1 bg-[#f99d1c] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
                className="bg-[#f8f9fb] rounded-sm p-8 flex flex-col gap-5 relative group hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-sm" style={{ background: t.color }} />

                <Quote size={28} style={{ color: t.color, opacity: 0.35 }} />

                <p className="text-[#11253e] text-sm font-light leading-relaxed flex-1" style={{ opacity: 0.85 }}>
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                  {/* Avatar initial */}
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                    style={{ background: t.color }}>
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="text-[#11253e] font-bold text-[11px] tracking-tight">{t.author}</p>
                    <p className="text-[10px] font-bold tracking-[0.1em] uppercase mt-0.5" style={{ color: t.color }}>{t.company}</p>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-24 bg-[#11253e] overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: -120, right: -80, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(249,157,28,0.18) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: -80, left: -60, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(249,157,28,0.10) 0%, transparent 70%)" }} />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f99d1c]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f99d1c]/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 text-center">
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#f99d1c]" />
              <span className="text-[#f99d1c] text-[10px] font-bold tracking-[0.3em] uppercase">Join Our Client Family</span>
              <div className="w-8 h-px bg-[#f99d1c]" />
            </div>

            <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight leading-tight">
              Ready to become our<br />
              <span className="text-[#f99d1c] font-bold">next success story</span>?
            </h2>

            <p className="text-white/65 font-light max-w-lg leading-relaxed">
              Whether you are a startup scaling fast or an enterprise modernising your core — our engineering teams are built to deliver transformation at every stage.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="block bg-[#f99d1c] text-white px-10 py-4 font-bold text-[11px] tracking-[0.2em] uppercase rounded-sm hover:bg-[#e08b1a] transition-colors"
                  style={{ boxShadow: "0 8px 32px rgba(249,157,28,0.35)" }}
                >
                  Start a Conversation
                </Link>
              </Motion.div>
              <Motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/resources/case-studies"
                  className="block border border-white/25 text-white px-10 py-4 font-bold text-[11px] tracking-[0.2em] uppercase rounded-sm hover:border-[#f99d1c] hover:text-[#f99d1c] transition-colors"
                >
                  View Case Studies
                </Link>
              </Motion.div>
            </div>
          </Motion.div>
        </div>
      </section>

      <LimitlessTogether />
    </>
  );
}
