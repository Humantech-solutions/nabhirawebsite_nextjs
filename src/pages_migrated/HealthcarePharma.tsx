"use client";

import { 
  Stethoscope, 
  Pill, 
  Activity, 
  Heart, 
  Dna, 
  Microscope, 
  ShieldCheck, 
  Cloud, 
  Smartphone, 
  Video, 
  Link2, 
  FileCheck, 
  UserCheck, 
  Truck, 
  Wifi, 
  Brain, 
  Clock, 
  TrendingDown, 
  CheckCircle, 
  HeartPulse,
  Database
} from "lucide-react";
import { IndustryLayout } from "../components/IndustryLayout";

interface HealthcarePharmaProps {
  wordpressData?: {
    globalSettings?: {
      heroSlides: any;
      limitlessTogether: any;
    };
  };
}

export default function HealthcarePharma({ wordpressData }: HealthcarePharmaProps) {
  const challenges = [
    {
      title: "Data Interoperability",
      text: "Breaking silos to enable seamless data exchange across systems.",
      icon: <Link2 size={32} />,
    },
    {
      title: "Regulatory Compliance",
      text: "Navigating complex HIPAA, GDPR, and GxP requirements.",
      icon: <FileCheck size={32} />,
    },
    {
      title: "Patient Experience",
      text: "Meeting demands for personalized, digital-first care journeys.",
      icon: <UserCheck size={32} />,
    },
    {
      title: "R&D Efficiency",
      text: "Accelerating drug discovery and reducing clinical trial costs.",
      icon: <Microscope size={32} />,
    },
    {
      title: "Supply Chain Integrity",
      text: "Ensuring traceability and preventing counterfeit drugs.",
      icon: <Truck size={32} />,
    },
    {
      title: "Cybersecurity",
      text: "Protecting sensitive patient data from evolving cyber threats.",
      icon: <ShieldCheck size={32} />,
    },
  ];

  const impactAreas = [
    {
      id: "digital-health",
      title: "Digital Health Platforms",
      description: "We architect secure, scalable platforms for telehealth, remote patient monitoring, and virtual care delivery, extending reach beyond hospital walls.",
      details: ["Telehealth Solutions", "Remote Monitoring", "Virtual Care"],
      icon: <Stethoscope size={40} />
    },
    {
      id: "clinical-data",
      title: "Clinical Data Intelligence",
      description: "We leverage AI and advanced analytics to unlock insights from EHRs, genomic data, and real-world evidence, accelerating research and personalized medicine.",
      details: ["Real-World Evidence", "Genomic Analytics", "Personalized Medicine"],
      icon: <Dna size={40} />
    },
    {
      id: "smart-hospitals",
      title: "Smart Hospitals & IoT",
      description: "We integrate IoMT devices and hospital information systems to optimize workflows, asset tracking, and patient safety in real-time.",
      details: ["Asset Tracking", "Workflow Optimization", "Patient Safety"],
      icon: <Wifi size={40} />
    },
    {
      id: "pharma-supply",
      title: "Pharma Supply Chain Visibility",
      description: "We build end-to-end traceability solutions using blockchain and IoT to ensure drug safety, compliance, and efficient distribution.",
      details: ["End-to-End Traceability", "Cold Chain Monitoring", "Anti-Counterfeiting"],
      icon: <Pill size={40} />
    },
    {
      id: "patient-engagement",
      title: "Patient Engagement & Support",
      description: "We design intuitive mobile apps and portals that empower patients to manage their health, access records, and communicate with providers.",
      details: ["Patient Portals", "Health Management Apps", "Provider Communication"],
      icon: <Heart size={40} />
    },
  ];

  const techEnablement = [
    {
      title: "Cloud for Healthcare",
      desc: "HIPAA-compliant cloud architectures.",
      icon: <Cloud />
    },
    {
      title: "AI Diagnostics",
      desc: "Machine learning for faster diagnosis.",
      icon: <Brain />
    },
    {
      title: "Internet of Medical Things",
      desc: "Connecting devices for better care.",
      icon: <Activity />
    },
    {
      title: "Telehealth Infrastructure",
      desc: "Secure video and data transmission.",
      icon: <Video />
    },
    {
      title: "Genomic Data Storage",
      desc: "Scalable solutions for big data.",
      icon: <Database />
    },
    {
      title: "Mobile Health",
      desc: "Apps for patients and providers.",
      icon: <Smartphone />
    },
  ];

  return (
    <IndustryLayout
      title="Healthcare & Pharma"
      subtitle="Precision Medicine & Digital Health"
      heroImage="https://images.unsplash.com/photo-1766297247072-93fd815afef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYWJvcmF0b3J5JTIwbWVkaWNhbCUyMHJlc2VhcmNoJTIwZmFjaWxpdHklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcxOTAwMTY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
      overview="We architect secure, compliant platforms for drug discovery, clinical trials, and patient care, accelerating the path from research to remedy."
      cloudService={{
        title: "HIPAA-Compliant Health Cloud",
        description: "Modernize healthcare delivery with secure, scalable cloud architectures designed to handle sensitive PHI and genomic data with ease.",
        features: [
          "Secure Telehealth Architectures",
          "Interoperable Health Data Lakes",
          "Genomic Data Storage & Compute",
          "Strict Regulatory Compliance (GDPR/HIPAA)"
        ]
      }}
      dataService={{
        title: "Clinical Insight Ecosystems",
        description: "Harness real-world evidence and clinical trial data to improve patient outcomes and accelerate therapeutic development.",
        features: [
          "Patient Outcome Prediction",
          "Real-world Evidence Analytics",
          "Clinical Trial Optimization",
          "Pharmacovigilance Automation"
        ]
      }}
      aiService={{
        title: "AI-Augmented Drug Discovery",
        description: "Deploy Agentic AI to simulate molecular interactions, automate medical imaging analysis, and personalize treatment plans.",
        features: [
          "Molecular Simulation & Analysis",
          "Autonomous Medical Image Tagging",
          "Personalized Treatment Protocols",
          "Generative AI for Patient Support"
        ]
      }}
      challenges={challenges}
      impactAreas={impactAreas}
      specialityTitle="Technology Enablement"
      specialityDesc="We leverage secure, compliant cloud platforms and advanced AI to power modern healthcare and life sciences ecosystems."
      specialityServices={techEnablement}
      globalSettings={wordpressData?.globalSettings}
    />
  );
}
