"use client";

import campusImg from "../assets/faded7f84bd74e71e0d0a7be48ed1d73e033a5e5.png";
import heroImg from "../assets/a9db745e4986b39cfe7910eba6620e5d7ea22e47.png";
import { motion as Motion } from "motion/react";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LimitlessTogether } from "../components/LimitlessTogether";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Search,
  Lightbulb,
  Globe2,
  TrendingUp,
  Users,
  Award,
  Zap,
  HeartHandshake,
  BookOpen,
  Share2,
  Copy,
  Check,
} from "lucide-react";
import Link from "next/link";
import {
  renderHeroTitle,
  renderDynamicIcon,
  formatQuotesToBold,
} from "../lib/utils";

/** Converts a job title + location string into a URL-safe slug.
 *  "Principal Digital Strategist" + "Dubai, UAE" → "principal-digital-strategist-dubai"
 *  Multiple cities: "London, UK / Dubai, UAE" → "london-dubai"
 */
function slugify(title: string, location: string): string {
  // Extract city names only (first word of each city segment)
  const citySlug = location
    .split(/[,\/]/)
    .map((part) => part.trim().split(/\s+/)[0].toLowerCase())
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
    posted: "2 days ago",
  },
  {
    id: "NBR-002",
    title: "Principal Digital Strategist",
    department: "Consulting",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "6-8 yrs",
    posted: "5 days ago",
  },
  {
    id: "NBR-003",
    title: "Cloud Infrastructure Engineer",
    department: "Engineering",
    location: "Remote / Bengaluru",
    type: "Full-time",
    experience: "4-6 yrs",
    posted: "1 week ago",
  },
  {
    id: "NBR-004",
    title: "Senior Product Designer (UX/UI)",
    department: "Design",
    location: "Singapore",
    type: "Full-time",
    experience: "5-7 yrs",
    posted: "3 days ago",
  },
  {
    id: "NBR-005",
    title: "Machine Learning Engineer",
    department: "Engineering",
    location: "London, UK",
    type: "Full-time",
    experience: "4-6 yrs",
    posted: "1 day ago",
  },
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
      {copied ? (
        <Check size={14} className="text-green-500" />
      ) : (
        <Copy size={14} />
      )}
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

