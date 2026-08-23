import {imgUrl} from '@/sanity/lib/image';

// Editorial suite presentation. Each suite gets its own row with an
// alternating rhythm. Photography dominates; text is small, deliberate.
function Row({s, reverse}) {
  const src = s.heroImage ? imgUrl(s.heroImage, {w: 1600}) : null;
  const meta = [s.area, s.beds].filter(Boolean).join(' · ');

  return (
    <a href={s.slug ? `/suites/${s.slug}` : '#'} className="group grid md:grid-cols-12 gap-8 md:gap-16 items-center py-14 md:py-24 border-t border-line">
      <div className={`md:col-span-7 ${reverse ? 'md:order-2' : ''}`}>
        <div className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden bg-stone2">
          {src && <img src={src} alt={s.heroImageAlt || s.name || ''} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]" />}
        </div>
      </div>
      <div className={`md:col-span-4 ${reverse ? 'md:order-1 md:col-start-2' : 'md:col-start-9'}`}>
        {s.collectionLabel && (
          <div className="text-[10px] uppercase tracking-[0.28em] text-muted2 mb-4">{s.collectionLabel}</div>
        )}
        {s.name && <h3 className="h-display text-4xl md:text-5xl text-ink">{s.name}</h3>}
        {s.tagline && <p className="mt-4 text-ink/70 text-base leading-relaxed max-w-sm">{s.tagline}</p>}
        {meta && <div className="mt-6 text-[11px] uppercase tracking-[0.22em] text-muted2">{meta}</div>}
        <div className="mt-8 text-[11px] uppercase tracking-[0.22em] text-ink group-hover:text-champagne transition-colors">Explore suite →</div>
      </div>
    </a>
  );
}

export default function Suites({meta, items = []}) {
  if (!items.length) return null;

  return (
    <section id="suites" className="py-24 md:py-40 bg-ivory">
      <div className="container">
        {/* Restrained section marker only — no giant headline */}
        <div className="flex items-baseline justify-between mb-8 md:mb-4">
          <div className="text-[11px] uppercase tracking-[0.28em] text-muted2">{meta?.eyebrow || 'The Residences'}</div>
          {(meta?.executiveCount || meta?.premiumCount) && (
            <div className="text-[11px] uppercase tracking-[0.28em] text-muted2 hidden md:block">
              {items.length.toString().padStart(2, '0')} residences
            </div>
          )}
        </div>

        <div>
          {items.map((s, i) => (
            <Row key={s._id || s.slug || i} s={s} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
