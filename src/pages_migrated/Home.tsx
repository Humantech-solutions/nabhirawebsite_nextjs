"use client";

import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { BigThinkers } from "../components/BigThinkers";
import { LatestThinking, WhatsNew } from "../components/GridSection";
import { Capabilities } from "../components/Capabilities";
import { Industries } from "../components/Industries";
import { WithNabhira } from "../components/WithNabhira";
import { SuccessStories } from "../components/SuccessStories";
import { Clients } from "../components/Clients";
import { Footer } from "../components/Footer";
import { LimitlessTogether } from "../components/LimitlessTogether";

export default function Home({ wordpressData }: any) {
  useEffect(() => {
    window.scrollTo(0, 0);
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
