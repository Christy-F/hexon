"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

// Ensure ScrollTrigger is registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const heroImages = [
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2874&auto=format&fit=crop"
];

export default function HeroAndAbout() {
  // Hero section refs & framer motion hooks
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroContainerRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // About section refs
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section
        ref={heroContainerRef}
        className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
            />
          </AnimatePresence>
        </motion.div>

        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-[var(--color-hexon-gold)] uppercase tracking-[0.2em] text-sm font-semibold mb-6 block">
              Premium Corporate Training
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-8"
          >
            Transforming <br />
            <span className="italic text-[var(--color-hexon-teal)]">
              Potential
            </span>{" "}
            into Excellence.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mb-12 font-light"
          >
            Hexon India provides elite soft skills, leadership, and POSH training designed to elevate your organization's performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <Link href="/book-an-appointment" className="relative group overflow-hidden rounded-full bg-[var(--color-hexon-teal)] px-8 py-4 text-white font-medium tracking-wide transition-all hover:scale-105 block">
              <span className="relative z-10">Book a Consultation</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </Link>
          </motion.div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-gray-400 text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-hexon-teal)] to-transparent"
          />
        </motion.div> */}
      </section>

      {/* 2. PROMOTIONAL SECTION */}
      <section className="relative w-full py-32 bg-[#050505] flex items-center justify-center px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              Every Individual Is <strong className="text-[var(--color-hexon-teal)] font-normal italic">Unique & Talented!</strong>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We at Hexon, along with our experts, help individuals to develop their growth mindset. We offer an array of soft skill training programs, 1-1 coaching to individuals to upgrade their skills & unleash their potential.
            </p>
            <Link href="/book-an-appointment" className="inline-block rounded-full bg-white text-black px-8 py-4 font-medium hover:bg-[var(--color-hexon-teal)] hover:text-white transition-colors duration-300">
              Book an Appointment
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[500px] w-full rounded-3xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop')" }} />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section
        ref={aboutSectionRef}
        className="relative w-full min-h-screen bg-[#0a0a0a] flex items-center justify-center py-32 px-6"
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 w-full"
            >
              <h2 className="text-[var(--color-hexon-gold)] text-sm tracking-[0.2em] uppercase font-semibold mb-6">
                Who We Are
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-8">
                A plethora of learning solutions for organizations and individuals.
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
                We aim at improving the overall business performance by enhancing employees' soft skills. We offer highly engaging boot camps, experiential corporate trainings, competency-based workshops, one-to-one skill enhancement programs, and coaching services in a structured way with a definite end objective.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                Over the last decade, the global workforce has been continually evolving, and there is a constant need for reskilling & upskilling.
              </p>
              <Link href="/about/our-story" className="inline-block rounded-full border border-white/20 text-white px-8 py-3 font-medium hover:bg-[var(--color-hexon-teal)] hover:border-transparent transition-colors duration-300">
                Read Our Story
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex-1 relative h-[500px] w-full rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2940&auto=format&fit=crop')" }} />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
