import {ArrowUpRight} from 'lucide-react';

// Practical location layout. Address + In The Building + Nearby + map.
// No poetic storytelling.
export default function Location({data, nearby = []}) {
  if (!data) return null;
  const {latitude, longitude} = data;
  const mapSrc = (latitude && longitude)
    ? `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`
    : null;

  // Group nearby places by category
  const grouped = nearby.reduce((acc, n) => {
    const key = n.categoryName || 'Nearby';
    (acc[key] = acc[key] || []).push(n);
    return acc;
  }, {});
  // Order: In The Building, Across The Road, then the rest
  const orderedKeys = [
    'In The Building', 'Across The Road', 'Getting Here', 'Dining', 'Shopping', 'Healthcare', 'Attractions', 'Essential Services',
    ...Object.keys(grouped).filter(k => !['In The Building','Across The Road','Getting Here','Dining','Shopping','Healthcare','Attractions','Essential Services'].includes(k)),
  ].filter(k => grouped[k]);

  return (
    <section id="location" className="py-24 md:py-40 bg-stone2">
      <div className="container">
        <div className="text-[11px] uppercase tracking-[0.28em] text-muted2 mb-12 md:mb-20">
          {data.eyebrow || 'Location'}
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:col-span-6">
            {data.address && (
              <div className="space-y-1 text-ink text-lg md:text-xl leading-[1.6] whitespace-pre-line font-light">
                {data.address}
              </div>
            )}
            {(data.directionsUrl || data.googleMapsUrl) && (
              <a href={data.directionsUrl || data.googleMapsUrl} target="_blank" rel="noopener" className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink hover:text-champagne">
                Get directions <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
            )}
          </div>

          {orderedKeys.length > 0 && (
            <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">
              {orderedKeys.slice(0, 4).map((key) => (
                <div key={key}>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-muted2 mb-4">{key}</div>
                  <ul className="space-y-2">
                    {grouped[key].map((n) => (
                      <li key={n._id} className="flex items-baseline justify-between gap-4 text-ink text-[15px] font-light">
                        <span>{n.name}</span>
                        {n.distance && <span className="text-[10px] uppercase tracking-[0.22em] text-muted2">{n.distance}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {mapSrc && (
          <div className="relative aspect-[21/9] overflow-hidden grayscale">
            <iframe title="Location map" src={mapSrc} className="absolute inset-0 w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        )}
      </div>
    </section>
  );
}
