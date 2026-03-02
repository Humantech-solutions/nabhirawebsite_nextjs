"use client";

import { IndustryLayout } from "../components/IndustryLayout";

interface MediaEntertainmentProps {
  wordpressData?: {
    globalSettings?: {
      heroSlides: any;
      limitlessTogether: any;
    };
  };
}

export default function MediaEntertainment({ wordpressData }: MediaEntertainmentProps) {
  return (
    <IndustryLayout
      title="Media & Entertainment"
      subtitle="Next-Gen Content Delivery"
      heroImage="https://images.unsplash.com/photo-1731567387449-ca62ad06831f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpYSUyMHN0dWRpbyUyMG1vZGVybiUyMGFyY2hpdGVjdHVyZSUyMGxpZ2h0aW5nfGVufDF8fHx8MTc3MTkwMDE2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
      overview="We engineer the platforms that power high-fidelity content streaming, immersive gaming, and AI-driven creative production at global scale."
      cloudService={{
        title: "Global Content Edge",
        description: "Scale high-bandwidth streaming and immersive gaming services with cloud-native content delivery networks and edge computing architectures.",
        features: [
          "Low-latency CDN Management",
          "Cloud-native Video Transcoding",
          "Edge Rendering for Gaming",
          "Elastic Production Workflows"
        ]
      }}
      dataService={{
        title: "Hyper-personalized Audience Analytics",
        description: "Transform viewer behavior data into deep engagement insights to optimize content recommendations and maximize advertising ROI.",
        features: [
          "Real-time Streaming Analytics",
          "Dynamic Ad Insertion Models",
          "Content Performance Forecasting",
          "Audience Churn Prediction"
        ]
      }}
      aiService={{
        title: "Generative Content Pipelines",
        description: "Leverage Agentic AI to automate video editing, generate personalized trailers, and enhance immersive experiences through real-time asset generation.",
        features: [
          "AI-driven Video Post-production",
          "Generative Visual Effects",
          "Autonomous Moderation Systems",
          "Personalized Content Trailers"
        ]
      }}
      globalSettings={wordpressData?.globalSettings}
    />
  );
}
