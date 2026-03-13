"use client";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { MapPin, Calendar, Clock } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Nabhira Architecture Summit 2026",
    date: "March 15-16, 2026",
    time: "09:00 AM - 06:00 PM",
    location: "Marina Bay Financial Centre, Singapore",
    type: "Flagship Event",
    image: "https://images.unsplash.com/photo-1561489411-c0ce86e994bb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Webinar: Architecting Autonomous Enterprises",
    date: "Feb 28, 2026",
    time: "03:00 PM - 04:30 PM",
    location: "Online / Virtual",
    type: "Webinar",
    image: "https://images.unsplash.com/photo-1615852993296-b42d4dbb5555?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Cloud & Data Expo 2026",
    date: "April 05, 2026",
    time: "10:00 AM - 05:00 PM",
    location: "ExCeL London, UK",
    type: "Exhibition",
    image: "https://images.unsplash.com/photo-1598209494655-b8e249540dfc?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Events({ wordpressData }: any) {
  useEffect(() => {
    document.title = "Events | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Events Hero */}
      <section className="relative h-[300px] overflow-hidden flex items-center">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1670420421505-804c23232098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHN0YWdlJTIwYmx1ZSUyMGxpZ2h0aW5nJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzE5MDA3OTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Nabhira Events"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#11253e]/80"></div>
          </div>
          <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex items-center">
            <div>
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
                Connect & <span className="text-[#f99d1c]">Collaborate</span>
              </h1>
              <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
                Join us at global summits and specialized webinars to redefine what's possible.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, idx) => (
                <Motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex flex-col bg-[#f8f9fa] border border-gray-100 overflow-hidden rounded-sm"
                >
                  <div className="h-48 overflow-hidden">
                    <Link href={`/resources/events/${event.id}`} className="block relative w-full h-full">
                      <Image 
                        src={event.image} 
                        alt={event.title} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </Link>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-[#11253e]/5 text-[#11253e] text-[9px] font-bold uppercase tracking-widest">{event.type}</span>
                    </div>
                    <Link href={`/resources/events/${event.id}`}>
                      <h3 className="text-[#11253e] text-xl font-bold mb-6 group-hover:text-[#f99d1c] transition-colors leading-snug">
                        {event.title}
                      </h3>
                    </Link>
                    <div className="space-y-3 mt-auto">
                      <div className="flex items-center gap-3 text-xs text-[#11253e]">
                        <Calendar size={14} className="text-[#f99d1c]" /> {event.date}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-[#11253e]">
                        <Clock size={14} className="text-[#f99d1c]" /> {event.time}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-[#11253e]">
                        <MapPin size={14} className="text-[#f99d1c]" /> {event.location}
                      </div>
                    </div>
                    <Link href={`/resources/events/${event.id}`}
                      className="w-full mt-8 border border-[#11253e]/10 py-3 text-[10px] font-bold uppercase tracking-widest text-[#11253e] hover:bg-[#f99d1c] hover:border-[#f99d1c] hover:text-white transition-all text-center"
                    >
                      Register Now
                    </Link>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>
    </>
  );
}