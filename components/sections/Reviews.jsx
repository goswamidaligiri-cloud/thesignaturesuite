'use client';

import {useState} from 'react';
import {ChevronLeft, ChevronRight} from 'lucide-react';

// Quieter reviews — ivory bg, smaller typography, no giant italic block.
export default function Reviews({meta, items = []}) {
  const [i, setI] = useState(0);
  if (!items.length) return null;
  const total = items.length;
  const r = items[i];

  return (
    <section id="reviews" className="py-24 md:py-40 bg-ivory">
      <div className="container">
        <div className="text-[11px] uppercase tracking-[0.28em] text-muted2 mb-12 md:mb-16">
          {meta?.eyebrow || 'Guests'}
        </div>

        <div className="max-w-3xl">
          {r.body && (
            <p className="text-ink text-2xl md:text-3xl leading-[1.4] font-light">“{r.body}”</p>
          )}
          {(r.name || r.source) && (
            <div className="mt-8 text-[11px] uppercase tracking-[0.28em] text-muted2">
              {[r.name, r.source].filter(Boolean).join(' · ')}
            </div>
          )}
        </div>

        {total > 1 && (
          <div className="mt-14 flex items-center gap-6">
            <button onClick={() => setI((i - 1 + total) % total)} className="text-ink/60 hover:text-ink p-1" aria-label="Previous review"><ChevronLeft className="w-5 h-5" strokeWidth={1} /></button>
            <div className="text-[11px] uppercase tracking-[0.22em] text-muted2">{(i + 1).toString().padStart(2, '0')} / {total.toString().padStart(2, '0')}</div>
            <button onClick={() => setI((i + 1) % total)} className="text-ink/60 hover:text-ink p-1" aria-label="Next review"><ChevronRight className="w-5 h-5" strokeWidth={1} /></button>
          </div>
        )}
      </div>
    </section>
  );
}
