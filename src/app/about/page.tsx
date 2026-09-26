export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-white pt-32 pb-24 px-6 flex flex-col items-center">
      <div className="max-w-4xl text-center mb-16 mt-20">
        <h1 className="text-[var(--color-hexon-gold)] text-sm tracking-[0.2em] uppercase font-semibold mb-6">
          Our Story
        </h1>
        <h2 className="text-5xl md:text-7xl font-serif text-zinc-900 mb-8">
          A Legacy of Learning.
        </h2>
        <p className="text-gray-700 text-lg md:text-xl font-light leading-relaxed">
          Hexon was founded on the belief that human potential is limitless when nurtured in the right environment. 
          We are committed to delivering world-class soft skill training, L&D consulting, and personal coaching.
        </p>
      </div>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div className="h-[400px] rounded-3xl bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-serif text-zinc-900 mb-6">Meet Our Founder</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            With decades of experience in organizational behavior and human resource development, our leadership team brings a wealth of knowledge to every engagement.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[var(--color-hexon-teal)] rounded-full" /> Certified Master Trainers
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[var(--color-hexon-teal)] rounded-full" /> Recognized POSH Consultants
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
