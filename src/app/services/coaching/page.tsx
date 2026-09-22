"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, FileDown, Target, Lightbulb, Users } from "lucide-react";

export default function CoachingPage() {
  return (
    <main className="w-full min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 flex flex-col items-center overflow-hidden">
      
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
            className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight"
          >
            Coaching.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl font-light leading-relaxed max-w-xl"
          >
            "Partnering with the clients in a thought-provoking & creative process that inspires them to maximize their personal & the professional potential." - ICF
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-1 relative w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop" alt="Coaching" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
        </motion.div>
      </div>

      {/* Main Original Content */}
      <div className="max-w-4xl w-full mb-32 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-invert prose-lg max-w-none text-gray-400 font-light"
        >
          <p className="text-xl text-gray-300 leading-relaxed">
            Coaches partner with the clients in a collaborative process. The objective for each conversation is developed by both the parties. The coaches gather information during the conversation rather than giving advice. Throughout the process the coaches are expected to “being present” with the client & “being non-judgemental”.
          </p>
          <p className="leading-relaxed mt-6">
            A coach's primary job during the coaching process is to ask questions that will provoke thoughts of the coachee & will enable them to reflect and self-discover. A coach encourages the client to formulate his/her own learning, make the client come with a solution, how to achieve it, what is the future plan, what is the support system required, what is the deadline to accomplish the same etc.
          </p>
        </motion.div>
      </div>

      {/* Offerings */}
      <div className="max-w-6xl w-full mb-32">
        <h3 className="text-3xl font-serif text-white mb-12 text-center">At Hexon we offer</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0f0f0f] rounded-3xl p-10 border border-[var(--color-hexon-teal)]/20 hover:border-[var(--color-hexon-teal)]/50 transition-colors duration-300 group flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-hexon-teal)]/5 blur-[50px] rounded-full group-hover:bg-[var(--color-hexon-teal)]/10 transition-colors"></div>
            <div className="w-16 h-16 rounded-2xl bg-[var(--color-hexon-teal)]/10 flex items-center justify-center mb-6 border border-[var(--color-hexon-teal)]/20 relative z-10 group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8 text-[var(--color-hexon-teal)]" />
            </div>
            <h3 className="text-2xl font-serif text-white mb-4 relative z-10">1-1 Coaching</h3>
            <p className="text-gray-400 font-light leading-relaxed relative z-10">
              Personalized, individual sessions designed to deeply explore your personal and professional potential.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#0f0f0f] rounded-3xl p-10 border border-[var(--color-hexon-gold)]/20 hover:border-[var(--color-hexon-gold)]/50 transition-colors duration-300 group flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-hexon-gold)]/5 blur-[50px] rounded-full group-hover:bg-[var(--color-hexon-gold)]/10 transition-colors"></div>
            <div className="w-16 h-16 rounded-2xl bg-[var(--color-hexon-gold)]/10 flex items-center justify-center mb-6 border border-[var(--color-hexon-gold)]/20 relative z-10 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-[var(--color-hexon-gold)]" />
            </div>
            <h3 className="text-2xl font-serif text-white mb-4 relative z-10">Group / Team Coaching</h3>
            <p className="text-gray-400 font-light leading-relaxed relative z-10">
              Collaborative team sessions aimed at aligning goals, improving synergy, and collective problem-solving.
            </p>
          </motion.div>

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
        <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 relative z-10">
          Maximize Your Potential
        </h3>
        <p className="text-white/90 text-lg font-light mb-10 relative z-10 max-w-2xl mx-auto">
          To know more about this program, you may call us, write to us or text us. Download our brochure or connect with our team.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 mb-10">
          <a href="tel:+917550553355" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors">
            <Phone className="w-5 h-5" />
            <span className="font-medium">+91 7550553355</span>
          </a>
          <div className="hidden sm:block w-px h-6 bg-white/30"></div>
          <a href="mailto:contact@hexonindia.in" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors">
            <Mail className="w-5 h-5" />
            <span className="font-medium">contact@hexonindia.in</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
          <Link href="/contact" className="bg-white text-[var(--color-hexon-teal)] px-8 py-4 rounded-full font-medium tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300">
            Reach Out to Us
          </Link>
          <button className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
            <FileDown className="w-5 h-5" />
            Download Brochure
          </button>
        </div>
      </motion.div>

    </main>
  );
}
