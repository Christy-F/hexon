"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, CheckCircle2 } from "lucide-react";

export default function LeadershipProgramPage() {
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
            Leadership Program.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl font-light leading-relaxed max-w-xl"
          >
            Leadership training is a structured process designed to enhance the knowledge, skills, and abilities of individuals in leadership positions.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-1 relative w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2940&auto=format&fit=crop" alt="Leadership Training" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
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
            Training often covers a range of topics to address the multifaceted responsibilities of leaders. Leadership learning is a continuous journey that empowers individuals to navigate the complexities of modern environments. It involves honing communication skills, understanding diverse leadership styles, and fostering emotional intelligence.
          </p>
          <p className="leading-relaxed mt-6">
            Effective leadership learning emphasizes strategic thinking, ethical decision-making, and adaptability to change. It equips leaders with the ability to inspire and build cohesive teams, while also instilling a commitment to ongoing personal and professional development. Through a combination of formal training, experiential learning, and mentorship, leadership learning cultivates the skills necessary for guiding organizations toward success in dynamic and competitive landscapes.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full text-center py-8"
        >
          <p className="text-2xl md:text-3xl text-[var(--color-hexon-gold)] font-serif italic border-y border-white/10 py-10 px-6 leading-relaxed">
            "At Hexon we aim to develop effective leaders who can guide, inspire, and influence others to achieve organizational goals."
          </p>
        </motion.div>
      </div>

      {/* Training Programs */}
      <div className="max-w-6xl w-full mb-32">
        <h3 className="text-3xl font-serif text-white mb-12 text-center">Training Programs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              title: "Self-Leadership: Excellence Starts Here (Leading Self)", 
              desc: "True leadership begins from within. Our Self-Leadership program focuses on self-awareness, emotional intelligence, and personal accountability. Leaders will discover their strengths, identify areas for growth, and develop a proactive mindset to take ownership of their roles, ultimately enhancing their overall performance and well-being.",
              color: "var(--color-hexon-teal)"
            },
            { 
              title: "Effective Leadership: Inspiring Success (Leading Others)", 
              desc: "A leader's true measure is the success of their team. This program is tailored to help leaders develop the skills needed to inspire, motivate, and guide their teams. Through advanced communication, coaching, and conflict resolution techniques, participants will learn how to build trust, foster collaboration, and empower their teams to achieve extraordinary results.",
              color: "var(--color-hexon-gold)"
            },
            { 
              title: "Team Leadership: Unlocking Potential (Leading Teams)", 
              desc: "Great leaders build great teams. The Team Leadership program focuses on group dynamics, synergy, and collective achievement. Participants will learn how to cultivate a high-performing team culture, foster inclusivity, and leverage individual strengths to achieve shared goals, ensuring the entire team thrives.",
              color: "#ffffff"
            },
            { 
              title: "Strategic Leadership: Vision to Reality (Leading Business)", 
              desc: "Strategic leaders turn vision into reality. This program equips leaders with the tools to navigate complex business environments, make informed decisions, and drive long-term organizational success. Participants will explore strategic planning, change management, and innovation, ensuring they are prepared to steer the business toward its future objectives.",
              color: "var(--color-hexon-teal)"
            }
          ].map((prog, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0f0f0f] rounded-3xl p-10 border border-white/5 hover:border-white/20 transition-colors duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] rounded-full group-hover:bg-white/10 transition-colors"></div>
              <h3 className="text-xl font-serif text-white mb-4 relative z-10" style={{ color: prog.color }}>{prog.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed relative z-10">
                {prog.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Strategic Impact Section */}
      <div className="max-w-4xl w-full mb-32 bg-[#0f0f0f] border border-white/5 rounded-3xl p-10 md:p-16">
        <h3 className="text-3xl font-serif text-white mb-8 text-center">Strategic Impact</h3>
        <ul className="space-y-6">
          {[
            "Fostering a sense of direction and purpose among leaders.",
            "Cultivating high-performing, motivated, and engaged teams.",
            "Equipping leaders to adapt to change and overcome challenges.",
            "Cultivating a pipeline of future leaders from within.",
            "Elevating team performance, ultimately impacting organizational success."
          ].map((item, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <CheckCircle2 className="w-6 h-6 text-[var(--color-hexon-gold)] flex-shrink-0 mt-1" />
              <span className="text-gray-300 font-light text-lg">{item}</span>
            </motion.li>
          ))}
        </ul>
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
          Unlock your leadership potential.
        </h3>
        <p className="text-white/90 text-lg font-light mb-10 relative z-10 max-w-2xl mx-auto">
          To know more about this program, you may call us, write to us or text us.
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

        <Link href="/contact" className="inline-block relative z-10 bg-white text-[var(--color-hexon-teal)] px-8 py-4 rounded-full font-medium tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300">
          Reach Out to Us
        </Link>
      </motion.div>

    </main>
  );
}
