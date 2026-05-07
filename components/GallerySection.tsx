const images = [
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800", alt: "Fine dining plate" },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800", alt: "Fresh ingredients" },
  { src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800", alt: "Gourmet dish" },
  { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=800", alt: "Kitchen action" },
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800", alt: "Restaurant interior" },
  { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800", alt: "Plated dessert" },
]

export default function GallerySection() {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-amber-600 font-semibold tracking-widest uppercase mb-3 text-sm">Gallery</h2>
        <h3 className="text-4xl md:text-5xl font-serif text-slate-900">Vibes of Savory & Sage</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {images.map((img, idx) => (
          <div key={idx} className="aspect-[4/5] overflow-hidden rounded-2xl group relative">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white border border-white px-4 py-2 rounded-full backdrop-blur-sm">View Larger</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
