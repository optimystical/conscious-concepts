/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowDown, Shield, Award } from "lucide-react";

export default function Hero() {
  const scrollToExhibition = () => {
    const el = document.getElementById("diagnosis");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 bg-[#080808] overflow-hidden subtle-grid"
    >
      {/* Dramatic signature diagonal angle-line from Artistic Flair design */}
      <div className="angle-line opacity-25 left-[42%] hidden lg:block" />

      {/* Cinematic Ambient Glow Backdrops */}
      <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[30%] w-[35vw] h-[35vw] bg-[#bc8239]/4 rounded-full blur-[130px] pointer-events-none" />
      
      {/* High-fidelity Vignette Overlay */}
      <div className="absolute inset-0 vignette-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Core Poetic Copy */}
        <div className="lg:col-span-6 flex flex-col items-start gap-6 select-none relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-[#121212] border border-[#C5A059]/30 px-3 py-1 rounded-sm text-[9px] tracking-[0.25em] font-mono text-[#C5A059] uppercase font-semibold"
          >
            <Sparkles className="w-3 h-3 text-[#C5A059] animate-pulse" />
            <span>Visual Redevelopment Group</span>
          </motion.div>

          {/* Heading with exquisite contrast pairings & extreme tight tracking from design */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-5xl sm:text-6xl md:text-7xl font-extralight tracking-tighter text-white leading-none uppercase"
          >
            WHERE <br />
            <span className="font-serif italic text-[#C5A059] font-normal lowercase tracking-normal">Art</span> MEETS <br />
            COMMERCE.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-sm text-zinc-400 max-w-sm leading-relaxed border-l-2 border-[#C5A059]/30 pl-4"
          >
            We architect online identities. Converting standard online menus and boring digital templates into elegant, tactile artifacts that command immediate visual reverence.
          </motion.p>

          {/* Human, Literal Metrics Summary Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 py-4 border-y border-zinc-800/80 w-full max-w-md my-2"
          >
            <div>
              <span className="font-sans text-2xl font-light text-white block">+34.2%</span>
              <span className="font-mono text-[8px] tracking-widest text-[#C5A059] uppercase block mt-1">Avg Rev Lift</span>
            </div>
            <div>
              <span className="font-sans text-2xl font-light text-white block">04:12s</span>
              <span className="font-mono text-[8px] tracking-widest text-[#C5A059] uppercase block mt-1">Visual Retention</span>
            </div>
            <div>
              <span className="font-sans text-2xl font-light text-white block">100%</span>
              <span className="font-mono text-[8px] tracking-widest text-[#C5A059] uppercase block mt-1">Art Connection</span>
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 items-center"
            id="hero-btn-container"
          >
            <button
              onClick={() => {
                const el = document.getElementById("diagnosis");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3.5 bg-gradient-to-r from-[#ca9d54] to-[#bc8239] hover:from-[#d6b779] hover:to-[#ca9d54] text-black font-display font-medium text-xs tracking-wider uppercase rounded-sm shadow-xl hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] duration-300 transition-all cursor-pointer"
            >
              Analyze Your Space
            </button>
            <button
              onClick={scrollToExhibition}
              className="px-6 py-3.5 bg-[#141414] hover:bg-[#1a1a1a] text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 font-display font-medium text-xs tracking-wider uppercase rounded-sm transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>View Metamorphosis</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </button>
          </motion.div>

          {/* Core Trust Seal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-2 text-zinc-500 mt-4 text-[10px] font-mono tracking-wider"
          >
            <Award className="w-4 h-4 text-[#C5A059]/60" />
            <span>CROWNING HOSPITALITY WITH THEATRICAL ARCHITECTURE</span>
          </motion.div>

        </div>

        {/* Right Column: Immersive Gastronomy Frame with Coordinates */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative flex flex-col items-center justify-center pt-8 lg:pt-0"
        >
          {/* Framed Canvas Box */}
          <div className="relative p-3 bg-[#111] border border-zinc-800/80 rounded-xs shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] group w-full max-w-[680px]">
            {/* Fine copper layout lines in corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#C5A059]/50 -translate-x-1.5 -translate-y-1.5" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#C5A059]/50 translate-x-1.5 -translate-y-1.5" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#C5A059]/50 -translate-x-1.5 translate-y-1.5" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#C5A059]/50 translate-x-1.5 translate-y-1.5" />

            {/* Glowing Accent Ring */}
            <div className="absolute inset-0 bg-[#C5A059]/2 rounded-xs opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Video Wrapper */}
            <div className="relative aspect-video overflow-hidden bg-black rounded-xs">
              <video
                src="videos/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Vertical soft vignette inside image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 opacity-70" />
              
              {/* Immersive typography overlays on the frame */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white z-10-muted pointer-events-none select-none">
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] tracking-widest text-[#C5A059] uppercase">Plating Sculpture</span>
                  <span className="font-serif italic text-xs text-white">The Solstice Quail, 2026</span>
                </div>
                <span className="font-mono text-[9.5px] text-zinc-400 tracking-wider">50.811° N, 4.352° W</span>
              </div>
            </div>
          </div>

          {/* Floating Aesthetic Annotation card underneath */}
          <div className="absolute -bottom-8 -left-6 bg-[#141414] border border-zinc-800 p-3 rounded-xs hidden md:flex flex-col gap-1 w-52 shadow-2xl backdrop-blur-md">
            <span className="font-mono text-[8px] tracking-widest text-zinc-500 uppercase">CHRONOLOGICAL NO. 74</span>
            <span className="font-serif italic text-xs text-zinc-200">"Shadows outline flavor."</span>
            <div className="h-[1px] bg-zinc-800/80 my-1" />
            <span className="font-mono text-[8px] tracking-widest text-[#C5A059] uppercase">CHIAROSCURO SCALE: 9.8</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
