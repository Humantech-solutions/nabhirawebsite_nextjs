"use client";

import { motion as Motion } from "motion/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Mail, Phone, MapPin, Send, Globe, MessageSquare } from "lucide-react";
import { toast } from "sonner";

export default function Contact({ wordpressData }: any) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Message sent successfully! Our team will reach out shortly.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactDetails = [
    {
      icon: <MapPin className="text-[#f99d1c]" size={24} />,
      title: "Global Headquarters",
      details: ["12th Floor, One World Centre", "Senapati Bapat Marg, Lower Parel", "Mumbai, Maharashtra 400013, India"],
    },
    {
      icon: <Mail className="text-[#f99d1c]" size={24} />,
      title: "Email Us",
      details: ["connect@nabhira.com", "careers@nabhira.com"],
    },
    {
      icon: <Phone className="text-[#f99d1c]" size={24} />,
      title: "Call Us",
      details: ["+91 (22) 6123-4567", "+91 (22) 6123-4568"],
    }
  ];

  return (
    <>
      {/* Contact Hero */}
      <section className="relative h-[400px] md:h-[520px] flex items-center overflow-hidden bg-[#11253e]">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1769146109206-e87b458649a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMG9mZmljZSUyMGludGVyaW9yJTIwd29ya3NwYWNlJTIwYXJjaGl0ZWN0dXJhbHxlbnwxfHx8fDE3NzE4OTk4OTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Nabhira Contact"
            className="w-full h-full object-cover opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11253e] via-[#11253e]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#11253e] via-transparent to-transparent"></div>
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <nav className="flex items-center space-x-3 text-[11px] md:text-[13px] font-medium tracking-[-0.02em] mb-4">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <span className="text-white/30 font-light">&gt;</span>
              <span className="text-[#f99d1c] uppercase tracking-widest">Contact Us</span>
            </nav>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-medium leading-tight md:leading-[1.05] tracking-[-0.02em] drop-shadow-sm mb-6 md:mb-8">
              Start the <br /><span className="text-white/100">Conversation</span>
            </h1>
            <p className="text-white/70 text-lg md:text-[22px] font-light max-w-2xl leading-relaxed mb-10 border-l-2 border-[#f99d1c] pl-6">
              We would love to hear from you.
            </p>
          </Motion.div>
        </div>
      </section>

        {/* Contact Content */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              
              {/* Contact Information */}
              <div>
                <div className="mb-12">
                  <h2 className="text-[#11253e] text-3xl md:text-4xl font-light mb-6 tracking-tight">
                    Get in <span className="font-bold">Touch</span>
                  </h2>
                  <p className="text-[#11253e] font-light leading-relaxed">
                    Whether you're looking for cloud transformation, AI solutions, or global digital strategy, our architects are ready to assist.
                  </p>
                </div>

                <div className="space-y-12">
                  {contactDetails.map((item, idx) => (
                    <Motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-6"
                    >
                      <div className="shrink-0 w-14 h-14 bg-[#11253e]/5 flex items-center justify-center rounded-sm">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-[12px] font-bold text-[#11253e] uppercase tracking-[0.2em] mb-3">
                          {item.title}
                        </h4>
                        <div className="space-y-1">
                          {item.details.map((detail, i) => (
                            <p key={i} className="text-[#11253e] font-light text-[15px]">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Motion.div>
                  ))}
                </div>

                <div className="mt-16 pt-16 border-t border-gray-100">
                  <h4 className="text-[12px] font-bold text-[#11253e] uppercase tracking-[0.2em] mb-6">Connect Regionally</h4>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-[#11253e] font-bold text-sm mb-2">Middle East</h5>
                      <p className="text-[#11253e] font-light text-xs">Business Bay, Dubai, UAE</p>
                    </div>
                    <div>
                      <h5 className="text-[#11253e] font-bold text-sm mb-2">South East Asia</h5>
                      <p className="text-[#11253e] font-light text-xs">Marina Bay Financial Centre, Singapore</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-[#f8f9fa] p-8 md:p-12 border border-gray-100 rounded-sm">
                <h3 className="text-[#11253e] text-xl font-bold mb-8 flex items-center gap-3">
                  <MessageSquare size={20} className="text-[#f99d1c]" />
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[#11253e] uppercase tracking-widest">Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#f99d1c] transition-colors rounded-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[#11253e] uppercase tracking-widest">Email Address</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#f99d1c] transition-colors rounded-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#11253e] uppercase tracking-widest">Subject</label>
                    <input 
                      required
                      type="text" 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#f99d1c] transition-colors rounded-sm"
                      placeholder="Consultation Inquiry"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#11253e] uppercase tracking-widest">Message</label>
                    <textarea 
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#f99d1c] transition-colors rounded-sm resize-none"
                      placeholder="How can we help architect your future?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#11253e] hover:bg-[#1a3a60] text-white py-4 rounded-sm flex items-center justify-center gap-2 transition-all font-bold text-[12px] uppercase tracking-[0.2em] group disabled:opacity-70"
                  >
                    {isSubmitting ? "Architecting Response..." : (
                      <>
                        Send Message
                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence Map Placeholder */}
        <section className="h-[400px] bg-[#11253e] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#f99d1c] rounded-full animate-ping"></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#f99d1c] rounded-full animate-ping delay-75"></div>
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#f99d1c] rounded-full animate-ping delay-150"></div>
          </div>
          <div className="relative text-center z-10">
            <Globe className="text-[#f99d1c] w-12 h-12 mx-auto mb-6 opacity-80" />
            <h3 className="text-white text-2xl font-light tracking-tight">Global Presence, <span className="font-bold">Impact at Scale</span></h3>
            <p className="text-white/40 text-sm mt-2">Serving clients across 5+ countries through our specialized delivery centers.</p>
          </div>
        </section>
    </>
  );
}