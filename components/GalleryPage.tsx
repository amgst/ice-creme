
import React, { useState } from 'react';

type FlavorCategory = 'all' | 'classics' | 'seasonal' | 'vegan';

const GalleryPage: React.FC = () => {
  const [flavorFilter, setFlavorFilter] = useState<FlavorCategory>('all');
  const [eventFilter, setEventFilter] = useState('all');

  const flavors = [
    { 
      name: 'Sicilian Pistachio', 
      category: 'classics', 
      color: 'bg-emerald-50 text-emerald-900 border-emerald-100', 
      text: 'Pure Bronte pistachios, lightly roasted and stone-ground.', 
      note: 'Signature' 
    },
    { 
      name: 'Dark Belgian Cacao', 
      category: 'classics', 
      color: 'bg-slate-900 text-slate-50 border-slate-800', 
      text: '70% single-origin cocoa for an intense, bittersweet finish.', 
      note: 'Best Seller' 
    },
    { 
      name: 'Fior di Latte', 
      category: 'classics', 
      color: 'bg-stone-50 text-stone-900 border-stone-200', 
      text: 'The purest expression of fresh Victorian mountain milk.', 
      note: 'Traditional' 
    },
    { 
      name: 'Amalfi Lemon Sorbet', 
      category: 'vegan', 
      color: 'bg-yellow-50 text-yellow-950 border-yellow-200', 
      text: 'Zesty, sharp, and incredibly refreshing dairy-free treat.', 
      note: 'Vegan' 
    },
    { 
      name: 'Salted Honeycomb', 
      category: 'seasonal', 
      color: 'bg-orange-50 text-orange-950 border-orange-200', 
      text: 'Wildflower honey swirled with house-made crunchy honeycomb.', 
      note: 'Seasonal' 
    },
    { 
      name: 'Wild Strawberry', 
      category: 'vegan', 
      color: 'bg-rose-50 text-rose-950 border-rose-200', 
      text: 'Sun-ripened berries blended into a silky, vibrant sorbet.', 
      note: 'Vegan' 
    },
  ];

  const filteredFlavors = flavorFilter === 'all' 
    ? flavors 
    : flavors.filter(f => f.category === flavorFilter);

  return (
    <div className="pt-20 bg-white">
      {/* Editorial Header */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-rose-100/30 -skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="text-rose-600 font-bold uppercase tracking-[0.3em] text-sm mb-6 block animate-in fade-in slide-in-from-top duration-700">The Visual Library</span>
            <h1 className="text-6xl md:text-8xl font-serif text-slate-900 mb-8 leading-tight animate-in fade-in slide-in-from-bottom duration-700 delay-100">
              A Symphony of <br />
              <span className="text-rose-600 italic">Taste & Aesthetics</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              From our handcrafted pozzetti carts to the vibrant hues of our small-batch gelato, every detail at Gelato Allegra is designed to delight the senses.
            </p>
          </div>
        </div>
      </section>

      {/* Signature Flavor Collection */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 reveal">
            <div>
              <h2 className="text-4xl font-serif text-slate-900 mb-2">Signature Flavors</h2>
              <div className="w-20 h-1 bg-rose-500 rounded-full"></div>
            </div>
            <div className="flex flex-wrap gap-3">
              {(['all', 'classics', 'seasonal', 'vegan'] as FlavorCategory[]).map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setFlavorFilter(cat)}
                  className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                    flavorFilter === cat 
                    ? 'bg-slate-900 text-white shadow-xl' 
                    : 'bg-white text-slate-500 border border-slate-100 hover:border-rose-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredFlavors.map((f, i) => (
              <div 
                key={f.name} 
                className={`${f.color} border group relative p-10 rounded-[3rem] transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-rose-900/10 flex flex-col h-full reveal delay-${(i % 3) * 100}`}
              >
                <div className="mb-8 flex justify-between items-start">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70">Collection No. 0{i + 1}</span>
                  <span className="bg-current/10 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter">
                    {f.note}
                  </span>
                </div>
                <h3 className="text-3xl font-serif mb-4">{f.name}</h3>
                <p className="text-sm font-medium leading-relaxed opacity-80 mb-8 flex-grow">{f.text}</p>
                <div className="h-px w-12 bg-current opacity-20"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Atmosphere Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2 reveal-left">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&q=80&w=600" alt="Process" className="rounded-2xl w-full h-64 object-cover" />
                  <img src="https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&q=80&w=600" alt="Detail" className="rounded-2xl w-full h-48 object-cover" />
                </div>
                <div className="space-y-4 pt-8">
                  <img src="https://images.unsplash.com/photo-1560008511-11c63416e52d?auto=format&fit=crop&q=80&w=600" alt="Cart" className="rounded-2xl w-full h-48 object-cover" />
                  <img src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=600" alt="Service" className="rounded-2xl w-full h-64 object-cover" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 reveal-right">
              <span className="text-rose-400 font-script text-4xl mb-6 block">The Art of Service</span>
              <h2 className="text-5xl font-serif mb-8 leading-tight">Beyond the <br/><span className="text-rose-500 italic">Perfect Scoop</span></h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Our service is a performance of elegance. From the polished stainless steel of our pozzetti wells to the crisp linen uniforms of our staff, we ensure that the experience of receiving a gelato is as memorable as the taste itself.
              </p>
              <ul className="space-y-4">
                {['Custom menu calligraphy', 'Professional attire', 'Hand-stamped eco-cups', 'Signature toppings bar'].map((item, idx) => (
                  <li key={idx} className={`flex items-center gap-4 text-slate-300 reveal delay-${(idx + 1) * 100}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                    <span className="text-sm font-semibold uppercase tracking-widest">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Event Showcase Masonry-ish Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-5xl font-serif text-slate-900 mb-6">Event Highlights</h2>
            <div className="flex justify-center gap-6">
              {['all', 'weddings', 'corporate', 'private'].map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setEventFilter(cat)}
                  className={`text-xs font-black uppercase tracking-[0.3em] transition-all pb-2 border-b-2 ${
                    eventFilter === cat ? 'border-rose-600 text-rose-600' : 'border-transparent text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
              <div key={i} className={`break-inside-avoid group relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 reveal delay-${(i % 4) * 100}`}>
                <img 
                  src={`https://picsum.photos/seed/allegra-event-${i + 50}/${i % 2 === 0 ? '800/1000' : '800/600'}`} 
                  alt="Gelato Allegra Event" 
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-rose-400 text-xs font-black uppercase tracking-widest mb-2">Moments of Joy</span>
                  <p className="text-white font-serif text-xl">The {['Grand Ballroom', 'Garden Terrace', 'Corporate Gala', 'Private Soiree'][i % 4]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-rose-50 text-center reveal">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-slate-900 mb-8">Inspired by our craft?</h2>
          <p className="text-slate-500 mb-12 max-w-xl mx-auto">Let us bring the elegance of Gelato Allegra to your next celebration.</p>
          <button className="bg-slate-900 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-800 hover:scale-105 transition-all shadow-xl shadow-slate-900/20">
            Request a Proposal
          </button>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
