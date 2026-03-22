"use client";

import React, { useEffect } from "react";
import { motion as Motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { MapPin, Calendar, Clock, ArrowRight } from "lucide-react";
import {
  renderHeroTitle,
  formatQuotesToBold,
  formatEventDate,
  formatEventRange,
} from "../../lib/utils";

export default function Events({
  wordpressData,
  eventsData = [],
  globalSettings,
}: any) {
  useEffect(() => {
    document.title = "Events | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

  const { heroSlides } = globalSettings || {};
  const { heroS1Title, heroS1Desc, heroS1Image, heroS1ImageUrl } =
    heroSlides || {};

  const bannerImage =
    heroS1ImageUrl ||
    heroS1Image?.node?.sourceUrl ||
    wordpressData?.featuredImage?.node?.sourceUrl ||
    "https://images.unsplash.com/photo-1670420421505-804c23232098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHN0YWdlJTIwYmx1ZSUyMGxpZ2h0aW5nJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzE5MDA3OTN8MA&ixlib=rb-4.1.0&q=80&w=1080";

  const bannerTitle =
    heroS1Title || wordpressData?.title || "Connect & Collaborate";
  const bannerExcerpt =
    heroS1Desc ||
    wordpressData?.excerpt?.replace(/<[^>]*>?/gm, "") ||
    "Join us at global summits and specialized webinars to redefine what's possible.";

  const formatTime = (dateString: string) => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "";
      return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    } catch (e) {
      return "";
    }
  };

  return (
    <>
      {/* Events Hero */}
      <section className="relative h-[300px] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={bannerImage}
            alt="Nabhira Events"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#11253e]/80"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex items-center">
          <div>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
              {renderHeroTitle(bannerTitle)}
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-[22px] font-light leading-relaxed max-w-2xl drop-shadow-sm mb-8 md:mb-12">
              {renderHeroTitle(bannerExcerpt, "text-white/90")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.map((event: any, idx: number) => {
              const isExternal = !!event.externalUrl;
              const eventLink = isExternal
                ? event.externalUrl
                : `/resources/events/${event.slug}`;

              const displayDate = formatEventRange(
                event.startDate || event.date,
                event.endDate,
              );

              const displayTime =
                event.startDate && event.endDate
                  ? `${formatTime(event.startDate)} - ${formatTime(event.endDate)}`
                  : formatTime(event.startDate);

              return (
                <Motion.div
                  key={event.id || idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex flex-col bg-white border border-gray-100 overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-56 overflow-hidden">
                    <Link
                      href={eventLink}
                      target={isExternal ? "_blank" : "_self"}
                      className="block relative w-full h-full"
                    >
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
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-gray-100 text-[#11253e] text-[9px] font-bold uppercase tracking-widest rounded-sm">
                        {event.eventType}
                      </span>
                    </div>
                    <Link
                      href={eventLink}
                      target={isExternal ? "_blank" : "_self"}
                    >
                      <h3 className="text-[#11253e] text-xl font-bold mb-6 group-hover:text-[#f99d1c] transition-colors leading-tight line-clamp-2 min-h-12">
                        {event.title}{" "}
                        {isExternal && (
                          <span className="inline-block align-middle text-[10px] text-gray-400 font-normal border border-gray-200 px-1 rounded-sm tracking-tight normal-case opacity-0 group-hover:opacity-100 transition-opacity">
                            {(() => {
                              try {
                                return new URL(
                                  event.externalUrl,
                                ).hostname.replace("www.", "");
                              } catch (e) {
                                return "External";
                              }
                            })()}
                          </span>
                        )}
                      </h3>
                    </Link>
                    <div className="space-y-4 mt-auto">
                      <div className="flex items-center gap-3 text-[13px] text-[#11253e]">
                        <Calendar size={15} className="text-[#f99d1c]" />{" "}
                        {displayDate || "-"}
                      </div>
                      <div className="flex items-center gap-3 text-[13px] text-[#11253e]">
                        <Clock size={15} className="text-[#f99d1c]" />{" "}
                        {displayTime || "-"}
                      </div>
                      <div className="flex items-center gap-3 text-[13px] text-[#11253e]">
                        <MapPin size={15} className="text-[#f99d1c]" />{" "}
                        {event.location || "-"}
                      </div>
                    </div>
                    <Link
                      href={eventLink}
                      target={isExternal ? "_blank" : "_self"}
                      className="w-full mt-8 border border-[#11253e]/10 py-3 text-[10px] font-bold uppercase tracking-widest text-[#11253e] hover:bg-[#f99d1c] hover:border-[#f99d1c] hover:text-white transition-all text-center"
                    >
                      {event.buttonText ||
                        (isExternal ? "Visit Event Site" : "Register Now")}
                    </Link>
                  </div>
                </Motion.div>
              );
            })}
          </div>
          {eventsData.length === 0 && (
            <div className="text-center py-24 text-gray-500">
              No upcoming events scheduled at this time. Check back soon!
            </div>
          )}
        </div>
      </section>
    </>
  );
}
