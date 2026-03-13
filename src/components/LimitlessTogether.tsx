"use client";

import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion as Motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

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
    question: "Automation to the core",
    answer: "Embedding intelligent automation across processes, delivery, and operations to drive efficiency, consistency, and scalability by design."
  },
  {
    question: "Predictable Outcome",
    answer: "⁠Leveraging architecture rigor, automation, observability, and data-driven controls to consistently deliver measurable technology and business results."
  }
];

export function LimitlessTogether({ data }: any) {
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
                    <Motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-white/90 font-light leading-relaxed text-md">
                        {item.answer}
                      </p>
                    </Motion.div>
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
