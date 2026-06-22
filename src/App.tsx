/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import HiddenRevenue from "./components/HiddenRevenue";
import LivingMenu from "./components/LivingMenu";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#080808] text-white font-sans selection:bg-[#C5A059] selection:text-black hover:cursor-default antialiased relative min-h-screen noise-bg overflow-x-hidden">
      
      {/* Decorative vertical copper line borders traversing down the page margins for strict layout layout */}
      <div className="hidden lg:block fixed left-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-zinc-800/10 via-zinc-800/30 to-zinc-800/10 z-40 pointer-events-none select-none" />
      <div className="hidden lg:block fixed right-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-zinc-800/10 via-zinc-800/30 to-zinc-800/10 z-40 pointer-events-none select-none" />

      {/* Main Orchestrated View Flow */}
      <div className="relative z-10">
        
        {/* Navigation Core */}
        <Header />

        {/* Cinematic Blocks */}
        <main>
          
          {/* Section 1: Hero Column */}
          <Hero />

          {/* Luxury Divider Cross Lines */}
          <div className="relative w-full h-[1px] bg-zinc-800/50">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-[#C5A059] rotate-45 bg-[#080808]" />
          </div>

          {/* Core Service Pillars */}
          <ServicesSection />

          {/* Luxury Divider Cross Lines */}
          <div className="relative w-full h-[1px] bg-zinc-800/50">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-[#C5A059] rotate-45 bg-[#080808]" />
          </div>

          {/* Section 4: Hidden Revenue — interactive value calculator */}
          <HiddenRevenue />

          {/* Luxury Divider Cross Lines */}
          <div className="relative w-full h-[1px] bg-zinc-800/50">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-[#C5A059] rotate-45 bg-[#080808]" />
          </div>

          {/* Section 5: The Metamorphosis — Animated Before/After Living Menu */}
          <LivingMenu />

        </main>

        {/* Section 6: Footer */}
        <Footer />

      </div>

    </div>
  );
}
