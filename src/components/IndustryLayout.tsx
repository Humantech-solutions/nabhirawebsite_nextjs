"use client";

import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import Link from "next/link";
import { LimitlessTogether, Footer } from "./Footer";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Cloud, 
  Database, 
  Cpu, 
  ChevronRight, 
  ArrowRight,
  TrendingUp,
  Shield,
  UserCheck
} from "lucide-react";

interface ServiceBlock {
  title: string;
  description: string;
  features: string[];
}

interface Challenge {
  title: string;
  text: string;
  icon: React.ReactNode;
}

interface ImpactArea {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
}

interface SpecialService {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface IndustryLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  overview: string;
  cloudService: ServiceBlock;
  dataService: ServiceBlock;
  aiService: ServiceBlock;
  challenges?: Challenge[];
  impactAreas?: ImpactArea[];
  specialityTitle?: string;
  specialityDesc?: string;
  specialityServices?: SpecialService[];
  globalSettings?: {
    heroSlides: any;
    limitlessTogether: any;
  };
}

export function IndustryLayout({
  title,
  subtitle,
  heroImage,
  overview,
  cloudService,
  dataService,
  aiService,
  challenges,
  impactAreas,
  specialityTitle,
  specialityDesc,
  specialityServices,
  globalSettings
}: IndustryLayoutProps) {
  useEffect(() => {
    document.title = `${title} | Nabhira Technologies`;
    window.scrollTo(0, 0);
  }, [title]);
 
  return (
    <div className="bg-white text-[#11253e] selection:bg-[#f99d1c] selection:text-white">
      {/* Industry Hero */}
      <section className="relative min-h-[450px] md:min-h-[520px] overflow-hidden flex items-center py-12 md:py-24">
          <div className="absolute inset-0">
            <ImageWithFallback
              src={globalSettings?.heroSlides?.heroS1ImageUrl || globalSettings?.heroSlides?.heroS1Image?.node?.sourceUrl || heroImage}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#11253e]/90 via-[#11253e]/70 to-transparent"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="max-w-3xl space-y-6 md:space-y-8">
              <Motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.2em] text-white/40 mb-6 md:mb-8 font-bold">
                  <Link href="/" className="hover:text-white cursor-pointer transition-colors">Home</Link>
                  <span className="w-1 h-1 rounded-full bg-[#f99d1c]"></span>
                  <span className="text-[#f99d1c]">Industries</span>
                </nav>
 
                <div className="border-l-[1px] border-white/20 pl-6 md:pl-12 py-2">
                  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-4 md:mb-8">
                    {globalSettings?.heroSlides?.heroS1Title ? (
                      <span dangerouslySetInnerHTML={{ __html: globalSettings.heroSlides.heroS1Title }} />
                    ) : (
                      title
                    )}
                  </h1>
                  <p className="text-[#f99d1c] text-sm md:text-base font-medium tracking-normal uppercase mb-4">
                    {subtitle}
                  </p>
                  <p className="text-white/90 text-sm sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm">
                    {globalSettings?.heroSlides?.heroS1Desc || overview}
                  </p>
                </div>
              </Motion.div>
            </div>
          </div>
        </section>

        {/* Challenges Section (Bento Grid) */}
        {challenges && challenges.length > 0 && (
          <section className="py-24 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#11253e] mb-4">
                    The Industry <span className="font-bold">Imperative</span>
                  </h2>
                  <div className="h-1 w-20 bg-[#f99d1c]"></div>
                </div>
                <p className="text-[#11253e]/70 text-base md:text-lg max-w-md">
                  Enterprises in this sector are navigating a defining decade. Transformation is no longer optional—it is structural.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {challenges.map((item, idx) => (
                  <Motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#f99d1c]/30 transition-all duration-300 group"
                  >
                    <div className="mb-6 bg-[#11253e]/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-[#11253e] group-hover:text-white transition-colors duration-300">
                      <div className="group-hover:text-white text-[#11253e] transition-colors duration-300">
                        {item.icon} 
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#11253e] mb-3">{item.title}</h3>
                    <p className="text-[#11253e]/60 leading-relaxed text-sm md:text-base">{item.text}</p>
                  </Motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Impact Areas (Alternating Layout) */}
        {impactAreas && impactAreas.length > 0 && (
          <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-6xl font-light text-[#11253e] mb-6">
                  Where We Create <span className="italic font-serif text-[#f99d1c]">Impact</span>
                </h2>
                <p className="text-[#11253e]/60 text-lg md:text-xl max-w-3xl mx-auto font-light">
                  Modernize platforms, strengthen governance, and accelerate digital growth without compromising resilience.
                </p>
              </div>

              <div className="space-y-24">
                {impactAreas.map((area, idx) => (
                  <Motion.div
                    key={area.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                  >
                    <div className="flex-1 space-y-6 text-center md:text-left">
                      <div className="flex items-center gap-4 mb-2 justify-center md:justify-start">
                        <span className="text-[#f99d1c] font-mono text-lg">0{idx + 1}</span>
                        <div className="h-px bg-[#11253e]/10 flex-grow hidden md:block"></div>
                      </div>
                      <h3 className="text-2xl md:text-4xl font-bold text-[#11253e]">{area.title}</h3>
                      <p className="text-[#11253e]/70 text-base md:text-lg leading-relaxed font-light">{area.description}</p>
                      
                      <ul className="space-y-3 pt-4 inline-block md:block">
                        {area.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-3 text-[#11253e] font-medium text-sm md:text-base justify-center md:justify-start">
                            <div className="w-1.5 h-1.5 bg-[#f99d1c] rounded-full"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex-1 w-full">
                      <div className="relative aspect-[4/3] bg-[#f5f5f5] rounded-3xl overflow-hidden flex items-center justify-center group">
                        <div className="absolute inset-0 bg-[#11253e]/5 opacity-20"></div>
                        <div className="relative z-10 p-12 bg-white rounded-full shadow-2xl text-[#f99d1c] group-hover:scale-110 transition-transform duration-500">
                          <div className="transform scale-150">
                            {area.icon}
                          </div>
                        </div>
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#f99d1c]/10 rounded-full blur-3xl"></div>
                      </div>
                    </div>
                  </Motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Core Services Section (from original Layout) */}
        {!challenges && !impactAreas && (
          <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
              <div className="mb-20">
                <h2 className="text-[#11253e] text-3xl md:text-4xl font-light mb-4 tracking-tight">
                  Architectural <span className="font-medium">Solutions</span>
                </h2>
                <div className="w-20 h-1 bg-[#f99d1c]"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {[
                  { block: cloudService, icon: <Cloud size={28} />, label: "Cloud Transformation" },
                  { block: dataService, icon: <Database size={28} />, label: "Data & Analytics" },
                  { block: aiService, icon: <Cpu size={28} />, label: "Agentic AI" }
                ].map((s, idx) => (
                  <Motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group p-8 border border-gray-100 bg-[#f8f9fa] hover:border-[#f99d1c]/30 hover:shadow-xl transition-all duration-500 rounded-sm"
                  >
                    <div className="w-14 h-14 bg-[#11253e] flex items-center justify-center rounded-sm mb-8 group-hover:bg-[#f99d1c] transition-colors">
                      <span className="text-white">{s.icon}</span>
                    </div>
                    <h3 className="text-[#11253e] text-xl font-medium mb-4 tracking-normal uppercase text-[12px]">{s.label}</h3>
                    <h4 className="text-[#11253e] text-lg font-medium mb-4">{s.block.title}</h4>
                    <p className="text-[#11253e]/60 font-light text-sm leading-relaxed mb-8">
                      {s.block.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {s.block.features.map((f: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-xs text-[#11253e]/80">
                          <div className="w-1 h-1 bg-[#f99d1c] rounded-full mt-1.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </Motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Speciality Section (e.g. FinTech Innovation) */}
        {specialityServices && specialityServices.length > 0 && (
          <section className="py-24 bg-[#11253e] text-white relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f99d1c]/50 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-5xl font-light">
                    Enabling <br />
                    <span className="font-bold text-[#f99d1c]">{specialityTitle || "Innovation"}</span>
                  </h2>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md font-light">
                    {specialityDesc || "We combine startup agility with enterprise-grade engineering discipline to build the next generation of digital products."}
                  </p>
                  
                  <Link href="/contact" className="inline-flex items-center gap-2 text-[#f99d1c] font-medium hover:gap-4 transition-all">
                    Partner with us <ArrowRight size={20} />
                  </Link>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {specialityServices.map((service, idx) => (
                    <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="text-[#f99d1c] mb-4">{service.icon}</div>
                      <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                      <p className="text-white/50 text-sm font-light">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Strategic Outcome Section (Metrics Style) */}
        <section className="py-24 bg-[#f99d1c] relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
              backgroundImage: 'linear-gradient(to right, #11253e 1px, transparent 1px)', 
              backgroundSize: '40px 100%' 
            }}
          ></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#11253e]">
              <div className="md:col-span-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Outcomes That Matter</h2>
                <p className="opacity-80 text-sm md:text-base">Tangible results for forward-thinking institutions.</p>
              </div>
              
              <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <TrendingUp size={32} />, title: "Faster Launches", desc: "Accelerated digital product delivery cycles." },
                  { icon: <Shield size={32} />, title: "Reduced Risk", desc: "Stronger compliance and audit readiness." },
                  { icon: <UserCheck size={32} />, title: "Customer Trust", desc: "Improved retention through secure experiences." },
                  { icon: <Database size={32} />, title: "Future Ready", desc: "Scalable infrastructure for long-term growth." }
                ].map((o, idx) => (
                  <div key={idx} className="border-l-2 border-[#11253e]/20 pl-6">
                    <div className="mb-4 opacity-80">{o.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{o.title}</h3>
                    <p className="opacity-80 text-sm">{o.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <LimitlessTogether data={globalSettings?.limitlessTogether} />
        <Footer />
    </div>
  );
}
