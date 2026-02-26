"use client";

import { motion as Motion } from "motion/react";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ServiceHero } from "../../components/ServiceHero";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ShieldCheck, Lock, Eye, Key, Globe, Shield, Activity, Fingerprint, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CloudSecurityGovernance() {
  useEffect(() => {
    document.title = "Cloud Security & Governance | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ServiceHero 
        title={<>Fortify Your <span className="text-[#f99d1c]">Digital Estate.</span></>}
        description="Comprehensive security governance and automated compliance for the most regulated industries. Secure every byte, across every cloud."
        subtitle="Cloud Security & Governance"
        category="Cloud Security & Governance"
        image="https://images.unsplash.com/photo-1586036308218-5ed6553c98b6?auto=format&fit=crop&q=80&w=2000"
      />

        {/* Security Pillars */}
        <section className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-[#11253e] text-4xl font-medium tracking-normal uppercase leading-tight">
                    Multi-Layered <br />
                    <span className="text-[#f99d1c]">Trust Guardrails</span>
                  </h2>
                  <p className="text-[#11253e]/60 text-lg font-light leading-relaxed">
                    Cloud security is not a one-time setup—it's continuous vigilance. We implement automated guardrails that prevent non-compliant infrastructure from being deployed in the first place.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[
                    { title: "Identity First", desc: "Granular RBAC and ABAC controls integrated with centralized IdPs." },
                    { title: "Data Residency", desc: "Automated geofencing for data sovereignty and privacy compliance." },
                    { title: "Threat Intel", desc: "Real-time AI-native anomaly detection across all cloud endpoints." },
                    { title: "Drift Control", desc: "Automated remediation of infrastructure-as-code drift." }
                  ].map((item, i) => (
                    <div key={i} className="space-y-4 p-8 border border-gray-100 hover:border-[#f99d1c] transition-colors group">
                       <h4 className="text-[#11253e] text-lg font-medium uppercase tracking-normal">{item.title}</h4>
                       <p className="text-[#11253e]/50 text-xs font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="p-16 bg-gray-50 border border-gray-100 rounded-sm space-y-12 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[#11253e] text-xl font-medium uppercase tracking-normal">Compliance Coverage</h3>
                    <Shield className="text-[#f99d1c]" size={24} />
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      "GDPR / CCPA",
                      "HIPAA / HITRUST",
                      "PCI-DSS v4.0",
                      "SOC2 Type II",
                      "ISO 27001",
                      "FedRAMP / NIST"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-center bg-white p-4 border border-gray-200 shadow-sm">
                        <CheckCircle2 size={14} className="text-[#f99d1c]" />
                        <span className="text-[10px] font-medium text-[#11253e] uppercase tracking-normal">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Stack Visualization */}
        <section className="py-32 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
              <h2 className="text-[#11253e] text-4xl font-medium tracking-normal uppercase">Integrated Security Stack</h2>
              <div className="w-16 h-1 bg-[#f99d1c] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1px bg-gray-200 border border-gray-200 shadow-sm">
              {[
                { 
                  title: "CSPM", 
                  desc: "Cloud Security Posture Management for continuous visibility across multi-cloud.", 
                  icon: <Activity size={32} /> 
                },
                { 
                  title: "CWPP", 
                  desc: "Cloud Workload Protection Platform for container and serverless runtime security.", 
                  icon: <Fingerprint size={32} /> 
                },
                { 
                  title: "CIEM", 
                  desc: "Cloud Infrastructure Entitlement Management for identity governance at scale.", 
                  icon: <Key size={32} /> 
                },
                { 
                  title: "CNAPP", 
                  desc: "Cloud-Native Application Protection Platform for end-to-end security lifecycle.", 
                  icon: <Eye size={32} /> 
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-16 space-y-8 hover:bg-gray-50 transition-all">
                  <div className="text-[#f99d1c]">{item.icon}</div>
                  <div className="space-y-4">
                    <h3 className="text-[#11253e] text-lg font-medium tracking-normal uppercase">{item.title}</h3>
                    <p className="text-[#11253e]/60 text-xs font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Adopt Zero Trust - Patterned Section */}
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
              
              <div className="max-w-2xl space-y-6 text-left">
                <h2 className="text-[#11253e] text-3xl md:text-5xl font-medium tracking-tight leading-[1.1]">
                  Adopt <br className="hidden md:block" />
                  <span className="text-[#f99d1c]">Zero Trust.</span>
                </h2>
                <p className="text-[#11253e]/70 text-lg md:text-xl font-light leading-relaxed">
                  Don't wait for a breach to happen. Let Nabhira architect a security posture that proactively neutralizes threats.
                </p>
              </div>
              
              <div className="flex-shrink-0 w-full md:w-auto">
                <button className="w-full md:w-auto bg-[#f99d1c] hover:bg-[#11253e] text-white px-12 py-6 rounded-sm font-medium transition-all inline-flex items-center justify-center space-x-4 uppercase text-xs tracking-[0.2em] shadow-xl shadow-[#f99d1c]/20 group">
                  <span>Speak to a Security Architect</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Motion.div>
          </div>
        </section>
    </>
  );
}
