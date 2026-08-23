import {imgUrl} from '@/sanity/lib/image';

// Minimal hero. The video is the message. No wall of text.
// Wordmark bottom-left, one short line if provided, one CTA.
export default function Hero({data, siteName = 'The Signature Suite'}) {
  if (!data) return null;
  const posterUrl = data.poster ? imgUrl(data.poster, {w: 2000}) : null;
  const overlay = typeof data.overlayOpacity === 'number' ? data.overlayOpacity : 0.28;
  const height = data.heroHeight || 100;
  const ctaLabel = data.primaryCta?.label || 'Book Your Stay';
  const ctaHref = data.primaryCta?.href || '#book';

  return (
    <section id="top" className="relative w-full overflow-hidden bg-ink" style={{height: `${height}svh`}}>
      {(data.videoDesktopUrl || data.videoMobileUrl) && (
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata" poster={posterUrl || undefined}>
          {data.videoDesktopUrl && <source src={data.videoDesktopUrl} type="video/mp4" media="(min-width: 768px)" />}
          {data.videoMobileUrl && <source src={data.videoMobileUrl} type="video/mp4" />}
        </video>
      )}
      {posterUrl && (
        <div className="absolute inset-0 bg-cover bg-center -z-10" style={{backgroundImage: `url(${posterUrl})`}} />
      )}

      {/* Single soft gradient, no double overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/60" />
      <div className="absolute inset-0" style={{backgroundColor: `rgba(0,0,0,${overlay})`}} />

      {/* Bottom-left wordmark + short line + CTA */}
      <div className="relative z-10 container h-full flex flex-col justify-end pb-16 md:pb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-xl">
            <div className="text-[11px] tracking-[0.28em] uppercase text-ivory/70 mb-4">{siteName}</div>
            {data.subtitle && (
              <p className="text-ivory text-lg md:text-xl font-light leading-relaxed max-w-md">{data.subtitle}</p>
            )}
          </div>
          <div className="flex items-center gap-6">
            <a href={ctaHref} className="btn-ghost">{ctaLabel}</a>
            {data.secondaryCta?.label && data.secondaryCta?.href && (
              <a href={data.secondaryCta.href} className="text-[11px] uppercase tracking-[0.22em] text-ivory/80 hover:text-champagne">{data.secondaryCta.label}</a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
