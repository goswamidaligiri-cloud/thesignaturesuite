'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Suites from '@/components/sections/Suites';
import Amenities from '@/components/sections/Amenities';
import Gallery from '@/components/sections/Gallery';
import GivingBack from '@/components/sections/GivingBack';
import Location from '@/components/sections/Location';
import Reviews from '@/components/sections/Reviews';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-ivory">
      <Navigation scrolled={scrolled} />
      <Hero />
      <About />
      <Experience />
      <Suites />
      <Amenities />
      <Gallery />
      <GivingBack />
      <Location />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
