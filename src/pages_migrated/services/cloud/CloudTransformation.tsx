"use client";

import React from "react";
import { motion as Motion } from "motion/react";
import { ServiceHero } from "../../../components/ServiceHero";
import { CheckCircle2, Layout, Zap, Users, Shield, Server } from "lucide-react";
import { renderHeroTitle, formatQuotesToBold } from "../../../lib/utils";

export default function CloudTransformation({ wordpressData }: { wordpressData?: any }) {
  const gs = wordpressData?.globalSettings;
  const heroData = gs?.heroSlides;
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
        title={renderHeroTitle(heroData?.heroS1Title || (
          <>Scalable <br /><span className="text-[#f99d1c]">Infrastructure.</span></>
        ))}
        description={formatQuotesToBold(heroData?.heroS1Desc || "Migrate, modernize, and manage your enterprise workloads with our world-class cloud architectural expertise. We specialize in 'AWS', 'Azure', and 'Google Cloud'.") as any}
        image={heroData?.heroS1ImageUrl || heroData?.heroS1Image?.node?.sourceUrl || "https://images.unsplash.com/photo-1721444127971-b7d0023bbef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBjbG91ZCUyMHNlcnZlciUyMGJsdWV8ZW58MXx8fHwxNzcxOTU1MTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"}
      />

      {/* Feature Grid */}
      <section className="py-20 bg-white text-[#11253e]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16 lg:mb-24">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-8">
              {formatQuotesToBold("Why Move to the Cloud \n^with Hutech Solutions?^")}
            </h2>
            <p className="text-[#11253e] text-lg lg:text-xl leading-relaxed">
              {formatQuotesToBold("Cloud is more than just someone else's server. It's an opportunity to rebuild your business for ^agility, resilience, and speed.^")}
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
                <h3 className="text-xl font-bold mb-4">{formatQuotesToBold(f.title)}</h3>
                <p className="text-[#11253e] text-sm leading-relaxed">{formatQuotesToBold(f.desc)}</p>
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
                  <h4 className="text-xl md:text-2xl font-bold mb-4 text-[#f99d1c]">{formatQuotesToBold(step.title)}</h4>
                  <p className="text-white/70 text-sm md:text-base font-light leading-relaxed">{formatQuotesToBold(step.desc)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
