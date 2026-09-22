"use client";

import React from "react";
import { motion } from "framer-motion";

const brands = [
  "Tata Consultancy Services",
  "Infosys",
  "Wipro",
  "HCL Technologies",
  "Tech Mahindra",
  "Cognizant",
  "Capgemini",
  "IBM",
  "Accenture",
  "L&T Infotech",
];

export default function BrandsMarquee() {
  return (
    <section className="relative w-full py-20 bg-[#0a0a0a] border-t border-white/5 overflow-hidden flex flex-col items-center">
      <h4 className="text-[var(--color-hexon-gold)] text-xs tracking-[0.2em] uppercase font-semibold mb-12">
        Trusted By Industry Leaders
      </h4>
      
      {/* Marquee Container */}
      <div className="w-full flex overflow-hidden relative">
        {/* Left/Right Fades */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          className="flex whitespace-nowrap gap-20 items-center w-max px-10"
        >
          {/* Double the list to ensure smooth infinite scrolling */}
          {[...brands, ...brands].map((brand, idx) => (
            <div key={idx} className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              <span className="text-2xl md:text-3xl font-serif text-white tracking-wide">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
