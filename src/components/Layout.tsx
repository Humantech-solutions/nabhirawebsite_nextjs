"use client";

import React from "react";
import { Outlet, ScrollRestoration } from "react-router";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden antialiased">
      <Navbar />
      <main className="flex-grow pt-[80px] md:pt-[80px]">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
