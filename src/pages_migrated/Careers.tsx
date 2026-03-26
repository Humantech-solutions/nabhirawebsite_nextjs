"use client";

import campusImg from "../assets/faded7f84bd74e71e0d0a7be48ed1d73e033a5e5.png";
import heroImg from "../assets/a9db745e4986b39cfe7910eba6620e5d7ea22e47.png";
import { motion as Motion } from "motion/react";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LimitlessTogether } from "../components/LimitlessTogether";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { MapPin, Briefcase, GraduationCap, ChevronRight, Search, Lightbulb, Globe2, TrendingUp, Users, Award, Zap, HeartHandshake, BookOpen, Share2, Copy, Check, X, FileText, Send, Download } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

/** Converts a job title + location string into a URL-safe slug.
 *  "Principal Digital Strategist" + "Dubai, UAE" → "principal-digital-strategist-dubai"
 *  Multiple cities: "London, UK / Dubai, UAE" → "london-dubai"
 */
function slugify(title: string, location: string): string {
  // Extract city names only (first word of each city segment)
  const citySlug = location
    .split(/[,\/]/)
    .map(part => part.trim().split(/\s+/)[0].toLowerCase())
    .filter(Boolean)
    .join("-");

  const titleSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

  return `${titleSlug}-${citySlug}`;
}

export const jobs = [
  {
    id: "NBR-001",
    title: "Senior AI Solutions Architect",
    department: "Engineering",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "8+ yrs",
    posted: "2 days ago"
  },
  {
    id: "NBR-002",
    title: "Principal Digital Strategist",
    department: "Consulting",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "6-8 yrs",
    posted: "5 days ago"
  },
  {
    id: "NBR-003",
    title: "Cloud Infrastructure Engineer",
    department: "Engineering",
    location: "Remote / Bengaluru",
    type: "Full-time",
    experience: "4-6 yrs",
    posted: "1 week ago"
  },
  {
    id: "NBR-004",
    title: "Senior Product Designer (UX/UI)",
    department: "Design",
    location: "Singapore",
    type: "Full-time",
    experience: "5-7 yrs",
    posted: "3 days ago"
  },
  {
    id: "NBR-005",
    title: "Machine Learning Engineer",
    department: "Engineering",
    location: "London, UK",
    type: "Full-time",
    experience: "4-6 yrs",
    posted: "1 day ago"
  }
];

function CopyLinkButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      title="Copy link"
      className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#f99d1c] hover:text-[#f99d1c] transition-all bg-white z-10"
    >
      {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
    </button>
  );
}

function ShareButton({ title, url }: { title: string; url: string }) {
  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({ title, url });
    } else {
      navigator.clipboard.writeText(url);
    }
  };
  return (
    <button
      onClick={handleShare}
      title="Share"
      className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#f99d1c] hover:text-[#f99d1c] transition-all bg-white z-10"
    >
      <Share2 size={14} />
    </button>
  );
}

function BrochureModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:8000/api/career/brochure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          pageTitle: document.title,
          pageUrl: window.location.href
        }),
      });
      const data = await response.json();
      if (data.success) {
        toast.success("Brochure link has been sent to your email!");
        onClose();
      } else {
        toast.error("Failed to process request.");
      }
    } catch (error) {
      toast.error("Connection error.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#11253e]/60 backdrop-blur-sm transition-all duration-300">
      <Motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200"
      >
        <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#f99d1c] rounded-2xl flex items-center justify-center text-white">
              <FileText size={20} />
            </div>
            <div>
              <h2 className="font-bold text-[#11253e]">Download Brochure</h2>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Careers Cohort 2026</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-100 rounded-xl transition-all text-gray-400 hover:text-[#11253e]"
          >
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="bg-orange-50/50 border border-orange-100 p-4 rounded-2xl">
              <p className="text-xs text-[#11253e] font-light leading-relaxed">
                Enter your details to receive our comprehensive career brochure and internship guide.
              </p>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[#11253e] uppercase tracking-widest ml-1">Full Name</label>
              <input 
                required
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-gray-50 border border-gray-100 px-4 py-3 text-sm focus:outline-none focus:border-[#f99d1c] rounded-2xl transition-all focus:ring-4 focus:ring-[#f99d1c]/5"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[#11253e] uppercase tracking-widest ml-1">Email Address</label>
              <input 
                required
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-gray-50 border border-gray-100 px-4 py-3 text-sm focus:outline-none focus:border-[#f99d1c] rounded-2xl transition-all focus:ring-4 focus:ring-[#f99d1c]/5"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#11253e] hover:bg-[#1a3a60] text-white py-4 rounded-2xl flex items-center justify-center gap-2 transition-all font-bold text-[12px] uppercase tracking-[0.2em] group disabled:opacity-70 shadow-lg shadow-[#11253e]/20 active:scale-[0.98]"
          >
            {isSubmitting ? "Processing..." : (
              <>
                Send Brochure
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </Motion.div>
    </div>
  );
}

export default function Careers({ wordpressData }: any) {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const departments = ["All", ...new Set(jobs.map(j => j.department))];
  
  const filteredJobs = jobs.filter(job => {
    const matchesFilter = filter === "All" || job.department === filter;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getJobUrl = (job: typeof jobs[number]) => {
    const slug = slugify(job.title, job.location);
    return `/careers/${slug}`;
  };

  return (
    <>
      {/* Careers Hero */}
      <section className="relative h-[400px] md:h-[520px] flex items-center overflow-hidden bg-[#11253e]">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={heroImg}
            alt="Nabhira Careers"
            className="w-full h-full object-cover opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11253e] via-[#11253e]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] via-transparent to-transparent"></div>
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <nav className="flex items-center space-x-3 text-[11px] md:text-[13px] font-medium tracking-[-0.02em] mb-4">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <span className="text-white/30 font-light">&gt;</span>
              <span className="text-[#f99d1c] uppercase tracking-widest">Careers</span>
            </nav>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
              Build <br />What is<span className="text-[#f99d1c]"> Next</span>
            </h1>
            <p className="text-white/70 text-lg md:text-[22px] font-light max-w-2xl leading-relaxed mb-10 border-l-2 border-[#f99d1c] pl-6">
              Join a community of Engineers, Architects and Consultants redefining enterprise technology.
            </p>
          </Motion.div>
        </div>
      </section>

        {/* Culture / Why Join Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div>
                <div className="w-12 h-[1px] bg-[#f99d1c] mb-6"></div>
                <h3 className="text-[#11253e] text-xl font-bold mb-4 tracking-tight uppercase text-[12px] tracking-[0.2em]">Excellence by Design</h3>
                <p className="text-[#11253e] font-light leading-relaxed text-sm">
                  We don't just build solutions; we architect systems with precision and integrity, ensuring every line of code serves a higher purpose.
                </p>
              </div>
              <div>
                <div className="w-12 h-[1px] bg-[#f99d1c] mb-6"></div>
                <h3 className="text-[#11253e] text-xl font-bold mb-4 tracking-tight uppercase text-[12px] tracking-[0.2em]">Global Influence</h3>
                <p className="text-[#11253e] font-light leading-relaxed text-sm">
                  Working at Nabhira means impacting Fortune 500 enterprises across continents, shaping the digital backbone of the global economy.
                </p>
              </div>
              <div>
                <div className="w-12 h-[1px] bg-[#f99d1c] mb-6"></div>
                <h3 className="text-[#11253e] text-xl font-bold mb-4 tracking-tight uppercase text-[12px] tracking-[0.2em]">Limitless Growth</h3>
                <p className="text-[#11253e] font-light leading-relaxed text-sm">
                  Our culture is one of continuous evolution. We invest in our people through specialized academies and mentorship from industry icons.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-24 bg-[#f8f9fa] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div className="max-w-xl">
                <h2 className="text-[#11253e] text-3xl md:text-4xl font-light mb-4 tracking-tight">
                  Open <span className="font-bold">Positions</span>
                </h2>
                <p className="text-[#11253e] font-light">
                  Find your next challenge within our specialized engineering and strategy teams.
                </p>
              </div>
              
              {/* Search and Filters */}
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search roles..."
                    className="pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-[#f99d1c] w-full sm:w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <select 
                  className="px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-[#f99d1c]"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, i) => {
                  const jobUrl = typeof window !== 'undefined'
                    ? `${window.location.origin}${getJobUrl(job)}`
                    : getJobUrl(job);

                  return (
                    <Motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="bg-white border border-gray-100 p-8 rounded-sm hover:border-[#f99d1c]/50 hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                        <Link href={getJobUrl(job)} className="flex-1 space-y-2">
                          <div className="flex items-center space-x-2 text-[10px] font-bold text-[#f99d1c] uppercase tracking-widest mb-1">
                          <span className="font-mono text-[#11253e] bg-gray-100 px-2 py-0.5 rounded text-[9px] group-hover:text-[#f99d1c] group-hover:bg-transparent transition-all duration-300">
  {job.id}
</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span className="text-gray-400">{job.posted}</span>
                          </div>
                          <h3 className="text-[#11253e] text-xl font-bold tracking-tight group-hover:text-[#f99d1c] transition-colors">{job.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-xs font-light text-[#11253e]">
                            <div className="flex items-center gap-1.5">
                              <MapPin size={14} /> {job.location}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Briefcase size={14} /> {job.type}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <GraduationCap size={14} /> {job.experience}
                            </div>
                          </div>
                        </Link>
                        <div className="flex items-center gap-3">
                          <CopyLinkButton url={typeof window !== 'undefined' ? `${window.location.origin}${getJobUrl(job)}` : getJobUrl(job)} />
                          <ShareButton title={job.title} url={typeof window !== 'undefined' ? `${window.location.origin}${getJobUrl(job)}` : getJobUrl(job)} />
                          <Link href={getJobUrl(job)} className="flex items-center gap-4">
                            <span className="text-[12px] font-bold text-[#11253e] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">View Role</span>
                            <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#f99d1c] group-hover:border-[#f99d1c] group-hover:text-white transition-all">
                              <ChevronRight size={20} />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </Motion.div>
                  );
                })
              ) : (
                <div className="py-20 text-center bg-white border border-dashed border-gray-200 rounded-sm">
                  <p className="text-[#11253e] font-light">No open roles match your current filters.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── INTERNSHIP SECTION ── */}
        <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left — Image */}
              <Motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-sm overflow-hidden aspect-[4/3]">
                  <ImageWithFallback
                    src={campusImg}
                    alt="Nabhira Internship Programme"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11253e]/60 via-transparent to-transparent"></div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-[#f99d1c] text-[#11253e] px-6 py-4 rounded-sm shadow-xl">
                  <p className="text-[10px] font-bold uppercase tracking-widest">Applications Open</p>
                  <p className="text-xl font-bold">2026 Cohort</p>
                </div>
              </Motion.div>

              {/* Right — Content */}
              <Motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="text-[#f99d1c]" size={22} />
                    <span className="text-[10px] font-bold text-[#f99d1c] uppercase tracking-widest">Internship Programme</span>
                  </div>
                  <h2 className="text-[#11253e] text-3xl md:text-4xl font-light tracking-tight mb-4">
                    Launch Your Career <br /><span className="font-bold">at Nabhira</span>
                  </h2>
                  <div className="h-[2px] w-16 bg-[#f99d1c] mb-6"></div>
                  <p className="text-[#11253e] font-light leading-relaxed">
                    The Nabhira Emerging Talent Programme is a structured 12-week immersion into enterprise technology, strategy consulting, and AI-driven innovation. Work alongside senior architects on real client engagements — not internal projects.
                  </p>
                </div>

                {/* Internship tracks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Zap size={16} />, track: "AI & Data Engineering", duration: "12 Weeks" },
                    { icon: <Globe2 size={16} />, track: "Cloud Architecture", duration: "12 Weeks" },
                    { icon: <Lightbulb size={16} />, track: "Digital Strategy", duration: "10 Weeks" },
                    { icon: <BookOpen size={16} />, track: "Product & UX Design", duration: "10 Weeks" },
                  ].map((item, idx) => (
                    <Motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 bg-[#f8f9fa] border border-gray-100 p-4 rounded-sm hover:border-[#f99d1c]/40 transition-colors"
                    >
                      <div className="mt-0.5 text-[#f99d1c]">{item.icon}</div>
                      <div>
                        <p className="text-[#11253e] text-sm font-bold">{item.track}</p>
                        <p className="text-[#11253e]/50 text-xs font-light">{item.duration}</p>
                      </div>
                    </Motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href="mailto:careers@nabhira.com"
                    className="inline-flex items-center gap-2 bg-[#11253e] hover:bg-[#1a3a60] text-white px-8 py-4 rounded-sm text-[11px] font-bold uppercase tracking-widest transition-all group"
                  >
                    Apply Now
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button
                    onClick={() => setIsBrochureModalOpen(true)}
                    className="inline-flex items-center gap-2 border border-[#11253e]/20 hover:border-[#f99d1c] text-[#11253e] px-8 py-4 rounded-sm text-[11px] font-bold uppercase tracking-widest transition-all"
                  >
                    Download Brochure
                  </button>
                </div>
              </Motion.div>

            </div>
          </div>
        </section>

        {/* ── CAREER ADVANTAGE SECTION ── */}
        <section className="py-24 bg-[#f8f9fa] overflow-hidden relative border-t border-gray-100">

          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">

            {/* Header */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-14"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-10 bg-[#f99d1c]"></div>
                <span className="text-[10px] font-bold text-[#f99d1c] uppercase tracking-widest">Career Advantage</span>
              </div>
              <h2 className="text-[#11253e] text-3xl md:text-[48px] font-light tracking-tight leading-tight">
                Why Nabhira is <span className="font-bold">Different</span>
              </h2>
            </Motion.div>

            {/* Advantage points — two-column list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
              {[
                { icon: <Globe2 size={18} />, title: "Global Exposure", num: "01" },
                { icon: <TrendingUp size={18} />, title: "Accelerated Growth", num: "02" },
                { icon: <Users size={18} />, title: "World-Class Mentorship", num: "03" },
                { icon: <Award size={18} />, title: "Certified Excellence", num: "04" },
                { icon: <HeartHandshake size={18} />, title: "Inclusive Culture", num: "05" },
                { icon: <Lightbulb size={18} />, title: "Innovation Time", num: "06" },
              ].map((item, idx) => (
                <Motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.07, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-5 py-5 border-b border-gray-200 group cursor-default"
                >
                  <span className="text-[10px] font-bold text-[#f99d1c] tracking-widest w-6 shrink-0">{item.num}</span>
                  <div className="w-8 h-8 rounded-sm bg-[#11253e] flex items-center justify-center text-white shrink-0 group-hover:bg-[#f99d1c] group-hover:text-[#11253e] transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[#11253e] font-bold tracking-tight group-hover:text-[#f99d1c] transition-colors duration-300">{item.title}</span>
                  <ChevronRight size={14} className="ml-auto text-[#11253e]/20 group-hover:text-[#f99d1c] group-hover:translate-x-1 transition-all duration-300" />
                </Motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Link
                href="/contact?category=Career"
                className="inline-flex items-center gap-2 bg-[#11253e] hover:bg-[#1a3a60] text-white px-10 py-4 rounded-sm text-[11px] font-bold uppercase tracking-widest transition-all group"
              >
                Talk to Our Talent Team
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Motion.div>

          </div>
        </section>

        <LimitlessTogether />
        <BrochureModal isOpen={isBrochureModalOpen} onClose={() => setIsBrochureModalOpen(false)} />
    </>
  );
}