"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ArrowLeft, Share2, Globe, FileText, ChevronRight, ExternalLink } from "lucide-react";
import { formatEventDate } from "../../lib/utils";

export default function NewsDetail({ wordpressData: item, newsData = [] }: any) {
  const [copied, setCopied] = React.useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item?.title || document.title,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      handleCopy();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
                <span className="bg-[#f99d1c] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">{item.category || "Press Release"}</span>
                <span className="text-[#11253e] text-[10px] font-bold uppercase tracking-widest">
                  {formatEventDate(item.date)}
                </span>
              </div>
              
              <h1 className="text-[#11253e] text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                {item.title}
              </h1>
              
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <Globe size={16} className="text-[#f99d1c]" />
                <span className="text-sm font-bold text-[#11253e] uppercase tracking-widest">{item.source}</span>
                {item.externalUrl && (
                  <Link 
                    href={item.externalUrl} 
                    target="_blank"
                    className="ml-auto inline-flex items-center gap-2 text-[10px] font-bold text-[#f99d1c] uppercase tracking-widest hover:opacity-70"
                  >
                    View Original <ExternalLink size={12} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Hero Media */}
        <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
          <div className="aspect-[21/9] overflow-hidden rounded-sm shadow-2xl bg-black">
            {item.videoUrl ? (
              item.videoUrl.includes("youtube.com") || item.videoUrl.includes("youtu.be") ? (
                <iframe 
                  className="w-full h-full" 
                  src={`https://www.youtube.com/embed/${item.videoUrl.includes("v=") ? item.videoUrl.split("v=")[1].split("&")[0] : item.videoUrl.split("youtu.be/")[1]?.split("?")[0]}?autoplay=1&mute=1`} 
                  allow="autoplay; encrypted-media" 
                  allowFullScreen
                ></iframe>
              ) : item.videoUrl.includes("vimeo.com") ? (
                <iframe 
                  className="w-full h-full" 
                  src={`https://player.vimeo.com/video/${item.videoUrl.split("vimeo.com/")[1]?.split("?")[0]}?autoplay=1&muted=1`} 
                  allow="autoplay; fullscreen" 
                  allowFullScreen
                ></iframe>
              ) : (
                <video className="w-full h-full object-cover" src={item.videoUrl} autoPlay muted loop playsInline controls />
              )
            ) : (
              <ImageWithFallback 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover" 
              />
            )}
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
                  <a href={`mailto:${item.mediaContact || "press@nabhira.tech"}`} className="text-sm font-bold text-[#11253e] hover:text-[#f99d1c] transition-colors inline-block">
                    {item.mediaContact || "press@nabhira.tech"}
                  </a>
                </div>
                
                <div className="flex items-center gap-6">
                  <button 
                    onClick={handleShare}
                    className="text-[#11253e] hover:text-[#f99d1c] transition-colors" 
                    title="Share Article"
                  >
                    <Share2 size={18} />
                  </button>
                  <button 
                    onClick={handleCopy}
                    className="text-[#11253e] hover:text-[#f99d1c] transition-colors relative"
                    title="Copy Link"
                  >
                    <FileText size={18} />
                    {copied && (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#11253e] text-white text-[10px] px-2 py-1 rounded whitespace-nowrap shadow-sm">
                        Copied!
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More News Section */}
        {newsData?.length > 0 && (
          <section className="py-24 bg-[#11253e]">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
              <div className="flex justify-between items-end mb-12">
                <h2 className="text-white text-3xl font-bold tracking-tight">Recent <span className="text-[#f99d1c]">Coverage</span></h2>
                <Link href="/resources/news" className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform">
                  View All <ChevronRight size={14} />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {newsData.filter((n: any) => n.slug !== item.slug).slice(0, 2).map((news: any) => (
                  <Link key={news.id} href={`/resources/news/${news.slug}`} className="block group">
                    <div className="bg-white/5 p-8 border border-white/10 group-hover:bg-white/10 transition-colors h-full">
                      <p className="text-[10px] font-bold text-[#f99d1c] uppercase tracking-widest mb-4">
                        {formatEventDate(news.date)}
                      </p>
                      <h3 className="text-white text-xl font-bold mb-6 group-hover:text-[#f99d1c] transition-colors">
                        {news.title}
                      </h3>
                      <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                        {news.source}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}