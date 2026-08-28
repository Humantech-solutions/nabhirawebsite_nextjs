"use client";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { User, ArrowRight } from "lucide-react";
import { renderHeroTitle, formatQuotesToBold } from "../../lib/utils";

// Static fallback posts shown when WordPress is unavailable
const STATIC_POSTS = [
  {
    id: "1",
    slug: "the-rise-of-agentic-ai",
    title: "The Rise of Agentic AI: Beyond Simple Automation",
    excerpt: "How autonomous agents are redefining enterprise productivity by making decisions in complex environments.",
    author: { node: { name: "Dr. Arvan Hutech Solutions" } },
    date: "2026-02-20T00:00:00",
    categories: { nodes: [{ name: "Artificial Intelligence" }] },
    featuredImage: { node: { sourceUrl: "https://images.unsplash.com/photo-1673255745677-e36f618550d1?auto=format&fit=crop&q=80&w=800" } }
  },
  {
    id: "2",
    slug: "cloud-sovereignty-2026",
    title: "Cloud Sovereignty: Navigating Data Residency in 2026",
    excerpt: "Why global enterprises are shifting towards localized cloud architectures to meet emerging regulatory demands.",
    author: { node: { name: "Sarah Chen" } },
    date: "2026-02-15T00:00:00",
    categories: { nodes: [{ name: "Cloud Strategy" }] },
    featuredImage: { node: { sourceUrl: "https://images.unsplash.com/photo-1586448911122-f74aa8e3e4b6?auto=format&fit=crop&q=80&w=800" } }
  },
  {
    id: "3",
    slug: "data-fabrics-vs-data-meshes",
    title: "Data Fabrics vs. Data Meshes: Choosing Your Architecture",
    excerpt: "A deep dive into the architectural paradigms shaping the next generation of data-driven enterprises.",
    author: { node: { name: "Marcus Thorne" } },
    date: "2026-02-10T00:00:00",
    categories: { nodes: [{ name: "Data Engineering" }] },
    featuredImage: { node: { sourceUrl: "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&q=80&w=800" } }
  },
  {
    id: "4",
    slug: "modernization-survival-strategy",
    title: "Modernization Is Now a Survival Strategy",
    excerpt: "Why organizations are shifting from 'Buy & Use' to 'Build & Use' in the age of AI.",
    author: { node: { name: "Dr. Arvan Hutech Solutions" } },
    date: "2026-03-01T00:00:00",
    categories: { nodes: [{ name: "AI Modernization" }] },
    featuredImage: { node: { sourceUrl: "https://images.unsplash.com/photo-1744640326166-433469d102f2?auto=format&fit=crop&q=80&w=800" } }
  }
];

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function Blogs({ posts, wordpressData, siteChrome }: { posts?: any[]; wordpressData?: any; siteChrome?: any }) {
  const heroSlides = wordpressData?.globalSettings?.heroSlides;
  useEffect(() => {
    document.title = "Insights & Perspectives | Hutech Solutions Technologies";
    window.scrollTo(0, 0);
  }, []);

  // Use live WP posts if available, otherwise fall back to static
  const displayPosts = posts && posts.length > 0 ? posts : STATIC_POSTS;

  return (
    <>
      {/* Blogs Hero */}
      <section className="relative h-[300px] overflow-hidden flex items-center">
          <div className="absolute inset-0">
            <ImageWithFallback
              src={heroSlides?.heroS1Image?.node?.sourceUrl || siteChrome?.blogHero?.image || wordpressData?.featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1761815937101-f32643eaa17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdGVjaCUyMHdvcmtzcGFjZSUyMGxhcHRvcCUyMHdpbmRvdyUyMGNpdHklMjB2aWV3fGVufDF8fHx8MTc3MTkwMDkyMXww&ixlib=rb-4.1.0&q=80&w=1080"}
              alt={heroSlides?.heroS1Title || siteChrome?.blogHero?.title || wordpressData?.title || "Hutech Solutions Blogs"}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#11253e]/80"></div>
          </div>
          <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex items-center">
            <div>
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                {renderHeroTitle(heroSlides?.heroS1Title || siteChrome?.blogHero?.title || wordpressData?.title || 'Insights & |Perspectives|')}
              </h1>
              <div className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
                {formatQuotesToBold(heroSlides?.heroS1Desc || siteChrome?.blogHero?.desc || wordpressData?.content?.replace(/<[^>]*>/g, '') || 'Expert analysis on the architectural trends shaping the digital frontier.') as any}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {displayPosts.map((post: any, idx: number) => {
                const slug = post.slug;
                const title = post.title;
                const excerpt = post.excerpt?.replace(/<[^>]*>/g, "") || "";
                const image = post.featuredImage?.node?.sourceUrl || post.image || "";
                const author = post.customAuthorName || post.author?.node?.name || post.author || "Hutech Solutions Team";
                const category = post.categories?.nodes?.[0]?.name || post.category || "";
                const date = formatDate(post.date);
                const linkHref = post.isIPublish ? `/resources/blogs/ipublish/${post.slug || post.id}` : `/resources/blogs/${slug || post.id}`;

                return (
                  <Motion.div
                    key={post.id || idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Link href={linkHref} className="block">
                      <div className="aspect-[16/9] overflow-hidden mb-6 rounded-sm relative">
                        {image ? (
                          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        ) : post.isIPublish && post.ipublishMeta ? (
                          <div 
                            className="w-full h-full group-hover:scale-105 transition-transform duration-700 flex items-center justify-center p-6 text-center"
                            style={{ background: `linear-gradient(${post.ipublishMeta.gradientDirection}, ${post.ipublishMeta.gradientFrom}, ${post.ipublishMeta.gradientTo})` }}
                          >
                            <span className="text-white font-bold text-lg opacity-90 leading-tight drop-shadow-sm">{title}</span>
                          </div>
                        ) : (
                          <div className="w-full h-full bg-[#11253e]/10 flex items-center justify-center text-[#11253e]/30 text-sm">No image</div>
                        )}
                        <div className="absolute inset-0 bg-[#11253e]/0 group-hover:bg-[#11253e]/10 transition-colors duration-500"></div>
                      </div>
                    </Link>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-[10px] font-bold text-[#f99d1c] uppercase tracking-widest">
                        <span>{category}</span>
                        {category && <span className="w-1 h-1 bg-gray-300 rounded-full"></span>}
                        <span className="text-gray-400">{date}</span>
                      </div>
                      <Link href={linkHref} className="block">
                        <h3 className="text-[#11253e] text-xl font-bold group-hover:text-[#f99d1c] transition-colors leading-tight">
                          {title}
                        </h3>
                      </Link>
                      <p className="text-[#11253e] font-light text-sm line-clamp-3">
                        {excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-xs font-medium text-[#11253e]">
                          <User size={14} /> {author}
                        </div>
                        <Link href={linkHref} className="text-[#f99d1c] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
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