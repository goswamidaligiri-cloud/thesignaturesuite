'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { reviews } from '@/lib/content';

export default function Reviews() {
  if (!reviews.enabled) return null;
  const [i, setI] = useState(0);
  const total = reviews.items.length;
  const r = reviews.items[i];

  return (
    <section id="reviews" className="py-28 md:py-40 bg-ink text-ivory">
      <div className="container">
        <div className="flex items-center gap-4 mb-6 justify-center">
          <div className="h-px w-16 bg-champagne" />
          <span className="text-[11px] uppercase tracking-widest-2 text-ivory/70">{reviews.eyebrow}</span>
          <div className="h-px w-16 bg-champagne" />
        </div>
        <h2 className="h-display text-5xl md:text-6xl lg:text-7xl text-center max-w-4xl mx-auto">
          {reviews.headingLine1} <span className="italic text-champagne">{reviews.headingLine2}</span>
        </h2>

        <div className="mt-16 md:mt-24 max-w-4xl mx-auto text-center">
          <div className="text-champagne text-2xl tracking-widest-2 mb-8">{'\u2605'.repeat(r.rating)}</div>
          <blockquote className="h-display text-2xl md:text-4xl leading-[1.35] italic text-ivory">
            &ldquo;{r.body}&rdquo;
          </blockquote>
          <div className="mt-10 eyebrow text-ivory/80">
            {r.name} — {r.source}
          </div>
        </div>

        <div className="mt-14 flex items-center justify-center gap-8">
          <button onClick={() => setI((i - 1 + total) % total)} className="text-ivory/80 hover:text-champagne p-2" aria-label="Previous review">
            <ChevronLeft className="w-6 h-6" strokeWidth={1} />
          </button>
          <div className="flex items-center gap-2">
            {reviews.items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-px transition-all ${idx === i ? 'w-10 bg-champagne' : 'w-6 bg-ivory/30'}`}
                aria-label={`Review ${idx + 1}`}
              />
            ))}
          </div>
          <button onClick={() => setI((i + 1) % total)} className="text-ivory/80 hover:text-champagne p-2" aria-label="Next review">
            <ChevronRight className="w-6 h-6" strokeWidth={1} />
          </button>
        </div>
      </div>
    </section>
  );
}
