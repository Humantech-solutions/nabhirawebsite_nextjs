"use client";

import React, { useEffect, useRef } from "react";
import { motion as Motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import heroBg from "../../assets/a1b2c08a9b0265fe1051599a4012e2e8b726b430.png";
import {
  ArrowRight,
  ShoppingBag,
  TrendingUp,
  Truck,
  Users,
  Settings,
  Cloud,
  Database,
  Globe,
  ShieldCheck,
  Zap,
  Leaf,
  BarChart,
  Package,
  ShoppingCart,
  Smartphone
} from "lucide-react";

export default function RetailConsumer({ wordpressData }: any) {
  useEffect(() => {
    document.title = "Retail & Consumer Goods | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const challenges = [
    { title: "Omnichannel Growth", text: "Rapid growth of eCommerce and omnichannel commerce.", icon: <ShoppingCart className="text-[#f99d1c]" size={32} /> },
    { title: "Hyper-Personalization", text: "Demand for hyper personalized customer engagement.", icon: <Users className="text-[#f99d1c]" size={32} /> },
    { title: "Supply Chain", text: "Supply chain disruptions and inventory imbalances.", icon: <Truck className="text-[#f99d1c]" size={32} /> },
    { title: "Margin Pressure", text: "Margin pressure due to competition and inflation.", icon: <TrendingUp className="text-[#f99d1c]" size={32} /> },
    { title: "Real-time Forecasting", text: "Real time demand forecasting requirements.", icon: <BarChart className="text-[#f99d1c]" size={32} /> },
    { title: "Sustainability", text: "Sustainability and ethical sourcing expectations.", icon: <Leaf className="text-[#f99d1c]" size={32} /> },
  ];

  const impactAreas = [
    { id: "omnichannel", title: "Omnichannel Commerce Transformation", description: "We design scalable commerce platforms that unify online marketplaces, mobile apps, physical stores and partner ecosystems delivering consistent customer experiences across channels.", details: ["Unified Commerce Platforms", "Mobile & Web Apps", "Partner Ecosystems"], icon: <Smartphone size={40} /> },
    { id: "merchandising", title: "Data Driven Merchandising & Forecasting", description: "We enable real time analytics for demand forecasting pricing optimization promotion effectiveness and inventory planning to improve margin and reduce stockouts.", details: ["Demand Forecasting", "Pricing Optimization", "Inventory Planning"], icon: <Database size={40} /> },
    { id: "supplychain", title: "Intelligent Supply Chain", description: "We build visibility across procurement logistics warehousing and distribution networks enabling predictive planning and operational resilience.", details: ["Supply Chain Visibility", "Predictive Planning", "Operational Resilience"], icon: <Truck size={40} /> },
    { id: "customer", title: "Customer Intelligence & Personalization", description: "We deploy AI driven insights to understand customer behavior, enhance loyalty programs and optimize targeted marketing campaigns.", details: ["AI Customer Insights", "Loyalty Programs", "Targeted Marketing"], icon: <Users size={40} /> },
    { id: "automation", title: "Automation & Operational Efficiency", description: "We streamline back office processes order management and vendor operations using intelligent automation to reduce cost and improve accuracy.", details: ["Back Office Automation", "Order Management", "Vendor Operations"], icon: <Settings size={40} /> },
  ];

  const techEnablement = [
    { title: "Cloud Native Commerce", desc: "Scalable architectures for modern retail ecosystems.", icon: <Cloud /> },
    { title: "Enterprise Data Platforms", desc: "Advanced analytics for data-driven decisions.", icon: <Database /> },
    { title: "AI Recommendation Engines", desc: "Smart suggestions to boost customer engagement.", icon: <Zap /> },
    { title: "API Marketplace Integrations", desc: "Seamless connectivity across platforms.", icon: <Globe /> },
    { title: "Secure Payment Frameworks", desc: "Robust identity management and transaction security.", icon: <ShieldCheck /> },
    { title: "Scalable Supply Chain", desc: "Visibility solutions for global expansion.", icon: <Package /> },
  ];

  return (
    <div ref={containerRef} className="bg-white text-[#11253e] selection:bg-[#f99d1c] selection:text-white">
      <section className="relative h-[400px] md:h-[520px] flex items-center overflow-hidden bg-[#11253e]">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback src={heroBg} alt="Retail & Consumer Goods" className="w-full h-full object-cover opacity-40 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11253e] via-[#11253e]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] via-transparent to-transparent"></div>
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <Motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="max-w-4xl">
            <nav className="flex items-center space-x-3 text-[11px] md:text-[13px] font-medium tracking-[-0.02em] mb-4">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <span className="text-white/30 font-light">&gt;</span>
              <span className="text-[#f99d1c] uppercase tracking-widest">Retail & <span className="text-[#f99d1c]">Transition.</span></span>
            </nav>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
              Retail & <br /><span className="text-[#f99d1c]">Consumer Goods</span>
            </h1>
            <p className="text-white/70 text-lg md:text-[22px] font-light max-w-2xl leading-relaxed mb-10 border-l-2 border-[#f99d1c] pl-6">
              Enabling Intelligent Commerce in a Digital First World.
            </p>
          </Motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#11253e] mb-4">The Industry <span className="font-bold">Shift</span></h2>
              <div className="h-1 w-20 bg-[#f99d1c]"></div>
            </div>
            <p className="text-[#11253e] text-lg max-w-md text-right md:text-left">Retail and CPG leaders today must address shifting customer expectations and operational challenges.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((item, idx) => (
              <Motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#f99d1c]/30 transition-all duration-300 group">
                <div className="mb-6 bg-[#11253e]/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-[#11253e] transition-colors duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#11253e] mb-3">{item.title}</h3>
                <p className="text-[#11253e] leading-relaxed">{item.text}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light text-[#11253e] mb-6">Where We Create <span className="italic font-serif text-[#f99d1c]">Impact</span></h2>
            <p className="text-[#11253e] text-xl max-w-3xl mx-auto">Modernize commerce ecosystems, optimize supply chains, and unlock data-driven growth.</p>
          </div>
          <div className="space-y-24">
            {impactAreas.map((area, idx) => (
              <Motion.div key={area.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 mb-2"><span className="text-[#f99d1c] font-mono text-lg">0{idx + 1}</span><div className="h-px bg-[#11253e]/10 flex-grow"></div></div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#11253e]">{area.title}</h3>
                  <p className="text-[#11253e] text-lg leading-relaxed">{area.description}</p>
                  <ul className="space-y-3 pt-4">{area.details.map((detail, i) => (<li key={i} className="flex items-center gap-3 text-[#11253e] font-medium"><div className="w-1.5 h-1.5 bg-[#f99d1c] rounded-full"></div>{detail}</li>))}</ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/3] bg-[#f5f5f5] rounded-3xl overflow-hidden flex items-center justify-center group">
                    <div className="relative z-10 p-12 bg-white rounded-full shadow-2xl text-[#f99d1c] group-hover:scale-110 transition-transform duration-500"><div className="transform scale-150">{area.icon}</div></div>
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#f99d1c]/10 rounded-full blur-3xl"></div>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#11253e] text-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f99d1c]/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-light">Technology <br /><span className="font-bold text-[#f99d1c]">Enablement</span></h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-md">We leverage secure and scalable cloud platforms such as Amazon Web Services, Microsoft Azure, and Google Cloud to power modern retail and CPG ecosystems.</p>
              <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/industries/retail-consumer')}&title=${encodeURIComponent('Retail & Consumer Goods')}&category=Industries`} className="inline-flex items-center gap-2 text-[#f99d1c] font-medium hover:gap-4 transition-all">Partner with us <ArrowRight size={20} /></Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {techEnablement.map((service, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-[#f99d1c] mb-4">{service.icon}</div>
                  <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                  <p className="text-white/50 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#e5dfd3] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #11253e 1px, transparent 1px)', backgroundSize: '40px 100%' }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#11253e]">
            <div className="md:col-span-1"><h2 className="text-3xl font-bold mb-4">Outcomes That Matter</h2><p>Tangible results for forward-thinking retailers.</p></div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
              <div className="border-l-2 border-[#11253e]/20 pl-6"><TrendingUp size={32} className="mb-4" /><h3 className="text-xl font-bold mb-2">Increased Revenue</h3><p className="text-sm">Digital revenue and omnichannel growth.</p></div>
              <div className="border-l-2 border-[#11253e]/20 pl-6"><Package size={32} className="mb-4" /><h3 className="text-xl font-bold mb-2">Better Inventory</h3><p className="text-sm">Improved turnover and demand accuracy.</p></div>
              <div className="border-l-2 border-[#11253e]/20 pl-6"><Users size={32} className="mb-4" /><h3 className="text-xl font-bold mb-2">Customer Growth</h3><p className="text-sm">Enhanced customer acquisition and retention.</p></div>
              <div className="border-l-2 border-[#11253e]/20 pl-6"><Settings size={32} className="mb-4" /><h3 className="text-xl font-bold mb-2">Lower Costs</h3><p className="text-sm">Reduced operational cost and inefficiencies.</p></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
