"use client";

import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ArrowLeft, CheckCircle2, Quote, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Global Bank: Cloud Modernization",
    client: "Tier 1 Investment Bank",
    industry: "Banking & Financial Services",
    impact: "60% Reduction in OPEX",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    challenge: "The client was struggling with fragmented legacy infrastructure across 12 countries, leading to significant operational overhead and slow deployment cycles for new financial products.",
    solution: "We implemented a multi-region cloud-native architecture using Kubernetes and a unified data fabric. This allowed for centralized governance while maintaining localized data residency compliance.",
    results: [
      "Migrated 400+ applications to the new architecture with zero downtime.",
      "Achieved a 60% reduction in annual infrastructure maintenance costs.",
      "Reduced time-to-market for new digital features from 4 months to 2 weeks."
    ],
    quote: "Nabhira didn't just move us to the cloud; they re-architected how we do business. Their precision and engineering depth were critical to our success.",
    quoteAuthor: "Chief Technology Officer, Tier 1 Investment Bank"
  },
  {
    id: 2,
    title: "Retail Giant: AI Supply Chain",
    client: "Fortune 500 Retailer",
    industry: "Retail & Consumer Goods",
    impact: "40% Inventory Optimization",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1600",
    challenge: "Inaccurate demand forecasting was leading to overstocking in some regions and stockouts in others, resulting in millions in lost revenue and excessive warehouse costs.",
    solution: "We deployed an Agentic AI solution that integrated real-time sales data, weather patterns, and social sentiment to provide hyper-local demand predictions and automated inventory rebalancing.",
    results: [
      "40% reduction in average inventory holding costs.",
      "15% increase in on-shelf availability during peak seasons.",
      "Automated 80% of routine procurement decisions."
    ],
    quote: "The intelligence Nabhira built into our supply chain has transformed our bottom line and allowed our teams to focus on strategic growth rather than manual firefighting.",
    quoteAuthor: "VP of Operations, Global Retail Group"
  },
  {
    id: 3,
    title: "Smart Factory: Edge Intelligence",
    client: "Global Automotive OEM",
    industry: "Manufacturing & Automotive",
    impact: "Zero Unplanned Downtime",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
    challenge: "Frequent unplanned downtime in the assembly line was costing the client approximately $50,000 per hour. Existing preventative maintenance was reactive and inefficient.",
    solution: "We implemented an Edge AI monitoring system that processes vibration and thermal data directly at the source. Machine learning models predict component failures before they occur.",
    results: [
      "Achieved zero unplanned downtime over a 12-month period.",
      "Extended the lifecycle of critical machinery by an average of 30%.",
      "Reduced maintenance labor costs by 25% through predictive scheduling."
    ],
    quote: "Nabhira's edge intelligence solution has made our factory truly smart. The predictive capabilities have become the backbone of our operational excellence.",
    quoteAuthor: "Director of Manufacturing Engineering, Automotive OEM"
  }
];

export default function CaseStudyDetail({ wordpressData }: any) {
  const { id } = useParams();
  const study = caseStudies.find(s => s.id === Number(id));

  useEffect(() => {
    if (study) {
      document.title = `${study.title} | Nabhira Case Studies`;
      window.scrollTo(0, 0);
    }
  }, [study]);

  if (!study) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-[#11253e]">Case Study Not Found</h2>
          <Link href="/resources/case-studies" className="text-[#f99d1c] font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2">
            <ArrowLeft size={14} /> Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="relative h-[520px] overflow-hidden flex items-end pb-24">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src={study.image} 
            alt={study.title} 
            className="w-full h-full object-cover grayscale brightness-50" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] via-[#11253e]/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl space-y-6"
          >
            <nav className="flex items-center space-x-3 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              <Link href="/resources/case-studies" className="text-white/40 hover:text-white transition-colors">Case Studies</Link>
              <span className="text-[#f99d1c]">&gt;</span>
              <span className="text-[#f99d1c]">{study.industry}</span>
            </nav>
            <h1 className="text-white text-4xl md:text-6xl font-medium tracking-tight leading-tight">
              {study.title}
            </h1>
            <div className="flex items-center gap-4 pt-4">
              <div className="h-px w-12 bg-[#f99d1c]"></div>
              <p className="text-[#f99d1c] font-bold text-sm uppercase tracking-widest">{study.client}</p>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-16">
              <div className="space-y-6">
                <h2 className="text-[#11253e] text-3xl font-medium tracking-tight uppercase text-[12px] flex items-center gap-4">
                  <span className="w-8 h-px bg-[#f99d1c]"></span> The Challenge
                </h2>
                <p className="text-[#11253e] text-xl font-light leading-relaxed">{study.challenge}</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-[#11253e] text-3xl font-medium tracking-tight uppercase text-[12px] flex items-center gap-4">
                  <span className="w-8 h-px bg-[#f99d1c]"></span> Our Solution
                </h2>
                <p className="text-[#11253e] text-xl font-light leading-relaxed">{study.solution}</p>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-[#11253e] p-10 text-white space-y-10 sticky top-32">
                <div className="space-y-4">
                  <h3 className="text-[#f99d1c] text-xs font-bold uppercase tracking-[0.2em]">Primary Impact</h3>
                  <p className="text-4xl font-bold tracking-tight leading-none">{study.impact}</p>
                </div>
                
                <div className="space-y-6 border-t border-white/10 pt-10">
                  <h3 className="text-[#f99d1c] text-xs font-bold uppercase tracking-[0.2em]">Key Results</h3>
                  <ul className="space-y-4">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex gap-4 text-sm font-light text-white/70 leading-relaxed">
                        <CheckCircle2 size={18} className="text-[#f99d1c] shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-[#fdfbf7] relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-[0.05] pointer-events-none">
          <Quote size={400} className="text-[#11253e]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
          <Quote size={48} className="text-[#f99d1c] mx-auto opacity-40" />
          <h2 className="text-[#11253e] text-3xl md:text-5xl font-light leading-tight italic tracking-tight">
            "{study.quote}"
          </h2>
          <div className="space-y-1">
            <p className="text-[#11253e] font-bold uppercase tracking-widest text-sm">{study.quoteAuthor}</p>
            <p className="text-[#11253e] text-xs uppercase tracking-widest">Nabhira Transformation Partner</p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-4 max-w-2xl text-center md:text-left">
              <h2 className="text-[#11253e] text-3xl font-medium tracking-tight uppercase text-[12px] flex items-center justify-center md:justify-start gap-4">
                <span className="w-8 h-px bg-[#f99d1c]"></span> Ready for your transformation?
              </h2>
              <p className="text-[#11253e] text-lg font-light">
                Every enterprise has unique challenges. Our architects are ready to design your specific roadmap to success.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link href="/contact">
                <button className="w-full sm:w-auto bg-[#11253e] text-white px-12 py-6 font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-[#f99d1c] transition-all">
                  Consult our Experts
                </button>
              </Link>
              <Link href="/resources/case-studies">
                <button className="w-full sm:w-auto border border-[#11253e]/20 text-[#11253e] px-12 py-6 font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-gray-50 transition-all">
                  View More Cases
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
