"use client";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Calendar, User, ArrowLeft, Share2, Twitter, Linkedin } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Rise of Agentic AI: Beyond Simple Automation",
    excerpt: "How autonomous agents are redefining enterprise productivity by making decisions in complex environments.",
    author: "Dr. Arvan Nabhira",
    date: "Feb 20, 2026",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1673255745677-e36f618550d1?auto=format&fit=crop&q=80&w=1200",
    content: `
      <p className="mb-6">The landscape of Artificial Intelligence is undergoing a seismic shift. We are moving beyond the era of passive chatbots and simple automation into the age of Agentic AI—systems capable of autonomous reasoning, goal-setting, and execution within complex, real-world environments.</p>
      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">Understanding Agency</h2>
      <p className="mb-6">Unlike traditional AI that requires constant prompting, agentic systems are designed with 'agency'—the ability to decompose high-level objectives into actionable steps. For Nabhira Technologies, this represents the ultimate architectural challenge: building the digital nervous systems that allow these agents to interact securely with legacy enterprise data.</p>
      <blockquote className="border-l-4 border-[#f99d1c] pl-8 py-4 my-12 italic text-xl text-[#11253e] bg-[#f99d1c]/5">
        "The true power of AI isn't in its ability to predict the next word, but in its potential to navigate the next business crisis autonomously."
      </blockquote>
      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">The Architectural Imperative</h2>
      <p className="mb-6">To support agentic workflows, enterprises must rethink their data fabrics. Data can no longer be static; it must be 'agent-ready'. This involves creating semantic layers that agents can traverse without human intervention, ensuring that every decision made by the AI is grounded in verifiable corporate truth.</p>
      <p className="mb-6">As we look toward 2027, the firms that will lead are those that have built the architectural foundation today for the autonomous agents of tomorrow.</p>
    `
  },
  {
    id: 2,
    title: "Cloud Sovereignty: Navigating Data Residency in 2026",
    excerpt: "Why global enterprises are shifting towards localized cloud architectures to meet emerging regulatory demands.",
    author: "Sarah Chen",
    date: "Feb 15, 2026",
    category: "Cloud Strategy",
    image: "https://images.unsplash.com/photo-1586448911122-f74aa8e3e4b6?auto=format&fit=crop&q=80&w=1200",
    content: `
      <p className="mb-6">In 2026, the 'cloud' is no longer a monolithic global entity. It has become a fragmented landscape of sovereign regions, each governed by its own set of data residency laws and security requirements. For the modern CTO, navigating this complexity is the primary hurdle to global expansion.</p>
      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">The New Geography of Data</h2>
      <p className="mb-6">National borders have returned to the digital realm. Governments are increasingly demanding that data generated within their territory stays within their territory. This has led to the rise of 'Cloud Sovereignty'—a strategy where infrastructure is localized but managed through a unified global control plane.</p>
      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">Strategic Implementation</h2>
      <p className="mb-6">At Nabhira Technologies, we advocate for a 'Sovereign-by-Design' approach. This means architecting applications from day one to be location-aware, with automated data routing that ensures compliance without sacrificing performance or developer velocity.</p>
      <p className="mb-6">The transition to sovereign cloud architectures is not just a compliance checkbox; it is a competitive advantage for enterprises that want to build deep trust in the markets they serve.</p>
    `
  },
  {
    id: 3,
    title: "Data Fabrics vs. Data Meshes: Choosing Your Architecture",
    excerpt: "A deep dive into the architectural paradigms shaping the next generation of data-driven enterprises.",
    author: "Marcus Thorne",
    date: "Feb 10, 2026",
    category: "Data Engineering",
    image: "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&q=80&w=1200",
    content: `
      <p className="mb-6">The debate between Data Fabrics and Data Meshes is not just technical—it's philosophical. One prioritizes centralized intelligence through a unified metadata layer, while the other prioritizes decentralized ownership through domain-driven design. Which one is right for your organization?</p>
      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">The Data Fabric: Centralized Connectivity</h2>
      <p className="mb-6">A Data Fabric uses AI-driven metadata to create a virtualized layer over disparate data sources. It's ideal for organizations that need a single source of truth but have data scattered across multiple clouds and on-premise systems.</p>
      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">The Data Mesh: Decentralized Empowerment</h2>
      <p className="mb-6">In contrast, a Data Mesh treats data as a product. Ownership is pushed to the business units that create the data. This model is best for large, complex organizations where centralized teams have become a bottleneck to innovation.</p>
      <p className="mb-6">Conclusion: Most successful enterprises are moving toward a hybrid 'Fabric-Mesh' approach, utilizing the connectivity of the fabric with the governance and ownership of the mesh.</p>
    `
  },
  {
    id: 4,
    title: "Modernization Is Now a Survival Strategy",
    excerpt: "Why organizations are shifting from 'Buy & Use' to 'Build & Use' in the age of AI.",
    author: "Dr. Arvan Nabhira",
    date: "Mar 01, 2026",
    category: "AI Modernization",
    image: "https://images.unsplash.com/photo-1744640326166-433469d102f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbW9kZXJuaXphdGlvbiUyMGNvcnBvcmF0ZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyNDU1NTA0fDA&ixlib=rb-4.1.0&q=80&w=1200",
    content: `
      <p className="mb-6 font-medium text-xl">Artificial Intelligence is not just another technology wave. It is fundamentally different from previous shifts like the internet, cloud, or smartphones. It is fundamentally reshaping how organizations operate, moving from rigid systems to intelligent, adaptive workflows.</p>
      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">1. AI Is Being Adopted at Unprecedented Speed</h2>
      <p className="mb-6">AI adoption is happening faster than any previous technology revolution. The internet took years to reach mass adoption. Smartphones took nearly a decade to become universal. AI tools have reached billions of users in just a few months.</p>
      <h2 className="text-2xl font-bold text-[#11253e] mt-12 mb-6 uppercase tracking-tight">2. AI Demands Fundamental Business Redesign</h2>
      <p className="mb-6">Past technology transitions were additive. AI is different. It challenges the very structure of how organizations operate: Customer journeys, Employee roles, Decision-making processes, and Operating models.</p>
      <blockquote className="border-l-4 border-[#f99d1c] pl-8 py-4 my-12 italic text-xl text-[#11253e] bg-[#f99d1c]/5">
        "Enterprises that treat AI as a side project will struggle. Those that treat it as a full-scale transformation with speed, clarity and discipline will lead."
      </blockquote>
      <p className="mb-6 font-bold text-lg">AI is already reshaping business. The only real question is: Is Your Organization Ready to Adapt and Execute Fast Enough in this AI-Led Modernization Era?</p>
    `
  }
];

export default function BlogDetail({ wordpressData }: any) {
  const { id } = useParams();
  const router = useRouter();
  const post = blogPosts.find(p => p.id === Number(id));

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Nabhira Technologies`;
      window.scrollTo(0, 0);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="flex items-center justify-center bg-white py-24">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-[#11253e]">Article Not Found</h2>
          <Link href="/resources/blogs" className="text-[#f99d1c] font-bold uppercase tracking-widest text-sm inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

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
              src={post.image}
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
                {post.category}
              </span>
              <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <User size={16} className="text-[#f99d1c]" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-[#f99d1c]" />
                  {post.date}
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
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-[#11253e] font-bold uppercase tracking-tight text-sm">Written by {post.author}</h4>
                    <p className="text-xs text-gray-400">Senior Architecture Consultant @ Nabhira</p>
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
                <Link href={`/contact?ref=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&title=${encodeURIComponent(post.title)}`} className="block text-[#f99d1c] text-xs font-bold uppercase tracking-[0.2em] pt-4 hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                  Get in Touch <ArrowLeft size={14} className="rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}