import {imgUrl} from '@/sanity/lib/image';

// Restrained. Photography + short factual copy. No poetic quote block.
export default function GivingBack({data, partners = []}) {
  if (!data) return null;
  if (!data.intro && !data.headingLine1 && partners.length === 0) return null;

  const primary = partners[0];
  const rest = partners.slice(1);

  return (
    <section id="giving-back" className="py-24 md:py-40 bg-ivory">
      <div className="container">
        <div className="text-[11px] uppercase tracking-[0.28em] text-muted2 mb-10 md:mb-14">
          {data.eyebrow || 'Giving Back'}
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
          {primary && primary.image ? (
            <div className="md:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden bg-stone2">
                <img src={imgUrl(primary.image, {w: 1400})} alt={primary.name || ''} className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          ) : null}
          <div className={primary?.image ? 'md:col-span-5' : 'md:col-span-12'}>
            {(data.headingLine1 || data.headingLine2) && (
              <h2 className="h-display text-3xl md:text-5xl text-ink max-w-md">
                {data.headingLine1} {data.headingLine2}
              </h2>
            )}
            {data.intro && (
              <p className="mt-6 text-ink/80 text-base md:text-lg leading-[1.7] max-w-md font-light">{data.intro}</p>
            )}
            {primary?.name && (
              <div className="mt-10 text-[11px] uppercase tracking-[0.28em] text-muted2">In partnership with</div>
            )}
            {primary?.name && <div className="mt-2 text-ink text-lg md:text-xl">{primary.name}</div>}
          </div>
        </div>

        {rest.length > 0 && (
          <ul className="mt-16 md:mt-24 grid md:grid-cols-3 gap-6 md:gap-10">
            {rest.map((p) => (
              <li key={p._id} className="border-t border-line pt-6">
                <div className="text-ink text-lg">{p.name}</div>
                {p.cause && <div className="text-[11px] uppercase tracking-[0.22em] text-muted2 mt-2">{p.cause}</div>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
