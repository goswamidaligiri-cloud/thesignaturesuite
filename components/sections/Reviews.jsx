'use client';

import {useState} from 'react';
import {ChevronLeft, ChevronRight} from 'lucide-react';

export default function Reviews({meta, items = []}) {
  const [i, setI] = useState(0);
  if (!items.length) return null;
  const total = items.length;
  const r = items[i];

  return (
    <section id="reviews" className="py-28 md:py-40 bg-ink text-ivory">
      <div className="container">
        {(meta?.eyebrow || meta?.headingLine1 || meta?.headingLine2) && (
          <>
            {meta?.eyebrow && (
              <div className="flex items-center gap-4 mb-6 justify-center">
                <div className="h-px w-16 bg-champagne" />
                <span className="text-[11px] uppercase tracking-widest-2 text-ivory/70">{meta.eyebrow}</span>
                <div className="h-px w-16 bg-champagne" />
              </div>
            )}
            {(meta?.headingLine1 || meta?.headingLine2) && (
              <h2 className="h-display text-5xl md:text-6xl lg:text-7xl text-center max-w-4xl mx-auto">
                {meta.headingLine1} {meta.headingLine2 && <span className="italic text-champagne">{meta.headingLine2}</span>}
              </h2>
            )}
          </>
        )}

        <div className="mt-16 md:mt-24 max-w-4xl mx-auto text-center">
          {r.rating > 0 && (
            <div className="text-champagne text-2xl tracking-widest-2 mb-8">{'\u2605'.repeat(r.rating)}</div>
          )}
          {r.body && (
            <blockquote className="h-display text-2xl md:text-4xl leading-[1.35] italic text-ivory">
              &ldquo;{r.body}&rdquo;
            </blockquote>
          )}
          {(r.name || r.source) && (
            <div className="mt-10 eyebrow text-ivory/80">
              {[r.name, r.source].filter(Boolean).join(' \u2014 ')}
            </div>
          )}
        </div>

        {total > 1 && (
          <div className="mt-14 flex items-center justify-center gap-8">
            <button onClick={() => setI((i - 1 + total) % total)} className="text-ivory/80 hover:text-champagne p-2" aria-label="Previous review">
              <ChevronLeft className="w-6 h-6" strokeWidth={1} />
            </button>
            <div className="flex items-center gap-2">
              {items.map((_, idx) => (
                <button key={idx} onClick={() => setI(idx)} className={`h-px transition-all ${idx === i ? 'w-10 bg-champagne' : 'w-6 bg-ivory/30'}`} aria-label={`Review ${idx + 1}`} />
              ))}
            </div>
            <button onClick={() => setI((i + 1) % total)} className="text-ivory/80 hover:text-champagne p-2" aria-label="Next review">
              <ChevronRight className="w-6 h-6" strokeWidth={1} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
