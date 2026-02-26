"use client";

import { IndustryLayout } from "../components/IndustryLayout";

export default function RetailConsumer() {
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
    />
  );
}
