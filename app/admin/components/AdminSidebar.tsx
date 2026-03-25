"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import footerLogo from "../../../src/assets/footer.png";

const navItems = [
  {
    label: "Contact Form",
    href: "/admin/dashboard/contact-form",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Event Form",
    href: "/admin/dashboard/event-form",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Career",
    href: "/admin/dashboard/career",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Career Mails",
    href: "/admin/dashboard/career-mails",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
      </svg>
    ),
  },
  {
    label: "Chatbot",
    href: "/admin/dashboard/chatbot",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

interface AdminSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

export function AdminSidebar({ isOpen, onToggle, isMobileOpen, onMobileClose }: AdminSidebarProps) {
  const pathname = usePathname();

  const SidebarContent = ({ mobile = false }: { mobile?: boolean }) => (
    <div className="flex flex-col h-full">
      {/* Logo area */}
      <div className={`flex items-center border-b border-white/10 transition-all duration-300 ${isOpen || mobile ? "px-5 py-5 gap-3 justify-between" : "px-3 py-5 justify-center"}`}>
        {(isOpen || mobile) && (
          <div className="flex-1">
            <Image
              src={footerLogo}
              alt="Nabhira"
              width={110}
              height={32}
              className="h-7 w-auto object-contain"
              priority
            />
          </div>
        )}
        {!mobile && (
          <button
            onClick={onToggle}
            className={`w-8 h-8 rounded-lg bg-white/10 hover:bg-[#f99d1c]/20 flex items-center justify-center text-white/70 hover:text-[#f99d1c] transition-all duration-200 shrink-0 ${!isOpen ? "rotate-180" : ""}`}
            title={isOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
      </div>

      {/* Nav label */}
      {(isOpen || mobile) && (
        <p className="text-white/30 text-[10px] font-semibold tracking-[0.15em] uppercase px-5 mt-5 mb-2">
          Menu
        </p>
      )}

      {/* Nav items */}
      <nav className="flex-1 px-2 py-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={mobile ? onMobileClose : undefined}
              title={!isOpen && !mobile ? item.label : undefined}
              className={`flex items-center gap-3 rounded-xl transition-all duration-200 group relative
                ${isOpen || mobile ? "px-3 py-2.5" : "px-2 py-2.5 justify-center"}
                ${active
                  ? "bg-[#f99d1c] text-white shadow-md shadow-[#f99d1c]/20"
                  : "text-white/60 hover:bg-white/10 hover:text-white"
                }`}
            >
              <span className={`shrink-0 transition-transform duration-200 ${active ? "scale-110" : "group-hover:scale-110"}`}>
                {item.icon}
              </span>
              {(isOpen || mobile) && (
                <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
              )}
              {active && (isOpen || mobile) && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/70" />
              )}
              {/* Tooltip for collapsed state */}
              {!isOpen && !mobile && (
                <span className="absolute left-full ml-2 px-2.5 py-1.5 bg-[#11253e] border border-white/10 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 shadow-lg">
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom branding */}
      {(isOpen || mobile) && (
        <div className="p-4 border-t border-white/10">
          <p className="text-white/20 text-[10px] text-center">
            Admin Dashboard v1.0
          </p>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={`hidden md:flex flex-col h-screen bg-[#11253e] border-r border-white/10 sticky top-0 transition-all duration-300 ease-in-out overflow-hidden shrink-0 ${
          isOpen ? "w-60" : "w-16"
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onMobileClose}
          />
          <aside className="absolute left-0 top-0 h-full w-64 bg-[#11253e] flex flex-col shadow-xl z-50">
            <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
              <Image src={footerLogo} alt="Nabhira" width={120} height={36} className="h-8 w-auto object-contain" />
              <button onClick={onMobileClose} className="text-white/60 hover:text-white transition-colors">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <SidebarContent mobile />
          </aside>
        </div>
      )}
    </>
  );
}
