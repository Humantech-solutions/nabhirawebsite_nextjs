"use client";

import { motion } from "motion/react";
import { 
  Cpu, 
  Cloud, 
  Database, 
  Globe, 
  Layers, 
  Shield, 
  Zap, 
  Activity, 
  Anchor, 
  Compass,
  Box,
  Circle,
  LayoutGrid
} from "lucide-react";

interface ClientsProps {
  data?: {
    clTitle?: string;
    clI1Name?: string;
    clI1Logo?: { node: { sourceUrl: string } };
    clI1LogoUrl?: string;
    clI2Name?: string;
    clI2Logo?: { node: { sourceUrl: string } };
    clI2LogoUrl?: string;
    clI3Name?: string;
    clI3Logo?: { node: { sourceUrl: string } };
    clI3LogoUrl?: string;
    clI4Name?: string;
    clI4Logo?: { node: { sourceUrl: string } };
    clI4LogoUrl?: string;
    clI5Name?: string;
    clI5Logo?: { node: { sourceUrl: string } };
    clI5LogoUrl?: string;
    clCl6Name?: string;
    clCl6Logo?: { node: { sourceUrl: string } };
    clCl6LogoUrl?: string;
  };
}

export function Clients({ data }: ClientsProps) {
  const iconMap: Record<string, any> = {
    Cpu, Cloud, Database, Globe, Layers, Shield, Zap, Activity, Anchor, Compass, Box, Circle, LayoutGrid
  };

  const dynamicItems = [];
  
  if (data?.clI1Name) {
    dynamicItems.push({
      name: data.clI1Name,
      logo: data.clI1LogoUrl || (data.clI1Logo as any)?.node?.sourceUrl || (data.clI1Logo as any)?.sourceUrl || null,
      icon: LayoutGrid
    });
  }
  if (data?.clI2Name) {
    dynamicItems.push({
      name: data.clI2Name,
      logo: data.clI2LogoUrl || (data.clI2Logo as any)?.node?.sourceUrl || (data.clI2Logo as any)?.sourceUrl || null,
      icon: LayoutGrid
    });
  }
  if (data?.clI3Name) {
    dynamicItems.push({
      name: data.clI3Name,
      logo: data.clI3LogoUrl || (data.clI3Logo as any)?.node?.sourceUrl || (data.clI3Logo as any)?.sourceUrl || null,
      icon: LayoutGrid
    });
  }
  if (data?.clI4Name) {
    dynamicItems.push({
      name: data.clI4Name,
      logo: data.clI4LogoUrl || (data.clI4Logo as any)?.node?.sourceUrl || (data.clI4Logo as any)?.sourceUrl || null,
      icon: LayoutGrid
    });
  }
  if (data?.clI5Name) {
    dynamicItems.push({
      name: data.clI5Name,
      logo: data.clI5LogoUrl || (data.clI5Logo as any)?.node?.sourceUrl || (data.clI5Logo as any)?.sourceUrl || null,
      icon: LayoutGrid
    });
  }
  if (data?.clCl6Name) {
    dynamicItems.push({
      name: data.clCl6Name,
      logo: data.clCl6LogoUrl || (data.clCl6Logo as any)?.node?.sourceUrl || (data.clCl6Logo as any)?.sourceUrl || null,
      icon: LayoutGrid
    });
  }

  const clients = dynamicItems.length > 0 ? dynamicItems : [
    { name: "NEXACORE", icon: Cpu, logo: null },
    { name: "VIRTUSTREAM", icon: Cloud, logo: null },
    { name: "OMNICLOUD", icon: Database, logo: null },
    { name: "LUMINA", icon: Globe, logo: null },
    { name: "QUANTUM", icon: Layers, logo: null },
    { name: "TERRAFORMA", icon: Shield, logo: null },
    { name: "ASTRA", icon: Zap, logo: null },
    { name: "ZENITH", icon: Activity, logo: null },
    { name: "APEX", icon: Anchor, logo: null },
    { name: "VELOCITY", icon: Compass, logo: null },
    { name: "ORION", icon: Box, logo: null },
    { name: "PULSE", icon: Circle, logo: null },
  ];

  const sectionTitle = data?.clTitle || "Our Trusted Clients";

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col items-center text-center space-y-2">
          <h2 className="text-3xl font-light text-[#11253e] tracking-tight">{sectionTitle}</h2>
        </div>
      </div>

      {/* Desktop/Tablet Infinite Scroll */}
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* Double the array for seamless looping */}
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div 
              key={index} 
              className="inline-flex items-center space-x-3 px-12 py-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default group"
            >
              {client.logo ? (
                <img src={client.logo} alt={client.name} className="h-8 w-auto object-contain" />
              ) : (
                <client.icon className="w-8 h-8 text-[#11253e] group-hover:text-[#f99d1c] transition-colors" />
              )}
              <span className="text-[#11253e] font-black tracking-[0.2em] text-sm">{client.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-8 text-center lg:hidden">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">Swipe to explore</p>
      </div>
    </section>
  );
}
