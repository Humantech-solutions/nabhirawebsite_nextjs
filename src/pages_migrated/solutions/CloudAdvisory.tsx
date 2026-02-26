"use client";

import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CloudAdvisory() {
  useEffect(() => {
    document.title = "Cloud Consulting Services | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const serviceOfferings = [
    {
      title: "Assessment",
      desc: "We carefully evaluate the infrastructure, applications, and data modernization requirements of our clients along with an analysis of cost of ownership (TCO). We cover hybrid/multi-cloud operating models to facilitate a seamless transition to cloud services."
    },
    {
      title: "Strategy and Planning",
      desc: "Our cloud strategy workshops in line with the cloud adoption framework (CAF) provide in-depth insights using FIN analysis and hybrid cloud strategy/networking. We excel in orchestrating disaster recovery (DR) and networking cost planning enhancing dependability with an emphasis on data-driven transformation and paving the clear path to success."
    },
    {
      title: "Governance and Design",
      desc: "We set up landing zones to ensure compliance with cloud governance and policy design. Our services encompass larger scale self-service capabilities establishing an enterprise catalogue and implementing industry-level foundation to streamline operations."
    },
    {
      title: "Modernization",
      desc: "We offer support to our clients as they navigate their application modernization and transition to cloud solutions incorporating domain-driven design concepts to boost productivity and flexibility."
    },
    {
      title: "Stabilize/Cloud Ops",
      desc: "We specialize in financial operations (FinOps) applying observability and site-reliability engineering (SRE) techniques and maintaining DevSecOps and cloud operations management. Our strategy involves establishing roles and duties using RACI matrix."
    },
    {
      title: "Innovation",
      desc: "Discover the cutting edge of innovation through our range of services, in cloud, edge computing, advanced artificial intelligence (GenAI) cognitive APIs and MLOps that empower our clients to stay competitive and accelerate transformation in their organization."
    }
  ];

  return (
    <>
      {/* Full Hero Banner */}
      <section className="relative h-[650px] bg-[#11253e] overflow-hidden flex items-center pt-8 md:pt-12">
          {/* Full Width Background Image */}
          <div className="absolute inset-0 z-0">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1660058550844-02d4eaa79667?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGFic3RyYWN0JTIwZGlnaXRhbCUyMGRhdGElMjBmbG93JTIwYmx1ZSUyMG9yYW5nZSUyMGNpbmVtYXRpY3xlbnwxfHx8fDE3NzE5MzIyNzl8MA&ixlib=rb-4.1.0&q=80&w=1920"
              alt="Cloud Data Flow Background"
              className="w-full h-full object-cover opacity-40 mix-blend-screen"
            />
            {/* Sophisticated Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#11253e] via-[#11253e]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] via-transparent to-transparent"></div>
            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
            <Motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl space-y-8"
            >
              <nav className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4 font-bold">
                <span className="hover:text-white cursor-pointer transition-colors">Home</span>
                <span className="w-1 h-1 rounded-full bg-[#f99d1c]"></span>
                <span className="text-[#f99d1c]">Capabilities</span>
              </nav>
              
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                Visionary Cloud <br /> 
                <span className="text-white/40">Consulting.</span>
              </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-12 mb-8 md:mb-12">
                <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm">
                  Navigating your cloud journey with <span className="text-white font-medium">Precision</span> and <span className="text-[#f99d1c] font-medium">Purpose</span> through architectural excellence.
                </p>
                <div className="h-20 w-px bg-white/10 hidden md:block"></div>
                <div className="flex flex-col space-y-2">
                  <span className="text-white text-2xl font-bold tracking-tight">100+</span>
                  <span className="text-white/30 text-[9px] uppercase tracking-widest font-bold">Cloud Experts</span>
                </div>
              </div>

              <div className="pt-8 flex flex-wrap gap-4">
                <button className="bg-[#f99d1c] hover:bg-white hover:text-[#11253e] text-white px-10 py-5 rounded-sm font-medium transition-all inline-flex items-center space-x-3 uppercase text-[11px] tracking-widest shadow-2xl shadow-[#f99d1c]/20">
                  <span>Explore Offerings</span>
                  <ArrowRight size={14} />
                </button>
                <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-sm font-medium transition-all uppercase text-[11px] tracking-widest backdrop-blur-md">
                  Case Studies
                </button>
              </div>
            </Motion.div>
          </div>
          
          {/* Bottom Scroll Indicator Overlay */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-30">
            <span className="text-white text-[9px] uppercase tracking-[0.3em] font-bold">Scroll to Explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-24 bg-[#fdfbf7]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
               <h2 className="text-[#11253e] text-4xl font-medium tracking-tight">Introduction</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-[#11253e] text-xl font-bold uppercase tracking-normal">Our Approach</h3>
                  <p className="text-[#11253e]/70 text-base leading-relaxed font-light">
                    Our cloud consulting services are built on years of technical excellence, industry-leading partnerships and our experience of working closely with our clients to understand their business objectives, IT infrastructure, and regulatory requirements. Our experts develop tailored and custom cloud adoption and transformation roadmap in alignment with the business goals of our clients. We take a comprehensive approach to cloud adoption, providing end-to-end support to our clients from strategy development to implementation and ongoing optimization that leads to deliver tangible results.
                  </p>
                  <p className="text-[#11253e]/70 text-base leading-relaxed font-light mt-4">
                    Harnessing the power of the cloud is essential for staying competitive in today's rapidly evolving digital landscape. We empower organizations to transcend traditional boundaries.
                  </p>
                </div>
              </div>
              
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1679108321213-0fae9ef910e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGFic3RyYWN0JTIwY29sb3JmdWwlMjB3YXZlcyUyMGZsb3d8ZW58MXx8fHwxNzcxOTMwMDIzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Cloud Innovation Waves"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Offerings Section */}
        <section className="py-32 bg-[#eeede9]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mb-20 space-y-6">
              <h2 className="text-[#11253e] text-4xl font-medium tracking-tight">Service Offerings</h2>
              <p className="text-[#11253e]/60 text-lg font-light leading-relaxed">
                We empower businesses to harness the capabilities of cloud technology to fuel expansion, flexibility, and creativity. Our wide range of services addresses all facets of your transition to the cloud.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceOfferings.map((item, i) => (
                <Motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/80 p-10 hover:bg-white transition-all group border border-transparent hover:border-[#f99d1c]/20 h-full flex flex-col"
                >
                  <h3 className="text-[#11253e] text-lg font-bold mb-6 tracking-normal h-12 flex items-center">{item.title}</h3>
                  <p className="text-[#11253e]/60 text-sm font-light leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Scaling Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24">
              <div>
                <h2 className="text-[#11253e] text-4xl lg:text-5xl font-medium leading-tight">
                  Enabling Your Business to Scale at Speed with <br />
                  <span className="text-[#f99d1c]">Nabhira Technologies</span>
                </h2>
              </div>
              
              <div className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-[#11253e] text-xl font-bold tracking-normal uppercase">Expertise</h3>
                  <p className="text-[#11253e]/60 text-base font-light leading-relaxed">
                    Our team of over 100+ professionals have deep knowledge and years of experience and expertise in cloud consulting assisting clients worldwide in various industries and helping them in harnessing the true power of cloud.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-[#11253e] text-xl font-bold tracking-normal uppercase">Customized Solutions</h3>
                  <p className="text-[#11253e]/60 text-base font-light leading-relaxed">
                    As every Business is unique so is our approach to customize our solutions to meet our clients' specific requirements, ensuring they receive the maximum value from their investment.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-[#11253e] text-xl font-bold tracking-normal uppercase">End-to-End Support</h3>
                  <p className="text-[#11253e]/60 text-base font-light leading-relaxed">
                    We provide end-to-end support and assistance throughout our client's journey to the cloud from strategy development to implementation and ongoing management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Redesigned with Diagonal Pattern */}
        <section className="py-24 relative bg-[#11253e] overflow-hidden">
          {/* Diagonal Hatch Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.07]" 
            style={{ 
              backgroundImage: `repeating-linear-gradient(110deg, transparent, transparent 20px, #ffffff 20px, #ffffff 21px)`,
              backgroundSize: '100% 100%'
            }}
          />
          <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{ 
              backgroundImage: `repeating-linear-gradient(20deg, transparent, transparent 40px, #ffffff 40px, #ffffff 41px)`,
              backgroundSize: '100% 100%'
            }}
          />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#fdfbf7] p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden"
            >
              {/* Decorative Accent */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#f99d1c]"></div>
              
              <div className="max-w-2xl space-y-6">
                <h2 className="text-[#11253e] text-3xl md:text-5xl font-medium tracking-tight leading-[1.1]">
                  Ready to Transform Your <br className="hidden md:block" /> Cloud Strategy?
                </h2>
                <p className="text-[#11253e]/70 text-lg md:text-xl font-light leading-relaxed">
                  Schedule a strategic workshop with our experts to define your roadmap for digital acceleration and architectural excellence.
                </p>
              </div>
              
              <div className="flex-shrink-0 w-full md:w-auto">
                <button className="w-full md:w-auto bg-[#f99d1c] hover:bg-[#11253e] text-white px-12 py-6 rounded-sm font-medium transition-all inline-flex items-center justify-center space-x-4 uppercase text-xs tracking-[0.2em] shadow-xl shadow-[#f99d1c]/20 group">
                  <span>Start Your Journey</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Motion.div>
          </div>
        </section>
    </>
  );
}
