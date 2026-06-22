/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Eye, ShieldCheck, Sparkles, Send, Compass } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ["home", "pillars", "outcomes", "diagnosis"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveTab(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveTab(id);
    }
  };

  return (
    <motion.header
      id="app-header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#080808]/85 backdrop-blur-md border-b border-[#C5A059]/15 py-3 shadow-2xl" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Identity / Dual-rotation diamond outline brand mark */}
        <div 
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 cursor-pointer group"
          id="brand-logo"
        >
          <div className="relative w-8 h-8 flex items-center justify-center">
            {/* Outer golden diamond rotating clockwise */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
              className="absolute inset-0 border border-[#C5A059] rounded-sm transform rotate-45 group-hover:scale-110 transition-transform duration-300"
            />
            {/* Inner copper diamond rotating counter-clockwise */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute w-5 h-5 border border-[#C5A059]/60 rounded-xs transform rotate-45"
            />
            {/* Core glowing amber dot */}
            <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full shadow-[0_0_8px_#C5A059]" />
          </div>
          
          <div className="flex flex-col">
            <span className="font-display text-xs tracking-[0.25em] text-white uppercase font-bold">
              KONSCIOUS
            </span>
            <span className="font-sans text-[9px] tracking-[0.4em] text-[#C5A059] uppercase -mt-0.5 font-medium">
              KONCEPTS
            </span>
          </div>
        </div>

        {/* Navigation Sections */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { id: "pillars", label: "Covenants" },
            { id: "outcomes", label: "Hidden Revenue" },
            { id: "diagnosis", label: "The Metamorphosis" }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative font-sans text-xs tracking-[0.16em] uppercase transition-colors duration-300 py-1 ${
                activeTab === item.id 
                  ? "text-[#C5A059]" 
                  : "text-zinc-400 hover:text-white"
              }`}
              id={`nav-link-${item.id}`}
            >
              {item.label}
              {activeTab === item.id && (
                <motion.div 
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A059]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Studio Status Pulse & Call-to-Action */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollToSection("diagnosis")}
            className="group relative inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ca9d54] to-[#bc8239] hover:from-[#d6b779] hover:to-[#ca9d54] text-black font-sans font-medium text-xs tracking-wider uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(197,160,89,0.35)] active:scale-95 cursor-pointer"
            id="header-cta"
          >
            <Compass className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" />
            <span>Watch It Come Alive</span>
          </button>
        </div>

      </div>
    </motion.header>
  );
}
