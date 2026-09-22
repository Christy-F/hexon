"use client";

import { motion } from "framer-motion";

export default function OurFounderPage() {
  return (
    <main className="w-full min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center mb-16 mt-20"
      >
        <h1 className="text-[var(--color-hexon-gold)] text-sm tracking-[0.2em] uppercase font-semibold mb-6">
          About Us
        </h1>
        <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
          Our Founder.
        </h2>
        <h3 className="text-3xl text-white font-light mb-4">Archana Pandian</h3>
        <p className="text-[var(--color-hexon-teal)] font-medium tracking-wide uppercase text-sm mb-12">
          Professional Certified Coach (ICF) • Founder of Hexon
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden mb-16 relative group"
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2940&auto=format&fit=crop" alt="Our Founder" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
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
        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-xl text-white italic border-l-4 border-[var(--color-hexon-gold)] pl-6 py-2 mb-8">
          Mrs. Archana Pandian is a Professional Certified Coach (ICF) - Leadership Coach, Corporate Behavioural Trainer, Learning & Capability Consultant, POSH Consultant and Founder of Hexon, an organisation that supports individuals & companies in their learning journey.
        </motion.p>
        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          She has over 20+ years of experience in Learning & Development space. A mix of years in IT Enabled industry, IT and in non-IT (primarily MNCs), has given her a 360-degree exposure in the L & D – HR space.
        </motion.p>
        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          Her career has encompassed the entire gamut of a Learning & Capability building role across varied industries, which includes Training need analysis, Developing Skill matrix & competency mapping, Organizational Development Consulting, Design, Develop & Create Behavioural training content, Delivery of various behavioural training programs to junior, mid-level & senior management professionals.
        </motion.p>
      </motion.div>
    </main>
  );
}
