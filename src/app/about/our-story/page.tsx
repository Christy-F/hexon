"use client";

import { motion } from "framer-motion";

export default function OurStoryPage() {
  return (
    <main className="w-full min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 flex flex-col items-center overflow-hidden">
      <div className="max-w-4xl text-center mb-16 mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[var(--color-hexon-gold)] text-sm tracking-[0.2em] uppercase font-semibold mb-6"
        >
          About Us
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-serif text-white mb-8"
        >
          Our Story.
        </motion.h2>
      </div>

      {/* Interlocking 3D Cards Vision & Values Section */}
      <div className="relative max-w-5xl w-full md:h-[450px] mb-32 mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 group/section">
        
        {/* Vision Card (Left / Back) */}
        <motion.div 
          initial={{ opacity: 0, x: -50, rotate: -3 }}
          whileInView={{ opacity: 1, x: 0, rotate: -3 }}
          whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative md:absolute left-0 md:left-8 top-0 md:top-4 w-full md:w-[55%] bg-gradient-to-br from-[#00ADB3]/95 to-[#007b80]/95 p-10 md:p-14 rounded-[2.5rem] shadow-2xl z-10 backdrop-blur-md border border-white/20 origin-bottom-left flex flex-col justify-center"
        >
          <div className="text-white/70 font-mono text-xs tracking-[0.3em] uppercase mb-8 flex items-center gap-4">
            <span className="w-12 h-px bg-white/50"></span>
            01 // Vision
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">Enabling individuals</h3>
          <p className="text-white/90 text-xl md:text-2xl font-light leading-relaxed">
            to maximize their <span className="font-semibold italic text-white">potential.</span>
          </p>
        </motion.div>

        {/* Values Card (Right / Front) */}
        <motion.div 
          initial={{ opacity: 0, x: 50, rotate: 3 }}
          whileInView={{ opacity: 1, x: 0, rotate: 3 }}
          whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="relative md:absolute right-0 md:right-8 bottom-0 md:-bottom-4 w-full md:w-[55%] bg-gradient-to-br from-[#1a1a1a]/80 to-[#050505]/95 p-10 md:p-14 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-20 backdrop-blur-2xl border border-white/10 origin-top-right flex flex-col justify-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-hexon-gold)]/10 blur-[80px] rounded-full"></div>
          
          <div className="relative z-10">
            <div className="text-[var(--color-hexon-gold)] font-mono text-xs tracking-[0.3em] uppercase mb-8 flex items-center gap-4">
              <span className="w-12 h-px bg-[var(--color-hexon-gold)]/50"></span>
              02 // Values
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">Honesty, Commitment</h3>
            <p className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed">
              & <span className="font-semibold italic text-[var(--color-hexon-gold)]">Consistent.</span>
            </p>
          </div>
        </motion.div>

      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden mb-24 relative shadow-2xl"
      >
        <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-500" />
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop" alt="Our Story" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
        className="max-w-4xl text-gray-300 text-lg md:text-xl font-light leading-relaxed space-y-6"
      >
        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          Hexon is a company dedicated to provide a plethora of learning solutions for various organisations and individuals. We aim at improving the overall business performance by enhancing the employees' skillsets. We offer highly engaging boot camps, experiential corporate trainings, competency-based workshops, one to one skill enhancement programs and coaching services in a structured way with a definite end objective.
        </motion.p>
        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          Over the last decade, the global workforce has been continually evolving and there is a constant need for reskilling & upskilling. We at Hexon understand client requirements through several interactions, we address the soft skills learning gaps & align the learning curriculum to the client's vision & values.
        </motion.p>
        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          We adapt to meet the changing needs of the organisations & create a value-based innovative workplace learning through various interventions.
        </motion.p>
        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          Our Coaching interventions help companies develop their people capabilities at all levels.
        </motion.p>
        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          We not only train & coach working professionals across industries, we are committed to engage with students, entrepreneurs & young aspirers there by supporting them in their personal & professional growth.
        </motion.p>
        <motion.p variants={{ hidden: { opacity: 0, y: 20, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } } }} className="text-white text-2xl font-serif italic mt-16 text-center">
          And "Yes" we believe every individual is unique & talented!
        </motion.p>
        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-[var(--color-hexon-gold)] text-xl font-medium text-center">
          Thus, we nudge & guide them to enhance their overall persona
        </motion.p>
      </motion.div>
    </main>
  );
}
