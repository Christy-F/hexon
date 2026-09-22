"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function CorporateTrainingPage() {
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
            Corporate Training Programs.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl font-light leading-relaxed max-w-xl"
          >
            Empower your workforce with targeted learning. A well-trained team is the cornerstone of high productivity, innovation, and long-term business success.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-1 relative w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop" alt="Corporate Training" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
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
            Excellent training that is relevant, creative, engaging and meaningful is required. Organizations use corporate training for their employees to keep up with industry trends, foster innovation, and increase competitive advantage. The best corporate training programs use a variety of media to educate. Live in-person seminars or workshops where employees sit for a long period in a room, reading text, watching videos, or taking quizzes, are still the go-to methods to train employees.
          </p>
          <p className="leading-relaxed mt-6">
            The term "Training" refers to the acquisition of knowledge, skills, and competencies as a result of the teaching of vocational or practical skills and knowledge that relate to specific useful competencies. Training has specific goals of improving one's capability, capacity, productivity and performance.
          </p>
          <p className="leading-relaxed mt-6">
            In today's world, a successful business model relies heavily on highly trained staff. As corporate entities work their way in cutthroat markets, it is inevitable for corporate staff to undergo rigorous training in line with international standards.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0f0f0f] border border-white/5 rounded-3xl p-10 mt-12"
        >
          <h3 className="text-3xl font-serif text-white mb-6">Learning Interventions Offered</h3>
          <p className="text-gray-400 font-light leading-relaxed mb-6">
            Soft Skills, Behavioural and Competency based Trainings are designed with great diligence. It focuses intensely on meeting objectives and goals in the present to align with the core philosophy, culture and future focus of the organization.
          </p>
          <p className="text-gray-400 font-light leading-relaxed">
            The programs are designed based on detailed diagnosis. To establish effectiveness the workshops are based on Kolb's adult learning principles, experiential methodologies, role plays, case studies and psychometrics among other time-tested ways of facilitation.
          </p>
        </motion.div>
      </div>

      {/* Main Content Flow - Features / Modes */}
      <div className="max-w-6xl w-full mb-32">
        <h3 className="text-3xl font-serif text-white mb-12 text-center">Delivery Modes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "In Person Intervention", desc: "Instructor-Led Classroom sessions tailored for deep engagement." },
            { title: "Virtual (ILT)", desc: "Interactive online sessions offering the same rigor as in-person training." },
            { title: "Pre-recorded E-learning", desc: "Self-paced modules allowing flexibility for your team." },
            { title: "Micro Learning", desc: "Bite-sized, focused learning paths for quick knowledge retention." }
          ].map((mode, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0f0f0f] rounded-3xl p-8 border border-white/5 hover:border-[var(--color-hexon-teal)]/30 transition-colors duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-hexon-teal)]/10 blur-[50px] rounded-full group-hover:bg-[var(--color-hexon-teal)]/20 transition-colors"></div>
              <h3 className="text-xl font-serif text-white mb-3 relative z-10">{mode.title}</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed relative z-10">
                {mode.desc}
              </p>
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
        <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 relative z-10">
          Ready to elevate your team?
        </h3>
        <p className="text-white/90 text-lg font-light mb-10 relative z-10 max-w-2xl mx-auto">
          To know more about this program, you may call us, write to us or text us. Download our brochure or schedule a consultation today.
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
            Schedule a Consultation
          </Link>
          <button className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-white/10 transition-all duration-300">
            Download Brochure
          </button>
        </div>
      </motion.div>

    </main>
  );
}
