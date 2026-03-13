"use client";

import { motion as Motion } from "motion/react";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { LimitlessTogether } from "../../components/Footer";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Linkedin, Mail } from "lucide-react";

export default function Leadership({ wordpressData }: any) {
  useEffect(() => {
    document.title = "Leadership | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const leaders = [
    {
      name: "Aditya Vardhan",
      role: "Chief Executive Officer",
      bio: "With over 20 years of experience in digital transformation, Aditya leads Nabhira's vision to architect the future of enterprise intelligence.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY2VjdXRpdmUlMjBtYW4lMjBzdWl0fGVufDF8fHx8MTc3MTg5OTAyOHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Meera Krishnan",
      role: "Chief Technology Officer",
      bio: "Meera is a pioneer in Cloud-native architectures and AI, driving the technological excellence that defines Nabhira's market-leading solutions.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY2VjdXRpdmUlMjB3b21hbiUyMHN1aXR8ZW58MXx8fHwxNzcxODk5MDI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Vikram Sethi",
      role: "Head of AI & Data Engineering",
      bio: "Vikram oversees our most complex data initiatives, specializing in building high-performance, autonomous data ecosystems for global majors.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxODk5MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <>
      {/* Leadership Hero */}
      <section className="relative h-[400px] md:h-[520px] bg-[#11253e] overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1700809888987-cf2b29ecbd2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBsZWFkZXJzaGlwJTIwdGVhbSUyMG9mZmljZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzE4OTkwMjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Nabhira Leadership"
              className="w-full h-full object-cover opacity-40 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#11253e] via-[#11253e]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] via-transparent to-transparent"></div>
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
            <Motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl space-y-8"
            >
              <nav className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4 font-bold">
                <Link href="/" className="hover:text-white cursor-pointer transition-colors">Home</Link>
                <span className="w-1 h-1 rounded-full bg-[#f99d1c]"></span>
                <Link href="/about" className="hover:text-white cursor-pointer transition-colors">About Us</Link>
                <span className="w-1 h-1 rounded-full bg-[#f99d1c]"></span>
                <span className="text-[#f99d1c]">Leadership</span>
              </nav>
              
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                The <span className="text-[#f99d1c]">Visionaries</span> <br />
                Behind the Precision
              </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-12 mb-8 md:mb-12">
                <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm">
                  Guided by a commitment to excellence and architectural integrity, our leadership team orchestrates digital evolution for the world's most ambitious enterprises.
                </p>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* Leadership Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {leaders.map((leader, i) => (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="aspect-[3/4] overflow-hidden mb-8 relative rounded-sm">
                    <ImageWithFallback
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <div className="absolute bottom-6 left-6 flex space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <Linkedin className="text-white cursor-pointer hover:text-[#f99d1c]" size={20} />
                      <Mail className="text-white cursor-pointer hover:text-[#f99d1c]" size={20} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-[1px] bg-[#f99d1c]"></div>
                      <span className="text-[#f99d1c] font-bold tracking-[0.2em] text-[10px] uppercase">{leader.role}</span>
                    </div>
                    <h3 className="text-[#11253e] text-2xl font-bold tracking-tight">{leader.name}</h3>
                    <p className="text-[#11253e] font-light text-sm leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Board & Advisors */}
        <section className="py-24 bg-[#f8f9fa] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 text-center">
            <h2 className="text-[#11253e] text-3xl font-light mb-12 tracking-tight">
              Governed by <span className="font-bold">Integrity</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-[#11253e] font-light leading-relaxed">
                Nabhira is advised by a globally diverse board of industry veterans who bring decades of experience from the world's leading technology and consulting firms, ensuring our strategic direction remains at the absolute forefront of digital innovation.
              </p>
            </div>
          </div>
        </section>

        <LimitlessTogether />
    </>
  );
}
