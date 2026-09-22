"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BookAppointmentPage() {
  const [formData, setFormData] = useState({
    service: "Corporate Training Programs",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredDate: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to book appointment");
      }

      setStatus("success");
      setFormData({
        service: "Corporate Training Programs",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        preferredDate: "",
      });
    } catch (error: any) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error.message || "An unexpected error occurred.");
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full text-center mb-16 mt-20"
      >
        <h1 className="text-[var(--color-hexon-gold)] text-sm tracking-[0.2em] uppercase font-semibold mb-6">
          Connect With Us
        </h1>
        <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
          Book An Appointment.
        </h2>
        <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-4">
          Get an Expert’s Advice for FREE – book an appointment NOW!
        </p>
        <p className="text-gray-400 text-base">
          If you need more information regarding our services, block the calendar & our expert consultants will get in touch with you.
        </p>
      </motion.div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 space-y-6 bg-[#111] border border-white/10 p-8 md:p-12 rounded-2xl"
        >
          <h3 className="text-2xl text-white font-medium mb-6">How to book an appointment?</h3>
          <ul className="space-y-6 relative border-l border-white/10 ml-4 pl-8">
            <li className="relative group">
              <span className="absolute -left-[44px] bg-[var(--color-hexon-teal)] text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-[#111] group-hover:scale-110 transition-transform">1</span>
              <strong className="text-white block mb-1">Select Service</strong>
              Choose the service that you want to know about from the form.
            </li>
            <li className="relative group">
              <span className="absolute -left-[44px] bg-[var(--color-hexon-teal)] text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-[#111] group-hover:scale-110 transition-transform">2</span>
              <strong className="text-white block mb-1">Pick Date & Time</strong>
              Select a convenient time slot from our available calendar.
            </li>
            <li className="relative group">
              <span className="absolute -left-[44px] bg-[var(--color-hexon-teal)] text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-[#111] group-hover:scale-110 transition-transform">3</span>
              <strong className="text-white block mb-1">Fill in details</strong>
              Provide your First Name, Last Name, E-mail ID, and Phone No.
            </li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#111] border border-white/10 p-8 md:p-12 rounded-2xl"
        >
          <h3 className="text-2xl text-white font-medium mb-8">Schedule Session</h3>
          
          {status === "success" ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-500/10 border border-green-500/20 text-green-400 p-6 rounded-lg text-center">
              <h4 className="text-xl font-medium mb-2">Booking Confirmed!</h4>
              <p>Thank you for reaching out. Our consultants will get back to you shortly.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-6 px-6 py-2 border border-green-500/20 rounded-full hover:bg-green-500/10 transition-colors"
              >
                Book Another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === "error" && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg text-sm">
                  {errorMessage}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Service</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-hexon-teal)] transition-colors appearance-none"
                >
                  <option>Corporate Training Programs</option>
                  <option>Young Aspirers</option>
                  <option>English Language Course</option>
                  <option>POSH Training</option>
                  <option>Learning & Development Consulting</option>
                  <option>Coaching</option>
                  <option>Leadership Program</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-hexon-teal)] transition-colors" 
                    placeholder="John" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-hexon-teal)] transition-colors" 
                    placeholder="Doe" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-hexon-teal)] transition-colors" 
                    placeholder="john@example.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Phone No.</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-hexon-teal)] transition-colors" 
                    placeholder="+91" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Date & Time</label>
                <input 
                  type="datetime-local" 
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-hexon-teal)] transition-colors" 
                  style={{ colorScheme: "dark" }} 
                />
              </div>

              <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full bg-[var(--color-hexon-teal)] hover:bg-[#007f8a] text-white font-medium py-4 rounded-lg transition-colors mt-4 disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] duration-300"
              >
                {status === "loading" ? "Confirming..." : "Confirm Appointment"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </main>
  );
}
