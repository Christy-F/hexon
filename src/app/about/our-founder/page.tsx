"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Award, BookOpen, Users, Briefcase, ChevronRight } from "lucide-react";

const achievements = [
  { icon: Award, label: "ICF Certified", sub: "Professional Coach" },
  { icon: Users, label: "50,000+", sub: "Professionals Trained" },
  { icon: Briefcase, label: "20+ Years", sub: "L&D Experience" },
  { icon: BookOpen, label: "360°", sub: "Industry Exposure" },
];

const expertise = [
  "Leadership Coaching",
  "POSH Training",
  "Corporate Training",
  "Competency Mapping",
  "L&D Consulting",
  "Behavioural Training",
  "Skill Matrix",
  "Executive Coaching",
];

export default function OurFounderPage() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);
  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), springConfig);
  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }

  return (
    <main className="w-full min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Ambient background blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[var(--color-hexon-teal)]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-[var(--color-hexon-gold)]/5 rounded-full blur-[120px]" />
      </div>

      {/* Hero header */}
      <div className="relative z-10 pt-10 pb-20 px-6 text-center">
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[var(--color-hexon-gold)] text-sm tracking-[0.3em] uppercase font-semibold mb-4"
        >
          About Us
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl font-serif text-white mb-4 leading-none"
        >
          Our Founder
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-24 h-[2px] bg-[var(--color-hexon-teal)] mx-auto"
        /> */}
      </div>

      {/* Main content — side by side */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* LEFT — 3D interactive image card */}
        <motion.div
          ref={cardRef}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative cursor-none select-none"
        >
          {/* Glow ring */}
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0.3 }}
            transition={{ duration: 0.4 }}
            className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-hexon-teal)] via-transparent to-[var(--color-hexon-gold)] opacity-30 blur-sm"
          />

          {/* Image card */}
          <div className="relative rounded-[2rem] overflow-hidden bg-black shadow-2xl h-[500px] lg:h-[660px]">
            {/* Spotlight overlay that follows cursor */}
            <motion.div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: useTransform(
                  [glowX, glowY],
                  ([x, y]) =>
                    `radial-gradient(circle at ${x}% ${y}%, rgba(0,173,179,0.25) 0%, transparent 60%)`
                ),
              }}
            />

            <img
              src="/assets/founder_img.png"
              alt="Archana Pandian – Founder of Hexon"
              className="w-full h-full object-cover object-top transition-transform duration-700"
              style={{ transform: isHovered ? "scale(1.06)" : "scale(1)" }}
            />

            {/* Bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-20" />
          </div>
        </motion.div>

        {/* RIGHT — Text + stats + tags */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col justify-center pt-8 lg:pt-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-2">Archana Pandian</h2>
          <p className="text-[var(--color-hexon-teal)] font-medium tracking-wide uppercase text-sm mb-10">
            Professional Certified Coach (ICF) • Founder of Hexon
          </p>

          {/* Achievement grid */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                whileHover={{ scale: 1.04, borderColor: "rgba(0,173,179,0.5)" }}
                className="bg-white/3 border border-white/8 rounded-2xl p-4 flex items-center gap-3 cursor-default transition-colors duration-300"
              >
                <div className="bg-[var(--color-hexon-teal)]/10 p-2.5 rounded-xl shrink-0">
                  <item.icon size={18} className="text-[var(--color-hexon-teal)]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                  <p className="text-gray-500 text-xs">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bio text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white italic border-l-4 border-[var(--color-hexon-gold)] pl-6 py-2 mb-6 leading-relaxed"
          >
            Mrs. Archana Pandian is a Professional Certified Coach (ICF) — Leadership Coach, Corporate Behavioural Trainer, Learning & Capability Consultant, POSH Consultant and Founder of Hexon.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-base leading-relaxed mb-10"
          >
            She has over 20+ years of experience in Learning & Development across IT and non-IT industries (MNCs), giving her a 360-degree exposure in the L&D — HR space, encompassing Training need analysis, Competency mapping, Organizational Development Consulting, and delivery of behavioural programs across all management levels.
          </motion.p>

          {/* Expertise tags */}
          <div>
            <p className="text-gray-500 text-xs tracking-widest uppercase mb-4">Areas of Expertise</p>
            <div className="flex flex-wrap gap-2">
              {expertise.map((tag, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * idx }}
                  whileHover={{ scale: 1.08, backgroundColor: "rgba(0,173,179,0.15)", borderColor: "rgba(0,173,179,0.6)" }}
                  className="text-xs text-gray-300 border border-white/10 rounded-full px-4 py-1.5 cursor-default transition-colors duration-300"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.a
            href="/book-an-appointment"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex items-center gap-2 bg-[var(--color-hexon-teal)] text-white rounded-full px-8 py-4 font-medium text-sm hover:brightness-110 transition-all duration-300 self-start"
          >
            Book a Session with Archana
            <ChevronRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </main>
  );
}
