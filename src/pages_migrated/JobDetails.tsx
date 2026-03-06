"use client";

import { motion as Motion } from "motion/react";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer, LimitlessTogether } from "../components/Footer";
import { MapPin, Briefcase, Clock, ChevronLeft, Upload, Send } from "lucide-react";
import { jobs } from "../data/migrated_data";

export default function JobDetails({ wpJob }: { wpJob?: any }) {
  const { id } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Use wpJob if available, else fallback to static data
  const job = wpJob || jobs.find(j => j.id === id);

  useEffect(() => {
    if (job) {
      document.title = `${job.title} | Nabhira Technologies Careers`;
    }
    window.scrollTo(0, 0);
  }, [job]);

  if (!job) {
    return (
      <main className="pt-40 text-center">
        <h1 className="text-[#11253e] text-3xl font-bold mb-4">Job Not Found</h1>
        <Link href="/careers" className="text-[#f99d1c] hover:underline flex items-center justify-center gap-2">
          <ChevronLeft size={18} /> Back to Careers
        </Link>
      </main>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <>
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <Link href="/careers" className="inline-flex items-center gap-2 text-[#11253e] hover:text-[#f99d1c] transition-colors mb-12 text-[12px] font-bold uppercase tracking-widest">
            <ChevronLeft size={18} /> All Open Roles
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Job Content */}
            <div className="lg:col-span-7 space-y-12">
              <section className="space-y-6">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-[1px] bg-[#f99d1c]"></div>
                  <span className="text-[#f99d1c] font-bold tracking-[0.2em] text-[10px] uppercase">{job.department}</span>
                </div>
                <h1 className="text-[#11253e] text-4xl sm:text-5xl font-bold tracking-tight leading-tight">{job.title}</h1>
                
                <div className="flex flex-wrap items-center gap-6 text-sm font-light text-[#11253e] pt-4">
                  <div className="flex items-center gap-2 bg-[#f8f9fa] px-4 py-2 rounded-full border border-gray-100">
                    <MapPin size={16} className="text-[#f99d1c]" /> {job.location}
                  </div>
                  <div className="flex items-center gap-2 bg-[#f8f9fa] px-4 py-2 rounded-full border border-gray-100">
                    <Briefcase size={16} className="text-[#f99d1c]" /> {job.type}
                  </div>
                  {job.salary && (
                    <div className="flex items-center gap-2 bg-[#f8f9fa] px-4 py-2 rounded-full border border-gray-100">
                      <Clock size={16} className="text-[#f99d1c]" /> {job.salary}
                    </div>
                  )}
                </div>
              </section>

              <div className="prose prose-slate max-w-none text-[#11253e] font-light space-y-8 wp-job-content">
                {wpJob && wpJob.description ? (
                   <div dangerouslySetInnerHTML={{ __html: wpJob.description }} />
                ) : (
                  <>
                    <section>
                      <h3 className="text-[#11253e] text-xl font-bold mb-4">About the Role</h3>
                      <p className="leading-relaxed">
                        Nabhira Technologies is looking for a {job.title} to join our high-performing {job.department} team. In this role, you will be responsible for architecting critical infrastructure and driving digital transformation for our global clients. You'll work closely with a multidisciplinary team of engineers, designers, and strategists to deliver world-class digital experiences.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-[#11253e] text-xl font-bold mb-4">Key Responsibilities</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Design and implement scalable, high-performance architectures aligned with Nabhira's core principles.</li>
                        <li>Collaborate with cross-functional teams to translate complex business requirements into technical solutions.</li>
                        <li>Ensure all deliverables maintain the highest standards of architectural integrity and performance.</li>
                        <li>Mentor junior team members and contribute to the evolution of our engineering practices.</li>
                        <li>Stay abreast of emerging technologies and industry trends to keep our platform at the cutting edge.</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-[#11253e] text-xl font-bold mb-4">Core Requirements</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Proven track record of success in {job.department.toLowerCase()} roles within high-growth technology environments.</li>
                        <li>Deep expertise in modern development frameworks and cloud-native architectures.</li>
                        <li>Exceptional problem-solving skills and a meticulous attention to detail.</li>
                        <li>Strong communication skills with the ability to articulate complex technical concepts to non-technical stakeholders.</li>
                        <li>A passion for building high-quality, architecturally sound digital products.</li>
                      </ul>
                    </section>
                  </>
                )}
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <Motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#11253e] text-white p-10 rounded-sm shadow-2xl relative overflow-hidden"
                >
                  {/* Pinstripe overlay */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none" 
                       style={{ backgroundImage: 'linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.1) 100%)', backgroundSize: '40px 100%' }}></div>
                  
                  {submitted ? (
                    <div className="text-center py-12 space-y-6">
                      <div className="w-16 h-16 bg-[#f99d1c] rounded-full flex items-center justify-center mx-auto text-white">
                        <Send size={24} />
                      </div>
                      <h2 className="text-2xl font-bold">Application Sent</h2>
                      <p className="text-white/60 font-light leading-relaxed">
                        Thank you for your interest in Nabhira. Our talent acquisition team will review your application and be in touch shortly.
                      </p>
                      <button 
                        onClick={() => setSubmitted(false)}
                        className="text-[#f99d1c] font-bold text-[12px] uppercase tracking-widest hover:underline"
                      >
                        Send another application
                      </button>
                    </div>
                  ) : (
                    <div className="relative z-10">
                      <h2 className="text-2xl font-bold mb-2">Apply for this role</h2>
                      <p className="text-white/60 text-sm font-light mb-8">Architect the future with us.</p>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Full Name</label>
                          <input 
                            required
                            type="text" 
                            className="w-full bg-white/5 border-b border-white/10 py-2 focus:outline-none focus:border-[#f99d1c] transition-colors font-light text-sm"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Email Address</label>
                          <input 
                            required
                            type="email" 
                            className="w-full bg-white/5 border-b border-white/10 py-2 focus:outline-none focus:border-[#f99d1c] transition-colors font-light text-sm"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">LinkedIn Profile (URL)</label>
                          <input 
                            required
                            type="url" 
                            className="w-full bg-white/5 border-b border-white/10 py-2 focus:outline-none focus:border-[#f99d1c] transition-colors font-light text-sm"
                            placeholder="https://linkedin.com/in/..."
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Resume / CV</label>
                          <div className="border border-dashed border-white/20 rounded-sm p-6 text-center cursor-pointer hover:border-[#f99d1c] transition-colors group">
                            <Upload size={20} className="mx-auto text-white/20 mb-2 group-hover:text-[#f99d1c]" />
                            <p className="text-[12px] font-light text-white/40">PDF, DOCX (Max 5MB)</p>
                          </div>
                        </div>
                        
                        <button 
                          disabled={isSubmitting}
                          type="submit"
                          className="w-full bg-[#f99d1c] text-white py-4 font-bold text-[12px] tracking-[0.2em] uppercase rounded-sm hover:bg-[#e08b1a] transition-all transform active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? "Processing..." : "Submit Application"}
                          {!isSubmitting && <Send size={16} />}
                        </button>
                        <p className="text-[10px] text-white/30 text-center font-light leading-relaxed">
                          By applying, you agree to our recruitment privacy policy. Nabhira is an equal opportunity employer.
                        </p>
                      </form>
                    </div>
                  )}
                </Motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}