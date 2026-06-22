/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Compass, Mail, Clock, MapPin, Sparkles, Send, Globe, ChevronUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-zinc-900 pt-20 pb-12 relative overflow-hidden">
      
      {/* Muted background highlight */}
      <div className="absolute bottom-0 right-[20%] w-[30vh] h-[30vh] bg-[#C5A059]/3 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Core Footer Link grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & Manifesto */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className="absolute inset-0 border border-[#C5A059] rounded-sm transform rotate-45" />
                <div className="w-1 h-1 bg-[#C5A059] rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-[10px] tracking-[0.25em] text-white uppercase font-bold">
                  KONSCIOUS
                </span>
                <span className="font-sans text-[7.5px] tracking-[0.35em] text-[#C5A059] uppercase -mt-0.5 font-medium">
                  KONCEPTS
                </span>
              </div>
            </div>

            <p className="font-sans text-[11.5px] text-zinc-500 leading-relaxed max-w-xs">
              Bridging commercial rigor with classical art. We craft cinematic menus and modular spatial websites built to captivate, persist, and convert.
            </p>
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <h4 className="font-mono text-[9px] tracking-[0.25em] text-[#C5A059] uppercase font-bold">
              OPERATIONAL BASES
            </h4>
            <ul className="space-y-3 font-sans text-xs text-zinc-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-600 shrink-0 mt-0.5" />
                <span>The Americas</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-600 shrink-0 mt-0.5" />
                <span>The Universe</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-600 shrink-0 mt-0.5" />
                <span>The 5D</span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-mono text-[9px] tracking-[0.25em] text-zinc-500 uppercase font-bold">
              ENGAGEMENTS
            </h4>
            <ul className="space-y-2.5 font-display text-xs text-zinc-400 uppercase tracking-widest">
              <li>
                <button
                  onClick={() => document.getElementById("outcomes")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-[#C5A059] transition-colors duration-300 cursor-pointer"
                >
                  Hidden Revenue
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("diagnosis")?.scrollIntoView({ behavior: "smooth" })} 
                  className="hover:text-[#C5A059] transition-colors duration-300 cursor-pointer"
                >
                  The Metamorphosis
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Guiding Standards */}
          <div className="space-y-4">
            <h4 className="font-mono text-[9px] tracking-[0.25em] text-[#C5A059] uppercase font-bold">
              STUDIO COVENANTS
            </h4>
            <div className="bg-[#0b0b0b] border border-zinc-900 p-4 rounded-xs text-[10px] space-y-3 font-sans leading-relaxed text-zinc-500">
              <p>
                <strong className="text-white block font-mono text-[8px] tracking-wider uppercase mb-1">I. Sensory Overload</strong>
                Every menu path must provoke genuine culinary excitement prior to plating.
              </p>
              <div className="border-t border-zinc-900/60 pt-3">
                <strong className="text-white block font-mono text-[8px] tracking-wider uppercase mb-1">II. Technical Nobility</strong>
                No lazy frames. Every viewport must scale with absolute typographical precision.
              </div>
            </div>
          </div>

        </div>

        {/* Global Copyright + Scroll to top button */}
        <div className="border-t border-zinc-900 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[9px] tracking-wide text-zinc-600">
            © {new Date().getFullYear()} KONSCIOUS KONCEPTS LTD. ALL CINEMATIC EXPERIENCES PROTECTED.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group p-2.5 bg-[#0e0e0e] hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-sm transition-all duration-300 flex items-center gap-2 cursor-pointer text-[10px] uppercase font-mono tracking-wider shadow-md"
            title="Scroll To Top"
            id="footer-scroll-top"
          >
            <span>Back to Summit</span>
            <ChevronUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 duration-200 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
