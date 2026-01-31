
import React from 'react';

interface FooterProps {
  onNavigate: (view: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center">
                <span className="text-white font-serif">A</span>
              </div>
              <span className="text-xl font-serif">Gelato Allegra</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Luxury artisan gelato catering. Bringing the soul of Italian dessert to the world's most elegant celebrations.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-slate-400">
              <li><button onClick={() => onNavigate('home')} className="hover:text-rose-500 transition-colors">Front Page</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-rose-500 transition-colors">The Legacy</button></li>
              <li><button onClick={() => onNavigate('packages')} className="hover:text-rose-500 transition-colors">Service Tiers</button></li>
              <li><button onClick={() => onNavigate('gallery')} className="hover:text-rose-500 transition-colors">The Gallery</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-400">
              <li><button onClick={() => onNavigate('contact')} className="hover:text-rose-500 transition-colors">Booking Inquiry</button></li>
              <li><button className="hover:text-rose-500 transition-colors text-left">Help Center</button></li>
              <li><button className="hover:text-rose-500 transition-colors text-left">Terms of Service</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Connect</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">03 9876 5432</li>
              <li className="flex items-center gap-3">ciao@gelatoallegra.com.au</li>
              <li className="flex items-center gap-3">Fitzroy, Melbourne</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">© 2024 Gelato Allegra. All rights reserved.</p>
          <button 
            onClick={() => onNavigate('admin')}
            className="text-slate-700 text-[9px] uppercase tracking-[0.3em] font-black hover:text-rose-600 transition-colors"
          >
            Staff Portal
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
