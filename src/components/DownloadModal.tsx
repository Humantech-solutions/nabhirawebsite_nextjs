"use client";

import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import { X, FileText, ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentName: string;
}

export function DownloadModal({ isOpen, onClose, documentName }: DownloadModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      if (formData.phone) {
        payload.append("phone", formData.phone);
      }
      payload.append("documentName", documentName);
      payload.append("project", "hutech");
      
      const dummyBlob = new Blob(["This is a placeholder for the requested document: " + documentName], { type: "application/pdf" });
      payload.append("document", dummyBlob, `${documentName.replace(/\s+/g, '-')}.pdf`);

      const response = await fetch("https://apis.admin.hutechsolutions.in/api/documents/request", {
        method: "POST",
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Failed to request document");
      }

      toast.success("Document requested successfully. Check your inbox.");
      setFormData({ name: "", email: "", phone: "" });
      onClose();
    } catch (error) {
      console.error("Error requesting document:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0a111a]/40 backdrop-blur-md z-[100]"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <Motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[440px] bg-white rounded-[24px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden pointer-events-auto relative"
            >
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 p-2 rounded-full transition-colors duration-200 z-10"
                aria-label="Close modal"
              >
                <X size={18} strokeWidth={2.5} />
              </button>

              <div className="px-8 pt-10 pb-8">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-16 h-16 bg-[#f99d1c]/10 rounded-2xl flex items-center justify-center mb-5 ring-4 ring-white shadow-sm">
                    <FileText size={28} className="text-[#f99d1c]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[22px] font-semibold text-gray-900 tracking-tight leading-tight">
                    Get the Document
                  </h3>
                  <p className="text-[14px] text-gray-500 mt-2 max-w-[280px] leading-relaxed">
                    {documentName}
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="block text-[13px] font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 px-4 py-3.5 rounded-xl text-[14px] placeholder:text-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#f99d1c]/20 focus:border-[#f99d1c] transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[13px] font-medium text-gray-700">
                      Work Email
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 px-4 py-3.5 rounded-xl text-[14px] placeholder:text-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#f99d1c]/20 focus:border-[#f99d1c] transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="block text-[13px] font-medium text-gray-700">
                        Phone Number
                      </label>
                      <span className="text-[12px] text-gray-400">Optional</span>
                    </div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 px-4 py-3.5 rounded-xl text-[14px] placeholder:text-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#f99d1c]/20 focus:border-[#f99d1c] transition-all duration-200"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#11253e] hover:bg-[#1a3a60] text-white py-4 px-6 rounded-xl text-[14px] font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send to my email
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200 opacity-70 group-hover:opacity-100" />
                        </>
                      )}
                    </button>
                  </div>
                  
                  <p className="text-center text-[12px] text-gray-400 pt-2 font-light">
                    Your information is secure and encrypted.
                  </p>
                </form>
              </div>
            </Motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
