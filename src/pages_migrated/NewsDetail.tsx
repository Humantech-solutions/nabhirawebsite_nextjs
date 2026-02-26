"use client";

import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, User, ArrowLeft, Share2, Globe, FileText, ChevronRight } from "lucide-react";
import { newsItems } from "../data/migrated_data";

export default function NewsDetail() {
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
            <Link href="/resources/news" className="inline-flex items-center gap-2 text-[10px] font-bold text-[#11253e]/40 uppercase tracking-widest mb-12 hover:text-[#f99d1c] transition-colors">
              <ArrowLeft size={14} /> Back to Press Room
            </Link>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="bg-[#f99d1c] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">Press Release</span>
                <span className="text-[#11253e]/40 text-[10px] font-bold uppercase tracking-widest">{item.date}</span>
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
            
            {/* Main Content */}
            <div className="lg:col-span-12">
              <div 
                className="prose prose-lg max-w-none text-[#11253e]/70 font-light leading-relaxed news-content"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
              
              <div className="mt-20 pt-12 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-8">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-[#11253e]/40 uppercase tracking-widest">Media Contact</p>
                  <p className="text-sm font-bold text-[#11253e]">press@nabhira.tech</p>
                </div>
                
                <div className="flex items-center gap-6">
                  <button className="text-[#11253e]/40 hover:text-[#f99d1c] transition-colors"><Share2 size={18} /></button>
                  <button className="text-[#11253e]/40 hover:text-[#f99d1c] transition-colors"><FileText size={18} /></button>
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
