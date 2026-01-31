
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  currentView: string;
  setView: (view: any) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when navigating
  const handleNavigate = (view: string) => {
    setView(view);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Story', id: 'about' },
    { name: 'Packages', id: 'packages' },
    { name: 'Gallery', id: 'gallery' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isScrolled || currentView !== 'home' || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer relative z-50" onClick={() => handleNavigate('home')}>
            <div className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
              <span className="text-white font-serif text-xl">A</span>
            </div>
            <span className={`text-2xl font-serif tracking-tight transition-colors duration-300 ${
              isScrolled || currentView !== 'home' || isMenuOpen ? 'text-rose-900' : 'text-white'
            }`}>
              Gelato Allegra
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigate(link.id)}
                className={`text-[10px] font-black uppercase tracking-[0.2em] hover:text-rose-500 transition-colors ${
                  currentView === link.id ? 'text-rose-600' : (isScrolled || currentView !== 'home' ? 'text-slate-700' : 'text-white')
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => handleNavigate('contact')}
              className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 ${
                currentView === 'contact' 
                  ? 'bg-slate-900 text-white' 
                  : 'bg-rose-600 text-white hover:bg-rose-700 shadow-lg shadow-rose-900/20'
              }`}
            >
              Inquire
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden relative z-50 p-2 text-rose-600 outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-6 relative flex items-center justify-center">
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ease-in-out ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop blur */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-xl"></div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
          <span className="text-rose-400 font-script text-4xl mb-12 animate-in slide-in-from-top duration-700">Experience Joy</span>
          
          <div className="flex flex-col gap-8 mb-12">
            {navLinks.map((link, idx) => (
              <button
                key={link.id}
                onClick={() => handleNavigate(link.id)}
                className={`text-2xl font-serif tracking-tight transition-all duration-500 delay-[${idx * 100}ms] ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                } ${currentView === link.id ? 'text-rose-600' : 'text-slate-900 hover:text-rose-500'}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className={`transition-all duration-700 delay-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <button 
              onClick={() => handleNavigate('contact')}
              className="bg-rose-600 text-white px-12 py-5 rounded-full text-sm font-black uppercase tracking-[0.2em] shadow-2xl shadow-rose-900/20 active:scale-95"
            >
              Inquire Now
            </button>
            
            <p className="mt-12 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              03 9876 5432
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
