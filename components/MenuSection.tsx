const menuItems = [
  { name: "Roasted Duck Breast", description: "With black cherry glaze and creamy parsnip puree", price: "$34" },
  { name: "Truffle Mushroom Risotto", description: "Arborio rice, wild forest mushrooms, and aged parmesan", price: "$28" },
  { name: "Seared Atlantic Scallops", description: "With lemon-herb butter and crispy pancetta soil", price: "$32" },
  { name: "Herb-Crusted Rack of Lamb", description: "With mint-pea mash and red wine reduction", price: "$38" },
  { name: "Wild-Caught Grilled Seabass", description: "Mediterranean style with sun-dried tomatoes and capers", price: "$35" },
  { name: "Signature Chocolate Fondant", description: "Warm center with house-made vanilla bean ice cream", price: "$12" },
]

export default function MenuSection() {
  return (
    <section className="py-24 bg-amber-50 px-4">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-amber-600 font-semibold tracking-widest uppercase mb-3 text-sm">The Menu</h2>
        <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Seasonal Favorites</h3>
        <p className="text-slate-600 text-lg">A curated selection of our chef&apos;s most celebrated creations, prepared with the finest local ingredients.</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
        {menuItems.map((item, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="flex justify-between items-baseline mb-2">
              <h4 className="text-xl font-semibold text-slate-900 group-hover:text-amber-700 transition-colors">{item.name}</h4>
              <div className="flex-grow mx-4 border-b border-dotted border-amber-300"></div>
              <div className="text-amber-700 font-serif text-2xl">{item.price}</div>
            </div>
            <p className="text-slate-600 italic">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-20">
        <button className="border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-full transition-all font-medium">
          Download Full Menu (PDF)
        </button>
      </div>
    </section>
  )
}
