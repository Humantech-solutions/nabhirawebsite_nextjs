"use client";

import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import Link from "next/link";
import { LimitlessTogether } from "../../components/Footer";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { renderHeroTitle, renderDynamicIcon } from "../../lib/utils";
import { Linkedin, Mail, ChevronRight } from "lucide-react";

export default function Leadership({ wordpressData }: { wordpressData?: any }) {
  const gs = wordpressData?.globalSettings;
  const heroData = gs?.heroSlides;

  useEffect(() => {
    document.title = "Leadership | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const lp = wordpressData?.leadershipPage;

  const leaders = [
    {
      name: lp?.leader1Name || "Aditya Vardhan",
      role: lp?.leader1Role || "Chief Executive Officer",
      bio: lp?.leader1Bio || "With over 20 years of experience in digital transformation, Aditya leads Nabhira's vision to architect the future of enterprise intelligence.",
      image: lp?.leader1Image?.node?.sourceUrl || lp?.leader1Image?.sourceUrl || "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY2VjdXRpdmUlMjBtYW4lMjBzdWl0fGVufDF8fHx8MTc3MTg5OTAyOHww&ixlib=rb-4.1.0&q=80&w=1080",
      linkedinUrl: lp?.leader1LinkedinUrl,
      linkedinIconType: lp?.leader1LinkedinIconType || 'lucide',
      linkedinLucide: lp?.leader1LinkedinLucide || 'Linkedin',
      linkedinImage: lp?.leader1LinkedinImage,
      mailUrl: lp?.leader1MailUrl,
      mailIconType: lp?.leader1MailIconType || 'lucide',
      mailLucide: lp?.leader1MailLucide || 'Mail',
      mailImage: lp?.leader1MailImage
    },
    {
      name: lp?.leader2Name || "Meera Krishnan",
      role: lp?.leader2Role || "Chief Technology Officer",
      bio: lp?.leader2Bio || "Meera is a pioneer in Cloud-native architectures and AI, driving the technological excellence that defines Nabhira's market-leading solutions.",
      image: lp?.leader2Image?.node?.sourceUrl || lp?.leader2Image?.sourceUrl || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY2VjdXRpdmUlMjB3b21hbiUyMHN1aXR8ZW58MXx8fHwxNzcxODk5MDI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      linkedinUrl: lp?.leader2LinkedinUrl,
      linkedinIconType: lp?.leader2LinkedinIconType || 'lucide',
      linkedinLucide: lp?.leader2LinkedinLucide || 'Linkedin',
      linkedinImage: lp?.leader2LinkedinImage,
      mailUrl: lp?.leader2MailUrl,
      mailIconType: lp?.leader2MailIconType || 'lucide',
      mailLucide: lp?.leader2MailLucide || 'Mail',
      mailImage: lp?.leader2MailImage
    },
    {
      name: lp?.leader3Name || "Vikram Sethi",
      role: lp?.leader3Role || "Head of AI & Data Engineering",
      bio: lp?.leader3Bio || "Vikram oversees our most complex data initiatives, specializing in building high-performance, autonomous data ecosystems for global majors.",
      image: lp?.leader3Image?.node?.sourceUrl || lp?.leader3Image?.sourceUrl || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxODk5MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      linkedinUrl: lp?.leader3LinkedinUrl,
      linkedinIconType: lp?.leader3LinkedinIconType || 'lucide',
      linkedinLucide: lp?.leader3LinkedinLucide || 'Linkedin',
      linkedinImage: lp?.leader3LinkedinImage,
      mailUrl: lp?.leader3MailUrl,
      mailIconType: lp?.leader3MailIconType || 'lucide',
      mailLucide: lp?.leader3MailLucide || 'Mail',
      mailImage: lp?.leader3MailImage
    },
    {
      name: lp?.leader4Name,
      role: lp?.leader4Role,
      bio: lp?.leader4Bio,
      image: lp?.leader4Image?.node?.sourceUrl || lp?.leader4Image?.sourceUrl,
      linkedinUrl: lp?.leader4LinkedinUrl,
      linkedinIconType: lp?.leader4LinkedinIconType || 'lucide',
      linkedinLucide: lp?.leader4LinkedinLucide || 'Linkedin',
      linkedinImage: lp?.leader4LinkedinImage,
      mailUrl: lp?.leader4MailUrl,
      mailIconType: lp?.leader4MailIconType || 'lucide',
      mailLucide: lp?.leader4MailLucide || 'Mail',
      mailImage: lp?.leader4MailImage
    },
    {
      name: lp?.leader5Name,
      role: lp?.leader5Role,
      bio: lp?.leader5Bio,
      image: lp?.leader5Image?.node?.sourceUrl || lp?.leader5Image?.sourceUrl,
      linkedinUrl: lp?.leader5LinkedinUrl,
      linkedinIconType: lp?.leader5LinkedinIconType || 'lucide',
      linkedinLucide: lp?.leader5LinkedinLucide || 'Linkedin',
      linkedinImage: lp?.leader5LinkedinImage,
      mailUrl: lp?.leader5MailUrl,
      mailIconType: lp?.leader5MailIconType || 'lucide',
      mailLucide: lp?.leader5MailLucide || 'Mail',
      mailImage: lp?.leader5MailImage
    },
    {
      name: lp?.leader6Name,
      role: lp?.leader6Role,
      bio: lp?.leader6Bio,
      image: lp?.leader6Image?.node?.sourceUrl || lp?.leader6Image?.sourceUrl,
      linkedinUrl: lp?.leader6LinkedinUrl,
      linkedinIconType: lp?.leader6LinkedinIconType || 'lucide',
      linkedinLucide: lp?.leader6LinkedinLucide || 'Linkedin',
      linkedinImage: lp?.leader6LinkedinImage,
      mailUrl: lp?.leader6MailUrl,
      mailIconType: lp?.leader6MailIconType || 'lucide',
      mailLucide: lp?.leader6MailLucide || 'Mail',
      mailImage: lp?.leader6MailImage
    },
    {
      name: lp?.leader7Name,
      role: lp?.leader7Role,
      bio: lp?.leader7Bio,
      image: lp?.leader7Image?.node?.sourceUrl || lp?.leader7Image?.sourceUrl,
      linkedinUrl: lp?.leader7LinkedinUrl,
      linkedinIconType: lp?.leader7LinkedinIconType || 'lucide',
      linkedinLucide: lp?.leader7LinkedinLucide || 'Linkedin',
      linkedinImage: lp?.leader7LinkedinImage,
      mailUrl: lp?.leader7MailUrl,
      mailIconType: lp?.leader7MailIconType || 'lucide',
      mailLucide: lp?.leader7MailLucide || 'Mail',
      mailImage: lp?.leader7MailImage
    },
    {
      name: lp?.leader8Name,
      role: lp?.leader8Role,
      bio: lp?.leader8Bio,
      image: lp?.leader8Image?.node?.sourceUrl || lp?.leader8Image?.sourceUrl,
      linkedinUrl: lp?.leader8LinkedinUrl,
      linkedinIconType: lp?.leader8LinkedinIconType || 'lucide',
      linkedinLucide: lp?.leader8LinkedinLucide || 'Linkedin',
      linkedinImage: lp?.leader8LinkedinImage,
      mailUrl: lp?.leader8MailUrl,
      mailIconType: lp?.leader8MailIconType || 'lucide',
      mailLucide: lp?.leader8MailLucide || 'Mail',
      mailImage: lp?.leader8MailImage
    },
    {
      name: lp?.leader9Name,
      role: lp?.leader9Role,
      bio: lp?.leader9Bio,
      image: lp?.leader9Image?.node?.sourceUrl || lp?.leader9Image?.sourceUrl,
      linkedinUrl: lp?.leader9LinkedinUrl,
      linkedinIconType: lp?.leader9LinkedinIconType || 'lucide',
      linkedinLucide: lp?.leader9LinkedinLucide || 'Linkedin',
      linkedinImage: lp?.leader9LinkedinImage,
      mailUrl: lp?.leader9MailUrl,
      mailIconType: lp?.leader9MailIconType || 'lucide',
      mailLucide: lp?.leader9MailLucide || 'Mail',
      mailImage: lp?.leader9MailImage
    }
  ].filter(l => l.name);

  return (
    <>
      {/* Leadership Hero */}
      <section className="relative h-[400px] md:h-[520px] bg-[#11253e] overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback
              src={heroData?.heroS1ImageUrl || heroData?.heroS1Image?.node?.sourceUrl || "https://images.unsplash.com/photo-1700809888987-cf2b29ecbd2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBsZWFkZXJzaGlwJTIwdGVhbSUyMG9mZmljZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzE4OTkwMjF8MA&ixlib=rb-4.1.0&q=80&w=1080"}
              alt="Nabhira Leadership"
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
                <span className="text-[#f99d1c]">Leadership</span>
              </nav>
              
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
              {renderHeroTitle(
                heroData?.heroS1Title?.includes('|') ? 
                heroData?.heroS1Title.replace('|', '^').replace('|', '\n^') :
                heroData?.heroS1Title || (
                  <>The <span className="text-[#f99d1c]">Visionaries</span> <br />Behind the Precision</>
                )
              )}
            </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-12 mb-8 md:mb-12">
                <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm">
                  {heroData?.heroS1Desc || "Guided by a commitment to excellence and architectural integrity, our leadership team orchestrates digital evolution for the world's most ambitious enterprises."}
                </p>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* Leadership Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {leaders.map((leader, i) => (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="aspect-[3/4] overflow-hidden mb-8 relative rounded-sm">
                    <ImageWithFallback
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <div className="absolute bottom-6 left-6 flex space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <Link href={leader.linkedinUrl || "#"} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#f99d1c]">
                        {renderDynamicIcon(leader.linkedinIconType, leader.linkedinLucide, leader.linkedinImage, 20)}
                      </Link>
                      <Link href={leader.mailUrl ? (leader.mailUrl.startsWith("mailto:") ? leader.mailUrl : `mailto:${leader.mailUrl}`) : "#"} className="text-white hover:text-[#f99d1c]">
                        {renderDynamicIcon(leader.mailIconType, leader.mailLucide, leader.mailImage, 20)}
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-[1px] bg-[#f99d1c]"></div>
                      <span className="text-[#f99d1c] font-bold tracking-[0.2em] text-[10px] uppercase">{leader.role}</span>
                    </div>
                    <h3 className="text-[#11253e] text-2xl font-bold tracking-tight">{leader.name}</h3>
                    <p className="text-[#11253e] font-light text-sm leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Board & Advisors */}
        <section className="py-24 bg-[#f8f9fa] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 text-center">
            <h2 className="text-[#11253e] text-3xl font-light mb-12 tracking-tight">
              {lp?.advisorsTitle || (
                <>Governed by <span className="font-bold">Integrity</span></>
              )}
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-[#11253e] font-light leading-relaxed">
                {lp?.advisorsDescription || "Nabhira is advised by a globally diverse board of industry veterans who bring decades of experience from the world's leading technology and consulting firms, ensuring our strategic direction remains at the absolute forefront of digital innovation."}
              </p>
            </div>
          </div>
        </section>

        <LimitlessTogether />
    </>
  );
}
