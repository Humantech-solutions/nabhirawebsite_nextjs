"use client";

import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const logo = '/assets/footer.png';
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

const whyNabhiraQA = [
  {
    question: "Structured Approach",
    answer: "Defined framework from inception to realization with milestones, governance and measurable checkpoints"
  },
  {
    question: "Delivery Maturity",
    answer: "Consistently executing complex programs with proven governance, risk control, quality standards and predictable results at scale."
  },
  {
    "question": "Automation to the core",
    "answer": "Embedding intelligent automation across processes, delivery, and operations to drive efficiency, consistency, and scalability by design."
  },
  {
    "question": "Predictable Outcome",
    "answer": "⁠Leveraging architecture rigor, automation, observability, and data-driven controls to consistently deliver measurable technology and business results."
  }
];

export function LimitlessTogether() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-black text-white relative overflow-hidden py-24 min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758691737246-95bf8f09a997?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0d28lMjB3b21lbiUyMHRhbGtpbmclMjBpbiUyMG1vZGVybiUyMG9mZmljZSUyMG9mZmljZSUyMGludGVyaW9yfGVufDF8fHx8MTc3MTc3NzQ4NXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Why Nabhira?"
          className="w-full h-full object-cover opacity-50 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="space-y-8">
            <h2 className="text-5xl font-extralight tracking-tight leading-tight">
              Why Nabhira?
            </h2>
            <div className="text-white/70 text-lg font-light leading-relaxed max-w-lg space-y-6">
              <p>
                We bring a structured, outcome-driven approach to every transformation initiative.
              </p>
              <p>
                Our delivery maturity ensures predictable execution, governance discipline, and measurable results.
              </p>
              <p>
                With automation embedded at the core, we accelerate speed, enhance quality, and drive sustainable cost efficiency.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {whyNabhiraQA.map((item, index) => (
              <div 
                key={index} 
                className={`border-b border-white/10 transition-all duration-300 ${openIndex === index ? 'pb-6' : 'pb-4'}`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center text-left group"
                >
                  <span className={`text-xl font-light tracking-tight transition-colors duration-300 ${openIndex === index ? 'text-[#f99d1c]' : 'text-white group-hover:text-[#f99d1c]'}`}>
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-[#f99d1c] border-[#f99d1c]' : 'group-hover:border-[#f99d1c]'}`}>
                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-white/50 font-light leading-relaxed text-sm">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0b1b3d] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#f99d1c] opacity-5 -mb-24 -mr-24 blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center">
              <Link href="/">
                <img src={logo} alt="Nabhira Logo" className="h-10 w-auto" />
              </Link>
            </div>
            <div className="space-y-4 max-w-xs">
              <p className="text-white/40 text-xs font-light leading-relaxed tracking-wide">
                Nabhira is a global pioneer in Cloud-first intelligence, Data-driven engineering, and Agentic AI. We empower enterprises across 50+ countries to orchestrate their digital evolution through advanced data ecosystems and autonomous cloud platforms.
              </p>
              <p className="text-white/30 text-[10px] font-light italic">
                Driving innovation through Cloud Advisory, Data Engineering, and Agentic AI solutions for the modern enterprise.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs font-medium uppercase tracking-normal text-[#f99d1c]">Our Brand</h4>
            <ul className="space-y-4 text-sm font-light text-white/60">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Insights</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Experience Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud Transformation</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs font-medium uppercase tracking-normal text-[#f99d1c]">Topics</h4>
            <ul className="space-y-4 text-sm font-light text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">AI & ML</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cybersecurity</a></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs font-medium uppercase tracking-normal text-[#f99d1c] mb-4">Follow Us</h4>
            <div className="flex space-x-6">
              {[
                { label: "F", name: "Facebook" },
                { label: "X", name: "X" },
                { label: "L", name: "LinkedIn" },
                { label: "I", name: "Instagram" },
                { label: "Y", name: "YouTube" }
              ].map((social) => (
                <div key={social.name} className="flex flex-col items-center group relative">
                  <div className="w-10 h-10 md:w-8 md:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#f99d1c] cursor-pointer transition-all duration-300 text-xs font-medium">
                    {social.label}
                  </div>
                  <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] text-[#f99d1c] font-light tracking-wider whitespace-nowrap">
                    {social.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[10px] font-light text-white/40 uppercase tracking-widest">
          <p>© 2026 NABHIRA TECHNOLOGIES PRIVATE LIMITED</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-[#08b2ff] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#08b2ff] transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-[#08b2ff] transition-colors">Cookie Policy</a>
            <Link href="/contact" className="hover:text-[#08b2ff] transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}