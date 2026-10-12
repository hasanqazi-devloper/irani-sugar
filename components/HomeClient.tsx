"use client";

import { LazyMotion, domMax } from "framer-motion";
import Hero from "@/components/Hero";
import FeaturedMills from "@/components/FeaturedMills";
import SpecMatrix from "@/components/SpecMatrix";
import LogisticsEstimator from "@/components/LogisticsEstimator";
import RfqSection from "@/components/RfqSection";

export default function HomeClient() {
  return (
    <LazyMotion features={domMax}>
      <main className="w-full min-h-screen bg-[#0D0D0D] text-white font-sans overflow-x-hidden block">
        <Hero />
        <FeaturedMills />
        <SpecMatrix />
        <LogisticsEstimator />
        <RfqSection />
      </main>
    </LazyMotion>
  );
}