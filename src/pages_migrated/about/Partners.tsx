"use client";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { LimitlessTogether } from "../../components/Footer";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Handshake, Globe, Zap, Shield } from "lucide-react";
import { renderHeroTitle, renderDynamicIcon, formatQuotesToBold } from "../../lib/utils";
import awsLogo from "../../assets/ea968b74fff705800a15a9dcb40b38e7a1dafe03.png";
import azureLogo from "../../assets/acad6f6c0c4fe301453542c28672d7b86bd38c70.png";
import gcpLogo from "../../assets/d1262fcb47dec58df7ef32995607ef721a7ad5fb.png";
import serviceNowLogo from "../../assets/7ad3e2b8e0d3a0223019a17cc80a66c38aa61012.png";
import salesforceLogo from "../../assets/b13c4c100e4cb0ee511f80c66e134500635067e2.png";
import zohoLogo from "../../assets/a6fec1352116809105f3fa70afd94fcb58e73b87.png";
import oracleLogo from "../../assets/28c3e17412501b71ed55305c831d4873b30e8129.png";
import oracleLogoRed from "../../assets/9fcacc9a598db3516da218cb0e4e6c23822c9077.png";
import awsLogoNew from "../../assets/e8db84a0f02155e9712916e3b3f246e97af59ea6.png";
import azureLogoNew from "../../assets/6815eb4c7e3fdf7615e2d88a4bc90f9d4f5f65e8.png";
import serviceNowLogoNew from "../../assets/479c5e7ee7cc184f2a8f2f72295d6fc29ff8cf16.png";
import serviceNowLogoText from "../../assets/80225d6957c2683205c179076212d35a3bc670de.png";
import oracleSvgPaths from "../../imports/svg-qvm2dmjxvx";
import awsSvgPaths from "../../imports/svg-6r1cut85br";
import ZohoLogo from "../../imports/ZohoLogo";
import MicrosoftAzureLogo from "../../imports/MicrosoftAzureLogo";
import Group from "../../imports/Group";
const ibmLogo = "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg";

// Inline Oracle SVG logo (from Figma import)
function OracleSvgLogo({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 231.075 30.0345"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path d={oracleSvgPaths.p1eaaa600} fill="#E43118" />
    </svg>
  );
}

// Inline AWS SVG logo (from Figma import)
function AwsSvgLogo({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 300.671 179.8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path d={awsSvgPaths.p1387fa00} fill="white" />
      <path clipRule="evenodd" d={awsSvgPaths.p1c293b80} fill="#FF9900" fillRule="evenodd" />
      <path clipRule="evenodd" d={awsSvgPaths.p2d627700} fill="#FF9900" fillRule="evenodd" />
    </svg>
  );
}

// ACF select fields can return an array (["image"]) or a plain string ("image").
// This helper always gives back a plain string.
const normalizeAcfValue = (val: any): string => {
  if (Array.isArray(val)) return val[0] ?? '';
  return val ?? '';
};

const AnyIcon = ({ type, lucide, image, className, size = 32 }: { type: any, lucide?: string, image?: string, className?: string, size?: number }) => {
  return (
    <div className={className}>
      {renderDynamicIcon(normalizeAcfValue(type), lucide || 'Globe', image, size)}
    </div>
  );
};


