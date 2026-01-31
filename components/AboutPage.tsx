
import React from 'react';

interface AboutPageProps {
  onNavigate: (view: any) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20">
      {/* Intro Header */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-6">
          <span className="text-rose-400 font-script text-4xl mb-4 block animate-in fade-in slide-in-from-top duration-1000">The Allegra Legacy</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-150">Elegance in <span className="text-rose-500">Service</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-300">Founded on a vision of bringing authentic Italian piazza culture to modern celebrations across Melbourne.</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 reveal-left">
              <h2 className="text-4xl font-serif text-slate-900 mb-6">Our Craft Philosophy</h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">At Gelato Allegra, we don't just serve dessert; we curate an atmosphere. 'Allegra' means joyful, and that is precisely what we aim to deliver with every scoop.</p>
              <p className="text-slate-600 mb-10 leading-relaxed text-lg">Using locally sourced dairy and premium imported ingredients, our gelato is churned in small batches to maintain a density and richness that is rare outside of Italy.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-rose-50 rounded-2xl reveal delay-200">
                  <h4 className="font-bold text-rose-900 mb-2">Heritage Recipe</h4>
                  <p className="text-sm text-slate-500">Family secrets passed down through generations.</p>
                </div>
                <div className="p-6 bg-rose-50 rounded-2xl reveal delay-300">
                  <h4 className="font-bold text-rose-900 mb-2">Modern Service</h4>
                  <p className="text-sm text-slate-500">Expert baristas and scoopers for seamless flow.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 reveal-right">
              <img src="https://images.unsplash.com/photo-1534706936160-d5ee67737049?auto=format&fit=crop&q=80&w=800" alt="Gelato Artisan" className="rounded-3xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* The Pozzetti Secret */}
      <section className="py-24 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-8 reveal">The Pozzetti Excellence</h2>
          <p className="max-w-3xl mx-auto text-rose-100 text-lg mb-12 reveal delay-100">Our signature stainless steel pozzetti carts are the gold standard of gelato service. By keeping our gelato sealed under air-tight lids, we ensure the perfect serving temperature and consistency throughout your entire event.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/20 rounded-3xl reveal delay-200">
              <h3 className="text-xl font-bold mb-4">Precision Cooling</h3>
              <p className="text-sm opacity-80">No more melting or ice crystals. Just perfect, creamy silkiness.</p>
            </div>
            <div className="p-8 border border-white/20 rounded-3xl reveal delay-300">
              <h3 className="text-xl font-bold mb-4">Clean Aesthetic</h3>
              <p className="text-sm opacity-80">Minimalist, luxury carts that complement any wedding or corporate theme.</p>
            </div>
            <div className="p-8 border border-white/20 rounded-3xl reveal delay-400">
              <h3 className="text-xl font-bold mb-4">Unmatched Quality</h3>
              <p className="text-sm opacity-80">The traditional way is the best way. We never compromise on texture.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-24 bg-white text-center reveal">
        <h2 className="text-3xl font-serif mb-8">Let us make your next event joyful.</h2>
        <button onClick={() => onNavigate('contact')} className="bg-rose-600 text-white px-12 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-rose-900/20">Start Your Inquiry</button>
      </section>
    </div>
  );
};

export default AboutPage;