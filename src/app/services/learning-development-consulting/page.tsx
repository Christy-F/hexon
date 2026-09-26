"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, FileDown, Search, PenTool, Rocket, BarChart3 } from "lucide-react";

export default function LDCPage() {
  const phases = [
    {
      title: "Diagnostic Phase",
      icon: <Search className="w-6 h-6" />,
      color: "var(--color-hexon-teal)",
      desc: "Understand the business, short- & long-term goals/mission & vision and then develop capability requirement of the organization across levels. Conduct assessments to find out the current levels / capability mapped against the required level and find out the gap across levels."
    },
    {
      title: "Design Phase",
      icon: <PenTool className="w-6 h-6" />,
      color: "var(--color-hexon-gold)",
      desc: "Detailed and structured learning interventions are designed based on the gaps identified. Design includes methodology of interventions (Instructor led training, online platform, blended learning, simulations etc.)"
    },
    {
      title: "Delivery Phase",
      icon: <Rocket className="w-6 h-6" />,
      color: "#ffffff",
      desc: "Finalizing the delivery partners based on their core capability aligned with intervention requirement, taking into consideration the cost, delivery approach (experiential, activity based, adult learning methodology etc.). Managing the delivery and getting the desired inputs and outputs from delivery partners."
    },
    {
      title: "Evaluation Phase",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "var(--color-hexon-teal)",
      desc: "Develop methods to map the effectiveness of interventions like ROI (Return on investment), Pre & Post assessment score mapping based on specific competency/skills."
    }
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
            Learning & Development Consulting.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-xl font-light leading-relaxed max-w-xl"
          >
            A pro-active and collaborative process focused on enabling individual, team and organizational success through ongoing change, transition & development.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-1 relative w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop" alt="L&D Consulting" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
        </motion.div>
      </div>

      {/* Main Original Content */}
      <div className="max-w-4xl w-full mb-16 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose  prose-lg max-w-none text-gray-600 font-light"
        >
          <p className="text-xl text-gray-700 leading-relaxed font-medium">
            Organization Development (OD) Consulting is a pro-active and collaborative process focused on enabling individual, team and organizational success through ongoing change, transition & development.
          </p>
          <p className="leading-relaxed mt-6">
            HEXON does the following when it comes to Learning & capability building – consulting:
          </p>
        </motion.div>
      </div>

      {/* Phases Content Flow */}
      <div className="max-w-6xl w-full mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">

          {/* Connector Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10 transform -translate-x-1/2"></div>

          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gray-50 rounded-3xl p-10 border border-black/5 hover:border-black/20 transition-colors duration-300 relative overflow-hidden group ${index % 2 !== 0 ? 'md:mt-24' : ''
                }`}
            >
              <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mb-8 relative z-10">
                <div style={{ color: phase.color }}>{phase.icon}</div>
              </div>

              <h3 className="text-2xl font-serif text-zinc-900 mb-4 relative z-10" style={{ color: phase.color }}>
                {phase.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed relative z-10">
                {phase.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Framework note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full text-center mb-32"
      >
        <p className="text-2xl text-[var(--color-hexon-gold)] font-serif italic border-y border-black/10 py-10 px-6 leading-relaxed">
          "The end-to-end framework will be prepared and closely driven by Hexon for a desired period, mutually agreed between the client & Hexon. It can range anywhere between 6 to 12 months."
        </p>
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full bg-gradient-to-br from-[var(--color-hexon-teal)] to-[#007b80] rounded-[2.5rem] p-12 md:p-16 text-center shadow-2xl relative overflow-hidden mb-8"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.1] mix-blend-overlay"></div>
        <h3 className="text-3xl md:text-4xl font-serif text-zinc-900 mb-6 relative z-10">
          Ready to Transform Your Organization?
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