export default function Partners({ wordpressData }: { wordpressData?: any }) {
  const gs = wordpressData?.globalSettings;
  const heroData = gs?.heroSlides;
  const ppf = wordpressData?.partnersPageFields;


  useEffect(() => {
    document.title = "Partners Ecosystem | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const partnerTypes = [
    {
      type: normalizeAcfValue(ppf?.partner_ev_1IconType) || 'lucide',
      lucide: ppf?.partner_ev_1Lucide || "Globe",
      image: ppf?.partner_ev_1Image?.node?.sourceUrl,
      title: formatQuotesToBold(ppf?.partner_ev_1_title || "Hyperscalers"),
      desc: formatQuotesToBold(ppf?.partner_ev_1_desc || "Strategic alliances with leading cloud providers to deliver scalable, global-ready infrastructure.")
    },
    {
      type: normalizeAcfValue(ppf?.partner_ev_2IconType) || 'lucide',
      lucide: ppf?.partner_ev_2Lucide || "Zap",
      image: ppf?.partner_ev_2Image?.node?.sourceUrl,
      title: formatQuotesToBold(ppf?.partner_ev_2_title || "ISV Partners"),
      desc: formatQuotesToBold(ppf?.partner_ev_2_desc || "Collaboration with specialized software vendors to integrate best-of-breed solutions into our architectures.")
    },
    {
      type: normalizeAcfValue(ppf?.partner_ev_3IconType) || 'lucide',
      lucide: ppf?.partner_ev_3Lucide || "Shield",
      image: ppf?.partner_ev_3Image?.node?.sourceUrl,
      title: formatQuotesToBold(ppf?.partner_ev_3_title || "Compliance & Security"),
      desc: formatQuotesToBold(ppf?.partner_ev_3_desc || "Tier-1 security partnerships ensuring sovereign data residency and enterprise-grade governance.")
    },
    {
      type: normalizeAcfValue(ppf?.partner_ev_4IconType) || 'lucide',
      lucide: ppf?.partner_ev_4Lucide || "Handshake",
      image: ppf?.partner_ev_4Image?.node?.sourceUrl,
      title: formatQuotesToBold(ppf?.partner_ev_4_title || "Niche Consultants"),
      desc: formatQuotesToBold(ppf?.partner_ev_4_desc || "Specialized knowledge partners that augment our deep engineering with industry-specific domain expertise.")
    }
  ];

  const partnerLogos = [
    { name: ppf?.partner_ta_1_name || "Amazon Web Services", logo: ppf?.partner_ta_1_logo?.node?.sourceUrl || awsLogo.src, hoverColor: "rgba(255,153,0,0.15)", textColor: "group-hover:text-[#FF9900]" },
    { name: ppf?.partner_ta_2_name || "Microsoft Azure", logo: ppf?.partner_ta_2_logo?.node?.sourceUrl || azureLogo.src, hoverColor: "rgba(0,120,212,0.15)", textColor: "group-hover:text-[#0078D4]" },
    { name: ppf?.partner_ta_3_name || "Google Cloud Platform", logo: ppf?.partner_ta_3_logo?.node?.sourceUrl || gcpLogo.src, hoverColor: "rgba(66,133,244,0.15)", textColor: "group-hover:text-[#4285F4]" },
    { name: ppf?.partner_ta_4_name || "ServiceNow", logo: ppf?.partner_ta_4_logo?.node?.sourceUrl || serviceNowLogo.src, hoverColor: "rgba(98,216,78,0.2)", textColor: "group-hover:text-[#62D84E]" },
    { name: ppf?.partner_ta_5_name || "Salesforce", logo: ppf?.partner_ta_5_logo?.node?.sourceUrl || salesforceLogo.src, hoverColor: "rgba(0,161,224,0.15)", textColor: "group-hover:text-[#00A1E0]" },
    { name: ppf?.partner_ta_6_name || "Zoho", logo: ppf?.partner_ta_6_logo?.node?.sourceUrl || zohoLogo.src, hoverColor: "rgba(228,37,39,0.15)", textColor: "group-hover:text-[#E42527]" },
    { name: ppf?.partner_ta_7_name || "ERPNext", logo: ppf?.partner_ta_7_logo?.node?.sourceUrl || "https://erpnext.com/files/erpnext-logo.svg", hoverColor: "rgba(0,137,255,0.15)", textColor: "group-hover:text-[#0089FF]", colSpan: "col-span-2 sm:col-span-1" }
  ];

  const stats = [
    { value: ppf?.partner_cta_s1_val || "10+", label: ppf?.partner_cta_s1_label || "Global Partners" },
    { value: ppf?.partner_cta_s2_val || "5+", label: ppf?.partner_cta_s2_label || "Countries" },
    { value: ppf?.partner_cta_s3_val || "30+", label: ppf?.partner_cta_s3_label || "Projects Delivered" },
  ];

  const orbitalNodes = [
    { label: ppf?.partner_cta_o1_label || "AWS", color: ppf?.partner_cta_o1_color || "#FF9900", angle: 0, r: 130 },
    { label: ppf?.partner_cta_o2_label || "Azure", color: ppf?.partner_cta_o2_color || "#0078D4", angle: 51, r: 130 },
    { label: ppf?.partner_cta_o3_label || "GCP", color: ppf?.partner_cta_o3_color || "#4285F4", angle: 103, r: 130 },
    { label: ppf?.partner_cta_o4_label || "SFDC", color: ppf?.partner_cta_o4_color || "#00A1E0", angle: 154, r: 130 },
    { label: ppf?.partner_cta_o5_label || "SN", color: ppf?.partner_cta_o5_color || "#62D84E", angle: 205, r: 130 },
    { label: ppf?.partner_cta_o6_label || "Zoho", color: ppf?.partner_cta_o6_color || "#E42527", angle: 257, r: 130 },
    { label: ppf?.partner_cta_o7_label || "ERP", color: ppf?.partner_cta_o7_color || "#0089FF", angle: 308, r: 130 },
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
                {renderHeroTitle(heroData?.heroS1Title || (
                  <>
                    Orchestrating <br />Global <span className="text-[#f99d1c]">Synergy</span>
                  </>
                ))}
              </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-12 mb-8 md:mb-12">
                <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm">
                  {formatQuotesToBold(heroData?.heroS1Desc || "Our ecosystem is built on the principle of collaborative excellence. We partner with the world's leading technology pioneers to deliver integrated, future-proof solutions.")}
                </p>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* Partner Logos Section */}
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6 sm:px-12">
            <div className="text-center mb-14">
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#f99d1c] mb-3">{formatQuotesToBold(ppf?.partner_ta_subtitle || "Trusted Alliances")}</p>
              <h2 className="text-[#11253e] text-3xl md:text-4xl font-light mb-4 tracking-tight">
                {renderHeroTitle(ppf?.partner_ta_title || `Our |Technology Partners|`, "text-[#11253e]")}
              </h2>
              <div className="w-16 h-1 bg-[#f99d1c] mx-auto mb-6"></div>
              <p className="max-w-xl mx-auto text-[#11253e] font-light text-sm leading-relaxed" style={{ opacity: 0.65 }}>
                {formatQuotesToBold(ppf?.partner_ta_desc || "Strategic alliances with world-leading technology platforms to deliver integrated, future-proof solutions.")}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">

              {partnerLogos.map((brand, i) => (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + (i * 0.05) }} viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: `0 16px 40px ${brand.hoverColor}` }}
                  className={`bg-white border border-gray-150 rounded-lg flex flex-col items-center justify-center py-5 px-5 gap-3 transition-all duration-300 group cursor-pointer ${brand.colSpan || ''}`}
                  style={{ minHeight: 110 }}
                >
                  <div className="flex items-center justify-center" style={{ height: 48 }}>
                    <ImageWithFallback src={brand.logo} alt={brand.name} className="max-h-[44px] max-w-[130px] object-contain" />
                  </div>
                  <span className={`text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 ${brand.textColor} transition-colors text-center`}>{brand.name}</span>
                </Motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* Ecosystem Value Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="text-center mb-20">
              <h2 className="text-[#11253e] text-3xl md:text-4xl font-light mb-4 tracking-tight">
                {renderHeroTitle(ppf?.partner_ev_title || `An Ecosystem of |Innovation|`, "text-[#11253e]")}
              </h2>
              <div className="w-20 h-1 bg-[#f99d1c] mx-auto mb-8"></div>
              <p className="max-w-2xl mx-auto text-[#11253e] font-light leading-relaxed">
                {formatQuotesToBold(ppf?.partner_ev_desc || "We don't just work with partners; we co-create value. Our alliances are deep, technical, and focused on delivering architectural superiority.")}
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
                    <AnyIcon type={type.type} lucide={type.lucide} image={type.image} className="text-[#f99d1c]" size={32} />
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
                  <span className="text-[#f99d1c] text-[10px] font-bold tracking-[0.3em] uppercase">{formatQuotesToBold(ppf?.partner_cta_subtitle || "Partner With Us")}</span>
                </div>

                <h2 className="text-white text-4xl md:text-5xl font-light leading-tight tracking-tight">
                  {renderHeroTitle(ppf?.partner_cta_title || `Ready to architect<br />\n|together|?`)}
                </h2>

                <p className="text-white/70 font-light leading-relaxed max-w-md">
                  {formatQuotesToBold(ppf?.partner_cta_desc || "We are always looking for partners who share our commitment to precision engineering and digital excellence. Join our ecosystem and help us shape the future of enterprise technology.")}
                </p>

                {/* Stats row */}
                <div className="flex gap-10 pt-2">
                  {stats.map((stat, i) => (
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
                    {(() => { const ct = normalizeAcfValue(ppf?.partner_cta_centerIconType); return (ct === 'image' || ct === 'Upload Image') && ppf?.partner_cta_centerImage?.node?.sourceUrl; })() ? (
                      <img src={ppf.partner_cta_centerImage.node.sourceUrl} className="w-11 h-11 object-contain" alt="" />
                    ) : (
                      <AnyIcon type="lucide" lucide={ppf?.partner_cta_centerLucide || "Handshake"} className="text-white" size={44} />
                    )}
                    <span className="text-white text-[9px] font-bold tracking-widest uppercase mt-1">
                      {ppf?.partner_cta_center_label || "Partner"}
                    </span>
                  </div>

                  {/* Orbiting partner nodes */}
                  {orbitalNodes.map((node, i) => {
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
                        <div className="p-2 flex items-center justify-center w-full h-full">
                          {node.label === "Oracle" ? (
                            <OracleSvgLogo style={{ width: "100%", height: "auto", filter: "brightness(1.5)" }} />
                          ) : node.label === "AWS" ? (
                            <AwsSvgLogo style={{ width: "100%", height: "auto" }} />
                          ) : node.label === "SFDC" ? (
                            <div style={{ width: "100%", height: "100%", position: "relative" }}>
                              <Group />
                            </div>
                          ) : node.label === "SN" ? (
                            <Image src={serviceNowLogoNew} alt="ServiceNow" className="max-w-full max-h-full object-contain" />
                          ) : node.label === "Zoho" ? (
                            <div style={{ width: "100%", height: "100%", position: "relative" }}>
                              <ZohoLogo />
                            </div>
                          ) : node.label === "Azure" ? (
                            <div style={{ width: "100%", height: "100%", position: "relative" }}>
                              <MicrosoftAzureLogo />
                            </div>
                          ) : (
<div className="relative w-[120px] h-[60px]">
  <Image
    src={node.logo}
    alt={node.label}
    fill
    className="object-contain filter grayscale hover:grayscale-0 transition-all brightness-[1.5] hover:brightness-100"
  />
</div>                          )}
                        </div>
                      </Motion.div>
                    );
                  })}

                  {/* Connecting lines from center to each node */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300" style={{ pointerEvents: "none" }}>
                    {orbitalNodes.map((node, i) => {
                      const rad = (node.angle * Math.PI) / 180;
                      const x2 = 150 + 104 * Math.cos(rad);
                      const y2 = 150 + 104 * Math.sin(rad);
                      return (
                        <line key={i}
                          x1="150" y1="150" x2={x2} y2={y2}
                          stroke={node.color} strokeWidth="0.8" strokeOpacity="0.35"
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