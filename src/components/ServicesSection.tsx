/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Compass, Sparkles, BookOpen, Presentation, Paintbrush, ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  const triggerInitiate = (category: string) => {
    // Scroll to the Aesthetic Audit Form
    const formSection = document.getElementById("diagnosis");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
      
      // Determine what input/focus target fits
      setTimeout(() => {
        const dragArea = document.getElementById("menu-drag-area");
        if (dragArea) {
          dragArea.classList.add("ring-2", "ring-[#C5A059]", "ring-offset-2", "ring-offset-black");
          setTimeout(() => {
            dragArea.classList.remove("ring-2", "ring-[#C5A059]", "ring-offset-2", "ring-offset-black");
          }, 2000);
        }
      }, 800);
    }
  };

  return (
    <section 
      id="pillars" 
      className="py-24 bg-[#080808] border-t border-zinc-900/80 relative overflow-hidden subtle-grid noise-bg"
    >
      {/* Decorative diagonal line & light ambient glow */}
      <div className="angle-line opacity-10 left-[60%] hidden lg:block" />
      <div className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] bg-[#C5A059]/2 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Column */}
        <div className="max-w-3xl mb-16 select-none">
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#C5A059] uppercase block mb-3 font-semibold">
            PRIMARY SERVICE COVENANTS
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tighter text-white leading-none uppercase">
            RE-ENGINEERING THE <br />
            <span className="font-serif italic font-normal text-[#C5A059] lowercase tracking-normal">online experience</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-550 max-w-lg mt-4 leading-relaxed">
            By shifting touchpoints from default utility to visual monuments, we unlock high-tier consumer value. Connect with absolute craft.
          </p>
        </div>

        {/* Artistic 3-Column Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl">
          
          {/* Service Pillar 01: Cinematic Menu Redevelopment */}
          <div className="bg-[#0c0c0c] border border-zinc-800/80 p-8 rounded-xs relative group flex flex-col justify-between hover:border-[#C5A059]/40 transition-all duration-500">
            {/* Top numbering inside frame */}
            <div className="flex items-start justify-between mb-8 select-none">
              <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center rounded-xs group-hover:border-[#C5A059]/30 transition-colors duration-500">
                <BookOpen className="w-4 h-4 text-zinc-500 group-hover:text-[#C5A059] transition-colors duration-500" />
              </div>
              <span className="font-serif text-3xl italic text-zinc-800 group-hover:text-[#C5A059]/20 transition-all duration-500 font-semibold select-none">
                01
              </span>
            </div>

            <div className="space-y-4">
              <h3 className="font-sans text-base font-extralight uppercase text-white tracking-widest leading-snug group-hover:text-[#C5A059] transition-colors duration-300">
                Cinematic Menu <br />Redevelopment
              </h3>
              <p className="font-sans text-[12px] text-zinc-400 leading-relaxed font-light">
                We turn your website and socials into appetite engines. Static images give way to cinematic motion, steam, sizzle, and sensory storytelling that stops the scroll and fills the seats — visuals built to sell, not just sit pretty.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-900 flex justify-between items-center">
              <button 
                onClick={() => triggerInitiate("menu")}
                className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-[#C5A059] hover:text-white uppercase font-bold transition-colors cursor-pointer group/btn"
              >
                <span>Initiate Redesign</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
              <span className="font-mono text-[8px] text-zinc-650 tracking-wider">CC-01</span>
            </div>
          </div>

          {/* Service Pillar 02: Atmospheric Website Theater */}
          <div className="bg-[#0c0c0c] border border-zinc-800/80 p-8 rounded-xs relative group flex flex-col justify-between hover:border-[#C5A059]/40 transition-all duration-500">
            {/* Top numbering inside frame */}
            <div className="flex items-start justify-between mb-8 select-none">
              <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center rounded-xs group-hover:border-[#C5A059]/30 transition-colors duration-500">
                <Presentation className="w-4 h-4 text-zinc-500 group-hover:text-[#C5A059] transition-colors duration-500" />
              </div>
              <span className="font-serif text-3xl italic text-zinc-800 group-hover:text-[#C5A059]/20 transition-all duration-500 font-semibold select-none">
                02
              </span>
            </div>

            <div className="space-y-4">
              <h3 className="font-sans text-base font-extralight uppercase text-white tracking-widest leading-snug group-hover:text-[#C5A059] transition-colors duration-300">
                Atmospheric Website <br />Theater
              </h3>
              <p className="font-sans text-[12px] text-zinc-400 leading-relaxed font-light">
                Your digital storefront is transformed into a high-fidelity cinematic journey. Using fluid micro-animations, full-screen curated media, and high-contrast ambient layouts.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-900 flex justify-between items-center">
              <button 
                onClick={() => triggerInitiate("digital")}
                className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-[#C5A059] hover:text-white uppercase font-bold transition-colors cursor-pointer group/btn"
              >
                <span>Initiate Redesign</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
              <span className="font-mono text-[8px] text-zinc-650 tracking-wider">CC-02</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
