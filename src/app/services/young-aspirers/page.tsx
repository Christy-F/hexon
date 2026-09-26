"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, CheckCircle2, FileDown } from "lucide-react";

export default function YoungAspirersPage() {
  const topics = [
    "Goal Setting (SMART goals)",
    "SWOT Analysis",
    "Effective communication",
    "Extempore and public speaking skills",
    "Listening skills",
    "Time management",
    "Presentation skills",
    "Aptitude and Logical Reasoning basics",
    "Body language",
    "Attitude",
    "Group Discussion skills",
    "Resume preparation",
    "Interview skills",
    "Mock personal interviews",
    "Corporate etiquette"
  ];

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
            Young Aspirers.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-xl font-light leading-relaxed max-w-xl"
          >
            A Unique Employability Training Program designed to transform youth and freshers into "Industry Ready" and "Plug-n-Play" professionals.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-1 relative w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop" alt="Young Aspirers" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
        </motion.div>
      </div>

      {/* Main Original Content */}
      <div className="max-w-4xl w-full mb-24 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose  prose-lg max-w-none text-gray-600 font-light"
        >
          <p className="text-xl text-gray-700 leading-relaxed">
            The objective of this program is to transform youth / freshers coming out of colleges and make them fully prepared for the jobs waiting out in the job market, equip them with the ability to be successful in the selection process, be "Industry Ready" and "Plug-n-Play".
          </p>
          <p className="leading-relaxed mt-6">
            Every student wants a job that makes him a true professional who earns reasonably well. An essential requirement for getting a good job is adequate qualifications, domain skills combined with reasonably good communication and interpersonal skills. It is important to hone up your soft skills, and present yourself well during the selection processes. To be successful at work, one has to be proactive, enthusiastic, and flexible to adjust to the new work environment.
          </p>
          <p className="leading-relaxed mt-6">
            We have designed a unique program keeping in mind the current requirements of the industry that focuses predominantly on soft skills, communication skills and interpersonal skills. Thus providing an overall personality development for the youth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 border border-black/5 rounded-3xl p-10 mt-12"
        >
          <h3 className="text-2xl font-serif text-zinc-900 mb-4">Our Methodology</h3>
          <p className="text-gray-600 font-light leading-relaxed">
            The methodology adopted is activity-based learning wherein maximum time is devoted to students' participation through role-plays, interactive activities, discussions and mock interview sessions.
          </p>
        </motion.div>
      </div>

      {/* Topics Covered Grid */}
      <div className="max-w-6xl w-full mb-32">
        <h3 className="text-3xl font-serif text-zinc-900 mb-12 text-center">The topics covered during the training comprises…</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 5) * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 border border-black/5 hover:border-[var(--color-hexon-teal)]/40 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--color-hexon-teal)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-hexon-teal)]/20 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-hexon-teal)]" />
              </div>
              <span className="text-gray-700 font-light text-sm md:text-base group-hover:text-zinc-900 transition-colors">{topic}</span>
            </motion.div>
          ))}
        </div>
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
          Ready to jumpstart your career?
        </h3>
        <p className="text-zinc-900/90 text-lg font-light mb-10 relative z-10 max-w-2xl mx-auto">
          To know more about this program, you may call us, write to us or text us. Download our brochure or connect with our team.
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
