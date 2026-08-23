// Simple typographic list. No icon grid. No giant heading.
export default function Amenities({meta, items = []}) {
  if (!items.length) return null;
  return (
    <section id="amenities" className="py-24 md:py-40 bg-stone2">
      <div className="container max-w-5xl">
        <div className="text-[11px] uppercase tracking-[0.28em] text-muted2 mb-10 md:mb-16">
          {meta?.eyebrow || 'In Residence'}
        </div>

        <ul className="grid md:grid-cols-2 gap-x-16">
          {items.map((a) => (
            <li key={a._id} className="flex items-baseline justify-between py-5 border-t border-line last:border-b">
              <span className="text-ink text-base md:text-lg font-light">{a.name}</span>
              {a.category && (
                <span className="text-[10px] uppercase tracking-[0.22em] text-muted2">{a.category}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
