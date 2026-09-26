"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-white pt-32 pb-24 px-6 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center mb-16 mt-20"
      >
        <h1 className="text-[var(--color-hexon-gold)] text-sm tracking-[0.2em] uppercase font-semibold mb-6">
          Connect With Us
        </h1>
        <h2 className="text-5xl md:text-7xl font-serif text-zinc-900 mb-8">
          Contact Us.
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/[0.02] border border-black/5 p-12 rounded-3xl"
      >
        
        {/* Form Side */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
          }}
          className="flex flex-col gap-6"
        >
          <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="mb-2">
            <h3 className="text-2xl font-serif text-zinc-900 mb-2">We'd love to hear from you</h3>
            <p className="text-gray-600 font-light text-sm">Please fill out the following form in order to contact us:</p>
          </motion.div>
          <motion.input variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} type="text" placeholder="Enter Name" className="w-full bg-transparent border-b border-black/20 py-4 text-zinc-900 focus:outline-none focus:border-[var(--color-hexon-teal)] transition-colors" />
          <motion.input variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-black/20 py-4 text-zinc-900 focus:outline-none focus:border-[var(--color-hexon-teal)] transition-colors" />
          <motion.input variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} type="tel" placeholder="Phone Number" className="w-full bg-transparent border-b border-black/20 py-4 text-zinc-900 focus:outline-none focus:border-[var(--color-hexon-teal)] transition-colors" />
          <motion.textarea variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} rows={4} placeholder="How can we help you?" className="w-full bg-transparent border-b border-black/20 py-4 text-zinc-900 focus:outline-none focus:border-[var(--color-hexon-teal)] transition-colors resize-none" />
          <motion.button variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mt-4 self-start rounded-full bg-[var(--color-hexon-teal)] px-10 py-4 text-zinc-900 font-medium hover:bg-white hover:text-[var(--color-hexon-teal)] transition-colors shadow-lg hover:shadow-xl hover:scale-105 duration-300">
            Send Message
          </motion.button>
        </motion.div>

        {/* Info Side */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.5 } }
          }}
          className="flex flex-col justify-center gap-10 md:pl-12"
        >
          <motion.div variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
            <h4 className="text-[var(--color-hexon-gold)] uppercase tracking-widest text-xs font-semibold mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Address
            </h4>
            <p className="text-xl font-serif text-zinc-900 leading-relaxed">
              Velachery, Chennai,<br />Tamilnadu.
            </p>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
            <h4 className="text-[var(--color-hexon-gold)] uppercase tracking-widest text-xs font-semibold mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email
            </h4>
            <a href="mailto:contact@hexonindia.in" className="text-2xl font-serif text-zinc-900 hover:text-[var(--color-hexon-teal)] transition-colors">contact@hexonindia.in</a>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
            <h4 className="text-[var(--color-hexon-gold)] uppercase tracking-widest text-xs font-semibold mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4" /> Phone
            </h4>
            <a href="tel:+917550553355" className="text-2xl font-serif text-zinc-900 hover:text-[var(--color-hexon-teal)] transition-colors">+91 7550553355</a>
          </motion.div>
        </motion.div>

      </motion.div>
    </main>
  );
}
