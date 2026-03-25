"use client";

import { motion as Motion } from "motion/react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { LimitlessTogether } from "../components/LimitlessTogether";
import { MapPin, Briefcase, GraduationCap, ChevronLeft, Upload, Send, Share2, Copy, Check } from "lucide-react";
import { jobs } from "../data/migrated_data";

function CopyLinkButton() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center justify-center w-9 h-9 rounded-full text-gray-400 hover:text-[#f99d1c] hover:bg-[#f99d1c]/10 transition-all"
    >
      {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
    </button>
  );
}

function ShareJobButton({ title }: { title: string }) {
  const handleShare = () => {
    if (typeof window !== 'undefined') {
      if (navigator.share) {
        navigator.share({ title, url: window.location.href });
      } else {
        navigator.clipboard.writeText(window.location.href);
      }
    }
  };
  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center justify-center w-9 h-9 rounded-full text-gray-400 hover:text-[#f99d1c] hover:bg-[#f99d1c]/10 transition-all"
    >
      <Share2 size={16} />
    </button>
  );
}

export default function JobDetails() {
  const { slug } = useParams<{ slug: string }>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Look up by slug field
  const job = jobs.find(j => j.slug === slug);

  useEffect(() => {
    if (job) {
      window.scrollTo(0, 0);
    }
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: ""
  });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8000/api/career/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          pageTitle: document.title,
          pageUrl: window.location.href,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || "Failed to submit application.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Unable to connect to the server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <Link href="/careers" className="inline-flex items-center gap-2 text-[#11253e] hover:text-[#f99d1c] transition-colors text-[12px] font-bold uppercase tracking-widest">
              <ChevronLeft size={18} /> All Open Roles
            </Link>
            {/* Share/Copy buttons at the top */}
            {/* <div className="flex items-center gap-3">
              <CopyLinkButton />
              <ShareJobButton title={job.title} />
            </div> */}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Job Content */}
            <div className="lg:col-span-7 space-y-12">
              <section className="space-y-6">
                {/* Job ID badge instead of department */}
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-[1px] bg-[#f99d1c]"></div>
                  <span className="font-mono text-[#f99d1c] font-bold tracking-[0.2em] text-[10px] uppercase">{job.id}</span>
                </div>
                <h1 className="text-[#11253e] text-4xl sm:text-5xl font-bold tracking-tight leading-tight">{job.title}</h1>
                
                <div className="flex flex-wrap items-center gap-3 text-sm font-light text-[#11253e] pt-4">
                  <div className="flex items-center gap-2 bg-[#f8f9fa] px-4 py-2 rounded-full border border-gray-100">
                    <MapPin size={16} className="text-[#f99d1c]" /> {job.location}
                  </div>
                  <div className="flex items-center gap-2 bg-[#f8f9fa] px-4 py-2 rounded-full border border-gray-100">
                    <Briefcase size={16} className="text-[#f99d1c]" /> {job.type}
                  </div>
                  <div className="flex items-center gap-2 bg-[#f8f9fa] px-4 py-2 rounded-full border border-gray-100">
                    <GraduationCap size={16} className="text-[#f99d1c]" /> {job.experience}
                  </div>
                  {/* Copy & Share — pushed to flex-end */}
                  <div className="ml-auto flex items-center gap-1">
                    <CopyLinkButton />
                    <ShareJobButton title={job.title} />
                  </div>
                </div>
              </section>

              <div className="prose prose-slate max-w-none text-[#11253e] font-light space-y-8">
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
    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
      Full Name
    </label>
    <input
      required
      type="text"
      placeholder="John Doe"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      className="w-full bg-white/5 border-b border-white/10 py-3 px-3 focus:outline-none focus:border-[#f99d1c] transition-colors font-light text-sm text-white placeholder-white/40"
    />
  </div>

  <div className="space-y-2">
    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
      Email Address
    </label>
    <input
      required
      type="email"
      placeholder="john@example.com"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      className="w-full bg-white/5 border-b border-white/10 py-3 px-3 focus:outline-none focus:border-[#f99d1c] transition-colors font-light text-sm text-white placeholder-white/40"
    />
  </div>

  <div className="space-y-2">
    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
      LinkedIn Profile (URL)
    </label>
    <input
      required
      type="url"
      placeholder="https://linkedin.com/in/..."
      value={formData.linkedin}
      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
      className="w-full bg-white/5 border-b border-white/10 py-3 px-3 focus:outline-none focus:border-[#f99d1c] transition-colors font-light text-sm text-white placeholder-white/40"
    />
  </div>

  <div className="space-y-2">
    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
      Resume / CV
    </label>

    <div className="border border-dashed border-white/20 rounded-sm p-6 text-center cursor-pointer hover:border-[#f99d1c] transition-colors group">
      <Upload
        size={20}
        className="mx-auto text-white/20 mb-2 group-hover:text-[#f99d1c]"
      />
      <p className="text-[12px] font-light text-white/40">
        PDF, DOCX (Max 5MB)
      </p>
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

  {error && (
    <p className="text-red-400 text-[11px] text-center font-medium mt-4">
      {error}
    </p>
  )}

  <p className="text-[10px] text-white/30 text-center font-light leading-relaxed">
    By applying, you agree to our recruitment privacy policy. Nabhira is an
    equal opportunity employer.
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