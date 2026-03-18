"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ArrowLeft, Share2, Globe, FileText, ChevronRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    date: "Feb 10, 2026",
    source: "Bloomberg Technology",
    title: "Nabhira Technologies Announces Expansion into Southeast Asian Markets",
    image: "https://images.unsplash.com/photo-1542241617-956c329d6404?auto=format&fit=crop&q=80&w=1200",
    content: `
      <p className="mb-6 font-bold text-[#11253e] text-lg">SINGAPORE — Nabhira Technologies, the architectural consulting powerhouse, today announced a multi-year expansion plan into the Southeast Asian (SEA) markets, starting with a new regional headquarters in Singapore.</p>
      <p className="mb-6 text-[#11253e] leading-relaxed">The move comes as SEA experiences a surge in demand for high-end digital architecture and AI-native enterprise transformation. Nabhira's CEO stated that the region's unique blend of emerging fintech and manufacturing hubs provides the ideal environment for the firm's signature architectural approach.</p>
      <h2 className="text-xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-widest">Regional Hub Strategy</h2>
      <p className="mb-6 text-[#11253e] leading-relaxed">"Southeast Asia is no longer just a manufacturing hub; it's a global center for digital innovation." The Singapore office will serve as a center of excellence for Cloud Sovereignty and Agentic AI, employing over 200 senior architects and consultants by the end of 2026.</p>
    `
  },
  {
    id: 2,
    date: "Jan 25, 2026",
    source: "Financial Times",
    title: "The Architecture of Tomorrow: Why Nabhira is Leading the AI-Native Revolution",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    content: `
      <p className="mb-6 font-bold text-[#11253e] text-lg">LONDON — In the crowded field of enterprise consulting, one firm is standing out for its refusal to use buzzwords. Nabhira Technologies has built its reputation on a rigorous, architectural approach to Artificial Intelligence.</p>
      <p className="mb-6 text-[#11253e] leading-relaxed">The Financial Times explores how Nabhira's "First Principles Architecture" is helping Fortune 500 companies move past the pilot phase of AI. While others focus on models, Nabhira focuses on the data fabric that feeds them.</p>
      <h2 className="text-xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-widest">A Different Kind of Consultant</h2>
      <p className="mb-6 text-[#11253e] leading-relaxed">Industry analysts suggest that Nabhira's success lies in its deep engineering roots. Unlike traditional management consultancies, Nabhira doesn't just provide strategies; they design the digital nervous systems that execute them.</p>
      <blockquote className="border-l-4 border-[#f99d1c] pl-8 py-6 my-12 italic text-2xl text-[#11253e] bg-gray-50">
        "Nabhira is the architect that builds the cathedral, not just the contractor that lays the bricks." — Senior Analyst, FT Intelligence.
      </blockquote>
    `
  },
  {
    id: 3,
    date: "Dec 12, 2025",
    source: "Business Insider",
    title: "Top 50 Cloud Companies to Watch in 2026",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    content: `
      <p className="mb-6 font-bold text-[#11253e] text-lg">NEW YORK — Business Insider has released its annual list of the 'Top 50 Cloud Companies to Watch', and Nabhira Technologies has claimed a top-five spot for the first time.</p>
      <p className="mb-6 text-[#11253e] leading-relaxed">The list highlights companies that are fundamentally changing how enterprises utilize cloud computing. Nabhira was praised for its pioneering work in multi-cloud mesh architectures and decentralized data governance.</p>
      <h2 className="text-xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-widest">The Multi-Cloud Advantage</h2>
      <p className="mb-6 text-[#11253e] leading-relaxed">The recognition comes after a year of record growth for Nabhira, which saw its global client base expand by 40%. The firm's proprietary "Nabhira Mesh" framework has become the gold standard for enterprises looking to avoid vendor lock-in while maintaining high performance across disparate cloud providers.</p>
    `
  }
];

export default function NewsDetail({ wordpressData }: any) {
  const { id } = useParams();
  const item = newsItems.find(n => n.id === Number(id));

  useEffect(() => {
    if (item) {
      document.title = `${item.title} | Nabhira Press`;
      window.scrollTo(0, 0);
    }
  }, [item]);

  if (!item) {
    return (
      <div className="flex items-center justify-center bg-white py-24">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#11253e]">Press Release Not Found</h2>
          <Link href="/resources/news" className="text-[#f99d1c] font-bold mt-4 inline-block">Back to News</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <Link href="/resources/news" className="inline-flex items-center gap-2 text-[10px] font-bold text-[#11253e] uppercase tracking-widest mb-12 hover:text-[#f99d1c] transition-colors">
              <ArrowLeft size={14} /> Back to Press Room
            </Link>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="bg-[#f99d1c] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">Press Release</span>
                <span className="text-[#11253e] text-[10px] font-bold uppercase tracking-widest">{item.date}</span>
              </div>
              
              <h1 className="text-[#11253e] text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                {item.title}
              </h1>
              
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <Globe size={16} className="text-[#f99d1c]" />
                <span className="text-sm font-bold text-[#11253e] uppercase tracking-widest">{item.source}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="max-w-7xl mx-auto px-6 -mt-10">
          <div className="aspect-[21/9] overflow-hidden rounded-sm shadow-2xl">
            <ImageWithFallback 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover" 
            />
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-12">
              <div 
                className="prose prose-lg max-w-none text-[#11253e] font-light leading-relaxed news-content"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
              
              <div className="mt-20 pt-12 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-8">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-[#11253e] uppercase tracking-widest">Media Contact</p>
                  <p className="text-sm font-bold text-[#11253e]">press@nabhira.tech</p>
                </div>
                
                <div className="flex items-center gap-6">
                  <button className="text-[#11253e] hover:text-[#f99d1c] transition-colors"><Share2 size={18} /></button>
                  <button className="text-[#11253e] hover:text-[#f99d1c] transition-colors"><FileText size={18} /></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More News Section */}
        <section className="py-24 bg-[#11253e]">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-white text-3xl font-bold tracking-tight">Recent <span className="text-[#f99d1c]">Coverage</span></h2>
              <Link href="/resources/news" className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform">
                View All <ChevronRight size={14} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsItems.filter(n => n.id !== item.id).slice(0, 2).map((news) => (
                <Link key={news.id} href={`/resources/news/${news.id}`} className="block group">
                  <div className="bg-white/5 p-8 border border-white/10 group-hover:bg-white/10 transition-colors h-full">
                    <p className="text-[10px] font-bold text-[#f99d1c] uppercase tracking-widest mb-4">{news.date}</p>
                    <h3 className="text-white text-xl font-bold mb-6 group-hover:text-[#f99d1c] transition-colors">{news.title}</h3>
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{news.source}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}