import {ArrowUpRight} from 'lucide-react';
import {imgUrl} from '@/sanity/lib/image';

export default function GivingBack({data, partners = []}) {
  if (!data) return null;
  const hasHeading = data.headingLine1 || data.headingLine2 || data.eyebrow;
  if (!hasHeading && !data.intro && !data.quote && partners.length === 0) return null;

  return (
    <section id="giving-back" className="py-28 md:py-40 bg-stone2">
      <div className="container">
        {(hasHeading || data.intro || data.quote) && (
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-24">
            <div className="md:col-span-6">
              {data.eyebrow && (
                <div className="flex items-center gap-4 mb-6">
                  <div className="hairline" />
                  <span className="eyebrow">{data.eyebrow}</span>
                </div>
              )}
              {(data.headingLine1 || data.headingLine2) && (
                <h2 className="h-display text-5xl md:text-6xl lg:text-7xl text-ink">
                  {data.headingLine1}
                  {data.headingLine2 && (<><br /><span className="italic text-champagne">{data.headingLine2}</span></>)}
                </h2>
              )}
            </div>
            <div className="md:col-span-5 md:col-start-8 md:pt-6">
              {data.intro && <p className="text-muted2 text-base md:text-lg leading-relaxed">{data.intro}</p>}
              {data.quote && (
                <blockquote className="mt-8 border-l-2 border-champagne pl-6">
                  <p className="h-display italic text-2xl md:text-3xl text-ink leading-snug">{data.quote}</p>
                  {data.attribution && <footer className="mt-4 eyebrow">{data.attribution}</footer>}
                </blockquote>
              )}
            </div>
          </div>
        )}

        {partners.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {partners.map((p) => (
              <div key={p._id} className="bg-ivory group overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-line">
                  {p.image && (
                    <img src={imgUrl(p.image, {w: 1200})} alt={p.name || ''} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  )}
                </div>
                <div className="p-8 md:p-10">
                  {p.cause && <div className="eyebrow text-champagne mb-2">{p.cause}</div>}
                  {p.name && <h3 className="h-display text-3xl md:text-4xl text-ink mb-4">{p.name}</h3>}
                  {p.description && <p className="text-muted2 leading-relaxed">{p.description}</p>}
                </div>
              </div>
            ))}
          </div>
        )}

        {data.cta?.label && data.cta?.href && (
          <div className="mt-14 flex justify-center">
            <a href={data.cta.href} className="inline-flex items-center gap-2 text-[12px] uppercase tracking-widest-2 border-b border-ink pb-1 hover:text-champagne hover:border-champagne transition-colors">
              {data.cta.label} <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
