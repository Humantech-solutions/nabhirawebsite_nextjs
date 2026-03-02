"use client";

import { 
  Shield, 
  CreditCard, 
  Cloud, 
  Smartphone, 
  Database, 
  Cpu, 
  FileCheck, 
  UserCheck, 
  Globe, 
  Brain, 
  LayoutTemplate 
} from "lucide-react";
import { IndustryLayout } from "../components/IndustryLayout";

interface BankingFinanceProps {
  wordpressData?: {
    globalSettings?: {
      heroSlides: any;
      limitlessTogether: any;
    };
  };
}

export default function BankingFinance({ wordpressData }: BankingFinanceProps) {
  const challenges = [
    {
      title: "Legacy Systems",
      text: "Legacy core systems limiting innovation speed and agility.",
      icon: <Database size={32} />,
    },
    {
      title: "Regulatory Complexity",
      text: "Increasing regulatory and compliance complexity across jurisdictions.",
      icon: <FileCheck size={32} />,
    },
    {
      title: "Security Threats",
      text: "Rising cybersecurity and fraud risks in an interconnected world.",
      icon: <Lock size={32} />,
    },
    {
      title: "Payment Evolution",
      text: "Real time payment and open banking expectations from customers.",
      icon: <CreditCard size={32} />,
    },
    {
      title: "FinTech Competition",
      text: "Competition from digital native FinTech firms and neo-banks.",
      icon: <Zap size={32} />,
    },
    {
      title: "Hyper-Personalization",
      text: "Demand for hyper personalized customer experiences and services.",
      icon: <UserCheck size={32} />,
    },
  ];

  const impactAreas = [
    {
      id: "infrastructure",
      title: "Modern Core & Cloud Infrastructure",
      description: "Transitioning from monolithic legacy environments to secure cloud-enabled and API-driven architectures.",
      details: ["Legacy-to-Cloud Migration", "API-First Architecture", "Scalability & Resilience"],
      icon: <Cloud size={40} />
    },
    {
      id: "digital",
      title: "Digital & Embedded Finance",
      description: "Enabling seamless omnichannel banking experiences including mobile platforms and digital onboarding.",
      details: ["Omnichannel Experience", "Digital Onboarding", "Embedded Finance"],
      icon: <Smartphone size={40} />
    },
    {
      id: "risk",
      title: "Risk Intelligence & Fraud Prevention",
      description: "AI-driven systems for credit risk modeling, fraud detection, transaction monitoring, and regulatory reporting.",
      details: ["AI Risk Modeling", "Fraud Detection", "Transaction Monitoring"],
      icon: <Shield size={40} />
    },
    {
      id: "governance",
      title: "Data Governance & Regulatory Alignment",
      description: "Establishing enterprise data governance frameworks that improve reporting accuracy, transparency, and audit readiness.",
      details: ["Data Governance", "Audit Readiness", "Reporting Accuracy"],
      icon: <LayoutTemplate size={40} />
    },
    {
      id: "operations",
      title: "Intelligent Operations",
      description: "Streamlining high-volume banking processes through automation to improve efficiency and customer response time.",
      details: ["Process Automation", "Operational Efficiency", "Faster Response Times"],
      icon: <Cpu size={40} />
    },
  ];

  const fintechServices = [
    {
      title: "Cloud Native Engineering",
      desc: "Building scalable products on modern cloud stacks.",
      icon: <Cloud />
    },
    {
      title: "Secure API Integration",
      desc: "Connecting ecosystems with banking-grade security.",
      icon: <Globe />
    },
    {
      title: "Payment Platforms",
      desc: "Next-gen payment and lending infrastructure.",
      icon: <CreditCard />
    },
    {
      title: "Data Architecture",
      desc: "Regulatory-ready data foundations.",
      icon: <Database />
    },
    {
      title: "AI Underwriting",
      desc: "Machine learning models for smarter credit decisions.",
      icon: <Brain />
    },
  ];

  return (
    <IndustryLayout
      title="Banking & Financial Services"
      subtitle="The Future of Trust & Transparency"
      heroImage="https://images.unsplash.com/photo-1769980084959-6b32a5f1b6ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYW5rJTIwYnVpbGRpbmclMjBnbGFzcyUyMGFyY2hpdGVjdHVyZSUyMGludGVyaW9yfGVufDF8fHx8MTc3MTkwMDE2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
      overview="We empower financial institutions to evolve from legacy systems to agile, cloud-native architectures that drive security, scalability, and personalized customer experiences."
      cloudService={{
        title: "Resilient Financial Cloud",
        description: "Migrate critical banking workloads to highly secure, multi-cloud environments with automated compliance and zero-downtime architectures.",
        features: [
          "Legacy-to-Cloud Modernization",
          "Regulatory Compliance Automation",
          "High-Frequency Transaction Scaling",
          "Disaster Recovery & Data Residency"
        ]
      }}
      dataService={{
        title: "Cognitive Data Foundations",
        description: "Orchestrate complex data ecosystems to gain real-time insights into market trends, customer behavior, and risk profiles.",
        features: [
          "Real-time Fraud Detection Systems",
          "360-degree Customer Profiling",
          "Automated Regulatory Reporting",
          "Predictive Credit Scoring Models"
        ]
      }}
      aiService={{
        title: "Autonomous Banking Intelligence",
        description: "Deploy Agentic AI to automate wealth management, enhance underwriting precision, and provide 24/7 intelligent advisory services.",
        features: [
          "AI-driven Portfolio Optimization",
          "Autonomous KYC & AML Processing",
          "Generative AI Financial Advisors",
          "Algorithmic Risk Management"
        ]
      }}
      challenges={challenges}
      impactAreas={impactAreas}
      specialityTitle="FinTech Innovation"
      specialityDesc="We combine startup agility with enterprise-grade engineering discipline to build the next generation of financial products."
      specialityServices={fintechServices}
      globalSettings={wordpressData?.globalSettings}
    />
  );
}

// Helper icons missing from imports (Lock and Zap were used in challenges)
import { Lock, Zap } from "lucide-react";