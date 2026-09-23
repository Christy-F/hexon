"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Services",
      href: "/services",
      submenu: [
        { name: "Corporate Training", href: "/services/corporate-training-programs" },
        { name: "Young Aspirers", href: "/services/young-aspirers" },
        { name: "English Language", href: "/services/english-language-course" },
        { name: "POSH Training", href: "/services/posh-training" },
        { name: "L&D Consulting", href: "/services/learning-development-consulting" },
        { name: "Coaching", href: "/services/coaching" },
        { name: "Leadership Program", href: "/services/leadership-program" },
      ],
    },
    {
      name: "About Us",
      href: "/about",
      submenu: [
        { name: "Our Story", href: "/about/our-story" },
        { name: "Our Founder", href: "/about/our-founder" },
        { name: "Certifications & Credentials", href: "/about/certifications-credentials" },
      ],
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#00ADB3] backdrop-blur-md border-b border-white/10 py-4 shadow-lg" : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group flex items-center h-20">
            <Image
              src="/assets/hexon-logo-new.png"
              alt="Hexon Logo"
              width={260}
              height={90}
              className="w-auto h-full max-h-20 object-contain"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium text-white hover:text-white transition-colors uppercase tracking-widest relative group py-4 block"
                >
                  {link.name}
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[var(--color-hexon-gold)] transition-all duration-300 group-hover:w-full" />
                </Link>

                {/* Dropdown Menu */}
                {link.submenu && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-[#111] border border-white/10 rounded-xl shadow-2xl py-4 flex flex-col overflow-hidden"
                      >
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="px-6 py-3 text-sm text-white hover:bg-white/5 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/book-an-appointment"
              className="px-6 py-2 rounded-full border border-white/20 text-white text-sm uppercase tracking-wider font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button (Simple Icon) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white flex flex-col gap-1.5 p-2 z-50 relative"
          >
            <span className={`w-6 h-[2px] bg-white block transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-4 h-[2px] bg-white block ml-auto transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-[2px] bg-white block transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : 'hidden'}`} />
          </button>
        </div>

      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#0a0a0a] z-[100] flex flex-col pt-24 px-6 overflow-y-auto pb-12"
          >
            {/* Close Button inside Overlay */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white p-2"
            >
              <div className="relative w-6 h-6">
                <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-white rotate-45 -translate-y-1/2" />
                <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-white -rotate-45 -translate-y-1/2" />
              </div>
            </button>

            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-4">
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-serif text-white hover:text-[var(--color-hexon-teal)] transition-colors"
                  >
                    {link.name}
                  </Link>

                  {link.submenu && (
                    <div className="flex flex-col gap-3 pl-4 border-l border-white/10 ml-2">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-gray-400 hover:text-white text-sm"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/book-an-appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 bg-[var(--color-hexon-teal)] text-white text-center py-4 rounded-xl font-medium"
              >
                Book an Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
