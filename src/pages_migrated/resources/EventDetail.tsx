"use client";

import React, { useState, useEffect } from "react";
import { motion as Motion } from "motion/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Calendar, Clock, MapPin, ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const events = [
  {
    id: 1,
    title: "Nabhira Architecture Summit 2026",
    date: "March 15-16, 2026",
    time: "09:00 AM - 06:00 PM",
    location: "Marina Bay Financial Centre, Singapore",
    type: "Flagship Event",
    description: "Our annual flagship summit bringing together the brightest minds in digital architecture. Join us for two days of intensive workshops, keynote sessions from industry titans, and networking opportunities that will shape the next decade of enterprise technology.",
    image: "https://images.unsplash.com/photo-1561489411-c0ce86e994bb?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    title: "Webinar: Architecting Autonomous Enterprises",
    date: "Feb 28, 2026",
    time: "03:00 PM - 04:30 PM",
    location: "Online / Virtual",
    type: "Webinar",
    description: "Explore the transition from automated to autonomous enterprises. This webinar dives deep into Agentic AI frameworks and how they integrate into existing legacy architectures to drive unprecedented efficiency.",
    image: "https://images.unsplash.com/photo-1615852993296-b42d4dbb5555?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    title: "Cloud & Data Expo 2026",
    date: "April 05, 2026",
    time: "10:00 AM - 05:00 PM",
    location: "ExCeL London, UK",
    type: "Exhibition",
    description: "Visit Nabhira Technologies at booth #442. We will be showcasing our latest breakthroughs in multi-cloud mesh architectures and real-time data fabric implementations. Exclusive live demos and consulting sessions available.",
    image: "https://images.unsplash.com/photo-1598209494655-b8e249540dfc?auto=format&fit=crop&q=80&w=1200"
  }
];

type RegistrationForm = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  interests: string;
};

export default function EventDetail({ wordpressData }: any) {
  const { id } = useParams();
  const event = events.find(e => e.id === Number(id));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegistrationForm>();

  useEffect(() => {
    if (event) {
      document.title = `${event.title} | Registration | Nabhira`;
      window.scrollTo(0, 0);
    }
  }, [event]);

  const onSubmit = async (data: RegistrationForm) => {
    setIsSubmitted(false);
    try {
      const response = await fetch("http://localhost:8000/api/event-registration/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          eventTitle: event.title,
          pageTitle: document.title,
          pageUrl: window.location.href
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Registration Successful!");
      } else {
        toast.error(result.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Unable to connect to the server.");
    }
  };

  if (!event) {
    return (
      <div className="flex items-center justify-center bg-white py-24">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#11253e]">Event Not Found</h2>
          <Link href="/resources/events" className="text-[#f99d1c] font-bold mt-4 inline-block">Back to Events</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="">
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
            <Link href="/resources/events" className="inline-flex items-center gap-2 text-[10px] font-bold text-[#f99d1c] uppercase tracking-widest mb-12 hover:opacity-70 transition-opacity">
              <ArrowLeft size={14} /> Back to Events
            </Link>
            <div className="max-w-3xl space-y-6">
              <span className="px-3 py-1 bg-[#f99d1c] text-white text-[9px] font-bold uppercase tracking-widest">{event.type}</span>
              <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                {event.title}
              </h1>
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <Calendar size={18} className="text-[#f99d1c]" /> {event.date}
                </div>
                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <Clock size={18} className="text-[#f99d1c]" /> {event.time}
                </div>
                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <MapPin size={18} className="text-[#f99d1c]" /> {event.location}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Event Description */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <h2 className="text-[#11253e] text-2xl font-bold uppercase tracking-tight">About the Event</h2>
                <div className="w-12 h-1 bg-[#f99d1c]"></div>
                <p className="text-[#11253e] text-lg font-light leading-relaxed">{event.description}</p>
              </div>

              <div className="space-y-8">
                <h3 className="text-[#11253e] text-xl font-bold uppercase tracking-tight">Key Takeaways</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Strategic roadmap for 2026 digital transformations",
                    "Exclusive access to proprietary architecture frameworks",
                    "One-on-one consulting with senior Nabhira architects",
                    "Network with Fortune 500 technology leaders"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#f99d1c]/10 flex items-center justify-center">
                        <CheckCircle2 size={12} className="text-[#f99d1c]" />
                      </div>
                      <p className="text-sm text-[#11253e]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="lg:col-span-5">
              <div className="bg-[#f8f9fa] p-10 border border-gray-100 sticky top-32">
                {isSubmitted ? (
                  <Motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-[#11253e] text-2xl font-bold">Registration Confirmed</h3>
                    <p className="text-[#11253e] text-sm font-light">
                      Thank you for registering. A confirmation email with further details has been sent to your inbox.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.2em] border-b border-[#f99d1c]"
                    >
                      Register another attendee
                    </button>
                  </Motion.div>
                ) : (
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3 className="text-[#11253e] text-xl font-bold uppercase tracking-tight">Reserve Your Spot</h3>
                      <p className="text-xs text-[#11253e] uppercase tracking-widest font-bold">Limited capacity available</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-[#11253e] uppercase tracking-widest">First Name</label>
                          <input 
                            {...register("firstName", { required: true })}
                            className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#f99d1c] transition-colors"
                            placeholder="John"
                          />
                          {errors.firstName && <span className="text-[9px] text-red-500 uppercase font-bold tracking-tighter flex items-center gap-1 mt-1"><AlertCircle size={10} /> Required</span>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-[#11253e] uppercase tracking-widest">Last Name</label>
                          <input 
                            {...register("lastName", { required: true })}
                            className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#f99d1c] transition-colors"
                            placeholder="Doe"
                          />
                          {errors.lastName && <span className="text-[9px] text-red-500 uppercase font-bold tracking-tighter flex items-center gap-1 mt-1"><AlertCircle size={10} /> Required</span>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-[#11253e] uppercase tracking-widest">Corporate Email</label>
                        <input 
                          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                          className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#f99d1c] transition-colors"
                          placeholder="j.doe@company.com"
                        />
                        {errors.email && <span className="text-[9px] text-red-500 uppercase font-bold tracking-tighter flex items-center gap-1 mt-1"><AlertCircle size={10} /> Valid corporate email required</span>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-[#11253e] uppercase tracking-widest">Company</label>
                        <input 
                          {...register("company", { required: true })}
                          className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#f99d1c] transition-colors"
                          placeholder="Organization Name"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-[#11253e] uppercase tracking-widest">Areas of Interest</label>
                        <select 
                          {...register("interests")}
                          className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#f99d1c] transition-colors appearance-none"
                        >
                          <option value="">Select interest...</option>
                          <option value="ai">Agentic AI</option>
                          <option value="cloud">Cloud Sovereignty</option>
                          <option value="data">Data Fabric</option>
                          <option value="consulting">Architecture Consulting</option>
                        </select>
                      </div>

                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#11253e] text-white py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#f99d1c] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Processing...
                          </>
                        ) : "Complete Registration"}
                      </button>
                      
                      <p className="text-[9px] text-gray-400 text-center uppercase tracking-widest leading-relaxed">
                        By registering, you agree to our terms of service and privacy architecture.
                      </p>
                    </form>
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