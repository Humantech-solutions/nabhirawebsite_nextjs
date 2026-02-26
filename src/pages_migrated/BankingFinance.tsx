"use client";

import { IndustryLayout } from "../components/IndustryLayout";

export default function BankingFinance() {
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
    />
  );
}
