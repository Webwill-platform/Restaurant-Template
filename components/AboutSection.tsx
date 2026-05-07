export default function AboutSection() {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-amber-600 font-semibold tracking-widest uppercase mb-3 text-sm">Our Story</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-8 text-slate-900 leading-tight">Crafting Memories Since 1998</h3>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              Founded by Chef Julian Thorne, Savory & Sage began as a small bistro with a simple mission: 
              to bring fresh, seasonal ingredients from local farms to your table. Today, we continue that legacy 
              with a modern twist on classic culinary techniques.
            </p>
            <p>
              Every dish we serve is a testament to our commitment to quality. From our hand-made pasta to our 
              signature slow-roasted meats, we invite you to taste the difference that love and attention can make.
            </p>
          </div>
        </div>
        <div className="relative h-[600px] order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1974"
            alt="Chef preparing food"
            className="w-full h-full object-cover rounded-3xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-amber-100 p-8 rounded-2xl shadow-lg hidden md:block">
            <p className="font-serif text-3xl text-amber-900">&quot;Authentic flavor in every bite.&quot;</p>
          </div>
        </div>
      </div>
    </section>
  )
}
