"use client";

import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer, LimitlessTogether } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Handshake, Globe, Zap, Shield } from "lucide-react";

export default function Partners() {
  useEffect(() => {
    document.title = "Partners Ecosystem | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const partnerTypes = [
    {
      icon: <Globe className="text-[#f99d1c]" size={32} />,
      title: "Hyperscalers",
      desc: "Strategic alliances with leading cloud providers to deliver scalable, global-ready infrastructure."
    },
    {
      icon: <Zap className="text-[#f99d1c]" size={32} />,
      title: "ISV Partners",
      desc: "Collaboration with specialized software vendors to integrate best-of-breed solutions into our architectures."
    },
    {
      icon: <Shield className="text-[#f99d1c]" size={32} />,
      title: "Compliance & Security",
      desc: "Tier-1 security partnerships ensuring sovereign data residency and enterprise-grade governance."
    },
    {
      icon: <Handshake className="text-[#f99d1c]" size={32} />,
      title: "Niche Consultants",
      desc: "Specialized knowledge partners that augment our deep engineering with industry-specific domain expertise."
    }
  ];

  return (
    <>
      {/* Partners Hero */}
      <section className="relative h-[400px] md:h-[520px] bg-[#11253e] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758518731814-77fa04b3c67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwYXJ0bmVyc2hpcCUyMGhhbmRzaGFrZSUyMGdsYXNzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcxODk5MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Partners Ecosystem"
              className="w-full h-full object-cover opacity-40 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#11253e] via-[#11253e]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] via-transparent to-transparent"></div>
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
                <Link href="/" className="hover:text-white cursor-pointer transition-colors">Home</Link>
                <span className="w-1 h-1 rounded-full bg-[#f99d1c]"></span>
                <Link href="/about" className="hover:text-white cursor-pointer transition-colors">About Us</Link>
                <span className="w-1 h-1 rounded-full bg-[#f99d1c]"></span>
                <span className="text-[#f99d1c]">Partners Ecosystem</span>
              </nav>
              
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                Orchestrating <br />
                <span className="text-[#f99d1c]">Global</span> Synergy
              </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-12 mb-8 md:mb-12">
                <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm">
                  Our ecosystem is built on the principle of collaborative excellence. We partner with the world's leading technology pioneers to deliver integrated, future-proof solutions.
                </p>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* Ecosystem Value Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="text-center mb-20">
              <h2 className="text-[#11253e] text-3xl md:text-4xl font-light mb-4 tracking-tight">
                An Ecosystem of <span className="font-bold">Innovation</span>
              </h2>
              <div className="w-20 h-1 bg-[#f99d1c] mx-auto mb-8"></div>
              <p className="max-w-2xl mx-auto text-[#11253e] font-light leading-relaxed">
                We don't just work with partners; we co-create value. Our alliances are deep, technical, and focused on delivering architectural superiority.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerTypes.map((type, i) => (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-10 border border-gray-100 hover:border-[#f99d1c]/30 hover:shadow-xl transition-all duration-300 rounded-sm group"
                >
                  <div className="mb-8 group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h4 className="text-[#11253e] text-lg font-bold mb-4 tracking-tight uppercase text-[12px]">{type.title}</h4>
                  <p className="text-[#11253e] text-sm font-light leading-relaxed">
                    {type.desc}
                  </p>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#11253e] text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">
              Ready to architect <span className="text-[#f99d1c] font-bold">together</span>?
            </h2>
            <p className="text-white/60 font-light max-w-xl mb-12 leading-relaxed">
              We are always looking for partners who share our commitment to precision engineering and digital excellence. Join our ecosystem and help us shape the future.
            </p>
            <button className="bg-[#f99d1c] text-white px-10 py-4 font-bold text-[12px] tracking-[0.2em] uppercase rounded-sm hover:bg-[#e08b1a] transition-colors">
              BECOME A PARTNER
            </button>
          </div>
        </section>

        <LimitlessTogether />
    </>
  );
}