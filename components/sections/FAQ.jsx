'use client';

import {useState} from 'react';
import {Plus, Minus} from 'lucide-react';

// Functional accordion. No oversized poetic heading.
export default function FAQ({meta, items = []}) {
  const [open, setOpen] = useState(-1);
  if (!items.length) return null;

  return (
    <section id="faq" className="py-24 md:py-40 bg-ivory">
      <div className="container max-w-4xl">
        <div className="text-[11px] uppercase tracking-[0.28em] text-muted2 mb-12 md:mb-16">
          {meta?.eyebrow || 'FAQ'}
        </div>
        <ul className="border-t border-line">
          {items.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <li key={f._id} className="border-b border-line">
                <button onClick={() => setOpen(isOpen ? -1 : idx)} className="w-full text-left py-6 flex items-start justify-between gap-6 group">
                  <span className="text-ink text-lg md:text-xl font-light group-hover:text-champagne transition-colors">{f.question}</span>
                  <span className="mt-1 text-ink/60">
                    {isOpen ? <Minus className="w-4 h-4" strokeWidth={1.25} /> : <Plus className="w-4 h-4" strokeWidth={1.25} />}
                  </span>
                </button>
                <div className={`grid transition-all duration-500 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    {f.answer && <p className="text-ink/70 text-base leading-[1.7] max-w-2xl pr-8 whitespace-pre-line font-light">{f.answer}</p>}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
