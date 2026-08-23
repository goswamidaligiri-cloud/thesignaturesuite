'use client';

import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { gallery } from '@/lib/content';

export default function Gallery() {
  if (!gallery.enabled) return null;
  const [category, setCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(null);

  const filtered = category === 'All' ? gallery.images : gallery.images.filter((i) => i.category === category);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenIndex(null);
      if (e.key === 'ArrowRight') setOpenIndex((i) => (i + 1) % filtered.length);
      if (e.key === 'ArrowLeft') setOpenIndex((i) => (i - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openIndex, filtered.length]);

  return (
    <section id="gallery" className="py-28 md:py-40 bg-ivory">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="hairline" />
              <span className="eyebrow">{gallery.eyebrow}</span>
            </div>
            <h2 className="h-display text-5xl md:text-6xl lg:text-7xl text-ink">
              {gallery.headingLine1} <br />
              <span className="italic text-champagne">{gallery.headingLine2}</span>
            </h2>
          </div>
          <div className="md:col-span-4 flex md:justify-end md:items-end">
            <div className="flex flex-wrap gap-2 md:gap-3">
              {gallery.categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`text-[11px] uppercase tracking-widest-2 px-4 py-2 border transition-colors ${
                    category === c ? 'bg-ink text-ivory border-ink' : 'bg-transparent text-ink border-line hover:border-ink'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 [column-fill:_balance]">
          {filtered.map((img, i) => (
            <button
              key={img.src + i}
              onClick={() => setOpenIndex(i)}
              className="mb-4 md:mb-6 block w-full break-inside-avoid group relative overflow-hidden bg-stone2"
              style={{ aspectRatio: `4 / ${img.h}` }}
            >
              <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors duration-500" />
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div className="fixed inset-0 z-[80] bg-ink/95 flex items-center justify-center p-4">
          <button onClick={() => setOpenIndex(null)} className="absolute top-6 right-6 text-ivory p-2 hover:text-champagne" aria-label="Close">
            <X className="w-6 h-6" strokeWidth={1.25} />
          </button>
          <button onClick={() => setOpenIndex((i) => (i - 1 + filtered.length) % filtered.length)} className="absolute left-4 md:left-10 text-ivory p-2 hover:text-champagne" aria-label="Previous">
            <ChevronLeft className="w-8 h-8" strokeWidth={1} />
          </button>
          <button onClick={() => setOpenIndex((i) => (i + 1) % filtered.length)} className="absolute right-4 md:right-10 text-ivory p-2 hover:text-champagne" aria-label="Next">
            <ChevronRight className="w-8 h-8" strokeWidth={1} />
          </button>
          <div className="max-w-6xl max-h-[85vh] w-full">
            <img src={filtered[openIndex].src} alt={filtered[openIndex].alt} className="w-full h-full object-contain max-h-[85vh]" />
            <div className="mt-4 flex items-center justify-between text-ivory/70 text-[11px] uppercase tracking-widest-2">
              <span>{filtered[openIndex].alt}</span>
              <span>{openIndex + 1} / {filtered.length}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
