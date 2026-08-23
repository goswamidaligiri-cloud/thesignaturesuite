export default function About({data}) {
  if (!data) return null;
  return (
    <section id="about" className="py-28 md:py-40 bg-ivory">
      <div className="container grid md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-5">
          <div className="sticky top-32">
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
        </div>

        <div className="md:col-span-7 md:pt-4">
          {data.lead && (
            <p className="h-display text-2xl md:text-3xl text-ink leading-[1.35] font-light">{data.lead}</p>
          )}
          {data.body && (
            <p className="mt-8 text-muted2 text-base md:text-lg leading-relaxed max-w-xl">{data.body}</p>
          )}

          {Array.isArray(data.stats) && data.stats.length > 0 && (
            <div className="mt-14 grid grid-cols-3 gap-6 md:gap-10 border-t border-line pt-10">
              {data.stats.map((s, i) => (
                <div key={s.label || i}>
                  {s.value && <div className="h-display text-4xl md:text-5xl text-ink">{s.value}</div>}
                  {s.label && <div className="eyebrow mt-2">{s.label}</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
