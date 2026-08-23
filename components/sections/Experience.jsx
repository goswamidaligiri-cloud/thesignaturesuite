export default function Experience({data}) {
  if (!data) return null;
  const pillars = Array.isArray(data.pillars) ? data.pillars.filter(p => p && (p.title || p.body)) : [];
  if (pillars.length === 0 && !data.headingLine1 && !data.headingLine2) return null;

  return (
    <section id="experience" className="py-28 md:py-40 bg-ink text-ivory">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:col-span-6">
            {data.eyebrow && (
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-16 bg-champagne" />
                <span className="text-[11px] uppercase tracking-widest-2 text-ivory/70">{data.eyebrow}</span>
              </div>
            )}
            {(data.headingLine1 || data.headingLine2) && (
              <h2 className="h-display text-5xl md:text-6xl lg:text-7xl">
                {data.headingLine1}
                {data.headingLine2 && (<><br /><span className="italic text-champagne">{data.headingLine2}</span></>)}
              </h2>
            )}
          </div>
          {data.intro && (
            <div className="md:col-span-5 md:col-start-8 md:pt-6">
              <p className="text-ivory/70 text-base md:text-lg leading-relaxed">{data.intro}</p>
            </div>
          )}
        </div>

        {pillars.length > 0 && (
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-14 md:gap-y-20">
            {pillars.map((p, i) => (
              <div key={p.no || i} className="flex gap-6 md:gap-10 border-t border-ivory/15 pt-8">
                {p.no && <div className="h-display text-champagne text-3xl md:text-4xl min-w-[3rem]">{p.no}</div>}
                <div>
                  {p.title && <h3 className="h-display text-3xl md:text-4xl mb-3">{p.title}</h3>}
                  {p.body && <p className="text-ivory/70 leading-relaxed max-w-md">{p.body}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
