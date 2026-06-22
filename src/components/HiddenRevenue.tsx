/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Hidden Revenue — an interactive "back-of-napkin" revenue calculator,
 * restyled from a drop-in HTML block to match the Conscious Concepts
 * cinematic gold-on-carbon brand. Replaces the former Validated Metrics
 * bento grid (kept at id="outcomes" so navigation anchors still resolve).
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function HiddenRevenue() {
  const [orders, setOrders] = useState(12);
  const [ticket, setTicket] = useState(34);
  const annual = orders * ticket * 52;

  return (
    <section
      id="outcomes"
      className="py-24 bg-[#080808] border-t border-zinc-900/80 relative overflow-hidden"
    >
      {/* warm service-light glow, brand copper */}
      <div className="absolute top-[12%] right-[14%] w-[42vw] h-[42vw] bg-[#C5A059]/4 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[18%] left-[8%] w-[34vw] h-[34vw] bg-zinc-950 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — the argument */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#C5A059] uppercase block mb-5 font-semibold">
              // Hidden Revenue
            </span>

            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tighter text-white leading-[1.05] mb-6 uppercase">
              The orders your visuals{" "}
              <span className="font-serif italic font-normal text-[#C5A059] lowercase tracking-normal">
                aren't closing.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl mb-8">
              The distance between a menu that gets scrolled past and one that gets
              ordered from is smaller than most operators think. That distance is
              worth real money — every single week.
            </p>

            <blockquote className="border-l-2 border-[#C5A059] pl-6 py-1 mb-8">
              <p className="font-serif text-lg sm:text-xl text-white leading-snug mb-3">
                "Win just <span className="text-[#C5A059] font-semibold">12 more orders a week</span> at
                a $34 average ticket and that's over{" "}
                <span className="text-[#C5A059] font-semibold">$21,000 a year</span> — same traffic,
                no commission to anyone."
              </p>
              <cite className="font-mono text-[10px] not-italic tracking-wider text-zinc-500 uppercase">
                Quan · Founder, Konscious Koncepts
              </cite>
            </blockquote>

            <p className="font-sans text-sm text-zinc-500 leading-relaxed max-w-xl mb-9">
              Yet most restaurants still treat photography and menu design as
              decoration — something you get around to. But to a hungry stranger
              deciding between you and the place next door, your visuals{" "}
              <em className="text-zinc-300 not-italic font-serif italic">are</em> the restaurant.
              We turn that first glance into a filled table.
            </p>

            <button
              onClick={() => scrollTo("diagnosis")}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#ca9d54] to-[#bc8239] hover:from-[#d6b779] hover:to-[#ca9d54] text-black font-sans font-semibold text-sm tracking-wide rounded-sm transition-all duration-300 hover:shadow-[0_0_18px_rgba(197,160,89,0.4)] active:scale-95 cursor-pointer"
            >
              See what your visuals are worth
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* RIGHT — the receipt (signature) */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1.4 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-5"
          >
            <div className="relative w-full max-w-[360px] bg-[#f7f1e6] text-[#2a211b] px-8 pt-9 pb-10 rounded-[3px] shadow-[0_30px_60px_-22px_rgba(0,0,0,0.65),0_4px_14px_rgba(0,0,0,0.3)]">
              <div className="cc-perf cc-perf-top" aria-hidden />

              {/* head */}
              <div className="text-center border-b-2 border-dashed border-[#d8cdb8] pb-4 mb-5">
                <p className="font-mono font-bold text-[13px] tracking-[0.14em]">
                  KONSCIOUS KONCEPTS — YOUR UPSIDE
                </p>
                <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-[#9c8f78] mt-1">
                  back-of-napkin math
                </p>
              </div>

              {/* control: orders */}
              <div className="mb-5">
                <div className="flex items-center justify-between">
                  <label htmlFor="cc-orders" className="font-mono text-[11px] tracking-wider uppercase text-[#6f6453]">
                    Extra orders / week
                  </label>
                  <output className="font-mono font-bold text-sm text-[#bc6b2c]">{orders}</output>
                </div>
                <input
                  id="cc-orders"
                  type="range"
                  min={0}
                  max={40}
                  step={1}
                  value={orders}
                  onChange={(e) => setOrders(+e.target.value)}
                  className="cc-range"
                />
              </div>

              {/* control: ticket */}
              <div className="mb-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="cc-ticket" className="font-mono text-[11px] tracking-wider uppercase text-[#6f6453]">
                    Average ticket
                  </label>
                  <output className="font-mono font-bold text-sm text-[#bc6b2c]">${ticket}</output>
                </div>
                <input
                  id="cc-ticket"
                  type="range"
                  min={10}
                  max={80}
                  step={1}
                  value={ticket}
                  onChange={(e) => setTicket(+e.target.value)}
                  className="cc-range"
                />
              </div>

              {/* line items */}
              <dl className="mt-6 border-t-2 border-dashed border-[#d8cdb8] pt-4 font-mono text-[13px] text-[#5a5042]">
                <div className="flex justify-between py-[5px]">
                  <dt>Orders / week</dt>
                  <dd className="font-bold text-[#2a211b]">{orders}</dd>
                </div>
                <div className="flex justify-between py-[5px]">
                  <dt>× Average ticket</dt>
                  <dd className="font-bold text-[#2a211b]">${ticket}</dd>
                </div>
                <div className="flex justify-between py-[5px]">
                  <dt>× 52 weeks</dt>
                  <dd className="font-bold text-[#2a211b]">52</dd>
                </div>
              </dl>

              {/* total */}
              <div className="mt-4 border-t-[3px] border-double border-[#2a211b] pt-4 text-center">
                <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#6f6453] mb-1">
                  Added revenue / year
                </p>
                <p className="font-sans font-extrabold text-4xl sm:text-[44px] leading-none text-[#a3652c] tabular-nums tracking-tight">
                  ${annual.toLocaleString("en-US")}
                </p>
                <p className="font-mono text-[11px] text-[#9c8f78] mt-2.5">
                  Commission-free · from traffic you already have
                </p>
              </div>

              {/* stamp */}
              <div className="absolute bottom-7 right-4 font-mono font-bold text-[13px] tracking-wide text-[#a3652c] border-2 border-[#a3652c] rounded-[5px] px-2.5 py-1 -rotate-[9deg] opacity-80 select-none">
                ON THE TABLE
              </div>

              <div className="cc-perf cc-perf-bottom" aria-hidden />
            </div>

            {/* Disclosure */}
            <p className="font-sans text-[10px] leading-relaxed text-zinc-600 italic text-center max-w-[320px]">
              Numbers are an example to show the math — your mileage will vary.
              We can't guarantee specific results.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
