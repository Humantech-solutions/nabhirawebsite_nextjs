"use client";
import React, { useEffect, useState } from "react";
import { motion as Motion } from "motion/react";
import Link from "next/link";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { DownloadModal } from "../../components/DownloadModal";
import { GraduationCap, BookOpen, Brain, CheckCircle2, Users, FileText, BarChart3, Lock, Sparkles, MessageSquare, ClipboardList, Eye, Target, Zap, Shield, ArrowRight, Box, Settings } from "lucide-react";

export default function AILMSSolution() {
  useEffect(() => {
    document.title = "AI-Powered LMS | Hutech Solutions Technologies";
    window.scrollTo(0, 0);
  }, []);

  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-[#11253e] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f99d1c1a_0%,transparent_70%)]"></div>
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(249, 157, 28, 0.3) 1px, transparent 1px)`,
              backgroundSize: '32px 32px'
            }}
          ></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 py-20 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-5 py-2">
                  <GraduationCap size={14} className="text-[#f99d1c]" />
                  <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">WHAT WE OFFER</span>
                </div>

                <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
                  AI Powered Learning<br />
                  <span className="text-[#f99d1c]">Management System</span>
                </h1>

                <p className="text-white/90 text-xl font-light leading-relaxed max-w-2xl">
                  Leveraging Artificial Intelligence to modernize digital education infrastructure and transform learning experiences.
                </p>

                <div className="flex flex-wrap gap-6 pt-4">
                  <Link href="/contact">
                    <button className="bg-[#f99d1c] text-white px-10 py-5 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#11253e] transition-all">
                      REQUEST DEMO
                    </button>
                  </Link>
                </div>
              </Motion.div>
            </div>

            {/* Stats Panel */}
            <div className="lg:col-span-5 w-full">
              <Motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white p-8 md:p-10 rounded-sm space-y-8 shadow-2xl border border-gray-100"
              >
                <div className="space-y-4">
                  <div className="w-16 h-1 bg-[#f99d1c]"></div>
                  <h3 className="text-[#11253e] text-2xl font-bold tracking-tight">Proven Impact</h3>
                </div>

                <div className="space-y-6">
                  {[
                    { stat: "80%", label: "Faster course creation" },
                    { stat: "60%", label: "Admin time saved" },
                    { stat: "95%", label: "Student engagement boost" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="w-2 h-2 bg-[#f99d1c] rounded-full shrink-0 mt-3"></div>
                      <div className="space-y-1">
                        <p className="text-[#f99d1c] text-3xl md:text-4xl font-extrabold tracking-tight">{item.stat}</p>
                        <p className="text-[#11253e] text-base font-bold">{item.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-4 py-2 mb-8">
              <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">AI-First Learning Platform</span>
            </div>
            <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight mb-6">
              Intelligent academic ecosystem for modern education
            </h2>
            <div className="w-24 h-1 bg-[#f99d1c] mx-auto mb-8"></div>
            <p className="text-[#11253e]/80 text-xl font-light leading-relaxed mb-6">
              Hutech Solutions LMS is an AI-powered learning management system designed to support modern digital education environments. The platform integrates artificial intelligence into academic workflows to assist educators, automate institutional management, and enhance student learning experiences.
            </p>
            <p className="text-[#11253e]/80 text-xl font-light leading-relaxed">
              The system leverages advanced AI technologies including GPT-4o, Gemini 2.0 Flash, and DALL-E 3 to generate structured educational materials, assessments, and visual learning resources within a unified digital ecosystem.
            </p>
          </Motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-4 py-2 mb-8">
              <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">CHALLENGES</span>
            </div>
            <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight mb-6">
              Education challenges we solve
            </h2>
            <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
          </Motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="text-[#f99d1c]" size={32} />,
                title: "AI Generated Questions",
                description: "Educational institutions face challenges with repetitive questions, inconsistent difficulty levels, or questions not properly aligned with the course syllabus."
              },
              {
                icon: <Eye className="text-[#f99d1c]" size={32} />,
                title: "AI Proctoring",
                description: "Online examinations require reliable monitoring systems to ensure academic integrity and detect suspicious behavior fairly during remote exams."
              },
              {
                icon: <Users className="text-[#f99d1c]" size={32} />,
                title: "Administrative Setup Complexity",
                description: "Managing institutional structures such as departments, teachers, students, and courses becomes complex within traditional learning platforms."
              },
              {
                icon: <Zap className="text-[#f99d1c]" size={32} />,
                title: "Prompt-Based Management",
                description: "Creating departments, onboarding teachers, registering students, and configuring course structures typically require manual processes."
              },
              {
                icon: <MessageSquare className="text-[#f99d1c]" size={32} />,
                title: "Chatbot Automation",
                description: "Teachers, administrators, and students require AI-powered assistance while navigating academic platforms instead of manual support."
              },
              {
                icon: <BarChart3 className="text-[#f99d1c]" size={32} />,
                title: "Result Management System",
                description: "Institutions struggle to organize academic results, generate student performance reports, and maintain transparent evaluation workflows."
              }
            ].map((challenge, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 border-l-4 border-[#f99d1c] shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 bg-gray-50 border border-gray-200 flex items-center justify-center mb-6 group-hover:border-[#f99d1c] transition-colors">
                  {challenge.icon}
                </div>
                <h3 className="text-[#11253e] text-xl font-bold tracking-tight mb-4">{challenge.title}</h3>
                <p className="text-[#11253e]/70 font-light leading-relaxed">{challenge.description}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-24 bg-[#11253e] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(249, 157, 28, 0.6) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight">
                Our Solution
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
              <p className="text-white/90 text-xl font-light leading-relaxed">
                AI Powered Learning Management Platform
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <p className="text-white text-lg font-light leading-relaxed">
                  Nabhira LMS introduces a unified intelligence layer that integrates artificial intelligence across the entire academic workflow. Educators and administrators can access AI-powered capabilities within a single platform.
                </p>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                  The solution centralizes institutional operations while allowing each department and faculty member to function independently within a controlled framework. Educators gain full visibility into student progress, course effectiveness, and engagement through real-time AI analytics.
                </p>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                  Built with scalability, privacy, and security in mind, the platform enables structured academic expansion without operational disruption.
                </p>

                <div className="pt-4">
                  <Link href="/contact">
                    <button className="bg-[#f99d1c] text-[#11253e] px-12 py-6 font-bold text-[14px] uppercase tracking-[0.2em] hover:bg-white transition-all">
                      EXPLORE PLATFORM
                    </button>
                  </Link>
                </div>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full relative min-h-[350px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[500px]"
              >
                <ImageWithFallback
                  src="/assets/solution_detail_hero.jpg"
                  alt="AI Powered Learning Management Platform"
                  width={800}
                  height={600}
                  className="rounded-sm shadow-2xl w-full h-auto max-h-[550px] object-cover"
                />
              </Motion.div>
            </div>
          </Motion.div>
        </div>
      </section>



      {/* Key Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight">
                Key Features
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Settings size={36} className="text-[#f99d1c]" />,
                  title: "Institutional Management",
                  description: "Department creation, class management, role-based user permissions, teacher onboarding, and student registration."
                },
                {
                  icon: <Eye size={36} className="text-[#f99d1c]" />,
                  title: "AI Proctoring & Monitoring",
                  description: "Reliable remote examination monitoring to ensure academic integrity and detect suspicious behavior during exams."
                },
                {
                  icon: <BarChart3 size={36} className="text-[#f99d1c]" />,
                  title: "Advanced Result Analytics",
                  description: "Organize academic results, compile student performance reports, and maintain transparent evaluation workflows."
                },
                {
                  icon: <Shield size={36} className="text-[#f99d1c]" />,
                  title: "Secure Role-Based Access Control",
                  description: "Structured permissions ensure secure system access and data isolation across departments and user roles."
                },
                {
                  icon: <Box size={36} className="text-[#f99d1c]" />,
                  title: "Academic Workflow Automation",
                  description: "Course approval workflows, attendance tracking, timetable scheduling, and assignment management."
                },
                {
                  icon: <Users size={36} className="text-[#f99d1c]" />,
                  title: "Prompt-Based Admin Automation",
                  description: "AI chatbot assistant and prompt-based administration for onboardings, department setups, and user queries."
                }
              ].map((feature, idx) => (
                <Motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white p-10 border border-gray-200 rounded-sm hover:border-[#f99d1c] transition-all group"
                >
                  <div className="space-y-6">
                    <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                      {feature.icon}
                    </div>
                    <h3 className="text-[#11253e] text-xl font-bold tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-[#11253e]/70 font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Advanced AI Architecture Section */}
      <section className="py-24 bg-[#11253e] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(249, 157, 28, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20 space-y-6"
          >
            <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-4 py-2">
              <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">TECHNICAL INNOVATION</span>
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight">
              Advanced AI architecture
            </h2>
            <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
          </Motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Brain className="text-[#f99d1c]" size={40} />,
                title: "AI MODEL INTEGRATION",
                description: "Integrates multiple AI models including OpenAI GPT-4o, Gemini 2.0 Flash, and DALL-E 3 for comprehensive content generation and media creation."
              },
              {
                icon: <Target className="text-[#f99d1c]" size={40} />,
                title: "AI ORCHESTRATION LAYER",
                description: "Coordinates multiple AI services and intelligently routes tasks to the most suitable AI model for optimal results."
              },
              {
                icon: <Zap className="text-[#f99d1c]" size={40} />,
                title: "RESOURCE GENERATION PIPELINE",
                description: "Automatically converts AI-generated content into usable educational assets such as presentations, documents, and structured learning resources."
              }
            ].map((innovation, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-6"
              >
                <div className="w-20 h-20 bg-white/5 border border-[#f99d1c]/30 flex items-center justify-center mx-auto rounded-sm">
                  {innovation.icon}
                </div>
                <h3 className="text-white text-xl font-bold uppercase tracking-wide">{innovation.title}</h3>
                <p className="text-white/70 text-base font-light leading-relaxed">
                  {innovation.description}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-4 py-2">
                <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">BUSINESS BENEFITS</span>
              </div>
              <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight">
                Transform your business operations
              </h2>
              <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: <Zap className="text-[#f99d1c]" size={40} />,
                  title: "Improved Productivity",
                  description: "Automate repetitive tasks and streamline workflows to help teams focus on strategic initiatives that drive growth."
                },
                {
                  icon: <Shield className="text-[#f99d1c]" size={40} />,
                  title: "Enhanced Data Security",
                  description: "Centralized data management with role-based access controls ensures sensitive business information remains secure."
                },
                {
                  icon: <BarChart3 className="text-[#f99d1c]" size={40} />,
                  title: "Better Decision Making",
                  description: "Real-time insights and comprehensive reporting enable data-driven decisions across all departments."
                }
              ].map((benefit, idx) => (
                <Motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-6 group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-white border border-gray-200 flex items-center justify-center mx-auto rounded-sm group-hover:border-[#f99d1c] transition-all">
                    {benefit.icon}
                  </div>
                  <h3 className="text-[#11253e] text-xl font-bold tracking-tight">{benefit.title}</h3>
                  <p className="text-[#11253e]/70 text-base font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-[#e5dfd3] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-12 md:p-16 border-l-8 border-[#f99d1c] shadow-xl flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-[#11253e] text-3xl md:text-4xl font-bold tracking-tight">
                Ready to Transform Your Educational Institution?
              </h2>
              <p className="text-[#11253e]/70 text-lg font-light leading-relaxed">
                Discover how Nabhira's AI-Powered LMS can revolutionize your academic workflows and enhance student learning experiences.
              </p>
            </div>

            <Link href="/contact" className="shrink-0">
              <button className="bg-[#f99d1c] text-white px-10 py-5 font-bold text-[13px] uppercase tracking-[0.2em] hover:bg-[#11253e] transition-all flex items-center gap-3">
                START YOUR JOURNEY <ArrowRight size={16} />
              </button>
            </Link>
          </Motion.div>
        </div>
      </section>
      <DownloadModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} documentName="AI LMS Brochure" />
    </>
  );
}
