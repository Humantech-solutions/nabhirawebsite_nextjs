"use client";
import React, { useEffect, useState } from "react";
import { motion as Motion } from "motion/react";
import Link from "next/link";
import { SalesBrochureModal } from "../../components/SalesBrochureModal";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { GraduationCap, BookOpen, Brain, CheckCircle2, Users, FileText, BarChart3, Lock, Sparkles, MessageSquare, ClipboardList, Eye, Target, Zap, Shield } from "lucide-react";

export default function AILMSSolution() {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  useEffect(() => {
    document.title = "AI Powered Learning Management System | Nabhira Technologies";
    window.scrollTo(0, 0);
  }, []);

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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/ailms')}&title=${encodeURIComponent('AI Powered LMS')}&category=Solutions`}>
                  <button className="bg-[#f99d1c] text-white px-10 py-5 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#11253e] transition-all">
                    REQUEST DEMO
                  </button>
                </Link>
              </div>
            </Motion.div>
            
            {/* Metrics Cards */}
            <Motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 gap-6"
            >
              {[
                { stat: "80%", label: "Faster course creation" },
                { stat: "60%", label: "Admin time saved" },
                { stat: "95%", label: "Student engagement boost" }
              ].map((item, i) => (
                <div key={i} className="bg-white backdrop-blur-sm border border-white/10 p-8 hover:bg-white transition-all">
                  <p className="text-[#f99d1c] text-5xl font-bold mb-3">{item.stat}</p>
                  <p className="text-[#11253e] text-md font-light tracking-wide">{item.label}</p>
                </div>
              ))}
            </Motion.div>
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
              Nabhira LMS is an AI-powered learning management system designed to support modern digital education environments. The platform integrates artificial intelligence into academic workflows to assist educators, automate institutional management, and enhance student learning experiences.
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

      {/* AI Powered Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-4 py-2 mb-8">
              <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">AI POWERED SOLUTION</span>
            </div>
            <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight mb-6">
              Unified intelligence layer
            </h2>
            <div className="w-24 h-1 bg-[#f99d1c] mx-auto mb-8"></div>
            <p className="text-[#11253e]/80 text-lg font-light max-w-3xl mx-auto">
              Nabhira LMS introduces a unified intelligence layer that integrates artificial intelligence across the entire academic workflow. Educators and administrators can access AI-powered capabilities within a single platform.
            </p>
          </Motion.div>

          {/* Solution Cards Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: <BookOpen className="text-[#f99d1c]" size={32} />,
                title: "AI Course Builder",
                description: "Transform raw topics or syllabus outlines into structured course modules with organized lessons and learning objectives.",
                features: [
                  "Automated course structure generation",
                  "Learning path optimization",
                  "Syllabus-aligned module creation",
                  "Logical lesson sequencing"
                ]
              },
              {
                icon: <FileText className="text-[#f99d1c]" size={32} />,
                title: "AI Content Generation",
                description: "Generate lecture presentations, structured study materials, and academic documents automatically.",
                features: [
                  "PPT and PDF generation",
                  "Study notes creation",
                  "Professional teaching resources",
                  "Content structuring for topics"
                ]
              },
              {
                icon: <ClipboardList className="text-[#f99d1c]" size={32} />,
                title: "AI Assessment Generator",
                description: "Produce quizzes, examination questions, and evaluation materials aligned with course content.",
                features: [
                  "Syllabus-aligned questions",
                  "Multiple difficulty levels",
                  "Diverse question formats",
                  "Automated exam creation"
                ]
              },
              {
                icon: <Sparkles className="text-[#f99d1c]" size={32} />,
                title: "Visual & Media Generation",
                description: "Generate diagrams, infographics, and conceptual illustrations for complex topics.",
                features: [
                  "AI infographic generation",
                  "Educational visual content",
                  "Concept illustrations",
                  "Media resource integration"
                ]
              }
            ].map((service, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white p-10 border-l-4 border-[#f99d1c] shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-[#f99d1c] transition-colors">
                    {service.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-[#11253e] text-2xl font-bold tracking-tight">{service.title}</h3>
                    <p className="text-[#11253e]/70 font-light leading-relaxed">{service.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3 pl-[88px]">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#f99d1c] shrink-0 mt-0.5" />
                      <span className="text-[#11253e]/80 text-md font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Innovation */}
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
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-4 py-2 mb-8">
              <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">TECHNICAL INNOVATION</span>
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight mb-6">
              Advanced AI architecture
            </h2>
            <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
          </Motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Brain className="text-[#f99d1c]" size={40} />,
                title: "AI Model Integration",
                description: "Integrates multiple AI models including OpenAI GPT-4o, Gemini 2.0 Flash, and DALL-E 3 for comprehensive content generation and media creation."
              },
              {
                icon: <Target className="text-[#f99d1c]" size={40} />,
                title: "AI Orchestration Layer",
                description: "Coordinates multiple AI services and intelligently routes tasks to the most suitable AI model for optimal results."
              },
              {
                icon: <Zap className="text-[#f99d1c]" size={40} />,
                title: "Resource Generation Pipeline",
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
                <div className="w-20 h-20 bg-white/5 border border-[#f99d1c]/30 flex items-center justify-center mx-auto">
                  {innovation.icon}
                </div>
                <h3 className="text-white text-xl font-bold uppercase tracking-wide">{innovation.title}</h3>
                <p className="text-white/70 text-md font-light leading-relaxed">
                  {innovation.description}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Feature Overview */}
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
              <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">COMPLETE FEATURE SET</span>
            </div>
            <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight mb-6">
              Comprehensive LMS capabilities
            </h2>
            <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
          </Motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Institutional Management",
                features: [
                  "Department creation and management",
                  "Class and academic program management",
                  "Role-based user management",
                  "Teacher onboarding and assignment",
                  "Student registration and enrollment",
                  "Institutional hierarchy configuration"
                ]
              },
              {
                category: "Academic Workflow",
                features: [
                  "Course creation and management",
                  "Course approval and publishing workflow",
                  "Learning resource management",
                  "Attendance tracking system",
                  "Academic timetable and scheduling",
                  "Assignment and coursework management"
                ]
              },
              {
                category: "AI-Powered Features",
                features: [
                  "AI course builder",
                  "AI content generator for PPT, PDF",
                  "AI assessment generator",
                  "AI question generation",
                  "AI study material generation",
                  "AI content structuring"
                ]
              },
              {
                category: "Examination & Evaluation",
                features: [
                  "AI generated exam questions",
                  "Quiz and assessment tools",
                  "Examination workflow management",
                  "AI proctoring and monitoring",
                  "Automated result compilation",
                  "Student performance analytics"
                ]
              },
              {
                category: "Automation & Intelligence",
                features: [
                  "AI chatbot assistant",
                  "Prompt-based admin automation",
                  "Automated department setup",
                  "AI workflow assistance",
                  "Intelligent content pipelines"
                ]
              },
              {
                category: "Platform Infrastructure",
                features: [
                  "Secure role-based access control",
                  "Scalable cloud infrastructure",
                  "Multi-model AI integration",
                  "Automated resource generation",
                  "Secure data management"
                ]
              }
            ].map((category, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 border border-gray-200 hover:border-[#f99d1c] hover:shadow-lg transition-all"
              >
                <h3 className="text-[#11253e] text-lg font-bold uppercase tracking-wide mb-6 pb-4 border-b-2 border-[#f99d1c]">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#f99d1c] shrink-0 mt-1" />
                      <span className="text-[#11253e]/80 text-md font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 border border-[#f99d1c]/30 px-4 py-2 mb-8">
              <span className="text-[#f99d1c] text-[10px] font-bold uppercase tracking-[0.3em]">BUSINESS IMPACT</span>
            </div>
            <h2 className="text-[#11253e] text-4xl md:text-5xl font-light tracking-tight mb-6">
              Real results for institutions
            </h2>
            <div className="w-24 h-1 bg-[#f99d1c] mx-auto"></div>
          </Motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Users className="text-[#f99d1c]" size={48} />,
                title: "Improved Academic Workflows",
                description: "Educators benefit from tools that simplify course preparation and content organization, allowing them to focus more on teaching and mentoring students."
              },
              {
                icon: <BarChart3 className="text-[#f99d1c]" size={48} />,
                title: "Efficient Institutional Management",
                description: "Administrators can manage institutional structures more efficiently through automated workflows supported by artificial intelligence."
              },
              {
                icon: <GraduationCap className="text-[#f99d1c]" size={48} />,
                title: "Enhanced Learning Experience",
                description: "Students gain access to structured educational resources and visual learning materials that support different learning styles."
              }
            ].map((impact, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-6"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-gray-50 to-white border-2 border-[#f99d1c]/30 flex items-center justify-center mx-auto">
                  {impact.icon}
                </div>
                <h3 className="text-[#11253e] text-2xl font-bold tracking-tight">{impact.title}</h3>
                <p className="text-[#11253e]/70 text-md font-light leading-relaxed">
                  {impact.description}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#11253e] to-[#1a3a5f] p-16 rounded-sm relative overflow-hidden"
          >
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(249, 157, 28, 0.6) 1px, transparent 1px)`,
                backgroundSize: '32px 32px'
              }}
            ></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight leading-tight">
                  Ready to transform your educational institution?
                </h2>
                <div className="w-24 h-1 bg-[#f99d1c]"></div>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                  Discover how Nabhira's AI-powered LMS can revolutionize your academic workflows and enhance student learning experiences.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Link href={`/contact?ref=${encodeURIComponent('https://nabhira.com/solutions/ailms')}&title=${encodeURIComponent('AI Powered LMS')}&category=Solutions`}>
                  <button className="bg-[#f99d1c] text-[#11253e] px-12 py-6 font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all">
                    Schedule Consultation
                  </button>
                </Link>
                <button 
                  onClick={() => setIsBrochureModalOpen(true)}
                  className="border-2 border-white text-white px-12 py-6 font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-[#11253e] transition-all"
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

      <SalesBrochureModal 
        isOpen={isBrochureModalOpen} 
        onClose={() => setIsBrochureModalOpen(false)} 
        pageTitle="AI Powered LMS" 
      />
    </>
  );
}
