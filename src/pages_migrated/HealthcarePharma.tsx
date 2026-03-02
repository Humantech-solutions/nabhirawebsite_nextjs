"use client";

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
      globalSettings={wordpressData?.globalSettings}
    />
  );
}
