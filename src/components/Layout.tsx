"use client";

import React from "react";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden antialiased">
      <Navbar />
      <main className="flex-grow pt-[80px] md:pt-[80px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
