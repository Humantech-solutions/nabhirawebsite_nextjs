"use client";

import { 
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
import { IndustryLayout } from "../components/IndustryLayout";

interface RetailConsumerProps {
  wordpressData?: {
    globalSettings?: {
      heroSlides: any;
      limitlessTogether: any;
    };
  };
}

export default function RetailConsumer({ wordpressData }: RetailConsumerProps) {
  const challenges = [
    {
      title: "Omnichannel Growth",
      text: "Rapid growth of eCommerce and omnichannel commerce.",
      icon: <ShoppingCart size={32} />,
    },
    {
      title: "Hyper-Personalization",
      text: "Demand for hyper personalized customer engagement.",
      icon: <Users size={32} />,
    },
    {
      title: "Supply Chain",
      text: "Supply chain disruptions and inventory imbalances.",
      icon: <Truck size={32} />,
    },
    {
      title: "Margin Pressure",
      text: "Margin pressure due to competition and inflation.",
      icon: <TrendingUp size={32} />,
    },
    {
      title: "Real-time Forecasting",
      text: "Real time demand forecasting requirements.",
      icon: <BarChart size={32} />,
    },
    {
      title: "Sustainability",
      text: "Sustainability and ethical sourcing expectations.",
      icon: <Leaf size={32} />,
    },
  ];

  const impactAreas = [
    {
      id: "omnichannel",
      title: "Omnichannel Commerce Transformation",
      description: "We design scalable commerce platforms that unify online marketplaces, mobile apps, physical stores and partner ecosystems delivering consistent customer experiences across channels.",
      details: ["Unified Commerce Platforms", "Mobile & Web Apps", "Partner Ecosystems"],
      icon: <Smartphone size={40} />
    },
    {
      id: "merchandising",
      title: "Data Driven Merchandising & Forecasting",
      description: "We enable real time analytics for demand forecasting pricing optimization promotion effectiveness and inventory planning to improve margin and reduce stockouts.",
      details: ["Demand Forecasting", "Pricing Optimization", "Inventory Planning"],
      icon: <Database size={40} />
    },
    {
      id: "supplychain",
      title: "Intelligent Supply Chain",
      description: "We build visibility across procurement logistics warehousing and distribution networks enabling predictive planning and operational resilience.",
      details: ["Supply Chain Visibility", "Predictive Planning", "Operational Resilience"],
      icon: <Truck size={40} />
    },
    {
      id: "customer",
      title: "Customer Intelligence & Personalization",
      description: "We deploy AI driven insights to understand customer behavior, enhance loyalty programs and optimize targeted marketing campaigns.",
      details: ["AI Customer Insights", "Loyalty Programs", "Targeted Marketing"],
      icon: <Users size={40} />
    },
    {
      id: "automation",
      title: "Automation & Operational Efficiency",
      description: "We streamline back office processes order management and vendor operations using intelligent automation to reduce cost and improve accuracy.",
      details: ["Back Office Automation", "Order Management", "Vendor Operations"],
      icon: <Settings size={40} />
    },
  ];

  const techEnablement = [
    {
      title: "Cloud Native Commerce",
      desc: "Scalable architectures for modern retail ecosystems.",
      icon: <Cloud />
    },
    {
      title: "Enterprise Data Platforms",
      desc: "Advanced analytics for data-driven decisions.",
      icon: <Database />
    },
    {
      title: "AI Recommendation Engines",
      desc: "Smart suggestions to boost customer engagement.",
      icon: <Zap />
    },
    {
      title: "API Marketplace Integrations",
      desc: "Seamless connectivity across platforms.",
      icon: <Globe />
    },
    {
      title: "Secure Payment Frameworks",
      desc: "Robust identity management and transaction security.",
      icon: <ShieldCheck />
    },
    {
      title: "Scalable Supply Chain",
      desc: "Visibility solutions for global expansion.",
      icon: <Package />
    },
  ];

  return (
    <IndustryLayout
      title="Retail & Consumer Goods"
      subtitle="Unified Commerce Architecture"
      heroImage="https://images.unsplash.com/photo-1760862652442-e8ff7ebdd2f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcmV0YWlsJTIwbHV4dXJ5JTIwc3RvcmUlMjBpbnRlcmlvciUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzE5MDAxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
      overview="From hyper-personalization to supply chain transparency, we architect digital ecosystems that bridge the gap between physical stores and digital storefronts."
      cloudService={{
        title: "Elastic Commerce Platforms",
        description: "Scale your retail operations effortlessly during peak seasons with cloud-native microservices and serverless commerce backends.",
        features: [
          "Omnichannel Inventory Sync",
          "Low-latency Edge Commerce",
          "Cloud-native POS Modernization",
          "Auto-scaling Seasonal Traffic Mgmt"
        ]
      }}
      dataService={{
        title: "Consumer Sentiment Analytics",
        description: "Transform fragmented customer data into actionable insights to drive loyalty, optimize pricing, and predict demand with surgical precision.",
        features: [
          "Real-time Inventory Optimization",
          "Personalized Marketing Automation",
          "Dynamic Pricing Engines",
          "Customer Lifetime Value Prediction"
        ]
      }}
      aiService={{
        title: "Generative Shopping Experiences",
        description: "Leverage Agentic AI to create virtual stylists, automate customer support, and optimize logistics through intelligent routing.",
        features: [
          "AI-powered Visual Search",
          "Autonomous Supply Chain Management",
          "Hyper-personalized Recommendations",
          "Intelligent Chat & Voice Commerce"
        ]
      }}
      challenges={challenges}
      impactAreas={impactAreas}
      specialityTitle="Technology Enablement"
      specialityDesc="We leverage secure and scalable cloud platforms such as Amazon Web Services, Microsoft Azure, and Google Cloud to power modern retail and CPG ecosystems."
      specialityServices={techEnablement}
      globalSettings={wordpressData?.globalSettings}
    />
  );
}
