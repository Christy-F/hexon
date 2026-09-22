"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, FileDown, MessageSquare, Headphones, BookOpen, GraduationCap, Mic } from "lucide-react";

export default function EnglishLanguageCoursePage() {
  const courseCovers = [
    "Listening comprehension",
    "Pronunciation",
    "Vocabulary building",
    "Grammar in context",
    "Fluency in speaking"
  ];

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
            English Language Course.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl font-light leading-relaxed max-w-xl"
          >
            Today English is one of the most widely spoken languages in the world. It is the language of business and education.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-1 relative w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2938&auto=format&fit=crop" alt="English Language Course" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
        </motion.div>
      </div>

      {/* Main Original Content */}
      <div className="max-w-4xl w-full mb-24 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-invert prose-lg max-w-none text-gray-400 font-light"
        >
          <h3 className="text-3xl font-serif text-white mb-6">Why should we learn Spoken English?</h3>
          <p className="text-xl text-gray-300 leading-relaxed font-medium">
            Having fluency in spoken English is an essential requirement for a successful career. Knowing how to speak fluent English helps a person in all stages of life, be it school/college, preparing for job interviews, group discussions or making presentations or at the workplace.
          </p>
          <p className="leading-relaxed mt-6">
            Our Spoken English classes are designed and delivered by experts to give the learners maximum exposure to conversation practice. We use a variety of real-life situations and tasks to help build conversational ability. The topics used for Spoken English are relevant to everyday life and the focus is on communication skills rather than grammar.
          </p>
        </motion.div>
      </div>

      {/* Course Covers & Levels */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
        
        {/* The Spoken English course covers */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#0f0f0f] rounded-3xl p-10 border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-hexon-teal)]/5 blur-[60px] rounded-full"></div>
          <h3 className="text-2xl font-serif text-white mb-8 relative z-10 flex items-center gap-4">
            <MessageSquare className="w-6 h-6 text-[var(--color-hexon-teal)]" />
            The Spoken English course covers:
          </h3>
          <ul className="space-y-4 relative z-10">
            {courseCovers.map((item, i) => (
              <li key={i} className="flex items-center gap-4 group">
                <div className="w-2 h-2 rounded-full bg-[var(--color-hexon-teal)] group-hover:scale-150 transition-transform"></div>
                <span className="text-gray-300 text-lg font-light">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Three levels of learning */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#0f0f0f] rounded-3xl p-10 border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-hexon-gold)]/5 blur-[60px] rounded-full"></div>
          <h3 className="text-2xl font-serif text-white mb-8 relative z-10 flex items-center gap-4">
            <GraduationCap className="w-6 h-6 text-[var(--color-hexon-gold)]" />
            We offer three levels of learning
          </h3>
          <div className="space-y-6 relative z-10">
            <div className="group">
              <h4 className="text-white text-lg font-medium mb-1 group-hover:text-[var(--color-hexon-gold)] transition-colors">Basic Level: <span className="font-light text-gray-400">(For beginners)</span></h4>
              <p className="text-gray-400 font-light leading-relaxed">Focus is on the basics of English – sentence structure, vocabulary and pronunciation.</p>
            </div>
            <div className="group">
              <h4 className="text-white text-lg font-medium mb-1 group-hover:text-[var(--color-hexon-gold)] transition-colors">Intermediate Level: <span className="font-light text-gray-400">(For those who have a basic understanding of English)</span></h4>
              <p className="text-gray-400 font-light leading-relaxed">Focus is on improving fluency and accuracy.</p>
            </div>
            <div className="group">
              <h4 className="text-white text-lg font-medium mb-1 group-hover:text-[var(--color-hexon-gold)] transition-colors">Advanced Level: <span className="font-light text-gray-400">(For those who have a good command over English)</span></h4>
              <p className="text-gray-400 font-light leading-relaxed">Focus is on fine-tuning pronunciation and building vocabulary.</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Customized Classes & Voice Accent */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#121212] rounded-3xl p-10 border border-white/10 hover:border-white/30 transition-colors group flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-serif text-white mb-4">Customized Classes</h3>
          <p className="text-gray-400 font-light leading-relaxed">
            We offer customized classes for individuals and corporates based on their specific requirements.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-[#121212] rounded-3xl p-10 border border-[var(--color-hexon-teal)]/20 hover:border-[var(--color-hexon-teal)]/50 transition-colors group flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-full bg-[var(--color-hexon-teal)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Mic className="w-8 h-8 text-[var(--color-hexon-teal)]" />
          </div>
          <h3 className="text-2xl font-serif text-white mb-4">Voice & Accent Training</h3>
          <p className="text-gray-400 font-light leading-relaxed">
            We offer Voice & Accent training for professionals working in BPOs, call centers, and other customer-facing roles.
          </p>
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
        <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 relative z-10">
          Speak with Confidence
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
