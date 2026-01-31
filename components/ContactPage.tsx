
import React, { useState, useEffect } from 'react';
import { PACKAGES } from '../constants';

interface ContactPageProps {
  preselectedPackageId?: number | null;
}

const ADD_ONS = [
  { id: 'topping-bar', name: 'Premium Toppings Bar', price: 100, desc: 'Honeycomb, crushed nuts, & house-made sauces.' },
  { id: 'extra-hour', name: 'Extended Service (+1hr)', price: 150, desc: 'Keep the gelato flowing for longer.' },
  { id: 'calligraphy', name: 'Custom Menu Calligraphy', price: 50, desc: 'Hand-lettered flavor menu for your event.' },
  { id: 'branding', name: 'Custom Branded Cups', price: 200, desc: 'Personalized stamps with your logo or initials.' },
];

const ContactPage: React.FC<ContactPageProps> = ({ preselectedPackageId }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(preselectedPackageId || 3); // Default to Mellow
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  useEffect(() => {
    if (preselectedPackageId) {
      setSelectedPackage(preselectedPackageId);
    }
  }, [preselectedPackageId]);

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const currentPkg = PACKAGES.find(p => p.id === selectedPackage) || PACKAGES[2];
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = ADD_ONS.find(a => a.id === id);
    return sum + (addon?.price || 0);
  }, 0);
  
  const pkgBasePrice = parseInt(currentPkg.price.replace(/[^0-9]/g, ''));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-white px-6">
        <div 
          className="max-w-md w-full text-center animate-in fade-in zoom-in duration-700"
          role="status"
          aria-live="polite"
        >
          <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl font-serif text-slate-900 mb-4">Request Received</h2>
          <p className="text-slate-500 mb-10 leading-relaxed">
            Thank you for choosing Gelato Allegra for your <strong>{currentPkg.name}</strong> experience. Our concierge team will prepare a formal proposal including your {selectedAddons.length} selected add-ons within 24 hours.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="text-rose-600 font-bold uppercase tracking-widest text-xs border-b-2 border-rose-200 hover:border-rose-600 transition-all pb-1 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-4 rounded"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        {/* Left Side: Summary Sidebar */}
        <div className="w-full lg:w-4/12 bg-slate-900 p-12 lg:p-16 text-white overflow-y-auto">
          <div className="sticky top-0">
            <span className="text-rose-400 font-script text-3xl mb-4 block">The Selection</span>
            <h2 className="text-3xl font-serif mb-8">Booking Summary</h2>
            
            <div className="space-y-8">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-[10px] font-black uppercase tracking-widest text-rose-500 mb-2">Selected Tier</p>
                <p className="text-xl font-bold">{currentPkg.name}</p>
                <p className="text-xs text-slate-400 mt-1">{currentPkg.guests} • {currentPkg.duration}</p>
              </div>

              {selectedAddons.length > 0 && (
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Enhancements</p>
                  <div className="space-y-3">
                    {selectedAddons.map(id => {
                      const addon = ADD_ONS.find(a => a.id === id);
                      return (
                        <div key={id} className="flex justify-between text-sm">
                          <span className="text-slate-300">{addon?.name}</span>
                          <span className="font-bold text-rose-400">+${addon?.price}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="pt-8 border-t border-white/10">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs uppercase tracking-widest text-slate-500">Estimated Total</span>
                  <span className="text-3xl font-serif text-white">${pkgBasePrice + addonsTotal}</span>
                </div>
                <p className="text-[9px] text-slate-500 leading-tight">
                  *This is an estimate. Final pricing may vary based on travel distance and specific event requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Inquiry Portal */}
        <div className="w-full lg:w-8/12 p-12 lg:p-24 flex flex-col items-center">
          <div className="max-w-2xl w-full mx-auto">
            <header className="mb-12">
              <h1 className="text-4xl font-serif text-slate-900 mb-2">Booking Portal</h1>
              <p className="text-slate-400">Refine your package and provide event details for a formal proposal.</p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Group 01: Tier Selection */}
              <fieldset>
                <legend className="w-full flex items-center gap-4 mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-600">01</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Select Your Experience</span>
                  <div className="h-px flex-1 bg-slate-100" aria-hidden="true"></div>
                </legend>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {PACKAGES.map(pkg => (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`p-4 rounded-2xl border-2 text-left transition-all ${
                        selectedPackage === pkg.id 
                          ? 'border-rose-600 bg-rose-50/50' 
                          : 'border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      <p className={`text-[9px] font-black uppercase tracking-widest mb-1 ${selectedPackage === pkg.id ? 'text-rose-600' : 'text-slate-400'}`}>
                        {pkg.guests}
                      </p>
                      <p className="font-bold text-sm text-slate-900">{pkg.name}</p>
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* Group 02: Enhancements */}
              <fieldset>
                <legend className="w-full flex items-center gap-4 mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-600">02</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Event Add-ons</span>
                  <div className="h-px flex-1 bg-slate-100" aria-hidden="true"></div>
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ADD_ONS.map(addon => (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-start gap-4 p-5 rounded-2xl border-2 text-left transition-all ${
                        selectedAddons.includes(addon.id)
                          ? 'border-rose-600 bg-rose-50/50'
                          : 'border-slate-50 hover:bg-slate-50'
                      }`}
                    >
                      <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        selectedAddons.includes(addon.id) ? 'bg-rose-600 border-rose-600' : 'border-slate-300'
                      }`}>
                        {selectedAddons.includes(addon.id) && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                        )}
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <p className="font-bold text-sm text-slate-900">{addon.name}</p>
                          <p className="text-xs font-bold text-rose-600">+${addon.price}</p>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-tight">{addon.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* Group 03: Event Particulars */}
              <fieldset className="space-y-6">
                <legend className="w-full flex items-center gap-4 mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-600">03</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Event Particulars</span>
                  <div className="h-px flex-1 bg-slate-100" aria-hidden="true"></div>
                </legend>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="full-name" className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Full Name *</label>
                    <input id="full-name" required type="text" className="w-full bg-slate-50 border-b-2 border-slate-100 py-3 px-1 outline-none focus:border-rose-500 transition-colors" placeholder="e.g. Alexander Rossi" />
                  </div>
                  <div className="group">
                    <label htmlFor="email-address" className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Email Address *</label>
                    <input id="email-address" required type="email" className="w-full bg-slate-50 border-b-2 border-slate-100 py-3 px-1 outline-none focus:border-rose-500 transition-colors" placeholder="e.g. alexander@domain.com" />
                  </div>
                  <div className="group">
                    <label htmlFor="event-date" className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Event Date *</label>
                    <input id="event-date" required type="date" className="w-full bg-slate-50 border-b-2 border-slate-100 py-3 px-1 outline-none focus:border-rose-500 transition-colors" />
                  </div>
                  <div className="group">
                    <label htmlFor="venue" className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Venue / Location</label>
                    <input id="venue" type="text" className="w-full bg-slate-50 border-b-2 border-slate-100 py-3 px-1 outline-none focus:border-rose-500 transition-colors" placeholder="e.g. Royal Botanic Gardens" />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="event-details" className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Vision & Special Notes</label>
                  <textarea id="event-details" rows={2} className="w-full bg-slate-50 border-b-2 border-slate-100 py-3 px-1 outline-none focus:border-rose-500 transition-colors resize-none" placeholder="Tell us about your theme, preferred flavors, or logistics..."></textarea>
                </div>
              </fieldset>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-slate-900 text-white py-6 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-rose-600 transition-all duration-500 shadow-xl shadow-slate-900/10 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {loading ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : 'Send Proposal Request'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
