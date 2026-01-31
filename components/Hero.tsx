
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0 scale-110 animate-[pulse_10s_infinite]">
        <img
          src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=1920"
          alt="Premium Gelato"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="text-rose-400 font-script text-4xl md:text-5xl mb-4 block animate-in fade-in slide-in-from-bottom duration-1000">
          Artisan flavor for joyful moments
        </span>
        <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom duration-1000 delay-150">
          Welcome to <span className="text-rose-500 italic">Gelato Allegra</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
          Luxury Italian catering with vintage pozzetti carts. Handcrafted with traditional techniques to make your event truly unforgettable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
          <button className="w-full sm:w-auto bg-rose-600 hover:bg-rose-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl shadow-rose-900/20 transition-all hover:-translate-y-1">
            Book Our Cart
          </button>
          <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-10 py-4 rounded-full text-lg font-bold transition-all hover:-translate-y-1">
            Browse Packages
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;