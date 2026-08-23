import {ArrowUpRight, MapPin} from 'lucide-react';

export default function Location({data, nearby = []}) {
  if (!data) return null;
  const {latitude, longitude} = data;
  const mapSrc = (latitude && longitude)
    ? `https://maps.google.com/maps?q=${latitude},${longitude}&z=14&output=embed`
    : null;

  return (
    <section id="location" className="py-28 md:py-40 bg-ivory">
      <div className="container">
        {(data.headingLine1 || data.headingLine2 || data.address) && (
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-14">
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
              {data.address && (
                <div className="mt-6 flex items-start gap-3 text-ink">
                  <MapPin className="w-4 h-4 mt-1 text-champagne" strokeWidth={1.5} />
                  <p className="text-sm leading-relaxed whitespace-pre-line">{data.address}</p>
                </div>
              )}
              {(data.directionsUrl || data.googleMapsUrl) && (
                <a href={data.directionsUrl || data.googleMapsUrl} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 text-[12px] uppercase tracking-widest-2 border-b border-ink pb-1 hover:text-champagne hover:border-champagne transition-colors">
                  Get Directions <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </a>
              )}
            </div>
          </div>
        )}

        {(mapSrc || nearby.length > 0) && (
          <div className="grid md:grid-cols-12 gap-6 md:gap-8">
            {mapSrc && (
              <div className="md:col-span-7 relative aspect-[4/3] md:aspect-auto md:h-[520px] overflow-hidden border border-line grayscale">
                <iframe title="Location map" src={mapSrc} className="absolute inset-0 w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            )}
            {nearby.length > 0 && (
              <div className={mapSrc ? 'md:col-span-5' : 'md:col-span-12'}>
                <div className="eyebrow mb-6">Nearby</div>
                <ul className="divide-y divide-line border-t border-b border-line">
                  {nearby.map((n) => (
                    <li key={n._id} className="py-5 flex items-baseline justify-between gap-4">
                      <div>
                        <div className="h-display text-xl md:text-2xl text-ink">{n.name}</div>
                        {(n.categoryName || n.travelTime) && (
                          <div className="text-muted2 text-xs uppercase tracking-widest-2 mt-1">
                            {[n.categoryName, n.travelTime].filter(Boolean).join(' · ')}
                          </div>
                        )}
                      </div>
                      {n.distance && <div className="eyebrow text-ink whitespace-nowrap">{n.distance}</div>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
