export default function CareersPage() {
  const areasOfInterest = [
    "Soft skills training delivery",
    "Coaching (The ICF way)",
    "Designing training content",
    "POSH",
    "Training Operations",
    "Public Relations"
  ];

  return (
    <main className="w-full min-h-screen bg-white pt-32 pb-24 px-6 flex flex-col items-center">
      <div className="max-w-4xl text-center mb-16 mt-20">
        <h1 className="text-[var(--color-hexon-gold)] text-sm tracking-[0.2em] uppercase font-semibold mb-6">
          Careers at Hexon
        </h1>
        <h2 className="text-5xl md:text-7xl font-serif text-zinc-900 mb-8">
          Join Our Mission.
        </h2>
      </div>

      <div className="max-w-5xl w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden mb-16 relative shadow-2xl">
        <div className="absolute inset-0 bg-black/40" />
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop" alt="Hexon Team" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
      </div>

      <div className="max-w-4xl text-center w-full mb-20 space-y-8">
        <h3 className="text-3xl md:text-4xl text-gray-700 font-light leading-relaxed">
          Are you passionate about impacting lives?
        </h3>
        <h3 className="text-3xl md:text-4xl text-gray-700 font-light leading-relaxed">
          Do you believe learning is a continuous process?
        </h3>
        <h3 className="text-3xl md:text-4xl text-gray-700 font-light leading-relaxed">
          Are you a learning enthusiast?
        </h3>
        
        <div className="pt-12">
          <p className="text-4xl md:text-5xl text-[var(--color-hexon-gold)] font-serif italic border-y border-black/10 py-10 px-6 leading-relaxed shadow-lg bg-gray-50 rounded-3xl inline-block mt-8">
            "Then Hexon is the place for you!"
          </p>
        </div>
      </div>

      <div className="max-w-3xl w-full bg-gray-50 border border-black/5 p-8 md:p-14 rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-hexon-teal)]/5 blur-[80px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-hexon-gold)]/5 blur-[80px] rounded-full"></div>
        
        <h3 className="text-3xl font-serif text-zinc-900 mb-8 relative z-10 text-center">
          Apply Now
        </h3>
        
        <form className="relative z-10 space-y-8">
          
          {/* Areas of Interest */}
          <div>
            <p className="text-gray-700 font-medium mb-4 text-lg">Choose your area of interest</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {areasOfInterest.map((area, index) => (
                <label key={index} className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 border border-black/20 rounded flex items-center justify-center group-hover:border-[var(--color-hexon-teal)] transition-colors">
                    <input type="checkbox" name="check-interest[]" value={area} className="opacity-0 absolute" />
                  </div>
                  <span className="text-gray-600 font-light group-hover:text-zinc-900 transition-colors">{area}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-600">Name</label>
              <input type="text" className="bg-transparent border border-black/10 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-[var(--color-hexon-teal)] transition-colors" placeholder="Your full name" required />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-600">Email</label>
              <input type="email" className="bg-transparent border border-black/10 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-[var(--color-hexon-teal)] transition-colors" placeholder="Your email address" required />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-600">Phone</label>
              <input type="tel" className="bg-transparent border border-black/10 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-[var(--color-hexon-teal)] transition-colors" placeholder="Your phone number" required />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-600">Location</label>
              <input type="text" className="bg-transparent border border-black/10 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-[var(--color-hexon-teal)] transition-colors" placeholder="Your city" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600">Upload Resume</label>
            <input type="file" className="block w-full text-sm text-gray-600 file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black/10 file:text-zinc-900 hover:file:bg-black/20 transition-all cursor-pointer" accept=".pdf,.doc,.docx" />
          </div>

          <div className="pt-4 text-center">
            <button type="submit" className="inline-block rounded-full bg-[var(--color-hexon-teal)] px-12 py-4 text-zinc-900 font-medium hover:bg-white hover:text-[var(--color-hexon-teal)] transition-colors shadow-lg hover:shadow-xl hover:scale-105 duration-300">
              Apply Now
            </button>
          </div>
          
        </form>
      </div>
    </main>
  );
}
