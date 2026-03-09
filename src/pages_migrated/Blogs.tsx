"use client";

import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import Link from "next/link";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, User, ArrowRight } from "lucide-react";
import { blogPosts } from "../data/migrated_data";
import { Hero } from "../components/Hero";
import { renderHeroTitle } from "../lib/utils";

interface BlogPageProps {
  posts?: any[];
  wordpressData?: {
    globalSettings?: {
      heroSlides: any;
      limitlessTogether: any;
    };
  };
}

export default function Blogs({ posts, wordpressData }: BlogPageProps) {
  useEffect(() => {
    document.title = "Insights & Perspectives | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const displayPosts = posts && posts.length > 0 ? posts : blogPosts;

  const gs = wordpressData?.globalSettings;
  const heroData = gs?.heroSlides;

  return (
    <>
      {/* Blogs Hero */}
      <section className="relative h-[300px] overflow-hidden flex items-center">
          <div className="absolute inset-0">
            <ImageWithFallback
              src={heroData?.heroS1ImageUrl || heroData?.heroS1Image?.node?.sourceUrl || "https://images.unsplash.com/photo-1761815937101-f32643eaa17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdGVjaCUyMHdvcmtzcGFjZSUyMGxhcHRvcCUyMHdpbmRvdyUyMGNpdHklMjB2aWV3fGVufDF8fHx8MTc3MTkwMDkyMXww&ixlib=rb-4.1.0&q=80&w=1080"}
              alt="Nabhira Blogs"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#11253e]/80"></div>
          </div>
          <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex items-center">
            <div>
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                {renderHeroTitle(heroData?.heroS1Title || (
                  <>
                    Insights & <span className="text-[#f99d1c]">Perspectives</span>
                  </>
                ))}
              </h1>
              <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
                {heroData?.heroS1Desc || "Expert analysis on the architectural trends shaping the digital frontier."}
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {displayPosts.map((post: any, idx: number) => {
                const postId = post.id || idx;
                const postSlug = post.slug || post.id;
                const postTitle = post.title || "";
                const postImage = post.featuredImage?.node?.sourceUrl || post.image || "https://images.unsplash.com/photo-1761815937101-f32643eaa17e?q=80&w=1080";
                const postCategory = post.categories?.nodes[0]?.name || post.category || "General";
                const postDate = post.date ? new Date(post.date).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase() : post.date;
                const postExcerpt = post.excerpt?.replace(/<[^>]*>?/gm, '').substring(0, 150) + "..." || post.excerpt;
                const postAuthor = post.author?.node?.name || post.author || "Nabhira Team";

                return (
                  <Motion.div 
                    key={postId}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Link href={`/resources/blogs/${postSlug}`} className="block">
                      <div className="aspect-[16/9] overflow-hidden mb-6 rounded-sm relative">
                        <img src={postImage} alt={postTitle} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-[#11253e]/0 group-hover:bg-[#11253e]/10 transition-colors duration-500"></div>
                      </div>
                    </Link>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-[10px] font-bold text-[#f99d1c] uppercase tracking-widest">
                        <span>{postCategory}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="text-gray-400">{postDate}</span>
                      </div>
                      <Link href={`/resources/blogs/${postSlug}`} className="block">
                        <h3 className="text-[#11253e] text-xl font-bold group-hover:text-[#f99d1c] transition-colors leading-tight">
                          {postTitle}
                        </h3>
                      </Link>
                      <div 
                        className="text-[#11253e]/60 font-light text-sm line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: post.excerpt || "" }}
                      />
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-xs font-medium text-[#11253e]/40">
                          <User size={14} /> {postAuthor}
                        </div>
                        <Link href={`/resources/blogs/${postSlug}`} className="text-[#f99d1c] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                          <ArrowRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </Motion.div>
                );
              })}
            </div>
          </div>
        </section>
    </>
  );
}
