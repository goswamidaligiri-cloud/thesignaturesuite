'use client';

import {useEffect, useState} from 'react';
import {ArrowUpRight, Menu, X} from 'lucide-react';

export default function Navigation({nav = [], siteName = 'The Signature Suite', siteTagline = 'Serviced Residences', bookingUrl = '#book'}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'bg-ivory/90 backdrop-blur-md border-b border-line' : 'bg-transparent'
        }`}
      >
        <div className="container flex items-center justify-between h-20">
          <a href="#top" className="flex flex-col leading-none">
            <span className={`h-display text-2xl md:text-[26px] transition-colors duration-500 ${scrolled ? 'text-ink' : 'text-ivory'}`}>{siteName}</span>
            {siteTagline && (
              <span className={`text-[10px] tracking-widest-2 uppercase mt-1 transition-colors duration-500 ${scrolled ? 'text-muted2' : 'text-ivory/70'}`}>{siteTagline}</span>
            )}
          </a>

          {nav.length > 0 && (
            <nav className="hidden md:flex items-center gap-10">
              {nav.map((n) => (
                <a key={n.href + n.label} href={n.href} className={`text-[12px] uppercase tracking-widest-2 font-medium transition-colors duration-500 hover:text-champagne ${scrolled ? 'text-ink' : 'text-ivory'}`}>
                  {n.label}
                </a>
              ))}
            </nav>
          )}

          <div className="flex items-center gap-3">
            {bookingUrl && (
              <a href={bookingUrl} className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[12px] uppercase tracking-widest-2 font-medium border transition-all duration-500 ${scrolled ? 'border-ink text-ink hover:bg-ink hover:text-ivory' : 'border-ivory text-ivory hover:bg-ivory hover:text-ink'}`}>
                Book Now
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
            )}
            <button onClick={() => setOpen(true)} className={`md:hidden p-2 transition-colors duration-500 ${scrolled ? 'text-ink' : 'text-ivory'}`} aria-label="Open menu">
              <Menu className="w-6 h-6" strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-ivory flex flex-col">
          <div className="container flex items-center justify-between h-20">
            <span className="h-display text-2xl">{siteName}</span>
            <button onClick={() => setOpen(false)} className="p-2" aria-label="Close menu">
              <X className="w-6 h-6" strokeWidth={1.25} />
            </button>
          </div>
          <nav className="container flex flex-col gap-6 py-12">
            {nav.map((n) => (
              <a key={n.href + n.label} href={n.href} onClick={() => setOpen(false)} className="h-display text-4xl text-ink border-b border-line pb-6">{n.label}</a>
            ))}
            {bookingUrl && (
              <a href={bookingUrl} onClick={() => setOpen(false)} className="btn-gold mt-6 self-start">Book Now</a>
            )}
          </nav>
        </div>
      )}
    </>
  );
}
