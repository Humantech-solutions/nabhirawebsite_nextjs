"use client";

import React from "react";
import { motion as Motion } from "motion/react";
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
  Circle
} from "lucide-react";

const clients = [
  { name: "NEXACORE", icon: Cpu },
  { name: "VIRTUSTREAM", icon: Cloud },
  { name: "OMNICLOUD", icon: Database },
  { name: "LUMINA", icon: Globe },
  { name: "QUANTUM", icon: Layers },
  { name: "TERRAFORMA", icon: Shield },
  { name: "ASTRA", icon: Zap },
  { name: "ZENITH", icon: Activity },
  { name: "APEX", icon: Anchor },
  { name: "VELOCITY", icon: Compass },
  { name: "ORION", icon: Box },
  { name: "PULSE", icon: Circle },
];

export function Clients({ data }: any) {
  // Try to use WordPress data first
  const dynamicClients = [];
  if (data) {
    if (data.clI1LogoUrl || data.clI1Logo?.node?.sourceUrl || data.clI1Name) {
      dynamicClients.push({ name: data.clI1Name, logo: data.clI1LogoUrl || data.clI1Logo?.node?.sourceUrl });
    }
    if (data.clI2LogoUrl || data.clI2Logo?.node?.sourceUrl || data.clI2Name) {
      dynamicClients.push({ name: data.clI2Name, logo: data.clI2LogoUrl || data.clI2Logo?.node?.sourceUrl });
    }
    if (data.clI3LogoUrl || data.clI3Logo?.node?.sourceUrl || data.clI3Name) {
      dynamicClients.push({ name: data.clI3Name, logo: data.clI3LogoUrl || data.clI3Logo?.node?.sourceUrl });
    }
    if (data.clI4LogoUrl || data.clI4Logo?.node?.sourceUrl || data.clI4Name) {
      dynamicClients.push({ name: data.clI4Name, logo: data.clI4LogoUrl || data.clI4Logo?.node?.sourceUrl });
    }
    if (data.clI5LogoUrl || data.clI5Logo?.node?.sourceUrl || data.clI5Name) {
      dynamicClients.push({ name: data.clI5Name, logo: data.clI5LogoUrl || data.clI5Logo?.node?.sourceUrl });
    }
    if (data.clCl6LogoUrl || data.clCl6Logo?.node?.sourceUrl || data.clCl6Name) {
      dynamicClients.push({ name: data.clCl6Name, logo: data.clCl6LogoUrl || data.clCl6Logo?.node?.sourceUrl });
    }
  }

  const hasDynamicClients = dynamicClients.length > 0;
  const renderClients = hasDynamicClients ? dynamicClients : clients;

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col items-center text-center space-y-2">
          {/* <span className="text-[#f99d1c] text-[10px] font-black tracking-[0.4em] uppercase">OUR GLOBAL PARTNERS</span> */}
          <h2 className="text-3xl font-light text-[#11253e] tracking-tight">{data?.clTitle || "Our Trusted Clients"}</h2>
        </div>
      </div>

      {/* Desktop/Tablet Infinite Scroll */}
      <div className="relative flex overflow-hidden">
        <Motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* Double the array for seamless looping */}
          {[...renderClients, ...renderClients, ...renderClients].map((client, index) => (
            <div 
              key={index} 
              className="inline-flex items-center space-x-3 px-12 py-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default group"
            >
              {hasDynamicClients ? (
                client.logo ? <img src={client.logo} alt={client.name} className="h-8 object-contain" /> : null
              ) : (
                <client.icon className="w-8 h-8 text-[#11253e] group-hover:text-[#f99d1c] transition-colors" />
              )}
              <span className="text-[#11253e] font-black tracking-[0.2em] text-sm">{client.name}</span>
            </div>
          ))}
        </Motion.div>
      </div>

      {/* Mobile Hint - although it's automatic, we ensure the container allows touch scroll if needed, 
          but motion handles the loop. In mobile, users often want to swipe. 
          The motion animation above is continuous, but let's add a swipable version or just keep it for mobile too.
          Tailwind 'overflow-x-auto' can be added for manual swipe on mobile if preferred. */}
      <div className="mt-8 text-center lg:hidden">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">Swipe to explore</p>
      </div>
    </section>
  );
}