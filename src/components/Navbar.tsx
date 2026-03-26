"use client";

import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from '../assets/logo.png';

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuData: Record<string, any> = {
    "SERVICES": {
      type: "mega",
      columns: [
        {
          title: "CLOUD TRANSFORMATION",
          items: [
            "Cloud Advisory",
            "Cloud Migration",
            "Cloud Modernization",
            "Cloud-native Development",
            "Cloud Security & Governance",
            "Cloud Financial Management"
          ]
        },
        {
          title: "DATA FOUNDATION",
          items: [
            "Data Engineering",
            "Data Analytics",
            "Data Governance"
          ]
        },
        {
          title: "AI ACCELERATION",
          items: [
            "AI Engineering",
            "Agentic AI",
            "Intelligent Automation"
          ]
        }
      ]
    },
    "SOLUTIONS": {
      type: "simple",
      items: [
        "AI Powered Point of Sales App",
        "AI based LMS system",
        "Policy Engine System",
        "Cloud Infra Deployment and Monitoring",
        "WorkbookNow ERP",
        "HRMS and Payroll Solutions",
      ]
    },
    "INDUSTRIES": {
      type: "simple",
      items: [
        "Banking & Financial Services",
        "Retail & Consumer Goods",
        "Manufacturing & Automotive",
        "Healthcare & Pharma",
        "Government & PSUs",
        "Media & Entertainment"
      ]
    },
    "RESOURCES": {
      type: "simple",
      items: ["Blogs", "Case Studies", "In the News", "Events"]
    },
    "ABOUT US": {
      type: "simple",
      items: ["About Nabhira", "Leadership", "Partners Ecosystem", "Our Clients", "Awards"]
    }
  };

  const navLinks = [
    { label: "ABOUT US", key: "ABOUT US" },
    { label: "SERVICES", key: "SERVICES" },
    { label: "SOLUTIONS", key: "SOLUTIONS" },
    { label: "INDUSTRIES", key: "INDUSTRIES" },
    { label: "RESOURCES", key: "RESOURCES" },
    { label: "CAREERS", key: "CAREERS" },
    { label: "CONTACT US", key: "CONTACT US" }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'backdrop-blur-xl border-gray-200 shadow-lg' 
          : 'bg-white border-gray-100 shadow-sm'
      }`}
      style={scrolled ? { backgroundColor: 'color-mix(in oklab, var(--color-white) 90%, transparent)' } : {}}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          <div className="flex items-center shrink-0">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Image src={logo} alt="Nabhira Logo" className={`transition-all duration-300 ${scrolled ? 'h-6 sm:h-7' : 'h-8 sm:h-9'} w-auto`} />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => {
              const isDirectLink = !menuData[link.key];
// Direct routes refactored to explicit checks below

              const LabelContent = (
                <div className="flex items-center space-x-1">
                  <span className={`text-[12px] font-bold tracking-normal transition-colors ${activeMenu === link.key ? 'text-[#f99d1c]' : 'text-[#11253e] hover:text-[#f99d1c]'}`}>
                    {link.label}
                  </span>
                  {menuData[link.key] && (
                    <ChevronDown size={12} className={`transition-transform duration-200 text-[#11253e] group-hover:text-[#f99d1c] ${activeMenu === link.key ? 'rotate-180 text-[#f99d1c]' : ''}`} />
                  )}
                </div>
              );

              return (
                <div 
                  key={link.key}
                  className={`relative transition-all duration-300 flex items-center group px-4 ${scrolled ? 'h-16' : 'h-20'}`}
                  onMouseEnter={() => setActiveMenu(link.key)}
                >
                  <div className="relative cursor-pointer py-2">
                    {isDirectLink ? (
                      <Link href={link.key === "CONTACT US" ? "/contact?category=Contact" : (link.key === "CAREERS" ? "/careers" : "#")}>
                        {LabelContent}
                      </Link>
                    ) : (
                      LabelContent
                    )}
                    {/* Active/Hover underline */}
                    <Motion.div 
                      initial={false}
                      animate={{ 
                        width: activeMenu === link.key ? '100%' : '0%',
                        opacity: activeMenu === link.key ? 1 : 0 
                      }}
                      className={`absolute left-0 h-1 bg-[#f99d1c] transition-all duration-300 ${scrolled ? '-bottom-[22px]' : '-bottom-[30px]'}`}
                    />
                  </div>

                  <AnimatePresence>
                    {activeMenu === link.key && menuData[link.key] && (
                      <Motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={`absolute ${scrolled ? 'top-16' : 'top-20'} ${
                          link.key === 'SERVICES' || menuData[link.key]?.type === 'mega' 
                            ? 'fixed left-4 right-4 md:left-auto md:right-auto md:w-[594px] lg:w-[726px] md:left-1/2 md:-translate-x-1/2' 
                            : link.key === 'RESOURCES' ? 'left-0 w-44' : (link.key === 'ABOUT US' || link.key === 'INDUSTRIES') ? 'left-0 w-64' : link.key === 'SOLUTIONS' ? 'left-0 w-80' : 'left-0 w-72'
                        } backdrop-blur-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] rounded-b-2xl overflow-hidden pt-10 pb-10 px-6 z-50 pointer-events-auto border-t border-gray-100/50`}
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                      >
                      {/* Top Accent Line */}
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#f99d1c] to-[#f99d1c]/30"></div>
                      
                      {menuData[link.key].type === 'mega' ? (
                        <div className={`grid grid-cols-3 ${link.key === 'SERVICES' ? 'gap-6' : 'gap-10'}`}>
                          {menuData[link.key].columns.map((col: any, i: number) => (
                            <div key={i} className="flex flex-col space-y-6">
                              <div className="flex items-center space-x-2.5 group/title">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#f99d1c] group-hover/title:scale-125 transition-transform" />
                                {(() => {
                                  const categoryRoutes: Record<string, string> = {
                                    "CLOUD TRANSFORMATION": "/solutions/cloud-transformation",
                                    "DATA & ANALYTICS": "/solutions/data-analytics",
                                    "ARTIFICIAL INTELLIGENCE": "/solutions/artificial-intelligence"
                                  };
                                  return (
                                    <Link href={categoryRoutes[col.title] || "#"} 
                                      className="text-[12px] font-bold text-[#11253e] tracking-[0.1em] uppercase hover:text-[#f99d1c] transition-colors"
                                      onClick={() => setActiveMenu(null)}
                                    >
                                      {col.title}
                                    </Link>
                                  );
                                })()}
                              </div>
                              <ul className="space-y-3">
                                {col.items.map((item: string, j: number) => {
                                  const solutionRoutes: Record<string, string> = {
                                    "Cloud Advisory": "/solutions/cloud-advisory",
                                    "Cloud Migration": "/solutions/cloud-migration",
                                    "Cloud Modernization": "/solutions/cloud-modernization",
                                    "Cloud-native Development": "/solutions/cloud-native-development",
                                    "Cloud Security & Governance": "/solutions/cloud-security-governance",
                                    "Cloud Financial Management": "/solutions/cloud-financial-management",
                                    "Data Engineering": "/solutions/data-engineering",
                                    "Data Analytics": "/solutions/data-analytics-solution",
                                    "Data Foundation": "/solutions/data-foundation",
                                    "Data Governance": "/solutions/data-governance",
                                    "AI Consulting": "/solutions/ai-consulting",
                                    "AI Engineering": "/solutions/ai-engineering",
                                    "Agentic AI": "/solutions/agentic-ai",
                                    "Intelligent Automation": "/solutions/intelligent-automation"
                                  };

                                  const LinkWrapper = ({ children }: { children: React.ReactNode }) => {
                                    if (solutionRoutes[item]) {
                                      return (
                                        <Link href={solutionRoutes[item]} 
                                          className="text-[14px] font-medium text-[#475567] hover:text-[#f99d1c] hover:translate-x-1 transition-all duration-300 flex items-center group/item"
                                          onClick={() => setActiveMenu(null)}
                                        >
                                          {children}
                                        </Link>
                                      );
                                    }
                                    return (
                                      <a href="#" className="text-[14px] font-medium text-[#475567] hover:text-[#f99d1c] hover:translate-x-1 transition-all duration-300 flex items-center group/item">
                                        {children}
                                      </a>
                                    );
                                  };

                                  return (
                                    <li key={j}>
                                      <LinkWrapper>
                                        <span className="w-0 h-[1px] bg-[#f99d1c] mr-0 group-hover/item:w-3 group-hover/item:mr-2 transition-all duration-300"></span>
                                        {item}
                                      </LinkWrapper>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-col space-y-3">
                          {menuData[link.key].items.map((item: string, i: number) => {
                            const routes: Record<string, string> = {
                              "About Nabhira": "/about",
                              "Leadership": "/leadership",
                              "Partners Ecosystem": "/partners",
                              "Our Clients": "/clients",
                              "Awards": "/awards",
                              "AI Powered Point of Sales App": "/solutions/enterprise-pos",
                              "AI based LMS system": "/solutions/ailms",
                              "Policy Engine System": "/solutions/policy-engine",
                              "Cloud Infra Deployment and Monitoring": "/solutions/cloud-infra",
                              "WorkbookNow ERP": "/solutions/erp",
                              "HRMS and Payroll Solutions": "/solutions/hrms",
                              "Banking & Financial Services": "/industries/banking-finance",
                              "Retail & Consumer Goods": "/industries/retail-consumer",
                              "Manufacturing & Automotive": "/industries/manufacturing-automotive",
                              "Healthcare & Pharma": "/industries/healthcare-pharma",
                              "Government & PSUs": "/industries/government-psu",
                              "Media & Entertainment": "/industries/media-entertainment",
                              "Blogs": "/resources/blogs",
                              "Case Studies": "/resources/case-studies",
                              "In the News": "/resources/news",
                              "Events": "/resources/events"
                            };
                            
                            const LinkWrapper = ({ children }: { children: React.ReactNode }) => {
                              if (routes[item]) {
                                return (
                                  <Link href={routes[item]} 
                                    className="text-[14px] font-medium text-[#475567] hover:text-[#f99d1c] hover:translate-x-1 transition-all duration-300 flex items-center group/item whitespace-nowrap"
                                    onClick={() => setActiveMenu(null)}
                                  >
                                    {children}
                                  </Link>
                                );
                              }
                              return (
                                <a href="#" className="text-[14px] font-medium text-[#475567] hover:text-[#f99d1c] hover:translate-x-1 transition-all duration-300 flex items-center group/item whitespace-nowrap">
                                  {children}
                                </a>
                              );
                            };

                            return (
                              <LinkWrapper key={i}>
                                <span className="w-0 h-[1px] bg-[#f99d1c] mr-0 group-hover/item:w-3 group-hover/item:mr-2 transition-all duration-300"></span>
                                {item}
                              </LinkWrapper>
                            );
                          })}
                        </div>
                      )}
                    </Motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#11253e]"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <Motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={`fixed inset-0 ${scrolled ? 'top-16' : 'top-20'} bg-white/95 backdrop-blur-xl z-[60] overflow-y-auto`}
          >
            <div className="px-6 py-10 space-y-8">
              {navLinks.map((link) => {
                const isDirectLink = !menuData[link.key];
// Direct routes refactored to explicit checks below

                return (
                  <div key={link.key} className="border-b border-[#11253e]/5 pb-6">
                    <div 
                      className="flex justify-between items-center group cursor-pointer"
                      onClick={() => {
                        if (isDirectLink && (link.key === "CONTACT US" || link.key === "CAREERS")) {
                          setIsMobileMenuOpen(false);
                        } else {
                          setExpandedMobileMenu(expandedMobileMenu === link.key ? null : link.key);
                        }
                      }}
                    >
                      {isDirectLink ? (
                        <Link 
                          href={link.key === "CONTACT US" ? "/contact?category=Contact" : (link.key === "CAREERS" ? "/careers" : "#")} 
                          className="text-[16px] font-bold tracking-tight text-[#11253e] uppercase"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <span className={`text-[16px] font-bold tracking-tight uppercase transition-colors ${expandedMobileMenu === link.key ? 'text-[#f99d1c]' : 'text-[#11253e]'}`}>
                          {link.label}
                        </span>
                      )}
                      {menuData[link.key] && (
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${expandedMobileMenu === link.key ? 'bg-[#f99d1c]/10 text-[#f99d1c]' : 'bg-gray-50 text-[#11253e]'}`}>
                          <ChevronDown 
                            size={18} 
                            className={`transition-transform duration-300 ${expandedMobileMenu === link.key ? 'rotate-180' : ''}`} 
                          />
                        </div>
                      )}
                    </div>
                  
                  {expandedMobileMenu === link.key && menuData[link.key] && (
                    <Motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="mt-4 pl-4 space-y-6 overflow-hidden"
                    >
                      {menuData[link.key].type === 'mega' ? (
                        menuData[link.key].columns.map((col: any, i: number) => (
                          <div key={i} className="space-y-4">
                            {(() => {
                              const categoryRoutes: Record<string, string> = {
                                "CLOUD TRANSFORMATION": "/solutions/cloud-transformation",
                                "DATA & ANALYTICS": "/solutions/data-analytics",
                                "ARTIFICIAL INTELLIGENCE": "/solutions/artificial-intelligence"
                              };
                              return (
                                <Link href={categoryRoutes[col.title] || "#"} 
                                  className="text-[12px] font-bold text-[#f99d1c] tracking-widest uppercase block"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {col.title}
                                </Link>
                              );
                            })()}
                            <div className="space-y-4 pl-2 border-l border-gray-100">
                              {col.items.map((item: string, j: number) => {
                                const solutionRoutes: Record<string, string> = {
                                  "Cloud Advisory": "/solutions/cloud-advisory",
                                  "Cloud Migration": "/solutions/cloud-migration",
                                  "Cloud Modernization": "/solutions/cloud-modernization",
                                  "Cloud-native Development": "/solutions/cloud-native-development",
                                  "Cloud Security & Governance": "/solutions/cloud-security-governance",
                                  "Cloud Financial Management": "/solutions/cloud-financial-management",
                                  "Data Engineering": "/solutions/data-engineering",
                                  "Data Analytics": "/solutions/data-analytics-solution",
                                  "Data Foundation": "/solutions/data-foundation",
                                  "Data Governance": "/solutions/data-governance",
                                  "AI Consulting": "/solutions/ai-consulting",
                                  "AI Engineering": "/solutions/ai-engineering",
                                  "Agentic AI": "/solutions/agentic-ai",
                                  "Intelligent Automation": "/solutions/intelligent-automation"
                                };

                                if (solutionRoutes[item]) {
                                  return (
                                    <Link 
                                      key={j} 
                                      href={solutionRoutes[item]} 
                                      className="block text-[14px] font-light text-[#475567] hover:text-[#f99d1c] active:text-[#f99d1c]"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {item}
                                    </Link>
                                  );
                                }
                                return (
                                  <a key={j} href="#" className="block text-[14px] font-light text-[#475567] hover:text-[#f99d1c]">
                                    {item}
                                  </a>
                                );
                              })}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="space-y-4 pl-2 border-l border-gray-100">
                          {menuData[link.key].items.map((item: string, i: number) => {
                            const routes: Record<string, string> = {
                              "About Nabhira": "/about",
                              "Leadership": "/leadership",
                              "Partners Ecosystem": "/partners",
                              "Our Clients": "/clients",
                               "Awards": "/awards",
                               "AI Powered Point of Sales App": "/solutions/enterprise-pos",
                               "AI based LMS system": "/solutions/ailms",
                               "Policy Engine System": "/solutions/policy-engine",
                               "Cloud Infra Deployment and Monitoring": "/solutions/cloud-infra",
                               "WorkbookNow ERP": "/solutions/erp",
                               "HRMS and Payroll Solutions": "/solutions/hrms",
                              "Banking & Financial Services": "/industries/banking-finance",
                              "Retail & Consumer Goods": "/industries/retail-consumer",
                              "Manufacturing & Automotive": "/industries/manufacturing-automotive",
                              "Healthcare & Pharma": "/industries/healthcare-pharma",
                               "Media & Entertainment": "/industries/media-entertainment",
                              "Government & PSUs": "/industries/government-psu",
                              "Blogs": "/resources/blogs",
                              "Case Studies": "/resources/case-studies",
                              "In the News": "/resources/news",
                              "Events": "/resources/events"
                            };

                            if (routes[item]) {
                              return (
                                <Link 
                                  key={i} 
                                  href={routes[item]} 
                                  className="block text-[14px] font-light text-[#475567] hover:text-[#f99d1c] active:text-[#f99d1c]"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {item}
                                </Link>
                              );
                            }
                            return (
                              <a key={i} href="#" className="block text-[15px] font-light text-[#475567] hover:text-[#f99d1c]">
                                {item}
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </Motion.div>
                  )}
                </div>
              );
            })}
            <div className="pt-4">
              <Link href="/contact?category=Contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full bg-[#f99d1c] text-white py-4 text-[12px] font-medium tracking-normal uppercase rounded-sm">
                  CONTACT US
                </button>
              </Link>
            </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}