"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion as Motion } from "motion/react";
import { ServiceHero } from "../../../components/ServiceHero";
import { CheckCircle2, Layout, Zap, Users, Shield, Server } from "lucide-react";

export default function CloudTransformation({ wordpressData }: any) {
  useEffect(() => {
    document.title = "Cloud Transformation | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);
  const steps = [
    { title: "Strategic Readiness", desc: "Assessing legacy infrastructure and defining a tailored migration roadmap." },
    { title: "Architecture Design", desc: "Building resilient, multi-cloud and hybrid environments for peak performance." },
    { title: "Seamless Migration", desc: "Executing data and application transfers with zero downtime and full integrity." },
    { title: "Continuous Optimization", desc: "Ongoing monitoring and cost-optimization for maximum ROI." },
  ];

  return (
    <div className="flex flex-col">
      <ServiceHero
        subtitle="Cloud Transformation"
        title="Scalable Infrastructure for the Future"
        description="Migrate, modernize, and manage your enterprise workloads with our world-class cloud architectural expertise. We specialize in AWS, Azure, and Google Cloud."
        image="https://images.unsplash.com/photo-1721444127971-b7d0023bbef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBjbG91ZCUyMHNlcnZlciUyMGJsdWV8ZW58MXx8fHwxNzcxOTU1MTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Feature Grid */}
      <section className="py-20 bg-white text-[#11253e]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16 lg:mb-24">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-8">
              Why Move to the Cloud with Nabhira?
            </h2>
            <p className="text-[#11253e] text-lg lg:text-xl leading-relaxed">
              Cloud is more than just someone else's server. It's an opportunity to rebuild your business for agility, resilience, and speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: <Zap />, title: "Serverless Speed", desc: "Deploy functions that scale instantly and only pay for what you use." },
              { icon: <Layout />, title: "Microservices Architecture", desc: "Decouple your monolith and build independent, maintainable services." },
              { icon: <Server />, title: "Hybrid Cloud Integration", desc: "Maintain on-premise security while leveraging cloud scalability." },
              { icon: <Users />, title: "DevOps Excellence", desc: "Automate your CI/CD pipelines for faster and safer releases." },
              { icon: <Shield />, title: "Zero Trust Security", desc: "Enterprise-grade security built into the very fabric of your network." },
              { icon: <CheckCircle2 />, title: "99.99% Availability", desc: "Architected for high availability and disaster recovery." },
            ].map((f, idx) => (
              <Motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 border border-[#11253e]/10 rounded-sm hover:border-[#f99d1c] transition-colors"
              >
                <div className="text-[#f99d1c] mb-6 p-3 bg-[#11253e]/5 rounded-sm inline-block">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-[#11253e] text-sm leading-relaxed">{f.desc}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-[#11253e] text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, idx) => (
              <div key={step.title} className="relative group p-10">
                <div className="text-[#f99d1c] text-6xl md:text-7xl lg:text-8xl font-black absolute -top-8 -left-4 transition-opacity">
                  0{idx + 1}
                </div>
                <div className="relative z-10 pt-4">
                  <h4 className="text-xl md:text-2xl font-bold mb-4 text-[#f99d1c]">{step.title}</h4>
                  <p className="text-white/70 text-sm md:text-base font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-14 relative bg-[#e5dfd3] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `repeating-linear-gradient(110deg, transparent, transparent 20px, #11253e 20px, #11253e 21px)` }} />
          <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#11253e]/20 rounded-full blur-[100px]"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#fdfbf7] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 relative"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#f99d1c]"></div>
              <div className="max-w-xl space-y-4">
                <h2 className="text-[#11253e] text-3xl md:text-4xl font-bold tracking-tight leading-[1.2]">
                 Ready to architect  <br />
                  <span className="text-[#f99d1c]">the future?</span>
                </h2>
                <p className="text-[#11253e] text-base font-light leading-relaxed">
                  Let our experts design a cloud strategy that scales with your ambition and delivers measurable business value.
                </p>
              </div>
              <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/services/cloud/cloud-transformation')}&title=${encodeURIComponent('Cloud Transformation')}&category=Service`}>
                <button
                  className="whitespace-nowrap bg-[#f99d1c] hover:bg-[#10243c] text-white px-10 py-5 rounded-md transition-all inline-flex items-center space-x-3 uppercase tracking-[0.18em] group shrink-0"
                  style={{ fontSize: "13px", fontWeight: 600 }}
                >
                  <span>START YOUR JOURNEY</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </Motion.div>
          </div>
        </section>
    </div>
  );
}
