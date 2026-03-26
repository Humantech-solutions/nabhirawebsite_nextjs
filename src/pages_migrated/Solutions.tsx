"use client";

import React from "react";
import { motion as Motion } from "motion/react";
import { ServiceHero } from "../components/ServiceHero";
import { ShoppingCart, GraduationCap, FileText, Server, Briefcase, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Solutions({ wordpressData }: any) {
  const products = [
    {
      title: "AI Powered Point of Sales",
      path: "/solutions/enterprise-pos",
      desc: "Revolutionizing retail with intelligent checkout, inventory prediction, and personalized customer loyalty.",
      icon: <ShoppingCart className="text-[#f99d1c]" size={24} />
    },
    {
      title: "AI Based LMS System",
      path: "/solutions/ailms",
      desc: "A cognitive learning platform that adapts to individual progress and organizational knowledge gaps.",
      icon: <GraduationCap className="text-[#f99d1c]" size={24} />
    },
    {
      title: "Policy Engine System",
      path: "/solutions/policy-engine",
      desc: "Automating complex decision-making and compliance workflows with rule-based architectural precision.",
      icon: <FileText className="text-[#f99d1c]" size={24} />
    },
    {
      title: "Cloud Infra & Monitoring",
      path: "/solutions/cloud-infra",
      desc: "Standardized deployment and real-time observability for mission-critical enterprise workloads.",
      icon: <Server className="text-[#f99d1c]" size={24} />
    },
    {
      title: "WorkbookNow ERP",
      path: "/solutions/erp",
      desc: "A modular Enterprise Resource Planning system designed for modern, agile business operations.",
      icon: <Briefcase className="text-[#f99d1c]" size={24} />
    },
    {
      title: "HRMS & Payroll Solutions",
      path: "/solutions/hrms",
      desc: "Streamlining human capital management with automated payroll and intelligent talent tracking.",
      icon: <Users className="text-[#f99d1c]" size={24} />
    }
  ];

  return (
    <div className="flex flex-col">
      <ServiceHero
        subtitle="Enterprise Solutions"
        title={
          <>
            Precision Engineered <br />
            <span className="text-white/40 font-light italic">Digital Products.</span>
          </>
        }
        description="Our suite of enterprise-grade software solutions is designed to solve the most complex business challenges with architectural elegance and AI-native intelligence."
        image="https://images.unsplash.com/photo-1605245763221-e89db37d59f7?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Products Grid */}
      <section className="py-24 lg:py-32 bg-white text-[#11253e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 lg:mb-24">
            <h2 className="text-3xl lg:text-5xl font-medium tracking-tight mb-8">
              Modular <span className="text-[#f99d1c]">Architectures</span>
            </h2>
            <p className="text-[#11253e] text-lg lg:text-xl leading-relaxed font-light">
              We build solutions that aren't just software, but strategic assets that scale with your organization's ambition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <Motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-[#fdfbf7] p-10 border border-[#11253e]/5 hover:border-[#f99d1c]/30 transition-all duration-500 rounded-sm"
              >
                <div className="mb-8 p-4 bg-white shadow-sm inline-block rounded-sm transition-transform duration-500 group-hover:scale-110">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-medium mb-4 group-hover:text-[#f99d1c] transition-colors">{product.title}</h3>
                <p className="text-[#11253e] text-sm leading-relaxed mb-8 font-light">
                  {product.desc}
                </p>
                <Link href={product.path}
                  className="inline-flex items-center space-x-2 text-[11px] font-bold uppercase tracking-widest text-[#11253e] hover:text-[#f99d1c] transition-colors"
                >
                  <span>View Product</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#11253e] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #f99d1c, #f99d1c 1px, transparent 1px, transparent 10px)' }}></div>
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12 relative z-10">
          <h2 className="text-4xl lg:text-6xl font-medium tracking-tight">
            Need a <span className="text-[#f99d1c]">Custom</span> Build?
          </h2>
          <p className="text-white/60 text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Our engineering team specializes in architecting bespoke solutions for unique enterprise requirements. Let's build what's next.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions')}&title=${encodeURIComponent('Enterprise Solutions')}&category=Solutions`}>
              <button className="bg-[#f99d1c] text-white px-12 py-6 rounded-sm font-medium uppercase text-[11px] tracking-[0.2em] hover:bg-white hover:text-[#11253e] transition-all duration-300 w-full sm:w-auto shadow-2xl">
                Get a Custom Quote
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}