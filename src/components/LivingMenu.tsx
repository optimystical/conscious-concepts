/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * The Metamorphosis — an animated "Before / After" living menu.
 * Replaces the former Aesthetic Diagnosis Portal. Toggles between the
 * current static photography and the proposed cinematic motion menu.
 */

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, Play, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { MENU_SECTIONS } from "../menuData";

type Mode = "photo" | "video";

/* Plays a muted, looping video only while it is on screen. */
function AmbientVideo({ src, active }: { src: string; active: boolean }) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!active) {
      el.pause();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) el.play().catch(() => {});
          else el.pause();
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [active, src]);

  return (
    <video
      ref={ref}
      loop
      muted
      playsInline
      preload="metadata"
      className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

function MenuCard({
  item,
  mode,
  index,
}: {
  item: (typeof MENU_SECTIONS)[number]["items"][number];
  mode: Mode;
  index: number;
}) {
  const isVideo = mode === "video" && !!item.video;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.07, ease: "easeOut" }}
      className="group relative bg-[#0c0c0c] border border-zinc-800/80 rounded-xs overflow-hidden hover:border-[#C5A059]/40 transition-colors duration-500"
    >
      {/* Corner ticks */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#C5A059]/0 group-hover:border-[#C5A059]/60 transition-colors duration-500 z-20" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#C5A059]/0 group-hover:border-[#C5A059]/60 transition-colors duration-500 z-20" />

      {/* Media */}
      <div className="relative aspect-[4/3] overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={isVideo ? "v" : "p"}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {isVideo ? (
              <AmbientVideo src={item.video as string} active={true} />
            ) : (
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Soft vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 pointer-events-none" />

        {/* Status tag */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="font-mono text-[8px] tracking-[0.2em] uppercase px-2 py-1 rounded-xs backdrop-blur-sm bg-black/50 border border-white/10 text-zinc-300 flex items-center gap-1">
            {isVideo ? (
              <>
                <Play className="w-2.5 h-2.5 text-[#C5A059]" /> Motion
              </>
            ) : (
              <>
                <Camera className="w-2.5 h-2.5 text-zinc-400" /> Still
              </>
            )}
          </span>
        </div>

        {/* Duration badge (video) */}
        {isVideo && item.duration && (
          <span className="absolute top-2.5 right-2.5 z-10 font-mono text-[9px] tracking-wider px-2 py-1 rounded-xs bg-black/60 border border-[#C5A059]/30 text-[#C5A059]">
            {item.duration}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <p className="font-serif text-[15px] text-white leading-tight">{item.name}</p>
          <span className="font-mono text-[11px] text-[#C5A059] whitespace-nowrap pt-0.5">
            {item.price}
          </span>
        </div>
        {item.desc && (
          <p className="font-sans text-[11px] text-zinc-500 mt-1.5 leading-relaxed">
            {item.desc}
          </p>
        )}

        {/* Engagement bar (video only) */}
        <AnimatePresence>
          {isVideo && item.engStat && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 14 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="flex items-center justify-between pt-3 border-t border-zinc-800/80">
                <span className="font-mono text-[8px] tracking-[0.15em] uppercase text-zinc-500 flex items-center gap-1.5">
                  <TrendingUp className="w-3 h-3 text-[#C5A059]" /> Add-to-order lift
                </span>
                <span className="font-display text-sm font-semibold text-[#C5A059]">
                  {item.engStat}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function LivingMenu() {
  const [mode, setMode] = useState<Mode>("photo");
  const [autoPlay, setAutoPlay] = useState(true);

  // Automatically alternate between Before (photos) and After (videos)
  // every 4 seconds, until the visitor takes manual control.
  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => {
      setMode((m) => (m === "photo" ? "video" : "photo"));
    }, 4000);
    return () => clearInterval(id);
  }, [autoPlay]);

  const selectMode = (id: Mode) => {
    setAutoPlay(false); // stop auto-cycling once the user clicks
    setMode(id);
  };

  const tabs: { id: Mode; label: string; sub: string; icon: React.ReactNode }[] = [
    { id: "photo", label: "Before", sub: "Static Photos", icon: <Camera className="w-3.5 h-3.5" /> },
    { id: "video", label: "After", sub: "Cinematic Motion", icon: <Play className="w-3.5 h-3.5" /> },
  ];

  return (
    <section id="diagnosis" className="py-24 bg-[#080808] border-t border-zinc-900/80 relative overflow-hidden">
      <div className="absolute top-[15%] right-[5%] w-[40vw] h-[40vw] bg-[#C5A059]/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[8%] w-[35vw] h-[35vw] bg-zinc-950 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header block */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#C5A059] uppercase block mb-3 font-semibold">
            THE METAMORPHOSIS
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tighter text-white mb-4 uppercase leading-none">
            WATCH THE MENU{" "}
            <span className="font-serif italic font-normal text-[#C5A059] lowercase tracking-normal">
              come alive
            </span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400">
            The same dishes, two worlds apart. Toggle from the current static photography to
            the proposed cinematic motion menu — and watch the appetite follow.
          </p>
        </div>

        {/* Animated toggle */}
        <div className="flex justify-center mb-6">
          <div className="relative flex gap-1 p-1 rounded-sm border border-zinc-800/80 bg-[#0c0c0c]">
            {tabs.map((t) => {
              const active = mode === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => selectMode(t.id)}
                  className={`relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-xs transition-colors duration-300 cursor-pointer ${
                    active ? "text-black" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="menuToggle"
                      className="absolute inset-0 rounded-xs bg-gradient-to-r from-[#ca9d54] to-[#bc8239]"
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {t.icon}
                    <span className="flex flex-col items-start leading-none">
                      <span className="font-sans text-xs font-semibold tracking-wider uppercase">
                        {t.label}
                      </span>
                      <span
                        className={`font-mono text-[8px] tracking-wider uppercase mt-0.5 ${
                          active ? "text-black/70" : "text-zinc-600"
                        }`}
                      >
                        {t.sub}
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Context badge */}
        <div className="flex justify-center mb-14">
          <AnimatePresence mode="wait">
            <motion.span
              key={mode}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="font-mono text-[9px] tracking-[0.2em] uppercase text-zinc-500 flex items-center gap-2"
            >
              {mode === "photo" ? (
                <>
                  <Camera className="w-3 h-3" /> Static photography — current menu
                </>
              ) : (
                <>
                  <Sparkles className="w-3 h-3 text-[#C5A059]" /> Short-form video — proposed upgrade
                </>
              )}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Sections */}
        <div className="space-y-16">
          {MENU_SECTIONS.map((sec) => (
            <div key={sec.section}>
              <div className="flex items-center gap-4 mb-7">
                <span className="font-mono text-[9px] tracking-[0.25em] text-[#C5A059] uppercase whitespace-nowrap">
                  {sec.section}
                </span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800/80 to-transparent" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {sec.items.map((item, i) => (
                  <MenuCard key={item.name} item={item} mode={mode} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="font-serif italic text-lg text-zinc-300 max-w-md">
              "Motion doesn't just show the dish. It makes the guest hungry before they read a word."
            </p>
            <button className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ca9d54] to-[#bc8239] hover:from-[#d6b779] hover:to-[#ca9d54] text-black font-sans font-medium text-xs tracking-wider uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_18px_rgba(197,160,89,0.4)] active:scale-95 cursor-pointer">
              <Sparkles className="w-3.5 h-3.5" />
              Commission Your Motion Menu
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
