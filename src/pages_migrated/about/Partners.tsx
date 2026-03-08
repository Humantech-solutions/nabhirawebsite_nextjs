"use client";

import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import Link from "next/link";
import { LimitlessTogether } from "../../components/Footer";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Handshake, Globe, Zap, Shield } from "lucide-react";

import awsLogo from "../../assets/ea968b74fff705800a15a9dcb40b38e7a1dafe03.png";
import azureLogo from "../../assets/acad6f6c0c4fe301453542c28672d7b86bd38c70.png";
import gcpLogo from "../../assets/d1262fcb47dec58df7ef32995607ef721a7ad5fb.png";
import serviceNowLogo from "../../assets/7ad3e2b8e0d3a0223019a17cc80a66c38aa61012.png";
import salesforceLogo from "../../assets/b13c4c100e4cb0ee511f80c66e134500635067e2.png";
import zohoLogo from "../../assets/a6fec1352116809105f3fa70afd94fcb58e73b87.png";
import erpnextLogo from "../../assets/dd535cd89e27dabcb4fee78b3ad285a386d91bee.png";


export default function Partners({ wordpressData }: { wordpressData?: any }) {
  const gs = wordpressData?.globalSettings;
  const heroData = gs?.heroSlides;


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
              src={heroData?.heroS1ImageUrl || heroData?.heroS1Image?.node?.sourceUrl || "https://images.unsplash.com/photo-1758518731814-77fa04b3c67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwYXJ0bmVyc2hpcCUyMGhhbmRzaGFrZSUyMGdsYXNzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcxODk5MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080"}
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
                Orchestrating <br /><span className="text-[#f99d1c]">Global</span> Synergy
              </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-12 mb-8 md:mb-12">
                <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm">
                  {heroData?.heroS1Desc || "Our ecosystem is built on the principle of collaborative excellence. We partner with the world's leading technology pioneers to deliver integrated, future-proof solutions."}
                </p>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* Partner Logos Section */}
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6 sm:px-12">
            <div className="text-center mb-14">
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#f99d1c] mb-3">Trusted Alliances</p>
              <h2 className="text-[#11253e] text-3xl md:text-4xl font-light mb-4 tracking-tight">
                Our <span className="font-bold">Technology Partners</span>
              </h2>
              <div className="w-16 h-1 bg-[#f99d1c] mx-auto mb-6"></div>
              <p className="max-w-xl mx-auto text-[#11253e] font-light text-sm leading-relaxed" style={{ opacity: 0.65 }}>
                Strategic alliances with world-leading technology platforms to deliver integrated, future-proof solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">

              {/* AWS */}
              <Motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }} viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(255,153,0,0.15)" }}
                className="bg-white border border-gray-150 rounded-lg flex flex-col items-center justify-center py-5 px-5 gap-3 transition-all duration-300 group cursor-pointer"
                style={{ minHeight: 110 }}
              >
                <div className="flex items-center justify-center" style={{ height: 48 }}>
                  <img src={awsLogo.src} alt="Amazon Web Services" style={{ maxHeight: 44, maxWidth: 100, objectFit: "contain" }} />
                </div>
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 group-hover:text-[#FF9900] transition-colors text-center">Amazon Web Services</span>
              </Motion.div>

              {/* Azure */}
              <Motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.10 }} viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(0,120,212,0.15)" }}
                className="bg-white border border-gray-150 rounded-lg flex flex-col items-center justify-center py-5 px-5 gap-3 transition-all duration-300 group cursor-pointer"
                style={{ minHeight: 110 }}
              >
                <div className="flex items-center justify-center" style={{ height: 48 }}>
                  <img src={azureLogo.src} alt="Microsoft Azure" style={{ maxHeight: 44, maxWidth: 110, objectFit: "contain" }} />
                </div>
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 group-hover:text-[#0078D4] transition-colors text-center">Microsoft Azure</span>
              </Motion.div>

              {/* Google Cloud */}
              <Motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }} viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(66,133,244,0.15)" }}
                className="bg-white border border-gray-150 rounded-lg flex flex-col items-center justify-center py-5 px-5 gap-3 transition-all duration-300 group cursor-pointer"
                style={{ minHeight: 110 }}
              >
                <div className="flex items-center justify-center" style={{ height: 48 }}>
                  <img src={gcpLogo.src} alt="Google Cloud" style={{ maxHeight: 44, maxWidth: 130, objectFit: "contain" }} />
                </div>
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 group-hover:text-[#4285F4] transition-colors text-center">Google Cloud Platform</span>
              </Motion.div>

              {/* ServiceNow */}
              <Motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.20 }} viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(98,216,78,0.2)" }}
                className="bg-white border border-gray-150 rounded-lg flex flex-col items-center justify-center py-5 px-5 gap-3 transition-all duration-300 group cursor-pointer"
                style={{ minHeight: 110 }}
              >
                <div className="flex items-center justify-center" style={{ height: 48 }}>
                  <img src={serviceNowLogo.src} alt="ServiceNow" style={{ maxHeight: 40, maxWidth: 130, objectFit: "contain" }} />
                </div>
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 group-hover:text-[#62D84E] transition-colors text-center">ServiceNow</span>
              </Motion.div>

              {/* Salesforce */}
              <Motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }} viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(0,161,224,0.15)" }}
                className="bg-white border border-gray-150 rounded-lg flex flex-col items-center justify-center py-5 px-5 gap-3 transition-all duration-300 group cursor-pointer"
                style={{ minHeight: 110 }}
              >
                <div className="flex items-center justify-center" style={{ height: 48 }}>
                  <img src={salesforceLogo.src} alt="Salesforce" style={{ maxHeight: 48, maxWidth: 130, objectFit: "contain" }} />
                </div>
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 group-hover:text-[#00A1E0] transition-colors text-center">Salesforce</span>
              </Motion.div>

              {/* Zoho */}
              <Motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.30 }} viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(228,37,39,0.15)" }}
                className="bg-white border border-gray-150 rounded-lg flex flex-col items-center justify-center py-5 px-5 gap-3 transition-all duration-300 group cursor-pointer"
                style={{ minHeight: 110 }}
              >
                <div className="flex items-center justify-center" style={{ height: 48 }}>
                  <img src={zohoLogo.src} alt="Zoho" style={{ maxHeight: 44, maxWidth: 110, objectFit: "contain" }} />
                </div>
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 group-hover:text-[#E42527] transition-colors text-center">Zoho</span>
              </Motion.div>

              {/* ERPNext */}
              <Motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }} viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(0,137,255,0.15)" }}
                className="bg-white border border-gray-150 rounded-lg flex flex-col items-center justify-center py-5 px-5 gap-3 transition-all duration-300 group cursor-pointer col-span-2 sm:col-span-1"
                style={{ minHeight: 110 }}
              >
                <div className="flex items-center justify-center" style={{ height: 48 }}>
                  <img src={erpnextLogo.src} alt="ERPNext" style={{ maxHeight: 36, maxWidth: 130, objectFit: "contain" }} />
                </div>
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 group-hover:text-[#0089FF] transition-colors text-center">ERPNext</span>
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
                  <h4 className="text-[#11253e] font-bold mb-4 tracking-tight uppercase text-[12px]">{type.title}</h4>
                  <p className="text-[#11253e] text-sm font-light leading-relaxed">{type.desc}</p>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden bg-[#11253e]">
          {/* Animated gradient orbs */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Large orange orb top-right */}
            <div style={{
              position: "absolute", top: "-120px", right: "-100px",
              width: 520, height: 520, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(249,157,28,0.22) 0%, transparent 70%)"
            }} />
            {/* Teal accent orb bottom-left */}
            <div style={{
              position: "absolute", bottom: "-100px", left: "-80px",
              width: 400, height: 400, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(249,157,28,0.10) 0%, transparent 70%)"
            }} />
            {/* Center glow */}
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
              width: 700, height: 300, borderRadius: "50%",
              background: "radial-gradient(ellipse, rgba(249,157,28,0.07) 0%, transparent 70%)"
            }} />
            {/* Dot grid overlay */}
            <div className="absolute inset-0" style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "36px 36px"
            }} />
            {/* Top horizontal line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f99d1c]/30 to-transparent" />
            {/* Bottom horizontal line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f99d1c]/20 to-transparent" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left: Text content */}
              <Motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col gap-8"
              >
                {/* Orange accent label */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-[#f99d1c]" />
                  <span className="text-[#f99d1c] text-[10px] font-bold tracking-[0.3em] uppercase">Partner With Us</span>
                </div>

                <h2 className="text-white text-4xl md:text-5xl font-light leading-tight tracking-tight">
                  Ready to architect<br />
                  <span className="text-[#f99d1c] font-bold">together</span>?
                </h2>

                <p className="text-white/70 font-light leading-relaxed max-w-md">
                  We are always looking for partners who share our commitment to precision engineering and digital excellence. Join our ecosystem and help us shape the future of enterprise technology.
                </p>

                {/* Stats row */}
                <div className="flex gap-10 pt-2">
                  {[
                    { value: "10+", label: "Global Partners" },
                    { value: "5+", label: "Countries" },
                    { value: "30+", label: "Projects Delivered" },
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[#f99d1c] text-2xl font-bold">{stat.value}</span>
                      <span className="text-white/50 text-[11px] tracking-widest uppercase font-medium mt-0.5">{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <Motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-[#f99d1c] text-white px-9 py-4 font-bold text-[11px] tracking-[0.2em] uppercase rounded-sm hover:bg-[#e08b1a] transition-colors shadow-lg"
                    style={{ boxShadow: "0 8px 32px rgba(249,157,28,0.35)" }}
                  >
                    Become a Partner
                  </Motion.button>
                  <Motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="border border-white/25 text-white px-9 py-4 font-bold text-[11px] tracking-[0.2em] uppercase rounded-sm hover:border-[#f99d1c] hover:text-[#f99d1c] transition-colors"
                  >
                    Contact Us
                  </Motion.button>
                </div>
              </Motion.div>

              {/* Right: Visual graphic */}
              <Motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-center"
                style={{ minHeight: 340 }}
              >
                {/* Central hub circle */}
                <div className="relative flex items-center justify-center" style={{ width: 300, height: 300 }}>
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border border-[#f99d1c]/15" />
                  {/* Middle ring */}
                  <div className="absolute rounded-full border border-[#f99d1c]/25" style={{ inset: 28 }} />
                  {/* Inner ring */}
                  <div className="absolute rounded-full border border-[#f99d1c]/40" style={{ inset: 64 }} />

                  {/* Center badge */}
                  <div className="relative z-10 flex flex-col items-center justify-center rounded-full bg-[#f99d1c] shadow-2xl" 
                    style={{ width: 120, height: 120, boxShadow: "0 0 60px rgba(249,157,28,0.5)" }}>
                    {/* Handshake icon */}
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12l-4-2.5V5l4 2.5M9 12l3 1.5M9 12V19m3-5.5L15 12M12 13.5V19m0-5.5l3-1.5M15 12l4-2.5V5l-4 2.5M15 12V19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 7.5L12 9l3-1.5M9 7.5L6 5M12 9l3-1.5M6 5l3-2.5 3 2.5 3-2.5 3 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-white text-[9px] font-bold tracking-widest uppercase mt-1">Partner</span>
                  </div>

                  {/* Orbiting partner nodes */}
                  {[
                    { label: "AWS", color: "#FF9900", angle: 0, r: 130 },
                    { label: "Azure", color: "#0078D4", angle: 51, r: 130 },
                    { label: "GCP", color: "#4285F4", angle: 103, r: 130 },
                    { label: "SFDC", color: "#00A1E0", angle: 154, r: 130 },
                    { label: "SN", color: "#62D84E", angle: 205, r: 130 },
                    { label: "Zoho", color: "#E42527", angle: 257, r: 130 },
                    { label: "ERP", color: "#0089FF", angle: 308, r: 130 },
                  ].map((node, i) => {
                    const rad = (node.angle * Math.PI) / 180;
                    const x = 150 + node.r * Math.cos(rad) - 26;
                    const y = 150 + node.r * Math.sin(rad) - 26;
                    return (
                      <Motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.08 }}
                        viewport={{ once: true }}
                        style={{
                          position: "absolute",
                          left: x, top: y,
                          width: 52, height: 52,
                          borderRadius: "50%",
                          background: "#0d1e30",
                          border: `2px solid ${node.color}40`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          boxShadow: `0 0 16px ${node.color}30`
                        }}
                      >
                        <span style={{ color: node.color, fontWeight: 800, fontSize: 10, letterSpacing: "0.05em", textAlign: "center", lineHeight: 1.1 }}>{node.label}</span>
                      </Motion.div>
                    );
                  })}

                  {/* Connecting lines from center to each node */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300" style={{ pointerEvents: "none" }}>
                    {[0, 51, 103, 154, 205, 257, 308].map((angle, i) => {
                      const rad = (angle * Math.PI) / 180;
                      const x2 = 150 + 104 * Math.cos(rad);
                      const y2 = 150 + 104 * Math.sin(rad);
                      const colors = ["#FF9900","#0078D4","#4285F4","#00A1E0","#62D84E","#E42527","#0089FF"];
                      return (
                        <line key={i}
                          x1="150" y1="150" x2={x2} y2={y2}
                          stroke={colors[i]} strokeWidth="0.8" strokeOpacity="0.35"
                          strokeDasharray="4 3"
                        />
                      );
                    })}
                  </svg>
                </div>
              </Motion.div>

            </div>
          </div>
        </section>

        <LimitlessTogether data={wordpressData?.globalSettings?.limitlessTogether} />
    </>
  );
}
