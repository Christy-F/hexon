"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { name: "Prasanth", feedback: "The corporate training program completely transformed our team's dynamic. Highly recommended!" },
  { name: "Anjali M.", feedback: "Hexon's POSH training was insightful, clear, and perfectly tailored to our company culture." },
  { name: "Rahul T.", feedback: "The 1-on-1 leadership coaching helped me unlock my full potential. Exceptional experience." }
];

export default function GalleryAndTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* 5. GALLERY SECTION */}
      <section className="relative w-full py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 md:gap-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[var(--color-hexon-gold)] text-sm tracking-[0.2em] uppercase font-semibold mb-4">
                Our Workshops
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif text-zinc-900">
                Moments of Growth.
              </h3>
            </motion.div>
            <motion.button 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-6 md:mt-0 px-6 py-2 rounded-full border border-[var(--color-hexon-teal)] text-[var(--color-hexon-teal)] hover:bg-[var(--color-hexon-teal)] hover:text-zinc-900 transition-colors duration-300"
            >
              View Full Gallery
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2940&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2874&auto=format&fit=crop",
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${img})` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION - SLIDER */}
      <section className="relative w-full py-32 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--color-hexon-gold)] text-sm tracking-[0.2em] uppercase font-semibold mb-16"
          >
            Client Success
          </motion.h2>
          
          <div className="relative h-[250px] md:h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[150px] text-zinc-900/5 font-serif leading-none">"</span>
                
                <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-8 relative z-10 italic">
                  "{testimonials[currentIndex].feedback}"
                </p>
                <div className="w-12 h-[1px] bg-[var(--color-hexon-teal)] mb-4" />
                <h5 className="text-zinc-900 font-medium uppercase tracking-widest text-sm">
                  {testimonials[currentIndex].name}
                </h5>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${idx === currentIndex ? "bg-[var(--color-hexon-teal)]" : "bg-black/20 hover:bg-black/40"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
