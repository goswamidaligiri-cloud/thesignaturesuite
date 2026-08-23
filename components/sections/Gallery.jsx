'use client';

import {useEffect, useState} from 'react';
import {X, ChevronLeft, ChevronRight} from 'lucide-react';
import {imgUrl} from '@/sanity/lib/image';

export default function Gallery({meta, images = [], categories = []}) {
  const [category, setCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(null);

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
  const filtered = category === 'All' ? images : images.filter((i) => i.category === category);

  return (
    <section id="gallery" className="py-28 md:py-40 bg-ivory">
      <div className="container">
        {(meta?.headingLine1 || meta?.headingLine2) && (
          <div className="grid md:grid-cols-12 gap-10 mb-14">
            <div className="md:col-span-8">
              {meta?.eyebrow && (
                <div className="flex items-center gap-4 mb-6">
                  <div className="hairline" />
                  <span className="eyebrow">{meta.eyebrow}</span>
                </div>
              )}
              <h2 className="h-display text-5xl md:text-6xl lg:text-7xl text-ink">
                {meta.headingLine1}
                {meta.headingLine2 && (<><br /><span className="italic text-champagne">{meta.headingLine2}</span></>)}
              </h2>
            </div>
            {chips.length > 1 && (
              <div className="md:col-span-4 flex md:justify-end md:items-end">
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {chips.map((c) => (
                    <button key={c} onClick={() => setCategory(c)}
                      className={`text-[11px] uppercase tracking-widest-2 px-4 py-2 border transition-colors ${
                        category === c ? 'bg-ink text-ivory border-ink' : 'bg-transparent text-ink border-line hover:border-ink'
                      }`}>{c}</button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 [column-fill:_balance]">
          {filtered.map((img, i) => {
            const src = imgUrl(img.image, {w: 900});
            const alt = img.imageAlt || img.title || '';
            return (
              <button key={img._id + i} onClick={() => setOpenIndex(i)}
                className="mb-4 md:mb-6 block w-full break-inside-avoid group relative overflow-hidden bg-stone2">
                <img src={src} alt={alt} className="w-full h-auto object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors duration-500" />
              </button>
            );
          })}
        </div>
      </div>

      {openIndex !== null && filtered[openIndex] && (
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
            <img src={imgUrl(filtered[openIndex].image, {w: 1800})} alt={filtered[openIndex].imageAlt || ''} className="w-full h-full object-contain max-h-[85vh]" />
            <div className="mt-4 flex items-center justify-between text-ivory/70 text-[11px] uppercase tracking-widest-2">
              <span>{filtered[openIndex].caption || filtered[openIndex].title || ''}</span>
              <span>{openIndex + 1} / {filtered.length}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
