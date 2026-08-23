import { ArrowUpRight } from 'lucide-react';
import { suites, suitesMeta } from '@/lib/content';

function Card({ s, large }) {
  const meta = [
    s.area,
    s.beds,
    s.priceFrom ? `From ₹${Number(s.priceFrom).toLocaleString('en-IN')}` : null,
  ].filter(Boolean).join(' · ');

  return (
    <a href={`#${s.slug}`} className={`group block ${large ? 'md:col-span-8' : 'md:col-span-4'}`}>
      <div className="relative overflow-hidden bg-stone2 aspect-[4/5]">
        <img src={s.image} alt={s.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-70" />
        <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-widest-2 text-ivory/90 bg-ink/30 backdrop-blur-sm px-3 py-1.5">{s.collection}</span>
        </div>
        <div className="absolute bottom-6 left-6 right-6 text-ivory">
          <h3 className="h-display text-3xl md:text-4xl">{s.name}</h3>
          {s.tagline && <p className="text-ivory/80 text-sm mt-1 font-light">{s.tagline}</p>}
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 text-[12px] uppercase tracking-widest-2 min-h-[1.25rem]">
        <span className="text-muted2">{meta}</span>
        <span className="flex items-center gap-1.5 text-ink group-hover:text-champagne transition-colors">
          Discover <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
        </span>
      </div>
    </a>
  );
}

export default function Suites() {
  const executive = suites.filter((s) => s.collection === 'Executive Collection');
  const premium = suites.filter((s) => s.collection.startsWith('Livoraa'));

  return (
    <section id="suites" className="py-28 md:py-40 bg-stone2">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="hairline" />
              <span className="eyebrow">{suitesMeta.eyebrow}</span>
            </div>
            <h2 className="h-display text-5xl md:text-6xl lg:text-7xl text-ink">
              {suitesMeta.headingLine1} <br />
              <span className="italic text-champagne">{suitesMeta.headingLine2}</span>
            </h2>
          </div>
          {suitesMeta.intro && (
            <p className="text-muted2 max-w-md text-base md:text-lg leading-relaxed">{suitesMeta.intro}</p>
          )}
        </div>

        <div className="mb-10 flex items-center gap-4">
          <span className="eyebrow text-ink">{suitesMeta.collections.executive.label}</span>
          <div className="flex-1 h-px bg-line" />
          <span className="eyebrow">{suitesMeta.collections.executive.count}</span>
        </div>
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 mb-24">
          {executive[0] && <Card s={executive[0]} large />}
          {executive[1] && <Card s={executive[1]} />}
          {executive[2] && <Card s={executive[2]} />}
          {executive[3] && <Card s={executive[3]} large />}
        </div>

        <div className="mb-10 flex items-center gap-4">
          <span className="eyebrow text-ink">{suitesMeta.collections.premium.label}</span>
          <div className="flex-1 h-px bg-line" />
          <span className="eyebrow">{suitesMeta.collections.premium.count}</span>
        </div>
        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          {premium.map((s) => (
            <div key={s.slug} className="md:col-span-4">
              <Card s={s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
