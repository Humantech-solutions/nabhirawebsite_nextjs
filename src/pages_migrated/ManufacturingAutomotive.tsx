"use client";

import { IndustryLayout } from "../components/IndustryLayout";

export default function ManufacturingAutomotive() {
  return (
    <IndustryLayout
      title="Manufacturing & Automotive"
      subtitle="Industry 4.0 & Connected Mobility"
      heroImage="https://images.unsplash.com/photo-1764114441123-586d13fc6ece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZhbmNlZCUyMG1hbnVmYWN0dXJpbmclMjBhdXRvbWF0ZWQlMjBmYWN0b3J5JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTkwMDE2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
      overview="We engineer the digital infrastructure that powers smart factories and connected vehicles, driving operational efficiency and sustainable manufacturing."
      cloudService={{
        title: "Industrial Edge Cloud",
        description: "Deploy low-latency cloud architectures to process IoT data directly on the factory floor for real-time monitoring and control.",
        features: [
          "Smart Factory IoT Hubs",
          "Low-latency Edge Processing",
          "Digital Twin Cloud Platforms",
          "Hybrid Manufacturing Clouds"
        ]
      }}
      dataService={{
        title: "Predictive Lifecycle Analytics",
        description: "Transform shop-floor sensor data into predictive maintenance schedules and quality assurance models to eliminate downtime.",
        features: [
          "Predictive Maintenance Engines",
          "Quality Assurance Automation",
          "Supply Chain Visibility Dashboards",
          "Production Throughput Optimization"
        ]
      }}
      aiService={{
        title: "Autonomous Plant Operations",
        description: "Apply Agentic AI to optimize energy consumption, automate robotics orchestration, and enhance vehicle safety through computer vision.",
        features: [
          "AI-driven Robotics Orchestration",
          "Computer Vision for Defect Detection",
          "Sustainable Energy Optimization",
          "Autonomous Logistics Planning"
        ]
      }}
    />
  );
}
