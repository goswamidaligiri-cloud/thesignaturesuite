'use client';

import {useEffect, useState} from 'react';
import {Menu, X} from 'lucide-react';

const DEFAULT_NAV = [
  {label: 'Suites', href: '#suites'},
  {label: 'Experience', href: '#experience'},
  {label: 'Gallery', href: '#gallery'},
  {label: 'Location', href: '#location'},
];

export default function Navigation({nav = [], siteName = 'The Signature Suite', bookingUrl = '#book'}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const items = nav.length ? nav : DEFAULT_NAV;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-ivory/92 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="container flex items-center justify-between h-20">
          <a href="#top" className={`text-[13px] tracking-[0.22em] uppercase font-medium transition-colors duration-500 ${scrolled ? 'text-ink' : 'text-ivory'}`}>
            {siteName}
          </a>

          <nav className="hidden md:flex items-center gap-9">
            {items.map((n) => (
              <a key={n.href + n.label} href={n.href} className={`text-[11px] uppercase tracking-[0.22em] font-normal transition-colors duration-500 hover:text-champagne ${scrolled ? 'text-ink/80' : 'text-ivory/90'}`}>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {bookingUrl && (
              <a href={bookingUrl} className={`hidden md:inline-flex items-center px-5 py-2 text-[11px] uppercase tracking-[0.22em] font-medium border transition-all duration-500 ${scrolled ? 'border-ink text-ink hover:bg-ink hover:text-ivory' : 'border-ivory text-ivory hover:bg-ivory hover:text-ink'}`}>
                Book
              </a>
            )}
            <button onClick={() => setOpen(true)} className={`md:hidden p-2 transition-colors duration-500 ${scrolled ? 'text-ink' : 'text-ivory'}`} aria-label="Open menu">
              <Menu className="w-5 h-5" strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-ivory flex flex-col">
          <div className="container flex items-center justify-between h-20">
            <span className="text-[13px] tracking-[0.22em] uppercase">{siteName}</span>
            <button onClick={() => setOpen(false)} className="p-2" aria-label="Close menu"><X className="w-5 h-5" strokeWidth={1.25} /></button>
          </div>
          <nav className="container flex flex-col gap-8 py-16">
            {items.map((n) => (
              <a key={n.href + n.label} href={n.href} onClick={() => setOpen(false)} className="text-2xl text-ink">{n.label}</a>
            ))}
            {bookingUrl && (
              <a href={bookingUrl} onClick={() => setOpen(false)} className="btn-primary mt-8 self-start">Book Your Stay</a>
            )}
          </nav>
        </div>
      )}
    </>
  );
}
