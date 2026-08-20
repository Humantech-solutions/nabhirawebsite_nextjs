"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Twitter,
  Linkedin,
  Share2,
} from "lucide-react";
import { toast } from "sonner";
import { formatEventDate, formatEventRange } from "../../lib/utils";

const WhatsappIcon = ({ size = 16, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function EventDetail({
  wordpressData: event,
  eventsData = [],
}: any) {
  useEffect(() => {
    if (event) {
      document.title = `${event.title} | Hutech Solutions Technologies`;
      window.scrollTo(0, 0);
    }
  }, [event]);

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

  if (!event) {
    return (
      <div className="flex items-center justify-center bg-white py-24">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#11253e]">Event Not Found</h2>
          <Link
            href="/resources/events"
            className="text-[#f99d1c] font-bold mt-4 inline-block"
          >
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const hasStartTime = event.startDate && event.startDate.includes("T");
  const hasEndTime = event.endDate && event.endDate.includes("T");

  const displayTime =
    hasStartTime && hasEndTime
      ? `${formatTime(event.startDate)} - ${formatTime(event.endDate)}`
      : hasStartTime
      ? formatTime(event.startDate)
      : null;

  const displayDate = formatEventRange(
    event.startDate || event.date,
    event.endDate,
  );

  const upcomingEvents = (eventsData || [])
    .filter((e: any) => {
      if (e.slug === event.slug) return false;
      const eventDate = new Date(e.date || e.startDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset time to start of day for accurate date comparison
      return eventDate >= today;
    })
    .slice(0, 3);

  return (
    <>
      <main className="bg-white">
        {/* Header Section */}
        <section className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#11253e]/85 backdrop-blur-[2px]"></div>
          </div>

          <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
            <Link
              href="/resources/events"
              className="inline-flex items-center gap-2 text-[10px] font-bold text-[#f99d1c] uppercase tracking-widest mb-12 hover:opacity-70 transition-opacity"
            >
              <ArrowLeft size={14} /> Back to Events
            </Link>
            <div className="max-w-3xl space-y-6">
              <span className="px-3 py-1 bg-[#f99d1c] text-white text-[9px] font-bold uppercase tracking-widest">
                {event.eventType}
              </span>
              <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                {event.title}{" "}
                {event.externalUrl && (
                  <span className="inline-block align-middle text-white/50 text-xl md:text-2xl ml-4">
                    (
                    {(() => {
                      try {
                        return new URL(event.externalUrl).hostname.replace(
                          "www.",
                          "",
                        );
                      } catch (e) {
                        return "External Site";
                      }
                    })()}
                    )
                  </span>
                )}
              </h1>
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <Calendar size={18} className="text-[#f99d1c]" />
                  {displayDate || "-"}
                </div>
                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <Clock size={18} className="text-[#f99d1c]" />
                  {displayTime || "-"}
                </div>
                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <MapPin size={18} className="text-[#f99d1c]" />
                  {event.location || "-"}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Event Description Content Blocks */}
            <div className="lg:col-span-7 space-y-12">
              {(() => {
                const content =
                  event.content ||
                  event.excerpt ||
                  `
                  <h2>About the Event</h2>
                  <p>Our annual flagship summit bringing together the brightest minds in digital architecture. Join us for two days of intensive workshops, keynote sessions from industry titans, and networking opportunities that will shape the next decade of enterprise technology.</p>
                  <h3>Key Takeaways</h3>
                  <ul>
                    <li>Strategic roadmap for 2026 digital transformations</li>
                    <li>Exclusive access to proprietary architecture frameworks</li>
                    <li>One-on-one consulting with senior Hutech Solutions architects</li>
                    <li>Network with Fortune 500 technology leaders</li>
                  </ul>
                `;

                // Simple regex block parser to split content into manageable chunks
                const blocks =
                  content.match(/<(h[1-6]|p|ul)[^>]*>([\s\S]*?)<\/\1>/gi) || [];

                return blocks.map((block: string, index: number) => {
                  const tagMatch = block.match(/<(h[1-6]|p|ul)/i);
                  const tag = tagMatch ? tagMatch[1].toLowerCase() : "";
                  const innerHTML = block
                    .replace(/<[^>]+>/, "")
                    .replace(/<\/[^>]+>$/, "");

                  // Render block based on tag type to maintain the "Ready UI"
                  if (
                    tag === "h2" &&
                    innerHTML.toLowerCase().includes("about the event")
                  ) {
                    return (
                      <div key={index} className="space-y-6">
                        <h2 className="text-[#11253e] text-2xl font-bold uppercase tracking-tight">
                          About the Event
                        </h2>
                        <div className="w-12 h-1 bg-[#f99d1c]"></div>
                      </div>
                    );
                  }

                  if (tag.startsWith("h")) {
                    return (
                      <h3
                        key={index}
                        className="text-[#11253e] text-xl font-bold uppercase tracking-tight"
                      >
                        {innerHTML.replace(/<[^>]*>?/gm, "")}
                      </h3>
                    );
                  }

                  if (tag === "p") {
                    return (
                      <div
                        key={index}
                        className="text-[#11253e] text-lg font-light leading-relaxed prose max-w-none"
                        dangerouslySetInnerHTML={{ __html: innerHTML }}
                      />
                    );
                  }

                  if (tag === "ul") {
                    const items =
                      innerHTML.match(/<li[^>]*>(.*?)<\/li>/gi) || [];
                    return (
                      <div
                        key={index}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        {items.map((li: string, i: number) => (
                          <div key={i} className="flex gap-4 items-start">
                            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#f99d1c]/10 flex items-center justify-center">
                              <CheckCircle2
                                size={12}
                                className="text-[#f99d1c]"
                              />
                            </div>
                            <div
                              className="text-sm text-[#11253e]"
                              dangerouslySetInnerHTML={{
                                __html: li.replace(/<\/?li[^>]*>/g, ""),
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    );
                  }

                  return null;
                });
              })()}

              {event.externalUrl && (
                <div className="pt-8">
                  <Link
                    href={event.externalUrl}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#f99d1c] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#11253e] transition-colors"
                  >
                    Visit Official Event Site <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </div>

            {/* Event Sidebar */}
            <div className="lg:col-span-5">
              <div className="bg-[#f8f9fa] p-10 border border-gray-100 sticky top-32 space-y-12">
                {/* Event Details Summary */}
                <div className="space-y-6">
                  <h3 className="text-[#11253e] text-xl font-bold uppercase tracking-tight">
                    At a Glance
                  </h3>
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="mt-1 bg-white p-2 border border-gray-100 rounded shadow-sm">
                        <Calendar size={18} className="text-[#f99d1c]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          Date
                        </p>
                        <p className="text-sm text-[#11253e] font-medium">
                          {displayDate || "-"}
                        </p>
                      </div>
                    </div>

                    {displayTime && (
                      <div className="flex gap-4 items-start">
                        <div className="mt-1 bg-white p-2 border border-gray-100 rounded shadow-sm">
                          <Clock size={18} className="text-[#f99d1c]" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                            Time
                          </p>
                          <p className="text-sm text-[#11253e] font-medium">
                            {displayTime}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-4 items-start">
                      <div className="mt-1 bg-white p-2 border border-gray-100 rounded shadow-sm">
                        <MapPin size={18} className="text-[#f99d1c]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          Location
                        </p>
                        <p className="text-sm text-[#11253e] font-medium">
                          {event.location || "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Share Event */}
                <div className="pt-8 border-t border-gray-200">
                  <h3 className="text-[#11253e] text-[10px] font-bold uppercase tracking-widest mb-6">
                    Share This Event
                  </h3>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          window.open(
                            `https://api.whatsapp.com/send?text=${encodeURIComponent(event.title + " - " + window.location.href)}`,
                            "_blank",
                          );
                        }
                      }}
                      className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#11253e] hover:border-[#f99d1c] hover:text-[#f99d1c] transition-colors shadow-sm"
                      title="Share on WhatsApp"
                    >
                      <WhatsappIcon size={16} />
                    </button>
                    <button
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          window.open(
                            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(event.title)}`,
                            "_blank",
                          );
                        }
                      }}
                      className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#11253e] hover:border-[#f99d1c] hover:text-[#f99d1c] transition-colors shadow-sm"
                      title="Share on LinkedIn"
                    >
                      <Linkedin size={16} />
                    </button>
                    <button
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          if (navigator.share) {
                            navigator.share({
                              title: event.title,
                              url: window.location.href,
                            });
                          } else {
                            navigator.clipboard.writeText(window.location.href);
                            toast.success("Link copied!");
                          }
                        }
                      }}
                      className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#11253e] hover:border-[#f99d1c] hover:text-[#f99d1c] transition-colors shadow-sm"
                      title="Share Link"
                    >
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>

                {/* Upcoming Events */}
                {upcomingEvents.length > 0 && (
                  <div className="pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-[#11253e] text-[10px] font-bold uppercase tracking-widest">
                        Upcoming Events
                      </h3>
                      <Link
                        href="/resources/events"
                        className="text-[#f99d1c] text-[9px] font-bold uppercase tracking-widest hover:underline"
                      >
                        View All
                      </Link>
                    </div>
                    <div className="space-y-4">
                      {upcomingEvents.map((upcomingEvent: any, idx: number) => {
                        const dateObj = new Date(
                          upcomingEvent.startDate || upcomingEvent.date,
                        );
                        const day = isNaN(dateObj.getTime())
                          ? "--"
                          : dateObj.getDate().toString().padStart(2, "0");
                        const month = isNaN(dateObj.getTime())
                          ? "---"
                          : dateObj
                              .toLocaleString("en-US", { month: "short" })
                              .toUpperCase();
                        const fullDate = isNaN(dateObj.getTime())
                          ? ""
                          : dateObj.toLocaleDateString("en-US", {
                              weekday: "short",
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            });

                        const bgColor =
                          idx % 2 === 0 ? "bg-[#11253e]" : "bg-[#f99d1c]";

                        return (
                          <Link
                            href={`/resources/events/${upcomingEvent.slug}`}
                            key={upcomingEvent.id}
                            className="flex bg-white border border-gray-100 hover:shadow-md transition-all group overflow-hidden h-28"
                          >
                            <div
                              className={`${bgColor} w-[80px] flex-shrink-0 flex flex-col items-center justify-center text-white transition-colors`}
                            >
                              <span className="text-3xl font-light leading-none tracking-tight">
                                {day}
                              </span>
                              <span className="text-[10px] font-bold tracking-widest mt-1">
                                {month}
                              </span>
                            </div>
                            <div className="p-4 flex-grow flex flex-col justify-center relative overflow-hidden">
                              {/* Hover Background Image */}
                              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {upcomingEvent.image && (
                                  <ImageWithFallback
                                    src={upcomingEvent.image}
                                    alt={upcomingEvent.title}
                                    className="w-full h-full object-cover"
                                  />
                                )}
                                <div className="absolute inset-0 bg-[#11253e]/90"></div>
                              </div>

                              {/* Content */}
                              <div className="relative z-10">
                                <h4 className="text-[#11253e] group-hover:text-white text-sm font-bold leading-tight transition-colors line-clamp-2 pr-6">
                                  {upcomingEvent.title}
                                </h4>
                                <div className="mt-2 flex items-center gap-3 overflow-hidden">
                                  {fullDate && (
                                    <p className="text-[9px] text-gray-500 group-hover:text-white/80 uppercase tracking-widest flex items-center gap-1 flex-shrink-0">
                                      <Calendar size={10} className="text-[#f99d1c]" /> {fullDate}
                                    </p>
                                  )}
                                  {upcomingEvent.location && (
                                    <p className="text-[9px] text-gray-500 group-hover:text-white/80 uppercase tracking-widest truncate flex items-center gap-1 min-w-0">
                                      <MapPin size={10} className="text-[#f99d1c] flex-shrink-0" /> <span className="truncate">{upcomingEvent.location}</span>
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Tiny arrow for hover state */}
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#f99d1c]">
                                <ArrowRight size={14} />
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
