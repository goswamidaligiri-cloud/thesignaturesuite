'use client';

import { hero } from '@/lib/content';

export default function Hero() {
  if (!hero.enabled) return null;
  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden bg-ink">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay muted loop playsInline preload="metadata"
        poster={hero.poster}
      >
        <source src={hero.videoDesktop} type="video/mp4" media="(min-width: 768px)" />
        <source src={hero.videoMobile} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-cover bg-center animate-slow-zoom -z-10" style={{ backgroundImage: `url(${hero.poster})` }} />

      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/25 to-ink/70" />
      <div className="absolute inset-0" style={{ backgroundColor: `rgba(23,23,23,${hero.overlayOpacity})` }} />

      <div className="relative z-10 container h-full flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-3xl animate-fade-up">
          <div className="flex items-center gap-4 mb-8">
            <div className="hairline" />
            <span className="eyebrow text-ivory/80">{hero.badge}</span>
          </div>

          <h1 className="h-display text-ivory text-[54px] sm:text-[72px] md:text-[92px] lg:text-[112px] leading-[0.95]">
            {hero.headingLine1}<br />
            <span className="italic text-champagne/95">{hero.headingLine2}</span>
          </h1>

          <p className="mt-8 max-w-xl text-ivory/85 text-lg md:text-xl font-light leading-relaxed">{hero.subtitle}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href={hero.primaryCta.href} className="btn-gold bg-champagne text-ink hover:bg-ivory">{hero.primaryCta.label}</a>
            <a href={hero.secondaryCta.href} className="btn-ghost">{hero.secondaryCta.label}</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-ivory/70 text-[10px] uppercase tracking-widest-2">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-ivory/70 to-transparent" />
      </div>
    </section>
  );
}
