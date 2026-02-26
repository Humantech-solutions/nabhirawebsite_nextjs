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
      <section className="relative h-[520px] overflow-hidden pt-8 md:pt-12">
        <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758518731814-77fa04b3c67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwYXJ0bmVyc2hpcCUyMGhhbmRzaGFrZSUyMGdsYXNzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcxODk5MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Partners Ecosystem"
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
                  <Link href="/about" className="text-white/60 hover:text-white transition-colors">About Us</Link>
                  <span className="text-white/30 font-light">&gt;</span>
                  <span className="text-[#f99d1c]">Partners Ecosystem</span>
                </nav>

                <div className="border-l-[1px] border-white/20 pl-6 md:pl-12 py-2">
                  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-4 md:mb-8">
                    Orchestrating <br />
                    <span className="text-[#f99d1c]">Global</span> Synergy
                  </h1>
                  <p className="text-white/90 text-sm sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm">
                    Our ecosystem is built on the principle of collaborative excellence. We partner with the world's leading technology pioneers to deliver integrated, future-proof solutions.
                  </p>
                </div>
              </Motion.div>
            </div>
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
              <p className="max-w-2xl mx-auto text-[#11253e]/70 font-light leading-relaxed">
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
                  <p className="text-[#11253e]/60 text-sm font-light leading-relaxed">
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
