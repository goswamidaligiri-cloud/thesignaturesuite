import { about } from '@/lib/content';

export default function About() {
  if (!about.enabled) return null;
  return (
    <section id="about" className="py-28 md:py-40 bg-ivory">
      <div className="container grid md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-5">
          <div className="sticky top-32">
            <div className="flex items-center gap-4 mb-6">
              <div className="hairline" />
              <span className="eyebrow">{about.eyebrow}</span>
            </div>
            <h2 className="h-display text-5xl md:text-6xl lg:text-7xl text-ink">
              {about.headingLine1} <br />
              <span className="italic text-champagne">{about.headingLine2}</span>
            </h2>
          </div>
        </div>

        <div className="md:col-span-7 md:pt-4">
          <p className="h-display text-2xl md:text-3xl text-ink leading-[1.35] font-light">{about.lead}</p>
          <p className="mt-8 text-muted2 text-base md:text-lg leading-relaxed max-w-xl">{about.body}</p>

          <div className="mt-14 grid grid-cols-3 gap-6 md:gap-10 border-t border-line pt-10">
            {about.stats.map((s) => (
              <div key={s.label}>
                <div className="h-display text-4xl md:text-5xl text-ink">{s.value}</div>
                <div className="eyebrow mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
