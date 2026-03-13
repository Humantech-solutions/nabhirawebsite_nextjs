"use client";

import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { BigThinkers } from "../components/BigThinkers";
import { LatestThinking, WhatsNew } from "../components/GridSection";
import { Capabilities } from "../components/Capabilities";
import { Industries } from "../components/Industries";
import { WithNabhira } from "../components/WithNabhira";
import { SuccessStories } from "../components/SuccessStories";
import { Clients } from "../components/Clients";
import { LimitlessTogether, Footer } from "../components/Footer";

export default function Home({ wordpressData }: any) {
  useEffect(() => {
    document.title = "Nabhira Technologies | Digital Transformation & AI Solutions";
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <WithNabhira />
      <Capabilities />
      <Industries />
      <BigThinkers />
      <WhatsNew />
      <Clients />
      <SuccessStories />
      <LimitlessTogether />
    </div>
  );
}
