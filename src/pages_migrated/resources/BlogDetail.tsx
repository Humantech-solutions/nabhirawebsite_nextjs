"use client";

import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Calendar, User, ArrowLeft, Share2, MessageCircle, Twitter, Linkedin } from "lucide-react";

interface BlogPost {
  id: string | number;
  title: string;
  content: string;
  excerpt?: string;
  date: string;
  slug: string;
  image?: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
  author?: {
    node: {
      name: string;
    };
  } | string;
  categories?: {
    nodes: Array<{
      name: string;
      slug: string;
    }>;
  };
  blogPostSettings?: {
    authorRole?: string;
  };
}

interface BlogDetailProps {
  post: BlogPost;
}


export default function BlogDetail({ post }: BlogDetailProps) {
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Nabhira Technologies`;
      window.scrollTo(0, 0);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="flex items-center justify-center bg-white py-24 min-h-[60vh]">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-[#11253e]">Article Not Found</h2>
          <p className="text-gray-500 text-sm">We couldn't find the article you were looking for.</p>
          <Link href="/resources/blogs" className="text-[#f99d1c] font-bold uppercase tracking-widest text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
            <ArrowLeft size={16} /> Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const postImage = post.featuredImage?.node?.sourceUrl || post.image || "https://images.unsplash.com/photo-1673255745677-e36f618550d1?auto=format&fit=crop&q=80&w=1200";
  const postAuthor = typeof post.author === 'string' ? post.author : post.author?.node?.name || "Nabhira Team";
  const postDate = post.date ? new Date(post.date).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase() : "";
  const postCategory = post.categories?.nodes?.[0]?.name || "Artificial Intelligence";

  return (
    <>
      {/* Article Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <Motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={postImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#11253e]/40 via-transparent to-[#11253e]"></div>
            <div className="absolute inset-0 bg-[#11253e]/20"></div>
          </Motion.div>
          
          <div className="relative h-full max-w-5xl mx-auto px-6 flex flex-col justify-end pb-20">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <span className="inline-block bg-[#f99d1c] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1">
                {postCategory}
              </span>
              <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <User size={16} className="text-[#f99d1c]" />
                  {postAuthor}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-[#f99d1c]" />
                  {postDate}
                </div>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#11253e]/[0.02] -z-10 pointer-events-none"></div>
          <div className="absolute top-1/4 left-10 w-px h-64 bg-gradient-to-b from-transparent via-[#f99d1c]/20 to-transparent -z-10"></div>

          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sidebar / Social Share */}
            <aside className="lg:col-span-1 flex lg:flex-col items-center lg:items-end gap-6 order-2 lg:order-1 lg:sticky lg:top-32 h-fit">
              <span className="hidden lg:block text-[10px] font-bold text-[#11253e] uppercase tracking-[0.3em] mb-4">Share Insights</span>
              <button className="p-3 rounded-full border border-gray-100 text-[#11253e] hover:text-[#f99d1c] hover:border-[#f99d1c] transition-all cursor-pointer">
                <Twitter size={18} />
              </button>
              <button className="p-3 rounded-full border border-gray-100 text-[#11253e] hover:text-[#f99d1c] hover:border-[#f99d1c] transition-all cursor-pointer">
                <Linkedin size={18} />
              </button>
              <button className="p-3 rounded-full border border-gray-100 text-[#11253e] hover:text-[#f99d1c] hover:border-[#f99d1c] transition-all cursor-pointer">
                <Share2 size={18} />
              </button>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <Motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="prose prose-lg max-w-none text-[#11253e] font-light leading-relaxed blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="mt-20 pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#11253e] flex items-center justify-center text-white font-bold">
                    {postAuthor.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-[#11253e] font-bold uppercase tracking-tight text-sm">Written by {postAuthor}</h4>
                    <p className="text-xs text-gray-400">{post.blogPostSettings?.authorRole || "Senior Architecture Consultant @ Nabhira"}</p>
                  </div>
                </div>
                <Link href="/resources/blogs" className="group inline-flex items-center gap-3 text-[#11253e] font-bold text-sm uppercase tracking-widest hover:text-[#f99d1c] transition-colors">
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to all articles
                </Link>
              </div>
            </div>

            {/* Related Posts or Quote Placeholder */}
            <div className="lg:col-span-3 order-3 hidden lg:block">
              <div className="bg-[#11253e] p-8 space-y-6">
                <div className="w-10 h-1 bg-[#f99d1c]"></div>
                <h3 className="text-white font-bold text-lg leading-tight uppercase tracking-tight">Ready to architect your future?</h3>
                <p className="text-white/60 text-sm font-light">Consult with our engineering team on your next transformation project.</p>
                <Link href="/contact" className="block text-[#f99d1c] text-xs font-bold uppercase tracking-[0.2em] pt-4 hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                  Get in Touch <ArrowLeft size={14} className="rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
