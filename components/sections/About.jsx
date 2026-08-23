// Restrained introduction. One statement, one paragraph, inline stats.
// No decorative eyebrow lines, no gold italics, no giant serif blocks.
export default function About({data}) {
  if (!data) return null;
  const hasStatement = data.headingLine1 || data.headingLine2;
  const hasBody = data.lead || data.body;
  const stats = Array.isArray(data.stats) ? data.stats.filter(s => s && (s.value || s.label)) : [];
  if (!hasStatement && !hasBody && stats.length === 0) return null;

  return (
    <section id="about" className="py-32 md:py-48 bg-ivory">
      <div className="container max-w-4xl">
        {hasStatement && (
          <h2 className="h-display text-4xl md:text-6xl text-ink max-w-3xl">
            {data.headingLine1}
            {data.headingLine2 && <> {data.headingLine2}</>}
          </h2>
        )}
        {data.lead && (
          <p className="mt-12 md:mt-16 text-ink/80 text-base md:text-lg leading-[1.7] max-w-2xl font-light">
            {data.lead}
          </p>
        )}
        {data.body && (
          <p className="mt-6 text-ink/70 text-base md:text-lg leading-[1.7] max-w-2xl font-light">
            {data.body}
          </p>
        )}
        {stats.length > 0 && (
          <div className="mt-16 md:mt-24 text-[11px] uppercase tracking-[0.28em] text-muted2">
            {stats.map((s, i) => (
              <span key={s.label || i}>
                {s.value} {s.label}{i < stats.length - 1 && <span className="mx-3 text-line">/</span>}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
