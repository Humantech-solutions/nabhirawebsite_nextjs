"use client";

import { 
  Factory, 
  Cpu, 
  Truck, 
  Zap, 
  Activity, 
  CheckCircle, 
  Leaf, 
  Globe, 
  Settings, 
  Wifi, 
  Cloud, 
  Database, 
  Scan, 
  Bot, 
  Shield, 
  Clock, 
  BarChart, 
  Repeat 
} from "lucide-react";
import { IndustryLayout } from "../components/IndustryLayout";

interface ManufacturingAutomotiveProps {
  wordpressData?: {
    globalSettings?: {
      heroSlides: any;
      limitlessTogether: any;
    };
  };
}

export default function ManufacturingAutomotive({ wordpressData }: ManufacturingAutomotiveProps) {
  const challenges = [
    {
      title: "Supply Chain Volatility",
      text: "Addressing global disruptions and material shortages.",
      icon: <Truck size={32} />,
    },
    {
      title: "Smart Automation",
      text: "Integrating robotics and intelligent systems.",
      icon: <Bot size={32} />,
    },
    {
      title: "Zero Downtime",
      text: "Demand for predictive maintenance and reliability.",
      icon: <Activity size={32} />,
    },
    {
      title: "Electrification",
      text: "Transitioning to electric and connected vehicles.",
      icon: <Zap size={32} />,
    },
    {
      title: "Quality & Compliance",
      text: "Ensuring traceability and regulatory adherence.",
      icon: <CheckCircle size={32} />,
    },
    {
      title: "Sustainability",
      text: "Reducing carbon footprint and ethical sourcing.",
      icon: <Leaf size={32} />,
    },
  ];

  const impactAreas = [
    {
      id: "smart-factory",
      title: "Smart Factory & Industry 4.0 Enablement",
      description: "We design connected manufacturing ecosystems integrating IoT devices, production systems, and real-time analytics to improve visibility, efficiency, and quality control.",
      details: ["IoT Integration", "Real-time Analytics", "Quality Control"],
      icon: <Factory size={40} />
    },
    {
      id: "predictive-maintenance",
      title: "Predictive Maintenance & Asset Intelligence",
      description: "We implement AI-driven monitoring systems that reduce unplanned downtime, extend asset life, and optimize maintenance scheduling.",
      details: ["AI Monitoring", "Asset Optimization", "Downtime Reduction"],
      icon: <Activity size={40} />
    },
    {
      id: "supply-chain",
      title: "Supply Chain Digitization",
      description: "We enable end-to-end supply chain visibility across procurement, production, warehousing, and distribution, improving forecasting accuracy and risk mitigation.",
      details: ["End-to-End Visibility", "Forecasting Accuracy", "Risk Mitigation"],
      icon: <Globe size={40} />
    },
    {
      id: "automotive-digital",
      title: "Automotive Digital Platforms",
      description: "We support connected vehicle ecosystems, telematics platforms, software integration, and data architectures that power modern mobility solutions.",
      details: ["Connected Vehicles", "Telematics Platforms", "Mobility Solutions"],
      icon: <Cpu size={40} />
    },
    {
      id: "engineering-plm",
      title: "Engineering & Product Lifecycle Management",
      description: "We modernize engineering systems enabling collaboration, digital twins, simulation, and lifecycle traceability across global teams.",
      details: ["Digital Twins", "Lifecycle Traceability", "Global Collaboration"],
      icon: <Settings size={40} />
    },
  ];

  const techEnablement = [
    {
      title: "Industrial IoT Integration",
      desc: "Connecting machines and sensors for real-time data.",
      icon: <Wifi />
    },
    {
      title: "Cloud Manufacturing",
      desc: "Scalable platforms for industrial workloads.",
      icon: <Cloud />
    },
    {
      title: "Data Engineering",
      desc: "Advanced analytics for actionable insights.",
      icon: <Database />
    },
    {
      title: "AI Quality Inspection",
      desc: "Automated defect detection and analysis.",
      icon: <Scan />
    },
    {
      title: "Intelligent Automation",
      desc: "Streamlining production workflows.",
      icon: <Bot />
    },
    {
      title: "OT Cybersecurity",
      desc: "Securing operational technology environments.",
      icon: <Shield />
    },
  ];

  return (
    <IndustryLayout
      title="Manufacturing & Automotive"
      subtitle="Industry 4.0 & Connected Mobility"
      heroImage="https://images.unsplash.com/photo-1764114441123-586d13fc6ece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZhbmNlZCUyMG1hbnVmYWN0dXJpbmclMjBhdXRvbWF0ZWQCJTIBmYWN0b3J5JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTkwMDE2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
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
      challenges={challenges}
      impactAreas={impactAreas}
      specialityTitle="Technology Enablement"
      specialityDesc="We leverage secure and scalable cloud platforms such as Amazon Web Services, Microsoft Azure, and Google Cloud to support industrial-scale workloads."
      specialityServices={techEnablement}
      globalSettings={wordpressData?.globalSettings}
    />
  );
}
