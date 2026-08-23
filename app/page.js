// Homepage — async Server Component.
// Single GROQ round-trip to Sanity. Every section receives its data via
// props; every component internally hides itself if the data is missing.
import {sanityFetch} from '@/sanity/lib/client';
import {HOME_QUERY, HOME_TAGS} from '@/sanity/lib/queries';

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

export const revalidate = 60;

async function safeFetch() {
  try {
    return await sanityFetch({query: HOME_QUERY, tags: HOME_TAGS});
  } catch (err) {
    // On any Sanity error, render the site skeleton with no data instead
    // of surfacing a 500. Empty sections stay hidden per the CMS contract.
    console.error('[Sanity] HOME_QUERY failed:', err?.message || err);
    return {};
  }
}

export default async function HomePage() {
  const d = await safeFetch();

  const siteName = d?.siteSettings?.name || 'The Signature Suite';
  const siteTagline = d?.siteSettings?.tagline || 'Serviced Residences';
  const bookingUrl = d?.navigation?.primaryCta?.href || d?.siteSettings?.bookingUrl || '#book';

  return (
    <main className="min-h-screen bg-ivory">
      <Navigation
        nav={d?.navigation?.items || []}
        siteName={siteName}
        siteTagline={siteTagline}
        bookingUrl={bookingUrl}
      />
      <Hero data={d?.hero} />
      <About data={d?.about} />
      <Experience data={d?.experience} />
      <Suites meta={d?.suitesMeta} items={d?.suites || []} />
      <Amenities meta={d?.amenitiesMeta} items={d?.amenities || []} />
      <Gallery meta={d?.galleryMeta} images={d?.gallery || []} categories={d?.galleryCategories || []} />
      <GivingBack data={d?.givingBack} partners={d?.givingBackPartners || []} />
      <Location data={d?.location} nearby={d?.nearby || []} />
      <Reviews meta={d?.reviewsMeta} items={d?.reviews || []} />
      <FAQ meta={d?.faqMeta} items={d?.faqs || []} />
      <Contact data={d?.contact} />
      <Footer data={d?.footer} siteName={siteName} socials={d?.siteSettings?.socials || {}} />
    </main>
  );
}
