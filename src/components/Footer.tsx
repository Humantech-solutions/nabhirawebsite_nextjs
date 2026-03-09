"use client";

import { useState } from "react";
import logo from '../assets/footer.png';
import Link from "next/link";
import Image from "next/image";
import { navigationConfig } from "../config/navigation";

const socialIconsMap: Record<string, React.ReactNode> = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
};

export function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const { footerLinks, socialLinks } = navigationConfig;

  const toggle = (key: string) => setOpenSection(prev => prev === key ? null : key);

  const MobileSection = ({
    id, title, children
  }: { id: string; title: string; children: React.ReactNode }) => (
    <div className="border-b border-white/10 lg:border-none">
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
      <h4 className="hidden lg:block text-xs font-medium uppercase tracking-normal text-[#f99d1c] mb-5">{title}</h4>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out lg:!max-h-none lg:opacity-100 ${openSection === id ? "max-h-[800px] opacity-100 pb-4" : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100"}`}>
        {children}
      </div>
    </div>
  );

  return (
    <footer className="bg-[#0b1b3d] text-white pt-12 md:pt-16 lg:pt-24 pb-8 md:pb-12 overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#f99d1c] opacity-5 -mb-24 -mr-24 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Brand row on mobile */}
        <div className="mb-8 md:mb-0">
          <div className="lg:hidden flex items-center mb-5">
            <Link href="/">
                <Image 
                  src={logo} 
                  alt="Nabhira Logo" 
                  width={150}
                  height={50}
                  className="h-10 w-auto" 
                />
              </Link>
          </div>
          <p className="lg:hidden text-white/60 text-[13px] font-light leading-relaxed mb-5">
            Nabhira is a global pioneer in Cloud-first intelligence, Data-driven engineering, and Agentic AI — empowering enterprises across 50+ countries.
          </p>
          <div className="lg:hidden space-y-3 pb-6 border-b border-white/10">
            <h4 className="text-xs font-medium uppercase tracking-normal text-[#f99d1c]">Follow Us</h4>
            <div className="flex items-center flex-wrap gap-5">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} aria-label={social.name}
                  className="text-white/40 hover:text-[#f99d1c] transition-colors duration-300">
                  {socialIconsMap[social.platform]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-x-8 lg:gap-10 mt-2 md:mt-8 lg:mt-0 mb-8 md:mb-16 lg:mb-24">

          {/* Column 1 — Brand (desktop only) */}
          <div className="hidden lg:flex flex-col space-y-5">
            <div className="flex items-center">
               <Link href="/">
                <Image 
                  src={logo} 
                  alt="Nabhira Logo" 
                  width={150}
                  height={50}
                  className="h-10 w-auto" 
                />
              </Link>
            </div>
            <div className="space-y-4">
              <p className="text-white/70 text-[13px] font-light leading-relaxed tracking-wide">
                Nabhira is a global pioneer in Cloud-first intelligence, Data-driven engineering and Agentic AI. We empower enterprises across 50+ countries to orchestrate their digital evolution through advanced data ecosystems and autonomous cloud platforms.
              </p>
              <p className="text-white/70 text-[12px] font-light italic">
                Driving innovation through Cloud Advisory, Data Engineering, and Agentic AI solutions for the modern enterprise.
              </p>
            </div>
            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-medium uppercase tracking-normal text-[#f99d1c]">Follow Us</h4>
              <div className="flex items-center flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} aria-label={social.name}
                    className="text-white/40 hover:text-[#f99d1c] transition-colors duration-300">
                    {socialIconsMap[social.platform]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 — Our Services */}
          <div>
            <MobileSection id="services" title="Our Services">
              <ul className="space-y-3 text-sm font-light text-white/60">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </MobileSection>
          </div>

          {/* Column 3 — Industries + Solutions */}
          <div>
            <MobileSection id="industries_solutions" title="Industries">
              <ul className="space-y-3 text-sm font-light text-white/60">
                {footerLinks.industries.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
              <h4 className="text-xs font-medium uppercase tracking-normal text-[#f99d1c] mt-6 mb-4">Solutions</h4>
              <ul className="space-y-3 text-sm font-light text-white/60">
                {footerLinks.solutions.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </MobileSection>
          </div>

          {/* Column 4 — Resources + Topics */}
          <div>
            <MobileSection id="resources_topics" title="Resources">
              <ul className="space-y-3 text-sm font-light text-white/60">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
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

        {/* Bottom bar */}
        <div className="pt-6 md:pt-8 border-t border-white/5 flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-0 text-[10px] font-light text-white/40 uppercase tracking-widest">
          <p className="text-center md:text-left">© 2026 NABHIRA TECHNOLOGIES PRIVATE LIMITED</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            <a href="#" className="hover:text-[#08b2ff] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#08b2ff] transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-[#08b2ff] transition-colors">Cookie Policy</a>
            <Link href="/contact" className="hover:text-[#08b2ff] transition-colors">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
