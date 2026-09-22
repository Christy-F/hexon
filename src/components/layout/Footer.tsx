"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#030303] text-white pt-32 pb-0 overflow-hidden border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--color-hexon-teal)]/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[var(--color-hexon-gold)]/5 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HUGE CTA SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12 border-b border-white/10 pb-16">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[var(--color-hexon-gold)] text-sm tracking-[0.3em] uppercase font-semibold mb-6"
            >
              Ready to grow?
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif leading-tight"
            >
              Let's transform your <br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-hexon-teal)] to-blue-400">organization.</span>
            </motion.h3>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="shrink-0"
          >
            <a
              href="mailto:contact@hexonindia.in"
              className="inline-flex items-center justify-center w-40 h-40 rounded-full bg-[var(--color-hexon-teal)] hover:bg-white hover:text-[var(--color-hexon-teal)] text-white font-medium text-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,173,179,0.4)]"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        {/* MAIN LINKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 bg-[#00ADB3] p-10 md:p-16 rounded-[2rem] shadow-2xl">

          {/* Brand Col */}
          <div className="md:col-span-4 lg:col-span-5 pr-0 md:pr-12">
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/assets/hexon-logo-new.png"
                alt="Hexon Logo"
                width={180}
                height={50}
                className="w-40 h-auto object-contain"
              />
            </Link>
            <p className="text-white/90 text-sm leading-relaxed mb-8 max-w-sm">
              Delivering best-in-class Corporate Soft Skills Trainings, L&D Consulting, Coaching, and Young Aspirers' programs. We turn potential into performance.
            </p>
            <div className="flex gap-4">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/company/hexon-india/", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                { label: "Facebook", href: "https://www.facebook.com/hexonindia/", icon: "M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" },
                { label: "Instagram", href: "https://www.instagram.com/hexonindia/?igshid=YmMyMTA2M2Y%3D", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" }
              ].map((social, idx) => (
                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#00ADB3] hover:border-transparent hover:scale-110 transition-all duration-300">
                  <span className="sr-only">{social.label}</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d={social.icon} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Cols */}
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-medium mb-8 text-lg">Company</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Our Founder', href: '/about/our-founder' },
                  { name: 'Our Story', href: '/about/our-story' },
                  { name: 'Certifications & Credentials', href: '/about/certifications-credentials' },
                  { name: 'Photo Gallery', href: '/gallery' },

                  { name: 'Careers', href: '/careers' },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href} className="text-white/80 hover:text-white transition-colors text-sm group flex items-center">
                      <span className="w-0 h-px bg-white mr-0 group-hover:w-4 group-hover:mr-3 transition-all duration-300"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-8 text-lg">Expertise</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Corporate Training', href: '/services/corporate-training-programs' },
                  { name: 'Leadership Program', href: '/services/leadership-program' },
                  { name: 'Young Aspirers', href: '/services/young-aspirers' },
                  { name: 'POSH Training', href: '/services/posh-training' },
                  { name: 'English Language', href: '/services/english-language-course' },
                  { name: 'L&D Consulting', href: '/services/learning-development-consulting' },
                  { name: 'Coaching', href: '/services/coaching' },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href} className="text-white/80 hover:text-white transition-colors text-sm group flex items-center">
                      <span className="w-0 h-px bg-white mr-0 group-hover:w-4 group-hover:mr-3 transition-all duration-300"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white font-medium mb-8 text-lg">Get in Touch</h4>
              <div className="space-y-4 text-sm text-white/90">
                <p className="flex flex-col">
                  <span className="text-white/60 mb-1">Phone</span>
                  <a href="tel:+917550553355" className="text-white hover:opacity-75 transition-opacity text-base">+91 7550553355</a>
                </p>
                <p className="flex flex-col">
                  <span className="text-white/60 mb-1">Email</span>
                  <a href="mailto:contact@hexonindia.in" className="text-white hover:opacity-75 transition-opacity text-base">contact@hexonindia.in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        href="https://wa.me/917550553355"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
          <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.65.86 5.143 2.365 7.185l-1.573 5.753 5.88-1.543a11.96 11.96 0 005.359 1.26h.005c6.645 0 12.03-5.385 12.03-12.031C24.066 5.385 18.681 0 12.031 0zM12.03 21.656a9.98 9.98 0 01-5.086-1.385l-.364-.216-3.778.99.999-3.682-.237-.377A9.975 9.975 0 012.035 12.03C2.035 6.516 6.522 2.025 12.036 2.025c5.513 0 10.003 4.49 10.003 10.005 0 5.513-4.49 10.004-10.009 10.004V21.656zm5.495-7.5c-.301-.151-1.782-.88-2.057-.98-.276-.1-.476-.151-.676.15-.201.302-.777.981-.951 1.182-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.424-1.498-.896-.801-1.5-1.79-1.676-2.091-.176-.301-.019-.464.131-.614.135-.135.301-.351.451-.527.15-.176.201-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.925-2.23-.243-.589-.488-.508-.676-.517-.175-.008-.376-.01-.576-.01-.2 0-.526.075-.801.376-.275.301-1.052 1.028-1.052 2.508 0 1.48 1.077 2.91 1.227 3.111.15.2 2.126 3.243 5.148 4.545.719.31 1.28.496 1.718.635.722.228 1.38.196 1.901.119.584-.087 1.782-.729 2.033-1.433.251-.703.251-1.306.176-1.433-.075-.125-.276-.2-.577-.35z" />
        </svg>
      </motion.a>

      {/* BOTTOM ROW: Copyright & GST */}
      <div className="w-full border-t border-white/5 bg-[#010101]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {currentYear} Hexon. Designed with passion @ Spidergems Softlabz.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-[var(--color-hexon-teal)] font-medium">GSTIN: 33BEPPS3684Q1ZF</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
