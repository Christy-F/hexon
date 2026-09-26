"use client";

import { motion } from "framer-motion";

export default function CertificationsPage() {
  return (
    <main className="w-full min-h-screen bg-white pt-32 pb-24 px-6 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center mb-16 mt-20"
      >
        <h1 className="text-[var(--color-hexon-gold)] text-sm tracking-[0.2em] uppercase font-semibold mb-6">
          About Us
        </h1>
        <h2 className="text-5xl md:text-7xl font-serif text-zinc-900 mb-8">
          Certifications & Credentials.
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full h-[400px] rounded-3xl overflow-hidden mb-16 relative group"
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2940&auto=format&fit=crop" alt="Certifications and Credentials" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
        className="max-w-3xl w-full"
      >
        <ul className="space-y-6">
          <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }} className="bg-white border border-black/10 p-6 rounded-2xl flex items-start gap-4 hover:border-[var(--color-hexon-teal)]/50 transition-colors duration-300">
            <span className="text-[var(--color-hexon-teal)] mt-1">✦</span>
            <p className="text-gray-700 text-lg">
              <strong className="text-zinc-900">"Competency based interviews"</strong> Interviewing skills, train the trainer certified by <em className="text-[var(--color-hexon-gold)]">Hemsley Fraser</em>.
            </p>
          </motion.li>
          <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }} className="bg-white border border-black/10 p-6 rounded-2xl flex items-start gap-4 hover:border-[var(--color-hexon-teal)]/50 transition-colors duration-300">
            <span className="text-[var(--color-hexon-teal)] mt-1">✦</span>
            <p className="text-gray-700 text-lg">
              Completed <strong className="text-zinc-900">"Accredited Coach Training Program"</strong> from <em className="text-[var(--color-hexon-gold)]">Coacharya</em>.
            </p>
          </motion.li>
          <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }} className="bg-white border border-black/10 p-6 rounded-2xl flex items-start gap-4 hover:border-[var(--color-hexon-teal)]/50 transition-colors duration-300">
            <span className="text-[var(--color-hexon-teal)] mt-1">✦</span>
            <p className="text-gray-700 text-lg">
              <strong className="text-zinc-900">"Instructional Design Basics"</strong> certified by <em className="text-[var(--color-hexon-gold)]">Vyaktitva</em>.
            </p>
          </motion.li>
        </ul>
      </motion.div>
    </main>
  );
}
