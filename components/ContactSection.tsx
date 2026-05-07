export default function ContactSection() {
  return (
    <section className="py-24 bg-slate-900 text-white px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="flex flex-col justify-center">
          <h2 className="text-amber-500 font-semibold tracking-widest uppercase mb-4 text-sm">Visit Us</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-10 leading-tight">Location & Hours</h3>
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2 text-white">Address</h4>
                <p className="text-slate-400 text-lg">123 Culinary Ave, Foodie District, New York, NY 10001</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2 text-white">Contact</h4>
                <p className="text-slate-400 text-lg">(555) 123-4567</p>
                <p className="text-slate-400">hello@savoryandsage.com</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2 text-white">Dinner Hours</h4>
                <div className="text-slate-400 text-lg space-y-1">
                  <p>Mon - Thu: 5:00 PM - 10:00 PM</p>
                  <p>Fri - Sat: 4:00 PM - 11:00 PM</p>
                  <p>Sun: 10:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-3xl overflow-hidden min-h-[500px] shadow-2xl border border-slate-800 group">
          <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
            <div className="text-center group-hover:scale-110 transition-transform duration-500">
              <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-500/20">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <p className="text-slate-400 font-medium tracking-wide">Interactive Map Placeholder</p>
              <p className="text-slate-500 text-sm mt-2">Map will be rendered here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
