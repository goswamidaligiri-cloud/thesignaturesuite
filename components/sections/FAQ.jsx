'use client';

import {useState} from 'react';
import {Plus, Minus} from 'lucide-react';

export default function FAQ({meta, items = []}) {
  const [open, setOpen] = useState(0);
  if (!items.length) return null;

  return (
    <section id="faq" className="py-28 md:py-40 bg-ivory">
      <div className="container grid md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-5">
          <div className="sticky top-32">
            {meta?.eyebrow && (
              <div className="flex items-center gap-4 mb-6">
                <div className="hairline" />
                <span className="eyebrow">{meta.eyebrow}</span>
              </div>
            )}
            {(meta?.headingLine1 || meta?.headingLine2) && (
              <h2 className="h-display text-5xl md:text-6xl lg:text-7xl text-ink">
                {meta.headingLine1}
                {meta.headingLine2 && (<><br /><span className="italic text-champagne">{meta.headingLine2}</span></>)}
              </h2>
            )}
          </div>
        </div>

        <div className="md:col-span-7">
          <ul className="border-t border-line">
            {items.map((f, idx) => {
              const isOpen = open === idx;
              return (
                <li key={f._id} className="border-b border-line">
                  <button onClick={() => setOpen(isOpen ? -1 : idx)} className="w-full text-left py-6 flex items-start justify-between gap-6 group">
                    <span className="h-display text-2xl md:text-3xl text-ink group-hover:text-champagne transition-colors">{f.question}</span>
                    <span className="mt-2 text-champagne">
                      {isOpen ? <Minus className="w-5 h-5" strokeWidth={1.25} /> : <Plus className="w-5 h-5" strokeWidth={1.25} />}
                    </span>
                  </button>
                  <div className={`grid transition-all duration-500 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      {f.answer && <p className="text-muted2 text-base md:text-lg leading-relaxed max-w-2xl pr-8 whitespace-pre-line">{f.answer}</p>}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
