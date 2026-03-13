"use client";

import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { 
  Cloud, 
  Database, 
  BrainCircuit, 
  Compass, 
  MoveRight, 
  Zap, 
  Cpu, 
  BarChart3, 
  GitBranch, 
  PieChart, 
  ShieldCheck, 
  Lightbulb, 
  Bot, 
  Activity,
  Settings,
  ChevronRight
} from "lucide-react";

type Service = {
  title: string;
  desc: string;
  icon: React.ElementType;
};

type Category = {
  id: string;
  label: string;
  icon: React.ElementType;
  services: Service[];
};

const capabilitiesData: Category[] = [
  {
    id: "cloud",
    label: "Cloud Transformation",
    icon: Cloud,
    services: [
      {
        title: "Cloud Advisory",
        desc: "Assess readiness, define strategy, build roadmap, optimize architecture, governance, security and cost efficiency",
        icon: Compass
      },
      {
        title: "Cloud Migration",
        desc: "Plan, design, migrate workloads securely, with minimal risk ensuring performance stability.",
        icon: MoveRight
      },
      {
        title: "Cloud Modernization",
        desc: "Assess systems, refactor applications, rearchitect platforms, enhance security, optimize scalability.",
        icon: Zap
      },
      {
        title: "Cloud Native Development",
        desc: "Design microservices, implement containers, enable DevOps automation, build scalable cloud-native applications",
        icon: Cpu
      },
      {
        title: "Cloud Operations and Control",
        desc: "Analyze cloud spend, optimize costs, implement FinOps practices, forecast budgets, improve accountability.",
        icon: Settings
      },
      {
        title: "Cloud Financial Management",
        desc: "Analyze cloud spend, optimize costs, implement FinOps practices, forecast budgets, improve accountability.",
        icon: BarChart3
      }
    ]
  },
  {
    id: "data",
    label: "Data Foundation",
    icon: Database,
    services: [
      {
        title: "Data Engineering",
        desc: "Design data pipelines, build architectures, ensure quality, enable analytics and scalability.",
        icon: GitBranch
      },
      {
        title: "Data Analytics",
        desc: "Define metrics, integrate data, build dashboards, generate insights, drive decisions.",
        icon: PieChart
      },
      {
        title: "Data Governance",
        desc: "Define policies, ensure data quality, manage access, enforce compliance, enable trusted insights.",
        icon: ShieldCheck
      }
    ]
  },
  {
    id: "ai",
    label: "AI Acceleration",
    icon: BrainCircuit,
    services: [
      {
        title: "AI Consulting",
        desc: "Define AI ambition aligned to business goals, Identify high-value use cases, Build roadmap and Define value realization framework",
        icon: Lightbulb
      },
      {
        title: "Agentic AI",
        desc: "Design, build, deploy, and govern autonomous AI agents delivering smarter features, predictive insights, and personalized user experiences at scale.",
        icon: Bot
      },
      {
        title: "Intelligent Automation",
        desc: "Implement AI productivity tools enhancing collaboration, automation, efficiency, and measurable workforce performance across teams organization-wide.",
        icon: Activity
      }
    ]
  }
];

export function Capabilities({ data }: any) {
  const [activeTab, setActiveTab] = useState(capabilitiesData[0].id);

  const activeCategory = capabilitiesData.find(cat => cat.id === activeTab) || capabilitiesData[0];

  return (
    <section className="bg-[#f8f9fa] py-20 md:py-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      {/* Subtle Architectural Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-capabilities" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="black" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-capabilities)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-10 md:mb-12 text-center md:text-left flex flex-col items-center md:items-start">
          <Motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#11253e] text-[14px] md:text-[16px] font-medium tracking-normal flex items-center"
          >
            Our capabilities
            <span className="ml-4 md:ml-6 h-[1px] w-16 md:w-24 bg-[#f99d1c]"></span>
          </Motion.h2>
          <Motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 md:mt-6 text-[#11253e] max-w-2xl md:text-[40px] text-base md:text-lg font-medium leading-tight"
          >
            Stay Ahead of Curve with Cloud Solutions
          </Motion.p>
        </div>

        {/* Category Navigation */}
        <div className="flex overflow-x-auto no-scrollbar gap-6 md:gap-10 mb-10 md:mb-12 border-b border-[#11253e]/10 -mx-6 px-6 md:mx-0 md:px-0">
          {capabilitiesData.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`pb-4 px-2 text-[13px] md:text-sm font-medium tracking-normal transition-all duration-300 relative whitespace-nowrap cursor-pointer ${
                  activeTab === cat.id ? "text-[#11253e]" : "text-[#11253e] hover:text-[#11253e]"
                }`}
              >
                <span className="flex items-center gap-2 md:gap-3">
                  <Icon size={16} className={activeTab === cat.id ? "text-[#f99d1c]" : "text-current"} />
                  {cat.label}
                </span>
                {activeTab === cat.id && (
                  <Motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 w-full h-[3px] bg-[#f99d1c]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <Motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {activeCategory.services.map((service, idx) => (
                <ServiceCard key={service.title} service={service} index={idx} />
              ))}
            </Motion.div>
          </AnimatePresence>
        </div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service, index: number }) {
  const Icon = service.icon;

  const routeMap: Record<string, string> = {
    "Cloud Advisory": "/solutions/cloud-advisory",
    "Cloud Migration": "/solutions/cloud-migration",
    "Cloud Modernization": "/solutions/cloud-modernization",
    "Cloud Native Development": "/solutions/cloud-native-development",
    "Cloud Operations and Control": "/solutions/cloud-infra",
    "Cloud Financial Management": "/solutions/cloud-financial-management",
    "Data Engineering": "/solutions/data-engineering",
    "Data Analytics": "/solutions/data-analytics-solution",
    "Data Governance": "/solutions/data-governance",
    "AI Consulting": "/solutions/ai-consulting",
    "Agentic AI": "/solutions/agentic-ai",
    "Intelligent Automation": "/solutions/intelligent-automation"
  };

  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group bg-white p-8 rounded-sm border border-transparent hover:border-[#f99d1c]/30 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col h-full relative overflow-hidden cursor-default"
    >
      {/* Hover Background Pattern Reveal */}
      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-[#f99d1c]/5 rounded-full blur-3xl group-hover:bg-[#f99d1c]/10 transition-colors duration-500" />
      
      <div className="relative z-10 mb-6">
        <div className="w-12 h-12 flex items-center justify-center bg-[#11253e]/5 rounded-sm text-[#11253e] group-hover:bg-[#f99d1c] group-hover:text-white transition-colors duration-500">
          <Icon size={24} />
        </div>
      </div>

      <div className="relative z-10 flex-grow">
        <h3 className="text-[#11253e] text-xl font-semibold mb-4 tracking-tight group-hover:text-[#f99d1c] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-[#11253e] text-base font-light leading-relaxed mb-8">
          {service.desc}
        </p>
      </div>

      <div className="relative z-10 mt-auto pt-6 border-t border-[#11253e]/5">
        <Link href={routeMap[service.title] || "#"}
          className="flex items-center gap-2 text-[#f99d1c] text-xs font-medium tracking-normal uppercase hover:gap-4 transition-all duration-300 cursor-pointer"
        >
          Explore More
          <ChevronRight size={14} />
        </Link>
      </div>

      {/* Decorative side accent */}
      <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#f99d1c] group-hover:h-full transition-all duration-500" />
    </Motion.div>
  );
}
