'use client';

import {useEffect, useState} from 'react';
import {X, ChevronLeft, ChevronRight} from 'lucide-react';
import {imgUrl} from '@/sanity/lib/image';

export default function Gallery({meta, images = [], categories = []}) {
  const [category, setCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(null);
  const filtered = category === 'All' ? images : images.filter((i) => i.category === category);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenIndex(null);
      if (e.key === 'ArrowRight') setOpenIndex((i) => (i + 1) % filtered.length);
      if (e.key === 'ArrowLeft') setOpenIndex((i) => (i - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex]);

  if (!images.length) return null;

  const chips = ['All', ...categories.map(c => c.name).filter(Boolean)];

  return (
    <section id="gallery" className="py-24 md:py-40 bg-ivory">
      <div className="container">
        <div className="flex items-baseline justify-between mb-12 md:mb-16">
          <div className="text-[11px] uppercase tracking-[0.28em] text-muted2">{meta?.eyebrow || 'Gallery'}</div>
          {chips.length > 1 && (
            <div className="hidden md:flex items-center gap-6">
              {chips.map((c) => (
                <button key={c} onClick={() => setCategory(c)} className={`text-[11px] uppercase tracking-[0.22em] transition-colors ${category === c ? 'text-ink' : 'text-muted2 hover:text-ink'}`}>{c}</button>
              ))}
            </div>
          )}
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-3 [column-fill:_balance]">
          {filtered.map((img, i) => {
            const src = imgUrl(img.image, {w: 900});
            const alt = img.imageAlt || img.title || '';
            return (
              <button key={img._id + i} onClick={() => setOpenIndex(i)} className="mb-2 md:mb-3 block w-full break-inside-avoid group relative overflow-hidden bg-stone2">
                <img src={src} alt={alt} className="w-full h-auto object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]" />
              </button>
            );
          })}
        </div>
      </div>

      {openIndex !== null && filtered[openIndex] && (
        <div className="fixed inset-0 z-[80] bg-ink/97 flex items-center justify-center p-4">
          <button onClick={() => setOpenIndex(null)} className="absolute top-6 right-6 text-ivory p-2 hover:text-champagne" aria-label="Close"><X className="w-5 h-5" strokeWidth={1.25} /></button>
          <button onClick={() => setOpenIndex((i) => (i - 1 + filtered.length) % filtered.length)} className="absolute left-4 md:left-10 text-ivory p-2 hover:text-champagne" aria-label="Previous"><ChevronLeft className="w-7 h-7" strokeWidth={1} /></button>
          <button onClick={() => setOpenIndex((i) => (i + 1) % filtered.length)} className="absolute right-4 md:right-10 text-ivory p-2 hover:text-champagne" aria-label="Next"><ChevronRight className="w-7 h-7" strokeWidth={1} /></button>
          <div className="max-w-6xl max-h-[85vh] w-full">
            <img src={imgUrl(filtered[openIndex].image, {w: 1800})} alt={filtered[openIndex].imageAlt || ''} className="w-full h-full object-contain max-h-[85vh]" />
            <div className="mt-4 text-center text-ivory/60 text-[10px] uppercase tracking-[0.28em]">{openIndex + 1} / {filtered.length}</div>
          </div>
        </div>
      )}
    </section>
  );
}
