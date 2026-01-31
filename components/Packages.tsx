
import React from 'react';
import { PACKAGES } from '../constants';

interface PackagesProps {
  onSelectPackage?: (id: number) => void;
}

const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -right-24 top-1/4 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl"></div>
      <div className="absolute -left-24 bottom-1/4 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 reveal">
          <span className="text-rose-600 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Our Offerings</span>
          <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6">Catering <span className="text-rose-600 italic">Packages</span></h2>
          <div className="w-24 h-1.5 bg-rose-500 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From intimate garden parties to grand corporate galas, discover the perfect gelato experience tailored for your unique celebration.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {PACKAGES.map((pkg, idx) => (
            <div 
              key={pkg.id} 
              className={`group relative flex flex-col p-8 md:p-10 rounded-[2.5rem] transition-all duration-500 transform w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(20%-1.6rem)] min-w-[300px] reveal delay-${(idx % 5) * 100} ${
                pkg.isPopular 
                  ? 'bg-slate-900 text-white shadow-[0_35px_60px_-15px_rgba(225,29,72,0.3)] lg:-translate-y-4 scale-105 z-20 border-4 border-rose-500' 
                  : 'bg-white text-slate-900 shadow-xl shadow-slate-200/50 hover:-translate-y-2 hover:shadow-2xl z-10'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2.5 rounded-full shadow-xl whitespace-nowrap">
                  Guest Favorite
                </div>
              )}
              
              <div className="mb-8 text-center">
                <h3 className={`text-xl font-bold mb-4 uppercase tracking-wider ${pkg.isPopular ? 'text-rose-400' : 'text-slate-900'}`}>
                  {pkg.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-4xl font-serif font-bold ${pkg.isPopular ? 'text-white' : 'text-rose-600'}`}>
                    {pkg.price.replace('From ', '')}
                  </span>
                </div>
                <p className={`text-[10px] mt-2 opacity-60 font-semibold uppercase tracking-widest`}>starting price</p>
              </div>

              <div className={`h-px w-full mb-8 ${pkg.isPopular ? 'bg-white/10' : 'bg-slate-100'}`}></div>

              <ul className="space-y-5 mb-10 flex-grow">
                <li className="flex items-start gap-3">
                  <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${pkg.isPopular ? 'bg-rose-500' : 'bg-rose-100'}`}>
                    <svg className={`w-3 h-3 ${pkg.isPopular ? 'text-white' : 'text-rose-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <span className="block font-bold text-xs uppercase tracking-tight">{pkg.duration} Service</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${pkg.isPopular ? 'bg-rose-500' : 'bg-rose-100'}`}>
                    <svg className={`w-3 h-3 ${pkg.isPopular ? 'text-white' : 'text-rose-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <span className="block font-bold text-xs uppercase tracking-tight">{pkg.guests}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${pkg.isPopular ? 'bg-rose-500' : 'bg-rose-100'}`}>
                    <svg className={`w-3 h-3 ${pkg.isPopular ? 'text-white' : 'text-rose-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <span className="block font-bold text-xs uppercase tracking-tight">{pkg.flavors} Options</span>
                  </div>
                </li>
                <div className={`pt-2 space-y-3`}>
                  {pkg.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-center gap-3 text-xs">
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${pkg.isPopular ? 'bg-rose-400' : 'bg-rose-300'}`}></div>
                      <span className="opacity-80 leading-snug">{feat}</span>
                    </li>
                  ))}
                </div>
              </ul>

              <button 
                onClick={() => onSelectPackage?.(pkg.id)}
                className={`w-full py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 transform active:scale-95 group-hover:scale-[1.02] ${
                pkg.isPopular 
                  ? 'bg-rose-600 text-white hover:bg-rose-500 shadow-xl shadow-rose-900/40' 
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}>
                Book this Experience
              </button>
            </div>
          ))}
        </div>

        {/* Note about customization */}
        <div className="mt-20 text-center reveal">
          <p className="text-slate-400 text-sm font-medium uppercase tracking-[0.2em] mb-4">Need something even bigger?</p>
          <button className="text-rose-600 font-bold border-b-2 border-rose-200 hover:border-rose-600 transition-all pb-1">
            Contact us for custom events over 200 guests
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
