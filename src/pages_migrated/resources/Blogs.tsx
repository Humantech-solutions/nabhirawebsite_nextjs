"use client";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Rise of Agentic AI: Beyond Simple Automation",
    excerpt: "How autonomous agents are redefining enterprise productivity by making decisions in complex environments.",
    author: "Dr. Arvan Nabhira",
    date: "Feb 20, 2026",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1673255745677-e36f618550d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Cloud Sovereignty: Navigating Data Residency in 2026",
    excerpt: "Why global enterprises are shifting towards localized cloud architectures to meet emerging regulatory demands.",
    author: "Sarah Chen",
    date: "Feb 15, 2026",
    category: "Cloud Strategy",
    image: "https://images.unsplash.com/photo-1586448911122-f74aa8e3e4b6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Data Fabrics vs. Data Meshes: Choosing Your Architecture",
    excerpt: "A deep dive into the architectural paradigms shaping the next generation of data-driven enterprises.",
    author: "Marcus Thorne",
    date: "Feb 10, 2026",
    category: "Data Engineering",
    image: "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Modernization Is Now a Survival Strategy",
    excerpt: "Why organizations are shifting from 'Buy & Use' to 'Build & Use' in the age of AI.",
    author: "Dr. Arvan Nabhira",
    date: "Mar 01, 2026",
    category: "AI Modernization",
    image: "https://images.unsplash.com/photo-1744640326166-433469d102f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbW9kZXJuaXphdGlvbiUyMGNvcnBvcmF0ZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyNDU1NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export default function Blogs({ wordpressData }: any) {
  useEffect(() => {
    document.title = "Insights & Perspectives | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Blogs Hero */}
      <section className="relative h-[300px] overflow-hidden flex items-center">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1761815937101-f32643eaa17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdGVjaCUyMHdvcmtzcGFjZSUyMGxhcHRvcCUyMHdpbmRvdyUyMGNpdHklMjB2aWV3fGVufDF8fHx8MTc3MTkwMDkyMXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Nabhira Blogs"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#11253e]/80"></div>
          </div>
          <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex items-center">
            <div>
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                Insights & <span className="text-[#f99d1c]">Perspectives</span>
              </h1>
              <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
                Expert analysis on the architectural trends shaping the digital frontier.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {blogPosts.map((post, idx) => (
                <Motion.div 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={`/resources/blogs/${post.id}`} className="block">
                    <div className="aspect-[16/9] overflow-hidden mb-6 rounded-sm relative">
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-[#11253e]/0 group-hover:bg-[#11253e]/10 transition-colors duration-500"></div>
                    </div>
                  </Link>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-[10px] font-bold text-[#f99d1c] uppercase tracking-widest">
                      <span>{post.category}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="text-gray-400">{post.date}</span>
                    </div>
                    <Link href={`/resources/blogs/${post.id}`} className="block">
                      <h3 className="text-[#11253e] text-xl font-bold group-hover:text-[#f99d1c] transition-colors leading-tight">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-[#11253e] font-light text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-xs font-medium text-[#11253e]">
                        <User size={14} /> {post.author}
                      </div>
                      <Link href={`/resources/blogs/${post.id}`} className="text-[#f99d1c] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>
    </>
  );
}