"use client";

import { Hero } from "../src/components/Hero";
import { BigThinkers } from "../src/components/BigThinkers";
import { LatestThinking, WhatsNew } from "../src/components/GridSection";
import { Capabilities } from "../src/components/Capabilities";
import { Industries } from "../src/components/Industries";
import { WithNabhira } from "../src/components/WithNabhira";
import { SuccessStories } from "../src/components/SuccessStories";
import { Clients } from "../src/components/Clients";
import { LimitlessTogether } from "../src/components/Footer";

export default function Home() {
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
