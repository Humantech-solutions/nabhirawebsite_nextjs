"use client";

import { IndustryLayout } from "../components/IndustryLayout";

interface GovernmentPSUProps {
  wordpressData?: {
    globalSettings?: {
      heroSlides: any;
      limitlessTogether: any;
    };
  };
}

export default function GovernmentPSU({ wordpressData }: GovernmentPSUProps) {
  return (
    <IndustryLayout
      title="Government & PSUs"
      subtitle="Digital Sovereignty & Civic Innovation"
      heroImage="https://images.unsplash.com/photo-1764476751207-c20099cf625e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBnbGFzcyUyMGZhY2FkZXxlbnwxfHx8fDE3NzE5MDAxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
      overview="We partner with public sector organizations to build resilient, transparent digital infrastructure that enhances citizen services and drives administrative efficiency."
      cloudService={{
        title: "Sovereign G-Cloud Infrastructure",
        description: "Establish secure, citizen-centric cloud platforms that ensure data sovereignty, high availability, and seamless service delivery.",
        features: [
          "Secure Government Gateways",
          "Public Sector Cloud Modernization",
          "Digital Identity Platforms",
          "Critical Infrastructure Protection"
        ]
      }}
      dataService={{
        title: "Open Data & Policy Analytics",
        description: "Utilize data ecosystems to improve urban planning, optimize public resource allocation, and drive evidence-based policy making.",
        features: [
          "Smart City Data Orchestration",
          "Citizen Sentiment Analysis",
          "Public Spending Transparency",
          "Predictive Resource Allocation"
        ]
      }}
      aiService={{
        title: "Intelligent Civic Automation",
        description: "Implement Agentic AI to streamline public administrative processes, enhance tax compliance, and provide automated citizen assistance.",
        features: [
          "AI-driven Public Benefit Processing",
          "Autonomous Traffic & Transit Mgmt",
          "Fraud Detection in Public Funds",
          "Intelligent Government Helpdesks"
        ]
      }}
      globalSettings={wordpressData?.globalSettings}
    />
  );
}
