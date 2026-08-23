'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

// NOTE: In Phase 2, every string/URL below is replaced by Sanity CMS queries.
const nav = [
  { label: 'Suites', href: '#suites' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

const suites = [
  {
    collection: 'Executive Collection',
    name: 'The Ivory Suite',
    tagline: 'Corner residence · south light',
    area: '62 sqm',
    beds: '1 King',
    image: 'https://images.unsplash.com/photo-1653564906654-9f2484215e94',
  },
  {
    collection: 'Executive Collection',
    name: 'The Atelier Suite',
    tagline: 'Studio residence · walk-in wardrobe',
    area: '54 sqm',
    beds: '1 Queen',
    image: 'https://images.unsplash.com/photo-1570427224050-b080ad19e3c4',
  },
  {
    collection: 'Executive Collection',
    name: 'The Linen Suite',
    tagline: 'Garden view · soaking tub',
    area: '58 sqm',
    beds: '1 King',
    image: 'https://images.pexels.com/photos/7749046/pexels-photo-7749046.jpeg',
  },
  {
    collection: 'Executive Collection',
    name: 'The Marble Suite',
    tagline: 'Skyline view · private terrace',
    area: '66 sqm',
    beds: '1 King',
    image: 'https://images.pexels.com/photos/33599113/pexels-photo-33599113.jpeg',
  },
  {
    collection: 'Livoraa × The Signature Suite',
    name: 'The Cormorant Residence',
    tagline: 'Two bedroom · signature interiors',
    area: '108 sqm',
    beds: '2 King',
    image: 'https://images.pexels.com/photos/14547138/pexels-photo-14547138.jpeg',
  },
  {
    collection: 'Livoraa × The Signature Suite',
    name: 'The Champagne Penthouse',
    tagline: 'Top floor · panoramic residence',
    area: '142 sqm',
    beds: '2 King + Study',
    image: 'https://images.pexels.com/photos/6903157/pexels-photo-6903157.jpeg',
  },
  {
    collection: 'Livoraa × The Signature Suite',
    name: 'The Editor Residence',
    tagline: 'Curated art · media lounge',
    area: '124 sqm',
    beds: '2 King',
    image: 'https://images.pexels.com/photos/36916378/pexels-photo-36916378.jpeg',
  },
];

const HERO_POSTER = 'https://images.pexels.com/photos/33599113/pexels-photo-33599113.jpeg';
const HERO_VIDEO_DESKTOP = 'https://videos.pexels.com/video-files/6853348/6853348-hd_1920_1080_30fps.mp4';
const HERO_VIDEO_MOBILE = 'https://videos.pexels.com/video-files/6853338/6853338-hd_1280_720_30fps.mp4';

function Navigation({ scrolled, onOpen }) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-ivory/90 backdrop-blur-md border-b border-line'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <a href="#top" className="flex flex-col leading-none">
          <span
            className={`h-display text-2xl md:text-[26px] transition-colors duration-500 ${
              scrolled ? 'text-ink' : 'text-ivory'
            }`}
          >
            The Signature Suite
          </span>
          <span
            className={`text-[10px] tracking-widest-2 uppercase mt-1 transition-colors duration-500 ${
              scrolled ? 'text-muted2' : 'text-ivory/70'
            }`}
          >
            Serviced Residences
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-[12px] uppercase tracking-widest-2 font-medium transition-colors duration-500 hover:text-champagne ${
                scrolled ? 'text-ink' : 'text-ivory'
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#book"
            className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[12px] uppercase tracking-widest-2 font-medium border transition-all duration-500 ${
              scrolled
                ? 'border-ink text-ink hover:bg-ink hover:text-ivory'
                : 'border-ivory text-ivory hover:bg-ivory hover:text-ink'
            }`}
          >
            Book Now
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </a>
          <button
            onClick={onOpen}
            className={`md:hidden p-2 transition-colors duration-500 ${
              scrolled ? 'text-ink' : 'text-ivory'
            }`}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" strokeWidth={1.25} />
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] bg-ivory flex flex-col">
      <div className="container flex items-center justify-between h-20">
        <span className="h-display text-2xl">The Signature Suite</span>
        <button onClick={onClose} className="p-2" aria-label="Close menu">
          <X className="w-6 h-6" strokeWidth={1.25} />
        </button>
      </div>
      <nav className="container flex flex-col gap-6 py-16">
        {nav.map((n) => (
          <a
            key={n.href}
            href={n.href}
            onClick={onClose}
            className="h-display text-4xl text-ink border-b border-line pb-6"
          >
            {n.label}
          </a>
        ))}
        <a href="#book" onClick={onClose} className="btn-gold mt-6 self-start">
          Book Now
        </a>
      </nav>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden bg-ink">
      {/* Cinematic video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={HERO_POSTER}
      >
        <source src={HERO_VIDEO_DESKTOP} type="video/mp4" media="(min-width: 768px)" />
        <source src={HERO_VIDEO_MOBILE} type="video/mp4" />
      </video>

      {/* Poster fallback layer (visible under video for slow connections) */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-slow-zoom -z-10"
        style={{ backgroundImage: `url(${HERO_POSTER})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/25 to-ink/70" />
      <div className="absolute inset-0 bg-ink/20" />

      {/* Content */}
      <div className="relative z-10 container h-full flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-3xl animate-fade-up">
          <div className="flex items-center gap-4 mb-8">
            <div className="hairline" />
            <span className="eyebrow text-ivory/80">Est. 2025 · A Quiet Luxury Collection</span>
          </div>

          <h1 className="h-display text-ivory text-[54px] sm:text-[72px] md:text-[92px] lg:text-[112px] leading-[0.95]">
            Where stillness<br />
            <span className="italic text-champagne/95">meets substance.</span>
          </h1>

          <p className="mt-8 max-w-xl text-ivory/85 text-lg md:text-xl font-light leading-relaxed">
            A boutique collection of serviced residences composed with architectural calm, warm materiality, and considered hospitality.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#book" className="btn-gold bg-champagne text-ink hover:bg-ivory">
              Reserve a Suite
            </a>
            <a href="#suites" className="btn-ghost">
              Explore Residences
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-ivory/70 text-[10px] uppercase tracking-widest-2">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-ivory/70 to-transparent" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 md:py-40 bg-ivory">
      <div className="container grid md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-5">
          <div className="sticky top-32">
            <div className="flex items-center gap-4 mb-6">
              <div className="hairline" />
              <span className="eyebrow">The Philosophy</span>
            </div>
            <h2 className="h-display text-5xl md:text-6xl lg:text-7xl text-ink">
              A residence, <br />
              <span className="italic text-champagne">not a room.</span>
            </h2>
          </div>
        </div>

        <div className="md:col-span-7 md:pt-4">
          <p className="h-display text-2xl md:text-3xl text-ink leading-[1.35] font-light">
            Every corner is composed with intention — from the slow curve of morning light across linen, to the warmth of stone underfoot. The Signature Suite is designed for the traveller who understands that the finest luxuries are quiet ones.
          </p>

          <p className="mt-8 text-muted2 text-base md:text-lg leading-relaxed max-w-xl">
            Seven residences. Two collections. One consistent belief: hospitality is what remains once everything unnecessary has been removed.
          </p>

          <div className="mt-14 grid grid-cols-3 gap-6 md:gap-10 border-t border-line pt-10">
            {[
              { k: '07', v: 'Residences' },
              { k: '02', v: 'Collections' },
              { k: '24h', v: 'Concierge' },
            ].map((s) => (
              <div key={s.v}>
                <div className="h-display text-4xl md:text-5xl text-ink">{s.k}</div>
                <div className="eyebrow mt-2">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Suites() {
  const executive = suites.filter((s) => s.collection === 'Executive Collection');
  const premium = suites.filter((s) => s.collection.startsWith('Livoraa'));

  const Card = ({ s, large }) => (
    <a
      href="#"
      className={`group block ${large ? 'md:col-span-8' : 'md:col-span-4'}`}
    >
      <div className="relative overflow-hidden bg-stone2 aspect-[4/5]">
        <img
          src={s.image}
          alt={s.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-70" />
        <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-widest-2 text-ivory/90 bg-ink/30 backdrop-blur-sm px-3 py-1.5">
            {s.collection}
          </span>
        </div>
        <div className="absolute bottom-6 left-6 right-6 text-ivory">
          <h3 className="h-display text-3xl md:text-4xl">{s.name}</h3>
          <p className="text-ivory/80 text-sm mt-1 font-light">{s.tagline}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 text-[12px] uppercase tracking-widest-2">
        <span className="text-muted2">
          {s.area} · {s.beds}
        </span>
        <span className="flex items-center gap-1.5 text-ink group-hover:text-champagne transition-colors">
          Discover <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
        </span>
      </div>
    </a>
  );

  return (
    <section id="suites" className="py-28 md:py-40 bg-stone2">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="hairline" />
              <span className="eyebrow">The Residences</span>
            </div>
            <h2 className="h-display text-5xl md:text-6xl lg:text-7xl text-ink">
              Two collections. <br />
              <span className="italic text-champagne">Seven residences.</span>
            </h2>
          </div>
          <p className="text-muted2 max-w-md text-base md:text-lg leading-relaxed">
            Each suite is an argument for restraint — designed to feel less like a hotel and more like the second home you always suspected existed.
          </p>
        </div>

        {/* Executive Collection */}
        <div className="mb-10 flex items-center gap-4">
          <span className="eyebrow text-ink">I. Executive Collection</span>
          <div className="flex-1 h-px bg-line" />
          <span className="eyebrow">04 Suites</span>
        </div>
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 mb-24">
          <Card s={executive[0]} large />
          <Card s={executive[1]} />
          <Card s={executive[2]} />
          <Card s={executive[3]} large />
        </div>

        {/* Premium Collection */}
        <div className="mb-10 flex items-center gap-4">
          <span className="eyebrow text-ink">II. Livoraa × The Signature Suite</span>
          <div className="flex-1 h-px bg-line" />
          <span className="eyebrow">03 Residences</span>
        </div>
        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          {premium.map((s, i) => (
            <div key={s.name} className="md:col-span-4">
              <Card s={s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-ivory py-16">
      <div className="container flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div>
          <h3 className="h-display text-4xl md:text-5xl">The Signature Suite</h3>
          <p className="text-ivory/60 mt-3 text-sm max-w-md">
            A boutique collection of serviced residences. More sections — Gallery, Amenities, Giving Back, Location, Reviews, FAQ, Contact — arrive in Phase 2 alongside the Sanity CMS.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="hairline" />
          <span className="eyebrow text-ivory/70">Phase 1 · Preview</span>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-ivory">
      <Navigation scrolled={scrolled} onOpen={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Hero />
      <About />
      <Suites />
      <Footer />
    </main>
  );
}

export default App;
