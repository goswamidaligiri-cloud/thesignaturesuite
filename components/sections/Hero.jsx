import {imgUrl} from '@/sanity/lib/image';

export default function Hero({data}) {
  if (!data) return null;
  const posterUrl = data.poster ? imgUrl(data.poster, {w: 2000}) : null;
  const overlay = typeof data.overlayOpacity === 'number' ? data.overlayOpacity : 0.35;
  const height = data.heroHeight || 100;

  return (
    <section id="top" className="relative w-full overflow-hidden bg-ink" style={{height: `${height}svh`}}>
      {(data.videoDesktopUrl || data.videoMobileUrl) && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline preload="metadata"
          poster={posterUrl || undefined}
        >
          {data.videoDesktopUrl && <source src={data.videoDesktopUrl} type="video/mp4" media="(min-width: 768px)" />}
          {data.videoMobileUrl && <source src={data.videoMobileUrl} type="video/mp4" />}
        </video>
      )}

      {posterUrl && (
        <div className="absolute inset-0 bg-cover bg-center animate-slow-zoom -z-10" style={{backgroundImage: `url(${posterUrl})`}} />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/25 to-ink/70" />
      <div className="absolute inset-0" style={{backgroundColor: `rgba(23,23,23,${overlay})`}} />

      <div className="relative z-10 container h-full flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-3xl animate-fade-up">
          {data.badge && (
            <div className="flex items-center gap-4 mb-8">
              <div className="hairline" />
              <span className="eyebrow text-ivory/80">{data.badge}</span>
            </div>
          )}

          {(data.headingLine1 || data.headingLine2) && (
            <h1 className="h-display text-ivory text-[54px] sm:text-[72px] md:text-[92px] lg:text-[112px] leading-[0.95]">
              {data.headingLine1}
              {data.headingLine2 && (<><br /><span className="italic text-champagne/95">{data.headingLine2}</span></>)}
            </h1>
          )}

          {data.subtitle && (
            <p className="mt-8 max-w-xl text-ivory/85 text-lg md:text-xl font-light leading-relaxed">{data.subtitle}</p>
          )}

          {(data.primaryCta?.label || data.secondaryCta?.label) && (
            <div className="mt-10 flex flex-wrap gap-4">
              {data.primaryCta?.label && data.primaryCta?.href && (
                <a href={data.primaryCta.href} className="btn-gold bg-champagne text-ink hover:bg-ivory">{data.primaryCta.label}</a>
              )}
              {data.secondaryCta?.label && data.secondaryCta?.href && (
                <a href={data.secondaryCta.href} className="btn-ghost">{data.secondaryCta.label}</a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-ivory/70 text-[10px] uppercase tracking-widest-2">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-ivory/70 to-transparent" />
      </div>
    </section>
  );
}
