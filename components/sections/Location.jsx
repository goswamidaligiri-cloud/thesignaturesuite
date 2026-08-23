import { ArrowUpRight, MapPin } from 'lucide-react';
import { location } from '@/lib/content';

export default function Location() {
  if (!location.enabled) return null;
  const { lat, lng } = location.coordinates;
  const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=14&output=embed`;

  return (
    <section id="location" className="py-28 md:py-40 bg-ivory">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-14">
          <div className="md:col-span-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="hairline" />
              <span className="eyebrow">{location.eyebrow}</span>
            </div>
            <h2 className="h-display text-5xl md:text-6xl lg:text-7xl text-ink">
              {location.headingLine1} <br />
              <span className="italic text-champagne">{location.headingLine2}</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 md:pt-6">
            <p className="text-muted2 text-base md:text-lg leading-relaxed">{location.intro}</p>
            <div className="mt-6 flex items-start gap-3 text-ink">
              <MapPin className="w-4 h-4 mt-1 text-champagne" strokeWidth={1.5} />
              <p className="text-sm leading-relaxed">{location.address}</p>
            </div>
            <a href={location.cta.href} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 text-[12px] uppercase tracking-widest-2 border-b border-ink pb-1 hover:text-champagne hover:border-champagne transition-colors">
              {location.cta.label} <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          <div className="md:col-span-7 relative aspect-[4/3] md:aspect-auto md:h-[520px] overflow-hidden border border-line grayscale">
            <iframe
              title="Location map"
              src={mapSrc}
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="md:col-span-5">
            <div className="eyebrow mb-6">Nearby</div>
            <ul className="divide-y divide-line border-t border-b border-line">
              {location.nearby.map((n) => (
                <li key={n.name} className="py-5 flex items-baseline justify-between gap-4">
                  <div>
                    <div className="h-display text-xl md:text-2xl text-ink">{n.name}</div>
                    <div className="text-muted2 text-xs uppercase tracking-widest-2 mt-1">{n.time}</div>
                  </div>
                  <div className="eyebrow text-ink whitespace-nowrap">{n.distance}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
