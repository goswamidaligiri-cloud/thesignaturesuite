import * as Icons from 'lucide-react';
import { amenities } from '@/lib/content';

export default function Amenities() {
  if (!amenities.enabled) return null;
  return (
    <section id="amenities" className="py-28 md:py-40 bg-ivory">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-20">
          <div className="md:col-span-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="hairline" />
              <span className="eyebrow">{amenities.eyebrow}</span>
            </div>
            <h2 className="h-display text-5xl md:text-6xl lg:text-7xl text-ink">
              {amenities.headingLine1} <br />
              <span className="italic text-champagne">{amenities.headingLine2}</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 md:pt-6">
            <p className="text-muted2 text-base md:text-lg leading-relaxed">{amenities.intro}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-line border border-line">
          {amenities.items.map((a) => {
            const Icon = Icons[a.icon] || Icons.Sparkles;
            return (
              <div key={a.name} className="bg-ivory p-6 md:p-8 flex flex-col gap-4 hover:bg-stone2 transition-colors duration-500">
                <Icon className="w-6 h-6 text-champagne" strokeWidth={1.25} />
                <div>
                  <h3 className="h-display text-xl md:text-2xl text-ink mb-1">{a.name}</h3>
                  <p className="text-muted2 text-sm leading-relaxed">{a.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
