"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, CheckCircle2, FileDown, ShieldCheck, Users } from "lucide-react";

export default function PoshTrainingPage() {
  return (
    <main className="w-full min-h-screen bg-white pt-32 pb-24 px-6 flex flex-col items-center overflow-hidden">

      {/* Hero Section */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 mb-20 mt-12">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[var(--color-hexon-gold)] text-sm tracking-[0.2em] uppercase font-semibold mb-6 flex items-center gap-4"
          >
            <span className="w-8 h-px bg-[var(--color-hexon-gold)]"></span>
            Services
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-zinc-900 mb-8 leading-tight"
          >
            POSH Training.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-xl font-light leading-relaxed max-w-xl"
          >
            Prevention of Sexual Harassment. A safe workplace is a woman's legal right. Ensure compliance and foster a respectful environment.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-1 relative w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2938&auto=format&fit=crop" alt="POSH Training" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
        </motion.div>
      </div>

      {/* Main Original Content */}
      <div className="max-w-4xl w-full mb-32 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose  prose-lg max-w-none text-gray-600 font-light"
        >
          <p className="text-xl text-gray-700 leading-relaxed font-medium">
            A POSH training or POSH awareness program is aimed at educating the employees about what sexual harassment is. It is for educating them on what they can do if they encounter sexual harassment, how to seek help from the Internal Committee, and the whole complaint and redressal process.
          </p>
          <p className="leading-relaxed mt-6">
            Employee training is mandatory in India to comply with the PoSH Law. The organization should conduct sessions to make the employees aware of the different types of sexual harassment. Through POSH training, employees will be able to distinguish between appropriate and inappropriate behavior.
          </p>
          <p className="leading-relaxed mt-6">
            The PoSH Law aims to protect the women at workplace but it is not necessary for POSH training to be restricted to women in the organization. We strongly suggest that all organizations conduct POSH training for all employees irrespective of gender to ensure that no one suffers from sexual harassment at workplace.
          </p>
          <p className="leading-relaxed mt-6 font-medium text-[var(--color-hexon-teal)]">
            This training is delivered by POSH certified trainers.
          </p>
        </motion.div>
      </div>

      {/* Internal Complaints Committee Section */}
      <div className="max-w-6xl w-full mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-10 md:p-14 border border-black/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-hexon-gold)]/5 blur-[80px] rounded-full"></div>

          <div className="flex flex-col md:flex-row gap-12 relative z-10">
            <div className="md:w-1/3">
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-hexon-gold)]/10 flex items-center justify-center mb-6 border border-[var(--color-hexon-gold)]/20">
                <ShieldCheck className="w-8 h-8 text-[var(--color-hexon-gold)]" />
              </div>
              <h3 className="text-3xl font-serif text-zinc-900 mb-4">Internal Complaints Committee [IC]</h3>
              <p className="text-gray-600 font-light mb-6">Training for Managers</p>
            </div>

            <div className="md:w-2/3 space-y-6">
              <p className="text-gray-700 font-light leading-relaxed text-lg">
                It is essential that members of Internal Complaints Committee (IC) are trained to handle sexual harassment complaints. An IC member needs to develop empathy while handling the complaint. This is a very sensitive issue so extreme caution needs to be exercised when investigating into POSH complaints.
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                They need to understand the nuances of what constitutes sexual harassment at workplace, how to document complaints, what evidence is required during investigation, when they can resolve complaints through conciliation and finally preparing reports that are legally compliant. Thus, IC members are required to undergo POSH training to know more about the law, their roles & responsibilities and the right way of handling complaints.
              </p>
              <div className="pt-4 flex items-center gap-3">
                <Users className="w-5 h-5 text-[var(--color-hexon-teal)]" />
                <span className="text-[var(--color-hexon-teal)] font-medium">A POSH certified trainer delivers this training for managers and IC members of the organization.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full bg-gradient-to-br from-[var(--color-hexon-teal)] to-[#007b80] rounded-[2.5rem] p-12 md:p-16 text-center shadow-2xl relative overflow-hidden mb-8"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.1] mix-blend-overlay"></div>
        <h3 className="text-3xl md:text-4xl font-serif text-zinc-900 mb-6 relative z-10">
          Secure a Safe Workplace Today
        </h3>
        <p className="text-zinc-900/90 text-lg font-light mb-10 relative z-10 max-w-2xl mx-auto">
          To know more about this program, you may call us, write to us or text us. Download our brochure or connect with our team to arrange a POSH certification training for your employees.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 mb-10">
          <a href="tel:+917550553355" className="flex items-center gap-3 text-zinc-900 hover:text-zinc-900/80 transition-colors">
            <Phone className="w-5 h-5" />
            <span className="font-medium">+91 7550553355</span>
          </a>
          <div className="hidden sm:block w-px h-6 bg-black/30"></div>
          <a href="mailto:contact@hexonindia.in" className="flex items-center gap-3 text-zinc-900 hover:text-zinc-900/80 transition-colors">
            <Mail className="w-5 h-5" />
            <span className="font-medium">contact@hexonindia.in</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
          <Link href="/contact" className="bg-white text-[var(--color-hexon-teal)] px-8 py-4 rounded-full font-medium tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300">
            Reach Out to Us
          </Link>
          <button className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-black/10 transition-all duration-300 flex items-center gap-2">
            <FileDown className="w-5 h-5" />
            Download Brochure
          </button>
        </div>
      </motion.div>

    </main>
  );
}