export default function Careers({ wordpressData, wpJobs }: any) {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const pageFields = wordpressData?.careersPageSettings;
  const displayJobs = wpJobs && wpJobs.length > 0 ? wpJobs : jobs;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const departments = [
    "All",
    ...new Set(displayJobs.map((j: any) => String(j.department))),
  ];

  const filteredJobs = displayJobs.filter((job: any) => {
    const matchesFilter = filter === "All" || job.department === filter;
    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getJobUrl = (job: any) => {
    if (job.slug) return `/careers/${job.slug}`;
    const slug = slugify(job.title, job.location);
    return `/careers/${slug}`;
  };

  return (
    <>
      {/* Careers Hero */}
      <section className="relative h-[400px] md:h-[520px] flex items-center overflow-hidden bg-[#11253e]">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={
              wordpressData?.globalSettings?.heroSlides?.heroS1ImageUrl ||
              wordpressData?.globalSettings?.heroSlides?.heroS1Image?.node
                ?.sourceUrl ||
              heroImg
            }
            alt="Hutech Solutions Careers"
            className="w-full h-full object-cover opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11253e] via-[#11253e]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] via-transparent to-transparent"></div>
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <nav className="flex items-center space-x-3 text-[11px] md:text-[13px] font-medium tracking-[-0.02em] mb-4">
              <Link
                href="/"
                className="text-white/60 hover:text-white transition-colors"
              >
                Home
              </Link>
              <span className="text-white/30 font-light">&gt;</span>
              <span className="text-[#f99d1c] uppercase tracking-widest">
                Careers
              </span>
            </nav>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
              {renderHeroTitle(
                wordpressData?.globalSettings?.heroSlides?.heroS1Title || (
                  <>
                    Build <br />
                    What is<span className="text-[#f99d1c]"> Next</span>
                  </>
                ),
              )}
            </h1>
            <p className="text-white/70 text-lg md:text-[22px] font-light max-w-2xl leading-relaxed mb-10 border-l-2 border-[#f99d1c] pl-6">
              {formatQuotesToBold(
                wordpressData?.globalSettings?.heroSlides?.heroS1Desc ||
                  "Join a community of Engineers, Architects and Consultants redefining enterprise technology.",
              )}
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
              <h3 className="text-[#11253e] text-xl font-bold mb-4 tracking-tight uppercase text-[12px] tracking-[0.2em]">
                {formatQuotesToBold(
                  pageFields?.culture1Title || "Excellence by Design",
                )}
              </h3>
              <p className="text-[#11253e] font-light leading-relaxed text-sm">
                {formatQuotesToBold(
                  pageFields?.culture1Desc ||
                    "We don't just build solutions; we architect systems with precision and integrity, ensuring every line of code serves a higher purpose.",
                )}
              </p>
            </div>
            <div>
              <div className="w-12 h-[1px] bg-[#f99d1c] mb-6"></div>
              <h3 className="text-[#11253e] text-xl font-bold mb-4 tracking-tight uppercase text-[12px] tracking-[0.2em]">
                {formatQuotesToBold(
                  pageFields?.culture2Title || "Global Influence",
                )}
              </h3>
              <p className="text-[#11253e] font-light leading-relaxed text-sm">
                {formatQuotesToBold(
                  pageFields?.culture2Desc ||
                    "Working at Hutech Solutions means impacting Fortune 500 enterprises across continents, shaping the digital backbone of the global economy.",
                )}
              </p>
            </div>
            <div>
              <div className="w-12 h-[1px] bg-[#f99d1c] mb-6"></div>
              <h3 className="text-[#11253e] text-xl font-bold mb-4 tracking-tight uppercase text-[12px] tracking-[0.2em]">
                {formatQuotesToBold(
                  pageFields?.culture3Title || "Limitless Growth",
                )}
              </h3>
              <p className="text-[#11253e] font-light leading-relaxed text-sm">
                {formatQuotesToBold(
                  pageFields?.culture3Desc ||
                    "Our culture is one of continuous evolution. We invest in our people through specialized academies and mentorship from industry icons.",
                )}
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
                {formatQuotesToBold(
                  pageFields?.openPositionsTitle || 'Open "Positions"',
                )}
              </h2>
              <p className="text-[#11253e] font-light">
                {formatQuotesToBold(
                  pageFields?.openPositionsDesc ||
                    "Find your next challenge within our specialized engineering and strategy teams.",
                )}
              </p>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
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
                {departments.map((dept: any) => (
                  <option key={dept as string} value={dept as string}>
                    {dept as string}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job: any, i: number) => {
                const jobUrl =
                  typeof window !== "undefined"
                    ? `${window.location.origin}${getJobUrl(job)}`
                    : getJobUrl(job);

                return (
                  <Motion.div
                    key={String(job.id || i)}
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
                            {job.jobId && (
                              <>
                                {job.jobId}{" "}
                                <span className="opacity-50 mx-1">|</span>{" "}
                              </>
                            )}
                            {job.department}
                          </span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                          <span className="text-gray-400">{job.posted}</span>
                        </div>
                        <h3 className="text-[#11253e] text-xl font-bold tracking-tight group-hover:text-[#f99d1c] transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-6 text-[13px] font-medium text-[#11253e]">
                          {job.location && (
                            <div className="flex items-center gap-2">
                              <MapPin size={15} className="text-[#11253e]/70" />{" "}
                              {job.location}
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <Briefcase
                              size={15}
                              className="text-[#11253e]/70"
                            />{" "}
                            {job.type}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <GraduationCap size={14} /> {job.experience}
                          </div>
                        </div>
                      </Link>
                      <div className="flex items-center gap-3">
                        <CopyLinkButton url={jobUrl} />
                        <ShareButton title={job.title} url={jobUrl} />
                        <Link
                          href={getJobUrl(job)}
                          className="flex items-center gap-4"
                        >
                          <span className="text-[12px] font-bold text-[#11253e] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                            View Role
                          </span>
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
                <p className="text-[#11253e] font-light">
                  No open roles match your current filters.
                </p>
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
                  src={
                    pageFields?.internshipImage?.node?.sourceUrl || campusImg
                  }
                  alt="Hutech Solutions Internship Programme"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11253e]/60 via-transparent to-transparent"></div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#f99d1c] text-[#11253e] px-6 py-4 rounded-sm shadow-xl">
                <p className="text-[10px] font-bold uppercase tracking-widest">
                  {pageFields?.internshipBadgeTop || "Applications Open"}
                </p>
                <p className="text-xl font-bold">
                  {pageFields?.internshipBadgeBottom || "2026 Cohort"}
                </p>
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
                  <span className="text-[#f99d1c]">
                    {renderDynamicIcon(
                      pageFields?.internshipProgrammeIconType || "lucide",
                      pageFields?.internshipProgrammeLucide || "GraduationCap",
                      pageFields?.internshipProgrammeImage?.node,
                      22,
                    )}
                  </span>
                  <span className="text-[10px] font-bold text-[#f99d1c] uppercase tracking-widest">
                    {pageFields?.internshipProgrammeLabel ||
                      "Internship Programme"}
                  </span>
                </div>
                <h2 className="text-[#11253e] text-3xl md:text-4xl font-light tracking-tight mb-4">
                  {formatQuotesToBold(
                    pageFields?.internshipTitle ||
                      'Launch Your Career \n"at Hutech Solutions"',
                  )}
                </h2>
                <div className="h-[2px] w-16 bg-[#f99d1c] mb-6"></div>
                <p className="text-[#11253e] font-light leading-relaxed">
                  {formatQuotesToBold(
                    pageFields?.internshipDesc ||
                      "The Hutech Solutions Emerging Talent Programme is a structured 12-week immersion into enterprise technology, strategy consulting, and AI-driven innovation. Work alongside senior architects on real client engagements — not internal projects.",
                  )}
                </p>
              </div>

              {/* Internship tracks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    iconType: pageFields?.internshipTrack1IconType || "lucide",
                    lucide: pageFields?.internshipTrack1Lucide || "Zap",
                    image: pageFields?.internshipTrack1Image?.node,
                    track:
                      pageFields?.internshipTrack1Name ||
                      "AI & Data Engineering",
                    duration:
                      pageFields?.internshipTrack1Duration || "12 Weeks",
                  },
                  {
                    iconType: pageFields?.internshipTrack2IconType || "lucide",
                    lucide: pageFields?.internshipTrack2Lucide || "Globe2",
                    image: pageFields?.internshipTrack2Image?.node,
                    track:
                      pageFields?.internshipTrack2Name || "Cloud Architecture",
                    duration:
                      pageFields?.internshipTrack2Duration || "12 Weeks",
                  },
                  {
                    iconType: pageFields?.internshipTrack3IconType || "lucide",
                    lucide: pageFields?.internshipTrack3Lucide || "Lightbulb",
                    image: pageFields?.internshipTrack3Image?.node,
                    track:
                      pageFields?.internshipTrack3Name || "Digital Strategy",
                    duration:
                      pageFields?.internshipTrack3Duration || "10 Weeks",
                  },
                  {
                    iconType: pageFields?.internshipTrack4IconType || "lucide",
                    lucide: pageFields?.internshipTrack4Lucide || "BookOpen",
                    image: pageFields?.internshipTrack4Image?.node,
                    track:
                      pageFields?.internshipTrack4Name || "Product & UX Design",
                    duration:
                      pageFields?.internshipTrack4Duration || "10 Weeks",
                  },
                ].map((item, idx) => {
                  return (
                    <Motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * idx }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start gap-3 bg-[#f8f9fa] border border-gray-100 p-4 rounded-sm hover:border-[#f99d1c]/40 transition-colors">
                        <div className="mt-0.5 text-[#f99d1c]">
                          {renderDynamicIcon(
                            item.iconType,
                            item.lucide,
                            item.image,
                            16,
                          )}
                        </div>
                        <div>
                          <p className="text-[#11253e] text-sm font-bold">
                            {formatQuotesToBold(item.track)}
                          </p>
                          <p className="text-[#11253e]/50 text-xs font-light">
                            {formatQuotesToBold(item.duration)}
                          </p>
                        </div>
                      </div>
                    </Motion.div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href={
                    pageFields?.applyNowLinkType === "external"
                      ? pageFields?.applyNowExternalLink ||
                        "mailto:careers@nabhira.com"
                      : pageFields?.applyNowInternalLink?.nodes?.[0]?.uri ||
                        "mailto:careers@nabhira.com"
                  }
                  className="inline-flex items-center gap-2 bg-[#11253e] hover:bg-[#1a3a60] text-white px-8 py-4 rounded-sm text-[11px] font-bold uppercase tracking-widest transition-all group"
                >
                  {pageFields?.applyNowBtnText || "Apply Now"}
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                {pageFields?.downloadBrochureFile?.node?.mediaItemUrl ||
                pageFields?.downloadBrochureFile?.url ? (
                  <a
                    href={
                      pageFields.downloadBrochureFile.node?.mediaItemUrl ||
                      pageFields.downloadBrochureFile.url
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-flex items-center gap-2 justify-center border border-[#11253e]/20 hover:border-[#f99d1c] text-[#11253e] px-8 py-4 rounded-sm text-[11px] font-bold uppercase tracking-widest transition-all"
                  >
                    {pageFields?.downloadBrochureBtnText || "Download Brochure"}
                  </a>
                ) : (
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 justify-center border border-[#11253e]/20 hover:border-[#f99d1c] text-[#11253e] px-8 py-4 rounded-sm text-[11px] font-bold uppercase tracking-widest transition-all"
                  >
                    {pageFields?.downloadBrochureBtnText || "Download Brochure"}
                  </a>
                )}
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
              <span className="text-[10px] font-bold text-[#f99d1c] uppercase tracking-widest">
                {pageFields?.careerAdvantageLabel || "Career Advantage"}
              </span>
            </div>
            <h2 className="text-[#11253e] text-3xl md:text-[48px] font-light tracking-tight leading-tight">
              {formatQuotesToBold(
                pageFields?.advantageTitle || 'Why Hutech Solutions is "Different"',
              )}
            </h2>
          </Motion.div>

          {/* Advantage points — two-column list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
            {[
              {
                iconType: pageFields?.advantage1IconType || "lucide",
                lucide: pageFields?.advantage1Lucide || "Globe2",
                image: pageFields?.advantage1Image?.node,
                title: pageFields?.advantage1 || "Global Exposure",
                num: "01",
              },
              {
                iconType: pageFields?.advantage2IconType || "lucide",
                lucide: pageFields?.advantage2Lucide || "TrendingUp",
                image: pageFields?.advantage2Image?.node,
                title: pageFields?.advantage2 || "Accelerated Growth",
                num: "02",
              },
              {
                iconType: pageFields?.advantage3IconType || "lucide",
                lucide: pageFields?.advantage3Lucide || "Users",
                image: pageFields?.advantage3Image?.node,
                title: pageFields?.advantage3 || "World-Class Mentorship",
                num: "03",
              },
              {
                iconType: pageFields?.advantage4IconType || "lucide",
                lucide: pageFields?.advantage4Lucide || "Award",
                image: pageFields?.advantage4Image?.node,
                title: pageFields?.advantage4 || "Certified Excellence",
                num: "04",
              },
              {
                iconType: pageFields?.advantage5IconType || "lucide",
                lucide: pageFields?.advantage5Lucide || "HeartHandshake",
                image: pageFields?.advantage5Image?.node,
                title: pageFields?.advantage5 || "Inclusive Culture",
                num: "05",
              },
              {
                iconType: pageFields?.advantage6IconType || "lucide",
                lucide: pageFields?.advantage6Lucide || "Lightbulb",
                image: pageFields?.advantage6Image?.node,
                title: pageFields?.advantage6 || "Innovation Time",
                num: "06",
              },
            ].map((item, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.07, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-5 py-5 border-b border-gray-200 group cursor-default"
              >
                <span className="text-[10px] font-bold text-[#f99d1c] tracking-widest w-6 shrink-0">
                  {item.num}
                </span>
                <div className="w-8 h-8 rounded-sm bg-[#11253e] flex items-center justify-center text-white shrink-0 group-hover:bg-[#f99d1c] group-hover:text-[#11253e] transition-all duration-300">
                  {renderDynamicIcon(
                    item.iconType,
                    item.lucide,
                    item.image,
                    18,
                  )}
                </div>
                <span className="text-[#11253e] font-bold tracking-tight group-hover:text-[#f99d1c] transition-colors duration-300">
                  {formatQuotesToBold(item.title)}
                </span>
                <ChevronRight
                  size={14}
                  className="ml-auto text-[#11253e]/20 group-hover:text-[#f99d1c] group-hover:translate-x-1 transition-all duration-300"
                />
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
              href={
                pageFields?.talkToTalentLinkType === "external"
                  ? pageFields?.talkToTalentExternalLink || "/contact"
                  : pageFields?.talkToTalentInternalLink?.nodes?.[0]?.uri ||
                    "/contact"
              }
              className="inline-flex items-center gap-2 bg-[#11253e] hover:bg-[#1a3a60] text-white px-10 py-4 rounded-sm text-[11px] font-bold uppercase tracking-widest transition-all group"
            >
              {pageFields?.talkToTalentBtnText || "Talk to Our Talent Team"}
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </Motion.div>
        </div>
      </section>

      <LimitlessTogether
        data={wordpressData?.globalSettings?.limitlessTogether}
      />
    </>
  );
}
