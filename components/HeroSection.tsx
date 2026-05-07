export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070"
          alt="Restaurant Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-8xl font-serif mb-6 drop-shadow-lg">Savory & Sage</h1>
        <p className="text-xl md:text-2xl mb-10 font-light max-w-2xl mx-auto drop-shadow-md">
          Experience the art of fine dining where every plate tells a story of passion and flavor.
        </p>
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full transition-all transform hover:scale-105 text-lg font-medium shadow-xl">
          Reserve a Table
        </button>
      </div>
    </section>
  )
}
