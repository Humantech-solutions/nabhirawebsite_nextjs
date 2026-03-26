"use client";

import React, { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from '../assets/footer.png';
import { motion as Motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const whyNabhiraQA = [
  {
    question: "Structured Approach",
    answer: "Defined framework from inception to realization with milestones, governance and measurable checkpoints"
  },
  {
    question: "Delivery Maturity",
    answer: "Consistently executing complex programs with proven governance, risk control, quality standards and predictable results at scale."
  },
  {
    question: "Automation to the core",
    answer: "Embedding intelligent automation across processes, delivery, and operations to drive efficiency, consistency, and scalability by design."
  },
  {
    question: "Predictable Outcome",
    answer: "⁠Leveraging architecture rigor, automation, observability, and data-driven controls to consistently deliver measurable technology and business results."
  }
];

export function LimitlessTogether() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-black text-white relative overflow-hidden py-24 min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758691737246-95bf8f09a997?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0d28lMjB3b21lbiUyMHRhbGtpbmclMjBpbiUyMG1vZGVybiUyMG9mZmljZSUyMG9mZmljZSUyMGludGVyaW9yfGVufDF8fHx8MTc3MTc3NzQ4NXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Why Nabhira?"
          className="w-full h-full object-cover opacity-50 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="space-y-8">
            <h2 className="text-5xl font-extralight tracking-tight leading-tight">
              Why Nabhira?
            </h2>
            <div className="text-white/70 text-lg font-light leading-relaxed max-w-lg space-y-6">
              <p>
                We bring a structured, outcome-driven approach to every transformation initiative.
              </p>
              <p>
                Our delivery maturity ensures predictable execution, governance discipline, and measurable results.
              </p>
              <p>
                With automation embedded at the core, we accelerate speed, enhance quality, and drive sustainable cost efficiency.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {whyNabhiraQA.map((item, index) => (
              <div 
                key={index} 
                className={`border-b border-white/10 transition-all duration-300 ${openIndex === index ? 'pb-6' : 'pb-4'}`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center text-left group"
                >
                  <span className={`text-xl font-light tracking-tight transition-colors duration-300 ${openIndex === index ? 'text-[#f99d1c]' : 'text-white group-hover:text-[#f99d1c]'}`}>
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-[#f99d1c] border-[#f99d1c]' : 'group-hover:border-[#f99d1c]'}`}>
                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <Motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-white/90 font-light leading-relaxed text-md">
                        {item.answer}
                      </p>
                    </Motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const socialIcons = [
  {
    name: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    name: "X",
    href: "https://x.com/NabhiraTech",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@NabhiraTechnologies",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nabhira_technologies/",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    )
  },
  {
    name: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
];

const serviceLinks = [
  { label: "Cloud Advisory", to: "/services/cloud-advisory" },
  { label: "Cloud Migration", to: "/services/cloud-migration" },
  { label: "Cloud Modernization", to: "/services/cloud-modernization" },
  { label: "Cloud-native Development", to: "/services/cloud-native-development" },
  { label: "Cloud Security & Governance", to: "/services/cloud-security-governance" },
  { label: "Cloud Financial Management", to: "/services/cloud-financial-management" },
  { label: "Data Engineering", to: "/services/data-engineering" },
  { label: "Data Analytics", to: "/services/data-analytics-solution" },
  { label: "Data Governance", to: "/services/data-governance" },
  { label: "AI Engineering", to: "/services/ai-engineering" },
  { label: "Agentic AI", to: "/services/agentic-ai" },
  { label: "Intelligent Automation", to: "/solutions/intelligent-automation" },
];

const industryLinks = [
  { label: "Banking & Financial Services", to: "/industries/banking-finance" },
  { label: "Retail & Consumer Goods", to: "/industries/retail-consumer" },
  { label: "Manufacturing & Automotive", to: "/industries/manufacturing-automotive" },
  { label: "Healthcare & Pharma", to: "/industries/healthcare-pharma" },
  { label: "Media & Entertainment", to: "/industries/media-entertainment" },
  { label: "Government & PSUs", to: "/industries/government-psu" },
];

const solutionLinks = [
  { label: "AI Powered Point of Sales App", to: "/solutions/enterprise-pos" },
  { label: "AI based LMS System", to: "/solutions/ailms" },
  { label: "Policy Engine System", to: "/solutions/policy-engine" },
];

const resourceLinks = [
  { label: "About Nabhira", to: "/about" },
  { label: "Leadership", to: "/leadership" },
  { label: "Partners Ecosystem", to: "/partners" },
  { label: "Awards", to: "/awards" },
  { label: "Blogs", to: "/resources/blogs" },
  { label: "Case Studies", to: "/resources/case-studies" },
  { label: "In the News", to: "/resources/news" },
  { label: "Events", to: "/resources/events" },
];

interface MobileSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  openSection: string | null;
  toggle: (key: string) => void;
}

const MobileSection = ({
  id, title, children, openSection, toggle
}: MobileSectionProps) => (
  <div className="border-b border-white/10 lg:border-none">
    {/* Mobile toggle header */}
    <button
      className="w-full flex items-center justify-between py-4 lg:hidden"
      onClick={() => toggle(id)}
      aria-expanded={openSection === id}
    >
      <span className="text-xs font-medium uppercase tracking-normal text-[#f99d1c]">{title}</span>
      <span className={`text-white/40 transition-transform duration-300 ${openSection === id ? "rotate-180" : ""}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </button>
    {/* Desktop heading always visible */}
    <h4 className="hidden lg:block text-xs font-medium uppercase tracking-normal text-[#f99d1c] mb-5">{title}</h4>
    {/* Content: always visible on lg+, animated on mobile */}
    <div className={`overflow-hidden transition-all duration-300 ease-in-out lg:!max-h-none lg:opacity-100 ${openSection === id ? "max-h-[600px] opacity-100 pb-4" : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100"}`}>
      {children}
    </div>
  </div>
);

export function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggle = (key: string) => setOpenSection(prev => prev === key ? null : key);

  return (
    <footer className="bg-[#0b1b3d] text-white pt-12 md:pt-16 lg:pt-24 pb-8 md:pb-12 overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#f99d1c] opacity-5 -mb-24 -mr-24 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Brand row on mobile (always visible) ── */}
        <div className="mb-8 md:mb-0">
          <div className="lg:hidden flex items-center mb-5">
            <Link href="/">
              <Image src={logo} alt="Nabhira Logo" className="h-9 w-auto" />
            </Link>
          </div>
          <p className="lg:hidden text-white/60 text-[14px] font-light leading-relaxed mb-5">
            Nabhira is a global pioneer in Cloud-first intelligence, Data-driven engineering, and Agentic AI — empowering enterprises across 50+ countries.
          </p>
          {/* Social icons always visible on mobile */}
          <div className="lg:hidden space-y-3 pb-6 border-b border-white/10">
            <h4 className="text-xs font-medium uppercase tracking-normal text-[#f99d1c]">Follow Us</h4>
            <div className="flex items-center flex-wrap gap-5">
              {socialIcons.map((social) => (
                <a key={social.name} href={social.href} aria-label={social.name}
                  className="text-white/40 hover:text-[#f99d1c] transition-colors duration-300">
                  {social.svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-x-8 lg:gap-10 mt-2 md:mt-8 lg:mt-0 mb-8 md:mb-16 lg:mb-24">

          {/* Column 1 — Brand (desktop only) */}
          <div className="hidden lg:flex flex-col space-y-5">
            <div className="flex items-center">
              <Link href="/"><Image src={logo} alt="Nabhira Logo" className="h-10 w-auto" /></Link>
            </div>
            <div className="space-y-4">
              <p className="text-white/70 text-[14px] font-light leading-relaxed tracking-wide">
                Nabhira is a global pioneer in Cloud-first intelligence, Data-driven engineering and Agentic AI. We empower enterprises across 50+ countries to orchestrate their digital evolution through advanced data ecosystems and autonomous cloud platforms.
              </p>
              <p className="text-white/70 text-[12px] font-light italic">
                Driving innovation through Cloud Advisory, Data Engineering, and Agentic AI solutions for the modern enterprise.
              </p>
            </div>
            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-medium uppercase tracking-normal text-[#f99d1c]">Follow Us</h4>
              <div className="flex items-center flex-wrap gap-4">
                {socialIcons.map((social) => (
                  <a key={social.name} href={social.href} aria-label={social.name}
                    className="text-white/40 hover:text-[#f99d1c] transition-colors duration-300">
                    {social.svg}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 — Our Services */}
          <div>
            <MobileSection id="services" title="Our Services" openSection={openSection} toggle={toggle}>
              <ul className="space-y-3 text-sm font-light text-white/60">
                {serviceLinks.map((link) => (
                  <li key={link.to}>
                    <Link href={link.to} className="hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </MobileSection>
          </div>

          {/* Column 3 — Industries + Solutions */}
          <div>
            <MobileSection id="industries" title="Industries" openSection={openSection} toggle={toggle}>
              <ul className="space-y-3 text-sm font-light text-white/60">
                {industryLinks.map((link) => (
                  <li key={link.to}>
                    <Link href={link.to} className="hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
              <h4 className="text-xs font-medium uppercase tracking-normal text-[#f99d1c] mt-6 mb-4">Solutions</h4>
              <ul className="space-y-3 text-sm font-light text-white/60">
                {solutionLinks.map((link) => (
                  <li key={link.to}>
                    <Link href={link.to} className="hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </MobileSection>
          </div>

          {/* Column 4 — Resources + Topics */}
          <div>
            <MobileSection id="resources" title="Resources" openSection={openSection} toggle={toggle}>
              <ul className="space-y-3 text-sm font-light text-white/60">
                {resourceLinks.map((link) => (
                  <li key={link.to}>
                    <Link href={link.to} className="hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
              <h4 className="text-xs font-medium uppercase tracking-normal text-[#f99d1c] mt-6 mb-4">Topics</h4>
              <ul className="space-y-3 text-sm font-light text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">AI &amp; ML</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cybersecurity</a></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </MobileSection>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-6 md:pt-8 border-t border-white/5 flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-0 text-[10px] font-light text-white/40 uppercase tracking-widest">
          <p className="text-center md:text-left">© 2026 NABHIRA TECHNOLOGIES PRIVATE LIMITED</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            <a href="#" className="hover:text-[#08b2ff] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#08b2ff] transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-[#08b2ff] transition-colors">Cookie Policy</a>
            <Link href="/contact?category=Footer" className="hover:text-[#08b2ff] transition-colors">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
