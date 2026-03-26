"use client";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion as Motion } from "motion/react";
import { SalesBrochureModal } from "../../components/SalesBrochureModal";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ShoppingCart, Zap, BarChart3, Users, ShieldCheck, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";

export default function POSSolution({ wordpressData }: any) {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  useEffect(() => {
    document.title = "AI-Powered Point of Sale | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Predictive Inventory",
      description: "AI algorithms analyze sales patterns to predict stockouts before they happen, optimizing your supply chain automatically.",
      icon: <Zap className="text-[#f99d1c]" />
    },
    {
      title: "Customer Persona Mapping",
      description: "Understand individual customer behavior and preferences at the point of transaction to offer personalized loyalty rewards.",
      icon: <Users className="text-[#f99d1c]" />
    },
    {
      title: "Real-time Analytics",
      description: "Multi-store synchronization with deep-dive analytics dashboards accessible from any device, anywhere in the world.",
      icon: <BarChart3 className="text-[#f99d1c]" />
    },
    {
      title: "Secure Edge Processing",
      description: "Ensuring transaction integrity with hardware-level encryption and offline-first capabilities for uninterrupted service.",
      icon: <ShieldCheck className="text-[#f99d1c]" />
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[650px] bg-[#11253e] overflow-hidden flex items-center">
          <div className="absolute inset-0 opacity-10">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1556742049-04ff4f476c5b?auto=format&fit=crop&q=80&w=2000"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="max-w-4xl">
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-[#f99d1c]/10 px-4 py-2 rounded-full mb-8">
                  <span className="w-2 h-2 rounded-full bg-[#f99d1c] animate-pulse"></span>
                  <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-widest">Retail Revolution</span>
                </div>
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                  The Future of <br />
                  <span className="text-[#f99d1c]">Intelligent Retail</span>
                </h1>
                <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
                  Nabhira's AI-Powered POS isn't just a transaction tool; it's a strategic asset that transforms every checkout into a data-driven opportunity.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/pos')}&title=${encodeURIComponent('Intelligent Retail POS')}&category=Solutions`}>
                    <button className="bg-[#f99d1c] text-white px-10 py-4 text-[12px] font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(249,157,28,0.3)] transition-all">
                      Request Demo
                    </button>
                  </Link>
                  <button 
                    onClick={() => setIsBrochureModalOpen(true)}
                    className="text-white px-10 py-4 text-[12px] font-bold uppercase tracking-widest border border-white/20 hover:bg-white/10 transition-all flex items-center gap-2"
                  >
                    Download Brochure <ArrowRight size={16} />
                  </button>
                </div>
              </Motion.div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-[#11253e] text-3xl md:text-4xl font-bold tracking-tight mb-6">Built for Global Scale</h2>
              <div className="w-16 h-1 bg-[#f99d1c] mx-auto mb-8"></div>
              <p className="text-[#11253e] text-lg font-light">
                Our architecture supports multi-region deployment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, idx) => (
                <Motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-10 bg-gray-50 border border-gray-100 group hover:border-[#f99d1c]/30 transition-all hover:shadow-xl"
                >
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-sm mb-8 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-[#11253e] text-lg font-bold mb-4">{feature.title}</h3>
                  <p className="text-[#11253e] text-sm leading-relaxed">{feature.description}</p>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deep Feature Section */}
        <section className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200"
                  alt="Analytics Dashboard"
                  className="rounded-sm shadow-xl"
                />
              </div>
              <div className="space-y-8">
                <h2 className="text-[#11253e] text-3xl font-bold tracking-tight">AI-Native Insights <br />That Drive Growth</h2>
                <p className="text-[#11253e] leading-relaxed">
                  Beyond simple reporting, our Policy Engine integration allows you to set automated rules for dynamic pricing, personalized discounting, and intelligent restock alerts.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Dynamic pricing based on real-time competitor data",
                    "Automated fraud detection at the point of sale",
                    "Integrated multi-currency and crypto-payment support",
                    "Seamless ERP synchronization (WorkbookNow Compatible)"
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <div className="w-5 h-5 rounded-full bg-[#f99d1c]/10 flex items-center justify-center">
                        <CheckCircle2 size={12} className="text-[#f99d1c]" />
                      </div>
                      <span className="text-sm font-medium text-[#11253e] uppercase tracking-wide">{text}</span>
                    </div>
                  ))}
                </div>
                
                <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/pos')}&title=${encodeURIComponent('Intelligent Retail POS')}&category=Solutions`}>
                  <button className="pt-4 text-[#f99d1c] text-[12px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 group">
                    Explore Architecture <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#11253e] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f99d1c]/10 -skew-x-12 translate-x-20"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-white text-4xl font-bold mb-8">Ready to Transform Your Retail Experience?</h2>
            <p className="text-white/60 text-lg font-light max-w-2xl mx-auto mb-12">
              Join leading global brands that trust Nabhira for their mission-critical retail infrastructure.
            </p>
            <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/pos')}&title=${encodeURIComponent('Intelligent Retail POS')}&category=Solutions`}>
              <button className="bg-[#f99d1c] text-white px-12 py-5 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#11253e] transition-all">
                Schedule a Consultation
              </button>
            </Link>
            <button 
              onClick={() => setIsBrochureModalOpen(true)}
              className="mt-6 border border-white text-white px-12 py-5 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#11253e] transition-all ml-4"
            >
              Download Brochure
            </button>
          </div>
        </section>

      <SalesBrochureModal 
        isOpen={isBrochureModalOpen} 
        onClose={() => setIsBrochureModalOpen(false)} 
        pageTitle="Intelligent Retail POS" 
      />
    </>
  );
}