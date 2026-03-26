"use client";

import { motion as Motion } from "motion/react";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { LimitlessTogether } from "../../components/Footer";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Award, Globe, Users, TrendingUp, Quote } from "lucide-react";
import hutechLogo from "../../assets/850c51ac28fa52bee9c144810fc847e3c6e0e86d.png";
import H2HLogo from "../../imports/Group79";
import Two2FootLogo from "../../imports/Group78-509-300";
import anelessLogo from "../../assets/b28fa9224fa312c9fffd357b7c52958ba5cccece.png";
import dreamixLogo from "../../assets/6355df8f352ac21ac85efd4673b0087b98b39b83.png";
import helionLogo from "../../assets/bc9968f5cbe35f8837559e9f31871e02de629df6.png";
import intwayLogo from "../../assets/53a59feaee1d46abc83f87eb629a51975d9c5ee7.png";
import vitmarkLogo from "../../assets/328e0509dd589bd5013f84e17bf754af3b15999a.png";

/* ─── Client data ─────────────────────────────────────────── */
const clients = [
  {
    id: 1,
    name: "Hutech Solutions",
    tagline: "Enterprise Technology",
    industry: "Technology",
    hoverColor: "#0057A8",
    logo: (
      <div className="flex items-center justify-center" style={{ height: 56 }}>
        <Image src={hutechLogo} alt="Hutech Solutions" style={{ maxHeight: 54, maxWidth: 140, objectFit: "contain" }} />
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
      <div className="flex items-center justify-center" style={{ height: 56, width: 160 }}>
        <H2HLogo />
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
      <div className="flex items-center justify-center" style={{ height: 56 }}>
        <div style={{ position: "relative", width: 152, height: 32, flexShrink: 0 }}>
          <Two2FootLogo />
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
      <div className="flex items-center justify-center" style={{ height: 56 }}>
        <Image src={anelessLogo} alt="Aneles" style={{ maxHeight: 40, maxWidth: 150, objectFit: "contain" }} />
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
      <div className="flex items-center justify-center" style={{ height: 56 }}>
        <Image src={dreamixLogo} alt="Dreamix" style={{ maxHeight: 44, maxWidth: 150, objectFit: "contain" }} />
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
      <div className="flex items-center justify-center" style={{ height: 56 }}>
        <Image src={helionLogo} alt="Helion" style={{ maxHeight: 44, maxWidth: 150, objectFit: "contain" }} />
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
      <div className="flex items-center justify-center" style={{ height: 56 }}>
        <Image src={intwayLogo} alt="Intway" style={{ maxHeight: 44, maxWidth: 150, objectFit: "contain" }} />
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
      <div className="flex items-center justify-center" style={{ height: 56 }}>
        <Image src={vitmarkLogo} alt="Vitmark" style={{ maxHeight: 44, maxWidth: 150, objectFit: "contain" }} />
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

/* ─── Component ────────────────────────────────────────────── */
export default function Clients({ wordpressData }: any) {
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
              { icon: <Users size={20} />, value: "30+", label: "Enterprise Clients" },
              { icon: <Globe size={20} />, value: "5+", label: "Countries Served" },
              { icon: <TrendingUp size={20} />, value: "98%", label: "Client Retention" },
              { icon: <Award size={20} />, value: "50+", label: "Projects Delivered" },
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
              Organizations That <span className="font-bold">Trust Nabhira</span>
            </h2>
            <div className="w-16 h-1 bg-[#f99d1c] mx-auto mb-6" />
            <p className="max-w-xl mx-auto text-[#11253e] font-light text-md leading-relaxed" style={{ opacity: 0.65 }}>
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
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-sm" style={{ background: t.color }} />
                <Quote size={28} style={{ color: t.color, opacity: 0.35 }} />
                <p className="text-[#11253e] text-sm font-light leading-relaxed flex-1" style={{ opacity: 0.85 }}>
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
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
                <Link href="/contact?category=Client"
                  className="block bg-[#f99d1c] text-white px-10 py-4 font-bold text-[11px] tracking-[0.2em] uppercase rounded-sm hover:bg-[#e08b1a] transition-colors"
                  style={{ boxShadow: "0 8px 32px rgba(249,157,28,0.35)" }}
                >
                  Start a Conversation
                </Link>
              </Motion.div>
              <Motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/resources/case-studies"
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