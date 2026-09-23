"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Briefcase, Users, Award, Smile } from "lucide-react";

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const target = match ? parseFloat(match[2].replace(/,/g, "")) : 0;
  const suffix = match ? match[3] : value;

  useEffect(() => {
    if (!isInView || target === 0) return;

    let startTime: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setDisplayValue(Math.floor(easeOut * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(target);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {isInView ? displayValue.toLocaleString() : 0}
      {suffix}
    </span>
  );
}

const services = [
  {
    title: "Corporate Training",
    description: "Highly engaging boot camps and experiential workshops designed to build a high-performance culture.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop",
  },
  {
    title: "Leadership Program",
    description: "Empower your managers to become visionary leaders with our specialized coaching modules.",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2940&auto=format&fit=crop",
  },
  {
    title: "POSH Training",
    description: "Create a safe, inclusive, and legally compliant workplace through comprehensive sensitization.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2938&auto=format&fit=crop",
  },
  {
    title: "English Language Course",
    description: "Master professional communication and elevate your global business presence.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop",
  },
  {
    title: "1-on-1 Coaching",
    description: "Personalized skill enhancement to unleash individual potential.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop",
  },
  {
    title: "L&D Consulting",
    description: "Transforming organizations into continuous learning hubs.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2874&auto=format&fit=crop",
  }
];

export default function ServicesAndStats() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate transform for 6 items. -55% usually covers the remaining items smoothly.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <>
      {/* 3. SERVICES SHOWCASE */}
      <section ref={containerRef} className="relative w-full md:h-[300vh] bg-[#050505]">
        <div className="md:sticky top-0 md:h-screen w-full flex flex-col justify-center overflow-hidden py-24 md:py-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-7xl mx-auto px-6 mb-12"
          >
            <h2 className="text-[var(--color-hexon-gold)] text-sm tracking-[0.2em] uppercase font-semibold mb-4">
              Our Expertise
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">
              Solutions that drive impact.
            </h3>
          </motion.div>

          {/* Horizontal Scrolling Cards (Mobile: Vertical Stack) */}
          <div className="w-full relative md:h-[400px]">
            {/* Mobile View: Vertical Stack */}
            <div className="flex flex-col gap-8 px-6 md:hidden">
              {services.map((service, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  key={idx}
                  className="relative w-full h-[400px] rounded-3xl overflow-hidden group shrink-0"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <div className="w-10 h-[2px] bg-[var(--color-hexon-teal)] mb-4" />
                    <h4 className="text-2xl font-serif text-white mb-3">{service.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop View: Horizontal Scroll */}
            <motion.div
              style={{ x }}
              className="hidden md:flex gap-8 px-24 absolute left-0"
            >
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="relative w-[450px] h-[400px] rounded-3xl overflow-hidden group shrink-0"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-10 h-[2px] bg-[var(--color-hexon-teal)] mb-4" />
                    <h4 className="text-2xl font-serif text-white mb-3">{service.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. ANIMATED STATS / IMPACT */}
      <section className="relative w-full py-24 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { value: "20+", label: "Years Experience", icon: Briefcase },
            { value: "50k+", label: "Professionals Trained", icon: Users },
            { value: "200+", label: "Corporate Clients", icon: Award },
            { value: "98%", label: "Satisfaction Rate", icon: Smile },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="mb-6 text-[var(--color-hexon-teal)] bg-[var(--color-hexon-teal)]/10 p-4 rounded-full">
                <stat.icon size={36} strokeWidth={1.5} />
              </div>
              <h5 className="text-4xl md:text-6xl font-serif text-white mb-2">
                <AnimatedCounter value={stat.value} />
              </h5>
              <span className="text-[var(--color-hexon-teal)] text-sm tracking-widest uppercase font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. VIDEO SHOWCASE */}
      <section className="relative w-full h-[60vh] md:h-[80vh] bg-black overflow-hidden border-y border-white/5">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          {/* Default Unsplash/Pexels video placeholder. Can be replaced with actual video link */}
          <source src="https://videos.pexels.com/video-files/3163534/3163534-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="relative z-10 w-full h-full flex items-center justify-center text-center px-6">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white max-w-5xl leading-tight drop-shadow-2xl"
          >
            Transforming Potential into <strong className="text-[var(--color-hexon-gold)] font-normal italic">Excellence</strong>
          </motion.h3>
        </div>
      </section>
    </>
  );
}
