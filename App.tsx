
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Packages from './components/Packages';
import AIShopper from './components/AIShopper';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage';
import AdminPage from './components/AdminPage';
import { TESTIMONIALS } from './constants';

type View = 'home' | 'about' | 'packages' | 'gallery' | 'contact' | 'admin';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [selectedPackageId, setSelectedPackageId] = useState<number | null>(null);

  // Scroll reveal logic
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [view]);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const handleBookingStart = (packageId: number) => {
    setSelectedPackageId(packageId);
    setView('contact');
  };

  const renderView = () => {
    switch (view) {
      case 'about':
        return <AboutPage onNavigate={setView} />;
      case 'packages':
        return <div className="pt-20"><Packages onSelectPackage={handleBookingStart} /><div className="container mx-auto px-6 pb-24 reveal"><AIShopper /></div></div>;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage preselectedPackageId={selectedPackageId} />;
      case 'admin':
        return <AdminPage />;
      default:
        return (
          <>
            <Hero />
            
            {/* About Snippet */}
            <section className="py-24 bg-rose-50 overflow-hidden">
              <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="w-full lg:w-1/2 relative reveal-left">
                    <img src="https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&q=80&w=800" alt="Gelato Cart" className="rounded-[3rem] shadow-2xl" />
                  </div>
                  <div className="w-full lg:w-1/2 reveal-right">
                    <span className="text-rose-600 font-bold uppercase tracking-widest text-sm mb-4 block">Crafting Delight</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8">Elegance in every <span className="italic text-rose-500">serving</span>.</h2>
                    <p className="text-slate-600 mb-8 text-lg">We bring the authentic spirit of an Italian gelateria to your event with our luxury carts and award-winning flavors.</p>
                    <button onClick={() => setView('about')} className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-slate-800 transition-all hover:-translate-y-1">Discover Our Story</button>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Packages */}
            <Packages onSelectPackage={handleBookingStart} />
            
            <div className="container mx-auto px-6 pb-24 reveal">
              <AIShopper />
            </div>

            {/* Testimonials Snippet */}
            <section className="py-24 bg-slate-900 text-white">
              <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-serif mb-16 reveal">Accolades & Kind Words</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {TESTIMONIALS.map((t, idx) => (
                    <div key={t.id} className={`bg-white/5 p-8 rounded-3xl border border-white/10 italic reveal delay-${(idx + 1) * 100}`}>
                      "{t.text}"
                      <div className="mt-6 font-bold text-rose-400 not-italic">- {t.author}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-rose-100 selection:text-rose-900">
      <Header currentView={view} setView={setView} />
      <main className="animate-in fade-in duration-700">
        {renderView()}
      </main>
      <Footer onNavigate={setView} />
    </div>
  );
};

export default App;
