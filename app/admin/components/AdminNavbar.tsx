"use client";

import { useAuth } from "../context/AuthContext";

interface AdminNavbarProps {
  onMobileMenuOpen: () => void;
}

export function AdminNavbar({ onMobileMenuOpen }: AdminNavbarProps) {
  const { logout } = useAuth();

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center px-4 sm:px-6 justify-between sticky top-0 z-30 shadow-sm">
      {/* Left: Mobile hamburger + Welcome */}
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button
          onClick={onMobileMenuOpen}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-[#11253e] hover:bg-[#11253e]/5 transition-colors"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Welcome text */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#11253e] to-[#1a3d66] flex items-center justify-center shadow">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <p className="text-[#11253e] font-semibold text-sm leading-tight">Welcome, Admin</p>
            <p className="text-gray-400 text-[11px] leading-tight hidden sm:block">Nabhira Admin Portal</p>
          </div>
        </div>
      </div>

      {/* Right: Sign Out */}
      <button
        onClick={logout}
        className="flex items-center gap-2 bg-[#11253e] hover:bg-[#1a3556] text-white text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md group"
      >
        <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="group-hover:translate-x-0.5 transition-transform">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        <span className="hidden sm:inline">Sign Out</span>
      </button>
    </header>
  );
}
