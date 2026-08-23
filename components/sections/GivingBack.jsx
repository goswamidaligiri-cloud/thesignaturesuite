import { ArrowUpRight } from 'lucide-react';
import { givingBack } from '@/lib/content';

export default function GivingBack() {
  if (!givingBack.enabled) return null;
  return (
    <section id="giving-back" className="py-28 md:py-40 bg-stone2">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:col-span-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="hairline" />
              <span className="eyebrow">{givingBack.eyebrow}</span>
            </div>
            <h2 className="h-display text-5xl md:text-6xl lg:text-7xl text-ink">
              {givingBack.headingLine1} <br />
              <span className="italic text-champagne">{givingBack.headingLine2}</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 md:pt-6">
            {givingBack.intro && (
              <p className="text-muted2 text-base md:text-lg leading-relaxed">{givingBack.intro}</p>
            )}
            {givingBack.quote && (
              <blockquote className="mt-8 border-l-2 border-champagne pl-6">
                <p className="h-display italic text-2xl md:text-3xl text-ink leading-snug">{givingBack.quote}</p>
                {givingBack.attribution && (
                  <footer className="mt-4 eyebrow">{givingBack.attribution}</footer>
                )}
              </blockquote>
            )}
          </div>
        </div>

        {givingBack.partners && givingBack.partners.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {givingBack.partners.map((p) => (
              <div key={p.name} className="bg-ivory group overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-line">
                  <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="p-8 md:p-10">
                  {p.cause && <div className="eyebrow text-champagne mb-2">{p.cause}</div>}
                  <h3 className="h-display text-3xl md:text-4xl text-ink mb-4">{p.name}</h3>
                  {p.description && <p className="text-muted2 leading-relaxed">{p.description}</p>}
                </div>
              </div>
            ))}
          </div>
        )}

        {givingBack.cta && (
          <div className="mt-14 flex justify-center">
            <a href={givingBack.cta.href} className="inline-flex items-center gap-2 text-[12px] uppercase tracking-widest-2 border-b border-ink pb-1 hover:text-champagne hover:border-champagne transition-colors">
              {givingBack.cta.label} <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
