export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen bg-gray-50 pt-32 pb-24 px-6 flex flex-col items-center">
      <div className="max-w-4xl text-center mb-16 mt-20">
        <h1 className="text-[var(--color-hexon-gold)] text-sm tracking-[0.2em] uppercase font-semibold mb-6">
          Our Services
        </h1>
        <h2 className="text-5xl md:text-7xl font-serif text-zinc-900 mb-8">
          Comprehensive Solutions.
        </h2>
        <p className="text-gray-700 text-lg md:text-xl font-light leading-relaxed">
          From corporate boot camps to elite one-on-one coaching, our services are tailored to drive measurable impact.
        </p>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Corporate Training", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" },
          { name: "Young Aspirers", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" },
          { name: "English Language Course", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop" },
          { name: "POSH Training", img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop" },
          { name: "L&D Consulting", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" },
          { name: "Coaching", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop" },
          { name: "Leadership Program", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop" }
        ].map((service, idx) => (
          <div key={idx} className="group overflow-hidden border border-black/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors flex flex-col">
            <div className="w-full h-48 bg-gray-800 overflow-hidden">
              <img src={service.img} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <div className="w-12 h-12 rounded-full bg-[var(--color-hexon-teal)]/20 mb-6 flex items-center justify-center">
                <div className="w-4 h-4 bg-[var(--color-hexon-teal)] rounded-full"></div>
              </div>
              <h3 className="text-2xl font-serif text-zinc-900 mb-4">{service.name}</h3>
              <p className="text-gray-600 font-light">
                Elevate your organizational capabilities with our specialized curriculum designed for immediate real-world application.
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
