"use client";

import { motion as Motion } from "motion/react";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer, LimitlessTogether } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { MapPin, Briefcase, Clock, ChevronRight, Search } from "lucide-react";
import Link from "next/link";
import { jobs } from "../data/migrated_data";

export default function Careers() {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.title = "Careers | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const departments = ["All", ...new Set(jobs.map(j => j.department))];
  
  const filteredJobs = jobs.filter(job => {
    const matchesFilter = filter === "All" || job.department === filter;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Careers Hero */}
        <section className="relative h-[520px] overflow-hidden pt-8 md:pt-12">
          <div className="absolute inset-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1718066236074-13f8cf7ae93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMG9mZmljZSUyMGludGVyaW9yJTIwd29ya3NwYWNlJTIwYXJjaGl0ZWN0dXJhbHxlbnwxfHx8fDE3NzE4OTkyODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nabhira Careers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#11253e]/90 via-[#11253e]/60 to-transparent"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
              <div className="max-w-3xl space-y-8">
                <Motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Breadcrumb */}
                  <nav className="flex items-center space-x-3 text-[13px] font-medium tracking-[-0.02em] mb-8">
                    <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
                    <span className="text-white/30 font-light">&gt;</span>
                    <span className="text-[#f99d1c]">Careers</span>
                  </nav>

                  <div className="border-l-[1px] border-white/20 pl-6 md:pl-12 py-2">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-4 md:mb-8">
                      Architect Your <br />
                      <span className="text-[#f99d1c]">Legacy</span>
                    </h1>
                    <p className="text-white/90 text-sm sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm">
                      Join a community of visionaries, engineers, and strategists dedicated to redefining the architectural boundaries of enterprise technology.
                    </p>
                  </div>
                </Motion.div>
              </div>
            </div>
          </section>

          {/* Culture / Why Join Section */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div>
                  <div className="w-12 h-[1px] bg-[#f99d1c] mb-6"></div>
                  <h3 className="text-[#11253e] text-xl font-bold mb-4 tracking-tight uppercase text-[12px] tracking-[0.2em]">Excellence by Design</h3>
                  <p className="text-[#11253e]/60 font-light leading-relaxed text-sm">
                    We don't just build solutions; we architect systems with precision and integrity, ensuring every line of code serves a higher purpose.
                  </p>
                </div>
                <div>
                  <div className="w-12 h-[1px] bg-[#f99d1c] mb-6"></div>
                  <h3 className="text-[#11253e] text-xl font-bold mb-4 tracking-tight uppercase text-[12px] tracking-[0.2em]">Global Influence</h3>
                  <p className="text-[#11253e]/60 font-light leading-relaxed text-sm">
                    Working at Nabhira means impacting Fortune 500 enterprises across continents, shaping the digital backbone of the global economy.
                  </p>
                </div>
                <div>
                  <div className="w-12 h-[1px] bg-[#f99d1c] mb-6"></div>
                  <h3 className="text-[#11253e] text-xl font-bold mb-4 tracking-tight uppercase text-[12px] tracking-[0.2em]">Limitless Growth</h3>
                  <p className="text-[#11253e]/60 font-light leading-relaxed text-sm">
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
                    Open <span className="font-bold">Architectures</span>
                  </h2>
                  <p className="text-[#11253e]/60 font-light">
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
                  filteredJobs.map((job, i) => (
                    <Motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <Link href={`/careers/${job.id}`}>
                        <div className="bg-white border border-gray-100 p-8 rounded-sm hover:border-[#f99d1c]/50 hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-[10px] font-bold text-[#f99d1c] uppercase tracking-widest mb-1">
                              <span>{job.department}</span>
                              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                              <span className="text-gray-400">{job.posted}</span>
                            </div>
                            <h3 className="text-[#11253e] text-xl font-bold tracking-tight group-hover:text-[#f99d1c] transition-colors">{job.title}</h3>
                            <div className="flex flex-wrap items-center gap-4 text-xs font-light text-[#11253e]/60">
                              <div className="flex items-center gap-1.5">
                                <MapPin size={14} /> {job.location}
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Briefcase size={14} /> {job.type}
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Clock size={14} /> {job.salary}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-[12px] font-bold text-[#11253e] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">View Role</span>
                            <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#f99d1c] group-hover:border-[#f99d1c] group-hover:text-white transition-all">
                              <ChevronRight size={20} />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </Motion.div>
                  ))
                ) : (
                  <div className="py-20 text-center bg-white border border-dashed border-gray-200 rounded-sm">
                    <p className="text-[#11253e]/40 font-light">No open roles match your current filters.</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
        <LimitlessTogether />
        <Footer />
    </>
  );
}
